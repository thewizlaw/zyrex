// components/Layout.tsx
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage = 'home' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation
        currentPage={currentPage}
        scrolled={scrolled}
        productOpen={productOpen}
        resourcesOpen={resourcesOpen}
        companyOpen={companyOpen}
        mobileMenuOpen={mobileMenuOpen}
        setProductOpen={setProductOpen}
        setResourcesOpen={setResourcesOpen}
        setCompanyOpen={setCompanyOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="pt-14"> {/* Add padding top equal to navbar height */}
        {children}
      </main>
    </div>
  );
};

export default Layout;