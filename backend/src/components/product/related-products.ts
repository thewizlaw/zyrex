// 7. RELATED PRODUCTS
export const renderRelatedProducts = (section: any, styles: any) => {
  const { 
    title = "You May Also Like",
    products = []
  } = section;
  
  const defaultProducts = products.length === 0 ? [
    { name: "Similar Product 1", price: 199, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300", rating: 4.5 },
    { name: "Similar Product 2", price: 249, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300", rating: 4.8 },
    { name: "Similar Product 3", price: 179, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=300", rating: 4.3 },
    { name: "Similar Product 4", price: 299, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300", rating: 4.7 }
  ] : products;
  
  return `
    <section style="padding: 4rem 0;">
      <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 2rem; color: #111827;">
        ${title}
      </h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;">
        ${defaultProducts.map((product: any) => `
          <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;">
            <!-- Product Image -->
            <div style="position: relative; overflow: hidden; aspect-ratio: 1/1;">
              <img src="${product.image}" alt="${product.name}" 
                   style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;">
              
              <!-- Quick Actions -->
              <div style="position: absolute; top: 1rem; right: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                <button style="background: white; border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  ♡
                </button>
                <button style="background: white; border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  👁
                </button>
              </div>
            </div>
            
            <!-- Product Info -->
            <div style="padding: 1.5rem;">
              <h3 style="font-size: 1rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;">
                ${product.name}
              </h3>
              
              <!-- Rating -->
              <div style="display: flex; align-items: center; gap: 0.25rem; margin-bottom: 0.75rem;">
                ${Array(5).fill(0).map((_, i) => 
                  `<span style="color: ${i < Math.floor(product.rating) ? '#fbbf24' : '#d1d5db'}; font-size: 0.875rem;">★</span>`
                ).join('')}
                <span style="color: #9ca3af; font-size: 0.875rem; margin-left: 0.25rem;">
                  (${product.rating})
                </span>
              </div>
              
              <!-- Price -->
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 1.5rem; font-weight: 800; color: #111827;">
                  $${product.price}
                </span>
                <button style="background: ${styles.primary_color}; color: white; border: none; border-radius: 8px; padding: 0.5rem 1rem; cursor: pointer; font-weight: 600; font-size: 0.875rem;">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
    
    <style>
      [style*="cursor: pointer"]:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.12);
      }
      
      [style*="cursor: pointer"]:hover img {
        transform: scale(1.05);
      }
    </style>
  `;
};