import { PageData, ComponentRenderer } from './types';
import { createDesignSystem } from './design-system';

// EXISTING IMPORTS
import { renderHeader } from './components/header';
import { renderHero } from './components/hero';
import { renderFeatures } from './components/features';
import { renderFooter } from './components/footer';
import { renderBookingForm } from './components/booking-form';
import { renderServiceGrid } from './components/service-grid';
import { renderProductGrid } from './components/product-grid';
import { renderCategoryHeader } from './components/category-header';
import { renderFilters } from './components/filters';
import { renderSorting } from './components/sorting';

// NEW IMPORTS - Product Detail Components
import { renderProductImageGallery } from './components/product/product-image-gallery';
import { renderProductInfo } from './components/product/product-info';
import { renderProductVariants } from './components/product/product-variants';
import { renderAddToCartSection } from './components/product/add-to-cart-section';
import { renderProductTabs } from './components/product/product-tabs';
import { renderProductReviews } from './components/product/product-reviews';
import { renderRelatedProducts } from './components/product/related-products';

// NEW IMPORTS - Cart & Checkout Components
import { renderCartSummary } from './components/cart/cart-summary';
import { renderCartTotals } from './components/cart/cart-totals';
import { renderCheckoutForm } from './components/cart/checkout-form';
import { renderPaymentMethods } from './components/cart/payment-methods';

// NEW IMPORTS - Account Components
import { renderAccountSidebar } from './components/general/account-sidebar';
import { renderOrderHistory } from './components/general/order-history';
import { renderWishlistItems } from './components/general/wishlist-items';

// NEW IMPORTS - Additional Components
import { renderPromoBanner } from './components/general/promo-banner';
import { renderNewsletterSignup } from './components/general/newsletter-signup';
import { renderBreadcrumbs } from './components/general/breadcrumbs';

// COMPLETE COMPONENT REGISTRY
const componentMap: Record<string, ComponentRenderer> = {
  'header': renderHeader,
  'footer': renderFooter,
  'hero': renderHero,
  'features': renderFeatures,
  'featured-products': renderProductGrid,
  'categories': renderFeatures,
  'testimonials': renderFeatures,
  'service-grid': renderServiceGrid,
  'booking-form': renderBookingForm,
  'breadcrumbs': renderBreadcrumbs,
  'category-header': renderCategoryHeader,
  'filters': renderFilters,
  'sorting': renderSorting,
  'product-grid': renderProductGrid,
  'product-image-gallery': renderProductImageGallery,
  'product-info': renderProductInfo,
  'product-variants': renderProductVariants,
  'add-to-cart-section': renderAddToCartSection,
  'product-tabs': renderProductTabs,
  'product-reviews': renderProductReviews,
  'related-products': renderRelatedProducts,
  'product-hero': renderHero,
  'product-details': renderFeatures,
  'specifications': renderFeatures,
  'reviews': renderFeatures,
  'cart-summary': renderCartSummary,
  'cart-items': renderCartSummary,
  'cart-totals': renderCartTotals,
  'checkout-form': renderCheckoutForm,
  'payment-methods': renderPaymentMethods,
  'order-summary': renderCartTotals,
  'pricing-summary': renderFeatures,
  'checkout-cta': renderHero,
  'account-sidebar': renderAccountSidebar,
  'order-history': renderOrderHistory,
  'wishlist-items': renderWishlistItems,
  'account-settings': renderFeatures,
  'promo-banner': renderPromoBanner,
  'newsletter-signup': renderNewsletterSignup
};

// ============================================================================
// UNIFIED CSS GENERATION - Design System Based
// ============================================================================

const generateBaseCSS = (styles: any) => {
  const ds = createDesignSystem(styles);
  
  return `
    /* ============================================================================
       RESET & BASE STYLES
       ============================================================================ */
    
    *, *::before, *::after { 
      margin: 0; 
      padding: 0; 
      box-sizing: border-box;
    }
    
    html {
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }
    
    body { 
      font-family: ${styles.font_family || ds.typography.fontFamily.sans}; 
      line-height: ${ds.typography.lineHeight.normal};
      color: ${ds.colors.semantic.text.secondary};
      background-color: ${ds.colors.semantic.bg.primary};
      overflow-x: hidden;
    }
    
    /* ============================================================================
       TYPOGRAPHY
       ============================================================================ */
    
    h1, h2, h3, h4, h5, h6 {
      color: ${ds.colors.semantic.text.primary};
      font-weight: ${ds.typography.fontWeight.extrabold};
      line-height: ${ds.typography.lineHeight.tight};
      letter-spacing: ${ds.typography.letterSpacing.tight};
      margin-bottom: ${ds.spacing[4]};
    }
    
    h1 { font-size: ${ds.typography.fontSize.h1}; }
    h2 { font-size: ${ds.typography.fontSize.h2}; }
    h3 { font-size: ${ds.typography.fontSize.h3}; }
    h4 { font-size: ${ds.typography.fontSize.h4}; }
    h5 { font-size: ${ds.typography.fontSize.h5}; }
    h6 { font-size: ${ds.typography.fontSize.h6}; }
    
    p {
      margin-bottom: ${ds.spacing[4]};
      line-height: ${ds.typography.lineHeight.relaxed};
    }
    
    a { 
      color: ${ds.colors.primary[500]}; 
      text-decoration: none;
      ${ds.transitions.colors};
    }
    
    a:hover {
      color: ${ds.colors.secondary[500]};
    }
    
    /* ============================================================================
       INTERACTIVE ELEMENTS
       ============================================================================ */
    
    button {
      ${ds.transitions.all};
      cursor: pointer;
      font-family: inherit;
    }
    
    button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: ${ds.shadows.md};
    }
    
    button:active:not(:disabled) {
      transform: translateY(0);
    }
    
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    input, textarea, select {
      font-family: inherit;
      font-size: ${ds.typography.fontSize.base};
      line-height: ${ds.typography.lineHeight.normal};
      color: ${ds.colors.semantic.text.primary};
      background: ${ds.colors.semantic.bg.primary};
      border: 1px solid ${ds.colors.semantic.border.primary};
      border-radius: ${ds.borderRadius.input};
      padding: ${ds.spacing[3]} ${ds.spacing[4]};
      ${ds.transitions.all};
      outline: none;
    }
    
    input:focus, textarea:focus, select:focus {
      border-color: ${ds.colors.semantic.border.focus};
      box-shadow: 0 0 0 3px ${ds.colors.primary[100]};
    }
    
    /* ============================================================================
       UTILITY CLASSES
       ============================================================================ */
    
    .container {
      ${ds.containers.base}
    }
    
    .container-narrow {
      ${ds.containers.narrow}
    }
    
    .container-wide {
      ${ds.containers.wide}
    }
    
    /* ============================================================================
       LAYOUT SYSTEMS
       ============================================================================ */
    
    .grid-layout {
      display: grid;
      ${ds.grid.sidebar};
      ${ds.grid.gap.lg};
      align-items: start;
    }
    
    .cart-layout {
      display: grid;
      ${ds.grid.twoThirds};
      ${ds.grid.gap.lg};
      align-items: start;
    }
    
    .product-layout {
      display: grid;
      ${ds.grid.cols[2]};
      gap: ${ds.spacing[12]};
      align-items: start;
    }
    
    /* Filter sidebar */
    .filters-sidebar {
      position: sticky;
      top: ${ds.spacing[8]};
      background: ${ds.colors.semantic.bg.secondary};
      border-radius: ${ds.borderRadius['2xl']};
      padding: ${ds.spacing[6]};
      border: 1px solid ${ds.colors.semantic.border.primary};
      box-shadow: ${ds.shadows.sm};
    }
    
    /* Product grid main area */
    .products-main {
      min-height: 600px;
    }
    
    /* ============================================================================
       ANIMATIONS
       ============================================================================ */
    
    ${ds.animations.keyframes}
    
    .fade-in {
      ${ds.animations.fadeIn};
    }
    
    .slide-up {
      ${ds.animations.slideUp};
    }
    
    /* ============================================================================
       RESPONSIVE DESIGN
       ============================================================================ */
    
    @media (max-width: ${ds.breakpoints.lg}) {
      .grid-layout {
        ${ds.grid.cols[1]};
        ${ds.grid.gap.md};
      }
      
      .filters-sidebar {
        position: static;
      }
    }
    
    @media (max-width: ${ds.breakpoints.md}) {
      .cart-layout,
      .product-layout {
        ${ds.grid.cols[1]};
        ${ds.grid.gap.md};
      }
      
      .container,
      .container-narrow,
      .container-wide {
        padding: ${ds.containerPadding.mobile};
      }
      
      h1 { font-size: ${ds.typography.fontSize['4xl']}; }
      h2 { font-size: ${ds.typography.fontSize['3xl']}; }
      h3 { font-size: ${ds.typography.fontSize['2xl']}; }
    }
    
    /* ============================================================================
       ACCESSIBILITY
       ============================================================================ */
    
    *:focus-visible {
      outline: 2px solid ${ds.colors.semantic.border.focus};
      outline-offset: 2px;
    }
    
    /* Reduce motion for users who prefer it */
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
    
    /* ============================================================================
       PRINT STYLES
       ============================================================================ */
    
    @media print {
      body {
        color: #000;
        background: #fff;
      }
      
      a {
        text-decoration: underline;
      }
      
      .no-print {
        display: none !important;
      }
    }
  `;
};

// ============================================================================
// LAYOUT DETECTION
// ============================================================================

const getPageLayout = (sections: any[]): string => {
  const hasFilters = sections.some(s => s.type === 'filters');
  const hasProductGrid = sections.some(s => s.type === 'product-grid');
  const hasProductGallery = sections.some(s => s.type === 'product-image-gallery');
  const hasCartSummary = sections.some(s => s.type === 'cart-summary' || s.type === 'cart-items');
  const hasAccountSidebar = sections.some(s => s.type === 'account-sidebar');
  const hasCheckoutForm = sections.some(s => s.type === 'checkout-form');
  
  if (hasProductGallery) return 'product-detail';
  if (hasCartSummary) return 'cart-page';
  if (hasCheckoutForm) return 'checkout-page';
  if (hasAccountSidebar) return 'account-dashboard';
  if (hasFilters && hasProductGrid) return 'category-page';
  
  return 'standard';
};

// ============================================================================
// LAYOUT RENDERERS
// ============================================================================

const renderStandardLayout = (sections: any[], styles: any) => {
  const renderSection = (section: any) => {
    const renderer = componentMap[section.type];
    if (!renderer) {
      console.warn(`⚠️  No renderer found for section type: ${section.type}`);
      return '';
    }
    return renderer(section, styles);
  };

  return `<main>${sections.map(renderSection).join('')}</main>`;
};

const renderCategoryPageLayout = (sections: any[], styles: any) => {
  const breadcrumbs = sections.find(s => s.type === 'breadcrumbs');
  const categoryHeader = sections.find(s => s.type === 'category-header');
  const filters = sections.find(s => s.type === 'filters');
  const sorting = sections.find(s => s.type === 'sorting');
  const productGrid = sections.find(s => s.type === 'product-grid');
  
  const otherSections = sections.filter(s => 
    !['breadcrumbs', 'category-header', 'filters', 'sorting', 'product-grid'].includes(s.type)
  );

  return `
    ${breadcrumbs ? componentMap['breadcrumbs'](breadcrumbs, styles) : ''}
    ${categoryHeader ? componentMap['category-header'](categoryHeader, styles) : ''}
    ${sorting ? componentMap['sorting'](sorting, styles) : ''}
    
    <div class="grid-layout fade-in">
      <aside class="filters-sidebar">
        ${filters ? componentMap['filters'](filters, styles) : ''}
      </aside>
      
      <main class="products-main">
        ${productGrid ? componentMap['product-grid'](productGrid, styles) : ''}
        ${otherSections.map(s => {
          const renderer = componentMap[s.type];
          return renderer ? renderer(s, styles) : '';
        }).join('')}
      </main>
    </div>
  `;
};

const renderProductDetailLayout = (sections: any[], styles: any) => {
  const breadcrumbs = sections.find(s => s.type === 'breadcrumbs');
  const gallery = sections.find(s => s.type === 'product-image-gallery');
  const info = sections.find(s => s.type === 'product-info');
  const variants = sections.find(s => s.type === 'product-variants');
  const addToCart = sections.find(s => s.type === 'add-to-cart-section');
  
  const bottomSections = sections.filter(s => 
    !['breadcrumbs', 'product-image-gallery', 'product-info', 
      'product-variants', 'add-to-cart-section'].includes(s.type)
  );

  return `
    ${breadcrumbs ? componentMap['breadcrumbs'](breadcrumbs, styles) : ''}
    
    <div class="product-layout fade-in" style="padding: 2rem 0;">
      <div>
        ${gallery ? componentMap['product-image-gallery'](gallery, styles) : ''}
      </div>
      
      <div>
        ${info ? componentMap['product-info'](info, styles) : ''}
        ${variants ? componentMap['product-variants'](variants, styles) : ''}
        ${addToCart ? componentMap['add-to-cart-section'](addToCart, styles) : ''}
      </div>
    </div>
    
    <div>
      ${bottomSections.map(s => {
        const renderer = componentMap[s.type];
        return renderer ? renderer(s, styles) : '';
      }).join('')}
    </div>
  `;
};

const renderCartPageLayout = (sections: any[], styles: any) => {
  const cartSummary = sections.find(s => s.type === 'cart-summary' || s.type === 'cart-items');
  const cartTotals = sections.find(s => s.type === 'cart-totals');
  const otherSections = sections.filter(s => 
    !['cart-summary', 'cart-items', 'cart-totals'].includes(s.type)
  );

  return `
    <div class="cart-layout fade-in" style="padding: 2rem 0;">
      <div>
        ${cartSummary ? componentMap[cartSummary.type](cartSummary, styles) : ''}
        ${otherSections.map(s => {
          const renderer = componentMap[s.type];
          return renderer ? renderer(s, styles) : '';
        }).join('')}
      </div>
      
      <aside>
        ${cartTotals ? componentMap['cart-totals'](cartTotals, styles) : ''}
      </aside>
    </div>
  `;
};

const renderCheckoutPageLayout = (sections: any[], styles: any) => {
  const checkoutForm = sections.find(s => s.type === 'checkout-form');
  const paymentMethods = sections.find(s => s.type === 'payment-methods');
  const orderSummary = sections.find(s => s.type === 'order-summary');
  const otherSections = sections.filter(s => 
    !['checkout-form', 'payment-methods', 'order-summary'].includes(s.type)
  );

  return `
    <div class="cart-layout fade-in" style="padding: 2rem 0;">
      <div>
        ${checkoutForm ? componentMap['checkout-form'](checkoutForm, styles) : ''}
        ${paymentMethods ? componentMap['payment-methods'](paymentMethods, styles) : ''}
        ${otherSections.map(s => {
          const renderer = componentMap[s.type];
          return renderer ? renderer(s, styles) : '';
        }).join('')}
      </div>
      
      <aside>
        ${orderSummary ? componentMap['order-summary'](orderSummary, styles) : ''}
      </aside>
    </div>
  `;
};

const renderAccountDashboardLayout = (sections: any[], styles: any) => {
  const sidebar = sections.find(s => s.type === 'account-sidebar');
  const mainContent = sections.filter(s => s.type !== 'account-sidebar');

  return `
    <div class="grid-layout fade-in" style="padding: 2rem 0;">
      <aside>
        ${sidebar ? componentMap['account-sidebar'](sidebar, styles) : ''}
      </aside>
      
      <main>
        ${mainContent.map(s => {
          const renderer = componentMap[s.type];
          return renderer ? renderer(s, styles) : '';
        }).join('')}
      </main>
    </div>
  `;
};

// ============================================================================
// MAIN ASSEMBLY FUNCTION
// ============================================================================

export function assemblePage(data: PageData): string {
  const {
    page_title = "Website",
    header = {},
    sections = [],
    footer = {},
    styles = {}
  } = data;

  console.log(`🎨 Assembling page: ${page_title}`);
  console.log(`📦 Sections to render: ${sections.map(s => s.type).join(', ')}`);
  console.log('Received styles:', styles);

  // Set default styles if not provided
  const defaultStyles = {
    primary_color: styles.primary_color || '#3b82f6',
    secondary_color: styles.secondary_color || '#8b5cf6',
    font_family: styles.font_family || 'Inter, sans-serif',
    dark_mode: styles.dark_mode || false
  };
  const css = generateBaseCSS(defaultStyles);
  const layoutType = getPageLayout(sections);
  
  console.log(`📐 Layout type detected: ${layoutType}`);

  let mainContent = '';
  
  switch (layoutType) {
    case 'category-page':
      console.log('   → Rendering category page layout');
      mainContent = renderCategoryPageLayout(sections, defaultStyles);
      break;
      
    case 'product-detail':
      console.log('   → Rendering product detail layout');
      mainContent = renderProductDetailLayout(sections, defaultStyles);
      break;
      
    case 'cart-page':
      console.log('   → Rendering cart page layout');
      mainContent = renderCartPageLayout(sections, defaultStyles);
      break;
      
    case 'checkout-page':
      console.log('   → Rendering checkout page layout');
      mainContent = renderCheckoutPageLayout(sections, defaultStyles);
      break;
      
    case 'account-dashboard':
      console.log('   → Rendering account dashboard layout');
      mainContent = renderAccountDashboardLayout(sections, defaultStyles);
      break;
      
    default:
      console.log('   → Rendering standard layout');
      mainContent = renderStandardLayout(sections, defaultStyles);
  }

  console.log('✅ Page assembly complete');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${page_title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>${css}</style>
    <script>
      // Enhanced JavaScript for interactive features
      
      function applyFilters() {
        const selectedFilters = {};
        const filterInputs = document.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked');
        
        filterInputs.forEach(input => {
          const filterName = input.name;
          if (!selectedFilters[filterName]) {
            selectedFilters[filterName] = [];
          }
          selectedFilters[filterName].push(input.value);
        });
        
        console.log('Applied filters:', selectedFilters);
        alert('Filters applied! Showing filtered results.');
      }
      
      function clearFilters() {
        const inputs = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');
        inputs.forEach(input => input.checked = false);
        console.log('Filters cleared');
      }
      
      function updateSorting() {
        const sortSelect = document.querySelector('select');
        if (sortSelect) {
          const sortValue = sortSelect.value;
          console.log('Sorting by:', sortValue);
          alert('Sorted by: ' + sortValue);
        }
      }
      
      function toggleFilterSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.style.display = section.style.display === 'none' ? 'block' : 'none';
        }
      }
      
      function updateCartQuantity(index, change) {
        const quantityEl = document.getElementById('quantity-' + index);
        if (quantityEl) {
          const newQuantity = parseInt(quantityEl.textContent) + change;
          if (newQuantity >= 1) {
            quantityEl.textContent = newQuantity;
          }
        }
      }
      
      function removeFromCart(index) {
        if (confirm('Remove this item from cart?')) {
          alert('Item removed from cart');
        }
      }
      
      function changeMainImage(imageUrl) {
        const mainImg = document.getElementById('mainProductImage');
        if (mainImg) {
          mainImg.src = imageUrl;
        }
      }
      
      function selectVariant(variantName, option) {
        const selectedEl = document.getElementById(variantName.toLowerCase() + '-selected');
        if (selectedEl) {
          selectedEl.textContent = option;
        }
      }
      
      function updateQuantity(change) {
        const input = document.getElementById('quantity');
        if (input) {
          const newValue = parseInt(input.value) + change;
          if (newValue >= 1) {
            input.value = newValue;
          }
        }
      }
      
      function addToCart() {
        const quantity = document.getElementById('quantity')?.value || 1;
        alert('Added ' + quantity + ' item(s) to cart!');
      }
      
      function addToWishlist() {
        alert('Added to wishlist!');
      }
      
      function removeFromWishlist(index) {
        if (confirm('Remove this item from wishlist?')) {
          alert('Item removed from wishlist');
        }
      }
      
      document.addEventListener('DOMContentLoaded', function() {
        const sortSelect = document.querySelector('select');
        if (sortSelect) {
          sortSelect.addEventListener('change', updateSorting);
        }
        
        const mobileFilterBtn = document.getElementById('mobile-filter-toggle');
        const filtersSidebar = document.querySelector('.filters-sidebar');
        
        if (mobileFilterBtn && filtersSidebar) {
          mobileFilterBtn.addEventListener('click', function() {
            filtersSidebar.style.display = filtersSidebar.style.display === 'none' ? 'block' : 'none';
          });
        }
        
        console.log('Page initialized successfully');
      });
    </script>
</head>
<body>
    ${componentMap.header(header, defaultStyles)}
    
    <div class="container">
      ${mainContent}
    </div>
    
    ${componentMap.footer(footer, defaultStyles)}
</body>
</html>`;
}