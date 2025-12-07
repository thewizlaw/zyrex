// 9. CART TOTALS (Subtotal, Shipping, Tax, Total)
export const renderCartTotals = (section: any, styles: any) => {
  const { 
    subtotal = 747,
    shipping = 0,
    tax = 59.76,
    discount = 0,
    total = 806.76,
    promo_code = ""
  } = section;
  
  return `
    <section style="background: #f8fafc; padding: 2rem; border-radius: 12px; position: sticky; top: 2rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem; color: #111827;">
        Order Summary
      </h3>
      
      <!-- Promo Code -->
      <div style="margin-bottom: 1.5rem;">
        <div style="display: flex; gap: 0.5rem;">
          <input type="text" placeholder="Promo code" 
                 style="flex: 1; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 0.95rem;">
          <button style="background: ${styles.primary_color}; color: white; border: none; border-radius: 6px; padding: 0.75rem 1.5rem; cursor: pointer; font-weight: 600;">
            Apply
          </button>
        </div>
      </div>
      
      <!-- Cost Breakdown -->
      <div style="border-top: 1px solid #e5e7eb; padding-top: 1.5rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; color: #6b7280;">
          <span>Subtotal</span>
          <span style="font-weight: 600; color: #374151;">$${subtotal.toFixed(2)}</span>
        </div>
        
        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; color: #6b7280;">
          <span>Shipping</span>
          <span style="font-weight: 600; color: ${shipping === 0 ? '#10b981' : '#374151'};">
            ${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}
          </span>
        </div>
        
        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; color: #6b7280;">
          <span>Estimated Tax</span>
          <span style="font-weight: 600; color: #374151;">$${tax.toFixed(2)}</span>
        </div>
        
        ${discount > 0 ? `
          <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; color: #10b981;">
            <span>Discount</span>
            <span style="font-weight: 600;">-$${discount.toFixed(2)}</span>
          </div>
        ` : ''}
        
        <div style="border-top: 2px solid #e5e7eb; margin: 1.5rem 0; padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 1.125rem; font-weight: 700; color: #111827;">
            Total
          </span>
          <span style="font-size: 2rem; font-weight: 800; color: ${styles.primary_color};">
            $${total.toFixed(2)}
          </span>
        </div>
      </div>
      
      <!-- Checkout Button -->
      <button onclick="proceedToCheckout()" 
              style="width: 100%; background: ${styles.primary_color}; color: white; border: none; border-radius: 8px; padding: 1.25rem; font-weight: 700; font-size: 1.125rem; cursor: pointer; margin-bottom: 1rem; box-shadow: 0 4px 14px ${styles.primary_color}40;">
        Proceed to Checkout
      </button>
      
      <!-- Trust Badges -->
      <div style="display: flex; justify-content: center; gap: 1rem; padding-top: 1rem; border-top: 1px solid #e5e7eb; font-size: 0.875rem; color: #6b7280;">
        <span>🔒 Secure Checkout</span>
        <span>✓ SSL Encrypted</span>
      </div>
      
      <!-- Payment Methods -->
      <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #e5e7eb;">
        <div style="font-size: 0.875rem; color: #9ca3af; margin-bottom: 0.75rem; text-align: center;">
          We Accept
        </div>
        <div style="display: flex; justify-content: center; gap: 0.75rem;">
          <span style="padding: 0.5rem 0.75rem; background: white; border-radius: 6px; font-weight: 600; font-size: 0.75rem;">VISA</span>
          <span style="padding: 0.5rem 0.75rem; background: white; border-radius: 6px; font-weight: 600; font-size: 0.75rem;">MC</span>
          <span style="padding: 0.5rem 0.75rem; background: white; border-radius: 6px; font-weight: 600; font-size: 0.75rem;">AMEX</span>
          <span style="padding: 0.5rem 0.75rem; background: white; border-radius: 6px; font-weight: 600; font-size: 0.75rem;">PayPal</span>
        </div>
      </div>
    </section>
    
    <script>
      function proceedToCheckout() {
        window.location.href = '#checkout';
      }
    </script>
  `;
};
