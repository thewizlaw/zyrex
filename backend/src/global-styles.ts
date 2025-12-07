export const globalStyles = `
   :root {
    --color-primary-50: #eff6ff;
    --color-primary-100: #dbeafe;
    --color-primary-200: #bfdbfe;
    --color-primary-300: #93c5fd;
    --color-primary-400: #60a5fa;
    --color-primary-500: #3b82f6;
    --color-primary-600: #2563eb;
    --color-primary-700: #1d4ed8;
    --color-primary-800: #1e40af;
    --color-primary-900: #1e3a8a;
    
    /* Color System - Secondary */
    --color-secondary-50: #faf5ff;
    --color-secondary-100: #f3e8ff;
    --color-secondary-200: #e9d5ff;
    --color-secondary-300: #d8b4fe;
    --color-secondary-400: #c084fc;
    --color-secondary-500: #a855f7;
    --color-secondary-600: #9333ea;
    --color-secondary-700: #7c3aed;
    --color-secondary-800: #6b21a8;
    --color-secondary-900: #581c87;
    
    /* Semantic Colors - Light Mode */
    --color-text-primary: #111827;
    --color-text-secondary: #374151;
    --color-text-tertiary: #6b7280;
    --color-bg-primary: #ffffff;
    --color-bg-secondary: #f9fafb;
    --color-bg-tertiary: #f3f4f6;
    --color-border-primary: #e5e7eb;
    --color-border-secondary: #d1d5db;
    
    /* Spacing */
    --space-0: 0;
    --space-px: 1px;
    --space-0-5: 0.125rem;
    --space-1: 0.25rem;
    --space-1-5: 0.375rem;
    --space-2: 0.5rem;
    --space-2-5: 0.625rem;
    --space-3: 0.75rem;
    --space-3-5: 0.875rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-7: 1.75rem;
    --space-8: 2rem;
    --space-9: 2.25rem;
    --space-10: 2.5rem;
    --space-11: 2.75rem;
    --space-12: 3rem;
    
    /* Typography */
    --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    --font-family-serif: 'Georgia', 'Times New Roman', serif;
    --font-family-mono: 'Fira Code', 'Courier New', monospace;
    
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-size-5xl: 3rem;
    --font-size-6xl: 3.75rem;
    
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    
    /* Border Radius */
    --radius-sm: 0.25rem;
    --radius-base: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    --radius-full: 9999px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-base: 200ms ease;
    --transition-slow: 300ms ease;
    
    /* Breakpoints */
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
    --breakpoint-2xl: 1536px;
    
    /* Z-index */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-modal: 1050;
    --z-popover: 1060;
    --z-tooltip: 1070;
  }
  
  /* Dark Mode Variables */
  [data-theme="dark"] {
    --color-text-primary: #f9fafb;
    --color-text-secondary: #d1d5db;
    --color-text-tertiary: #9ca3af;
    --color-bg-primary: #111827;
    --color-bg-secondary: #1f2937;
    --color-bg-tertiary: #374151;
    --color-border-primary: #374151;
    --color-border-secondary: #4b5563;
  }
  
  /* ============================================================================
     BASE STYLES & RESETS
     ============================================================================ */
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-family: var(--font-family-sans);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  
  body {
    color: var(--color-text-primary);
    background-color: var(--color-bg-primary);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-normal);
    transition: color var(--transition-base), background-color var(--transition-base);
  }
  
  /* ============================================================================
     TYPOGRAPHY UTILITIES
     ============================================================================ */
  
  .text-xs { font-size: var(--font-size-xs); }
  .text-sm { font-size: var(--font-size-sm); }
  .text-base { font-size: var(--font-size-base); }
  .text-lg { font-size: var(--font-size-lg); }
  .text-xl { font-size: var(--font-size-xl); }
  .text-2xl { font-size: var(--font-size-2xl); }
  .text-3xl { font-size: var(--font-size-3xl); }
  .text-4xl { font-size: var(--font-size-4xl); }
  .text-5xl { font-size: var(--font-size-5xl); }
  .text-6xl { font-size: var(--font-size-6xl); }
  
  .font-light { font-weight: var(--font-weight-light); }
  .font-normal { font-weight: var(--font-weight-normal); }
  .font-medium { font-weight: var(--font-weight-medium); }
  .font-semibold { font-weight: var(--font-weight-semibold); }
  .font-bold { font-weight: var(--font-weight-bold); }
  .font-extrabold { font-weight: var(--font-weight-extrabold); }
  
  /* ============================================================================
     LAYOUT UTILITIES
     ============================================================================ */
  
  .container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--space-4);
  }
  
  @media (min-width: 768px) {
    .container {
      padding: 0 var(--space-6);
    }
  }
  
  @media (min-width: 1024px) {
    .container {
      padding: 0 var(--space-8);
    }
  }
  
  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .items-center { align-items: center; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .flex-1 { flex: 1; }
  
  .grid { display: grid; }
  .grid-cols-1 { grid-template-columns: 1fr; }
  .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
  
  .gap-2 { gap: var(--space-2); }
  .gap-4 { gap: var(--space-4); }
  .gap-6 { gap: var(--space-6); }
  .gap-8 { gap: var(--space-8); }
  
  /* ============================================================================
     COMPONENT CLASSES
     ============================================================================ */
  
  /* Button Base */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-3) var(--space-6);
    border-radius: var(--radius-md);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-base);
    text-decoration: none;
    cursor: pointer;
    border: none;
    transition: all var(--transition-base);
    position: relative;
    overflow: hidden;
  }
  
  .btn:focus {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
  }
  
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Button Variants */
  .btn-primary {
    background: var(--color-primary-500);
    color: white;
  }
  
  .btn-primary:hover:not(:disabled) {
    background: var(--color-primary-600);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  .btn-secondary {
    background: var(--color-secondary-500);
    color: white;
  }
  
  .btn-outline {
    background: transparent;
    color: var(--color-primary-500);
    border: 2px solid var(--color-primary-500);
  }
  
  .btn-outline:hover:not(:disabled) {
    background: var(--color-primary-500);
    color: white;
  }
  
  /* Card Component */
  .card {
    background: var(--color-bg-primary);
    border: 1px solid var(--color-border-primary);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
  }
  
  .card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
  
  /* Input Component */
  .input {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    border: 1px solid var(--color-border-primary);
    border-radius: var(--radius-md);
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    font-size: var(--font-size-base);
    transition: all var(--transition-base);
  }
  
  .input:focus {
    outline: none;
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 3px var(--color-primary-100);
  }
  
  .input::placeholder {
    color: var(--color-text-tertiary);
  }
  
  /* ============================================================================
     ANIMATIONS & TRANSITIONS
     ============================================================================ */
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out;
  }
  
  .animate-slideUp {
    animation: slideUp 0.6s ease-out;
  }
  
  .animate-slideInLeft {
    animation: slideInLeft 0.6s ease-out;
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  /* ============================================================================
     RESPONSIVE UTILITIES
     ============================================================================ */
  
  @media (min-width: 640px) {
    .sm\\:flex { display: flex; }
    .sm\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
    .sm\\:text-lg { font-size: var(--font-size-lg); }
  }
  
  @media (min-width: 768px) {
    .md\\:flex { display: flex; }
    .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
    .md\\:text-xl { font-size: var(--font-size-xl); }
  }
  
  @media (min-width: 1024px) {
    .lg\\:flex { display: flex; }
    .lg\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
  }
  
  /* ============================================================================
     ACCESSIBILITY
     ============================================================================ */
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  /* Focus styles for keyboard navigation */
  .focus\\:outline-primary:focus {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
  }
  
  /* High contrast support */
  @media (prefers-contrast: high) {
    :root {
      --color-primary-500: #0000ff;
      --color-secondary-500: #8b0000;
    }
  }
  
  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Add to src/global.css */

/* Header-specific styles that can be global */
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-3) 0;
    position: relative;
    gap: var(--space-6);
  }
  
  .action-buttons {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-left: auto;
  }
  
  /* Responsive utilities for header */
  @media (max-width: 768px) {
    .mobile-search-button {
      display: flex !important;
    }
    
    .desktop-search-bar {
      display: none !important;
    }
    
    .account-text {
      display: none !important;
    }
  }
  
  @media (min-width: 1024px) {
    .desktop-search-bar {
      display: block !important;
    }
    
    .mobile-search-button {
      display: none !important;
    }
  }
  `;