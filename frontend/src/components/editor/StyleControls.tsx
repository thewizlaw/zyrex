import React from 'react';
import { Type, Sun, Moon } from 'lucide-react';
import type { StyleOptions } from '../../types';

interface StyleControlsProps {
  styleOptions: StyleOptions;
  selectedTheme: number;
  onThemeChange: (index: number) => void;
  darkMode: boolean;
  onDarkModeChange: (darkMode: boolean) => void;
  selectedFont: number;
  onFontChange: (index: number) => void;
  appDarkMode: boolean;
  compact?: boolean; // Used for sidebar width
}

export const StyleControls: React.FC<StyleControlsProps> = ({
  styleOptions,
  selectedTheme,
  onThemeChange,
  darkMode,
  onDarkModeChange,
  selectedFont,
  onFontChange,
  appDarkMode,
  compact = false,
}) => {
  const textColor = appDarkMode ? 'text-[#a1a1aa]' : 'text-gray-500';
  const textActive = appDarkMode ? 'text-white' : 'text-black';
  const inputBg = appDarkMode ? 'bg-[#09090b]' : 'bg-white';
  const borderColor = appDarkMode ? 'border-[#27272a]' : 'border-gray-200';
  const bgHover = appDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/5';

  const labelClass = `text-[10px] font-semibold uppercase tracking-wider mb-2 block ${textColor}`;
  const controlWrapperClass = `p-3 rounded ${appDarkMode ? 'bg-[#18181b] border border-[#27272a]' : 'bg-white border border-gray-200'} shadow-sm`;

  return (
    <div className="space-y-4">
      {/* Theme Selection: Squared Buttons */}
      <div className={controlWrapperClass}>
        <span className={labelClass}>Theme</span>
        <div className="flex flex-wrap gap-2">
          {styleOptions.themes.map((theme, index) => (
            <button
              key={theme.name}
              onClick={() => onThemeChange(index)}
              className={`w-8 h-8 rounded transition-all duration-200 flex items-center justify-center border-2 
                ${selectedTheme === index ? 'ring-2 ring-offset-2 ring-blue-500 ring-offset-[#18181b]' : ''}`}
              style={{ 
                backgroundColor: theme.primary, 
                borderColor: selectedTheme === index ? 'white' : 'transparent',
                // Using a darker ring offset for dark mode context
              }}
              title={theme.name}
            >
              {selectedTheme === index && (
                <div className="w-2 h-2 bg-white rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Font Selection */}
      <div className={controlWrapperClass}>
        <span className={labelClass}>Font Family</span>
        <div className={`flex items-center rounded overflow-hidden border ${borderColor} ${inputBg}`}>
          <div className={`p-2 ${textColor}`}>
            <Type className="w-4 h-4" />
          </div>
          <select
            value={selectedFont}
            onChange={(e) => onFontChange(Number(e.target.value))}
            className={`flex-1 px-2 py-1.5 text-[11px] outline-none appearance-none ${inputBg} ${textActive}`}
          >
            {styleOptions.fonts.map((font, index) => (
              <option key={index} value={index}>
                {font.split(',')[0]}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Dark Mode Toggle */}
      <div className={controlWrapperClass}>
        <span className={labelClass}>Webpage Dark Mode</span>
        <div className="flex gap-1 p-0.5 bg-[#09090b] rounded-lg border border-[#27272a]">
          <button
            onClick={() => onDarkModeChange(false)}
            className={`flex-1 flex items-center justify-center p-1.5 rounded-md transition-all duration-200 text-[11px] font-medium ${darkMode === false ? 'bg-white text-black' : 'text-[#a1a1aa] hover:bg-white/10'}`}
          >
            <Sun className="w-3 h-3 mr-1" /> Light
          </button>
          <button
            onClick={() => onDarkModeChange(true)}
            className={`flex-1 flex items-center justify-center p-1.5 rounded-md transition-all duration-200 text-[11px] font-medium ${darkMode === true ? 'bg-black text-white' : 'text-[#a1a1aa] hover:bg-white/10'}`}
          >
            <Moon className="w-3 h-3 mr-1" /> Dark
          </button>
        </div>
      </div>
    </div>
  );
};