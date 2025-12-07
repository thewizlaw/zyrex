import { ComponentRenderer } from "../types";

// 🔄 MODERN SORTING - Enhanced toolbar with view options
export const renderSorting: ComponentRenderer = (section, styles) => {
  const { options = ["Popular", "Newest", "Price: Low to High", "Price: High to Low", "Rating"] } = section;
  
  return `
    <div style="
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      padding: 1.25rem 0; 
      margin-bottom: 2rem; 
      border-bottom: 1px solid ${styles.dark_mode ? '#374151' : '#f3f4f6'}; 
      flex-wrap: wrap; 
      gap: 1.25rem;
    ">
      <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
        <span style="
          font-weight: 600; 
          color: ${styles.dark_mode ? '#f3f4f6' : '#111827'};
          font-size: 0.9rem;
        ">Sort by:</span>
        <select onchange="updateSorting()" style="
          padding: 0.625rem 1.25rem; 
          border: 1px solid ${styles.dark_mode ? '#4b5563' : '#e5e7eb'}; 
          border-radius: 10px; 
          background: ${styles.dark_mode ? '#374151' : 'white'}; 
          color: ${styles.dark_mode ? '#f9fafb' : '#374151'}; 
          cursor: pointer; 
          min-width: 220px;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        " onmouseover="
          this.style.borderColor='${styles.primary_color}';
          this.style.boxShadow='0 0 0 3px ${styles.primary_color}20';
        " onmouseout="
          this.style.borderColor='${styles.dark_mode ? '#4b5563' : '#e5e7eb'}';
          this.style.boxShadow='0 1px 2px rgba(0,0,0,0.05)';
        ">
          ${options.map((option: any) => `<option value="${option}">${option}</option>`).join('')}
        </select>
      </div>
      
      <div style="display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap;">
        <span style="
          color: ${styles.dark_mode ? '#9ca3af' : '#6b7280'}; 
          font-size: 0.875rem;
          font-weight: 500;
        ">
          <span style="
            color: ${styles.dark_mode ? '#f3f4f6' : '#111827'};
            font-weight: 700;
          ">12</span> products
        </span>
        
        <!-- View Toggle Buttons -->
        <div style="
          display: flex; 
          gap: 0.375rem;
          background: ${styles.dark_mode ? '#374151' : '#f9fafb'};
          padding: 0.25rem;
          border-radius: 10px;
          border: 1px solid ${styles.dark_mode ? '#4b5563' : '#e5e7eb'};
        ">
          <button onclick="alert('Grid view selected')" style="
            padding: 0.5rem 0.75rem; 
            border: none;
            background: ${styles.primary_color}; 
            color: white; 
            border-radius: 8px; 
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 4px ${styles.primary_color}40;
          " onmouseover="
            this.style.transform='scale(1.05)';
          " onmouseout="
            this.style.transform='scale(1)';
          " title="Grid view">⏹️</button>
          <button onclick="alert('List view selected')" style="
            padding: 0.5rem 0.75rem; 
            border: none;
            background: transparent; 
            color: ${styles.dark_mode ? '#9ca3af' : '#6b7280'}; 
            border-radius: 8px; 
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          " onmouseover="
            this.style.background='${styles.dark_mode ? '#4b5563' : 'white'}';
            this.style.transform='scale(1.05)';
          " onmouseout="
            this.style.background='transparent';
            this.style.transform='scale(1)';
          " title="List view">☰</button>
        </div>
      </div>
    </div>
  `;
};
