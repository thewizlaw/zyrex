import createDesignSystem from "../../design-system";

// 6. PRODUCT REVIEWS - Using Design System
export const renderProductReviews = (section: any, styles: any) => {
  const { 
    reviews = [],
    average_rating = 4.5,
    total_reviews = 128,
    rating_breakdown = { 5: 80, 4: 30, 3: 10, 2: 5, 1: 3 }
  } = section;
  
  // Initialize design system
  const ds = createDesignSystem(styles);
  
  const defaultReviews = reviews.length === 0 ? [
    { name: "Sarah Johnson", rating: 5, date: "2 weeks ago", comment: "Absolutely love this product! Quality exceeded my expectations.", verified: true },
    { name: "Mike Chen", rating: 4, date: "1 month ago", comment: "Great value for money. Fast shipping too!", verified: true },
    { name: "Emma Davis", rating: 5, date: "1 month ago", comment: "Perfect! Exactly as described.", verified: false }
  ] : reviews;
  
  return `
    <section style="
      padding: ${ds.spacing[12]} 0; 
      background: ${ds.colors.semantic.bg.secondary}; 
      margin: ${ds.spacing[8]} -${ds.spacing[8]}; 
      padding: ${ds.spacing[12]} ${ds.spacing[8]};
      ${ds.animations.fadeIn};
    ">
      <h2 style="
        font-size: ${ds.typography.fontSize.h2};
        font-weight: ${ds.typography.fontWeight.bold}; 
        margin-bottom: ${ds.spacing[8]}; 
        color: ${ds.colors.semantic.text.primary};
        line-height: ${ds.typography.lineHeight.tight};
      ">
        Customer Reviews
      </h2>
      
      <div style="
        display: grid; 
        grid-template-columns: ${ds.containers.maxWidth.xs} 1fr; 
        gap: ${ds.spacing[12]}; 
        margin-bottom: ${ds.spacing[12]};
      " class="reviews-header">
        <!-- Rating Summary -->
        <div style="
          ${ds.createCardStyles()};
          padding: ${ds.spacing[8]};
        ">
          <div style="text-align: center; margin-bottom: ${ds.spacing[6]};">
            <div style="
              font-size: ${ds.typography.fontSize['5xl']}; 
              font-weight: ${ds.typography.fontWeight.extrabold}; 
              color: ${ds.colors.semantic.text.primary};
              line-height: 1;
              margin-bottom: ${ds.spacing[2]};
            ">
              ${average_rating}
            </div>
            <div style="display: flex; justify-content: center; margin: ${ds.spacing[2]} 0;">
              ${Array(5).fill(0).map((_, i) => 
                `<span style="
                  color: ${i < Math.floor(average_rating) ? ds.colors.semantic.status.warning : ds.colors.semantic.text.muted}; 
                  font-size: ${ds.typography.fontSize['2xl']};
                ">★</span>`
              ).join('')}
            </div>
            <div style="color: ${ds.colors.semantic.text.tertiary}; font-size: ${ds.typography.fontSize.sm};">
              Based on ${total_reviews} reviews
            </div>
          </div>
          
          <!-- Rating Bars -->
          ${[5,4,3,2,1].map(star => {
            const count = rating_breakdown[star] || 0;
            const percentage = (count / total_reviews) * 100;
            return `
              <div style="display: flex; align-items: center; gap: ${ds.spacing[2]}; margin-bottom: ${ds.spacing[2]};">
                <span style="
                  font-size: ${ds.typography.fontSize.sm}; 
                  color: ${ds.colors.semantic.text.tertiary}; 
                  width: ${ds.spacing[10]};
                ">${star} ★</span>
                <div style="
                  flex: 1; 
                  height: ${ds.spacing[2]}; 
                  background: ${ds.colors.semantic.border.primary}; 
                  border-radius: ${ds.borderRadius.full}; 
                  overflow: hidden;
                ">
                  <div style="
                    width: ${percentage}%; 
                    height: 100%; 
                    background: ${ds.colors.primary[500]};
                    ${ds.transitions.all};
                  "></div>
                </div>
                <span style="
                  font-size: ${ds.typography.fontSize.sm}; 
                  color: ${ds.colors.semantic.text.tertiary}; 
                  width: ${ds.spacing[8]};
                  text-align: right;
                ">${count}</span>
              </div>
            `;
          }).join('')}
        </div>
        
        <!-- Write Review Button -->
        <div style="display: flex; align-items: flex-start;">
          <button onclick="handleWriteReview()" 
                  style="
                    ${ds.createButtonStyles('primary')};
                    box-shadow: ${ds.shadows.colorMd(ds.colors.primary[500])};
                    padding: ${ds.spacing[4]} ${ds.spacing[8]};
                    font-size: ${ds.typography.fontSize.base};
                    display: flex;
                    align-items: center;
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
            <span style="font-size: ${ds.typography.fontSize.xl};">✍️</span>
            Write a Review
          </button>
        </div>
      </div>
      
      <!-- Individual Reviews -->
      <div style="display: grid; gap: ${ds.spacing[6]};">
        ${defaultReviews.map((review: any) => `
          <div style="
            ${ds.createCardStyles()};
            padding: ${ds.spacing[8]};
          ">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: ${ds.spacing[4]};">
              <div>
                <div style="
                  font-weight: ${ds.typography.fontWeight.bold}; 
                  color: ${ds.colors.semantic.text.primary}; 
                  margin-bottom: ${ds.spacing[1]};
                  display: flex;
                  align-items: center;
                  gap: ${ds.spacing[2]};
                  flex-wrap: wrap;
                ">
                  ${review.name}
                  ${review.verified ? `
                    <span style="
                      background: ${ds.colors.semantic.status.success}; 
                      color: white; 
                      padding: ${ds.spacing[0.5]} ${ds.spacing[2]}; 
                      border-radius: ${ds.borderRadius.sm}; 
                      font-size: ${ds.typography.fontSize.xs}; 
                      font-weight: ${ds.typography.fontWeight.semibold};
                    ">
                      ✓ Verified Purchase
                    </span>
                  ` : ''}
                </div>
                <div style="display: flex; align-items: center; gap: ${ds.spacing[2]}; flex-wrap: wrap;">
                  <div style="display: flex;">
                    ${Array(5).fill(0).map((_, i) => 
                      `<span style="
                        color: ${i < review.rating ? ds.colors.semantic.status.warning : ds.colors.semantic.text.muted}; 
                        font-size: ${ds.typography.fontSize.base};
                      ">★</span>`
                    ).join('')}
                  </div>
                  <span style="color: ${ds.colors.semantic.text.muted}; font-size: ${ds.typography.fontSize.sm};">
                    ${review.date}
                  </span>
                </div>
              </div>
            </div>
            
            <p style="
              color: ${ds.colors.semantic.text.secondary}; 
              line-height: ${ds.typography.lineHeight.relaxed};
              margin: 0;
            ">
              ${review.comment}
            </p>
            
            <!-- Helpful Buttons -->
            <div style="
              display: flex; 
              gap: ${ds.spacing[4]}; 
              margin-top: ${ds.spacing[4]}; 
              padding-top: ${ds.spacing[4]}; 
              border-top: 1px solid ${ds.colors.semantic.border.primary};
            ">
              <button onclick="handleHelpfulClick(this)" 
                      style="
                        background: none; 
                        border: 1px solid ${ds.colors.semantic.border.primary}; 
                        padding: ${ds.spacing[2]} ${ds.spacing[4]}; 
                        border-radius: ${ds.borderRadius.lg}; 
                        cursor: pointer; 
                        color: ${ds.colors.semantic.text.tertiary}; 
                        font-size: ${ds.typography.fontSize.sm};
                        ${ds.transitions.all};
                      "
                      onmouseover="
                        this.style.borderColor='${ds.colors.primary[500]}';
                        this.style.color='${ds.colors.primary[500]}';
                      "
                      onmouseout="
                        this.style.borderColor='${ds.colors.semantic.border.primary}';
                        this.style.color='${ds.colors.semantic.text.tertiary}';
                      ">
                👍 Helpful (12)
              </button>
              <button style="
                background: none; 
                border: 1px solid ${ds.colors.semantic.border.primary}; 
                padding: ${ds.spacing[2]} ${ds.spacing[4]}; 
                border-radius: ${ds.borderRadius.lg}; 
                cursor: pointer; 
                color: ${ds.colors.semantic.text.tertiary}; 
                font-size: ${ds.typography.fontSize.sm};
                ${ds.transitions.all};
              "
              onmouseover="
                this.style.borderColor='${ds.colors.semantic.status.error}';
                this.style.color='${ds.colors.semantic.status.error}';
              "
              onmouseout="
                this.style.borderColor='${ds.colors.semantic.border.primary}';
                this.style.color='${ds.colors.semantic.text.tertiary}';
              ">
                Report
              </button>
            </div>
          </div>
        `).join('')}
      </div>
      
      <!-- Load More -->
      <div style="text-align: center; margin-top: ${ds.spacing[8]};">
        <button onclick="handleLoadMore()" 
                style="
                  ${ds.createButtonStyles('outline')};
                  padding: ${ds.spacing[4]} ${ds.spacing[8]};
                  font-size: ${ds.typography.fontSize.base};
                "
                onmouseover="
                  this.style.background='${ds.colors.primary[50]}';
                  this.style.transform='translateY(-2px)';
                "
                onmouseout="
                  this.style.background='transparent';
                  this.style.transform='translateY(0)';
                ">
          Load More Reviews
        </button>
      </div>
    </section>
    
    <style>
      ${ds.animations.keyframes}
      
      /* Responsive adjustments */
      @media (max-width: ${ds.breakpoints.lg}) {
        .reviews-header {
          grid-template-columns: 1fr !important;
          gap: ${ds.spacing[8]} !important;
        }
        
        div[style*="${ds.createCardStyles()}"] {
          text-align: left !important;
        }
        
        div[style*="display: flex; align-items: flex-start"] {
          justify-content: center !important;
        }
      }
      
      @media (max-width: ${ds.breakpoints.md}) {
        section[style*="padding: ${ds.spacing[12]} ${ds.spacing[8]}"] {
          margin: ${ds.spacing[6]} -${ds.spacing[4]} !important;
          padding: ${ds.spacing[8]} ${ds.spacing[4]} !important;
        }
        
        h2[style*="font-size: ${ds.typography.fontSize.h2}"] {
          font-size: ${ds.typography.fontSize['2xl']} !important;
          margin-bottom: ${ds.spacing[6]} !important;
        }
        
        div[style*="padding: ${ds.spacing[8]}"] {
          padding: ${ds.spacing[6]} !important;
        }
        
        div[style*="grid-template-columns: ${ds.containers.maxWidth.xs} 1fr"] {
          gap: ${ds.spacing[6]} !important;
        }
      }
      
      @media (max-width: ${ds.breakpoints.sm}) {
        section[style*="padding: ${ds.spacing[12]} ${ds.spacing[8]}"] {
          margin: ${ds.spacing[4]} -${ds.spacing[2]} !important;
          padding: ${ds.spacing[6]} ${ds.spacing[2]} !important;
        }
        
        div[style*="padding: ${ds.spacing[8]}"] {
          padding: ${ds.spacing[4]} !important;
        }
        
        div[style*="display: flex; justify-content: space-between"] {
          flex-direction: column !important;
          gap: ${ds.spacing[2]} !important;
        }
        
        div[style*="display: flex; gap: ${ds.spacing[4]}"] {
          flex-direction: column !important;
          align-items: flex-start !important;
        }
        
        button[style*="padding: ${ds.spacing[4]} ${ds.spacing[8]}"] {
          width: 100% !important;
          padding: ${ds.spacing[3]} ${ds.spacing[4]} !important;
        }
      }
      
      /* Focus states */
      button:focus-visible {
        outline: 2px solid ${ds.colors.primary[500]};
        outline-offset: 2px;
      }
    </style>
    
    <script>
      function handleWriteReview() {
        // Open review modal or scroll to review form
        const event = new CustomEvent('openReviewModal');
        document.dispatchEvent(event);
        console.log('Write review clicked');
      }
      
      function handleHelpfulClick(element) {
        // Toggle helpful state
        const currentText = element.textContent;
        const countMatch = currentText.match(/\((\d+)\)/);
        const currentCount = countMatch ? parseInt(countMatch[1]) : 0;
        
        if (element.classList.contains('helpful-active')) {
          element.textContent = \`👍 Helpful (\${currentCount - 1})\`;
          element.classList.remove('helpful-active');
          element.style.background = 'none';
          element.style.color = '${ds.colors.semantic.text.tertiary}';
        } else {
          element.textContent = \`👍 Helpful (\${currentCount + 1})\`;
          element.classList.add('helpful-active');
          element.style.background = '${ds.colors.primary[50]}';
          element.style.color = '${ds.colors.primary[500]}';
          element.style.borderColor = '${ds.colors.primary[500]}';
        }
      }
      
      function handleLoadMore() {
        // Load more reviews implementation
        console.log('Load more reviews clicked');
        // This would typically make an API call to fetch more reviews
      }
      
      // Add helpful-active class style
      const style = document.createElement('style');
      style.textContent = \`
        .helpful-active {
          background: ${ds.colors.primary[50]} !important;
          color: ${ds.colors.primary[500]} !important;
          border-color: ${ds.colors.primary[500]} !important;
        }
      \`;
      document.head.appendChild(style);
    </script>
  `;
};