import { ComponentRenderer } from '../types';

// 🎛️ MODERN FILTERS - Advanced sidebar with animations
export const renderFilters: ComponentRenderer = (section, styles) => {
  const { title = "Filter By", filters = [] } = section;

  return `
    <div class="filters-container" style="animation: slideInLeft 0.5s ease-out;">
      <!-- Header with clear button -->
      <div style="
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
        margin-bottom: 1.75rem;
        padding-bottom: 1.25rem;
        border-bottom: 2px solid ${styles.primary_color}20;
      ">
        <h3 style="
          font-size: 1.25rem; 
          font-weight: 700; 
          color: ${styles.dark_mode ? '#f9fafb' : '#111827'};
          letter-spacing: -0.01em;
        ">${title}</h3>
        <button onclick="clearFilters()" style="
          color: ${styles.primary_color || '#3b82f6'}; 
          background: ${styles.primary_color}10; 
          border: none; 
          cursor: pointer; 
          font-size: 0.8125rem; 
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.2s ease;
        " onmouseover="
          this.style.background='${styles.primary_color}';
          this.style.color='white';
          this.style.transform='scale(1.05)';
        " onmouseout="
          this.style.background='${styles.primary_color}10';
          this.style.color='${styles.primary_color}';
          this.style.transform='scale(1)';
        ">Clear All</button>
      </div>
      
      ${filters.map((filter: { name: string; options: any[]; type: string; }, index: number) => `
        <div class="filter-group" style="
          margin-bottom: 1.75rem; 
          padding-bottom: 1.75rem; 
          border-bottom: ${index === filters.length - 1 ? 'none' : `1px solid ${styles.dark_mode ? '#374151' : '#f3f4f6'}`};
        ">
          <!-- Filter Header (Collapsible) -->
          <div style="
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            margin-bottom: 1rem; 
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 8px;
            transition: background 0.2s ease;
          " onclick="toggleFilterSection('filter-${index}')"
             onmouseover="this.style.background='${styles.primary_color}05'"
             onmouseout="this.style.background='transparent'">
            <h4 style="
              font-weight: 600; 
              color: ${styles.dark_mode ? '#f3f4f6' : '#374151'}; 
              margin: 0;
              font-size: 0.875rem;
              text-transform: uppercase;
              letter-spacing: 0.05em;
            ">${filter.name}</h4>
            <span id="filter-${index}-arrow" style="
              color: #9ca3af;
              transition: transform 0.3s ease;
              font-size: 0.75rem;
            ">▼</span>
          </div>
          
          <!-- Filter Options -->
          <div id="filter-${index}" class="filter-options" style="
            display: flex; 
            flex-direction: column; 
            gap: 0.625rem;
          ">
            ${filter.type === 'color' 
              ? filter.options.map((option: any) => `
                  <button onclick="selectColorFilter('${option.name}')" style="
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.625rem;
                    border: 1px solid ${styles.dark_mode ? '#4b5563' : '#e5e7eb'};
                    background: ${styles.dark_mode ? '#374151' : 'white'};
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    text-align: left;
                    width: 100%;
                  " onmouseover="
                    this.style.borderColor='${styles.primary_color}';
                    this.style.background='${styles.primary_color}05';
                    this.style.transform='translateX(4px)';
                  " onmouseout="
                    this.style.borderColor='${styles.dark_mode ? '#4b5563' : '#e5e7eb'}';
                    this.style.background='${styles.dark_mode ? '#374151' : 'white'}';
                    this.style.transform='translateX(0)';
                  ">
                    <div style="
                      width: 24px;
                      height: 24px;
                      background: ${option.hex || '#000'};
                      border-radius: 6px;
                      border: 2px solid ${styles.dark_mode ? '#4b5563' : '#e5e7eb'};
                      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    "></div>
                    <span style="
                      color: ${styles.dark_mode ? '#d1d5db' : '#4b5563'}; 
                      font-size: 0.875rem;
                      font-weight: 500;
                    ">${option.name || option}</span>
                  </button>
                `).join('')
              : filter.options.map((option: string) => `
                  <label style="
                    display: flex; 
                    align-items: center; 
                    gap: 0.75rem; 
                    cursor: pointer;
                    padding: 0.625rem;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                  " onmouseover="
                    this.style.background='${styles.primary_color}05';
                    this.style.transform='translateX(4px)';
                  " onmouseout="
                    this.style.background='transparent';
                    this.style.transform='translateX(0)';
                  ">
                    <input type="${filter.type === 'range' || filter.type === 'radio' ? 'radio' : 'checkbox'}" 
                           name="${filter.name.toLowerCase().replace(/\s+/g, '-')}" 
                           value="${option}" 
                           style="
                             accent-color: ${styles.primary_color || '#3b82f6'};
                             width: 1.125rem;
                             height: 1.125rem;
                             cursor: pointer;
                           ">
                    <span style="
                      color: ${styles.dark_mode ? '#d1d5db' : '#4b5563'}; 
                      font-size: 0.875rem;
                      font-weight: 500;
                      flex: 1;
                    ">${option}</span>
                  </label>
                `).join('')
            }
          </div>
        </div>
      `).join('')}
      
      <!-- Apply Filters Button -->
      <button onclick="applyFilters()" style="
        width: 100%; 
        background: linear-gradient(135deg, ${styles.primary_color}, ${styles.secondary_color || '#8b5cf6'}); 
        color: white; 
        border: none; 
        padding: 0.875rem 1.5rem; 
        border-radius: 10px; 
        font-weight: 600; 
        cursor: pointer; 
        font-size: 0.875rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 14px ${styles.primary_color}30;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      " onmouseover="
        this.style.transform='translateY(-2px)';
        this.style.boxShadow='0 8px 25px ${styles.primary_color}50';
      " onmouseout="
        this.style.transform='translateY(0)';
        this.style.boxShadow='0 4px 14px ${styles.primary_color}30';
      ">
        <span>Apply Filters</span>
        <span style="font-size: 1rem;">✓</span>
      </button>
      
      <!-- Active Filters Count Badge -->
      <div id="active-filters-badge" style="
        margin-top: 1rem;
        padding: 0.75rem;
        background: ${styles.primary_color}10;
        border-radius: 8px;
        text-align: center;
        font-size: 0.8125rem;
        color: ${styles.primary_color};
        font-weight: 600;
        display: none;
      ">
        <span id="filter-count">0</span> filters active
      </div>
    </div>
    
    <!-- Mobile Filter Toggle Button -->
    <div style="display: none; margin-bottom: 1.5rem;" id="mobile-filter-toggle-container">
      <button id="mobile-filter-toggle" style="
        width: 100%; 
        background: linear-gradient(135deg, ${styles.primary_color}, ${styles.secondary_color || '#8b5cf6'}); 
        color: white; 
        border: none; 
        padding: 1rem 1.5rem; 
        border-radius: 12px; 
        font-weight: 600; 
        cursor: pointer;
        font-size: 1rem;
        box-shadow: 0 4px 14px ${styles.primary_color}30;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        transition: all 0.3s ease;
      " onclick="toggleMobileFilters()">
        <span style="font-size: 1.25rem;">🎛️</span>
        <span>Show Filters</span>
      </button>
    </div>
    
    <style>
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @media (max-width: 768px) {
        #mobile-filter-toggle-container {
          display: block !important;
        }
        
        .filters-container {
          position: fixed;
          top: 0;
          left: -100%;
          height: 100vh;
          width: 85%;
          max-width: 400px;
          background: ${styles.dark_mode ? '#1f2937' : 'white'};
          z-index: 9999;
          padding: 2rem;
          overflow-y: auto;
          box-shadow: 2px 0 20px rgba(0,0,0,0.2);
          transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .filters-container.mobile-open {
          left: 0 !important;
        }
        
        /* Mobile backdrop */
        .mobile-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
          z-index: 9998;
          display: none;
        }
        
        .mobile-backdrop.active {
          display: block;
        }
      }
      
      /* Smooth scrollbar for filter container */
      .filters-container::-webkit-scrollbar {
        width: 8px;
      }
      
      .filters-container::-webkit-scrollbar-track {
        background: ${styles.dark_mode ? '#374151' : '#f3f4f6'};
        border-radius: 4px;
      }
      
      .filters-container::-webkit-scrollbar-thumb {
        background: ${styles.primary_color}40;
        border-radius: 4px;
      }
      
      .filters-container::-webkit-scrollbar-thumb:hover {
        background: ${styles.primary_color}60;
      }
    </style>
    
    <script>
      // Toggle mobile filters
      function toggleMobileFilters() {
        const container = document.querySelector('.filters-container');
        const backdrop = document.querySelector('.mobile-backdrop') || createBackdrop();
        
        if (container.classList.contains('mobile-open')) {
          container.classList.remove('mobile-open');
          backdrop.classList.remove('active');
        } else {
          container.classList.add('mobile-open');
          backdrop.classList.add('active');
        }
      }
      
      function createBackdrop() {
        const backdrop = document.createElement('div');
        backdrop.className = 'mobile-backdrop';
        backdrop.onclick = toggleMobileFilters;
        document.body.appendChild(backdrop);
        return backdrop;
      }
      
      // Update active filter count
      function updateFilterCount() {
        const checkedInputs = document.querySelectorAll('.filter-options input:checked');
        const count = checkedInputs.length;
        const badge = document.getElementById('active-filters-badge');
        const countSpan = document.getElementById('filter-count');
        
        if (count > 0) {
          badge.style.display = 'block';
          countSpan.textContent = count;
        } else {
          badge.style.display = 'none';
        }
      }
      
      // Add event listeners to all filter inputs
      document.addEventListener('DOMContentLoaded', function() {
        const filterInputs = document.querySelectorAll('.filter-options input');
        filterInputs.forEach(input => {
          input.addEventListener('change', updateFilterCount);
        });
      });
    </script>
  `;
};