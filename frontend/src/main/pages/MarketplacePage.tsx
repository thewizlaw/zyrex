/**
 * MarketplacePage.tsx
 * 
 * Displays extensions marketplace with plugins and components.
 * Grid layout showing available marketplace items with pricing.
 * 
 * @component
 */

import React from 'react';
import { Grid } from 'lucide-react';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

interface MarketplacePageProps {
  navigateTo: (page: string) => void;
}

const MarketplacePage: React.FC<MarketplacePageProps> = ({ navigateTo }) => {
  const marketplaceItems = [
    { name: 'Animated Gradients', type: 'Component', price: 'Free' },
    { name: 'JSON Sync', type: 'Plugin', price: 'Free' },
    { name: 'Hover Zoom', type: 'Component', price: '$9' },
    { name: 'Image Slider', type: 'Component', price: 'Free' },
    { name: 'Advanced Forms', type: 'Plugin', price: '$19' },
    { name: 'Analytics Pro', type: 'Plugin', price: '$29' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={Grid} text="Marketplace" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-12">
            Extend your toolkit.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketplaceItems.map((item, i) => (
              <div
                key={i}
                className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 hover:bg-[#111] transition-colors cursor-pointer"
              >
                <div className="w-full aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg mb-4"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-sm">{item.name}</h3>
                    <p className="text-xs text-zinc-500">{item.type}</p>
                  </div>
                  <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default MarketplacePage;