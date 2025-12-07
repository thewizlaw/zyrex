/**
 * SectionLabel.tsx
 * 
 * Reusable section label component with optional icon.
 * Used to mark the beginning of page sections.
 * 
 * @component
 * @example
 * ```tsx
 * <SectionLabel icon={Sparkles} text="Features" />
 * ```
 */

import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SectionLabelProps {
  /** Optional icon component from lucide-react */
  icon?: LucideIcon;
  /** Label text */
  text: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ icon: Icon, text }) => {
  return (
    <div className="inline-flex items-center gap-1.5 mb-6">
      {Icon && <Icon className="w-3 h-3 text-white" />}
      <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
        {text}
      </span>
    </div>
  );
};

export default SectionLabel;