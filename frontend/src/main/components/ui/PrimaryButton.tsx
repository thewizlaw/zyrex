/**
 * PrimaryButton.tsx
 * 
 * Primary call-to-action button with white background.
 * Used for main actions throughout the site.
 * 
 * @component
 * @example
 * ```tsx
 * <PrimaryButton onClick={handleClick}>
 *   Get Started
 * </PrimaryButton>
 * ```
 */

import React from 'react';

interface PrimaryButtonProps {
  /** Button content */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black h-10 px-5 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;