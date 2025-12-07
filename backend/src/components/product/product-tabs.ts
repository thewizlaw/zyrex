// 5. PRODUCT TABS (Description, Specifications, Reviews)
export const renderProductTabs = (section: any, styles: any) => {
  const { 
    description = "Product description goes here...",
    specifications = [],
    shipping_info = {},
    tabs = ['description', 'specifications', 'shipping']
  } = section;
  
  return `
    <section style="padding: 3rem 0;">
      <!-- Tab Navigation -->
      <div style="display: flex; gap: 2rem; border-bottom: 2px solid #e5e7eb; margin-bottom: 2rem;">
        ${tabs.map((tab: string, idx: number) => `
          <button onclick="switchTab('${tab}')" 
                  id="tab-${tab}"
                  style="padding: 1rem 2rem; background: none; border: none; border-bottom: 3px solid ${idx === 0 ? styles.primary_color : 'transparent'}; color: ${idx === 0 ? styles.primary_color : '#6b7280'}; font-weight: 600; font-size: 1rem; cursor: pointer; transition: all 0.3s; text-transform: capitalize;">
            ${tab.replace('-', ' ')}
          </button>
        `).join('')}
      </div>
      
      <!-- Tab Content -->
      <div id="tab-content">
        <!-- Description Tab -->
        <div id="content-description" style="display: block;">
          <div style="max-width: 800px; line-height: 1.8; color: #374151;">
            ${description}
          </div>
          
          <!-- Key Features -->
          <div style="margin-top: 2rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: #111827;">
              Key Features
            </h3>
            <ul style="list-style: none; padding: 0;">
              <li style="padding: 0.75rem 0; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; gap: 0.75rem;">
                <span style="color: ${styles.primary_color}; font-size: 1.25rem;">✓</span>
                <span>Premium quality materials</span>
              </li>
              <li style="padding: 0.75rem 0; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; gap: 0.75rem;">
                <span style="color: ${styles.primary_color}; font-size: 1.25rem;">✓</span>
                <span>Durable construction</span>
              </li>
              <li style="padding: 0.75rem 0; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; gap: 0.75rem;">
                <span style="color: ${styles.primary_color}; font-size: 1.25rem;">✓</span>
                <span>Modern design</span>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Specifications Tab -->
        <div id="content-specifications" style="display: none;">
          <table style="width: 100%; border-collapse: collapse;">
            ${specifications.map((spec: any) => `
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 600; color: #374151; width: 30%;">
                  ${spec.label}
                </td>
                <td style="padding: 1rem; color: #6b7280;">
                  ${spec.value}
                </td>
              </tr>
            `).join('')}
            ${specifications.length === 0 ? `
              <tr><td style="padding: 1rem; color: #6b7280;" colspan="2">
                <strong>Dimensions:</strong> 10" x 8" x 5"<br>
                <strong>Weight:</strong> 2.5 lbs<br>
                <strong>Material:</strong> Premium Leather<br>
                <strong>Origin:</strong> Made in Italy<br>
                <strong>Care:</strong> Wipe clean with damp cloth
              </td></tr>
            ` : ''}
          </table>
        </div>
        
        <!-- Shipping Tab -->
        <div id="content-shipping" style="display: none;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
            <div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px;">
              <h4 style="font-weight: 700; margin-bottom: 0.75rem; color: #111827;">
                🚚 Delivery Options
              </h4>
              <p style="color: #6b7280; line-height: 1.6;">
                Standard Shipping: 5-7 business days<br>
                Express Shipping: 2-3 business days<br>
                Next Day Delivery: Available for select locations
              </p>
            </div>
            
            <div style="background: #f8fafc; padding: 1.5rem; border-radius: 12px;">
              <h4 style="font-weight: 700; margin-bottom: 0.75rem; color: #111827;">
                ↩️ Return Policy
              </h4>
              <p style="color: #6b7280; line-height: 1.6;">
                30-day return window<br>
                Free return shipping<br>
                Full refund or exchange
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <script>
      function switchTab(tabName) {
        // Hide all tab content
        const allContent = document.querySelectorAll('[id^="content-"]');
        allContent.forEach(content => content.style.display = 'none');
        
        // Show selected tab content
        document.getElementById('content-' + tabName).style.display = 'block';
        
        // Update tab button styles
        const allTabs = document.querySelectorAll('[id^="tab-"]');
        allTabs.forEach(tab => {
          tab.style.borderBottomColor = 'transparent';
          tab.style.color = '#6b7280';
        });
        
        const activeTab = document.getElementById('tab-' + tabName);
        activeTab.style.borderBottomColor = '${styles.primary_color}';
        activeTab.style.color = '${styles.primary_color}';
      }
    </script>
  `;
};