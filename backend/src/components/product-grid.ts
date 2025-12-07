// 🛍️ MODERN PRODUCT GRID - Using Design System (No Filters)
import { createDesignSystem } from '../design-system';

// 🛍️ MODERN PRODUCT GRID - Using Design System (No Filters)
// 🛍️ MODERN PRODUCT GRID - Using Design System (No Filters)
export const renderProductGrid = (section: any, styles: any) => {
  // Safe destructuring with defaults
  const safeSection = section || {};
  const { title, subtitle, items } = safeSection;
  const safeItems = items || [];

  // Initialize design system
  const ds = createDesignSystem(styles);

  return `
    <section style="
      padding: ${ds.sectionPadding.xl}; 
      background: ${ds.colors.semantic.gradient.light};
      ${ds.animations.fadeIn};
    ">
      <div style="${ds.containers.base}">
        <!-- Page Header -->
        ${title || subtitle ? `
          <div style="text-align: center; margin-bottom: ${ds.spacing[14]};">
            ${title ? `
              <h1 style="
                font-size: ${ds.typography.fontSize.h1};
                font-weight: ${ds.typography.fontWeight.extrabold}; 
                margin-bottom: ${ds.spacing[4]}; 
                background: ${ds.colors.semantic.gradient.primary};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                letter-spacing: ${ds.typography.letterSpacing.tight};
              ">${title}</h1>
            ` : ''}
            ${subtitle ? `
              <p style="
                font-size: ${ds.typography.fontSize.xl}; 
                color: ${ds.colors.semantic.text.tertiary}; 
                max-width: ${ds.containers.maxWidth['3xl']}; 
                margin: 0 auto;
                line-height: ${ds.typography.lineHeight.relaxed};
              ">${subtitle}</p>
            ` : ''}
          </div>
        ` : ''}
        
        <!-- Products Section Only (No Filters) -->
        <div>
          <!-- Toolbar -->
          <div style="
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            margin-bottom: ${ds.spacing[8]}; 
            background: ${ds.colors.semantic.bg.primary}; 
            padding: ${ds.spacing[5]} ${ds.spacing[7]}; 
            border-radius: ${ds.borderRadius.xl}; 
            box-shadow: ${ds.shadows.sm};
            border: 1px solid ${ds.colors.semantic.border.primary};
            gap: ${ds.spacing[4]};
          " class="product-toolbar">
            <div style="
              color: ${ds.colors.semantic.text.tertiary}; 
              font-size: ${ds.typography.fontSize.sm};
              font-weight: ${ds.typography.fontWeight.medium};
              white-space: nowrap;
            ">
              <span style="color: ${ds.colors.semantic.text.primary}; font-weight: ${ds.typography.fontWeight.bold};">${safeItems.length}</span> products found
            </div>
            <div style="display: flex; align-items: center; gap: ${ds.spacing[4]}; flex-wrap: wrap; justify-content: flex-end; flex: 1;">
              <span style="
                color: ${ds.colors.semantic.text.tertiary}; 
                font-size: ${ds.typography.fontSize.sm};
                font-weight: ${ds.typography.fontWeight.medium};
                white-space: nowrap;
              ">Sort by:</span>
              <select onchange="updateSorting()" style="
                padding: ${ds.spacing[2]} ${ds.spacing[4]}; 
                border: 1px solid ${ds.colors.semantic.border.primary}; 
                border-radius: ${ds.borderRadius.lg}; 
                background: ${ds.colors.semantic.bg.primary}; 
                font-size: ${ds.typography.fontSize.sm};
                font-weight: ${ds.typography.fontWeight.medium};
                color: ${ds.colors.semantic.text.secondary};
                cursor: pointer;
                ${ds.transitions.all};
                min-width: 160px;
              " onmouseover="
                this.style.borderColor='${ds.colors.primary[500]}';
              " onmouseout="
                this.style.borderColor='${ds.colors.semantic.border.primary}';
              ">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          
          <!-- Product Grid - Responsive layout -->
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: ${ds.spacing[6]};
          ">
            ${safeItems.length > 0 ? safeItems.map((product: any, index: number) => {
              const safeProduct = product || {};
              const productName = safeProduct.name || 'Product Name';
              const productPrice = safeProduct.price || '49.99';
              const originalPrice = safeProduct.original_price;
              const productRating = safeProduct.rating || 4;
              const productImage = safeProduct.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400';
              const productCategory = safeProduct.category;
              const productDescription = safeProduct.description;
              
              return `
              <article style="
                background: ${ds.colors.semantic.bg.primary}; 
                border-radius: ${ds.borderRadius['2xl']}; 
                overflow: hidden; 
                box-shadow: ${ds.shadows.sm}; 
                ${ds.transitions.all}; 
                position: relative;
                border: 1px solid ${ds.colors.semantic.border.primary};
                ${ds.animations.slideUp};
                animation-delay: ${index * 0.05}s;
              " onmouseover="
                this.style.transform='translateY(-${ds.spacing[2]})';
                this.style.boxShadow='${ds.shadows.lg}';
                this.style.borderColor='${ds.colors.primary[200]}';
              " onmouseout="
                this.style.transform='translateY(0)';
                this.style.boxShadow='${ds.shadows.sm}';
                this.style.borderColor='${ds.colors.semantic.border.primary}';
              ">
                <!-- Sale Badge -->
                ${originalPrice ? `
                  <div style="
                    position: absolute; 
                    top: ${ds.spacing[3]}; 
                    left: ${ds.spacing[3]}; 
                    background: ${ds.colors.semantic.gradient.primary}; 
                    color: white; 
                    padding: ${ds.spacing[1]} ${ds.spacing[3]}; 
                    border-radius: ${ds.borderRadius.full}; 
                    font-size: ${ds.typography.fontSize.xs}; 
                    font-weight: ${ds.typography.fontWeight.bold}; 
                    z-index: ${ds.zIndex[10]};
                    box-shadow: ${ds.shadows.colorMd(ds.colors.primary[500])};
                    letter-spacing: ${ds.typography.letterSpacing.wide};
                  ">
                    SALE
                  </div>
                ` : ''}
                
                <!-- Wishlist Button -->
                <button onclick="addToWishlist()" style="
                  position: absolute; 
                  top: ${ds.spacing[3]}; 
                  right: ${ds.spacing[3]}; 
                  background: ${ds.colors.semantic.bg.overlay}; 
                  backdrop-filter: blur(8px);
                  border: none; 
                  border-radius: ${ds.borderRadius.full}; 
                  width: ${ds.spacing[10]}; 
                  height: ${ds.spacing[10]}; 
                  display: flex; 
                  align-items: center; 
                  justify-content: center; 
                  cursor: pointer; 
                  box-shadow: ${ds.shadows.md}; 
                  z-index: ${ds.zIndex[10]}; 
                  ${ds.transitions.all};
                " onmouseover="
                  this.style.background='${ds.colors.semantic.status.error}10';
                  this.style.transform='scale(1.1) rotate(10deg)';
                  this.querySelector('span').style.color='${ds.colors.semantic.status.error}';
                " onmouseout="
                  this.style.background='${ds.colors.semantic.bg.overlay}';
                  this.style.transform='scale(1) rotate(0deg)';
                  this.querySelector('span').style.color='${ds.colors.semantic.text.tertiary}';
                ">
                  <span style="
                    font-size: ${ds.typography.fontSize.xl};
                    color: ${ds.colors.semantic.text.tertiary};
                    ${ds.transitions.colors};
                  ">♡</span>
                </button>
                
                <!-- Product Image -->
                <div style="
                  background: ${ds.colors.semantic.gradient.light}; 
                  padding: ${ds.spacing[8]}; 
                  text-align: center; 
                  border-bottom: 1px solid ${ds.colors.semantic.border.primary};
                  position: relative;
                  overflow: hidden;
                ">
                  <img src="${productImage}" 
                       alt="${productName}" 
                       style="
                         width: 100%; 
                         height: 200px; 
                         object-fit: contain; 
                         mix-blend-mode: multiply;
                         ${ds.transitions.transform};
                       "
                       onmouseover="this.style.transform='scale(1.08)'"
                       onmouseout="this.style.transform='scale(1)'">
                </div>
                
                <!-- Product Info -->
                <div style="padding: ${ds.spacing[5]};">
                  <!-- Category Badge -->
                  ${productCategory ? `
                    <span style="
                      display: inline-block;
                      background: ${ds.colors.primary[50]};
                      color: ${ds.colors.primary[500]};
                      padding: ${ds.spacing[1]} ${ds.spacing[2]};
                      border-radius: ${ds.borderRadius.lg};
                      font-size: ${ds.typography.fontSize.xs};
                      font-weight: ${ds.typography.fontWeight.semibold};
                      margin-bottom: ${ds.spacing[2]};
                      text-transform: uppercase;
                      letter-spacing: ${ds.typography.letterSpacing.wide};
                    ">${productCategory}</span>
                  ` : ''}
                  
                  <h3 style="
                    font-size: ${ds.typography.fontSize.base}; 
                    font-weight: ${ds.typography.fontWeight.bold}; 
                    margin-bottom: ${ds.spacing[2]}; 
                    color: ${ds.colors.semantic.text.primary}; 
                    line-height: ${ds.typography.lineHeight.tight};
                    letter-spacing: ${ds.typography.letterSpacing.tight};
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    min-height: 2.5em;
                  ">
                    ${productName}
                  </h3>
                  
                  ${productDescription ? `
                    <p style="
                      color: ${ds.colors.semantic.text.tertiary}; 
                      font-size: ${ds.typography.fontSize.sm}; 
                      margin-bottom: ${ds.spacing[3]}; 
                      line-height: ${ds.typography.lineHeight.relaxed}; 
                      display: -webkit-box; 
                      -webkit-line-clamp: 2; 
                      -webkit-box-orient: vertical; 
                      overflow: hidden;
                      min-height: 2.5em;
                    ">
                      ${productDescription}
                    </p>
                  ` : ''}
                  
                  <!-- Rating -->
                  <div style="
                    display: flex; 
                    align-items: center; 
                    gap: ${ds.spacing[1]}; 
                    margin-bottom: ${ds.spacing[3]};
                  ">
                    <div style="
                      color: ${ds.colors.semantic.status.warning}; 
                      font-size: ${ds.typography.fontSize.sm};
                      letter-spacing: ${ds.typography.letterSpacing.wide};
                    ">
                      ${'★'.repeat(Math.floor(productRating))}${'☆'.repeat(5 - Math.floor(productRating))}
                    </div>
                    <span style="
                      color: ${ds.colors.semantic.text.muted}; 
                      font-size: ${ds.typography.fontSize.xs};
                      font-weight: ${ds.typography.fontWeight.medium};
                    ">(${safeProduct.review_count || 24})</span>
                  </div>
                  
                  <!-- Price -->
                  <div style="
                    display: flex; 
                    align-items: baseline; 
                    gap: ${ds.spacing[2]}; 
                    margin-bottom: ${ds.spacing[4]};
                  ">
                    <span style="
                      font-size: ${ds.typography.fontSize.xl}; 
                      font-weight: ${ds.typography.fontWeight.extrabold}; 
                      background: ${ds.colors.semantic.gradient.primary};
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
                      background-clip: text;
                      letter-spacing: ${ds.typography.letterSpacing.tight};
                    ">
                      $${productPrice}
                    </span>
                    ${originalPrice ? `
                      <span style="
                        font-size: ${ds.typography.fontSize.sm}; 
                        color: ${ds.colors.semantic.text.muted}; 
                        text-decoration: line-through;
                        font-weight: ${ds.typography.fontWeight.medium};
                      ">
                        $${originalPrice}
                      </span>
                      <span style="
                        background: ${ds.colors.semantic.status.error}10;
                        color: ${ds.colors.semantic.status.error};
                        padding: ${ds.spacing[0.5]} ${ds.spacing[1]};
                        border-radius: ${ds.borderRadius.sm};
                        font-size: ${ds.typography.fontSize.xs};
                        font-weight: ${ds.typography.fontWeight.bold};
                      ">
                        ${Math.round((1 - parseFloat(productPrice) / parseFloat(originalPrice)) * 100)}% OFF
                      </span>
                    ` : ''}
                  </div>
                  
                  <!-- Add to Cart Button -->
                  <button onclick="addToCart()" style="
                    ${ds.createButtonStyles('primary')};
                    box-shadow: ${ds.shadows.colorMd(ds.colors.primary[500])};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: ${ds.spacing[2]};
                    width: 100%;
                    padding: ${ds.spacing[2]} ${ds.spacing[4]};
                    font-size: ${ds.typography.fontSize.sm};
                  " onmouseover="
                    this.style.transform='translateY(-2px)';
                    this.style.boxShadow='${ds.shadows.colorLg(ds.colors.primary[500])}';
                  " onmouseout="
                    this.style.transform='translateY(0)';
                    this.style.boxShadow='${ds.shadows.colorMd(ds.colors.primary[500])}';
                  ">
                    <span>Add to Cart</span>
                    <span style="font-size: ${ds.typography.fontSize.base};">🛒</span>
                  </button>
                </div>
              </article>
            `;
            }).join('') : `
              <!-- Empty State -->
              <div style="
                grid-column: 1 / -1;
                text-align: center;
                padding: ${ds.spacing[16]} ${ds.spacing[8]};
                background: ${ds.colors.semantic.bg.primary};
                border-radius: ${ds.borderRadius['2xl']};
                border: 2px dashed ${ds.colors.semantic.border.primary};
              ">
                <div style="font-size: ${ds.typography.fontSize['7xl']}; margin-bottom: ${ds.spacing[4]};">🔍</div>
                <h3 style="font-size: ${ds.typography.fontSize['2xl']}; font-weight: ${ds.typography.fontWeight.bold}; color: ${ds.colors.semantic.text.primary}; margin-bottom: ${ds.spacing[2]};">
                  No products found
                </h3>
                <p style="color: ${ds.colors.semantic.text.tertiary}; margin-bottom: ${ds.spacing[8]};">
                  Try adjusting your filters or search terms
                </p>
                <button onclick="clearFilters()" style="
                  ${ds.createButtonStyles('primary')};
                ">
                  Clear All Filters
                </button>
              </div>
            `}
          </div>
          
          <!-- Pagination -->
          ${safeItems.length > 0 ? `
            <div style="
              display: flex;
              justify-content: center;
              align-items: center;
              gap: ${ds.spacing[2]};
              margin-top: ${ds.spacing[12]};
            ">
              <button style="
                padding: ${ds.spacing[2]} ${ds.spacing[4]};
                border: 1px solid ${ds.colors.semantic.border.primary};
                background: ${ds.colors.semantic.bg.primary};
                border-radius: ${ds.borderRadius.lg};
                cursor: pointer;
                font-weight: ${ds.typography.fontWeight.medium};
                color: ${ds.colors.semantic.text.tertiary};
                ${ds.transitions.all};
              " onmouseover="
                this.style.borderColor='${ds.colors.primary[500]}';
                this.style.color='${ds.colors.primary[500]}';
              " onmouseout="
                this.style.borderColor='${ds.colors.semantic.border.primary}';
                this.style.color='${ds.colors.semantic.text.tertiary}';
              ">Previous</button>
              ${[1, 2, 3].map(num => `
                <button style="
                  width: ${ds.spacing[8]};
                  height: ${ds.spacing[8]};
                  border: 1px solid ${num === 1 ? ds.colors.primary[500] : ds.colors.semantic.border.primary};
                  background: ${num === 1 ? ds.colors.primary[500] : ds.colors.semantic.bg.primary};
                  color: ${num === 1 ? ds.colors.semantic.bg.primary : ds.colors.semantic.text.tertiary};
                  border-radius: ${ds.borderRadius.lg};
                  cursor: pointer;
                  font-weight: ${num === 1 ? ds.typography.fontWeight.bold : ds.typography.fontWeight.medium};
                  ${ds.transitions.all};
                " onmouseover="
                  this.style.borderColor='${ds.colors.primary[500]}';
                  this.style.background='${ds.colors.primary[500]}';
                  this.style.color='${ds.colors.semantic.bg.primary}';
                " onmouseout="
                  this.style.borderColor='${num === 1 ? ds.colors.primary[500] : ds.colors.semantic.border.primary}';
                  this.style.background='${num === 1 ? ds.colors.primary[500] : ds.colors.semantic.bg.primary}';
                  this.style.color='${num === 1 ? ds.colors.semantic.bg.primary : ds.colors.semantic.text.tertiary}';
                ">${num}</button>
              `).join('')}
              <button style="
                padding: ${ds.spacing[2]} ${ds.spacing[4]};
                border: 1px solid ${ds.colors.semantic.border.primary};
                background: ${ds.colors.semantic.bg.primary};
                border-radius: ${ds.borderRadius.lg};
                cursor: pointer;
                font-weight: ${ds.typography.fontWeight.medium};
                color: ${ds.colors.semantic.text.tertiary};
                ${ds.transitions.all};
              " onmouseover="
                this.style.borderColor='${ds.colors.primary[500]}';
                this.style.color='${ds.colors.primary[500]}';
              " onmouseout="
                this.style.borderColor='${ds.colors.semantic.border.primary}';
                this.style.color='${ds.colors.semantic.text.tertiary}';
              ">Next</button>
            </div>
          ` : ''}
        </div>
      </div>
      
      <style>
        ${ds.animations.keyframes}
        
        /* Responsive adjustments */
        @media (max-width: ${ds.breakpoints.lg}) {
          div[style*="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))"] {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
          }
        }
        
        @media (max-width: ${ds.breakpoints.md}) {
          section[style*="padding: ${ds.sectionPadding.xl}"] {
            padding: ${ds.sectionPadding.md} !important;
          }
          
          div[style*="${ds.containers.base}"] {
            padding: 0 ${ds.spacing[4]} !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: ${ds.spacing[4]} !important;
          }
          
          div[style*="padding: ${ds.spacing[16]}"] {
            padding: ${ds.spacing[12]} ${ds.spacing[6]} !important;
          }
          
          /* Mobile toolbar adjustments */
          .product-toolbar {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: ${ds.spacing[4]} !important;
            padding: ${ds.spacing[4]} !important;
          }
          
          .product-toolbar > div:first-child {
            text-align: center !important;
          }
          
          .product-toolbar > div:last-child {
            justify-content: center !important;
            gap: ${ds.spacing[3]} !important;
          }
          
          .product-toolbar select {
            min-width: 140px !important;
            width: 100% !important;
            max-width: 200px !important;
          }
        }
        
        @media (max-width: ${ds.breakpoints.sm}) {
          div[style*="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: ${ds.spacing[3]} !important;
          }
          
          article[style*="padding: ${ds.spacing[5]}"] {
            padding: ${ds.spacing[4]} !important;
          }
          
          div[style*="padding: ${ds.spacing[8]}"] {
            padding: ${ds.spacing[6]} !important;
          }
          
          .product-toolbar {
            padding: ${ds.spacing[3]} !important;
          }
          
          .product-toolbar > div:last-child {
            flex-direction: column !important;
            gap: ${ds.spacing[2]} !important;
          }
          
          .product-toolbar select {
            max-width: 100% !important;
          }
        }
      </style>
    </section>
  `;
};