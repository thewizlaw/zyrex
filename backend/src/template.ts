export interface PageData {
  page_title?: string;
  header?: Header;
  sections?: Section[];
  footer?: Footer;
  styles?: PageStyles;
}

export interface Header {
  logo?: string;
  menu?: MenuItem[];
  cta?: CTA;
}

export interface MenuItem {
  text: string;
  href?: string;
}

export interface CTA {
  text: string;
  href?: string;
  style?: string;
}

export interface Section {
  type: 'hero' | 'features' | 'content' | 'cta' | 'grid' | 'contact';
  title?: string;
  subtitle?: string;
  text?: string;
  content?: any;
  background?: string;
  columns?: number;
  items?: SectionItem[];
}

export interface SectionItem {
  title?: string;
  text?: string;
  icon?: string;
  image?: string;
}

export interface Footer {
  text?: string;
  links?: MenuItem[];
  social?: SocialLink[];
  copyright?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface PageStyles {
  primary_color?: string;
  secondary_color?: string;
  font_family?: string;
  dark_mode?: boolean;
}

export function assemblePage(data: PageData): string {
  const {
    page_title = "Modern Website",
    header = {},
    sections = [],
    footer = {},
    styles = {}
  } = data;

  const {
    primary_color = "#3b82f6",
    secondary_color = "#1e293b",
    font_family = "'Inter', 'Segoe UI', system-ui, sans-serif",
    dark_mode = false
  } = styles;

  const theme = dark_mode ? 'dark' : 'light';
  const backgroundColor = dark_mode ? '#0f172a' : '#ffffff';
  const textColor = dark_mode ? '#f8fafc' : '#1e293b';
  const mutedColor = dark_mode ? '#94a3b8' : '#64748b';

  const css = generateCSS(primary_color, secondary_color, font_family, theme);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${page_title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>${css}</style>
</head>
<body data-theme="${theme}" style="background-color: ${backgroundColor}; color: ${textColor};">
    ${generateHeader(header, primary_color, theme)}
    <main>
        ${sections.map(section => generateSection(section, primary_color, theme)).join('')}
    </main>
    ${generateFooter(footer, theme)}
    <script>
        // Mobile menu toggle
        function toggleMenu() {
            const nav = document.querySelector('.nav-links');
            nav.classList.toggle('active');
        }

        // Smooth scrolling for anchor links
        document.addEventListener('DOMContentLoaded', function() {
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        });
    </script>
</body>
</html>`;
}

function generateCSS(primary: string, secondary: string, font: string, theme: string): string {
  const isDark = theme === 'dark';
  const bgColor = isDark ? '#0f172a' : '#ffffff';
  const textColor = isDark ? '#f8fafc' : '#1e293b';
  const mutedColor = isDark ? '#94a3b8' : '#64748b';
  const borderColor = isDark ? '#334155' : '#e2e8f0';

  return `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: ${font};
    line-height: 1.6;
    color: ${textColor};
    background-color: ${bgColor};
    transition: all 0.3s ease;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header Styles */
.header {
    background: ${bgColor};
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${primary};
    text-decoration: none;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
}

.nav-links a {
    text-decoration: none;
    color: ${textColor};
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-links a:hover {
    color: ${primary};
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${primary};
    transition: width 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
}

.cta-button {
    background: ${primary};
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 2px solid ${primary};
}

.cta-button:hover {
    background: transparent;
    color: ${primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: ${textColor};
    font-size: 1.5rem;
    cursor: pointer;
}

/* Section Styles */
.section {
    padding: 5rem 0;
}

.section-hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    text-align: center;
    background: linear-gradient(135deg, ${primary}20, ${secondary}20);
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, ${primary}, ${secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: ${mutedColor};
    margin-bottom: 2rem;
}

.section-features {
    background: ${bgColor};
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.feature-card {
    background: ${isDark ? '#1e293b' : '#f8fafc'};
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid ${borderColor};
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${primary};
}

.feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${textColor};
}

.feature-text {
    color: ${mutedColor};
}

.section-cta {
    background: linear-gradient(135deg, ${primary}, ${secondary});
    color: white;
    text-align: center;
    border-radius: 20px;
    margin: 2rem auto;
    max-width: 1200px;
}

.cta-content {
    padding: 4rem 2rem;
}

.cta-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.cta-button-secondary {
    background: white;
    color: ${primary};
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    margin-top: 2rem;
    transition: all 0.3s ease;
}

.cta-button-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255,255,255,0.3);
}

/* Grid Section */
.grid-section {
    display: grid;
    gap: 2rem;
}

.grid-2 { grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); }
.grid-3 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
.grid-4 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }

/* Footer Styles */
.footer {
    background: ${isDark ? '#1e293b' : '#f8fafc'};
    padding: 3rem 0 2rem;
    border-top: 1px solid ${borderColor};
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-links a {
    color: ${mutedColor};
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: ${primary};
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-link {
    color: ${mutedColor};
    text-decoration: none;
    transition: color 0.3s ease;
}

.social-link:hover {
    color: ${primary};
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid ${borderColor};
    color: ${mutedColor};
}

/* Responsive Design */
@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }
    
    .nav-links {
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        background: ${bgColor};
        flex-direction: column;
        padding: 2rem;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    
    .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .section {
        padding: 3rem 0;
    }
}`;
}

function generateHeader(header: Header, primaryColor: string, theme: string): string {
  const { logo = "Brand", menu = [], cta } = header;

  return `
<header class="header">
    <div class="container">
        <nav class="navbar">
            <a href="#" class="logo">${logo}</a>
            <button class="menu-toggle" onclick="toggleMenu()">☰</button>
            <ul class="nav-links">
                ${menu.map((item: MenuItem) => `
                    <li><a href="${item.href || '#'}">${item.text}</a></li>
                `).join('')}
                ${cta ? `
                    <li><a href="${cta.href || '#'}" class="cta-button">${cta.text}</a></li>
                ` : ''}
            </ul>
        </nav>
    </div>
</header>`;
}

function generateSection(section: Section, primaryColor: string, theme: string): string {
  const { type, title, subtitle, text, items = [], columns = 3, background } = section;

  switch (type) {
    case 'hero':
      return `
<section class="section section-hero" style="${background ? `background: ${background}` : ''}">
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">${title || 'Welcome'}</h1>
            <p class="hero-subtitle">${subtitle || 'Discover amazing things'}</p>
            ${text ? `<p style="font-size: 1.1rem; margin-bottom: 2rem;">${text}</p>` : ''}
            <a href="#features" class="cta-button">Get Started</a>
        </div>
    </div>
</section>`;

    case 'features':
      return `
<section class="section section-features" id="features" style="${background ? `background: ${background}` : ''}">
    <div class="container">
        ${title ? `<h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 1rem;">${title}</h2>` : ''}
        ${subtitle ? `<p style="text-align: center; font-size: 1.1rem; color: ${theme === 'dark' ? '#94a3b8' : '#64748b'}; max-width: 600px; margin: 0 auto 3rem;">${subtitle}</p>` : ''}
        <div class="features-grid">
            ${items.map((item: SectionItem) => `
                <div class="feature-card">
                    ${item.icon ? `<div class="feature-icon">${item.icon}</div>` : ''}
                    ${item.title ? `<h3 class="feature-title">${item.title}</h3>` : ''}
                    ${item.text ? `<p class="feature-text">${item.text}</p>` : ''}
                </div>
            `).join('')}
        </div>
    </div>
</section>`;

    case 'cta':
      return `
<section class="section">
    <div class="container">
        <div class="section-cta" style="${background ? `background: ${background}` : ''}">
            <div class="cta-content">
                ${title ? `<h2 class="cta-title">${title}</h2>` : ''}
                ${text ? `<p style="font-size: 1.1rem; opacity: 0.9;">${text}</p>` : ''}
                <a href="#" class="cta-button-secondary">Learn More</a>
            </div>
        </div>
    </div>
</section>`;

    case 'grid':
      return `
<section class="section" style="${background ? `background: ${background}` : ''}">
    <div class="container">
        ${title ? `<h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem;">${title}</h2>` : ''}
        <div class="grid-section grid-${columns}">
            ${items.map((item: SectionItem) => `
                <div class="feature-card">
                    ${item.image ? `<img src="${item.image}" alt="${item.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">` : ''}
                    ${item.title ? `<h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">${item.title}</h3>` : ''}
                    ${item.text ? `<p style="color: ${theme === 'dark' ? '#94a3b8' : '#64748b'};">${item.text}</p>` : ''}
                </div>
            `).join('')}
        </div>
    </div>
</section>`;

    default:
      return `
<section class="section" style="${background ? `background: ${background}` : ''}">
    <div class="container">
        ${title ? `<h2 style="font-size: 2.5rem; margin-bottom: 1rem;">${title}</h2>` : ''}
        ${subtitle ? `<p style="font-size: 1.25rem; color: ${theme === 'dark' ? '#94a3b8' : '#64748b'}; margin-bottom: 2rem;">${subtitle}</p>` : ''}
        ${text ? `<p style="font-size: 1.1rem; line-height: 1.8;">${text}</p>` : ''}
    </div>
</section>`;
  }
}

function generateFooter(footer: Footer, theme: string): string {
  const { text, links = [], social = [], copyright = `© ${new Date().getFullYear()} All rights reserved.` } = footer;

  return `
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div>
                ${text ? `<p style="font-size: 1.1rem; margin-bottom: 1rem;">${text}</p>` : ''}
                ${social.length > 0 ? `
                    <div class="social-links">
                        ${social.map((link: SocialLink) => `
                            <a href="${link.url}" class="social-link" target="_blank" rel="noopener">
                                ${link.icon || link.platform}
                            </a>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            ${links.length > 0 ? `
                <div class="footer-links">
                    <h4 style="margin-bottom: 1rem;">Quick Links</h4>
                    ${links.map((link: MenuItem) => `
                        <a href="${link.href || '#'}">${link.text}</a>
                    `).join('')}
                </div>
            ` : ''}
        </div>
        <div class="footer-bottom">
            <p>${copyright}</p>
        </div>
    </div>
</footer>`;
}


const SYSTEM_PROMPT = `You are an ADVANCED E-COMMERCE website structure generator. Return ONLY VALID JSON following these schemas.

🎯 CRITICAL RULES:
1. Return ONLY valid JSON - NO explanations, NO markdown, NO code blocks
2. NEVER generate HTML/CSS - only data structures
3. Use EXACT component type names from the registry
4. Generate REALISTIC product data with actual prices, names, descriptions
5. Include complete data for ALL required fields

📦 AVAILABLE COMPONENT TYPES:

CORE LAYOUT:
- "header" - Site navigation, logo, cart/wishlist icons
- "footer" - Footer links, social media, copyright

HOMEPAGE SECTIONS:
- "hero" - Main banner with headline, subtitle, CTAs
- "features" - Feature/service/category grid (3-4 items)
- "featured-products" - Product showcase grid
- "categories" - Category display
- "promo-banner" - Sale/discount announcement banners
- "newsletter-signup" - Email subscription section

CATEGORY/LISTING PAGES:
- "breadcrumbs" - Navigation breadcrumb trail
- "category-header" - Category title, product count, description
- "filters" - Sidebar filter options (price, size, color, brand)
- "sorting" - Sort dropdown (price, popularity, newest)
- "product-grid" - Product card grid with images, prices, ratings

PRODUCT DETAIL PAGES:
- "product-image-gallery" - Main image + thumbnails
- "product-info" - Price, SKU, rating, availability, brand
- "product-variants" - Size/color/variant selectors
- "add-to-cart-section" - Quantity selector, add to cart/wishlist
- "product-tabs" - Description, specifications, shipping info
- "product-reviews" - Customer reviews and ratings
- "related-products" - "You May Also Like" section

CART & CHECKOUT:
- "cart-summary" - Shopping cart items list
- "cart-totals" - Subtotal, shipping, tax, total calculation
- "checkout-form" - Shipping/billing address forms
- "payment-methods" - Payment option selector
- "order-summary" - Final order review

USER ACCOUNT:
- "account-sidebar" - Dashboard navigation menu
- "order-history" - Past orders list with status
- "wishlist-items" - Saved products grid
- "account-settings" - Profile and password settings

📋 SCHEMA TEMPLATES BY PAGE TYPE:

=== HOMEPAGE SCHEMA ===
{
  "page_title": "Store Name - Shop Premium Products",
  "page_type": "homepage",
  "header": {
    "logo": "StoreName",
    "menu": [
      {"text": "Shop", "href": "/shop"},
      {"text": "Categories", "href": "/categories"},
      {"text": "About", "href": "/about"},
      {"text": "Contact", "href": "/contact"}
    ]
  },
  "sections": [
    {
      "type": "promo-banner",
      "text": "🎉 Summer Sale: 30% OFF Everything! Code: SUMMER30",
      "cta_text": "Shop Now",
      "cta_link": "#products",
      "dismissible": true
    },
    {
      "type": "hero",
      "title": "Discover Amazing Products",
      "subtitle": "Shop the latest trends with unbeatable prices",
      "text": "Free shipping on orders over $50"
    },
    {
      "type": "categories",
      "title": "Shop by Category",
      "items": [
        {"title": "Electronics", "description": "Latest gadgets & tech", "icon": "📱"},
        {"title": "Fashion", "description": "Trending styles", "icon": "👕"},
        {"title": "Home & Living", "description": "Decor & furniture", "icon": "🏠"},
        {"title": "Beauty", "description": "Skincare & cosmetics", "icon": "💄"}
      ]
    },
    {
      "type": "featured-products",
      "title": "Featured Products",
      "items": [
        {
          "name": "Premium Wireless Headphones",
          "price": "129.99",
          "original_price": "199.99",
          "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
          "rating": 4.8,
          "review_count": 234,
          "category": "Electronics",
          "in_stock": true,
          "tags": ["Best Seller", "Sale"]
        }
      ]
    },
    {
      "type": "newsletter-signup",
      "title": "Join Our Newsletter",
      "subtitle": "Get exclusive deals and updates delivered to your inbox",
      "placeholder": "Enter your email address"
    }
  ],
  "footer": {
    "sections": [
      {
        "title": "Customer Service",
        "links": [
          {"text": "Contact Us", "href": "/contact"},
          {"text": "Shipping Info", "href": "/shipping"},
          {"text": "Returns", "href": "/returns"},
          {"text": "FAQ", "href": "/faq"}
        ]
      },
      {
        "title": "Company",
        "links": [
          {"text": "About Us", "href": "/about"},
          {"text": "Careers", "href": "/careers"},
          {"text": "Blog", "href": "/blog"}
        ]
      }
    ],
    "social": [
      {"platform": "Facebook", "url": "#", "icon": "📘"},
      {"platform": "Instagram", "url": "#", "icon": "📷"},
      {"platform": "Twitter", "url": "#", "icon": "🐦"}
    ],
    "copyright": "© 2024 StoreName. All rights reserved."
  },
  "styles": {
    "primary_color": "#3b82f6",
    "secondary_color": "#8b5cf6",
    "font_family": "Inter, sans-serif",
    "dark_mode": false
  }
}

=== CATEGORY PAGE SCHEMA ===
{
  "page_title": "Category Name - All Products",
  "page_type": "category",
  "header": { /* same as homepage */ },
  "sections": [
    {
      "type": "breadcrumbs",
      "items": [
        {"text": "Home", "href": "/"},
        {"text": "Electronics", "href": "/electronics"},
        {"text": "Headphones", "href": null}
      ]
    },
    {
      "type": "category-header",
      "title": "Premium Headphones",
      "subtitle": "Discover our collection of high-quality audio equipment",
      "product_count": 42
    },
    {
      "type": "sorting",
      "options": ["Featured", "Price: Low to High", "Price: High to Low", "Newest", "Best Rated"]
    },
    {
      "type": "filters",
      "title": "Filter By",
      "filters": [
        {
          "name": "Price Range",
          "type": "checkbox",
          "options": ["Under $50", "$50 - $100", "$100 - $200", "$200+"]
        },
        {
          "name": "Brand",
          "type": "checkbox",
          "options": ["Sony", "Bose", "Sennheiser", "Audio-Technica", "Beats"]
        },
        {
          "name": "Type",
          "type": "radio",
          "options": ["Over-Ear", "In-Ear", "On-Ear", "Wireless", "Wired"]
        },
        {
          "name": "Color",
          "type": "color",
          "options": [
            {"name": "Black", "hex": "#000000"},
            {"name": "White", "hex": "#ffffff"},
            {"name": "Silver", "hex": "#c0c0c0"},
            {"name": "Blue", "hex": "#3b82f6"}
          ]
        }
      ]
    },
    {
      "type": "product-grid",
      "title": "All Products",
      "items": [
        {
          "name": "Sony WH-1000XM5",
          "price": "349.99",
          "original_price": "399.99",
          "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
          "rating": 4.8,
          "review_count": 1234,
          "category": "Headphones",
          "in_stock": true,
          "tags": ["Best Seller", "Noise Cancelling"]
        }
      ]
    }
  ],
  "footer": { /* same as homepage */ },
  "styles": { /* same as homepage */ }
}

=== PRODUCT DETAIL PAGE SCHEMA ===
{
  "page_title": "Product Name - Store Name",
  "page_type": "product",
  "header": { /* same as homepage */ },
  "sections": [
    {
      "type": "breadcrumbs",
      "items": [
        {"text": "Home", "href": "/"},
        {"text": "Electronics", "href": "/electronics"},
        {"text": "Headphones", "href": "/headphones"},
        {"text": "Sony WH-1000XM5", "href": null}
      ]
    },
    {
      "type": "product-image-gallery",
      "images": [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600",
        "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600",
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600"
      ],
      "product_name": "Sony WH-1000XM5"
    },
    {
      "type": "product-info",
      "name": "Sony WH-1000XM5 Wireless Noise-Cancelling Headphones",
      "brand": "Sony",
      "price": 349.99,
      "original_price": 399.99,
      "rating": 4.8,
      "reviews_count": 1234,
      "sku": "SNY-WH1000XM5-BLK",
      "availability": "In Stock"
    },
    {
      "type": "product-variants",
      "variants": [
        {
          "name": "Color",
          "type": "color",
          "options": [
            {"name": "Black", "hex": "#000000"},
            {"name": "Silver", "hex": "#c0c0c0"},
            {"name": "Midnight Blue", "hex": "#1e3a8a"}
          ]
        },
        {
          "name": "Warranty",
          "type": "button",
          "options": ["1 Year Standard", "2 Years Extended", "3 Years Premium"]
        }
      ]
    },
    {
      "type": "add-to-cart-section",
      "show_quantity": true,
      "show_wishlist": true,
      "show_compare": true
    },
    {
      "type": "product-tabs",
      "description": "Experience industry-leading noise cancellation with the Sony WH-1000XM5. Featuring up to 30 hours of battery life, premium sound quality with LDAC audio coding, and exceptional comfort for all-day wear.",
      "specifications": [
        {"label": "Type", "value": "Over-Ear, Wireless"},
        {"label": "Battery Life", "value": "Up to 30 hours"},
        {"label": "Connectivity", "value": "Bluetooth 5.2, 3.5mm jack"},
        {"label": "Weight", "value": "250g"},
        {"label": "Noise Cancellation", "value": "Industry-leading ANC"}
      ],
      "tabs": ["description", "specifications", "shipping"]
    },
    {
      "type": "product-reviews",
      "average_rating": 4.8,
      "total_reviews": 1234,
      "rating_breakdown": {"5": 980, "4": 180, "3": 50, "2": 15, "1": 9},
      "reviews": [
        {
          "name": "John Smith",
          "rating": 5,
          "date": "2 weeks ago",
          "comment": "Amazing sound quality and the noise cancellation is incredible!",
          "verified": true
        },
        {
          "name": "Sarah Johnson",
          "rating": 5,
          "date": "1 month ago",
          "comment": "Best headphones I've ever owned. Worth every penny.",
          "verified": true
        }
      ]
    },
    {
      "type": "related-products",
      "title": "You May Also Like",
      "products": [
        {
          "name": "Sony WH-1000XM4",
          "price": 279.99,
          "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300",
          "rating": 4.7
        }
      ]
    }
  ],
  "footer": { /* same as homepage */ },
  "styles": { /* same as homepage */ }
}

=== CART PAGE SCHEMA ===
{
  "page_title": "Shopping Cart - Store Name",
  "page_type": "cart",
  "header": { /* same as homepage */ },
  "sections": [
    {
      "type": "cart-summary",
      "items": [
        {
          "name": "Sony WH-1000XM5",
          "price": 349.99,
          "quantity": 1,
          "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
          "size": null,
          "color": "Black"
        }
      ]
    },
    {
      "type": "cart-totals",
      "subtotal": 349.99,
      "shipping": 0,
      "tax": 28.00,
      "discount": 0,
      "total": 377.99
    }
  ],
  "footer": { /* same as homepage */ },
  "styles": { /* same as homepage */ }
}

=== CHECKOUT PAGE SCHEMA ===
{
  "page_title": "Checkout - Store Name",
  "page_type": "checkout",
  "header": { /* same as homepage */ },
  "sections": [
    {
      "type": "checkout-form",
      "step": 1,
      "total_steps": 3
    },
    {
      "type": "payment-methods"
    },
    {
      "type": "order-summary",
      "subtotal": 349.99,
      "shipping": 0,
      "tax": 28.00,
      "total": 377.99
    }
  ],
  "footer": { /* same as homepage */ },
  "styles": { /* same as homepage */ }
}

=== ACCOUNT PAGE SCHEMA ===
{
  "page_title": "My Account - Orders",
  "page_type": "account",
  "header": { /* same as homepage */ },
  "sections": [
    {
      "type": "account-sidebar",
      "user_name": "John Doe",
      "active_page": "orders"
    },
    {
      "type": "order-history",
      "orders": [
        {
          "id": "#ORD-2024-001",
          "date": "Nov 10, 2024",
          "status": "Delivered",
          "total": 456.00,
          "items": 3,
          "tracking": "TRK123456789"
        }
      ]
    }
  ],
  "footer": { /* same as homepage */ },
  "styles": { /* same as homepage */ }
}

🎯 GENERATION REQUIREMENTS:

HOMEPAGE: Include promo-banner, hero, categories/features, featured-products, newsletter-signup
CATEGORY PAGE: Include breadcrumbs, category-header, sorting, filters, product-grid
PRODUCT PAGE: Include breadcrumbs, product-image-gallery, product-info, product-variants, add-to-cart-section, product-tabs, product-reviews, related-products
CART PAGE: Include cart-summary, cart-totals
CHECKOUT PAGE: Include checkout-form, payment-methods, order-summary
ACCOUNT PAGE: Include account-sidebar, one of (order-history, wishlist-items, account-settings)

⚡ DATA QUALITY RULES:
- Product names: Specific and realistic (e.g., "Sony WH-1000XM5" not "Product 1")
- Prices: Realistic ranges with .99 endings (e.g., $129.99, $249.99)
- Images: Use Unsplash URLs with appropriate dimensions
- Ratings: 4.0 - 5.0 range (most products are well-rated)
- Descriptions: 2-3 sentences minimum, highlight features and benefits
- Review counts: 50 - 2000+ for popular items

❌ NEVER:
- Generate HTML/CSS code
- Add explanations or comments outside JSON
- Use generic names like "Product 1", "Item A"
- Include invalid JSON syntax
- Miss required fields for any component

✅ ALWAYS:
- Return ONLY valid, parseable JSON
- Use exact component type names from registry
- Include complete, realistic data
- Follow the schema structure exactly
- Add appropriate style colors for the niche`;