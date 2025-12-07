/**
 * SupportPage.tsx
 * 
 * Help center with search and support categories.
 * Provides access to documentation, community, and contact options.
 * 
 * @component
 */

import React from 'react';
import { LifeBuoy, Book, MessageCircle, Mail, Search } from 'lucide-react';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

interface SupportPageProps {
  navigateTo: (page: string) => void;
}

const SupportPage: React.FC<SupportPageProps> = ({ navigateTo }) => {
  const categories = [
    { icon: Book, title: 'Documentation', desc: 'Guides & Tutorials' },
    { icon: MessageCircle, title: 'Community', desc: 'Ask the forum' },
    { icon: Mail, title: 'Contact', desc: 'Email support' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel icon={LifeBuoy} text="Support" />
          <h1 className="text-5xl font-bold tracking-tighter mb-10">How can we help?</h1>

          {/* Search Bar */}
          <div className="relative mb-16">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full bg-[#111] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
            />
          </div>

          {/* Support Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <button
                key={i}
                className="bg-[#0A0A0A] border border-white/5 p-6 rounded-xl text-left hover:bg-[#111] transition-colors"
              >
                <cat.icon className="w-6 h-6 text-zinc-400 mb-4" />
                <h3 className="font-bold text-sm text-white mb-1">{cat.title}</h3>
                <p className="text-xs text-zinc-500">{cat.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default SupportPage;