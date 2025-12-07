/**
 * BlogPage.tsx
 * 
 * Blog article listings with categories and dates.
 * Displays recent blog posts in a list format.
 * 
 * @component
 */

import React from 'react';
import { Book, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

interface BlogPageProps {
  navigateTo: (page: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ navigateTo }) => {
  const blogPosts = [
    { title: 'Introducing AI Generation 2.0', date: 'Nov 20, 2024', category: 'Product' },
    { title: 'How we built our new CMS', date: 'Nov 15, 2024', category: 'Engineering' },
    { title: 'Design trends for 2025', date: 'Nov 10, 2024', category: 'Design' },
    { title: 'Community spotlight: October', date: 'Nov 1, 2024', category: 'Community' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={Book} text="Blog" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-12">
            News & updates.
          </h1>

          <div className="space-y-4">
            {blogPosts.map((post, i) => (
              <div
                key={i}
                className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 hover:bg-[#111] transition-colors cursor-pointer flex justify-between items-center"
              >
                <div>
                  <span className="text-xs font-bold text-blue-400 mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-lg mb-1">{post.title}</h3>
                  <p className="text-sm text-zinc-500">{post.date}</p>
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

export default BlogPage;