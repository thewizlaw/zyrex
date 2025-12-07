import createDesignSystem from "../../design-system";

// 16. NEWSLETTER SIGNUP - Using Design System
export const renderNewsletterSignup = (section: any, styles: any) => {
  const { 
    title = "Join Our Newsletter",
    subtitle = "Get exclusive offers and updates delivered to your inbox",
    placeholder = "Enter your email address"
  } = section;
  
  // Initialize design system
  const ds = createDesignSystem(styles);

  return `
    <section style="
      background: ${ds.colors.semantic.gradient.radial};
      padding: ${ds.sectionPadding.lg};
      border-radius: ${ds.borderRadius['2xl']};
      margin: ${ds.spacing[16]} 0;
      ${ds.animations.fadeIn};
    ">
      <div style="
        max-width: ${ds.containers.maxWidth['2xl']}; 
        margin: 0 auto; 
        text-align: center;
      ">
        <!-- Header -->
        <h2 style="
          font-size: ${ds.typography.fontSize.h2};
          font-weight: ${ds.typography.fontWeight.bold}; 
          color: ${ds.colors.semantic.text.primary}; 
          margin-bottom: ${ds.spacing[3]};
          line-height: ${ds.typography.lineHeight.tight};
        ">
          ${title}
        </h2>
        
        <!-- Subtitle -->
        <p style="
          color: ${ds.colors.semantic.text.tertiary}; 
          font-size: ${ds.typography.fontSize.lg}; 
          margin-bottom: ${ds.spacing[8]};
          line-height: ${ds.typography.lineHeight.relaxed};
          max-width: ${ds.containers.maxWidth.md};
          margin-left: auto;
          margin-right: auto;
        ">
          ${subtitle}
        </p>
        
        <!-- Form -->
        <form style="
          display: flex; 
          gap: ${ds.spacing[4]}; 
          max-width: ${ds.containers.maxWidth.lg}; 
          margin: 0 auto;
        " class="newsletter-form">
          <input type="email" 
                 placeholder="${placeholder}" 
                 required
                 style="
                   flex: 1; 
                   padding: ${ds.spacing[4]} ${ds.spacing[6]}; 
                   border: 2px solid ${ds.colors.semantic.border.primary}; 
                   border-radius: ${ds.borderRadius.lg}; 
                   font-size: ${ds.typography.fontSize.base};
                   font-weight: ${ds.typography.fontWeight.medium};
                   color: ${ds.colors.semantic.text.primary};
                   background: ${ds.colors.semantic.bg.primary};
                   ${ds.transitions.all};
                 "
                 onfocus="
                   this.style.borderColor='${ds.colors.primary[500]}';
                   this.style.boxShadow='0 0 0 3px ${ds.colors.primary[100]}';
                 "
                 onblur="
                   this.style.borderColor='${ds.colors.semantic.border.primary}';
                   this.style.boxShadow='none';
                 ">
          <button type="submit" 
                  style="
                    ${ds.createButtonStyles('primary')};
                    box-shadow: ${ds.shadows.colorMd(ds.colors.primary[500])};
                    white-space: nowrap;
                    padding: ${ds.spacing[4]} ${ds.spacing[8]};
                    font-size: ${ds.typography.fontSize.base};
                  "
                  onmouseover="
                    this.style.transform='translateY(-2px)';
                    this.style.boxShadow='${ds.shadows.colorLg(ds.colors.primary[500])}';
                  "
                  onmouseout="
                    this.style.transform='translateY(0)';
                    this.style.boxShadow='${ds.shadows.colorMd(ds.colors.primary[500])}';
                  ">
            Subscribe
          </button>
        </form>
        
        <!-- Privacy Note -->
        <p style="
          color: ${ds.colors.semantic.text.muted}; 
          font-size: ${ds.typography.fontSize.sm}; 
          margin-top: ${ds.spacing[4]};
          display: flex;
          align-items: center;
          justify-content: center;
          gap: ${ds.spacing[2]};
        ">
          <span style="font-size: ${ds.typography.fontSize.base};">🔒</span>
          Your email is safe with us. No spam, unsubscribe anytime.
        </p>
        
        <!-- Success/Error Messages (Hidden by default) -->
        <div id="newsletter-success" style="
          display: none;
          background: ${ds.colors.semantic.status.success}10;
          color: ${ds.colors.semantic.status.success};
          padding: ${ds.spacing[4]};
          border-radius: ${ds.borderRadius.lg};
          margin-top: ${ds.spacing[4]};
          border: 1px solid ${ds.colors.semantic.status.success}30;
          font-weight: ${ds.typography.fontWeight.medium};
        ">
          ✅ Thank you for subscribing! Please check your email to confirm.
        </div>
        
        <div id="newsletter-error" style="
          display: none;
          background: ${ds.colors.semantic.status.error}10;
          color: ${ds.colors.semantic.status.error};
          padding: ${ds.spacing[4]};
          border-radius: ${ds.borderRadius.lg};
          margin-top: ${ds.spacing[4]};
          border: 1px solid ${ds.colors.semantic.status.error}30;
          font-weight: ${ds.typography.fontWeight.medium};
        ">
          ❌ Please enter a valid email address.
        </div>
      </div>
      
      <style>
        ${ds.animations.keyframes}
        
        /* Responsive adjustments */
        @media (max-width: ${ds.breakpoints.md}) {
          section[style*="padding: ${ds.sectionPadding.lg}"] {
            padding: ${ds.spacing[12]} ${ds.spacing[6]} !important;
            margin: ${ds.spacing[12]} 0 !important;
          }
          
          h2[style*="font-size: ${ds.typography.fontSize.h2}"] {
            font-size: ${ds.typography.fontSize['2xl']} !important;
          }
          
          p[style*="font-size: ${ds.typography.fontSize.lg}"] {
            font-size: ${ds.typography.fontSize.base} !important;
            margin-bottom: ${ds.spacing[6]} !important;
          }
          
          .newsletter-form {
            flex-direction: column !important;
            gap: ${ds.spacing[3]} !important;
          }
          
          .newsletter-form input {
            width: 100% !important;
          }
          
          .newsletter-form button {
            width: 100% !important;
          }
        }
        
        @media (max-width: ${ds.breakpoints.sm}) {
          section[style*="padding: ${ds.sectionPadding.lg}"] {
            padding: ${ds.spacing[8]} ${ds.spacing[4]} !important;
            margin: ${ds.spacing[8]} 0 !important;
            border-radius: ${ds.borderRadius.xl} !important;
          }
          
          h2[style*="font-size: ${ds.typography.fontSize.h2}"] {
            font-size: ${ds.typography.fontSize.xl} !important;
            margin-bottom: ${ds.spacing[2]} !important;
          }
          
          p[style*="font-size: ${ds.typography.fontSize.lg}"] {
            font-size: ${ds.typography.fontSize.sm} !important;
            margin-bottom: ${ds.spacing[4]} !important;
          }
          
          .newsletter-form input {
            padding: ${ds.spacing[3]} ${ds.spacing[4]} !important;
            font-size: ${ds.typography.fontSize.sm} !important;
          }
          
          .newsletter-form button {
            padding: ${ds.spacing[3]} ${ds.spacing[6]} !important;
            font-size: ${ds.typography.fontSize.sm} !important;
          }
          
          p[style*="font-size: ${ds.typography.fontSize.sm}"] {
            font-size: ${ds.typography.fontSize.xs} !important;
          }
        }
        
        /* Focus states for accessibility */
        .newsletter-form input:focus-visible {
          outline: 2px solid ${ds.colors.primary[500]};
          outline-offset: 2px;
        }
        
        .newsletter-form button:focus-visible {
          outline: 2px solid ${ds.colors.primary[500]};
          outline-offset: 2px;
        }
        
        /* Loading state */
        .newsletter-form.loading button {
          position: relative;
          color: transparent;
        }
        
        .newsletter-form.loading button::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid ${ds.colors.semantic.bg.primary};
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
      </style>
      
      <script>
        // Newsletter form handling
        document.addEventListener('DOMContentLoaded', function() {
          const form = document.querySelector('.newsletter-form');
          const successMsg = document.getElementById('newsletter-success');
          const errorMsg = document.getElementById('newsletter-error');
          
          if (form) {
            form.addEventListener('submit', function(e) {
              e.preventDefault();
              const emailInput = this.querySelector('input[type="email"]');
              const email = emailInput.value.trim();
              
              // Basic email validation
              const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
              
              if (!emailRegex.test(email)) {
                showError();
                return;
              }
              
              // Show loading state
              this.classList.add('loading');
              emailInput.disabled = true;
              
              // Simulate API call
              setTimeout(() => {
                this.classList.remove('loading');
                emailInput.disabled = false;
                showSuccess();
                emailInput.value = '';
              }, 1500);
            });
          }
          
          function showSuccess() {
            if (successMsg && errorMsg) {
              successMsg.style.display = 'block';
              errorMsg.style.display = 'none';
              
              // Hide success message after 5 seconds
              setTimeout(() => {
                successMsg.style.display = 'none';
              }, 5000);
            }
          }
          
          function showError() {
            if (successMsg && errorMsg) {
              errorMsg.style.display = 'block';
              successMsg.style.display = 'none';
              
              // Hide error message after 3 seconds
              setTimeout(() => {
                errorMsg.style.display = 'none';
              }, 3000);
            }
          }
        });
      </script>
    </section>
  `;
};