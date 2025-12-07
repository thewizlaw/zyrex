import { ComponentRenderer } from '../types';
import { createDesignSystem } from '../design-system';

// 🎯 EXAMPLE HERO COMPONENT - Using unified design system
export const renderHero: ComponentRenderer = (section, styles) => {
  // Initialize design system with current styles
  const ds = createDesignSystem(styles);
  
  // Destructure data with defaults
  const { 
    title = "Welcome",
    subtitle = "",
    text = "",
    image = "",
    cta_text = "Get Started",
    cta_link = "#",
    layout = "center" // center | left | right
  } = section;
  
  return `
    <section style="
      position: relative;
      padding: ${ds.sectionPadding.xl};
      background: ${ds.colors.semantic.gradient.radial};
      overflow: hidden;
    ">
      <!-- Background decoration -->
      <div style="
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background: ${ds.colors.semantic.gradient.primary};
        opacity: 0.1;
        border-radius: ${ds.borderRadius['3xl']};
        transform: rotate(-6deg) translateX(20%);
        pointer-events: none;
      "></div>
      
      <div class="container" style="position: relative; z-index: 1;">
        <div style="
          display: grid;
          ${image ? ds.grid.cols[2] : 'grid-template-columns: 1fr'};
          ${ds.grid.gap.xl};
          align-items: center;
          min-height: 500px;
        ">
          <!-- Content Column -->
          <div style="
            text-align: ${layout === 'center' ? 'center' : 'left'};
            ${layout === 'center' && !image ? 'max-width: 800px; margin: 0 auto;' : ''}
            ${ds.animations.slideInLeft};
          ">
            <!-- Title -->
            <h1 style="
              font-size: ${ds.typography.fontSize.h1};
              font-weight: ${ds.typography.fontWeight.black};
              color: ${ds.colors.semantic.text.primary};
              line-height: ${ds.typography.lineHeight.tight};
              letter-spacing: ${ds.typography.letterSpacing.tight};
              margin-bottom: ${ds.spacing[6]};
              background: ${ds.colors.semantic.gradient.primary};
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            ">
              ${title}
            </h1>
            
            <!-- Subtitle -->
            ${subtitle ? `
              <p style="
                font-size: ${ds.typography.fontSize['2xl']};
                font-weight: ${ds.typography.fontWeight.semibold};
                color: ${ds.colors.semantic.text.secondary};
                line-height: ${ds.typography.lineHeight.relaxed};
                margin-bottom: ${ds.spacing[4]};
              ">
                ${subtitle}
              </p>
            ` : ''}
            
            <!-- Description Text -->
            ${text ? `
              <p style="
                font-size: ${ds.typography.fontSize.lg};
                color: ${ds.colors.semantic.text.tertiary};
                line-height: ${ds.typography.lineHeight.relaxed};
                margin-bottom: ${ds.spacing[8]};
                max-width: ${ds.containers.maxWidth.content};
                ${layout === 'center' ? 'margin-left: auto; margin-right: auto;' : ''}
              ">
                ${text}
              </p>
            ` : ''}
            
            <!-- CTA Button -->
            <div style="
              display: flex;
              gap: ${ds.spacing[4]};
              ${layout === 'center' ? 'justify-content: center;' : ''}
            ">
              <a href="${cta_link}" style="
                ${ds.createButtonStyles('primary')};
                box-shadow: ${ds.shadows.colorMd(ds.colors.primary[500])};
              " onmouseover="
                this.style.transform='translateY(-3px)';
                this.style.boxShadow='${ds.shadows.colorLg(ds.colors.primary[500])}';
              " onmouseout="
                this.style.transform='translateY(0)';
                this.style.boxShadow='${ds.shadows.colorMd(ds.colors.primary[500])}';
              ">
                ${cta_text}
                <svg style="
                  width: 20px;
                  height: 20px;
                  margin-left: ${ds.spacing[2]};
                  ${ds.transitions.transform};
                " fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              
              <a href="#learn-more" style="
                ${ds.createButtonStyles('outline')};
              " onmouseover="
                this.style.background='${ds.colors.primary[50]}';
              " onmouseout="
                this.style.background='transparent';
              ">
                Learn More
              </a>
            </div>
            
            <!-- Trust Badges -->
            <div style="
              display: flex;
              gap: ${ds.spacing[6]};
              margin-top: ${ds.spacing[12]};
              ${layout === 'center' ? 'justify-content: center;' : ''}
              flex-wrap: wrap;
            ">
              ${['⭐ 4.9/5 Rating', '🚀 1000+ Users', '🔒 Secure'].map((badge, index) => `
                <div style="
                  display: flex;
                  align-items: center;
                  gap: ${ds.spacing[2]};
                  font-size: ${ds.typography.fontSize.sm};
                  color: ${ds.colors.semantic.text.tertiary};
                  ${ds.animations.fadeIn};
                  animation-delay: ${index * 0.1}s;
                ">
                  ${badge}
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- Image Column -->
          ${image ? `
            <div style="
              position: relative;
              ${ds.animations.slideInRight};
            ">
              <img src="${image}" alt="${title}" style="
                width: 100%;
                height: auto;
                border-radius: ${ds.borderRadius['3xl']};
                box-shadow: ${ds.shadows.xl};
                object-fit: cover;
                max-height: 600px;
              " />
              
              <!-- Floating stats card -->
              <div style="
                position: absolute;
                bottom: ${ds.spacing[8]};
                right: ${ds.spacing[8]};
                background: ${ds.colors.semantic.bg.overlay};
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                padding: ${ds.spacing[6]};
                border-radius: ${ds.borderRadius['2xl']};
                border: 1px solid ${ds.colors.semantic.border.primary};
                box-shadow: ${ds.shadows.lg};
                ${ds.animations.scaleUp};
                animation-delay: 0.3s;
              ">
                <div style="
                  font-size: ${ds.typography.fontSize['3xl']};
                  font-weight: ${ds.typography.fontWeight.extrabold};
                  color: ${ds.colors.primary[500]};
                  line-height: 1;
                ">
                  99%
                </div>
                <div style="
                  font-size: ${ds.typography.fontSize.sm};
                  color: ${ds.colors.semantic.text.tertiary};
                  margin-top: ${ds.spacing[2]};
                ">
                  Customer Satisfaction
                </div>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
      
      <style>
        /* Responsive adjustments */
        @media (max-width: ${ds.breakpoints.md}) {
          section[style*="padding: ${ds.sectionPadding.xl}"] {
            padding: ${ds.sectionPadding.md} !important;
          }
          
          div[style*="grid-template-columns"] {
            ${ds.grid.cols[1]} !important;
            text-align: center !important;
          }
          
          div[style*="justify-content"] {
            justify-content: center !important;
          }
          
          img[style*="max-height"] {
            max-height: 400px !important;
          }
        }
      </style>
    </section>
  `;
};
