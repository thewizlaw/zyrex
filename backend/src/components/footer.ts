import { ComponentRenderer } from "../types";

// 📄 MODERN FOOTER - Multi-column with newsletter
export const renderFooter: ComponentRenderer = (data, styles) => {
  // Extract footer data - it might be passed directly or nested
  const footer = data.footer || data;
  
  const { 
    sections = [],
    social = [],
    copyright = `© ${new Date().getFullYear()} All rights reserved.`,
    payment_methods = [],
    brand_name,
    description,
    logo
  } = footer;
  
  // Get brand name from various possible sources
  const brandName = brand_name || logo || data.logo || "StyleHub";
  
  // Get description text
  const descriptionText = description || 
    'Your premier destination for quality products and exceptional service.';
  
  // Default sections if none provided
  const footerSections = sections.length === 0 ? [
    {
      title: "Shop",
      links: [
        { text: "All Products", href: "/products" },
        { text: "Categories", href: "/categories" },
        { text: "New Arrivals", href: "/new" },
        { text: "Sale", href: "/sale" }
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Contact Us", href: "/contact" },
        { text: "FAQ", href: "/faq" },
        { text: "Shipping", href: "/shipping" },
        { text: "Returns", href: "/returns" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Careers", href: "/careers" },
        { text: "Blog", href: "/blog" }
      ]
    }
  ] : sections;
  
  // Payment method icons mapping
  const paymentIcons: Record<string, string> = {
    'visa': '💳',
    'mastercard': '💳',
    'amex': '💳',
    'paypal': '💰',
    'apple-pay': '🍎',
    'google-pay': '📱',
    'stripe': '💳',
    'venmo': '💵',
    'discover': '💳'
  };
  
  // Get payment icons
  const paymentIconsToShow = payment_methods.length > 0
    ? payment_methods.map((method: string) => paymentIcons[method.toLowerCase()] || '💳')
    : ['💳', '💰', '🏦', '📱'];
  
  return `
    <footer style="
      background: linear-gradient(180deg, ${styles.dark_mode ? '#1f2937' : '#f9fafb'} 0%, ${styles.dark_mode ? '#111827' : '#f3f4f6'} 100%); 
      padding: 4rem 0 2rem; 
      margin-top: 6rem;
      border-top: 1px solid ${styles.dark_mode ? '#374151' : '#e5e7eb'};
    ">
      <div style="max-width: 1400px; margin: 0 auto; padding: 0 2rem;">
        <!-- Main Footer Content -->
        <div style="
          display: grid; 
          grid-template-columns: 2fr 1fr 1fr 1fr; 
          gap: 3rem; 
          margin-bottom: 3rem;
        " class="footer-grid">
          <!-- Brand Section -->
          <div>
            <h3 style="
              font-size: 1.75rem; 
              font-weight: 800; 
              background: linear-gradient(135deg, ${styles.primary_color}, ${styles.secondary_color || '#8b5cf6'});
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              margin-bottom: 1rem;
              letter-spacing: -0.02em;
            ">
              ${brandName}
            </h3>
            <p style="
              color: ${styles.dark_mode ? '#9ca3af' : '#6b7280'}; 
              line-height: 1.7; 
              margin-bottom: 1.5rem;
              font-size: 0.95rem;
            ">
              ${descriptionText}
            </p>
            
            <!-- Social Links -->
            ${social.length > 0 ? `
              <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                ${social.map((s: any) => `
                  <a href="${s.url || '#'}" 
                     title="${s.platform || 'Social Link'}"
                     style="
                    background: ${styles.dark_mode ? '#374151' : 'white'};
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${styles.primary_color};
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(0,0,0,${styles.dark_mode ? '0.2' : '0.05'});
                    font-size: 1.25rem;
                  " onmouseover="
                    this.style.background='${styles.primary_color}';
                    this.style.color='white';
                    this.style.transform='translateY(-3px) scale(1.05)';
                    this.style.boxShadow='0 6px 20px ${styles.primary_color}30';
                  " onmouseout="
                    this.style.background='${styles.dark_mode ? '#374151' : 'white'}';
                    this.style.color='${styles.primary_color}';
                    this.style.transform='translateY(0) scale(1)';
                    this.style.boxShadow='0 2px 8px rgba(0,0,0,${styles.dark_mode ? '0.2' : '0.05'})';
                  ">
                    ${s.icon || '🔗'}
                  </a>
                `).join('')}
              </div>
            ` : ''}
          </div>
          
          <!-- Footer Sections -->
          ${footerSections.map((section: any) => `
            <div>
              <h4 style="
                font-size: 0.95rem; 
                font-weight: 700; 
                color: ${styles.dark_mode ? '#f3f4f6' : '#111827'}; 
                margin-bottom: 1.25rem;
                text-transform: uppercase;
                letter-spacing: 0.05em;
              ">
                ${section.title}
              </h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                ${(section.links || []).map((link: any) => `
                  <li style="margin-bottom: 0.75rem;">
                    <a href="${link.href || '#'}" style="
                      color: ${styles.dark_mode ? '#9ca3af' : '#6b7280'}; 
                      text-decoration: none; 
                      font-size: 0.95rem;
                      transition: all 0.2s ease;
                      display: inline-block;
                    " onmouseover="
                      this.style.color='${styles.primary_color}';
                      this.style.transform='translateX(4px)';
                    " onmouseout="
                      this.style.color='${styles.dark_mode ? '#9ca3af' : '#6b7280'}';
                      this.style.transform='translateX(0)';
                    ">
                      ${link.text}
                    </a>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
        
        <!-- Bottom Bar -->
        <div style="
          padding-top: 2rem; 
          border-top: 1px solid ${styles.dark_mode ? '#374151' : '#e5e7eb'};
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        ">
          <p style="
            color: ${styles.dark_mode ? '#9ca3af' : '#6b7280'}; 
            font-size: 0.875rem;
            margin: 0;
          ">
            ${copyright}
          </p>
          
          <!-- Payment Methods -->
          <div style="display: flex; gap: 0.75rem; align-items: center;">
            <span style="color: #9ca3af; font-size: 0.875rem;">We accept:</span>
            ${paymentIconsToShow.map((icon: string) => `
              <div style="
                background: ${styles.dark_mode ? '#374151' : 'white'};
                padding: 0.5rem 0.75rem;
                border-radius: 6px;
                font-size: 1.25rem;
                box-shadow: 0 1px 3px rgba(0,0,0,${styles.dark_mode ? '0.3' : '0.05'});
              ">
                ${icon}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      
      <style>
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      </style>
    </footer>
  `;
};