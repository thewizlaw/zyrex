import React from 'react';
import { Eye, Code, Copy, Download, Upload, Save, CheckCircle, Sparkles, Sun, Moon, ArrowLeft } from 'lucide-react';
import type { ViewMode, ViewportSize } from '../../types';

interface ToolbarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  html: string;
  jsonData: any;
  viewports: ViewportSize[];
  currentViewport: number;
  onViewportChange: (index: number) => void;
  darkMode: boolean;
  onCopyCode: () => void;
  onDownload: () => void;
  copySuccess: boolean;
  onLoadJSON: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveJSON: () => void;
  onApplyChanges: () => void;
  loading: boolean;
  saveSuccess: boolean;
  onSavePage?: () => void;
  appDarkMode: boolean;
  onAppDarkModeChange: (darkMode: boolean) => void;
  onGenerate: () => void;
  prompt?: string;
  projectName?: string;
  templateName?: string;
  onBack?: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  viewMode,
  onViewModeChange,
  html,
  jsonData,
  viewports,
  currentViewport,
  onViewportChange,
  darkMode,
  onCopyCode,
  onDownload,
  copySuccess,
  onLoadJSON,
  onSaveJSON,
  onApplyChanges,
  loading,
  saveSuccess,
  onSavePage,
  appDarkMode,
  onAppDarkModeChange,
  onGenerate,
  prompt = '',
  projectName,
  templateName,
  onBack
}) => {
  const bgPrimary = darkMode ? 'bg-[#18181b]' : 'bg-white';
  const bgSecondary = darkMode ? 'bg-[#27272a]' : 'bg-gray-100';
  const textPrimary = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600';
  const borderColor = darkMode ? 'border-[#27272a]' : 'border-gray-200';

  const isPromptValid = prompt?.trim().length > 0;

  return (
    <div className={`${bgPrimary} border-b ${borderColor} px-4 py-2.5 flex items-center justify-between transition-colors duration-200`}>
      {/* Left Section - Back Button & View Mode */}
      <div className="flex items-center gap-3">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm ${bgSecondary} ${textSecondary} hover:${textPrimary} transition-colors`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        )}

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onViewModeChange('preview')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
              viewMode === 'preview'
                ? 'bg-indigo-500 text-white'
                : `${bgSecondary} ${textSecondary} hover:${textPrimary}`
            }`}
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button
            onClick={() => onViewModeChange('json')}
            disabled={!jsonData}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
              viewMode === 'json'
                ? 'bg-indigo-500 text-white'
                : `${bgSecondary} ${textSecondary} hover:${textPrimary}`
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <Code className="w-4 h-4" />
            JSON
          </button>
        </div>

        {/* Viewport Selector (only in preview mode) */}
        {viewMode === 'preview' && html && (
          <>
            <div className={`w-px h-6 ${bgSecondary}`} />
            <div className="flex items-center gap-1">
              {viewports.map((viewport, idx) => {
                const Icon = viewport.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => onViewportChange(idx)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      currentViewport === idx
                        ? 'bg-indigo-500 text-white'
                        : `${bgSecondary} ${textSecondary} hover:${textPrimary}`
                    }`}
                    title={`${viewport.name} (${viewport.label})`}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Center Section - Project Info */}
      <div className="flex items-center gap-2 px-3 py-1.5">
        {projectName && templateName && (
          <div className="text-center">
            <p className={`text-xs ${textSecondary}`}>
              <span className={textPrimary}>{projectName}</span>
              {' • '}
              <span>{templateName}</span>
            </p>
          </div>
        )}
      </div>

      {/* Right Section - Actions */}
      <div className="flex items-center gap-2">
        {/* Save Page to Database */}
        {html && onSavePage && (
          <button
            onClick={onSavePage}
            disabled={loading || !jsonData}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5
              ${saveSuccess 
                ? 'bg-green-500 text-white' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {saveSuccess ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Saved
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save
              </>
            )}
          </button>
        )}

        {/* Copy Code */}
        {html && (
          <button
            onClick={onCopyCode}
            className={`p-1.5 rounded-lg transition-colors ${
              copySuccess
                ? 'bg-green-500 text-white'
                : `${bgSecondary} ${textSecondary} hover:${textPrimary}`
            }`}
            title="Copy HTML"
          >
            {copySuccess ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        )}

        {/* Download HTML */}
        {html && (
          <button
            onClick={onDownload}
            className={`p-1.5 rounded-lg ${bgSecondary} ${textSecondary} hover:${textPrimary} transition-colors`}
            title="Download HTML"
          >
            <Download className="w-4 h-4" />
          </button>
        )}

        {/* JSON Actions (only in JSON mode) */}
        {viewMode === 'json' && (
          <>
            <div className={`w-px h-6 ${bgSecondary}`} />
            <label className={`p-1.5 rounded-lg ${bgSecondary} ${textSecondary} hover:${textPrimary} transition-colors cursor-pointer`}>
              <Upload className="w-4 h-4" />
              <input
                type="file"
                accept="application/json"
                onChange={onLoadJSON}
                className="hidden"
              />
            </label>
            <button
              onClick={onSaveJSON}
              disabled={!jsonData}
              className={`p-1.5 rounded-lg ${bgSecondary} ${textSecondary} hover:${textPrimary} transition-colors disabled:opacity-50`}
              title="Download JSON"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onApplyChanges}
              disabled={loading || !jsonData}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading ? 'Applying...' : 'Apply'}
            </button>
          </>
        )}

        {/* Theme Toggle & Generate Button */}
        {viewMode === 'preview' && !html && (
          <>
            <div className={`w-px h-6 ${bgSecondary}`} />
            <button
              onClick={() => onAppDarkModeChange(!appDarkMode)}
              className={`p-1.5 rounded-lg ${bgSecondary} hover:bg-opacity-80 transition-colors`}
              title="Toggle Theme"
            >
              {appDarkMode ? <Sun className={`w-4 h-4 ${textSecondary}`} /> : <Moon className={`w-4 h-4 ${textSecondary}`} />}
            </button>
            <button
              onClick={onGenerate}
              disabled={loading || !isPromptValid}
              className={`px-3 py-1.5 rounded-lg font-semibold text-white text-sm
                bg-gradient-to-r from-indigo-500 to-purple-500 
                hover:from-indigo-600 hover:to-purple-600 
                disabled:opacity-50 disabled:cursor-not-allowed 
                transition-all duration-200 flex items-center gap-1.5`}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Generating
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate
                </>
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
};