/**
 * PricingPage.tsx
 * 
 * Displays three-tier pricing with feature comparison.
 * Includes Starter (free), Pro ($29), and Team ($79) plans.
 * 
 * @component
 */

import React from 'react';
import { Zap, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

interface PricingPageProps {
  navigateTo: (page: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionLabel icon={Zap} text="Pricing" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Simple pricing.
          </h1>
          <p className="text-zinc-400 text-lg">
            Start for free, upgrade when you're ready to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-base font-bold text-white">Starter</h3>
              <p className="text-xs text-zinc-500 mt-1">For hobby projects</p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold tracking-tight">$0</span>
            </div>
            <button className="w-full py-2.5 bg-[#151515] hover:bg-[#202020] text-white rounded-lg text-xs font-bold border border-white/5 transition-all mb-8">
              Start Building
            </button>
            <ul className="space-y-3 text-xs text-zinc-400 flex-1">
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-zinc-600" /> 1 Project
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-zinc-600" /> AI Generator
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-zinc-600" /> Subdomain publishing
              </li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#0F0F0F] border border-blue-500/30 rounded-xl p-6 flex flex-col relative shadow-[0_0_30px_rgba(59,130,246,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              Popular
            </div>
            <div className="mb-4">
              <h3 className="text-base font-bold text-white">Pro</h3>
              <p className="text-xs text-zinc-500 mt-1">For professionals</p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold tracking-tight">$29</span>
              <span className="text-zinc-500 text-xs ml-1">/mo</span>
            </div>
            <button className="w-full py-2.5 bg-white text-black hover:bg-zinc-200 rounded-lg text-xs font-bold transition-all mb-8">
              Get Pro
            </button>
            <ul className="space-y-3 text-xs text-zinc-300 flex-1">
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" /> Unlimited Projects
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" /> Custom Domains
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" /> Code Export
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" /> No Branding
              </li>
            </ul>
          </div>

          {/* Team Plan */}
          <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-base font-bold text-white">Team</h3>
              <p className="text-xs text-zinc-500 mt-1">For collaboration</p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold tracking-tight">$79</span>
              <span className="text-zinc-500 text-xs ml-1">/mo</span>
            </div>
            <button className="w-full py-2.5 bg-[#151515] hover:bg-[#202020] text-white rounded-lg text-xs font-bold border border-white/5 transition-all mb-8">
              Contact Sales
            </button>
            <ul className="space-y-3 text-xs text-zinc-400 flex-1">
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-zinc-600" /> Everything in Pro
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-zinc-600" /> Shared Workspace
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-zinc-600" /> Comments & Roles
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default PricingPage;