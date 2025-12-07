/**
 * CommunityPage.tsx
 * 
 * Community hub with social media links.
 * Encourages users to join Discord and Twitter communities.
 * 
 * @component
 */

import React from 'react';
import { Users, MessageCircle } from 'lucide-react';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

interface CommunityPageProps {
  navigateTo: (page: string) => void;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6 text-center">
        <SectionLabel icon={Users} text="Community" />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
          Join the movement.
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
          Connect with 50,000+ designers and developers building the future of the web.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] rounded-xl font-bold text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Discord
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-[#1DA1F2] hover:bg-[#1a91da] rounded-xl font-bold text-sm transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default CommunityPage;