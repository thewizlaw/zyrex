import React from 'react';
import type { ViewportSize } from '../../types';

interface PreviewFrameProps {
  html: string;
  viewport: ViewportSize;
  darkMode: boolean;
}

export const PreviewFrame: React.FC<PreviewFrameProps> = ({ 
  html, 
  viewport, 
  darkMode 
}) => {
  return (
    <div className="h-full flex justify-center">
      <div
        className="bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-300"
        style={{
          width: viewport.width,
          maxWidth: "100%",
          height: "100%",
        }}
      >
        <iframe
          title="Generated Website Preview"
          srcDoc={html}
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};