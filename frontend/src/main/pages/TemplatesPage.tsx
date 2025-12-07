import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Loader2, ShoppingCart, Briefcase, Palette, Rocket, BookOpen, User, BarChart3, Code, Home, Heart, GraduationCap } from 'lucide-react';
import { templateApi, projectApi, type Category, type Template } from '../../services/api';
import Footer from '../components/Footer';
import SectionLabel from '../components/ui/SectionLabel';

const categoryIcons: Record<string, any> = {
  ecommerce: ShoppingCart,
  business: Briefcase,
  portfolio: Palette,
  landing: Rocket,
  blog: BookOpen,
  personal: User,
  dashboard: BarChart3,
  saas: Code,
  realestate: Home,
  health: Heart,
  education: GraduationCap,
};

const TemplatesPage: React.FC = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [creatingProject, setCreatingProject] = useState<string | null>(null);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      if (selectedCategory === 'all') {
        loadAllTemplates();
      } else {
        loadTemplatesByCategory(selectedCategory);
      }
    }
  }, [selectedCategory, categories]);

  const loadCategories = async () => {
    try {
      const response = await templateApi.getAllCategories();
      if (response.success) {
        setCategories(response.data);
      }
    } catch (err: any) {
      console.error('Failed to load categories:', err);
      setError(err.message);
    }
  };

  const loadAllTemplates = async () => {
    setLoading(true);
    try {
      const allTemplates: Template[] = [];
      for (const category of categories) {
        const response = await templateApi.getTemplatesByCategory(category.slug);
        if (response.success) {
          allTemplates.push(...response.data);
        }
      }
      setTemplates(allTemplates);
    } catch (err: any) {
      console.error('Failed to load templates:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadTemplatesByCategory = async (category: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await templateApi.getTemplatesByCategory(category);
      if (response.success) {
        setTemplates(response.data);
      }
    } catch (err: any) {
      console.error('Failed to load templates:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectTemplate = async (template: Template) => {
    setCreatingProject(template.slug);
    try {
      // Create project with selected template
      const projectResponse = await projectApi.create({
        name: `${template.name} Project`,
        description: `Project using ${template.name} template`,
        templateCategory: template.category,
        templateSlug: template.slug,
        settings: {}
      });

      if (projectResponse.success && projectResponse.data) {
        // Navigate to editor with project data
        navigate('/editor', { 
          state: { 
            project: projectResponse.data,
            template: template
          }
        });
      } else {
        throw new Error(projectResponse.error || 'Failed to create project');
      }
    } catch (err: any) {
      console.error('Failed to create project:', err);
      alert('Failed to create project: ' + err.message);
    } finally {
      setCreatingProject(null);
    }
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateToTemplates = () => {
    navigate('/templates');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={Layers} text="Template Marketplace" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            Start with a template.
          </h1>
          <p className="text-zinc-400 text-lg mb-12">
            Choose from professionally designed templates across {categories.length} categories
          </p>

          {/* Category Filters */}
          <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-white text-black'
                  : 'bg-[#111] text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              All Templates
            </button>
            {categories.map((category) => {
              const Icon = categoryIcons[category.slug] || Layers;
              return (
                <button
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-2 ${
                    selectedCategory === category.slug
                      ? 'bg-white text-black'
                      : 'bg-[#111] text-zinc-400 hover:text-white border border-white/5'
                  }`}
                >
                  <Icon size={14} />
                  {category.name}
                  <span className="text-[10px] opacity-60">({category.templateCount})</span>
                </button>
              );
            })}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="animate-spin text-zinc-400" size={32} />
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-10">
              <p className="text-red-400">Failed to load templates: {error}</p>
            </div>
          )}

          {/* Template Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {templates.map((template) => {
                const Icon = categoryIcons[template.category] || Layers;
                const isCreating = creatingProject === template.slug;
                
                return (
                  <div
                    key={`${template.category}-${template.slug}`}
                    className="group cursor-pointer"
                    onClick={() => !isCreating && handleSelectTemplate(template)}
                  >
                    <div className="bg-[#111] border border-white/5 aspect-[4/3] rounded-xl overflow-hidden mb-3 relative">
                      {/* Template Preview Placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 opacity-50 group-hover:scale-105 transition-transform duration-500"></div>
                      <div className="absolute inset-4 bg-[#050505] rounded-lg opacity-20"></div>
                      <div className="absolute bottom-4 left-4 right-4 h-1/3 bg-[#050505] rounded opacity-20"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
                        <Icon size={12} className="text-zinc-400" />
                        <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                          {template.category}
                        </span>
                      </div>
                      
                      {/* Loading Overlay */}
                      {isCreating && (
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center">
                          <div className="text-center">
                            <Loader2 className="animate-spin text-white mx-auto mb-2" size={24} />
                            <p className="text-sm text-zinc-300">Creating project...</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-white mb-1">
                          {template.name}
                        </h3>
                        <p className="text-xs text-zinc-500 mb-2">
                          {template.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {template.tags.slice(0, 3).map(tag => (
                            <span
                              key={tag}
                              className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-zinc-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="ml-2">
                        {template.isPremium ? (
                          <span className="text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded">
                            ${template.price}
                          </span>
                        ) : (
                          <span className="text-xs font-medium bg-green-500/20 text-green-400 px-2 py-1 rounded">
                            Free
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && templates.length === 0 && (
            <div className="text-center py-20">
              <Layers className="mx-auto text-zinc-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-zinc-400 mb-2">
                No templates found
              </h3>
              <p className="text-zinc-500">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer 
        navigateTo={(page: string) => navigate(`/${page}`)}
      />
    </div>
  );
};

export default TemplatesPage;