// 14. MODERN WISHLIST ITEMS
export const renderWishlistItems = (section: any, styles: any) => {
  const { items = [] } = section;
  const primaryColor = styles.primary_color || '#3b82f6';
  
  const defaultItems = items.length === 0 ? [
    { 
      id: 'prod_1', 
      name: "Premium Wireless Headphones", 
      price: 249, 
      image: "https://placehold.co/400x400/f3f4f6/4b5563?text=Headphones", 
      rating: 4.8, 
      in_stock: true 
    },
    { 
      id: 'prod_2', 
      name: "Minimalist Leather Backpack", 
      price: 189, 
      image: "https://placehold.co/400x400/f3f4f6/4b5563?text=Backpack", 
      rating: 4.6, 
      in_stock: true 
    },
    { 
      id: 'prod_3', 
      name: "Automatic Chronograph Watch", 
      price: 499, 
      image: "https://placehold.co/400x400/f3f4f6/4b5563?text=Watch", 
      rating: 4.9, 
      in_stock: false 
    }
  ] : items;

  const starIcon = (isFilled: boolean) => `
    <svg class="star-icon" style="width: 1rem; height: 1rem; flex-shrink: 0; color: ${isFilled ? '#fbbf24' : '#d1d5db'};" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.846 5.673a1 1 0 00.95.69h5.969c.969 0 1.371 1.24.588 1.81l-4.83 3.515a1 1 0 00-.364 1.118l1.846 5.673c.3.921-.755 1.688-1.54 1.118l-4.83-3.515a1 1 0 00-1.175 0l-4.83 3.515c-.784.57-1.838-.197-1.54-1.118l1.846-5.673a1 1 0 00-.364-1.118L2.49 11.099c-.784-.57-.38-1.81.588-1.81h5.969a1 1 0 00.95-.69l1.846-5.673z"></path>
    </svg>
  `;

  return `
    <section>
      <!-- Wishlist Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
        <h1 style="font-size: clamp(1.5rem, 5vw, 2rem); font-weight: 700; color: #111827;">
          My Wishlist (${defaultItems.length})
        </h1>
        <button style="
          background: ${primaryColor}; 
          color: white; 
          border: none; 
          border-radius: 8px; 
          padding: 0.875rem 1.5rem; 
          font-weight: 600; 
          cursor: pointer;
          transition: all 0.2s ease;
          display: ${defaultItems.length === 0 ? 'none' : 'block'};
        "
        onmouseover="this.style.opacity='0.85';"
        onmouseout="this.style.opacity='1';">
          Add All to Cart
        </button>
      </div>
      
      <!-- Wishlist Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;">
        ${defaultItems.map((item: any) => `
          <div class="wishlist-card" style="
            background: white; 
            border: 1px solid #e5e7eb; 
            border-radius: 12px; 
            overflow: hidden; 
            position: relative;
            transition: all 0.3s ease;
          ">
            <!-- Remove Button -->
            <button 
                onclick="showRemoveModal('${item.name}', '${item.id}')" 
                style="
                  position: absolute; 
                  top: 1rem; 
                  right: 1rem; 
                  background: white; 
                  border: none; 
                  border-radius: 50%; 
                  width: 36px; 
                  height: 36px; 
                  cursor: pointer; 
                  box-shadow: 0 2px 8px rgba(0,0,0,0.1); 
                  z-index: 10;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #9ca3af;
                  transition: all 0.2s ease;
                "
                onmouseover="this.style.background='#fef2f2'; this.style.color='#ef4444';"
                onmouseout="this.style.background='white'; this.style.color='#9ca3af';">
              <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </button>
            
            <!-- Product Image -->
            <div style="aspect-ratio: 1/1; overflow: hidden; position: relative; background: #f9fafb;">
              <img src="${item.image}" alt="${item.name}" 
                   style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
              ${!item.in_stock ? `
                <div style="
                  position: absolute; 
                  inset: 0; 
                  background: rgba(255,255,255,0.7); 
                  display: flex; 
                  align-items: center; 
                  justify-content: center; 
                  color: #374151; 
                  font-weight: 700;
                  backdrop-filter: blur(4px);
                  -webkit-backdrop-filter: blur(4px);
                ">
                  Out of Stock
                </div>
              ` : ''}
            </div>
            
            <!-- Product Info -->
            <div style="padding: 1.5rem;">
              <h3 style="font-size: 1rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${item.name}
              </h3>
              
              <!-- Rating -->
              <div style="display: flex; align-items: center; gap: 0.25rem; margin-bottom: 0.75rem;">
                ${Array(5).fill(0).map((_, i) => 
                  starIcon(i < Math.floor(item.rating))
                ).join('')}
                <span style="color: #6b7280; font-size: 0.875rem; margin-left: 0.25rem;">
                  (${item.rating})
                </span>
              </div>
              
              <!-- Price & Stock -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span style="font-size: 1.5rem; font-weight: 800; color: ${primaryColor};">
                  $${item.price}
                </span>
                ${item.in_stock ? `
                  <span style="color: #10b981; font-size: 0.875rem; font-weight: 600; background: #f0fdfa; padding: 0.25rem 0.5rem; border-radius: 6px;">
                    ✓ In Stock
                  </span>
                ` : `
                  <span style="color: #ef4444; font-size: 0.875rem; font-weight: 600; background: #fef2f2; padding: 0.25rem 0.5rem; border-radius: 6px;">
                    Out of Stock
                  </span>
                `}
              </div>
              
              <!-- Add to Cart Button -->
              <button ${!item.in_stock ? 'disabled' : ''} 
                      style="
                        width: 100%; 
                        background: ${item.in_stock ? primaryColor : '#d1d5db'}; 
                        color: white; 
                        border: none; 
                        border-radius: 8px; 
                        padding: 0.875rem; 
                        font-weight: 600; 
                        cursor: ${item.in_stock ? 'pointer' : 'not-allowed'};
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.5rem;
                        transition: all 0.2s ease;
                      "
                      onmouseover="this.style.opacity = ${item.in_stock ? '0.85' : '1'};"
                      onmouseout="this.style.opacity = '1';">
                <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                ${item.in_stock ? 'Add to Cart' : 'Notify Me'}
              </button>
            </div>
          </div>
        `).join('')}
      </div>
      
      <!-- Empty State -->
      ${defaultItems.length === 0 ? `
        <div style="text-align: center; padding: 4rem 2rem; background: #f9fafb; border-radius: 12px; border: 1px dashed #e5e7eb;">
          <div style="font-size: 4rem; margin-bottom: 1rem; color: #d1d5db;">
            <svg style="width: 80px; height: 80px; margin: 0 auto;" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </div>
          <h3 style="font-size: 1.5rem; font-weight: 700; color: #111827; margin-bottom: 0.5rem;">
            Your wishlist is empty
          </h3>
          <p style="color: #6b7280; margin-bottom: 2rem;">
            Start adding products you love!
          </p>
          <button style="
            background: ${primaryColor}; 
            color: white; 
            border: none; 
            border-radius: 8px; 
            padding: 1rem 2rem; 
            font-weight: 600; 
            cursor: pointer;
            transition: all 0.2s ease;
          "
          onmouseover="this.style.opacity='0.85';"
          onmouseout="this.style.opacity='1';">
            Continue Shopping
          </button>
        </div>
      ` : ''}
    </section>
    
    <!-- Custom Modal -->
    <div id="wishlistRemoveModal" style="
      position: fixed; 
      inset: 0; 
      background: rgba(0,0,0,0.5); 
      display: none; 
      align-items: center; 
      justify-content: center; 
      z-index: 1000;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      opacity: 0;
      transition: opacity 0.3s ease;
    ">
      <div style="
        background: white; 
        border-radius: 16px; 
        padding: 2rem; 
        width: 90%; 
        max-width: 400px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        transform: scale(0.95);
        transition: all 0.3s ease;
      ">
        <h3 style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-top: 0; margin-bottom: 0.5rem;">
          Remove Item
        </h3>
        <p id="modalItemName" style="color: #6b7280; margin-bottom: 1.5rem;">
          Are you sure you want to remove [Item Name] from your wishlist?
        </p>
        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
          <button 
            onclick="hideRemoveModal()"
            style="
              background: #e5e7eb; 
              color: #374151; 
              border: none; 
              border-radius: 8px; 
              padding: 0.75rem 1.25rem; 
              font-weight: 600; 
              cursor: pointer;
              transition: all 0.2s ease;
            "
            onmouseover="this.style.opacity='0.85';"
            onmouseout="this.style.opacity='1';">
            Cancel
          </button>
          <button 
            id="modalConfirmRemove"
            style="
              background: #ef4444; 
              color: white; 
              border: none; 
              border-radius: 8px; 
              padding: 0.75rem 1.25rem; 
              font-weight: 600; 
              cursor: pointer;
              transition: all 0.2s ease;
            "
            onmouseover="this.style.opacity='0.85';"
            onmouseout="this.style.opacity='1';">
            Remove
          </button>
        </div>
      </div>
    </div>
    
    <style>
      .wishlist-card {
        box-shadow: 0 4px 12px rgba(0,0,0,0.0);
      }
      .wishlist-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.07);
      }
      .wishlist-card:hover img {
        transform: scale(1.05);
      }
    </style>
    
    <script>
      const modal = document.getElementById('wishlistRemoveModal');
      const modalItemName = document.getElementById('modalItemName');
      const modalConfirmBtn = document.getElementById('modalConfirmRemove');

      function showRemoveModal(name, id) {
        if (!modal || !modalItemName || !modalConfirmBtn) return;
        
        modalItemName.textContent = 'Are you sure you want to remove "' + name + '" from your wishlist?';
        modalConfirmBtn.onclick = () => performRemove(id);
        
        modal.style.display = 'flex';
        setTimeout(() => {
          modal.style.opacity = '1';
          modal.children[0].style.transform = 'scale(1)';
        }, 10);
      }

      function hideRemoveModal() {
        if (!modal) return;
        
        modal.style.opacity = '0';
        modal.children[0].style.transform = 'scale(0.95)';
        setTimeout(() => {
          modal.style.display = 'none';
        }, 300);
      }

      function performRemove(id) {
        console.log('Removing item with id:', id);
        // Add item removal logic here
        
        // For demo, we just hide the modal and log
        hideRemoveModal();
        // You could also remove the element from the DOM, e.g.:
        // document.getElementById('wishlist-item-' + id).remove();
      }
    </script>
  `;
};