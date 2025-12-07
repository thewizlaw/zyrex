/**
 * CareersPage.tsx
 * 
 * Job listings and career opportunities.
 * Displays available positions with location and employment type.
 * 
 * @component
 */

import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

interface CareersPageProps {
  navigateTo: (page: string) => void;
}

const CareersPage: React.FC<CareersPageProps> = ({ navigateTo }) => {
  const jobs = [
    { title: 'Senior Frontend Engineer', location: 'Remote', type: 'Full-time' },
    { title: 'Product Designer', location: 'Remote', type: 'Full-time' },
    { title: 'DevRel Engineer', location: 'Remote', type: 'Full-time' },
    { title: 'Marketing Lead', location: 'San Francisco', type: 'Full-time' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel icon={TrendingUp} text="Careers" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Join our team.</h1>
          <p className="text-lg text-zinc-400 mb-12">
            We're looking for talented people who want to shape the future of web design.
          </p>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 hover:bg-[#111] transition-colors cursor-pointer flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold text-lg mb-2">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-zinc-500">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default CareersPage;