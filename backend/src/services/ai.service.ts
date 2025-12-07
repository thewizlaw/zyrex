import axios, { AxiosError } from "axios";
import { cleanAIJson } from "../utils/helper";

export class AIService {
  private apiKey: string;
  private baseURL: string = "https://openrouter.ai/api/v1/chat/completions";

  constructor(apiKey: string) {
    if (!apiKey || apiKey.trim() === '') {
      throw new Error('OpenRouter API key is required');
    }
    this.apiKey = apiKey;
    console.log('✅ AI Service initialized');
  }

  async generateWebsite(
    prompt: string,
    systemPrompt: string,
    projectSettings: any = {}
  ): Promise<any> {
    try {
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('🎯 AI GENERATION REQUEST');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('💬 User Prompt:', prompt);
      console.log('🎨 Project Settings Received:', JSON.stringify(projectSettings, null, 2));

      const userPrompt = `${prompt}

${Object.keys(projectSettings).length > 0 ? `Project Style Settings: ${JSON.stringify(projectSettings, null, 2)}` : ''}

Requirements:
- Automatically detect the most appropriate page type from the user's description
- Generate realistic, professional content
- Use appropriate sections for the detected page type
- Include complete, realistic data (product names, prices, descriptions, etc.)
- Follow the schema structure precisely
- Ensure all required fields are populated
- IMPORTANT: Use the EXACT colors provided in the style settings:
  * primary_color: ${projectSettings.primary_color || 'not provided'}
  * secondary_color: ${projectSettings.secondary_color || 'not provided'}
  * dark_mode: ${projectSettings.dark_mode || false}
  * font_family: ${projectSettings.font_family || 'not provided'}

Return ONLY the JSON structure, no explanations or markdown formatting.`;

      console.log('📤 User Prompt Sent to AI:', userPrompt);

      const response = await axios.post(
        this.baseURL,
        {
          model: "deepseek/deepseek-chat",
          messages: [
            {
              role: "system",
              content: systemPrompt
            },
            {
              role: "user",
              content: userPrompt
            }
          ],
          temperature: 0.7,
          max_tokens: 4000,
        },
        {
          headers: {
            "Authorization": `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": process.env.APP_URL || "http://localhost:5000",
            "X-Title": "COSMIC AI Website Generator"
          }
        }
      );

      const raw = response.data.choices[0].message.content;
      console.log('📝 Raw AI Response (first 500 chars):', raw.substring(0, 500));
      
      const cleaned = cleanAIJson(raw);
      console.log('🧹 Cleaned JSON (first 500 chars):', cleaned.substring(0, 500));
      
      const json = JSON.parse(cleaned);
      
      // LOG THE STYLES IN THE GENERATED JSON
      console.log('🎨 Styles in Generated JSON:', JSON.stringify(json.styles, null, 2));
      console.log('📄 AI Detected Page Type:', json.page_type || 'not specified');
      
      // VERIFY if AI is using the correct colors
      if (json.styles) {
        const mismatch = [];
        if (projectSettings.primary_color && json.styles.primary_color !== projectSettings.primary_color) {
          mismatch.push(`Primary: Expected ${projectSettings.primary_color}, Got ${json.styles.primary_color}`);
        }
        if (projectSettings.secondary_color && json.styles.secondary_color !== projectSettings.secondary_color) {
          mismatch.push(`Secondary: Expected ${projectSettings.secondary_color}, Got ${json.styles.secondary_color}`);
        }
        
        if (mismatch.length > 0) {
          console.warn('⚠️  COLOR MISMATCH DETECTED:');
          mismatch.forEach(msg => console.warn('   -', msg));
          console.log('🔧 FIXING: Overriding AI-generated styles with requested styles...');
          
          // FIX: Override AI-generated styles with the ones requested
          json.styles = {
            ...json.styles,
            primary_color: projectSettings.primary_color || json.styles.primary_color,
            secondary_color: projectSettings.secondary_color || json.styles.secondary_color,
            dark_mode: projectSettings.dark_mode ?? json.styles.dark_mode,
            font_family: projectSettings.font_family || json.styles.font_family
          };
          
          console.log('✅ Corrected Styles:', JSON.stringify(json.styles, null, 2));
        } else {
          console.log('✅ AI used correct colors');
        }
      } else {
        console.warn('⚠️  No styles in JSON, adding them...');
        json.styles = projectSettings;
        console.log('✅ Added styles to JSON:', JSON.stringify(json.styles, null, 2));
      }

      console.log(`✅ Successfully generated ${json.sections?.length || 0} sections`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      
      return json;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>;
        console.error("❌ OpenRouter API Error:", {
          status: axiosError.response?.status,
          statusText: axiosError.response?.statusText,
          data: axiosError.response?.data
        });
        
        if (axiosError.response?.status === 401) {
          throw {
            message: "Authentication failed",
            details: "Invalid or missing OpenRouter API key",
            status: 401
          };
        }
        
        if (axiosError.response?.status === 429) {
          throw {
            message: "Rate limit exceeded",
            details: "Too many requests. Please try again later.",
            status: 429
          };
        }
        
        throw {
          message: "AI generation failed",
          details: axiosError.response?.data?.error?.message || axiosError.message,
          status: axiosError.response?.status || 500
        };
      }
      
      throw {
        message: "AI generation failed",
        details: error instanceof Error ? error.message : "Unknown error"
      };
    }
  }
}