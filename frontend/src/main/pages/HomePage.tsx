/**
 * HomePage.tsx
 * 
 * Landing page with hero section and animated elements.
 * Features gradient background, floating cards, and CTA buttons.
 * 
 * @component
 */

import React from 'react';
import { Play, Sparkles, Code } from 'lucide-react';
import Footer from '../components/Footer';
import CenteredLabel from '../components/ui/CenteredLabel';
import PrimaryButton from '../components/ui/PrimaryButton';
import SecondaryButton from '../components/ui/SecondaryButton';

interface HomePageProps {
  navigateTo: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 min-h-screen flex flex-col items-center justify-center">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-1800/80 via-black to-indigo-900/20 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <CenteredLabel text="Last week: Ticker Effect" />

          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.9] text-white">
              Build better <br />
              sites, <span className="text-zinc-500">faster.</span>
            </h1>
          </div>

          <p
            className="text-lg text-zinc-400 mb-10 max-w-lg mx-auto leading-relaxed tracking-tight animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            The site builder trusted by modern startups. Design fast and scale with an integrated
            CMS, SEO, and more.
          </p>

          <div
            className="flex items-center justify-center gap-3 mb-20 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <PrimaryButton>Start for free</PrimaryButton>
            <SecondaryButton>
              <Play className="w-3 h-3 fill-current" />
              Watch video
            </SecondaryButton>
          </div>

          {/* Preview Mockup */}
          <div
            className="relative max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-xl blur-sm opacity-50"></div>
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl aspect-[16/9] overflow-hidden relative flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 shadow-lg shadow-purple-900/20"></div>
                <div className="h-2 w-32 bg-zinc-800 rounded-full mx-auto mb-2"></div>
                <div className="h-2 w-20 bg-zinc-900 rounded-full mx-auto"></div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute top-8 left-8 p-3 bg-[#111] border border-white/5 rounded-lg shadow-xl flex gap-3 items-center animate-float">
                <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </div>
                <div className="space-y-1">
                  <div className="w-16 h-1.5 bg-zinc-700 rounded-full"></div>
                  <div className="w-10 h-1.5 bg-zinc-800 rounded-full"></div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div
                className="absolute bottom-8 right-8 p-3 bg-[#111] border border-white/5 rounded-lg shadow-xl flex gap-3 items-center animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
                  <Code className="w-4 h-4 text-purple-400" />
                </div>
                <div className="space-y-1">
                  <div className="w-20 h-1.5 bg-zinc-700 rounded-full"></div>
                  <div className="w-12 h-1.5 bg-zinc-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default HomePage;