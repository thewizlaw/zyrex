/**
 * App.tsx
 * 
 * Main application component that manages routing and global state.
 * This is the root component that renders different pages based on currentPage state.
 * 
 * @component
 * @example
 * ```tsx
 * import App from './App';
 * 
 * function Root() {
 *   return <App />;
 * }
 * ```
 */

import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';

// Page imports
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AIPage from './pages/AIPage';
import TemplatesPage from './pages/TemplatesPage';
import PublishPage from './pages/PublishPage';
import CMSPage from './pages/CMSPage';
import PricingPage from './pages/PricingPage';
import MarketplacePage from './pages/MarketplacePage';
import ExpertsPage from './pages/ExpertsPage';
import CommunityPage from './pages/CommunityPage';
import BlogPage from './pages/BlogPage';
import SupportPage from './pages/SupportPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

/**
 * Main App Component
 * 
 * Manages:
 * - Current page routing
 * - Scroll detection
 * 
 * @returns {JSX.Element} The rendered application
 */
const App: React.FC = () => {
  // Routing state
  const [currentPage, setCurrentPage] = useState<string>('home');
  
  // Scroll state
  const [scrolled, setScrolled] = useState<boolean>(false);

  /**
   * Scroll event listener effect
   * Updates scrolled state when user scrolls past 20px
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Navigate to a different page
   * Scrolls to top
   * 
   * @param {string} page - Page identifier to navigate to
   */
  const navigateTo = (page: string): void => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  /**
   * Render the current page based on currentPage state
   * 
   * @returns {JSX.Element} The current page component
   */
  const renderPage = (): JSX.Element => {
    switch (currentPage) {
      case 'features':
        return <FeaturesPage navigateTo={navigateTo} />;
      case 'ai':
        return <AIPage navigateTo={navigateTo} />;
      case 'templates':
        return <TemplatesPage navigateTo={navigateTo} />;
      case 'publish':
        return <PublishPage navigateTo={navigateTo} />;
      case 'cms':
        return <CMSPage navigateTo={navigateTo} />;
      case 'pricing':
        return <PricingPage navigateTo={navigateTo} />;
      case 'marketplace':
        return <MarketplacePage navigateTo={navigateTo} />;
      case 'experts':
        return <ExpertsPage navigateTo={navigateTo} />;
      case 'community':
        return <CommunityPage navigateTo={navigateTo} />;
      case 'blog':
        return <BlogPage navigateTo={navigateTo} />;
      case 'support':
        return <SupportPage navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage navigateTo={navigateTo} />;
      case 'careers':
        return <CareersPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <>
      {renderPage()}
      <Footer />
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default App;