/**
 * ContactPage.tsx
 * 
 * Contact information organized by department.
 * Displays email addresses for sales, support, and press inquiries.
 * 
 * @component
 */

import React from 'react';
import { Mail } from 'lucide-react';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

interface ContactPageProps {
  navigateTo: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionLabel icon={Mail} text="Contact" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Get in touch.</h1>
          <p className="text-lg text-zinc-400 mb-12">
            Have a question? Want to partner? We'd love to hear from you.
          </p>

          <div className="space-y-4">
            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6">
              <h3 className="font-bold mb-4">Sales</h3>
              <a
                href="mailto:sales@aiwebgen.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                sales@aiwebgen.com
              </a>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6">
              <h3 className="font-bold mb-4">Support</h3>
              <a
                href="mailto:support@aiwebgen.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                support@aiwebgen.com
              </a>
            </div>

            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6">
              <h3 className="font-bold mb-4">Press</h3>
              <a
                href="mailto:press@aiwebgen.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                press@aiwebgen.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default ContactPage;