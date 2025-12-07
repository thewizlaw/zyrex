import React, { useState } from 'react';
import { 
  Sparkles, 
  Sun, 
  Moon, 
  Search, 
  Plus, 
  ChevronDown, 
  FileText, 
  Settings, 
  ChevronRight,
  EyeOff,
  PanelLeft,
  PanelRight,
  MousePointer2,
  ImageIcon,
  Folder,
  FolderOpen,
  Zap,
  Eye,
  Trash2,
  MoreVertical
} from 'lucide-react';
import type { StyleOptions } from '../../types';
import { StyleControls } from '../editor/StyleControls';
import { ErrorAlert } from '../../common/ErrorAlert';

interface PageItem {
  _id: string;
  title: string;
  slug: string;
  pageType: string;
  createdAt: string;
  updatedAt: string;
}

interface SidebarProps {
  appDarkMode: boolean;
  onAppDarkModeChange: (darkMode: boolean) => void;
  prompt: string;
  onPromptChange: (prompt: string) => void;
  quickPrompts: string[];
  onQuickPrompt: (prompt: string) => void;
  styleOptions: StyleOptions;
  selectedTheme: number;
  onThemeChange: (index: number) => void;
  darkMode: boolean;
  onDarkModeChange: (darkMode: boolean) => void;
  selectedFont: number;
  onFontChange: (index: number) => void;
  error: string;
  onErrorDismiss: () => void;
  loading: boolean;
  onGenerate: () => void;
  position?: 'left' | 'right';
  onPositionChange?: (position: 'left' | 'right') => void;
  createdPages?: PageItem[];
  onPagePreview?: (page: PageItem) => void;
  onPageDelete?: (pageId: string) => void;
  projectName?: string;
  templateName?: string;
}

// Custom hook to handle collapsible state for the file tree sections
const useSectionToggle = () => {
  const [sections, setSections] = useState({
    create: true,
    pages: true,
    design: true,
  });

  const toggleSection = (section: 'create' | 'pages' | 'design') => {
    setSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return { sections, toggleSection };
};

// Page type icons and labels
const PAGE_TYPE_INFO: Record<string, { icon: string; label: string; color: string }> = {
  homepage: { icon: '🏠', label: 'Homepage', color: 'text-blue-500' },
  category: { icon: '📂', label: 'Category', color: 'text-purple-500' },
  product: { icon: '📦', label: 'Product', color: 'text-green-500' },
  cart: { icon: '🛒', label: 'Cart', color: 'text-orange-500' },
  checkout: { icon: '💳', label: 'Checkout', color: 'text-pink-500' },
  account: { icon: '👤', label: 'Account', color: 'text-indigo-500' },
  custom: { icon: '📄', label: 'Custom', color: 'text-gray-500' }
};

export const Sidebar: React.FC<SidebarProps> = ({
  appDarkMode,
  onAppDarkModeChange,
  prompt,
  onPromptChange,
  quickPrompts,
  onQuickPrompt,
  styleOptions,
  selectedTheme,
  onThemeChange,
  darkMode,
  onDarkModeChange,
  selectedFont,
  onFontChange,
  error,
  onErrorDismiss,
  loading,
  onGenerate,
  position = 'left',
  onPositionChange,
  createdPages = [],
  onPagePreview,
  onPageDelete,
  projectName,
  templateName
}) => {
  const { sections, toggleSection } = useSectionToggle();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<'create' | 'pages' | 'assets'>('create');
  const [hoveredPage, setHoveredPage] = useState<string | null>(null);

  // Framer-like colors and styles
  const bgBase = appDarkMode ? 'bg-[#09090b]' : 'bg-white';
  const bgHover = appDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/5';
  const bgActive = appDarkMode ? 'bg-white/10' : 'bg-black/5';
  const borderColor = appDarkMode ? 'border-[#27272a]' : 'border-gray-200';
  const textColor = appDarkMode ? 'text-[#a1a1aa]' : 'text-gray-500';
  const textActive = appDarkMode ? 'text-white' : 'text-black';
  const inputBg = appDarkMode ? 'bg-[#18181b]' : 'bg-gray-50';

  // Side positioning based on prop
  const borderSide = position === 'left' ? 'border-r' : 'border-l';

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Collapsed Sidebar View (Fixed width 40px)
  if (isCollapsed) {
    return (
      <div className={`w-10 flex flex-col h-full ${borderSide} ${borderColor} ${bgBase} text-[11px] font-sans transition-all duration-200`}>
        {/* Collapsed Top Bar */}
        <div className={`h-10 flex items-center justify-center border-b ${borderColor} shrink-0`}>
          <button 
            onClick={() => setIsCollapsed(false)}
            className={`p-1 rounded ${bgHover} ${textColor} hover:${textActive}`}
            title="Expand Sidebar"
          >
            {position === 'left' ? <ChevronRight className="w-4 h-4" /> : <ChevronRight className="w-4 h-4 rotate-180" />}
          </button>
        </div>

        {/* Collapsed Navigation */}
        <div className="flex-1 flex flex-col items-center py-3 space-y-2">
          <button 
            className={`p-1.5 rounded ${activeTab === 'create' ? bgActive + ' ' + textActive : bgHover + ' ' + textColor}`} 
            title="Create"
            onClick={() => setActiveTab('create')}
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button 
            className={`p-1.5 rounded ${activeTab === 'pages' ? bgActive + ' ' + textActive : bgHover + ' ' + textColor}`} 
            title="Pages"
            onClick={() => setActiveTab('pages')}
          >
            <FileText className="w-4 h-4" />
          </button>
          <button 
            className={`p-1.5 rounded ${activeTab === 'assets' ? bgActive + ' ' + textActive : bgHover + ' ' + textColor}`} 
            title="Assets"
            onClick={() => setActiveTab('assets')}
          >
            <ImageIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Side position toggle in collapsed mode */}
        {onPositionChange && (
          <div className={`p-1.5 border-t ${borderColor}`}>
            <button
              onClick={() => onPositionChange(position === 'left' ? 'right' : 'left')}
              className={`w-full p-1 rounded ${bgHover} ${textColor} hover:${textActive}`}
              title={`Move to ${position === 'left' ? 'right' : 'left'}`}
            >
              {position === 'left' ? <PanelRight className="w-4 h-4" /> : <PanelLeft className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* Collapsed Generate Button */}
        <div className={`p-1.5 border-t ${borderColor}`}>
          <button
            onClick={onGenerate}
            disabled={loading || !prompt.trim()}
            className="w-full aspect-square bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-700 disabled:text-zinc-500 text-white rounded transition-all duration-200 flex items-center justify-center shadow-md shadow-blue-600/30 disabled:shadow-none"
            title="Generate Site"
          >
            {loading ? (
              <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4 fill-white/20" />
            )}
          </button>
        </div>
      </div>
    );
  }

  // Expanded Sidebar View (Fixed width 240px)
  return (
    <div className={`w-[240px] flex flex-col h-full ${borderSide} ${borderColor} ${bgBase} text-[11px] font-sans selection:bg-blue-500/30 transition-all duration-200`}>
      
      {/* Top Toolbar (Compact Framer Style) */}
      <div className={`h-10 flex items-center px-2 border-b ${borderColor} justify-between shrink-0`}>
        <div className="flex items-center gap-1.5">
          {/* Project Menu */}
          <button className={`flex items-center gap-1.5 px-1.5 py-1 rounded ${bgHover} transition-colors ${textActive}`}>
            <div className="w-4 h-4 bg-white text-black rounded flex items-center justify-center">
              <span className="font-bold text-[9px]">F</span>
            </div>
            <span className="font-medium text-[11px]">Zyrex</span>
            <ChevronDown className={`w-3 h-3 ${textColor}`} />
          </button>
          
          <div className={`h-3 w-[1px] ${appDarkMode ? 'bg-white/10' : 'bg-black/10'}`} />

          {/* Tool Icons */}
          <div className="flex items-center gap-0.5">
            <button className={`p-1 rounded ${bgHover} ${textColor} hover:${textActive}`} title="Insert">
              <Plus className="w-3.5 h-3.5" />
            </button>
            <button className={`p-1 rounded ${bgHover} ${textColor} hover:${textActive}`} title="Select Tool">
              <MousePointer2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        
        {/* Action Buttons: Position, Theme, Collapse */}
        <div className="flex items-center gap-0.5">
          {onPositionChange && (
            <button
              onClick={() => onPositionChange(position === 'left' ? 'right' : 'left')}
              className={`p-1 rounded ${bgHover} ${textColor} hover:${textActive}`}
              title={`Move to ${position === 'left' ? 'right' : 'left'}`}
            >
              {position === 'left' ? <PanelRight className="w-3.5 h-3.5" /> : <PanelLeft className="w-3.5 h-3.5" />}
            </button>
          )}
          <button
            onClick={() => onAppDarkModeChange(!appDarkMode)}
            className={`p-1 rounded ${bgHover} ${textColor} hover:${textActive}`}
            title="Toggle Theme"
          >
            {appDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsCollapsed(true)}
            className={`p-1 rounded ${bgHover} ${textColor} hover:${textActive}`}
            title="Collapse Sidebar"
          >
            <EyeOff className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className={`flex px-1.5 pt-2 pb-1.5 border-b ${borderColor} shrink-0 gap-0.5`}>
        <button 
          className={`flex-1 py-1.5 rounded text-center font-medium ${activeTab === 'create' ? bgActive + ' ' + textActive : textColor + ' ' + bgHover} text-[11px]`}
          onClick={() => setActiveTab('create')}
        >
          Create
        </button>
        <button 
          className={`flex-1 py-1.5 rounded text-center font-medium relative ${activeTab === 'pages' ? bgActive + ' ' + textActive : textColor + ' ' + bgHover} text-[11px]`}
          onClick={() => setActiveTab('pages')}
        >
          Pages
          {createdPages.length > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white text-[9px] rounded-full flex items-center justify-center">
              {createdPages.length}
            </span>
          )}
        </button>
        <button 
          className={`flex-1 py-1.5 rounded text-center font-medium ${activeTab === 'assets' ? bgActive + ' ' + textActive : textColor + ' ' + bgHover} text-[11px]`}
          onClick={() => setActiveTab('assets')}
        >
          Assets
        </button>
      </div>

      {/* Main Scrollable Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        
        {/* CREATE TAB CONTENT */}
        {activeTab === 'create' && (
          <>
            {/* Project Info */}
            {(projectName || templateName) && (
              <div className="p-2 border-b border-[#27272a]">
                <div className={`text-xs ${textColor}`}>
                  {projectName && <div className="font-medium">{projectName}</div>}
                  {templateName && <div>{templateName}</div>}
                </div>
              </div>
            )}

            {/* Search / Prompt Area */}
            <div className="p-2">
              <div className={`relative group rounded border ${borderColor} focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/20 transition-all duration-200`}>
                <div className={`absolute top-2 left-2 ${textColor}`}>
                  <Search className="w-3 h-3" />
                </div>
                <textarea
                  value={prompt}
                  onChange={(e) => onPromptChange(e.target.value)}
                  placeholder="Describe what you want to create..."
                  className={`w-full pl-7 pr-2 py-2 rounded text-[11px] resize-none outline-none min-h-[70px] ${inputBg} ${textActive} placeholder:${textColor} transition-colors duration-200`}
                  style={{ lineHeight: '1.3' }}
                />
              </div>
              <p className={`text-[10px] ${textColor} mt-1.5 px-1`}>
                💡 AI will automatically detect the page type from your description
              </p>
            </div>

            {/* Quick Prompts */}
            <div className="px-2 pb-2">
              <p className="text-xs font-medium text-gray-500 mb-2">Quick Start:</p>
              <div className="space-y-1">
                {quickPrompts.map((qp, idx) => (
                  <button
                    key={idx}
                    onClick={() => onQuickPrompt(qp)}
                    className={`w-full text-left px-2 py-1.5 rounded text-[11px] ${bgHover} 
                      ${textColor} hover:${textActive} transition-colors flex items-center gap-1.5`}
                  >
                    <Zap className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                    <span className="truncate">{qp}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={`h-[1px] mx-3 my-2 ${appDarkMode ? 'bg-white/5' : 'bg-black/5'}`} />

            {/* Design Controls Section */}
            <div className="mb-3">
              <button 
                onClick={() => toggleSection('design')}
                className={`w-full flex items-center justify-between px-3 py-1.5 ${textColor} ${bgHover} group transition-colors duration-200`}
              >
                <div className="flex items-center gap-1.5">
                  <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${sections.design ? 'rotate-90' : ''}`} />
                  <span className="font-semibold text-[10px] uppercase tracking-wide">Design</span>
                </div>
                <Settings className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </button>

              {sections.design && (
                <div className="px-2 pt-1">
                  <StyleControls
                    styleOptions={styleOptions}
                    selectedTheme={selectedTheme}
                    onThemeChange={onThemeChange}
                    darkMode={darkMode}
                    onDarkModeChange={onDarkModeChange}
                    selectedFont={selectedFont}
                    onFontChange={onFontChange}
                    appDarkMode={appDarkMode}
                    compact={true}
                  />
                </div>
              )}
            </div>
          </>
        )}

        {/* PAGES TAB CONTENT */}
        {activeTab === 'pages' && (
          <div className="p-2">
            <div className="mb-3">
              <button 
                onClick={() => toggleSection('pages')}
                className={`w-full flex items-center justify-between px-3 py-1.5 ${textColor} ${bgHover} group transition-colors duration-200`}
              >
                <div className="flex items-center gap-1.5">
                  <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${sections.pages ? 'rotate-90' : ''}`} />
                  <span className="font-semibold text-[10px] uppercase tracking-wide">
                    Project Pages {createdPages.length > 0 && `(${createdPages.length})`}
                  </span>
                </div>
                <FolderOpen className="w-3 h-3 opacity-60" />
              </button>
              
              {sections.pages && (
                <div className="px-1.5 space-y-1 mt-1">
                  {createdPages.length > 0 ? (
                    createdPages.map((page) => {
                      const pageInfo = PAGE_TYPE_INFO[page.pageType] || PAGE_TYPE_INFO.custom;
                      const isHovered = hoveredPage === page._id;
                      
                      return (
                        <div
                          key={page._id}
                          onMouseEnter={() => setHoveredPage(page._id)}
                          onMouseLeave={() => setHoveredPage(null)}
                          className={`group relative rounded ${bgHover} transition-all duration-200`}
                        >
                          <div className="flex items-center gap-2 px-2 py-2">
                            {/* Page Icon */}
                            <div className="shrink-0 text-base">
                              {pageInfo.icon}
                            </div>
                            
                            {/* Page Info */}
                            <div className="flex-1 min-w-0">
                              <div className={`font-medium text-[11px] truncate ${textActive}`}>
                                {page.title}
                              </div>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className={`text-[9px] ${pageInfo.color}`}>
                                  {pageInfo.label}
                                </span>
                                <span className={`text-[9px] ${textColor}`}>•</span>
                                <span className={`text-[9px] ${textColor}`}>
                                  {formatDate(page.updatedAt)}
                                </span>
                              </div>
                            </div>

                            {/* Action Buttons (Show on hover) */}
                            {isHovered && (
                              <div className="flex items-center gap-0.5 shrink-0">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onPagePreview?.(page);
                                  }}
                                  className={`p-1 rounded ${bgHover} ${textColor} hover:text-blue-400 transition-colors`}
                                  title="Preview page"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (window.confirm(`Delete "${page.title}"?`)) {
                                      onPageDelete?.(page._id);
                                    }
                                  }}
                                  className={`p-1 rounded ${bgHover} ${textColor} hover:text-red-400 transition-colors`}
                                  title="Delete page"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className={`px-2 py-6 text-center ${textColor}`}>
                      <FileText className="w-8 h-8 mx-auto mb-2 opacity-40" />
                      <div className="text-[11px] font-medium mb-1">No pages yet</div>
                      <div className="text-[10px] opacity-70 mb-3">
                        Create your first page to get started
                      </div>
                      <button
                        onClick={() => setActiveTab('create')}
                        className="text-[10px] text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Go to Create tab →
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ASSETS TAB CONTENT */}
        {activeTab === 'assets' && (
          <div className="p-4 text-center">
            <ImageIcon className="w-8 h-8 mx-auto mb-2 text-gray-500 opacity-40" />
            <div className={`${textColor} text-[11px] font-medium mb-1`}>
              Assets Management
            </div>
            <div className={`${textColor} text-[10px] opacity-70`}>
              Coming soon...
            </div>
          </div>
        )}

        {error && (
          <div className="px-2">
            <ErrorAlert 
              error={error} 
              darkMode={appDarkMode}
              onDismiss={onErrorDismiss}
              compact={true}
            />
          </div>
        )}
      </div>

      {/* Bottom Actions (Generate Button) - Only show in Create tab */}
      {activeTab === 'create' && (
        <div className={`p-2 border-t ${borderColor} ${bgBase}`}>
          <button
            onClick={onGenerate}
            disabled={loading || !prompt.trim()}
            className="w-full h-8 bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-700 disabled:text-zinc-500 text-white font-semibold rounded transition-all duration-200 flex items-center justify-center gap-1.5 text-[11px] shadow-lg shadow-blue-600/30 disabled:shadow-none group"
          >
            {loading ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 fill-white/20 group-hover:scale-110 transition-transform duration-200" />
                <span>Generate Page</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};