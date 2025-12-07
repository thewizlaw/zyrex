/**
 * FeaturesPage.tsx
 * 
 * Displays product features in a grid layout.
 * 9 feature cards with icons and descriptions.
 * 
 * @component
 */

import React from 'react';
import {
  Sparkles,
  Grid,
  Layers,
  Palette,
  Code,
  Smartphone,
  Globe,
  Terminal,
  BarChart3,
  Star
} from 'lucide-react';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

interface FeaturesPageProps {
  navigateTo: (page: string) => void;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ navigateTo }) => {
  const features = [
    { icon: Sparkles, title: 'AI Generation', description: 'Instantly create complete sites.' },
    { icon: Grid, title: 'Smart Layouts', description: 'Auto-optimized business layouts.' },
    { icon: Layers, title: 'Components', description: 'Thousands of pre-built blocks.' },
    { icon: Palette, title: 'Visual Editor', description: 'Modern canvas for modern design.' },
    { icon: Code, title: 'Global Styles', description: 'Update brand systems instantly.' },
    { icon: Smartphone, title: 'Responsive', description: 'Perfect on every viewport.' },
    { icon: Globe, title: 'Global CDN', description: 'Publish to the edge instantly.' },
    { icon: Terminal, title: 'Code Export', description: 'Clean React/HTML export.' },
    { icon: BarChart3, title: 'Analytics', description: 'Privacy-first tracking built-in.' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <SectionLabel icon={Star} text="Features" />
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              Everything you need.
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl">
              A complete toolkit for the modern web. Design, ship, and scale without hitting a
              wall.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 hover:bg-[#111] transition-colors group"
              >
                <feature.icon className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors mb-4" />
                <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default FeaturesPage;