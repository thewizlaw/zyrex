import createDesignSystem from "../../design-system";

// 4. ADD TO CART SECTION - Using Design System
export const renderAddToCartSection = (section: any, styles: any) => {
  const { 
    show_quantity = true,
    show_wishlist = true,
    show_compare = true
  } = section;
  
  // Initialize design system
  const ds = createDesignSystem(styles);
  
  return `
    <section style="
      padding: ${ds.spacing[8]} 0; 
      border-top: 1px solid ${ds.colors.semantic.border.primary};
      ${ds.animations.fadeIn};
    ">
      <div style="
        display: flex; 
        gap: ${ds.spacing[4]}; 
        align-items: flex-start; 
        flex-wrap: wrap;
      ">
        ${show_quantity ? `
          <!-- Quantity Selector -->
          <div style="
            display: flex; 
            align-items: center; 
            border: 2px solid ${ds.colors.semantic.border.primary}; 
            border-radius: ${ds.borderRadius.lg}; 
            overflow: hidden;
            background: ${ds.colors.semantic.bg.primary};
          ">
            <button onclick="handleQuantityUpdate(-1)" 
                    style="
                      padding: ${ds.spacing[4]} ${ds.spacing[5]}; 
                      background: ${ds.colors.semantic.bg.primary}; 
                      border: none; 
                      cursor: pointer; 
                      color: ${ds.colors.semantic.text.tertiary}; 
                      font-size: ${ds.typography.fontSize.xl};
                      font-weight: ${ds.typography.fontWeight.bold};
                      ${ds.transitions.all};
                    "
                    onmouseover="
                      this.style.background='${ds.colors.semantic.bg.hover}';
                      this.style.color='${ds.colors.primary[500]}';
                    "
                    onmouseout="
                      this.style.background='${ds.colors.semantic.bg.primary}';
                      this.style.color='${ds.colors.semantic.text.tertiary}';
                    ">
              −
            </button>
            <input type="number" id="quantity" value="1" min="1" max="99"
                   style="
                     width: ${ds.spacing[20]}; 
                     text-align: center; 
                     border: none; 
                     font-size: ${ds.typography.fontSize.lg}; 
                     font-weight: ${ds.typography.fontWeight.bold}; 
                     padding: ${ds.spacing[4]} 0;
                     background: ${ds.colors.semantic.bg.primary};
                     color: ${ds.colors.semantic.text.primary};
                   "
                   onchange="handleQuantityInput(this)">
            <button onclick="handleQuantityUpdate(1)" 
                    style="
                      padding: ${ds.spacing[4]} ${ds.spacing[5]}; 
                      background: ${ds.colors.semantic.bg.primary}; 
                      border: none; 
                      cursor: pointer; 
                      color: ${ds.colors.semantic.text.tertiary}; 
                      font-size: ${ds.typography.fontSize.xl};
                      font-weight: ${ds.typography.fontWeight.bold};
                      ${ds.transitions.all};
                    "
                    onmouseover="
                      this.style.background='${ds.colors.semantic.bg.hover}';
                      this.style.color='${ds.colors.primary[500]}';
                    "
                    onmouseout="
                      this.style.background='${ds.colors.semantic.bg.primary}';
                      this.style.color='${ds.colors.semantic.text.tertiary}';
                    ">
              +
            </button>
          </div>
        ` : ''}
        
        <!-- Add to Cart Button -->
        <button onclick="handleAddToCart()" 
                style="
                  flex: 1; 
                  min-width: 200px; 
                  ${ds.createButtonStyles('primary')};
                  box-shadow: ${ds.shadows.colorMd(ds.colors.primary[500])};
                  padding: ${ds.spacing[5]} ${ds.spacing[8]};
                  font-size: ${ds.typography.fontSize.lg};
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: ${ds.spacing[2]};
                "
                onmouseover="
                  this.style.transform='translateY(-2px)';
                  this.style.boxShadow='${ds.shadows.colorLg(ds.colors.primary[500])}';
                "
                onmouseout="
                  this.style.transform='translateY(0)';
                  this.style.boxShadow='${ds.shadows.colorMd(ds.colors.primary[500])}';
                ">
          <span style="font-size: ${ds.typography.fontSize.xl};">🛒</span>
          Add to Cart
        </button>
        
        ${show_wishlist ? `
          <!-- Add to Wishlist -->
          <button onclick="handleAddToWishlist()" 
                  style="
                    padding: ${ds.spacing[5]}; 
                    background: ${ds.colors.semantic.bg.primary}; 
                    border: 2px solid ${ds.colors.semantic.border.primary}; 
                    border-radius: ${ds.borderRadius.lg}; 
                    cursor: pointer; 
                    ${ds.transitions.all};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                  onmouseover="
                    this.style.background='${ds.colors.semantic.status.error}10';
                    this.style.borderColor='${ds.colors.semantic.status.error}';
                    this.style.transform='translateY(-2px)';
                    this.querySelector('span').style.color='${ds.colors.semantic.status.error}';
                  "
                  onmouseout="
                    this.style.background='${ds.colors.semantic.bg.primary}';
                    this.style.borderColor='${ds.colors.semantic.border.primary}';
                    this.style.transform='translateY(0)';
                    this.querySelector('span').style.color='${ds.colors.semantic.text.secondary}';
                  "
                  title="Add to Wishlist">
            <span style="
              font-size: ${ds.typography.fontSize['2xl']};
              color: ${ds.colors.semantic.text.secondary};
              ${ds.transitions.all};
            ">♡</span>
          </button>
        ` : ''}
        
        ${show_compare ? `
          <!-- Add to Compare -->
          <button onclick="handleAddToCompare()" 
                  style="
                    padding: ${ds.spacing[5]}; 
                    background: ${ds.colors.semantic.bg.primary}; 
                    border: 2px solid ${ds.colors.semantic.border.primary}; 
                    border-radius: ${ds.borderRadius.lg}; 
                    cursor: pointer; 
                    ${ds.transitions.all};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                  onmouseover="
                    this.style.background='${ds.colors.primary[50]}';
                    this.style.borderColor='${ds.colors.primary[500]}';
                    this.style.transform='translateY(-2px)';
                    this.querySelector('span').style.color='${ds.colors.primary[500]}';
                  "
                  onmouseout="
                    this.style.background='${ds.colors.semantic.bg.primary}';
                    this.style.borderColor='${ds.colors.semantic.border.primary}';
                    this.style.transform='translateY(0)';
                    this.querySelector('span').style.color='${ds.colors.semantic.text.secondary}';
                  "
                  title="Add to Compare">
            <span style="
              font-size: ${ds.typography.fontSize['2xl']};
              color: ${ds.colors.semantic.text.secondary};
              ${ds.transitions.all};
            ">⚖️</span>
          </button>
        ` : ''}
      </div>
      
      <!-- Action Buttons Row 2 -->
      <div style="
        display: flex; 
        gap: ${ds.spacing[4]}; 
        margin-top: ${ds.spacing[4]};
        flex-wrap: wrap;
      ">
        <button onclick="handleBuyNow()" 
                style="
                  flex: 1; 
                  min-width: 140px;
                  ${ds.createButtonStyles('secondary')};
                  padding: ${ds.spacing[4]};
                  font-size: ${ds.typography.fontSize.base};
                  font-weight: ${ds.typography.fontWeight.semibold};
                "
                onmouseover="
                  this.style.transform='translateY(-2px)';
                  this.style.boxShadow='${ds.shadows.colorLg(ds.colors.secondary[500])}';
                "
                onmouseout="
                  this.style.transform='translateY(0)';
                  this.style.boxShadow='${ds.shadows.colorMd(ds.colors.secondary[500])}';
                ">
          Buy Now
        </button>
        <button onclick="handleFindInStore()" 
                style="
                  flex: 1; 
                  min-width: 140px;
                  ${ds.createButtonStyles('outline')};
                  padding: ${ds.spacing[4]};
                  font-size: ${ds.typography.fontSize.base};
                  font-weight: ${ds.typography.fontWeight.semibold};
                "
                onmouseover="
                  this.style.background='${ds.colors.primary[50]}';
                  this.style.transform='translateY(-2px)';
                "
                onmouseout="
                  this.style.background='transparent';
                  this.style.transform='translateY(0)';
                ">
          Find in Store
        </button>
      </div>
      
      <!-- Trust Badges -->
      <div style="
        display: grid; 
        grid-template-columns: repeat(3, 1fr); 
        gap: ${ds.spacing[4]}; 
        margin-top: ${ds.spacing[8]}; 
        padding-top: ${ds.spacing[8]}; 
        border-top: 1px solid ${ds.colors.semantic.border.primary};
      ">
        <div style="text-align: center;">
          <span style="
            font-size: ${ds.typography.fontSize['3xl']}; 
            display: block; 
            margin-bottom: ${ds.spacing[2]};
          ">🚚</span>
          <span style="
            font-size: ${ds.typography.fontSize.sm}; 
            color: ${ds.colors.semantic.text.tertiary};
            font-weight: ${ds.typography.fontWeight.medium};
          ">Free Shipping</span>
        </div>
        <div style="text-align: center;">
          <span style="
            font-size: ${ds.typography.fontSize['3xl']}; 
            display: block; 
            margin-bottom: ${ds.spacing[2]};
          ">↩️</span>
          <span style="
            font-size: ${ds.typography.fontSize.sm}; 
            color: ${ds.colors.semantic.text.tertiary};
            font-weight: ${ds.typography.fontWeight.medium};
          ">30-Day Returns</span>
        </div>
        <div style="text-align: center;">
          <span style="
            font-size: ${ds.typography.fontSize['3xl']}; 
            display: block; 
            margin-bottom: ${ds.spacing[2]};
          ">🔒</span>
          <span style="
            font-size: ${ds.typography.fontSize.sm}; 
            color: ${ds.colors.semantic.text.tertiary};
            font-weight: ${ds.typography.fontWeight.medium};
          ">Secure Payment</span>
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
        
        div[style*="display: flex; gap: ${ds.spacing[4]}"] {
          flex-direction: column !important;
        }
        
        button[style*="min-width: 200px"] {
          min-width: 100% !important;
          order: -1;
        }
        
        div[style*="display: flex; align-items: center"] {
          order: 1;
          justify-content: center;
        }
        
        div[style*="grid-template-columns: repeat(3, 1fr)"] {
          grid-template-columns: 1fr !important;
          gap: ${ds.spacing[6]} !important;
        }
        
        div[style*="text-align: center"] {
          display: flex;
          align-items: center;
          gap: ${ds.spacing[3]};
          text-align: left !important;
        }
        
        span[style*="font-size: ${ds.typography.fontSize['3xl']}"] {
          font-size: ${ds.typography.fontSize['2xl']} !important;
          margin-bottom: 0 !important;
        }
      }
      
      @media (max-width: ${ds.breakpoints.sm}) {
        section[style*="padding: ${ds.spacing[8]} 0"] {
          padding: ${ds.spacing[4]} 0 !important;
        }
        
        button[style*="padding: ${ds.spacing[5]}"] {
          padding: ${ds.spacing[4]} !important;
        }
        
        input[style*="width: ${ds.spacing[20]}"] {
          width: ${ds.spacing[16]} !important;
        }
        
        div[style*="margin-top: ${ds.spacing[8]}"] {
          margin-top: ${ds.spacing[6]} !important;
          padding-top: ${ds.spacing[6]} !important;
        }
      }
      
      /* Focus states */
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid ${ds.colors.primary[500]};
        outline-offset: 2px;
      }
      
      /* Input number styling */
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      
      input[type="number"] {
        -moz-appearance: textfield;
      }
    </style>
    
    <script>
      function handleQuantityUpdate(change) {
        const input = document.getElementById('quantity');
        const newValue = parseInt(input.value) + change;
        if (newValue >= 1 && newValue <= 99) {
          input.value = newValue;
          updateQuantityVisuals(newValue);
        }
      }
      
      function handleQuantityInput(input) {
        let value = parseInt(input.value);
        if (isNaN(value) || value < 1) value = 1;
        if (value > 99) value = 99;
        input.value = value;
        updateQuantityVisuals(value);
      }
      
      function updateQuantityVisuals(quantity) {
        // Add visual feedback for quantity change
        const input = document.getElementById('quantity');
        input.style.transform = 'scale(1.05)';
        setTimeout(() => {
          input.style.transform = 'scale(1)';
        }, 150);
      }
      
      function handleAddToCart() {
        const quantity = document.getElementById('quantity').value;
        const event = new CustomEvent('addToCart', {
          detail: { quantity: parseInt(quantity) }
        });
        document.dispatchEvent(event);
      }
      
      function handleAddToWishlist() {
        const event = new CustomEvent('addToWishlist');
        document.dispatchEvent(event);
      }
      
      function handleAddToCompare() {
        const event = new CustomEvent('addToCompare');
        document.dispatchEvent(event);
      }
      
      function handleBuyNow() {
        const quantity = document.getElementById('quantity').value;
        const event = new CustomEvent('buyNow', {
          detail: { quantity: parseInt(quantity) }
        });
        document.dispatchEvent(event);
      }
      
      function handleFindInStore() {
        const event = new CustomEvent('findInStore');
        document.dispatchEvent(event);
      }
    </script>
  `;
};