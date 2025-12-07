/**
 * AIPage.tsx
 * 
 * Showcases AI capabilities with 4 main feature cards.
 * Highlights AI generation, smart design, clean code, and fast iteration.
 * 
 * @component
 */

import React from 'react';
import { Sparkles, Zap, Palette, Code, Rocket } from 'lucide-react';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

interface AIPageProps {
  navigateTo: (page: string) => void;
}

const AIPage: React.FC<AIPageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel icon={Sparkles} text="AI" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Set your ideas free.
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mb-16">
            Generate complete sites and advanced components in seconds with AI, so you can skip the
            blank canvas and start designing with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 hover:bg-[#111] transition-colors">
              <Zap className="w-6 h-6 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Instant Generation</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Describe what you want and watch AI build it. Complete layouts, components, and
                content in seconds.
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 hover:bg-[#111] transition-colors">
              <Palette className="w-6 h-6 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Smart Design</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                AI understands your brand and creates cohesive designs that match your vision
                perfectly.
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 hover:bg-[#111] transition-colors">
              <Code className="w-6 h-6 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Clean Code</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Every AI generation produces production-ready, semantic code that developers love.
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 hover:bg-[#111] transition-colors">
              <Rocket className="w-6 h-6 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Iterate Fast</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Refine your designs with natural language. Ask AI to adjust and it adapts in
                real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default AIPage;