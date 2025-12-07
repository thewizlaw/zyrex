import { ComponentRenderer } from '../types';

export const renderFeatures: ComponentRenderer = (section, styles) => {
  const { title, items = [], columns = 3 } = section;
  
  const gridStyle = columns === 2 ? 'grid-template-columns: repeat(2, 1fr)' : 
                   columns === 4 ? 'grid-template-columns: repeat(4, 1fr)' : 
                   'grid-template-columns: repeat(3, 1fr)';

  return `
    <section style="padding: 4rem 0;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
        ${title ? `<h2 style="text-align: center; margin-bottom: 3rem;">${title}</h2>` : ''}
        <div style="display: grid; ${gridStyle}; gap: 2rem;">
          ${items.map((item: { icon: any; title: any; text: any; }) => `
            <div style="text-align: center; padding: 2rem; border: 1px solid #eee; border-radius: 8px;">
              ${item.icon ? `<div style="font-size: 2rem; margin-bottom: 1rem;">${item.icon}</div>` : ''}
              ${item.title ? `<h3 style="margin-bottom: 1rem;">${item.title}</h3>` : ''}
              ${item.text ? `<p style="color: #666;">${item.text}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
};