import { Request, Response } from "express";
import { AIService } from "../services/ai.service";
import { getTemplateBySlug } from "../config/template-registry";
import { Project } from "../models/Project.model";
import { Page } from "../models/Page.model";
import { cleanAIJson } from "../utils/helper";

const getAIService = (): AIService => {
    const apiKey = process.env.OPENROUTER_KEY;
    if (!apiKey) {
        throw new Error('OPENROUTER_KEY is not configured');
    }
    return new AIService(apiKey);
};

export const generateWebsite = async (req: Request, res: Response) => {
    try {
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🚀 GENERATION CONTROLLER RECEIVED REQUEST');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        
        const { 
            projectId, 
            templateCategory, 
            templateSlug,
            prompt,
            style  // ✅ Extract style from request body (snake_case from frontend)
        } = req.body;
        
        const userId = (req as any).userId;

        console.log('📦 Request Body:', {
            projectId,
            templateCategory,
            templateSlug,
            prompt: prompt?.substring(0, 100),
            style: JSON.stringify(style, null, 2)
        });

        // Validate required fields (NO pageType required anymore)
        if (!projectId || !templateCategory || !templateSlug || !prompt) {
            console.error('❌ Missing required fields');
            return res.status(400).json({
                success: false,
                error: "Missing required fields: projectId, templateCategory, templateSlug, prompt"
            });
        }

        // Validate project ownership
        const project = await Project.findOne({ _id: projectId, userId });
        if (!project) {
            console.error('❌ Project not found or access denied');
            return res.status(404).json({
                success: false,
                error: "Project not found or access denied"
            });
        }

        console.log('✅ Project found:', project.name);
        console.log('📦 Project settings (camelCase):', JSON.stringify(project.settings, null, 2));

        // Get template configuration
        const template = getTemplateBySlug(templateCategory, templateSlug);
        if (!template) {
            console.error('❌ Invalid template');
            return res.status(400).json({
                success: false,
                error: "Invalid template"
            });
        }

        console.log('✅ Template loaded:', template.name);
        console.log(`🎯 Generating page for project: ${projectId}`);
        console.log(`📦 Using template: ${templateCategory}/${templateSlug}`);
        console.log(`🤖 AI will auto-detect page type from prompt`);

        // ✅ Handle both naming conventions
        // Frontend sends snake_case, Project model uses camelCase
        // Priority: request style (snake_case) > project settings (camelCase) > defaults
        const styleSettings = {
            // Convert from snake_case (request) OR camelCase (project) to snake_case (AI/renderer)
            primary_color: style?.primary_color || project.settings?.primaryColor || '#3b82f6',
            secondary_color: style?.secondary_color || project.settings?.secondaryColor || '#8b5cf6',
            dark_mode: style?.dark_mode ?? project.settings?.darkMode ?? false,
            font_family: style?.font_family || project.settings?.fontFamily || 'Inter, sans-serif'
        };

        console.log('🎨 Style from request (snake_case):', JSON.stringify(style, null, 2));
        console.log('🎨 Final Style Settings to AI (snake_case):', JSON.stringify(styleSettings, null, 2));

        // Generate JSON using AI (AI will determine page type from prompt)
        const aiService = getAIService();
        const json = await aiService.generateWebsite(
            prompt,
            template.systemPrompt,
            styleSettings  // ✅ Pass merged styleSettings in snake_case
        );

        console.log('✅ AI generation complete');
        console.log('🎨 Styles in returned JSON:', JSON.stringify(json.styles, null, 2));
        console.log('📄 Detected page type:', json.page_type || 'unknown');

        // Render HTML using template engine
        console.log('🎨 Rendering HTML...');
        const html = template.engine(json);
        console.log('✅ HTML rendered, length:', html.length);

        console.log("✨ Page generation complete!");
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

        res.json({
            success: true,
            data: {
                json,
                html,
                template: {
                    category: templateCategory,
                    slug: templateSlug,
                    name: template.name
                },
                stats: {
                    pageType: json.page_type || 'auto-detected',
                    sectionsCount: json.sections?.length || 0
                }
            }
        });

    } catch (err: any) {
        console.error("❌ Generation Error:", {
            message: err.message,
            stack: err.stack
        });
        res.status(500).json({
            success: false,
            error: "Generation failed",
            details: err.message
        });
    }
};

export const renderFromJSON = async (req: Request, res: Response) => {
    try {
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🔄 RENDER FROM JSON REQUEST');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        
        const { data, templateCategory, templateSlug } = req.body;

        if (!data || !templateCategory || !templateSlug) {
            console.error('❌ Missing required fields');
            return res.status(400).json({
                success: false,
                error: "Missing required fields: data, templateCategory, templateSlug"
            });
        }

        console.log('📦 Request:', {
            templateCategory,
            templateSlug,
            hasData: !!data,
            styles: JSON.stringify(data.styles, null, 2)
        });

        const template = getTemplateBySlug(templateCategory, templateSlug);
        if (!template) {
            console.error('❌ Invalid template');
            return res.status(400).json({
                success: false,
                error: "Invalid template"
            });
        }

        console.log('✅ Template loaded:', template.name);
        console.log('🎨 Rendering HTML from JSON...');
        
        const html = template.engine(data);
        
        console.log('✅ Render complete, HTML length:', html.length);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

        res.json({
            success: true,
            html,
            stats: {
                sectionsCount: data.sections?.length || 0
            }
        });

    } catch (err: any) {
        console.error("❌ Render Error:", {
            message: err.message,
            stack: err.stack
        });
        res.status(500).json({
            success: false,
            error: "Rendering failed",
            details: err.message
        });
    }
};