import { ComponentRenderer, PageStyles } from '../../types/index';
import { createDesignSystem } from '../../design-system';

export const renderBreadcrumbs: ComponentRenderer = (
  section,
  styles: PageStyles
) => {
  const { items = [] } = section;

  // Initialize design system
  const ds = createDesignSystem(styles);

  // Fallback items if none provided
  const defaultItems = items.length === 0 ? [
    { text: "Home", href: "/" },
    { text: "Products", href: "/products" },
    { text: "Current Page", href: null }
  ] : items;

  return `
    <nav style="
      padding: ${ds.spacing[6]} 0; 
      margin-bottom: ${ds.spacing[4]};
      ${ds.animations.slideDown};
    " aria-label="Breadcrumb">
      <div style="
        display: flex; 
        align-items: center; 
        gap: ${ds.spacing[3]}; 
        flex-wrap: wrap; 
        font-size: ${ds.typography.fontSize.sm};
      ">
        ${defaultItems
          .map(
            (item: { href: any; text: any; }, index: number) => `
          <div style="display: flex; align-items: center; gap: ${ds.spacing[3]};">
            ${index > 0 ? `
              <span style="
                color: ${ds.colors.semantic.border.secondary};
                font-size: ${ds.typography.fontSize.sm};
                user-select: none;
                font-weight: ${ds.typography.fontWeight.normal};
              ">›</span>
            ` : ''}

            ${
              item.href
                ? `
              <a href="${item.href}" style="
                color: ${ds.colors.semantic.text.tertiary}; 
                text-decoration: none; 
                ${ds.transitions.all};
                padding: ${ds.spacing[1.5]} ${ds.spacing[3]};
                border-radius: ${ds.borderRadius.md};
                font-weight: ${ds.typography.fontWeight.medium};
              " onmouseover="
                this.style.color='${ds.colors.primary[500]}';
                this.style.background='${ds.colors.primary[50]}';
                this.style.transform='translateX(${ds.spacing[0.5]})';
              " onmouseout="
                this.style.color='${ds.colors.semantic.text.tertiary}';
                this.style.background='transparent';
                this.style.transform='translateX(0)';
              ">
                ${item.text}
              </a>
            `
                : `
              <span style="
                color: ${ds.colors.primary[500]}; 
                font-weight: ${ds.typography.fontWeight.semibold};
                padding: ${ds.spacing[1.5]} ${ds.spacing[3]};
                background: ${ds.colors.primary[50]};
                border-radius: ${ds.borderRadius.md};
                border: 1px solid ${ds.colors.primary[100]};
              ">
                ${item.text}
              </span>
            `
            }
          </div>
        `
          )
          .join('')}
      </div>

      <style>
        ${ds.animations.keyframes}
        
        /* Responsive adjustments */
        @media (max-width: ${ds.breakpoints.sm}) {
          nav[style*="padding: ${ds.spacing[6]} 0"] {
            padding: ${ds.spacing[4]} 0 !important;
          }
          
          div[style*="font-size: ${ds.typography.fontSize.sm}"] {
            font-size: ${ds.typography.fontSize.xs} !important;
            gap: ${ds.spacing[2]} !important;
          }
          
          div[style*="display: flex; align-items: center; gap: ${ds.spacing[3]}"] {
            gap: ${ds.spacing[2]} !important;
          }
          
          a[style*="padding: ${ds.spacing[1.5]} ${ds.spacing[3]}"] {
            padding: ${ds.spacing[1]} ${ds.spacing[2]} !important;
          }
          
          span[style*="padding: ${ds.spacing[1.5]} ${ds.spacing[3]}"] {
            padding: ${ds.spacing[1]} ${ds.spacing[2]} !important;
          }
        }

        /* Focus states for accessibility */
        a[href]:focus-visible {
          outline: 2px solid ${ds.colors.primary[500]};
          outline-offset: 2px;
          border-radius: ${ds.borderRadius.sm};
        }
      </style>
    </nav>
  `;
};