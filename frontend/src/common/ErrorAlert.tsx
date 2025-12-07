import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorAlertProps {
  error: string;
  darkMode?: boolean;
  onDismiss?: () => void;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ 
  error, 
  darkMode = false,
  onDismiss 
}) => {
  return (
    <div className={`p-3 border rounded-lg ${
      darkMode
        ? 'bg-red-900/30 border-red-800 text-red-200'
        : 'bg-red-50 border-red-200 text-red-800'
    }`}>
      <div className="flex items-start gap-2">
        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <p className="text-xs flex-1">{error}</p>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className={`text-sm font-medium ${
              darkMode ? 'hover:text-red-100' : 'hover:text-red-900'
            }`}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};