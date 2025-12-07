import createDesignSystem from "../../design-system";

// 1. PRODUCT IMAGE GALLERY - Using Design System
export const renderProductImageGallery = (section: any, styles: any) => {
  const { images = [], product_name = "Product" } = section;
  
  // Initialize design system
  const ds = createDesignSystem(styles);
  
  const mainImage = images[0] || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600";
  
  return `
    <section style="padding: ${ds.spacing[8]} 0;">
      <div style="
        display: grid; 
        grid-template-columns: ${ds.spacing[24]} 1fr; 
        gap: ${ds.spacing[4]};
      " class="product-gallery">
        
        <!-- Thumbnail Column -->
        <div style="
          display: flex; 
          flex-direction: column; 
          gap: ${ds.spacing[3]};
        ">
          ${images.slice(0, 4).map((img: string, idx: number) => `
            <button onclick="handleThumbnailClick('${img}', this)" 
                    style="
                      width: ${ds.spacing[24]}; 
                      height: ${ds.spacing[24]}; 
                      border: 2px solid ${idx === 0 ? ds.colors.primary[500] : ds.colors.semantic.border.primary}; 
                      border-radius: ${ds.borderRadius.lg}; 
                      overflow: hidden; 
                      cursor: pointer; 
                      padding: 0; 
                      background: ${ds.colors.semantic.bg.primary};
                      ${ds.transitions.all};
                    " 
                    onmouseover="
                      this.style.borderColor='${ds.colors.primary[300]}';
                      this.style.transform='scale(1.05)';
                    "
                    onmouseout="
                      if (!this.classList.contains('active')) {
                        this.style.borderColor='${ds.colors.semantic.border.primary}';
                        this.style.transform='scale(1)';
                      }
                    "
                    class="${idx === 0 ? 'active' : ''}">
              <img src="${img}" 
                   alt="Thumbnail ${idx + 1}" 
                   style="
                     width: 100%; 
                     height: 100%; 
                     object-fit: cover;
                     ${ds.transitions.transform};
                   "
                   onmouseover="this.style.transform='scale(1.1)'"
                   onmouseout="this.style.transform='scale(1)'">
            </button>
          `).join('')}
        </div>
        
        <!-- Main Image -->
        <div style="
          position: relative; 
          background: ${ds.colors.semantic.bg.tertiary}; 
          border-radius: ${ds.borderRadius.xl}; 
          overflow: hidden; 
          aspect-ratio: 1/1; 
          max-height: 600px;
          box-shadow: ${ds.shadows.sm};
        ">
          <img id="mainProductImage" 
               src="${mainImage}" 
               alt="${product_name}"
               style="
                 width: 100%; 
                 height: 100%; 
                 object-fit: cover;
                 ${ds.transitions.all};
               ">
          
          <!-- Zoom Button -->
          <button onclick="handleZoomClick('${mainImage}')" 
                  style="
                    position: absolute; 
                    top: ${ds.spacing[4]}; 
                    right: ${ds.spacing[4]}; 
                    background: ${ds.colors.semantic.bg.overlay}; 
                    backdrop-filter: blur(8px);
                    border: none; 
                    border-radius: ${ds.borderRadius.lg}; 
                    padding: ${ds.spacing[3]}; 
                    cursor: pointer; 
                    box-shadow: ${ds.shadows.md};
                    ${ds.transitions.all};
                  "
                  onmouseover="
                    this.style.background='${ds.colors.primary[500]}';
                    this.style.transform='scale(1.1)';
                  "
                  onmouseout="
                    this.style.background='${ds.colors.semantic.bg.overlay}';
                    this.style.transform='scale(1)';
                  "
                  title="Zoom image">
            <span style="font-size: ${ds.typography.fontSize.xl};">🔍</span>
          </button>
          
          <!-- Image Counter -->
          ${images.length > 1 ? `
            <div style="
              position: absolute; 
              bottom: ${ds.spacing[4]}; 
              left: ${ds.spacing[4]}; 
              background: ${ds.colors.semantic.bg.overlay}; 
              backdrop-filter: blur(8px);
              border-radius: ${ds.borderRadius.full}; 
              padding: ${ds.spacing[2]} ${ds.spacing[4]};
              color: ${ds.colors.semantic.text.primary};
              font-size: ${ds.typography.fontSize.sm};
              font-weight: ${ds.typography.fontWeight.medium};
              box-shadow: ${ds.shadows.sm};
            ">
              <span id="currentImageIndex">1</span> / <span>${images.length}</span>
            </div>
          ` : ''}
        </div>
      </div>
      
      <!-- Zoom Modal -->
      <div id="imageZoomModal" style="
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${ds.colors.semantic.bg.overlay};
        backdrop-filter: blur(8px);
        z-index: ${ds.zIndex.modal};
        align-items: center;
        justify-content: center;
        padding: ${ds.spacing[8]};
      ">
        <div style="
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        ">
          <img id="zoomedImage" 
               src="" 
               alt="${product_name}"
               style="
                 width: 100%;
                 height: 100%;
                 object-fit: contain;
                 border-radius: ${ds.borderRadius.xl};
                 box-shadow: ${ds.shadows.xl};
               ">
          
          <button onclick="handleCloseZoom()" 
                  style="
                    position: absolute;
                    top: ${ds.spacing[4]};
                    right: ${ds.spacing[4]};
                    background: ${ds.colors.semantic.bg.overlay};
                    backdrop-filter: blur(8px);
                    border: none;
                    border-radius: ${ds.borderRadius.full};
                    width: ${ds.spacing[10]};
                    height: ${ds.spacing[10]};
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: ${ds.typography.fontSize.xl};
                    color: ${ds.colors.semantic.text.primary};
                    ${ds.transitions.all};
                  "
                  onmouseover="
                    this.style.background='${ds.colors.semantic.status.error}';
                    this.style.transform='scale(1.1)';
                  "
                  onmouseout="
                    this.style.background='${ds.colors.semantic.bg.overlay}';
                    this.style.transform='scale(1)';
                  ">
            ✕
          </button>
        </div>
      </div>
    </section>
    
    <style>
      ${ds.animations.keyframes}
      
      /* Responsive adjustments */
      @media (max-width: ${ds.breakpoints.lg}) {
        .product-gallery {
          grid-template-columns: ${ds.spacing[20]} 1fr !important;
          gap: ${ds.spacing[3]} !important;
        }
        
        button[style*="width: ${ds.spacing[24]}"] {
          width: ${ds.spacing[20]} !important;
          height: ${ds.spacing[20]} !important;
        }
      }
      
      @media (max-width: ${ds.breakpoints.md}) {
        .product-gallery {
          grid-template-columns: 1fr !important;
          grid-template-rows: auto 1fr;
        }
        
        div[style*="flex-direction: column"] {
          flex-direction: row !important;
          order: 2;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        button[style*="width: ${ds.spacing[24]}"] {
          width: ${ds.spacing[16]} !important;
          height: ${ds.spacing[16]} !important;
        }
        
        #imageZoomModal {
          padding: ${ds.spacing[4]} !important;
        }
      }
      
      @media (max-width: ${ds.breakpoints.sm}) {
        section[style*="padding: ${ds.spacing[8]} 0"] {
          padding: ${ds.spacing[6]} 0 !important;
        }
        
        button[style*="width: ${ds.spacing[24]}"] {
          width: ${ds.spacing[14]} !important;
          height: ${ds.spacing[14]} !important;
        }
        
        div[style*="position: absolute; bottom: ${ds.spacing[4]}"] {
          bottom: ${ds.spacing[2]} !important;
          left: ${ds.spacing[2]} !important;
          padding: ${ds.spacing[1]} ${ds.spacing[2]} !important;
          font-size: ${ds.typography.fontSize.xs} !important;
        }
        
        button[style*="top: ${ds.spacing[4]}"] {
          top: ${ds.spacing[2]} !important;
          right: ${ds.spacing[2]} !important;
          padding: ${ds.spacing[2]} !important;
        }
      }
      
      /* Active thumbnail state */
      .active {
        border-color: ${ds.colors.primary[500]} !important;
        box-shadow: ${ds.shadows.colorSm(ds.colors.primary[500])} !important;
      }
      
      /* Focus states */
      button:focus-visible {
        outline: 2px solid ${ds.colors.primary[500]};
        outline-offset: 2px;
      }
    </style>
    
    <script>
      let currentImageIndex = 0;
      const totalImages = ${images.length};
      const imageUrls = ${JSON.stringify(images)};
      
      function handleThumbnailClick(imgUrl, element) {
        document.getElementById('mainProductImage').src = imgUrl;
        currentImageIndex = imageUrls.indexOf(imgUrl);
        
        // Update active thumbnail
        const thumbnails = document.querySelectorAll('.product-gallery button');
        thumbnails.forEach(btn => {
          btn.classList.remove('active');
          btn.style.borderColor = '${ds.colors.semantic.border.primary}';
        });
        
        element.classList.add('active');
        element.style.borderColor = '${ds.colors.primary[500]}';
        
        // Update image counter
        if (totalImages > 1) {
          document.getElementById('currentImageIndex').textContent = currentImageIndex + 1;
        }
      }
      
      function handleZoomClick(imgUrl) {
        const modal = document.getElementById('imageZoomModal');
        const zoomedImage = document.getElementById('zoomedImage');
        
        zoomedImage.src = imgUrl;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
      
      function handleCloseZoom() {
        const modal = document.getElementById('imageZoomModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
      
      // Close modal on backdrop click
      document.addEventListener('click', function(event) {
        const modal = document.getElementById('imageZoomModal');
        if (event.target === modal) {
          handleCloseZoom();
        }
      });
      
      // Keyboard navigation
      document.addEventListener('keydown', function(event) {
        const modal = document.getElementById('imageZoomModal');
        if (modal.style.display === 'flex') {
          if (event.key === 'Escape') {
            handleCloseZoom();
          }
        }
      });
    </script>
  `;
};