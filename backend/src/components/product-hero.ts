// 📦 MODERN PRODUCT HERO - Single product showcase page
export const renderProductHero = (section: any, styles: any) => {
  const { title, subtitle, items = [] } = section;
  const product = items[0] || {};

  return `
    <section style="
      padding: clamp(2rem, 5vw, 4rem) 0; 
      background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
    ">
      <div style="max-width: 1400px; margin: 0 auto; padding: 0 clamp(1rem, 3vw, 2rem);">
        <div style="
          display: grid; 
          grid-template-columns: 1fr; 
          gap: clamp(2rem, 4vw, 4rem); 
          align-items: start;
        ">
          <!-- Product Images Gallery -->
          <div style="
            animation: slideInLeft 0.6s ease-out;
            order: 2;
          ">
            <!-- Main Image -->
            <div style="
              background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); 
              border-radius: clamp(12px, 2vw, 20px); 
              padding: clamp(1.5rem, 3vw, 3rem); 
              text-align: center;
              margin-bottom: 1.5rem;
              border: 1px solid #e5e7eb;
              position: relative;
              overflow: hidden;
            ">
              <!-- Decorative elements -->
              <div style="
                position: absolute;
                top: -50px;
                right: -50px;
                width: 150px;
                height: 150px;
                background: ${styles.primary_color}10;
                border-radius: 50%;
                display: none;
              "></div>
              
              <img id="mainProductImage" 
                   src="${product.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600'}" 
                   alt="${product.name || 'Product'}" 
                   style="
                     max-width: 100%; 
                     height: auto; 
                     max-height: 500px;
                     object-fit: contain;
                     border-radius: clamp(8px, 1.5vw, 12px);
                     transition: transform 0.4s ease;
                     position: relative;
                     z-index: 2;
                   "
                   onmouseover="this.style.transform='scale(1.05)'"
                   onmouseout="this.style.transform='scale(1)'">
            </div>
            
            <!-- Thumbnail Gallery -->
            <div style="
              display: flex; 
              gap: clamp(0.5rem, 2vw, 1rem); 
              justify-content: center;
              flex-wrap: wrap;
            ">
              ${[product.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200', 
                 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=200',
                 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=200'
                ].map((img, index) => `
                <button onclick="changeMainImage('${img}')" style="
                  width: clamp(60px, 15vw, 90px); 
                  height: clamp(60px, 15vw, 90px); 
                  background: linear-gradient(135deg, #f1f5f9, #e2e8f0); 
                  border-radius: clamp(8px, 1.5vw, 12px);
                  border: ${index === 0 ? `3px solid ${styles.primary_color}` : '2px solid #e5e7eb'};
                  cursor: pointer;
                  padding: 0.25rem;
                  transition: all 0.3s ease;
                  overflow: hidden;
                  flex-shrink: 0;
                " onmouseover="
                  this.style.borderColor='${styles.primary_color}';
                  this.style.transform='translateY(-2px)';
                  this.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)';
                " onmouseout="
                  this.style.borderColor='${index === 0 ? styles.primary_color : '#e5e7eb'}';
                  this.style.transform='translateY(0)';
                  this.style.boxShadow='none';
                ">
                  <img src="${img}" 
                       alt="Thumbnail ${index + 1}" 
                       style="
                         width: 100%; 
                         height: 100%; 
                         object-fit: contain;
                       ">
                </button>
              `).join('')}
            </div>
          </div>
          
          <!-- Product Info -->
          <div style="
            animation: slideInRight 0.6s ease-out;
            order: 1;
          ">
            ${title ? `
              <h1 style="
                font-size: clamp(1.75rem, 5vw, 3rem); 
                font-weight: 800;
                margin-bottom: 1rem;
                color: #111827;
                line-height: 1.2;
                letter-spacing: -0.02em;
                text-align: center;
              ">${title}</h1>
            ` : ''}
            
            ${subtitle ? `
              <p style="
                font-size: clamp(1rem, 2vw, 1.25rem); 
                color: #6b7280; 
                margin-bottom: 1.5rem;
                line-height: 1.6;
                text-align: center;
              ">${subtitle}</p>
            ` : ''}
            
            <!-- Rating & Reviews -->
            <div style="
              display: flex; 
              align-items: center; 
              justify-content: center;
              gap: clamp(0.75rem, 2vw, 1rem); 
              margin-bottom: 1.5rem;
              padding-bottom: 1.5rem;
              border-bottom: 1px solid #e5e7eb;
              flex-wrap: wrap;
            ">
              <div style="
                display: flex;
                align-items: center;
                gap: 0.5rem;
              ">
                <div style="
                  color: #f59e0b; 
                  font-size: clamp(1rem, 2vw, 1.125rem);
                  letter-spacing: 0.05em;
                ">
                  ${'★'.repeat(product.rating || 5)}${'☆'.repeat(5 - (product.rating || 5))}
                </div>
                <span style="
                  color: #111827; 
                  font-weight: 600;
                  font-size: clamp(0.9rem, 1.5vw, 1rem);
                ">${product.rating || 5}.0</span>
              </div>
              <span style="
                color: #6b7280;
                font-size: clamp(0.85rem, 1.5vw, 0.95rem);
              ">(${product.review_count || 124} reviews)</span>
              <a href="#reviews" style="
                color: ${styles.primary_color};
                font-size: clamp(0.85rem, 1.5vw, 0.95rem);
                font-weight: 600;
                text-decoration: none;
                transition: color 0.2s ease;
                white-space: nowrap;
              " onmouseover="this.style.color='${styles.secondary_color || '#8b5cf6'}'"
                 onmouseout="this.style.color='${styles.primary_color}'">
                Write a review
              </a>
            </div>
            
            <!-- Price -->
            <div style="
              margin-bottom: 2rem;
              background: linear-gradient(135deg, ${styles.primary_color}08, ${styles.secondary_color || '#8b5cf6'}08);
              padding: clamp(1rem, 2vw, 1.5rem);
              border-radius: clamp(12px, 2vw, 16px);
              border: 1px solid ${styles.primary_color}20;
              text-align: center;
            ">
              <div style="
                display: flex;
                align-items: baseline;
                justify-content: center;
                gap: clamp(0.5rem, 2vw, 1rem);
                margin-bottom: 0.5rem;
                flex-wrap: wrap;
              ">
                <span style="
                  font-size: clamp(2rem, 6vw, 3rem); 
                  font-weight: 800; 
                  background: linear-gradient(135deg, ${styles.primary_color}, ${styles.secondary_color || '#8b5cf6'});
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  letter-spacing: -0.03em;
                ">
                  ${product.price || '$99.99'}
                </span>
                ${product.original_price ? `
                  <span style="
                    font-size: clamp(1.25rem, 3vw, 1.5rem); 
                    color: #9ca3af; 
                    text-decoration: line-through;
                    font-weight: 500;
                  ">
                    ${product.original_price}
                  </span>
                  <span style="
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                    color: white;
                    padding: 0.375rem 0.875rem;
                    border-radius: 20px;
                    font-size: clamp(0.75rem, 1.5vw, 0.875rem);
                    font-weight: 700;
                    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
                    white-space: nowrap;
                  ">
                    ${Math.round((1 - parseFloat(product.price?.replace('$', '') || 99.99) / parseFloat(product.original_price?.replace('$', '') || 149.99)) * 100)}% OFF
                  </span>
                ` : ''}
              </div>
              <p style="
                color: #059669;
                font-weight: 600;
                font-size: clamp(0.85rem, 1.5vw, 0.95rem);
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                flex-wrap: wrap;
              ">
                ✓ In stock • Free shipping
              </p>
            </div>
            
            <!-- Product Options -->
            <div style="margin-bottom: 2rem;">
              <h3 style="
                font-size: clamp(1rem, 2vw, 1.125rem); 
                font-weight: 600; 
                margin-bottom: 1rem;
                color: #111827;
                text-align: center;
              ">Select Options</h3>
              
              <!-- Color Selection -->
              <div style="margin-bottom: 1.5rem;">
                <div style="
                  display: flex; 
                  align-items: center; 
                  justify-content: center;
                  gap: 1rem; 
                  margin-bottom: 0.75rem;
                  flex-wrap: wrap;
                ">
                  <span style="
                    color: #6b7280; 
                    font-size: clamp(0.9rem, 1.5vw, 0.95rem);
                    font-weight: 500;
                    min-width: 60px;
                  ">Color:</span>
                  <span style="
                    color: #111827; 
                    font-weight: 600;
                    font-size: clamp(0.9rem, 1.5vw, 0.95rem);
                  ">Black</span>
                </div>
                <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
                  ${['#000000', '#6b7280', '#dc2626', '#2563eb', '#059669'].map((color, index) => `
                    <button style="
                      width: clamp(40px, 10vw, 48px); 
                      height: clamp(40px, 10vw, 48px); 
                      border-radius: clamp(8px, 1.5vw, 12px); 
                      border: ${index === 0 ? `3px solid ${styles.primary_color}` : '2px solid #e5e7eb'};
                      background: ${color};
                      cursor: pointer;
                      transition: all 0.2s ease;
                      position: relative;
                      flex-shrink: 0;
                    " onmouseover="
                      this.style.transform='scale(1.1)';
                      this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)';
                    " onmouseout="
                      this.style.transform='scale(1)';
                      this.style.boxShadow='none';
                    " title="Color ${index + 1}">
                      ${index === 0 ? `
                        <div style="
                          position: absolute;
                          top: -4px;
                          right: -4px;
                          width: 14px;
                          height: 14px;
                          background: ${styles.primary_color};
                          border-radius: 50%;
                          color: white;
                          font-size: 9px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                        ">✓</div>
                      ` : ''}
                    </button>
                  `).join('')}
                </div>
              </div>
              
              <!-- Size Selection -->
              <div style="margin-bottom: 2rem;">
                <div style="
                  display: flex; 
                  align-items: center; 
                  justify-content: center;
                  gap: 1rem; 
                  margin-bottom: 0.75rem;
                  flex-wrap: wrap;
                ">
                  <span style="
                    color: #6b7280; 
                    font-size: clamp(0.9rem, 1.5vw, 0.95rem);
                    font-weight: 500;
                    min-width: 60px;
                  ">Size:</span>
                  <span style="
                    color: #111827; 
                    font-weight: 600;
                    font-size: clamp(0.9rem, 1.5vw, 0.95rem);
                  ">Medium</span>
                </div>
                <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
                  ${['XS', 'S', 'M', 'L', 'XL'].map((size, index) => `
                    <button style="
                      padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1.25rem); 
                      border: ${index === 2 ? `2px solid ${styles.primary_color}` : '1px solid #e5e7eb'};
                      background: ${index === 2 ? `${styles.primary_color}10` : 'white'};
                      color: ${index === 2 ? styles.primary_color : '#6b7280'};
                      border-radius: clamp(8px, 1.5vw, 10px); 
                      cursor: pointer;
                      font-weight: 600;
                      transition: all 0.2s ease;
                      min-width: clamp(50px, 12vw, 60px);
                      font-size: clamp(0.8rem, 1.5vw, 0.9rem);
                    " onmouseover="
                      this.style.borderColor='${styles.primary_color}';
                      this.style.color='${styles.primary_color}';
                      this.style.transform='translateY(-2px)';
                    " onmouseout="
                      this.style.borderColor='${index === 2 ? styles.primary_color : '#e5e7eb'}';
                      this.style.color='${index === 2 ? styles.primary_color : '#6b7280'}';
                      this.style.transform='translateY(0)';
                    ">${size}</button>
                  `).join('')}
                </div>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div style="
              display: flex; 
              gap: 1rem; 
              margin-bottom: 2rem;
              flex-wrap: wrap;
              justify-content: center;
            ">
              <button style="
                flex: 1;
                min-width: min(100%, 300px);
                padding: clamp(1rem, 2vw, 1.125rem) clamp(1.5rem, 3vw, 2rem); 
                background: linear-gradient(135deg, ${styles.primary_color}, ${styles.secondary_color || '#8b5cf6'});
                color: white; 
                border: none; 
                border-radius: clamp(10px, 2vw, 14px); 
                font-weight: 700; 
                font-size: clamp(1rem, 2vw, 1.125rem);
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 8px 24px ${styles.primary_color}40;
              " onmouseover="
                this.style.transform='translateY(-3px)';
                this.style.boxShadow='0 12px 32px ${styles.primary_color}60';
              " onmouseout="
                this.style.transform='translateY(0)';
                this.style.boxShadow='0 8px 24px ${styles.primary_color}40';
              ">Add to Cart</button>
              
              <button style="
                padding: clamp(1rem, 2vw, 1.125rem) clamp(1rem, 2vw, 1.5rem); 
                background: white; 
                color: #111827; 
                border: 2px solid #e5e7eb; 
                border-radius: clamp(10px, 2vw, 14px); 
                font-weight: 600; 
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 60px;
              " onmouseover="
                this.style.borderColor='${styles.primary_color}';
                this.style.color='${styles.primary_color}';
                this.style.transform='translateY(-2px)';
              " onmouseout="
                this.style.borderColor='#e5e7eb';
                this.style.color='#111827';
                this.style.transform='translateY(0)';
              " title="Add to Wishlist">❤️</button>
            </div>
            
            <!-- Additional Info -->
            <div style="
              background: #f9fafb; 
              padding: clamp(1rem, 2vw, 1.5rem); 
              border-radius: clamp(10px, 2vw, 14px); 
              border: 1px solid #e5e7eb;
            ">
              <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem; justify-content: center;">
                  <span style="font-size: clamp(1rem, 2vw, 1.25rem);">🚚</span>
                  <div style="text-align: left;">
                    <div style="font-weight: 600; color: #111827; font-size: clamp(0.9rem, 1.5vw, 0.95rem);">Free Shipping</div>
                    <div style="color: #6b7280; font-size: clamp(0.8rem, 1.5vw, 0.875rem);">Orders over $50</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.75rem; justify-content: center;">
                  <span style="font-size: clamp(1rem, 2vw, 1.25rem);">↩️</span>
                  <div style="text-align: left;">
                    <div style="font-weight: 600; color: #111827; font-size: clamp(0.9rem, 1.5vw, 0.95rem);">Easy Returns</div>
                    <div style="color: #6b7280; font-size: clamp(0.8rem, 1.5vw, 0.875rem);">30-day guarantee</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.75rem; justify-content: center;">
                  <span style="font-size: clamp(1rem, 2vw, 1.25rem);">🔒</span>
                  <div style="text-align: left;">
                    <div style="font-weight: 600; color: #111827; font-size: clamp(0.9rem, 1.5vw, 0.95rem);">Secure Payment</div>
                    <div style="color: #6b7280; font-size: clamp(0.8rem, 1.5vw, 0.875rem);">256-bit encryption</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        /* Responsive Design */
        @media (min-width: 768px) {
          .product-container > div {
            grid-template-columns: 1fr 1fr !important;
          }
          
          .product-container > div > div:first-child {
            order: 1 !important;
          }
          
          .product-container > div > div:last-child {
            order: 2 !important;
            text-align: left !important;
          }
          
          .product-container h1,
          .product-container p,
          .rating-section,
          .price-section > div {
            text-align: left !important;
            justify-content: flex-start !important;
          }
          
          .additional-info > div {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          
          .additional-info > div > div {
            justify-content: flex-start !important;
          }
        }
        
        @media (min-width: 1024px) {
          .decorative-element {
            display: block !important;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) {
          button:hover {
            transform: none !important;
          }
          
          img:hover {
            transform: none !important;
          }
        }
        
        /* Animation keyframes */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      </style>
      
      <script>
        function changeMainImage(newSrc) {
          const mainImage = document.getElementById('mainProductImage');
          if (mainImage) {
            mainImage.style.opacity = '0.7';
            setTimeout(() => {
              mainImage.src = newSrc;
              mainImage.style.opacity = '1';
            }, 150);
          }
        }
        
        // Add CSS classes for better responsive targeting
        document.addEventListener('DOMContentLoaded', function() {
          const container = document.querySelector('section > div > div');
          if (container) {
            container.classList.add('product-container');
          }
          
          const ratingSection = document.querySelector('section > div > div > div:last-child > div:first-child');
          if (ratingSection) {
            ratingSection.classList.add('rating-section');
          }
          
          const priceSection = document.querySelector('section > div > div > div:last-child > div:nth-child(4)');
          if (priceSection) {
            priceSection.classList.add('price-section');
          }
          
          const additionalInfo = document.querySelector('section > div > div > div:last-child > div:last-child');
          if (additionalInfo) {
            additionalInfo.classList.add('additional-info');
          }
          
          const decorativeElement = document.querySelector('section > div > div > div:first-child > div > div');
          if (decorativeElement) {
            decorativeElement.classList.add('decorative-element');
          }
        });
      </script>
    </section>
  `;
};