// 11. PAYMENT METHODS
export const renderPaymentMethods = (section: any, styles: any) => {
  return `
    <section style="padding: 2rem 0;">
      <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 2rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; color: #111827;">
          Payment Method
        </h2>
        
        <!-- Payment Options -->
        <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
          <!-- Credit Card -->
          <label style="display: flex; align-items: center; padding: 1.5rem; border: 2px solid ${styles.primary_color}; border-radius: 8px; cursor: pointer; background: ${styles.primary_color}08;">
            <input type="radio" name="payment" value="card" checked
                   style="width: 20px; height: 20px; cursor: pointer; margin-right: 1rem;">
            <div style="flex: 1;">
              <div style="font-weight: 600; color: #111827; margin-bottom: 0.25rem;">
                💳 Credit / Debit Card
              </div>
              <div style="font-size: 0.875rem; color: #6b7280;">
                Visa, Mastercard, Amex
              </div>
            </div>
          </label>
          
          <!-- PayPal -->
          <label style="display: flex; align-items: center; padding: 1.5rem; border: 2px solid #e5e7eb; border-radius: 8px; cursor: pointer;">
            <input type="radio" name="payment" value="paypal"
                   style="width: 20px; height: 20px; cursor: pointer; margin-right: 1rem;">
            <div style="flex: 1;">
              <div style="font-weight: 600; color: #111827; margin-bottom: 0.25rem;">
                PayPal
              </div>
              <div style="font-size: 0.875rem; color: #6b7280;">
                Quick and secure payments
              </div>
            </div>
          </label>
          
          <!-- Apple Pay -->
          <label style="display: flex; align-items: center; padding: 1.5rem; border: 2px solid #e5e7eb; border-radius: 8px; cursor: pointer;">
            <input type="radio" name="payment" value="applepay"
                   style="width: 20px; height: 20px; cursor: pointer; margin-right: 1rem;">
            <div style="flex: 1;">
              <div style="font-weight: 600; color: #111827; margin-bottom: 0.25rem;">
                🍎 Apple Pay
              </div>
              <div style="font-size: 0.875rem; color: #6b7280;">
                Fast checkout with Apple Pay
              </div>
            </div>
          </label>
        </div>
        
        <!-- Card Details Form -->
        <div id="card-form" style="display: grid; gap: 1.5rem; padding: 1.5rem; background: #f8fafc; border-radius: 8px;">
          <div>
            <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem; font-size: 0.95rem;">
              Card Number *
            </label>
            <input type="text" placeholder="1234 5678 9012 3456"
                   style="width: 100%; padding: 0.875rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 1rem;">
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div>
              <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem; font-size: 0.95rem;">
                Expiry Date *
              </label>
              <input type="text" placeholder="MM / YY"
                     style="width: 100%; padding: 0.875rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 1rem;">
            </div>
            <div>
              <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem; font-size: 0.95rem;">
                CVV *
              </label>
              <input type="text" placeholder="123"
                     style="width: 100%; padding: 0.875rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 1rem;">
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};