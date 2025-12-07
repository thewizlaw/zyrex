import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Monitor, Tablet, Smartphone, CheckCircle } from 'lucide-react';
import { generationApi, pageApi, type Project, type Template } from '../services/api';
import type { ViewMode, ViewportSize } from '../types';
import { Sidebar } from './layout/Sidebar';
import { Toolbar } from './layout/Toolbar';
import { PreviewFrame } from './preview/PreviewFrame';
import { JSONEditor } from './editor/JSONEditor';
import { LoadingSpinner } from '../common/LoadingSpinner';

const QUICK_PROMPTS = [
  "Create a modern e-commerce homepage for a fashion brand",
  "Build a product detail page for wireless headphones with reviews",
  "Design a shopping cart page with order summary",
  "Create a category page for electronics with filters and sorting",
];

interface Theme {
  name: string;
  primary: string;
  secondary: string;
  dark: boolean;
}

interface StyleOptions {
  themes: Theme[];
  fonts: string[];
}

interface PageItem {
  _id: string;
  title: string;
  slug: string;
  pageType: string;
  data: any;
  html: string;
  createdAt: string;
  updatedAt: string;
}

const STYLE_OPTIONS: StyleOptions = {
  themes: [
    { 
      name: "Professional", 
      primary: "#3b82f6",
      secondary: "#1e40af",
      dark: false 
    },
    { 
      name: "Creative", 
      primary: "#8b5cf6",
      secondary: "#ec4899",
      dark: false 
    },
    { 
      name: "Minimal", 
      primary: "#64748b",
      secondary: "#475569",
      dark: false 
    },
    { 
      name: "Warm", 
      primary: "#f59e0b",
      secondary: "#ef4444",
      dark: false 
    },
    { 
      name: "Nature", 
      primary: "#10b981",
      secondary: "#059669",
      dark: false 
    },
    { 
      name: "Elegant", 
      primary: "#ec4899",
      secondary: "#8b5cf6",
      dark: true 
    },
  ],
  fonts: [
    "Inter, sans-serif",
    "Roboto, sans-serif",
    "Poppins, sans-serif",
    "Montserrat, sans-serif",
    "Open Sans, sans-serif",
  ]
};

const VIEWPORT_SIZES: ViewportSize[] = [
  { name: "Desktop", icon: Monitor, width: "100%", label: "1920px" },
  { name: "Laptop", icon: Monitor, width: "1366px", label: "1366px" },
  { name: "Tablet", icon: Tablet, width: "768px", label: "768px" },
  { name: "Mobile", icon: Smartphone, width: "375px", label: "375px" },
];

const WebsiteBuilder: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { project, template } = (location.state || {}) as { 
    project?: Project; 
    template?: Template;
  };

  const [prompt, setPrompt] = useState("");
  const [html, setHtml] = useState("");
  const [jsonData, setJsonData] = useState<any>(null);
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedFont, setSelectedFont] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);
  const [viewportIndex, setViewportIndex] = useState(0);
  const [appDarkMode, setAppDarkMode] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('preview');
  const [validationMessage, setValidationMessage] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [createdPages, setCreatedPages] = useState<PageItem[]>([]);
  const [loadingPages, setLoadingPages] = useState(false);

  // Redirect if no project data
  useEffect(() => {
    if (!project || !template) {
      console.error('❌ No project or template data found');
      navigate('/dashboard', { replace: true });
    } else {
      console.log('✅ Project loaded in editor:', {
        projectId: project._id,
        projectName: project.name,
        templateCategory: template.category,
        templateSlug: template.slug
      });
      // Load pages for this project
      loadProjectPages();
    }
  }, [project, template, navigate]);

  // Load template prompt from localStorage if available
  useEffect(() => {
    const templatePrompt = localStorage.getItem('templatePrompt');
    if (templatePrompt) {
      console.log('📝 Loading saved prompt:', templatePrompt);
      setPrompt(templatePrompt);
      localStorage.removeItem('templatePrompt');
    }
  }, []);

  // Load pages for the project
  const loadProjectPages = async () => {
    if (!project) {
      console.warn('⚠️ No project available to load pages');
      return;
    }
    
    setLoadingPages(true);
    try {
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📄 Loading pages for project:', project._id);
      console.log('📦 Project Name:', project.name);
      console.log('🎨 Template:', `${project.templateCategory}/${project.templateSlug}`);
      
      // Use the better API endpoint for fetching project pages
      const response = await pageApi.getByProject(project._id);
      
      console.log('📡 API Response:', {
        success: response.success,
        count: response.count,
        dataLength: response.data?.length
      });
      
      if (response.success && response.data) {
        console.log(`✅ Loaded ${response.data.length} pages for project`);
        if (response.data.length > 0) {
          console.log('📋 Pages found:');
          response.data.forEach((p: PageItem, idx: number) => {
            console.log(`  ${idx + 1}. ${p.title} (${p.pageType}) - ID: ${p._id}`);
          });
        } else {
          console.log('📭 No pages exist for this project yet');
        }
        setCreatedPages(response.data);
      } else {
        console.log('⚠️ API returned no data');
        setCreatedPages([]);
      }
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    } catch (err: any) {
      console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.error('❌ Failed to load pages:', err);
      console.error('Error details:', err.message);
      console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      setCreatedPages([]);
      setError(`Failed to load pages: ${err.message}`);
    } finally {
      setLoadingPages(false);
    }
  };

  // Handle back to dashboard
  const handleBackToDashboard = () => {
    console.log('⬅️ Returning to dashboard');
    navigate('/dashboard');
  };

  // Handle page preview
  const handlePagePreview = (page: PageItem) => {
    console.log('👁️ Previewing page:', page.title);
    setHtml(page.html);
    setJsonData(page.data);
    setViewMode('preview');
    setValidationMessage(`✓ Loaded: ${page.title}`);
    setTimeout(() => setValidationMessage(""), 2000);
  };

  // Handle page delete
  const handlePageDelete = async (pageId: string) => {
    console.log('🗑️ Deleting page:', pageId);
    setLoading(true);
    
    try {
      const response = await pageApi.delete(pageId);
      
      if (response.success) {
        console.log('✅ Page deleted successfully');
        setValidationMessage("✓ Page deleted successfully!");
        
        // Remove from local state
        setCreatedPages(prev => prev.filter(p => p._id !== pageId));
        
        // Clear preview if it was the deleted page
        const deletedPage = createdPages.find(p => p._id === pageId);
        if (deletedPage && html === deletedPage.html) {
          setHtml("");
          setJsonData(null);
        }
        
        setTimeout(() => setValidationMessage(""), 2000);
      } else {
        throw new Error(response.error || 'Delete failed');
      }
    } catch (err: any) {
      console.error('❌ Delete error:', err);
      setError(err.message || 'Failed to delete page');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = async () => {
    if (!project || !template) {
      const errorMsg = 'Project or template data missing';
      console.error('❌', errorMsg);
      setError(errorMsg);
      return;
    }
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🚀 GENERATION STARTED');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    // Get selected theme
    const theme = STYLE_OPTIONS.themes[selectedTheme];
    
    // Create style object with snake_case for backend API
    const style = {
      primary_color: theme.primary,
      secondary_color: theme.secondary,
      dark_mode: darkMode || theme.dark,
      font_family: STYLE_OPTIONS.fonts[selectedFont],
    };

    const requestPayload = {
      projectId: project._id,
      templateCategory: template.category,
      templateSlug: template.slug,
      prompt: prompt,
      style: style
    };

    setLoading(true);
    setError(null);

    try {
      console.log('⏳ Calling generationApi.generatePage...');
      const response = await generationApi.generatePage(requestPayload);

      if (response.success && response.data) {
        setHtml(response.data.html || '');
        setJsonData(response.data.json);
        setValidationMessage("✓ Page generated successfully!");
        
        console.log('✅ Generation Complete!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        
        setTimeout(() => setValidationMessage(""), 3000);
      } else {
        throw new Error(response.error || 'Generation failed');
      }
    } catch (err: any) {
      console.error('❌ Generation Error:', err);
      setError(err.message || 'Failed to generate page');
    } finally {
      setLoading(false);
    }
  };

  const handleApplyChanges = async () => {
    if (!template) return;

    console.log('🔄 Applying JSON changes...');
    setLoading(true);
    setError(null);

    try {
      const response = await generationApi.renderFromJSON({
        data: jsonData,
        templateCategory: template.category,
        templateSlug: template.slug
      });

      if (response.success) {
        console.log('✅ Changes applied successfully');
        setHtml(response.html || '');
        setValidationMessage("✓ Changes applied successfully!");
        setTimeout(() => setValidationMessage(""), 3000);
      } else {
        throw new Error(response.error || 'Rendering failed');
      }
    } catch (err: any) {
      console.error('❌ Apply changes error:', err);
      setError(err.message || 'Failed to apply changes');
    } finally {
      setLoading(false);
    }
  };

  const handleSavePage = async () => {
    if (!project || !template || !jsonData) {
      setError('Missing required data to save page');
      return;
    }

    console.log('💾 Saving page...');
    setLoading(true);
    setError(null);

    try {
      // Determine page type from JSON data
      const pageType = jsonData.page_type || 'custom';
      const slug = pageType === 'homepage' ? 'home' : pageType;
      
      const response = await pageApi.save({
        title: `${pageType.charAt(0).toUpperCase() + pageType.slice(1)} Page`,
        slug: slug,
        projectId: project._id,
        templateCategory: template.category,
        templateSlug: template.slug,
        pageType: pageType,
        data: jsonData
      });

      if (response.success) {
        console.log('✅ Page saved successfully');
        setSaveSuccess(true);
        setValidationMessage("✓ Page saved successfully!");
        
        // Reload pages list
        await loadProjectPages();
        
        setTimeout(() => {
          setSaveSuccess(false);
          setValidationMessage("");
        }, 3000);
      } else {
        throw new Error(response.error || 'Save failed');
      }
    } catch (err: any) {
      console.error('❌ Save error:', err);
      setError(err.message || 'Failed to save page');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveJSON = () => {
    try {
      console.log('📥 Downloading JSON...');
      const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "website-config.json";
      a.click();
      URL.revokeObjectURL(url);
      
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
      console.log('✅ JSON downloaded');
    } catch (err: any) {
      console.error('❌ Save JSON error:', err);
      setError('Failed to save JSON file');
    }
  };

  const handleLoadJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    console.log('📤 Loading JSON file:', file.name);
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = JSON.parse(text);
        console.log('✅ JSON parsed successfully:', parsed);
        setJsonData(parsed);
        setError(null);
        
        await handleApplyChanges();
      } catch (err: any) {
        console.error('❌ Invalid JSON file:', err);
        setError('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  };

  const handleQuickPrompt = (quickPrompt: string) => {
    console.log('⚡ Quick prompt selected:', quickPrompt);
    setPrompt(quickPrompt);
  };

  const handleCopyCode = () => {
    console.log('📋 Copying HTML code...');
    const textarea = document.createElement('textarea');
    textarea.value = html;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
      console.log('✅ Code copied to clipboard');
    } catch (err) {
      console.error('❌ Failed to copy:', err);
    }
    document.body.removeChild(textarea);
  };

  const handleDownload = () => {
    console.log('📥 Downloading HTML file...');
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "generated-website.html";
    a.click();
    URL.revokeObjectURL(url);
    console.log('✅ HTML file downloaded');
  };

  const clearError = () => {
    console.log('🗑️ Clearing error');
    setError(null);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <LoadingSpinner 
          message={viewMode === 'json' ? 'Applying Changes' : 'Crafting Your Website'}
          darkMode={appDarkMode}
        />
      );
    }

    if (viewMode === 'json' && jsonData) {
      return (
        <JSONEditor
          jsonData={jsonData}
          onJsonChange={setJsonData}
          onSave={handleSaveJSON}
          onLoad={handleLoadJSON}
          onApply={handleApplyChanges}
          loading={loading}
          darkMode={appDarkMode}
          saveSuccess={saveSuccess}
        />
      );
    }

    if (html) {
      return (
        <PreviewFrame
          html={html}
          viewport={VIEWPORT_SIZES[viewportIndex]}
          darkMode={appDarkMode}
        />
      );
    }

    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
            <span className="text-3xl">✨</span>
          </div>
          <p className={`text-lg font-medium ${appDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Ready to create something amazing?
          </p>
          <p className={`text-sm ${appDarkMode ? 'text-gray-500' : 'text-gray-500'} mt-2`}>
            {createdPages.length > 0 
              ? `You have ${createdPages.length} page${createdPages.length > 1 ? 's' : ''} in this project. View them in the Pages tab or create a new one.`
              : 'Describe what you want to create, select a theme, and click Generate'
            }
          </p>
          <p className={`text-xs ${appDarkMode ? 'text-gray-600' : 'text-gray-400'} mt-3`}>
            AI will automatically detect the page type from your description
          </p>
        </div>
      </div>
    );
  };

  const bgBase = appDarkMode ? 'bg-[#09090b]' : 'bg-white';
  const contentBg = appDarkMode ? 'bg-[#18181b]' : 'bg-gray-100';

  if (!project || !template) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#09090b]">
        <LoadingSpinner message="Loading project..." darkMode={true} />
      </div>
    );
  }

  return (
    <div className={`flex h-screen ${bgBase} font-sans`}>
      {/* Sidebar */}
      <Sidebar
        appDarkMode={appDarkMode}
        onAppDarkModeChange={setAppDarkMode}
        prompt={prompt}
        onPromptChange={setPrompt}
        quickPrompts={QUICK_PROMPTS}
        onQuickPrompt={handleQuickPrompt}
        styleOptions={STYLE_OPTIONS}
        selectedTheme={selectedTheme}
        onThemeChange={setSelectedTheme}
        darkMode={darkMode}
        onDarkModeChange={setDarkMode}
        selectedFont={selectedFont}
        onFontChange={setSelectedFont}
        error={error}
        onErrorDismiss={clearError}
        loading={loading}
        onGenerate={handleGenerate}
        projectName={project.name}
        templateName={template.name}
        createdPages={createdPages}
        onPagePreview={handlePagePreview}
        onPageDelete={handlePageDelete}
      />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <Toolbar
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          html={html}
          jsonData={jsonData}
          viewports={VIEWPORT_SIZES}
          currentViewport={viewportIndex}
          onViewportChange={setViewportIndex}
          darkMode={appDarkMode}
          onCopyCode={handleCopyCode}
          onDownload={handleDownload}
          copySuccess={copySuccess}
          onLoadJSON={handleLoadJSON}
          onSaveJSON={handleSaveJSON}
          onApplyChanges={handleApplyChanges}
          loading={loading}
          saveSuccess={saveSuccess}
          onSavePage={handleSavePage}
          appDarkMode={appDarkMode}
          onAppDarkModeChange={setAppDarkMode}
          onGenerate={handleGenerate}
          prompt={prompt}
          projectName={project.name}
          templateName={template.name}
          onBack={handleBackToDashboard}
        />

        {/* Main content */}
        <div className={`flex-1 ${contentBg} p-6 overflow-auto transition-colors duration-200`}>
          {renderContent()}
        </div>

        {/* Validation message */}
        {validationMessage && (
          <div className="fixed bottom-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-slide-up">
            <CheckCircle size={16} />
            {validationMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default WebsiteBuilder;