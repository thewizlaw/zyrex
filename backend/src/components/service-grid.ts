// 🛍️ MODERN SERVICE GRID - Premium service cards
export const renderServiceGrid = (section: any, styles: any) => {
  const { title, subtitle, items = [] } = section;
  
  return `
    <section style="
      padding: 6rem 0;
      background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
      position: relative;
      overflow: hidden;
    ">
      <!-- Background decoration -->
      <div style="
        position: absolute;
        top: -10%;
        right: -5%;
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, ${styles.primary_color}08 0%, transparent 70%);
        border-radius: 50%;
      "></div>
      
      <div style="max-width: 1400px; margin: 0 auto; padding: 0 2rem; position: relative; z-index: 2;">
        ${title || subtitle ? `
          <div style="text-align: center; margin-bottom: 4rem;">
            ${title ? `
              <h2 style="
                font-size: clamp(2rem, 4vw, 3rem); 
                font-weight: 800;
                margin-bottom: 1rem;
                background: linear-gradient(135deg, #111827, #4b5563);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                letter-spacing: -0.02em;
              ">${title}</h2>
            ` : ''}
            ${subtitle ? `
              <p style="
                font-size: 1.25rem; 
                color: #6b7280; 
                max-width: 600px; 
                margin: 0 auto;
                line-height: 1.6;
              ">${subtitle}</p>
            ` : ''}
          </div>
        ` : ''}
        
        <div style="
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
          gap: 2.5rem;
        ">
          ${items.map((item: any, index: number) => `
            <div style="
              text-align: center; 
              padding: 3rem 2rem; 
              background: white; 
              border-radius: 20px; 
              box-shadow: 0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.04); 
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              border: 1px solid #f3f4f6;
              position: relative;
              overflow: hidden;
              animation: slideUp 0.6s ease-out ${index * 0.1}s backwards;
            " onmouseover="
              this.style.transform='translateY(-12px) scale(1.02)';
              this.style.boxShadow='0 20px 25px -5px rgba(0,0,0,0.12), 0 10px 10px -5px rgba(0,0,0,0.06)';
              this.style.borderColor='${styles.primary_color}30';
              this.querySelector('.service-icon').style.transform='scale(1.15) rotate(5deg)';
            " onmouseout="
              this.style.transform='translateY(0) scale(1)';
              this.style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.04)';
              this.style.borderColor='#f3f4f6';
              this.querySelector('.service-icon').style.transform='scale(1) rotate(0deg)';
            ">
              <!-- Gradient accent -->
              <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, ${styles.primary_color}, ${styles.secondary_color || '#8b5cf6'});
              "></div>
              
              ${item.icon ? `
                <div class="service-icon" style="
                  font-size: 4rem; 
                  margin-bottom: 1.5rem;
                  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                  filter: drop-shadow(0 4px 8px ${styles.primary_color}20);
                ">${item.icon}</div>
              ` : ''}
              
              ${item.title ? `
                <h3 style="
                  font-size: 1.75rem; 
                  font-weight: 700;
                  margin-bottom: 1rem; 
                  color: #111827;
                  letter-spacing: -0.01em;
                ">${item.title}</h3>
              ` : ''}
              
              ${item.description ? `
                <p style="
                  color: #6b7280; 
                  margin-bottom: 2rem;
                  font-size: 1rem;
                  line-height: 1.7;
                ">${item.description}</p>
              ` : ''}
              
              ${item.price ? `
                <div style="
                  font-size: 2.5rem; 
                  font-weight: 800; 
                  background: linear-gradient(135deg, ${styles.primary_color}, ${styles.secondary_color || '#8b5cf6'});
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  margin-bottom: 1.5rem;
                  letter-spacing: -0.02em;
                ">${item.price}</div>
              ` : ''}
              
              <button onclick="scrollToBooking()" style="
                background: linear-gradient(135deg, ${styles.primary_color}, ${styles.secondary_color || '#8b5cf6'}); 
                color: white; 
                border: none; 
                padding: 1rem 2.5rem; 
                border-radius: 12px; 
                cursor: pointer; 
                font-weight: 600;
                font-size: 1rem;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 4px 14px ${styles.primary_color}40;
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
              " onmouseover="
                this.style.transform='translateY(-2px) scale(1.02)';
                this.style.boxShadow='0 8px 25px ${styles.primary_color}60';
              " onmouseout="
                this.style.transform='translateY(0) scale(1)';
                this.style.boxShadow='0 4px 14px ${styles.primary_color}40';
              ">
                <span>Book Now</span>
                <span style="font-size: 1.125rem;">→</span>
              </button>
            </div>
          `).join('')}
        </div>
      </div>
      
      <script>
        function scrollToBooking() {
          const bookingEl = document.querySelector('#booking');
          if (bookingEl) {
            bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            alert('Booking section not found on this page');
          }
        }
      </script>
      
      <style>
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      </style>
    </section>
  `;
};
