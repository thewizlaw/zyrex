/**
 * CenteredLabel.tsx
 * 
 * Centered announcement-style label.
 * Typically used for announcements or new feature highlights.
 * 
 * @component
 * @example
 * ```tsx
 * <CenteredLabel text="New: AI Generation 2.0" />
 * ```
 */

import React from 'react';

interface CenteredLabelProps {
  /** Label text */
  text: string;
}

const CenteredLabel: React.FC<CenteredLabelProps> = ({ text }) => {
  return (
    <div className="flex justify-center mb-8 animate-fade-in">
      <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
        {text}
      </span>
    </div>
  );
};

export default CenteredLabel;