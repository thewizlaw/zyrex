import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

interface Template {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  prompt: string;
}

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  const handleUseTemplate = () => {
    // Store the template prompt in localStorage to pre-fill the builder
    localStorage.setItem('templatePrompt', template.prompt);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative overflow-hidden">
        <div className="w-full h-48 bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
          <Sparkles className="w-12 h-12 text-white opacity-80" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {template.name}
            </h3>
            <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-sm font-medium rounded-full">
              {template.category}
            </span>
          </div>
          <Sparkles className="w-6 h-6 text-violet-600 flex-shrink-0" />
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {template.description}
        </p>
        
        <Link
          to="/builder"
          onClick={handleUseTemplate}
          className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 group/btn"
        >
          Use This Template
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default TemplateCard;