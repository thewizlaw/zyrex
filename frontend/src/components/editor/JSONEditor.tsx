import React from 'react';
import { Save, Upload, CheckCircle } from 'lucide-react';

interface JSONEditorProps {
  jsonData: any;
  onJsonChange: (data: any) => void;
  onSave: () => void;
  onLoad: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onApply: () => void;
  loading: boolean;
  darkMode: boolean;
  saveSuccess: boolean;
}

export const JSONEditor: React.FC<JSONEditorProps> = ({
  jsonData,
  onJsonChange,
  onSave,
  onLoad,
  onApply,
  loading,
  darkMode,
  saveSuccess
}) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const parsed = JSON.parse(e.target.value);
      onJsonChange(parsed);
    } catch (err) {
      // Don't update if invalid JSON
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Action Buttons */}
      <div className="flex items-center gap-2 mb-4">
        <label className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-lg transition-colors cursor-pointer ${
          darkMode
            ? 'text-gray-200 bg-gray-700 border-gray-600 hover:bg-gray-600'
            : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
        }`}>
          <Upload className="w-4 h-4" />
          Load JSON
          <input
            type="file"
            accept=".json"
            onChange={onLoad}
            className="hidden"
          />
        </label>
        <button
          onClick={onSave}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-lg transition-colors ${
            darkMode
              ? 'text-gray-200 bg-gray-700 border-gray-600 hover:bg-gray-600'
              : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
          }`}
        >
          <Save className="w-4 h-4" />
          {saveSuccess ? "Saved!" : "Save JSON"}
        </button>
        <button
          onClick={onApply}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors disabled:opacity-50"
        >
          <CheckCircle className="w-4 h-4" />
          Apply Changes
        </button>
      </div>

      {/* JSON Editor */}
      <textarea
        value={JSON.stringify(jsonData, null, 2)}
        onChange={handleTextChange}
        className={`flex-1 w-full p-4 font-mono text-sm border rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent resize-none ${
          darkMode
            ? 'bg-gray-800 border-gray-700 text-gray-200'
            : 'bg-white border-gray-300 text-gray-900'
        }`}
        spellCheck={false}
      />
    </div>
  );
};