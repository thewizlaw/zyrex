// 10. CHECKOUT FORM (Shipping & Billing Address)
export const renderCheckoutForm = (section: any, styles: any) => {
  const { step = 1, total_steps = 3 } = section;
  
  return `
    <section style="padding: 2rem 0;">
      <!-- Progress Steps -->
      <div style="display: flex; justify-content: center; margin-bottom: 3rem;">
        ${[1, 2, 3].map(stepNum => `
          <div style="flex: 1; max-width: 200px; text-align: center; position: relative;">
            <div style="display: flex; align-items: center;">
              ${stepNum > 1 ? `
                <div style="flex: 1; height: 2px; background: ${stepNum <= step ? styles.primary_color : '#e5e7eb'};"></div>
              ` : ''}
              
              <div style="width: 40px; height: 40px; border-radius: 50%; background: ${stepNum <= step ? styles.primary_color : '#e5e7eb'}; color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; z-index: 2;">
                ${stepNum < step ? '✓' : stepNum}
              </div>
              
              ${stepNum < 3 ? `
                <div style="flex: 1; height: 2px; background: ${stepNum < step ? styles.primary_color : '#e5e7eb'};"></div>
              ` : ''}
            </div>
            <div style="margin-top: 0.5rem; font-size: 0.875rem; color: ${stepNum <= step ? styles.primary_color : '#9ca3af'}; font-weight: 600;">
              ${['Shipping', 'Payment', 'Review'][stepNum - 1]}
            </div>
          </div>
        `).join('')}
      </div>
      
      <!-- Shipping Form -->
      <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 2rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; color: #111827;">
          Shipping Information
        </h2>
        
        <form style="display: grid; gap: 1.5rem;">
          <!-- Email -->
          <div>
            <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem; font-size: 0.95rem;">
              Email Address *
            </label>
            <input type="email" required
                   style="width: 100%; padding: 0.875rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 1rem;">
          </div>
          
          <!-- Name Fields -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div>
              <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem; font-size: 0.95rem;">
                First Name *
              </label>
              <input type="text" required
                     style="width: 100%; padding: 0.875rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 1rem;">
            </div>
            <div>
              <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem; font-size: 0.95rem;">
                Last Name *
              </label>
              <input type="text" required
                     style="width: 100%; padding: 0.875rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 1rem;">
            </div>
          </div>
          
          <!-- Address -->
          <div>
            <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem; font-size: 0.95rem;">
              Street Address *
            </label>
            <input type="text" required
                   style="width: 100%; padding: 0.875rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 1rem;">
          </div>
          
          <!-- City, State, ZIP -->
          <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 1rem;">
            <div>
              <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem; font-size: 0.95rem;">
                City *
              </label>
              <input type="text" required
                     style="width: 100%; padding: 0.875rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 1rem;">
            </div>
            <div>
              <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem; font-size: 0.95rem;">
                State *
              </label>
              <select required
                      style="width: 100%; padding: 0.875rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 1rem;">
                <option>CA</option>
                <option>NY</option>
                <option>TX</option>
              </select>
            </div>
            <div>
              <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem; font-size: 0.95rem;">
                ZIP *
              </label>
              <input type="text" required
                     style="width: 100%; padding: 0.875rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 1rem;">
            </div>
          </div>
          
          <!-- Phone -->
          <div>
            <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem; font-size: 0.95rem;">
              Phone Number *
            </label>
            <input type="tel" required
                   style="width: 100%; padding: 0.875rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 1rem;">
          </div>
          
          <!-- Checkboxes -->
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
              <input type="checkbox" style="width: 18px; height: 18px; cursor: pointer;">
              <span style="color: #374151; font-size: 0.95rem;">
                Billing address same as shipping
              </span>
            </label>
            
            <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
              <input type="checkbox" style="width: 18px; height: 18px; cursor: pointer;">
              <span style="color: #374151; font-size: 0.95rem;">
                Save this information for next time
              </span>
            </label>
          </div>
          
          <!-- Action Buttons -->
          <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            <button type="button" 
                    style="flex: 1; padding: 1rem; background: white; color: #374151; border: 2px solid #e5e7eb; border-radius: 8px; font-weight: 600; cursor: pointer;">
              ← Back to Cart
            </button>
            <button type="submit" 
                    style="flex: 2; padding: 1rem; background: ${styles.primary_color}; color: white; border: none; border-radius: 8px; font-weight: 700; font-size: 1.125rem; cursor: pointer; box-shadow: 0 4px 14px ${styles.primary_color}40;">
              Continue to Payment →
            </button>
          </div>
        </form>
      </div>
    </section>
  `;
};