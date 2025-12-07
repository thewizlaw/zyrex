/**
 * SecondaryButton.tsx
 * 
 * Secondary button with outlined style.
 * Used for less prominent actions.
 * 
 * @component
 * @example
 * ```tsx
 * <SecondaryButton onClick={handleClick}>
 *   Learn More
 * </SecondaryButton>
 * ```
 */

import React from 'react';

interface SecondaryButtonProps {
  /** Button content */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-zinc-900 text-white border border-zinc-800 h-10 px-5 rounded-lg text-sm font-medium hover:bg-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;