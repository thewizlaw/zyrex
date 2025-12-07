import createDesignSystem from "../../design-system";

// 3. PRODUCT VARIANTS (Size, Color, etc.) - Using Design System
export const renderProductVariants = (section: any, styles: any) => {
  const { variants = [] } = section;
  
  // Initialize design system
  const ds = createDesignSystem(styles);
  
  return `
    <section style="padding: ${ds.spacing[6]} 0;">
      ${variants.map((variant: any) => `
        <div style="margin-bottom: ${ds.spacing[8]};">
          <label style="
            display: block; 
            font-weight: ${ds.typography.fontWeight.semibold}; 
            color: ${ds.colors.semantic.text.secondary}; 
            margin-bottom: ${ds.spacing[3]}; 
            font-size: ${ds.typography.fontSize.base};
          ">
            ${variant.name}:
            <span id="${variant.name.toLowerCase()}-selected" style="
              color: ${ds.colors.primary[500]}; 
              font-weight: ${ds.typography.fontWeight.bold};
              margin-left: ${ds.spacing[1]};
            ">
              ${variant.options[0]?.name || variant.options[0]}
            </span>
          </label>
          
          ${variant.type === 'color' ? `
            <!-- Color Swatches -->
            <div style="
              display: flex; 
              gap: ${ds.spacing[3]}; 
              flex-wrap: wrap;
            ">
              ${variant.options.map((option: any, idx: number) => `
                <button onclick="handleVariantSelect('${variant.name}', '${option.name || option}', this)"
                        style="
                          width: ${ds.spacing[12]}; 
                          height: ${ds.spacing[12]}; 
                          border-radius: ${ds.borderRadius.lg}; 
                          border: 3px solid ${idx === 0 ? ds.colors.primary[500] : ds.colors.semantic.border.primary}; 
                          cursor: pointer; 
                          position: relative; 
                          overflow: hidden; 
                          box-shadow: ${ds.shadows.sm};
                          background: ${ds.colors.semantic.bg.primary};
                          ${ds.transitions.all};
                        "
                        onmouseover="
                          this.style.transform='scale(1.1)';
                          this.style.boxShadow='${ds.shadows.md}';
                        "
                        onmouseout="
                          if (!this.classList.contains('active')) {
                            this.style.transform='scale(1)';
                            this.style.boxShadow='${ds.shadows.sm}';
                          }
                        "
                        class="${idx === 0 ? 'active' : ''}"
                        title="${option.name || option}">
                  <div style="
                    width: 100%; 
                    height: 100%; 
                    background: ${option.hex || option};
                    border-radius: ${ds.borderRadius.md};
                  "></div>
                  
                  <!-- Checkmark for active state -->
                  ${idx === 0 ? `
                    <div style="
                      position: absolute;
                      top: 2px;
                      right: 2px;
                      width: ${ds.spacing[3]};
                      height: ${ds.spacing[3]};
                      background: ${ds.colors.primary[500]};
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    ">
                      <span style="color: white; font-size: ${ds.typography.fontSize.xs}; line-height: 1;">✓</span>
                    </div>
                  ` : ''}
                </button>
              `).join('')}
            </div>
          ` : `
            <!-- Button Options (Size, etc.) -->
            <div style="
              display: flex; 
              gap: ${ds.spacing[3]}; 
              flex-wrap: wrap;
            ">
              ${variant.options.map((option: string, idx: number) => `
                <button onclick="handleVariantSelect('${variant.name}', '${option}', this)"
                        style="
                          padding: ${ds.spacing[3]} ${ds.spacing[6]}; 
                          border: 2px solid ${idx === 0 ? ds.colors.primary[500] : ds.colors.semantic.border.primary}; 
                          background: ${idx === 0 ? ds.colors.primary[50] : ds.colors.semantic.bg.primary}; 
                          color: ${idx === 0 ? ds.colors.primary[500] : ds.colors.semantic.text.secondary}; 
                          border-radius: ${ds.borderRadius.lg}; 
                          cursor: pointer; 
                          font-weight: ${ds.typography.fontWeight.semibold};
                          font-size: ${ds.typography.fontSize.sm};
                          ${ds.transitions.all};
                        "
                        onmouseover="
                          this.style.transform='translateY(-2px)';
                          this.style.boxShadow='${ds.shadows.sm}';
                        "
                        onmouseout="
                          if (!this.classList.contains('active')) {
                            this.style.transform='translateY(0)';
                            this.style.boxShadow='none';
                          }
                        "
                        class="${idx === 0 ? 'active' : ''}">
                  ${option}
                </button>
              `).join('')}
            </div>
          `}
        </div>
      `).join('')}
    </section>
    
    <style>
      ${ds.animations.keyframes}
      
      /* Active state styles */
      .active {
        border-color: ${ds.colors.primary[500]} !important;
        background: ${ds.colors.primary[50]} !important;
        color: ${ds.colors.primary[500]} !important;
        box-shadow: ${ds.shadows.colorSm(ds.colors.primary[500])} !important;
      }
      
      /* Focus states */
      button:focus-visible {
        outline: 2px solid ${ds.colors.primary[500]};
        outline-offset: 2px;
      }
      
      /* Responsive adjustments */
      @media (max-width: ${ds.breakpoints.md}) {
        section[style*="padding: ${ds.spacing[6]} 0"] {
          padding: ${ds.spacing[4]} 0 !important;
        }
        
        div[style*="margin-bottom: ${ds.spacing[8]}"] {
          margin-bottom: ${ds.spacing[6]} !important;
        }
        
        button[style*="width: ${ds.spacing[12]}"] {
          width: ${ds.spacing[10]} !important;
          height: ${ds.spacing[10]} !important;
        }
        
        button[style*="padding: ${ds.spacing[3]} ${ds.spacing[6]}"] {
          padding: ${ds.spacing[2]} ${ds.spacing[4]} !important;
          font-size: ${ds.typography.fontSize.xs} !important;
        }
        
        div[style*="gap: ${ds.spacing[3]}"] {
          gap: ${ds.spacing[2]} !important;
        }
      }
      
      @media (max-width: ${ds.breakpoints.sm}) {
        button[style*="width: ${ds.spacing[12]}"] {
          width: ${ds.spacing[8]} !important;
          height: ${ds.spacing[8]} !important;
        }
        
        div[style*="gap: ${ds.spacing[3]}"] {
          gap: ${ds.spacing[1.5]} !important;
        }
        
        label[style*="font-size: ${ds.typography.fontSize.base}"] {
          font-size: ${ds.typography.fontSize.sm} !important;
        }
      }
    </style>
    
    <script>
      function handleVariantSelect(variantName, option, element) {
        // Update selected text display
        const selectedElement = document.getElementById(variantName.toLowerCase() + '-selected');
        if (selectedElement) {
          selectedElement.textContent = option;
        }
        
        // Update active state for all buttons in this variant group
        const variantGroup = element.closest('div').querySelectorAll('button');
        variantGroup.forEach(btn => {
          btn.classList.remove('active');
          btn.style.borderColor = '${ds.colors.semantic.border.primary}';
          btn.style.background = '${ds.colors.semantic.bg.primary}';
          btn.style.color = '${ds.colors.semantic.text.secondary}';
          btn.style.transform = 'translateY(0)';
          btn.style.boxShadow = 'none';
          
          // Remove checkmark from color swatches
          const checkmark = btn.querySelector('div[style*="position: absolute"]');
          if (checkmark) {
            checkmark.remove();
          }
        });
        
        // Set active state for clicked element
        element.classList.add('active');
        element.style.borderColor = '${ds.colors.primary[500]}';
        element.style.background = '${ds.colors.primary[50]}';
        element.style.color = '${ds.colors.primary[500]}';
        element.style.boxShadow = '${ds.shadows.colorSm(ds.colors.primary[500])}';
        
        // Add checkmark to color swatches
        if (element.querySelector('div[style*="background:"]')) {
          const checkmark = document.createElement('div');
          checkmark.style.cssText = \`
            position: absolute;
            top: 2px;
            right: 2px;
            width: ${ds.spacing[3]};
            height: ${ds.spacing[3]};
            background: ${ds.colors.primary[500]};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          \`;
          checkmark.innerHTML = '<span style=\"color: white; font-size: ${ds.typography.fontSize.xs}; line-height: 1;\">✓</span>';
          element.appendChild(checkmark);
        }
        
        // Emit custom event for variant change
        const event = new CustomEvent('variantChange', {
          detail: {
            variant: variantName,
            option: option,
            element: element
          }
        });
        document.dispatchEvent(event);
      }
      
      // Initialize first variant as active on load
      document.addEventListener('DOMContentLoaded', function() {
        const variantGroups = document.querySelectorAll('div[style*="margin-bottom"]');
        variantGroups.forEach(group => {
          const firstButton = group.querySelector('button');
          if (firstButton) {
            // Trigger click to set initial active state
            firstButton.click();
          }
        });
      });
    </script>
  `;
};