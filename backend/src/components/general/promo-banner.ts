// 15. PROMO BANNER
export const renderPromoBanner = (section: any, styles: any) => {
  const { 
    text = "🎉 Limited Time Offer: Get 20% OFF on all products! Use code: SAVE20",
    cta_text = "Shop Now",
    cta_link = "#products",
    dismissible = true
  } = section;
  
  return `
    <div id="promo-banner" style="background: linear-gradient(135deg, ${styles.primary_color}, ${styles.secondary_color || styles.primary_color}); color: white; padding: 1rem 2rem; text-align: center; position: relative;">
      <div style="display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap;">
        <span style="font-weight: 600; font-size: 1rem;">
          ${text}
        </span>
        ${cta_text ? `
          <a href="${cta_link}" style="background: white; color: ${styles.primary_color}; padding: 0.5rem 1.5rem; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.875rem;">
            ${cta_text} →
          </a>
        ` : ''}
      </div>
      
      ${dismissible ? `
        <button onclick="document.getElementById('promo-banner').style.display='none'" 
                style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.2); border: none; color: white; border-radius: 50%; width: 28px; height: 28px; cursor: pointer; font-size: 1.25rem; line-height: 1;">
          ✕
        </button>
      ` : ''}
    </div>
  `;
};