import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { authService } from './services/auth';

// Main Pages
import Landing from './main/Landing';
import Features from './main/pages/FeaturesPage';
import AI from './main/pages/AIPage';
import Templates from './main/pages/TemplatesPage';
import Pricing from './main/pages/PricingPage';
import About from './main/pages/AboutPage';
import Careers from './main/pages/CareersPage';
import Contact from './main/pages/ContactPage';
import Blog from './main/pages/BlogPage';
import Support from './main/pages/SupportPage';

// Auth Pages
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

// App Pages (Protected)
import Dashboard from './pages/dashboard/Dashboard';
import WebsiteBuilderPage from './pages/builder/WebsiteBuilder';
import Marketplace from './main/pages/MarketplacePage';
import Experts from './main/pages/ExpertsPage';
import Community from './main/pages/CommunityPage';

// Components
import Navigation from './main/components/Navigation';
import FramerStyleTransitions from './main/components/Transition/FramerStyleTransitions';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return authService.isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;
};

// Public Route Component (redirect to dashboard if authenticated)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return !authService.isAuthenticated() ? <>{children}</> : <Navigate to="/dashboard" />;
};

// Navigation Wrapper Component
const NavigationWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get current page from route
  const getCurrentPage = (): string => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/features') return 'features';
    if (path === '/ai') return 'ai';
    if (path === '/templates') return 'templates';
    if (path === '/pricing') return 'pricing';
    if (path === '/marketplace') return 'marketplace';
    if (path === '/experts') return 'experts';
    if (path === '/community') return 'community';
    if (path === '/blog') return 'blog';
    if (path === '/support') return 'support';
    if (path === '/about') return 'about';
    if (path === '/careers') return 'careers';
    if (path === '/contact') return 'contact';
    if (path === '/login') return 'login';
    if (path === '/signup') return 'signup';
    if (path === '/dashboard') return 'dashboard';
    return 'home';
  };

  const currentPage = getCurrentPage();

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
      <main className="pt-14"> {/* Padding for navbar height */}
        {children}
      </main>
    </div>
  );
};

// Page with Navigation Component
const PageWithNavigation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NavigationWrapper>
      <FramerStyleTransitions>
        {children}
      </FramerStyleTransitions>
    </NavigationWrapper>
  );
};

// Auth Page Component (without navigation for login/signup)
const AuthPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <FramerStyleTransitions>
      {children}
    </FramerStyleTransitions>
  );
};

// Animated Routes Component
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Main Routes */}
        <Route path="/" element={
          <PageWithNavigation>
            <Landing />
          </PageWithNavigation>
        } />
        <Route path="/features" element={
          <PageWithNavigation>
            <Features />
          </PageWithNavigation>
        } />
        <Route path="/ai" element={
          <PageWithNavigation>
            <AI />
          </PageWithNavigation>
        } />
        <Route path="/templates" element={
          <PageWithNavigation>
            <Templates />
          </PageWithNavigation>
        } />
        <Route path="/pricing" element={
          <PageWithNavigation>
            <Pricing />
          </PageWithNavigation>
        } />
        <Route path="/about" element={
          <PageWithNavigation>
            <About />
          </PageWithNavigation>
        } />
        <Route path="/careers" element={
          <PageWithNavigation>
            <Careers />
          </PageWithNavigation>
        } />
        <Route path="/contact" element={
          <PageWithNavigation>
            <Contact />
          </PageWithNavigation>
        } />
        <Route path="/blog" element={
          <PageWithNavigation>
            <Blog />
          </PageWithNavigation>
        } />
        <Route path="/support" element={
          <PageWithNavigation>
            <Support />
          </PageWithNavigation>
        } />

        {/* Auth Routes (without navigation) */}
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <AuthPage>
                <Login />
              </AuthPage>
            </PublicRoute>
          } 
        />
        <Route 
          path="/signup" 
          element={
            <PublicRoute>
              <AuthPage>
                <Signup />
              </AuthPage>
            </PublicRoute>
          } 
        />

        {/* Protected App Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* UPDATED: Editor Route (no navigation, full-screen builder) */}
        <Route 
          path="/editor" 
          element={
            <ProtectedRoute>
              <WebsiteBuilderPage />
            </ProtectedRoute>
          } 
        />
        
        {/* DEPRECATED: Old builder route (redirect to editor) */}
        <Route 
          path="/builder" 
          element={
            <ProtectedRoute>
              <Navigate to="/editor" replace />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/marketplace" 
          element={
            <ProtectedRoute>
              <PageWithNavigation>
                <Marketplace />
              </PageWithNavigation>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/experts" 
          element={
            <ProtectedRoute>
              <PageWithNavigation>
                <Experts />
              </PageWithNavigation>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/community" 
          element={
            <ProtectedRoute>
              <PageWithNavigation>
                <Community />
              </PageWithNavigation>
            </ProtectedRoute>
          } 
        />

        {/* Catch all route */}
        <Route path="*" element={
          <PageWithNavigation>
            <Navigate to="/" />
          </PageWithNavigation>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;