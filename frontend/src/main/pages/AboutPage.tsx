/**
 * AboutPage.tsx
 * 
 * Company story, mission, and values.
 * Provides information about the company's background and principles.
 * 
 * @component
 */

import React from 'react';
import { Heart, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

interface AboutPageProps {
  navigateTo: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel icon={Heart} text="About" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Our story.</h1>
          <p className="text-lg text-zinc-400 mb-12">
            We're building the future of web design. A platform where creativity meets technology,
            where ideas become reality in seconds, and where designers and developers work in
            perfect harmony.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-3">Mission</h2>
              <p className="text-zinc-400 leading-relaxed">
                To empower everyone to build beautiful, performant websites without compromise. We
                believe great design should be accessible, and powerful tools should be simple.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Values</h2>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" /> Design-first thinking
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" /> Obsessive attention to detail
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" /> Community-driven development
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" /> Radical transparency
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default AboutPage;