import { ComponentRenderer } from '../types';

export const renderCategoryHeader: ComponentRenderer = (section, styles) => {
  const { title = "Category", subtitle = "", product_count = 0 } = section;

  return `
    <section class="category-header" style="background: linear-gradient(135deg, ${styles.primary_color || '#3b82f6'}25, ${styles.secondary_color || '#8b5cf6'}25); padding: 4rem 2rem; text-align: center;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <h1 style="font-size: 3rem; font-weight: 700; color: #1f2937; margin-bottom: 1rem;">${title}</h1>
        <p style="font-size: 1.25rem; color: #6b7280; max-width: 600px; margin: 0 auto 1.5rem;">${subtitle}</p>
        <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: white; padding: 0.5rem 1.5rem; border-radius: 50px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <span style="font-weight: 600; color: #374151;">${product_count}</span>
          <span style="color: #6b7280;">products available</span>
        </div>
      </div>
    </section>
  `;
};