// 8. CART SUMMARY (Shopping Cart Items List)
export const renderCartSummary = (section: any, styles: any) => {
  const { items = [] } = section;
  
  const defaultItems = items.length === 0 ? [
    { 
      name: "Premium Leather Bag", 
      price: 299, 
      quantity: 2, 
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200",
      size: "Medium",
      color: "Brown"
    },
    { 
      name: "Designer Sunglasses", 
      price: 149, 
      quantity: 1, 
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200",
      color: "Black"
    }
  ] : items;
  
  return `
    <section style="padding: 2rem 0;">
      <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 1.5rem; color: #111827;">
        Shopping Cart (${defaultItems.reduce((sum: number, item: any) => sum + item.quantity, 0)} items)
      </h2>
      
      <!-- Cart Items -->
      <div style="display: grid; gap: 1.5rem;">
        ${defaultItems.map((item: any, index: number) => `
          <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1.5rem; display: grid; grid-template-columns: 120px 1fr auto; gap: 1.5rem; align-items: center;">
            <!-- Product Image -->
            <div style="aspect-ratio: 1/1; border-radius: 8px; overflow: hidden;">
              <img src="${item.image}" alt="${item.name}" 
                   style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            
            <!-- Product Details -->
            <div>
              <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;">
                ${item.name}
              </h3>
              
              <div style="display: flex; flex-wrap: wrap; gap: 1rem; color: #6b7280; font-size: 0.875rem; margin-bottom: 1rem;">
                ${item.size ? `<span>Size: <strong>${item.size}</strong></span>` : ''}
                ${item.color ? `<span>Color: <strong>${item.color}</strong></span>` : ''}
              </div>
              
              <!-- Quantity Selector -->
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="display: flex; align-items: center; border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden;">
                  <button onclick="updateCartQuantity(${index}, -1)" 
                          style="padding: 0.5rem 0.75rem; background: white; border: none; cursor: pointer; color: #6b7280;">
                    −
                  </button>
                  <span id="quantity-${index}" style="padding: 0.5rem 1rem; font-weight: 600; min-width: 40px; text-align: center;">
                    ${item.quantity}
                  </span>
                  <button onclick="updateCartQuantity(${index}, 1)" 
                          style="padding: 0.5rem 0.75rem; background: white; border: none; cursor: pointer; color: #6b7280;">
                    +
                  </button>
                </div>
                
                <button onclick="removeFromCart(${index})" 
                        style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.875rem; text-decoration: underline;">
                  Remove
                </button>
                
                <button style="background: none; border: none; color: ${styles.primary_color}; cursor: pointer; font-size: 0.875rem; text-decoration: underline;">
                  Save for Later
                </button>
              </div>
            </div>
            
            <!-- Price -->
            <div style="text-align: right;">
              <div style="font-size: 1.5rem; font-weight: 700; color: #111827; margin-bottom: 0.5rem;">
                $${item.price * item.quantity}
              </div>
              <div style="color: #9ca3af; font-size: 0.875rem;">
                $${item.price} each
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      
      <!-- Continue Shopping -->
      <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e5e7eb;">
        <a href="#products" style="color: ${styles.primary_color}; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem;">
          ← Continue Shopping
        </a>
      </div>
    </section>
    
    <script>
      function updateCartQuantity(index, change) {
        const quantityEl = document.getElementById('quantity-' + index);
        const newQuantity = parseInt(quantityEl.textContent) + change;
        if (newQuantity >= 1) {
          quantityEl.textContent = newQuantity;
          updateCartTotals();
        }
      }
      
      function removeFromCart(index) {
        if (confirm('Remove this item from cart?')) {
          alert('Item removed from cart');
        }
      }
      
      function updateCartTotals() {
        // Recalculate totals (in real app, would update backend)
        console.log('Cart totals updated');
      }
    </script>
  `;
};
