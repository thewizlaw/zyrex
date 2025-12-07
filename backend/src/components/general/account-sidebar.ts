// 12. ACCOUNT SIDEBAR (User Dashboard Navigation)
export const renderAccountSidebar = (section: any, styles: any) => {
  const { 
    user_name = "Jane Doe", 
    user_email = "your-email@example.com", 
    active_page = "orders" 
  } = section;
  
  // Helper to get initials from name
  const getInitials = (name: string) => {
    const names = name.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };
  
  const userInitials = getInitials(user_name);
  const primaryColor = styles.primary_color || '#3b82f6'; // Default to a modern blue

  const menuItems = [
    { 
      id: 'orders', 
      text: 'My Orders',
      icon: `
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 10a2 2 0 01-2 2h-6.83l1.83-1.83a2 2 0 00-2.83-2.83L8.34 11.17a2 2 0 000 2.83l2.83 2.83a2 2 0 002.83-2.83L12.17 12H19a2 2 0 012-2z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 4h18v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4z"></path>
        </svg>
      ` 
    },
    { 
      id: 'wishlist', 
      text: 'Wishlist',
      icon: `
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
        </svg>
      ` 
    },
    { 
      id: 'addresses', 
      text: 'Addresses',
      icon: `
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ` 
    },
    { 
      id: 'payment', 
      text: 'Payment Methods',
      icon: `
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
        </svg>
      ` 
    },
    { 
      id: 'settings', 
      text: 'Account Settings',
      icon: `
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ` 
    },
    { 
      id: 'logout', 
      text: 'Logout',
      icon: `
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
        </svg>
      ` 
    }
  ];
  
  return `
    <aside style="
      background: white; 
      border-radius: 16px; 
      padding: 1.5rem; 
      box-shadow: 0 4px 12px rgba(0,0,0,0.05); 
      border: 1px solid #f1f5f9;
      position: sticky; 
      top: 2rem;
    ">
      <!-- User Info -->
      <div style="
        display: flex; 
        align-items: center; 
        gap: 1rem; 
        padding-bottom: 1.5rem; 
        border-bottom: 1px solid #f1f5f9; 
        margin-bottom: 1.5rem;
      ">
        <!-- Avatar -->
        <div style="
          width: 56px; 
          height: 56px; 
          border-radius: 50%; 
          background: ${primaryColor}20; 
          color: ${primaryColor};
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 1.25rem; 
          font-weight: 600;
          flex-shrink: 0;
        ">
          ${userInitials}
        </div>
        <!-- User Details -->
        <div style="overflow: hidden;">
          <div style="
            font-weight: 700; 
            color: #111827; 
            font-size: 1.125rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          ">
            ${user_name}
          </div>
          <div style="
            color: #6b7280; 
            font-size: 0.875rem; 
            margin-top: 0.25rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          ">
            ${user_email}
          </div>
        </div>
      </div>
      
      <!-- Navigation Menu -->
      <nav>
        ${menuItems.map(item => `
          <a href="#${item.id}" 
             class="sidebar-link"
             style="
               display: flex; 
               align-items: center; 
               gap: 1rem; 
               padding: 0.875rem 1rem; 
               margin-bottom: 0.5rem; 
               border-radius: 10px; 
               text-decoration: none; 
               transition: all 0.25s ease;
               font-weight: 500;
               position: relative;
               background: ${item.id === active_page ? primaryColor + '15' : 'transparent'}; 
               color: ${item.id === active_page ? primaryColor : '#4b5563'};
             "
             onmouseover="
               this.style.background = '${item.id === active_page ? primaryColor + '15' : primaryColor + '08'}';
               this.style.color = '${primaryColor}';
             "
             onmouseout="
               this.style.background = '${item.id === active_page ? primaryColor + '15' : 'transparent'}';
               this.style.color = '${item.id === active_page ? primaryColor : '#4b5563'}';
             ">
            <span style="width: 24px; height: 24px; flex-shrink: 0; color: ${item.id === 'logout' ? '#ef4444' : (item.id === active_page ? primaryColor : '#6b7280')}; transition: color 0.25s ease;">
              ${item.icon}
            </span>
            <span style="flex: 1; font-weight: ${item.id === active_page ? '600' : '500'};">
              ${item.text}
            </span>
            ${item.id === active_page ? `
              <span style="
                position: absolute; 
                right: -1.5rem; /* Aligns to the edge of the card */
                top: 50%;
                transform: translateY(-50%);
                width: 4px; 
                height: 24px; 
                background: ${primaryColor}; 
                border-top-left-radius: 4px; 
                border-bottom-left-radius: 4px;
              "></span>
            ` : ''}
          </a>
        `).join('')}
      </nav>
    </aside>
    
    <style>
      /* Ensure SVGs in links scale correctly */
      .sidebar-link svg {
        width: 100%;
        height: 100%;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      
      /* Handle hover color for logout icon */
      a[href="#logout"]:hover span:first-child {
        color: #ef4444 !important;
      }
    </style>
  `;
};