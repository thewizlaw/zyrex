// 🎨 GENERIC SEARCH-FOCUSED HEADER - Using Design System
import { createDesignSystem } from '../design-system';

export const renderHeader = (header: any, styles: any) => {
  const { logo = "StoreName" } = header;
  
  // Initialize design system
  const ds = createDesignSystem(styles);

  return `
    <header style="
      background: ${ds.colors.semantic.bg.overlay}; 
      border-bottom: 1px solid ${ds.colors.semantic.border.primary};
      position: sticky; 
      top: 0; 
      z-index: ${ds.zIndex.sticky}; 
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      box-shadow: ${ds.shadows.xs};
      ${ds.transitions.all};
    ">
      <div style="${ds.containers.base}">
        <nav style="
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          padding: ${ds.spacing[3]} 0;
          position: relative;
          gap: ${ds.spacing[6]};
        ">
          <!-- Logo Section -->
          <a href="/" style="
            text-decoration: none; 
            display: inline-flex;
            align-items: center;
            flex-shrink: 0;
            font-size: ${ds.typography.fontSize.h4};
            font-weight: ${ds.typography.fontWeight.extrabold}; 
            color: ${ds.colors.primary[500]};
            gap: ${ds.spacing[2]};
            ${ds.transitions.transform};
          "
          onmouseover="this.style.transform='scale(1.05)';"
          onmouseout="this.style.transform='scale(1)';">
            <!-- Logo Icon -->
            <span style="
              font-size: ${ds.typography.fontSize['2xl']};
              filter: drop-shadow(0 2px 4px ${ds.colors.primary[400]});
            ">🛍️</span>
            <span>${logo}</span>
          </a>
          
          <!-- Central Search Bar -->
          <div style="
            flex: 1; 
            max-width: ${ds.containers.maxWidth['5xl']};
            display: none;
          " class="desktop-search-bar">
            <div style="
              position: relative; 
              display: flex; 
              align-items: center; 
              background: ${ds.colors.semantic.bg.tertiary}; 
              border-radius: ${ds.borderRadius.full}; 
              height: ${ds.spacing[12]}; 
              width: 100%;
              ${ds.transitions.all};
            ">
              <!-- Search Icon -->
              <svg style="
                position: absolute; 
                left: ${ds.spacing[5]}; 
                width: ${ds.spacing[5]}; 
                height: ${ds.spacing[5]}; 
                color: ${ds.colors.semantic.text.tertiary}; 
                pointer-events: none;
              " width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              
              <!-- Input -->
              <input type="text" placeholder="What are you looking for?" style="
                width: 100%; 
                height: 100%; 
                background: transparent; 
                border: none; 
                outline: none; 
                padding-left: ${ds.spacing[14]}; 
                padding-right: ${ds.spacing[14]}; 
                font-size: ${ds.typography.fontSize.base}; 
                color: ${ds.colors.semantic.text.primary};
                border-radius: ${ds.borderRadius.full};
                font-weight: ${ds.typography.fontWeight.medium};
              " onfocus="
                this.parentElement.style.background='${ds.colors.semantic.bg.primary}';
                this.parentElement.style.boxShadow='0 0 0 2px ${ds.colors.primary[400]}';
              " onblur="
                this.parentElement.style.background='${ds.colors.semantic.bg.tertiary}';
                this.parentElement.style.boxShadow='none';
              ">
              
              <!-- Camera Icon -->
              <button onclick="alert('Image Search')" style="
                position: absolute; 
                right: ${ds.spacing[2]}; 
                top: 50%;
                transform: translateY(-50%);
                background: transparent; 
                border: none; 
                cursor: pointer; 
                padding: ${ds.spacing[2]}; 
                border-radius: ${ds.borderRadius.full}; 
                color: ${ds.colors.semantic.text.tertiary};
                display: flex;
                align-items: center;
                justify-content: center;
                ${ds.transitions.all};
              " onmouseover="
                this.style.background='${ds.colors.semantic.bg.hover}';
                this.style.color='${ds.colors.primary[500]}';
              " onmouseout="
                this.style.background='transparent';
                this.style.color='${ds.colors.semantic.text.tertiary}';
              ">
                <svg style="width: ${ds.spacing[5]}; height: ${ds.spacing[5]};" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M23 19a2 2 0 0 0-2-2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-1z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Action Icons -->
          <div style="
            display: flex; 
            align-items: center; 
            gap: ${ds.spacing[2]};
            margin-left: auto;
          ">
            
            <!-- Account Button -->
            <a href="#" style="
              background: transparent;
              border: none; 
              color: ${ds.colors.semantic.text.secondary}; 
              cursor: pointer; 
              padding: ${ds.spacing[2]} ${ds.spacing[3]};
              border-radius: ${ds.borderRadius.lg};
              ${ds.transitions.all};
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              font-size: ${ds.typography.fontSize.sm};
              font-weight: ${ds.typography.fontWeight.medium};
              gap: ${ds.spacing[1.5]};
            " 
            onmouseover="
              this.style.background='${ds.colors.primary[50]}';
              this.style.color='${ds.colors.primary[500]}';
            " 
            onmouseout="
              this.style.background='transparent';
              this.style.color='${ds.colors.semantic.text.secondary}';
            "
            title="Account">
              <svg width="${ds.spacing[5]}" height="${ds.spacing[5]}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span class="account-text" style="white-space: nowrap;">Log in</span>
            </a>
            
            <!-- Wishlist Button -->
            <button onclick="alert('Wishlist')" style="
              background: transparent;
              border: none; 
              color: ${ds.colors.semantic.text.secondary}; 
              cursor: pointer; 
              padding: ${ds.spacing[2]};
              border-radius: ${ds.borderRadius.lg};
              ${ds.transitions.all};
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              width: ${ds.spacing[10]};
              height: ${ds.spacing[10]};
            " 
            onmouseover="
              this.style.background='${ds.colors.semantic.status.error}10';
              this.style.color='${ds.colors.semantic.status.error}';
              this.style.transform='scale(1.1)';
            " 
            onmouseout="
              this.style.background='transparent';
              this.style.color='${ds.colors.semantic.text.secondary}';
              this.style.transform='scale(1)';
            "
            title="Wishlist">
              <svg width="${ds.spacing[5]}" height="${ds.spacing[5]}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            
            <!-- Cart Button -->
            <button onclick="alert('View cart')" style="
              background: transparent;
              border: none; 
              color: ${ds.colors.semantic.text.secondary}; 
              cursor: pointer; 
              padding: ${ds.spacing[2]};
              border-radius: ${ds.borderRadius.lg};
              ${ds.transitions.all};
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              width: ${ds.spacing[10]};
              height: ${ds.spacing[10]};
            " 
            onmouseover="
              this.style.background='${ds.colors.primary[50]}';
              this.style.color='${ds.colors.primary[500]}';
              this.style.transform='scale(1.1)';
            " 
            onmouseout="
              this.style.background='transparent';
              this.style.color='${ds.colors.semantic.text.secondary}';
              this.style.transform='scale(1)';
            "
            title="Cart">
              <svg width="${ds.spacing[5]}" height="${ds.spacing[5]}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
            
            <!-- Mobile Search Icon -->
            <button onclick="alert('Search functionality')" style="
              background: transparent;
              border: none; 
              color: ${ds.colors.semantic.text.secondary}; 
              cursor: pointer; 
              padding: ${ds.spacing[2]};
              border-radius: ${ds.borderRadius.lg};
              ${ds.transitions.all};
              display: none;
              align-items: center;
              justify-content: center;
              position: relative;
              width: ${ds.spacing[10]};
              height: ${ds.spacing[10]};
            "
            class="mobile-search-button"
            onmouseover="
              this.style.background='${ds.colors.primary[50]}';
              this.style.color='${ds.colors.primary[500]}';
            " 
            onmouseout="
              this.style.background='transparent';
              this.style.color='${ds.colors.semantic.text.secondary}';
            "
            title="Search">
              <svg width="${ds.spacing[5]}" height="${ds.spacing[5]}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>

          </div>
        </nav>
      </div>
      
      <style>
        /* Responsive Design */
        @media (max-width: ${ds.breakpoints.md}) {
          .desktop-search-bar {
            display: none !important;
          }
          .account-text {
            display: none !important;
          }
          .mobile-search-button {
            display: flex !important;
          }
          
          nav[style*="gap: ${ds.spacing[6]}"] {
            gap: ${ds.spacing[4]} !important;
          }
        }
        
        @media (min-width: ${ds.breakpoints.lg}) {
          .desktop-search-bar {
            display: block !important;
          }
        }
        
        /* Smooth transitions */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Focus states for accessibility */
        button:focus-visible,
        a:focus-visible,
        input:focus-visible {
          outline: 2px solid ${ds.colors.primary[500]};
          outline-offset: 2px;
        }
        
        ${ds.animations.keyframes}
      </style>
    </header>
  `;
};