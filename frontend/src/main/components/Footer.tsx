/**
 * Footer.tsx
 * 
 * Site-wide footer with navigation links, social media, and branding.
 * Contains multiple columns with categorized links.
 * 
 * @component
 */

import React from 'react';

interface FooterProps {
  navigateTo: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand Section */}
          <div className="col-span-2 pr-8">
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
              <span className="text-base font-bold tracking-tight">Zhyrex</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500 text-xs mb-4">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              All systems operational
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded bg-zinc-900 border border-white/5 hover:border-white/20 transition-colors"></div>
              <div className="w-8 h-8 rounded bg-zinc-900 border border-white/5 hover:border-white/20 transition-colors"></div>
              <div className="w-8 h-8 rounded bg-zinc-900 border border-white/5 hover:border-white/20 transition-colors"></div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-medium text-sm mb-4 text-white">Product</h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => navigateTo('features')}
                  className="text-xs text-zinc-500 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('templates')}
                  className="text-xs text-zinc-500 hover:text-white transition-colors"
                >
                  Templates
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('pricing')}
                  className="text-xs text-zinc-500 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-medium text-sm mb-4 text-white">Resources</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">
                  Inspiration
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('community')}
                  className="text-xs text-zinc-500 hover:text-white transition-colors"
                >
                  Community
                </button>
              </li>
              <li>
                <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-medium text-sm mb-4 text-white">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-medium text-sm mb-4 text-white">Support</h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => navigateTo('support')}
                  className="text-xs text-zinc-500 hover:text-white transition-colors"
                >
                  Help Center
                </button>
              </li>
              <li>
                <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-zinc-600 text-xs">© 2024 Zhyrex Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;