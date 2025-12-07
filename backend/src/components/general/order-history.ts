// 13. ORDER HISTORY
export const renderOrderHistory = (section: any, styles: any) => {
  const { orders = [] } = section;
  
  const defaultOrders = orders.length === 0 ? [
    { 
      id: "#ORD-2024-001", 
      date: "Nov 10, 2024", 
      status: "Delivered", 
      total: 456.00, 
      items: 3,
      tracking: "TRK123456789"
    },
    { 
      id: "#ORD-2024-002", 
      date: "Nov 5, 2024", 
      status: "In Transit", 
      total: 299.00, 
      items: 1,
      tracking: "TRK987654321"
    },
    { 
      id: "#ORD-2024-003", 
      date: "Oct 28, 2024", 
      status: "Processing", 
      total: 189.50, 
      items: 2,
      tracking: null
    }
  ] : orders;
  
  const statusColors: any = {
    'Delivered': '#10b981',
    'In Transit': '#3b82f6',
    'Processing': '#f59e0b',
    'Cancelled': '#ef4444'
  };
  
  return `
    <section>
      <h1 style="font-size: 2rem; font-weight: 700; margin-bottom: 2rem; color: #111827;">
        My Orders
      </h1>
      
      <!-- Filters -->
      <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
        <button style="padding: 0.75rem 1.5rem; background: ${styles.primary_color}; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
          All Orders
        </button>
        <button style="padding: 0.75rem 1.5rem; background: white; color: #6b7280; border: 1px solid #e5e7eb; border-radius: 8px; font-weight: 600; cursor: pointer;">
          In Transit
        </button>
        <button style="padding: 0.75rem 1.5rem; background: white; color: #6b7280; border: 1px solid #e5e7eb; border-radius: 8px; font-weight: 600; cursor: pointer;">
          Delivered
        </button>
        <button style="padding: 0.75rem 1.5rem; background: white; color: #6b7280; border: 1px solid #e5e7eb; border-radius: 8px; font-weight: 600; cursor: pointer;">
          Cancelled
        </button>
      </div>
      
      <!-- Orders List -->
      <div style="display: grid; gap: 1.5rem;">
        ${defaultOrders.map((order: { id: any; date: any; total: number; status: string; tracking: any; }) => `
          <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 2rem;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-bottom: 1.5rem;">
              <!-- Order Info -->
              <div>
                <div style="color: #9ca3af; font-size: 0.875rem; margin-bottom: 0.25rem;">
                  Order Number
                </div>
                <div style="font-weight: 700; color: #111827; font-size: 1.125rem;">
                  ${order.id}
                </div>
              </div>
              
              <div>
                <div style="color: #9ca3af; font-size: 0.875rem; margin-bottom: 0.25rem;">
                  Date
                </div>
                <div style="font-weight: 600; color: #374151;">
                  ${order.date}
                </div>
              </div>
              
              <div>
                <div style="color: #9ca3af; font-size: 0.875rem; margin-bottom: 0.25rem;">
                  Total
                </div>
                <div style="font-weight: 700; color: #111827; font-size: 1.125rem;">
                  $${order.total.toFixed(2)}
                </div>
              </div>
              
              <div>
                <div style="color: #9ca3af; font-size: 0.875rem; margin-bottom: 0.25rem;">
                  Status
                </div>
                <span style="display: inline-block; padding: 0.375rem 0.875rem; background: ${statusColors[order.status]}20; color: ${statusColors[order.status]}; border-radius: 6px; font-weight: 600; font-size: 0.875rem;">
                  ${order.status}
                </span>
              </div>
            </div>
            
            ${order.tracking ? `
              <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <div style="color: #9ca3af; font-size: 0.875rem;">Tracking Number</div>
                  <div style="font-weight: 600; color: #374151; font-family: monospace;">
                    ${order.tracking}
                  </div>
                </div>
                <button style="background: ${styles.primary_color}; color: white; border: none; border-radius: 6px; padding: 0.5rem 1rem; font-weight: 600; cursor: pointer; font-size: 0.875rem;">
                  Track Order
                </button>
              </div>
            ` : ''}
            
            <!-- Action Buttons -->
            <div style="display: flex; gap: 1rem; padding-top: 1.5rem; border-top: 1px solid #e5e7eb;">
              <button style="flex: 1; padding: 0.875rem; background: ${styles.primary_color}; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                View Details
              </button>
              <button style="padding: 0.875rem 1.5rem; background: white; color: #374151; border: 1px solid #e5e7eb; border-radius: 8px; font-weight: 600; cursor: pointer;">
                Buy Again
              </button>
              ${order.status === 'Delivered' ? `
                <button style="padding: 0.875rem 1.5rem; background: white; color: #374151; border: 1px solid #e5e7eb; border-radius: 8px; font-weight: 600; cursor: pointer;">
                  Write Review
                </button>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};