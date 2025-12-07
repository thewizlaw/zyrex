import React from 'react';
import type { ViewportSize } from '../../types';

interface ViewportControlsProps {
  viewports: ViewportSize[];
  currentViewport: number;
  onViewportChange: (index: number) => void;
  darkMode: boolean;
}

export const ViewportControls: React.FC<ViewportControlsProps> = ({
  viewports,
  currentViewport,
  onViewportChange,
  darkMode
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className={`flex items-center gap-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-1`}>
        {viewports.map((viewport, index) => {
          const Icon = viewport.icon;
          return (
            <button
              key={index}
              onClick={() => onViewportChange(index)}
              className={`p-2 rounded transition-all ${
                currentViewport === index
                  ? darkMode
                    ? 'bg-gray-600 shadow-sm text-violet-400'
                    : 'bg-white shadow-sm text-violet-600'
                  : darkMode
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              title={viewport.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>
      <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {viewports[currentViewport].label}
      </span>
    </div>
  );
};