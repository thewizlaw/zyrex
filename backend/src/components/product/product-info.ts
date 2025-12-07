import createDesignSystem from "../../design-system";

// 2. PRODUCT INFO (Price, SKU, Ratings) - Using Design System
export const renderProductInfo = (section: any, styles: any) => {
  const { 
    name = "Premium Product",
    price = 299,
    original_price = 399,
    rating = 4.5,
    reviews_count = 128,
    sku = "PRD-12345",
    availability = "In Stock",
    brand = "Premium Brand"
  } = section;
  
  // Initialize design system
  const ds = createDesignSystem(styles);
  
  const discount = original_price ? Math.round(((original_price - price) / original_price) * 100) : 0;
  
  return `
    <section style="padding: ${ds.spacing[8]} 0; ${ds.animations.fadeIn};">
      <!-- Brand -->
      ${brand ? `
        <a href="#" style="
          color: ${ds.colors.primary[500]}; 
          text-decoration: none; 
          font-weight: ${ds.typography.fontWeight.semibold}; 
          font-size: ${ds.typography.fontSize.sm}; 
          text-transform: uppercase; 
          letter-spacing: ${ds.typography.letterSpacing.wide};
          ${ds.transitions.all};
        "
        onmouseover="
          this.style.color='${ds.colors.primary[600]}';
          this.style.transform='translateX(${ds.spacing[0.5]})';
        "
        onmouseout="
          this.style.color='${ds.colors.primary[500]}';
          this.style.transform='translateX(0)';
        ">
          ${brand}
        </a>
      ` : ''}
      
      <!-- Product Name -->
      <h1 style="
        font-size: ${ds.typography.fontSize.h1}; 
        font-weight: ${ds.typography.fontWeight.bold}; 
        margin: ${ds.spacing[2]} 0 ${ds.spacing[4]}; 
        color: ${ds.colors.semantic.text.primary}; 
        line-height: ${ds.typography.lineHeight.tight};
        letter-spacing: ${ds.typography.letterSpacing.tight};
      ">
        ${name}
      </h1>
      
      <!-- Rating & Reviews -->
      <div style="
        display: flex; 
        align-items: center; 
        gap: ${ds.spacing[4]}; 
        margin-bottom: ${ds.spacing[6]};
        flex-wrap: wrap;
      ">
        <div style="display: flex; align-items: center; gap: ${ds.spacing[0.5]};">
          ${Array(5).fill(0).map((_, i) => 
            `<span style="
              color: ${i < Math.floor(rating) ? ds.colors.semantic.status.warning : ds.colors.semantic.text.muted}; 
              font-size: ${ds.typography.fontSize.xl};
            ">★</span>`
          ).join('')}
        </div>
        <a href="#reviews" style="
          color: ${ds.colors.semantic.text.tertiary}; 
          font-size: ${ds.typography.fontSize.sm};
          text-decoration: none;
          ${ds.transitions.all};
        "
        onmouseover="
          this.style.color='${ds.colors.primary[500]}';
          this.style.textDecoration='underline';
        "
        onmouseout="
          this.style.color='${ds.colors.semantic.text.tertiary}';
          this.style.textDecoration='none';
        ">
          ${rating} (${reviews_count} reviews)
        </a>
      </div>
      
      <!-- Price -->
      <div style="
        display: flex; 
        align-items: baseline; 
        gap: ${ds.spacing[4]}; 
        margin-bottom: ${ds.spacing[4]};
        flex-wrap: wrap;
      ">
        <span style="
          font-size: ${ds.typography.fontSize['4xl']}; 
          font-weight: ${ds.typography.fontWeight.extrabold}; 
          color: ${ds.colors.semantic.text.primary};
          background: ${ds.colors.semantic.gradient.primary};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        ">
          $${price}
        </span>
        ${original_price ? `
          <span style="
            font-size: ${ds.typography.fontSize['2xl']}; 
            color: ${ds.colors.semantic.text.muted}; 
            text-decoration: line-through;
            font-weight: ${ds.typography.fontWeight.medium};
          ">
            $${original_price}
          </span>
          <span style="
            background: ${ds.colors.semantic.status.error}; 
            color: white; 
            padding: ${ds.spacing[1]} ${ds.spacing[3]}; 
            border-radius: ${ds.borderRadius.lg}; 
            font-size: ${ds.typography.fontSize.sm}; 
            font-weight: ${ds.typography.fontWeight.bold};
            box-shadow: ${ds.shadows.colorSm(ds.colors.semantic.status.error)};
          ">
            ${discount}% OFF
          </span>
        ` : ''}
      </div>
      
      <!-- Availability & SKU -->
      <div style="
        display: flex; 
        gap: ${ds.spacing[8]}; 
        padding: ${ds.spacing[4]} 0; 
        border-top: 1px solid ${ds.colors.semantic.border.primary}; 
        border-bottom: 1px solid ${ds.colors.semantic.border.primary}; 
        margin-bottom: ${ds.spacing[6]};
        flex-wrap: wrap;
      ">
        <div style="display: flex; align-items: center; gap: ${ds.spacing[2]};">
          <span style="
            color: ${ds.colors.semantic.text.tertiary}; 
            font-size: ${ds.typography.fontSize.sm};
          ">Availability:</span>
          <span style="
            color: ${ds.colors.semantic.status.success}; 
            font-weight: ${ds.typography.fontWeight.semibold};
            display: flex;
            align-items: center;
            gap: ${ds.spacing[1]};
          ">
            <span style="font-size: ${ds.typography.fontSize.base};">✓</span>
            ${availability}
          </span>
        </div>
        <div style="display: flex; align-items: center; gap: ${ds.spacing[2]};">
          <span style="
            color: ${ds.colors.semantic.text.tertiary}; 
            font-size: ${ds.typography.fontSize.sm};
          ">SKU:</span>
          <span style="
            color: ${ds.colors.semantic.text.secondary}; 
            font-weight: ${ds.typography.fontWeight.medium};
            font-family: ${ds.typography.fontFamily.mono};
            font-size: ${ds.typography.fontSize.sm};
          ">
            ${sku}
          </span>
        </div>
      </div>
    </section>
    
    <style>
      ${ds.animations.keyframes}
      
      /* Responsive adjustments */
      @media (max-width: ${ds.breakpoints.md}) {
        section[style*="padding: ${ds.spacing[8]} 0"] {
          padding: ${ds.spacing[6]} 0 !important;
        }
        
        h1[style*="font-size: ${ds.typography.fontSize.h1}"] {
          font-size: ${ds.typography.fontSize['2xl']} !important;
          margin: ${ds.spacing[1]} 0 ${ds.spacing[3]} !important;
        }
        
        span[style*="font-size: ${ds.typography.fontSize['4xl']}"] {
          font-size: ${ds.typography.fontSize['3xl']} !important;
        }
        
        span[style*="font-size: ${ds.typography.fontSize['2xl']}"] {
          font-size: ${ds.typography.fontSize.xl} !important;
        }
        
        div[style*="gap: ${ds.spacing[8]}"] {
          gap: ${ds.spacing[4]} !important;
          flex-direction: column !important;
          align-items: flex-start !important;
        }
        
        div[style*="display: flex; align-items: center; gap: ${ds.spacing[4]}"] {
          gap: ${ds.spacing[2]} !important;
        }
      }
      
      @media (max-width: ${ds.breakpoints.sm}) {
        section[style*="padding: ${ds.spacing[8]} 0"] {
          padding: ${ds.spacing[4]} 0 !important;
        }
        
        h1[style*="font-size: ${ds.typography.fontSize.h1}"] {
          font-size: ${ds.typography.fontSize.xl} !important;
        }
        
        span[style*="font-size: ${ds.typography.fontSize['4xl']}"] {
          font-size: ${ds.typography.fontSize['2xl']} !important;
        }
        
        span[style*="font-size: ${ds.typography.fontSize['2xl']}"] {
          font-size: ${ds.typography.fontSize.lg} !important;
        }
        
        div[style*="display: flex; align-items: center; gap: ${ds.spacing[4]}"] {
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: ${ds.spacing[2]} !important;
        }
        
        span[style*="font-size: ${ds.typography.fontSize.xl}"] {
          font-size: ${ds.typography.fontSize.lg} !important;
        }
      }
      
      /* Focus states for accessibility */
      a:focus-visible {
        outline: 2px solid ${ds.colors.primary[500]};
        outline-offset: 2px;
        border-radius: ${ds.borderRadius.sm};
      }
    </style>
  `;
};