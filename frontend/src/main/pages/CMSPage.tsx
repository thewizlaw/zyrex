/**
 * CMSPage.tsx
 * 
 * Displays CMS features including visual editing, multi-user, and API access.
 * Shows three main CMS capabilities in a grid layout.
 * 
 * @component
 */

import React from 'react';
import { FileText, Users, Code } from 'lucide-react';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

interface CMSPageProps {
  navigateTo: (page: string) => void;
}

const CMSPage: React.FC<CMSPageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel icon={FileText} text="CMS" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            Manage content.
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mb-16">
            A powerful CMS that works the way you think. Create, edit, and publish content without
            touching code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6">
              <FileText className="w-5 h-5 text-zinc-400 mb-4" />
              <h3 className="font-bold text-sm mb-2">Visual Editing</h3>
              <p className="text-sm text-zinc-500">
                Edit content directly on your live site with instant preview.
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6">
              <Users className="w-5 h-5 text-zinc-400 mb-4" />
              <h3 className="font-bold text-sm mb-2">Multi-user</h3>
              <p className="text-sm text-zinc-500">
                Collaborate with your team with roles and permissions.
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6">
              <Code className="w-5 h-5 text-zinc-400 mb-4" />
              <h3 className="font-bold text-sm mb-2">API Access</h3>
              <p className="text-sm text-zinc-500">
                Headless CMS with a powerful REST and GraphQL API.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default CMSPage;