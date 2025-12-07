import { PageStyles } from './types';

// 🎨 DESIGN SYSTEM - Global style tokens and utilities
// Mimics Tailwind's utility-first approach with inline styles

// ============================================================================
// COLOR SYSTEM
// ============================================================================

export const createColorSystem = (styles: PageStyles) => {
  const primary = styles.primary_color || '#3b82f6';
  const secondary = styles.secondary_color || '#8b5cf6';
  const isDark = styles.dark_mode || false;

  return {
    // Primary color palette (10 shades)
    primary: {
      50: `${primary}08`,   // 5% opacity
      100: `${primary}12`,  // 7% opacity
      200: `${primary}20`,  // 12% opacity
      300: `${primary}30`,  // 18% opacity
      400: `${primary}40`,  // 25% opacity
      500: primary,         // Base color
      600: primary,         // Same as base (can't darken inline)
      700: primary,
      800: primary,
      900: primary,
    },
    
    // Secondary color palette
    secondary: {
      50: `${secondary}08`,
      100: `${secondary}12`,
      200: `${secondary}20`,
      300: `${secondary}30`,
      400: `${secondary}40`,
      500: secondary,
      600: secondary,
      700: secondary,
      800: secondary,
      900: secondary,
    },
    
    // Semantic colors (light/dark mode support)
    semantic: {
      // Text colors
      text: {
        primary: isDark ? '#f9fafb' : '#111827',
        secondary: isDark ? '#d1d5db' : '#374151',
        tertiary: isDark ? '#9ca3af' : '#6b7280',
        muted: isDark ? '#6b7280' : '#9ca3af',
        disabled: isDark ? '#4b5563' : '#d1d5db',
      },
      
      // Background colors
      bg: {
        primary: isDark ? '#111827' : '#ffffff',
        secondary: isDark ? '#1f2937' : '#f9fafb',
        tertiary: isDark ? '#374151' : '#f3f4f6',
        hover: isDark ? '#1f2937' : '#f3f4f6',
        overlay: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.95)',
      },
      
      // Border colors
      border: {
        primary: isDark ? '#374151' : '#e5e7eb',
        secondary: isDark ? '#4b5563' : '#d1d5db',
        focus: primary,
        error: '#ef4444',
        success: '#10b981',
      },
      
      // Status colors
      status: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      
      // Gradient backgrounds
      gradient: {
        primary: `linear-gradient(135deg, ${primary}, ${secondary})`,
        light: `linear-gradient(180deg, ${isDark ? '#1f2937' : '#ffffff'}, ${isDark ? '#111827' : '#f9fafb'})`,
        radial: `radial-gradient(circle at top right, ${primary}15, transparent 70%)`,
      }
    }
  };
};

// ============================================================================
// TYPOGRAPHY SYSTEM
// ============================================================================

export const typography = {
  // Font families
  fontFamily: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    serif: "'Georgia', 'Times New Roman', serif",
    mono: "'Fira Code', 'Courier New', monospace",
  },
  
  // Font sizes (responsive with clamp)
  fontSize: {
    xs: '0.75rem',        // 12px
    sm: '0.875rem',       // 14px
    base: '1rem',         // 16px
    lg: '1.125rem',       // 18px
    xl: '1.25rem',        // 20px
    '2xl': '1.5rem',      // 24px
    '3xl': '1.875rem',    // 30px
    '4xl': '2.25rem',     // 36px
    '5xl': '3rem',        // 48px
    '6xl': '3.75rem',     // 60px
    '7xl': '4.5rem',      // 72px
    
    // Responsive headings (use clamp)
    h1: 'clamp(2.5rem, 6vw, 4rem)',       // 40px - 64px
    h2: 'clamp(2rem, 4vw, 3rem)',         // 32px - 48px
    h3: 'clamp(1.5rem, 3vw, 2.25rem)',    // 24px - 36px
    h4: 'clamp(1.25rem, 2vw, 1.875rem)',  // 20px - 30px
    h5: 'clamp(1.125rem, 1.5vw, 1.5rem)', // 18px - 24px
    h6: 'clamp(1rem, 1vw, 1.25rem)',      // 16px - 20px
  },
  
  // Font weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  }
};

// ============================================================================
// SPACING SYSTEM
// ============================================================================

export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
};

// Section padding presets
export const sectionPadding = {
  none: '0',
  xs: `${spacing[8]} 0`,      // 32px vertical
  sm: `${spacing[12]} 0`,     // 48px vertical
  md: `${spacing[16]} 0`,     // 64px vertical
  lg: `${spacing[24]} 0`,     // 96px vertical
  xl: `${spacing[32]} 0`,     // 128px vertical
};

// Container padding
export const containerPadding = {
  mobile: `0 ${spacing[4]}`,   // 16px horizontal
  tablet: `0 ${spacing[6]}`,   // 24px horizontal
  desktop: `0 ${spacing[8]}`,  // 32px horizontal
};

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  none: '0',
  sm: '0.25rem',    // 4px
  base: '0.375rem', // 6px
  md: '0.5rem',     // 8px
  lg: '0.625rem',   // 10px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',   // Fully rounded
  
  // Component-specific
  button: '0.5rem',     // 8px
  card: '0.75rem',      // 12px
  input: '0.5rem',      // 8px
  badge: '0.375rem',    // 6px
  modal: '1rem',        // 16px
};

// ============================================================================
// SHADOW SYSTEM
// ============================================================================

export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  
  // Colored shadows (use with primary color)
  colorXs: (color: string) => `0 1px 2px 0 ${color}20`,
  colorSm: (color: string) => `0 2px 4px 0 ${color}30`,
  colorMd: (color: string) => `0 4px 14px 0 ${color}40`,
  colorLg: (color: string) => `0 8px 24px 0 ${color}50`,
  colorXl: (color: string) => `0 12px 32px 0 ${color}60`,
};

// ============================================================================
// GRID SYSTEM
// ============================================================================

export const grid = {
  // Column templates
  cols: {
    1: 'grid-template-columns: 1fr',
    2: 'grid-template-columns: repeat(2, 1fr)',
    3: 'grid-template-columns: repeat(3, 1fr)',
    4: 'grid-template-columns: repeat(4, 1fr)',
    5: 'grid-template-columns: repeat(5, 1fr)',
    6: 'grid-template-columns: repeat(6, 1fr)',
    12: 'grid-template-columns: repeat(12, 1fr)',
  },
  
  // Auto-fit responsive
  autoFit: {
    xs: 'grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))',
    sm: 'grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))',
    md: 'grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))',
    lg: 'grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))',
    xl: 'grid-template-columns: repeat(auto-fit, minmax(400px, 1fr))',
  },
  
  // Gap sizes
  gap: {
    xs: `gap: ${spacing[2]}`,     // 8px
    sm: `gap: ${spacing[4]}`,     // 16px
    md: `gap: ${spacing[6]}`,     // 24px
    lg: `gap: ${spacing[8]}`,     // 32px
    xl: `gap: ${spacing[12]}`,    // 48px
  },
  
  // Common layouts
  sidebar: 'grid-template-columns: 300px 1fr',
  sidebarLarge: 'grid-template-columns: 350px 1fr',
  twoThirds: 'grid-template-columns: 2fr 1fr',
  threeQuarters: 'grid-template-columns: 3fr 1fr',
};

// ============================================================================
// CONTAINER SYSTEM
// ============================================================================

export const containers = {
  // Max widths
  maxWidth: {
    xs: '20rem',      // 320px
    sm: '24rem',      // 384px
    md: '28rem',      // 448px
    lg: '32rem',      // 512px
    xl: '36rem',      // 576px
    '2xl': '42rem',   // 672px
    '3xl': '48rem',   // 768px
    '4xl': '56rem',   // 896px
    '5xl': '64rem',   // 1024px
    '6xl': '72rem',   // 1152px
    '7xl': '80rem',   // 1280px
    full: '100%',
    
    // Component-specific
    content: '65ch',       // Optimal reading width
    container: '1400px',   // Main container
    narrow: '800px',       // Narrow content
    wide: '1600px',        // Wide content
  },
  
  // Container styles
  base: `
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 5vw, 2rem);
  `,
  
  narrow: `
    max-width: 800px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 5vw, 2rem);
  `,
  
  wide: `
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 5vw, 2rem);
  `,
};

// ============================================================================
// TRANSITION SYSTEM
// ============================================================================

export const transitions = {
  // Duration
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  
  // Timing functions
  timing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Common transition strings
  all: 'transition: all 0.3s ease',
  colors: 'transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
  transform: 'transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  shadow: 'transition: box-shadow 0.3s ease',
  opacity: 'transition: opacity 0.2s ease',
};

// ============================================================================
// ANIMATION KEYFRAMES
// ============================================================================

export const animations = {
  keyframes: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes scaleUp {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `,
  
  // Animation usage strings
  fadeIn: 'animation: fadeIn 0.6s ease-out',
  slideUp: 'animation: slideUp 0.6s ease-out',
  slideDown: 'animation: slideDown 0.6s ease-out',
  slideInLeft: 'animation: slideInLeft 0.6s ease-out',
  slideInRight: 'animation: slideInRight 0.6s ease-out',
  scaleUp: 'animation: scaleUp 0.6s ease-out',
  pulse: 'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  spin: 'animation: spin 1s linear infinite',
};

// ============================================================================
// Z-INDEX SYSTEM
// ============================================================================

export const zIndex = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  
  // Semantic layers
  dropdown: '1000',
  sticky: '1020',
  fixed: '1030',
  modalBackdrop: '1040',
  modal: '1050',
  popover: '1060',
  tooltip: '1070',
};

// ============================================================================
// BREAKPOINTS (for media queries)
// ============================================================================

export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Generate inline style string from style object
export const styleToString = (styles: Record<string, string>): string => {
  return Object.entries(styles)
    .map(([key, value]) => {
      // Convert camelCase to kebab-case
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `${cssKey}: ${value}`;
    })
    .join('; ');
};

// Create responsive grid
export const createResponsiveGrid = (columns: number, gap: string = spacing[6]): string => {
  return `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${300 / columns}px, 1fr));
    gap: ${gap};
  `;
};

// Create button styles
export const createButtonStyles = (colors: any, variant: 'primary' | 'secondary' | 'outline' = 'primary'): string => {
  const variants = {
    primary: `
      background: ${colors.primary[500]};
      color: white;
      border: none;
    `,
    secondary: `
      background: ${colors.secondary[500]};
      color: white;
      border: none;
    `,
    outline: `
      background: transparent;
      color: ${colors.primary[500]};
      border: 2px solid ${colors.primary[500]};
    `
  };
  
  return `
    ${variants[variant]}
    padding: ${spacing[3]} ${spacing[6]};
    border-radius: ${borderRadius.button};
    font-weight: ${typography.fontWeight.semibold};
    font-size: ${typography.fontSize.base};
    cursor: pointer;
    ${transitions.all};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  `;
};

// Create card styles
export const createCardStyles = (colors: any): string => {
  return `
    background: ${colors.semantic.bg.primary};
    border: 1px solid ${colors.semantic.border.primary};
    border-radius: ${borderRadius.card};
    padding: ${spacing[6]};
    box-shadow: ${shadows.sm};
    ${transitions.all};
  `;
};

// ============================================================================
// EXPORT COMPLETE DESIGN SYSTEM
// ============================================================================

export const createDesignSystem = (styles: PageStyles) => {
  const colors = createColorSystem(styles);
  
  return {
    colors,
    typography,
    spacing,
    sectionPadding,
    containerPadding,
    borderRadius,
    shadows,
    grid,
    containers,
    transitions,
    animations,
    zIndex,
    breakpoints,
    
    // Utility functions
    styleToString,
    createResponsiveGrid,
    createButtonStyles: (variant?: 'primary' | 'secondary' | 'outline') => 
      createButtonStyles(colors, variant),
    createCardStyles: () => createCardStyles(colors),
  };
};

// Export default for easy import
export default createDesignSystem;