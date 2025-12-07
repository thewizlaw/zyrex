export const renderBookingForm = (section: any, styles: any) => {
  const { title, subtitle, services = [] } = section;
  
  return `
    <section style="padding: 4rem 0; background: #f8f9fa;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;">
          <!-- Service Selection -->
          <div>
            ${title ? `<h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: ${styles.primary_color}">${title}</h2>` : ''}
            ${subtitle ? `<p style="font-size: 1.25rem; margin-bottom: 2rem; color: #666;">${subtitle}</p>` : ''}
            
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${services.map((service: any, index: number) => `
                <div style="border: 2px solid #e2e8f0; border-radius: 8px; padding: 1.5rem; cursor: pointer; transition: all 0.3s ease;"
                     onmouseover="this.style.borderColor='${styles.primary_color}'; this.style.transform='translateY(-2px)'" 
                     onmouseout="this.style.borderColor='#e2e8f0'; this.style.transform='translateY(0)'"
                     onclick="selectService(${index})">
                  ${service.title ? `<h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">${service.title}</h3>` : ''}
                  ${service.description ? `<p style="margin-bottom: 1rem; color: #666;">${service.description}</p>` : ''}
                  ${service.price ? `<div style="font-size: 1.5rem; font-weight: bold; color: ${styles.primary_color}">${service.price}</div>` : ''}
                  ${service.duration ? `<div style="color: #666; font-size: 0.9rem;">Duration: ${service.duration}</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- Booking Form -->
          <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
            <h3 style="margin-bottom: 2rem; font-size: 1.5rem;">Book Your Session</h3>
            <form id="bookingForm" style="display: flex; flex-direction: column; gap: 1.5rem;">
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Full Name</label>
                <input type="text" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email</label>
                <input type="email" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Phone</label>
                <input type="tel" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Preferred Date</label>
                <input type="date" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;">
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Message</label>
                <textarea rows="4" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; resize: vertical;"></textarea>
              </div>
              
              <button type="submit" style="background: ${styles.primary_color}; color: white; padding: 1rem 2rem; border: none; border-radius: 6px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: background 0.3s ease;">
                Book Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <script>
      let selectedService = null;
      
      function selectService(index) {
        selectedService = index;
        // Update UI to show selected service
        document.querySelectorAll('[onclick^="selectService"]').forEach((el, i) => {
          if (i === index) {
            el.style.borderColor = '${styles.primary_color}';
            el.style.background = '${styles.primary_color}10';
          } else {
            el.style.borderColor = '#e2e8f0';
            el.style.background = 'white';
          }
        });
      }
      
      document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (!selectedService) {
          alert('Please select a service first');
          return;
        }
        alert('Booking submitted successfully! We will contact you soon.');
      });
    </script>
  `;
};