// =========================
//     PAGE ROOT TYPE
// =========================
export interface PageData {
  page_title?: string;
  page_type?: string;   // homepage | category | product | cart | checkout | account
  header?: Header;
  sections: Section[];
  footer?: Footer;
  styles?: PageStyles;
}

// =========================
//     HEADER + FOOTER
// =========================

export interface Header {
  logo?: string;
  menu?: MenuItem[];
  cta?: CTA;
  categories?: string[];                    // NEW: Service categories
  search_placeholder?: string;              // NEW: Search bar placeholder
  show_search?: boolean;                    // NEW: Toggle search bar
  show_categories?: boolean;                // NEW: Toggle category filter bar
}

export interface MenuItem {
  text: string;
  href?: string;
  type?: 'link' | 'dropdown' | 'mega-menu'; // NEW: Menu item types
  items?: MenuItem[];                       // NEW: Dropdown items
}

export interface CTA {
  text: string;
  href?: string;
  style?: string;
  badge?: boolean;                          // NEW: Show badge/count
  badge_count?: number;                     // NEW: Badge number
}

export interface Footer {
  sections?: {
    title: string;
    links: { text: string; href: string }[];
  }[];
  social?: SocialLink[];
  copyright?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

// =========================
//     GLOBAL STYLES
// =========================

export interface PageStyles {
  primary_color?: string;
  secondary_color?: string;
  font_family?: string;
  dark_mode?: boolean;
  surface?: string;
}

// =========================
//      SECTION UNION
// =========================
// Every section type your SYSTEM_PROMPT can generate

export type Section =
  | HeroSection
  | FeaturesSection
  | PromoBannerSection
  | CategoriesSection
  | FeaturedProductsSection
  | NewsletterSignupSection
  | BreadcrumbsSection
  | CategoryHeaderSection
  | FiltersSection
  | SortingSection
  | ProductGridSection
  | ProductImageGallerySection
  | ProductInfoSection
  | ProductVariantsSection
  | AddToCartSection
  | ProductTabsSection
  | ProductReviewsSection
  | RelatedProductsSection
  | CartSummarySection
  | CartTotalsSection
  | CheckoutFormSection
  | PaymentMethodsSection
  | OrderSummarySection
  | AccountSidebarSection
  | OrderHistorySection
  | WishlistItemsSection;

// =========================
//      HOMEPAGE SECTIONS
// =========================

export interface HeroSection {
  type: "hero";
  title: string;
  subtitle?: string;
  text?: string;
  image?: string;
}

export interface PromoBannerSection {
  type: "promo-banner";
  text: string;
  cta_text?: string;
  cta_link?: string;
  dismissible?: boolean;
}

export interface FeaturesSection {
  type: "features";
  items: SectionItem[];
}

export interface CategoriesSection {
  type: "categories";
  title?: string;
  items: SectionItem[];
}

export interface FeaturedProductsSection {
  type: "featured-products";
  title?: string;
  items: ProductItem[];
}

export interface NewsletterSignupSection {
  type: "newsletter-signup";
  title: string;
  subtitle?: string;
  placeholder?: string;
}

// =========================
//    CATEGORY PAGE
// =========================

export interface BreadcrumbsSection {
  type: "breadcrumbs";
  items: { text: string; href: string | null }[];
}

export interface CategoryHeaderSection {
  type: "category-header";
  title: string;
  subtitle?: string;
  product_count: number;
}

export interface FiltersSection {
  type: "filters";
  title?: string;
  filters: {
    name: string;
    type: "checkbox" | "radio" | "color" | "range";
    options: any[];
  }[];
}

export interface SortingSection {
  type: "sorting";
  options: string[];
}

export interface ProductGridSection {
  type: "product-grid";
  title?: string;
  items: ProductItem[];
}

// =========================
//    PRODUCT PAGE
// =========================

export interface ProductImageGallerySection {
  type: "product-image-gallery";
  images: string[];
  product_name?: string;
}

export interface ProductInfoSection {
  type: "product-info";
  name: string;
  brand?: string;
  price: number;
  original_price?: number;
  rating?: number;
  reviews_count?: number;
  sku?: string;
  availability: string;
}

export interface ProductVariantsSection {
  type: "product-variants";
  variants: VariantItem[];
}

export interface AddToCartSection {
  type: "add-to-cart-section";
  show_quantity: boolean;
  show_wishlist?: boolean;
  show_compare?: boolean;
}

export interface ProductTabsSection {
  type: "product-tabs";
  description: string;
  specifications?: { label: string; value: string }[];
  tabs: string[]; // ["description", "specifications", "shipping"]
}

export interface ProductReviewsSection {
  type: "product-reviews";
  average_rating: number;
  total_reviews: number;
  rating_breakdown?: Record<string, number>;
  reviews: ReviewItem[];
}

export interface RelatedProductsSection {
  type: "related-products";
  title?: string;
  products: ProductItem[];
}

// =========================
//    CART & CHECKOUT
// =========================

export interface CartSummarySection {
  type: "cart-summary";
  items: CartItem[];
}

export interface CartTotalsSection {
  type: "cart-totals";
  subtotal: number;
  shipping: number;
  tax: number;
  discount?: number;
  total: number;
}

export interface CheckoutFormSection {
  type: "checkout-form";
  step: number;
  total_steps: number;
}

export interface PaymentMethodsSection {
  type: "payment-methods";
}

export interface OrderSummarySection {
  type: "order-summary";
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

// =========================
//      ACCOUNT PAGES
// =========================

export interface AccountSidebarSection {
  type: "account-sidebar";
  user_name: string;
  active_page: string;
}

export interface OrderHistorySection {
  type: "order-history";
  orders: OrderItem[];
}

export interface WishlistItemsSection {
  type: "wishlist-items";
  products: ProductItem[];
}

// =========================
//      SHARED MODELS
// =========================

export interface SectionItem {
  title?: string;
  description?: string;
  icon?: string;
  image?: string;
}

export interface ProductItem {
  name: string;
  price: number | string;
  original_price?: number | string;
  image: string;
  rating?: number;
  review_count?: number;
  category?: string;
  in_stock?: boolean;
  tags?: string[];
}

export interface VariantItem {
  name: string;
  type: string;
  options: any[];
}

export interface ReviewItem {
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified?: boolean;
}

export interface OrderItem {
  id: string;
  date: string;
  status: string;
  total: number;
  items: number;
  tracking: string;
}

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image?: string;
  color?: string;
  size?: string;
}

// =========================
//      COMPONENT RENDERER
// =========================

export type ComponentRenderer = (data: any, styles: PageStyles) => string;
