/**
 * ExpertsPage.tsx
 * 
 * Displays vetted expert professionals available for hire.
 * Grid of expert profile cards with ratings and contact options.
 * 
 * @component
 */

import React from 'react';
import { Star } from 'lucide-react';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

interface ExpertsPageProps {
  navigateTo: (page: string) => void;
}

const ExpertsPage: React.FC<ExpertsPageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel icon={Star} text="Experts" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Get pro help from handpicked experts.
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mb-12">
            Connect with vetted professionals who can bring your vision to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 hover:bg-[#111] transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4"></div>
                <h3 className="font-bold mb-1">Expert Name {item}</h3>
                <p className="text-sm text-zinc-500 mb-3">Design Agency</p>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <button className="w-full py-2 bg-white text-black rounded-lg text-xs font-bold hover:bg-zinc-200 transition-colors">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default ExpertsPage;