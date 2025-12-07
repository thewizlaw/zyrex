/**
 * Navigation.tsx
 * 
 * Responsive navigation bar with dropdown menus and mobile support.
 * Features a glassmorphism effect on scroll and animated dropdowns.
 * 
 * @component
 * @example
 * ```tsx
 * <Navigation
 *   currentPage="home"
 *   scrolled={false}
 *   productOpen={false}
 *   resourcesOpen={false}
 *   companyOpen={false}
 *   mobileMenuOpen={false}
 *   setProductOpen={setProductOpen}
 *   setResourcesOpen={setResourcesOpen}
 *   setCompanyOpen={setCompanyOpen}
 *   setMobileMenuOpen={setMobileMenuOpen}
 * />
 * ```
 */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Grid,
  Sparkles,
  Layers,
  Rocket,
  FileText,
  Star,
  Users,
  Book,
  LifeBuoy,
  Heart,
  TrendingUp,
  Mail,
  User,
  LogOut
} from 'lucide-react';
import { authService } from '../../services/auth';

/**
 * Navigation component props interface
 */
interface NavigationProps {
  /** Current active page */
  currentPage: string;
  /** Whether the user has scrolled past threshold */
  scrolled: boolean;
  /** Product dropdown open state */
  productOpen: boolean;
  /** Resources dropdown open state */
  resourcesOpen: boolean;
  /** Company dropdown open state */
  companyOpen: boolean;
  /** Mobile menu open state */
  mobileMenuOpen: boolean;
  /** Set product dropdown state */
  setProductOpen: (open: boolean) => void;
  /** Set resources dropdown state */
  setResourcesOpen: (open: boolean) => void;
  /** Set company dropdown state */
  setCompanyOpen: (open: boolean) => void;
  /** Set mobile menu state */
  setMobileMenuOpen: (open: boolean) => void;
}

/**
 * Navigation Component
 * 
 * Sticky navigation bar that adapts to scroll position.
 * Contains three dropdown menus and a mobile hamburger menu.
 * 
 * Features:
 * - Glassmorphism effect on scroll
 * - Hover-activated dropdown menus
 * - Responsive mobile menu
 * - Logo navigation to home
 * 
 * @param {NavigationProps} props - Component props
 * @returns {JSX.Element} Navigation bar
 */
const Navigation: React.FC<NavigationProps> = ({
  scrolled,
  productOpen,
  resourcesOpen,
  companyOpen,
  mobileMenuOpen,
  setProductOpen,
  setResourcesOpen,
  setCompanyOpen,
  setMobileMenuOpen,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = authService.isAuthenticated();

  /**
   * Get current page from route
   */
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

  /**
   * Handle login navigation
   */
  const handleLogin = () => {
    setMobileMenuOpen(false);
    navigate('/login');
  };

  /**
   * Handle signup navigation
   */
  const handleSignup = () => {
    setMobileMenuOpen(false);
    navigate('/signup');
  };

  /**
   * Handle dashboard navigation
   */
  const handleDashboard = () => {
    setMobileMenuOpen(false);
    navigate('/dashboard');
  };

  /**
   * Handle logout
   */
  const handleLogout = () => {
    setMobileMenuOpen(false);
    authService.clearToken();
    navigate('/');
    // Force refresh to update authentication state
    window.location.reload();
  };

  /**
   * Handle navigation and close menus
   */
  const handleNavigate = (page: string) => {
    setMobileMenuOpen(false);
    setProductOpen(false);
    setResourcesOpen(false);
    setCompanyOpen(false);
    
    // Map page names to actual routes
    const routeMap: { [key: string]: string } = {
      'home': '/',
      'features': '/features',
      'ai': '/ai',
      'templates': '/templates',
      'publish': '/',
      'cms': '/',
      'pricing': '/pricing',
      'marketplace': '/marketplace',
      'experts': '/experts',
      'community': '/community',
      'blog': '/blog',
      'support': '/support',
      'about': '/about',
      'careers': '/careers',
      'contact': '/contact',
    };

    const route = routeMap[page] || '/';
    navigate(route);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 group"
            aria-label="Navigate to home"
          >
            {/* <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Sparkles className="w-4 h-4 text-white" />
            </div> */}
            <span className="font-bold text-white text-lg normal-case drop-shadow-lg" style={{ fontVariant: 'small-caps' }}>
  Zyrex
</span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Product Dropdown */}
            <div className="relative group h-14 flex items-center">
              <button
                className={`flex items-center gap-1 text-[13px] font-medium transition-colors ${
                  ['features', 'ai', 'templates', 'publish', 'cms'].includes(currentPage)
                    ? 'text-white' 
                    : 'text-zinc-400 hover:text-white'
                }`}
                onMouseEnter={() => setProductOpen(true)}
                onMouseLeave={() => setProductOpen(false)}
              >
                Product <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
              {productOpen && (
                <div
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-56 bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl p-2 grid gap-1 animate-in fade-in-0 zoom-in-95"
                  onMouseEnter={() => setProductOpen(true)}
                  onMouseLeave={() => setProductOpen(false)}
                >
                  {/* Features */}
                  <button
                    onClick={() => handleNavigate('features')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 w-full text-left group"
                  >
                    <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
                      <Grid className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">Features</div>
                      <div className="text-[11px] text-zinc-500">The full toolkit</div>
                    </div>
                  </button>
                  {/* AI */}
                  <button
                    onClick={() => handleNavigate('ai')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 w-full text-left group"
                  >
                    <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">AI</div>
                      <div className="text-[11px] text-zinc-500">Set your ideas free</div>
                    </div>
                  </button>
                  {/* Templates */}
                  <button
                    onClick={() => handleNavigate('templates')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 w-full text-left group"
                  >
                    <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
                      <Layers className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">Templates</div>
                      <div className="text-[11px] text-zinc-500">Start faster</div>
                    </div>
                  </button>
                  {/* Publish */}
                  <button
                    onClick={() => handleNavigate('publish')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 w-full text-left group"
                  >
                    <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
                      <Rocket className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">Publish</div>
                      <div className="text-[11px] text-zinc-500">Launch instantly</div>
                    </div>
                  </button>
                  {/* CMS */}
                  <button
                    onClick={() => handleNavigate('cms')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 w-full text-left group"
                  >
                    <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">CMS</div>
                      <div className="text-[11px] text-zinc-500">Manage content</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <button
              onClick={() => handleNavigate('pricing')}
              className={`text-[13px] font-medium transition-colors ${
                currentPage === 'pricing' 
                  ? 'text-white' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Pricing
            </button>

            {/* Resources Dropdown */}
            <div className="relative group h-14 flex items-center">
              <button
                className={`flex items-center gap-1 text-[13px] font-medium transition-colors ${
                  ['marketplace', 'experts', 'community', 'blog', 'support'].includes(currentPage)
                    ? 'text-white' 
                    : 'text-zinc-400 hover:text-white'
                }`}
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                Resources <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
              {resourcesOpen && (
                <div
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-56 bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl p-2 grid gap-1 animate-in fade-in-0 zoom-in-95"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  {/* Marketplace */}
                  <button
                    onClick={() => handleNavigate('marketplace')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 w-full text-left group"
                  >
                    <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
                      <Grid className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">Marketplace</div>
                      <div className="text-[11px] text-zinc-500">Plugins & more</div>
                    </div>
                  </button>
                  {/* Experts */}
                  <button
                    onClick={() => handleNavigate('experts')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 w-full text-left group"
                  >
                    <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">Experts</div>
                      <div className="text-[11px] text-zinc-500">Get pro help</div>
                    </div>
                  </button>
                  {/* Community */}
                  <button
                    onClick={() => handleNavigate('community')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 w-full text-left group"
                  >
                    <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">Community</div>
                      <div className="text-[11px] text-zinc-500">Join the club</div>
                    </div>
                  </button>
                  {/* Blog */}
                  <button
                    onClick={() => handleNavigate('blog')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 w-full text-left group"
                  >
                    <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
                      <Book className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">Blog</div>
                      <div className="text-[11px] text-zinc-500">News & updates</div>
                    </div>
                  </button>
                  {/* Support */}
                  <button
                    onClick={() => handleNavigate('support')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 w-full text-left group"
                  >
                    <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
                      <LifeBuoy className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">Support</div>
                      <div className="text-[11px] text-zinc-500">Get help</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group h-14 flex items-center">
              <button
                className={`flex items-center gap-1 text-[13px] font-medium transition-colors ${
                  ['about', 'careers', 'contact'].includes(currentPage)
                    ? 'text-white' 
                    : 'text-zinc-400 hover:text-white'
                }`}
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
              >
                Company <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
              {companyOpen && (
                <div
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-56 bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl p-2 grid gap-1 animate-in fade-in-0 zoom-in-95"
                  onMouseEnter={() => setCompanyOpen(true)}
                  onMouseLeave={() => setCompanyOpen(false)}
                >
                  {/* About */}
                  <button
                    onClick={() => handleNavigate('about')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 w-full text-left group"
                  >
                    <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">About</div>
                      <div className="text-[11px] text-zinc-500">Our story</div>
                    </div>
                  </button>
                  {/* Careers */}
                  <button
                    onClick={() => handleNavigate('careers')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 w-full text-left group"
                  >
                    <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">Careers</div>
                      <div className="text-[11px] text-zinc-500">Join our team</div>
                    </div>
                  </button>
                  {/* Contact */}
                  <button
                    onClick={() => handleNavigate('contact')}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 w-full text-left group"
                  >
                    <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-white">Contact</div>
                      <div className="text-[11px] text-zinc-500">Get in touch</div>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                {/* Dashboard Button */}
                <button 
                  onClick={handleDashboard}
                  className="flex items-center gap-2 text-[13px] font-medium text-zinc-400 hover:text-white transition-colors px-2 hover:scale-105 transition-transform duration-200"
                >
                  <User className="w-4 h-4" />
                  Dashboard
                </button>
                
                {/* Logout Button */}
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-[13px] font-medium text-zinc-400 hover:text-red-400 transition-colors px-2 hover:scale-105 transition-transform duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Login/Signup for non-authenticated users */}
                <button 
                  onClick={handleLogin}
                  className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors px-2 hover:scale-105 transition-transform duration-200"
                >
                  Log in
                </button>
                <button 
                  onClick={handleSignup}
                  className="bg-white text-black px-3 py-1.5 rounded-md text-[13px] font-semibold hover:bg-zinc-200 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-1 hover:bg-white/10 rounded transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505] border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-6 py-4 space-y-1">
            {/* Product Section */}
            <div className="py-2">
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Product</h3>
              <div className="space-y-1">
                {['features', 'ai', 'templates', 'publish', 'cms'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavigate(item)}
                    className={`block py-2 text-sm font-medium w-full text-left transition-colors duration-200 rounded-lg px-3 ${
                      currentPage === item
                        ? 'text-white bg-white/10'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <button
              onClick={() => handleNavigate('pricing')}
              className={`block py-2 text-sm font-medium w-full text-left transition-colors duration-200 rounded-lg px-3 ${
                currentPage === 'pricing'
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Pricing
            </button>

            {/* Resources Section */}
            <div className="py-2">
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Resources</h3>
              <div className="space-y-1">
                {['marketplace', 'experts', 'community', 'blog', 'support'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavigate(item)}
                    className={`block py-2 text-sm font-medium w-full text-left transition-colors duration-200 rounded-lg px-3 ${
                      currentPage === item
                        ? 'text-white bg-white/10'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Company Section */}
            <div className="py-2">
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Company</h3>
              <div className="space-y-1">
                {['about', 'careers', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavigate(item)}
                    className={`block py-2 text-sm font-medium w-full text-left transition-colors duration-200 rounded-lg px-3 ${
                      currentPage === item
                        ? 'text-white bg-white/10'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              {isAuthenticated ? (
                <>
                  {/* Dashboard Button for Mobile */}
                  <button
                    onClick={handleDashboard}
                    className="flex items-center gap-2 py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left transition-colors duration-200"
                  >
                    <User className="w-4 h-4" />
                    Dashboard
                  </button>
                  
                  {/* Logout Button for Mobile */}
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 py-2 text-sm font-medium text-zinc-400 hover:text-red-400 w-full text-left transition-colors duration-200"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {/* Login/Signup for non-authenticated mobile users */}
                  <button
                    onClick={handleLogin}
                    className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left transition-colors duration-200"
                  >
                    Log in
                  </button>
                  <button
                    onClick={handleSignup}
                    className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-zinc-200 transition-all duration-200 w-full text-center hover:scale-105 active:scale-95"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;