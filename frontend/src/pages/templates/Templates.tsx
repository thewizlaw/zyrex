import React, { useState } from 'react';
import { 
  Sparkles, ArrowLeft, Search, 
  Zap, Monitor, ArrowRight 
} from 'lucide-react';

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  // Categories will be populated from your data source
  const CATEGORIES = ["All"];

  // Templates will be fetched from your API or data source
  const filteredTemplates: any[] = [];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-200 font-sans selection:bg-blue-500/30 flex flex-col">
      
      {/* --- Navigation Bar --- */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Left: Back & Brand */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back
            </a>
            <div className="h-4 w-[1px] bg-zinc-800"></div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center shadow-lg shadow-blue-900/20">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="font-bold tracking-tight">Zhyrex</span>
            </div>
          </div>

          {/* Center: Search */}
          <div className="hidden md:flex items-center w-96 relative group">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search templates..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 pl-10 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600"
            />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex text-sm text-zinc-400 hover:text-white transition-colors">
               My Templates
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Blank Project</span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <div className="relative border-b border-zinc-800 bg-[#0F0F0F]">
        <div className="max-w-[1600px] mx-auto px-6 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Start with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Template</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Choose from our curated collection of high-performance templates or describe your vision to generate a custom site instantly.
          </p>
        </div>
        
        {/* Category Pills - Floating on border */}
        <div className="max-w-[1600px] mx-auto px-6 pb-6">
            <div className="flex items-center justify-center gap-2 flex-wrap">
                {CATEGORIES.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                            selectedCategory === category 
                            ? 'bg-zinc-100 text-black border-zinc-100' 
                            : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* --- Main Grid --- */}
      <div className="flex-1 bg-[#0A0A0A] p-6 md:p-8">
        <div className="max-w-[1600px] mx-auto">
            
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                
                {/* Custom Build Card (First item) */}
                <div className="group relative aspect-[4/3] rounded-xl border border-dashed border-zinc-700 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-blue-500/50 transition-all cursor-pointer flex flex-col items-center justify-center text-center p-6 overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-900/30 group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">AI Custom Build</h3>
                    <p className="text-sm text-zinc-400 mb-6">
                        Describe your dream site and watch it come to life.
                    </p>
                    <span className="text-blue-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Generate Now <ArrowRight className="w-4 h-4" />
                    </span>
                </div>

                {/* Template Cards will be rendered here when data is available */}
                {filteredTemplates.map((template) => (
                    <TemplateCard 
                        key={template.id} 
                        template={template} 
                        isHovered={hoveredId === template.id}
                        onHover={setHoveredId}
                    />
                ))}
            </div>

            {/* No Results */}
            {filteredTemplates.length === 0 && (
                <div className="col-span-full py-20 text-center">
                    <p className="text-zinc-500 text-lg">No templates found</p>
                    <button 
                        onClick={() => {setSelectedCategory("All"); setSearchQuery("");}}
                        className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

// TemplateCard component for rendering individual templates
function TemplateCard({ template, isHovered, onHover }) {
  return (
    <div 
      className="group flex flex-col gap-3"
      onMouseEnter={() => onHover(template.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Card Image Container */}
      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors cursor-pointer">
        {/* Image will be loaded from template data */}
        <img 
          src={template.image} 
          alt={template.name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />

        {/* Hover Actions Overlay */}
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center gap-3 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-200 hover:scale-105 active:scale-95">
                Use Template
            </button>
            <button className="bg-zinc-800/80 text-white p-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-zinc-700 border border-zinc-600">
                <Monitor className="w-4 h-4" />
            </button>
        </div>

        {/* Category Tag (Top Left) */}
        <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-medium uppercase tracking-wider text-zinc-300">
            {template.category}
        </div>
      </div>

      {/* Card Info */}
      <div className="flex justify-between items-start px-1">
        <div>
            <h3 className="text-white font-semibold text-base leading-snug group-hover:text-blue-400 transition-colors cursor-pointer">
                {template.name}
            </h3>
            <div className="flex flex-wrap gap-2 mt-1.5">
                {template.tags?.map(tag => (
                    <span key={tag} className="text-[11px] text-zinc-500">#{tag}</span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}