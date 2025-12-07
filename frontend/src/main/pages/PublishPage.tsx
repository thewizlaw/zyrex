/**
 * PublishPage.tsx
 * 
 * Showcases publishing features including CDN, SSL, and custom domains.
 * Displays three main publishing benefits in card format.
 * 
 * @component
 */

import React from 'react';
import { Rocket, Globe, Lock, Zap } from 'lucide-react';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

interface PublishPageProps {
  navigateTo: (page: string) => void;
}

const PublishPage: React.FC<PublishPageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel icon={Rocket} text="Publish" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Launch instantly.
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mb-16">
            Deploy to our global CDN with one click. Custom domains, SSL, and blazing-fast
            performance included.
          </p>

          <div className="space-y-4">
            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Global CDN</h3>
                <p className="text-sm text-zinc-400">
                  Lightning-fast performance in every region with edge deployment.
                </p>
              </div>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Free SSL</h3>
                <p className="text-sm text-zinc-400">
                  Automatic HTTPS for all your sites. Security built-in from day one.
                </p>
              </div>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Custom Domains</h3>
                <p className="text-sm text-zinc-400">
                  Connect your domain in seconds. No complex configuration required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default PublishPage;