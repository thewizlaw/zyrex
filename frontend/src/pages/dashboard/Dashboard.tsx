import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Plus, Settings, User, ChevronDown, 
  LayoutGrid, Folder, Archive, MessageSquare, 
  MoreHorizontal, Users, Bell, FileText, LogOut, Grid3X3,
  Loader2
} from 'lucide-react';
import { projectApi, type Project as ApiProject, templateApi } from '../../services/api';
import { authService } from '../../services/auth';

interface Project {
  id: string;
  name: string;
  image: string | null;
  updatedAt: Date;
  badge: string | null;
  templateCategory: string;
  templateSlug: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [sortBy, setSortBy] = useState('Last viewed by me');
  const [user, setUser] = useState({ name: 'User' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserProjects();
    fetchUserProfile();
  }, []);

  const fetchUserProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await projectApi.getAll();
      
      if (response.success && response.data) {
        const transformedProjects: Project[] = response.data.map((project: ApiProject) => ({
          id: project._id,
          name: project.name,
          image: null,
          updatedAt: new Date(project.updatedAt),
          badge: null,
          templateCategory: project.templateCategory,
          templateSlug: project.templateSlug,
        }));
        
        setProjects(transformedProjects);
      } else {
        setError('Failed to load projects');
      }
    } catch (err: any) {
      console.error('Error fetching projects:', err);
      setError(err.message || 'Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const userName = authService.getUserFromToken()?.name || 'User';
      setUser({ name: userName });
    } catch (err) {
      console.error('Error fetching user profile:', err);
    }
  };

  const handleCreateProject = async () => {
    try {
      const newProject = await projectApi.create({
        name: 'Untitled Project',
        templateCategory: 'business',
        templateSlug: 'default',
        settings: {}
      });

      if (newProject.success) {
        fetchUserProjects();
      }
    } catch (err) {
      console.error('Error creating project:', err);
      setError('Failed to create project');
    }
  };

  const handleOpenProject = async (project: Project) => {
    try {
      console.log('🔓 Opening project:', project.name);
      setLoading(true);
      
      // Fetch full project details
      const projectResponse = await projectApi.getById(project.id);
      
      if (!projectResponse.success || !projectResponse.data) {
        throw new Error('Failed to load project details');
      }
      
      // Fetch template details
      const templateResponse = await templateApi.getTemplateDetails(
        project.templateCategory, 
        project.templateSlug
      );
      
      if (!templateResponse.success || !templateResponse.data) {
        throw new Error('Failed to load template details');
      }
      
      console.log('✅ Project and template loaded successfully');
      
      // Navigate to editor with project and template data
      navigate('/editor', {
        state: {
          project: projectResponse.data,
          template: templateResponse.data
        }
      });
    } catch (err: any) {
      console.error('❌ Error opening project:', err);
      setError(err.message || 'Failed to open project');
      setLoading(false);
    }
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#0A0A0A] text-zinc-400 font-sans selection:bg-blue-500/30">
      
      {/* SIDEBAR */}
      <aside className="w-[240px] flex flex-col border-r border-zinc-800/50 bg-[#0A0A0A] shrink-0">
        <div className="h-14 flex items-center px-4 border-b border-zinc-800/50 hover:bg-zinc-900/30 cursor-pointer transition-colors group">
          <div className="w-6 h-6 bg-blue-500 rounded text-white flex items-center justify-center text-xs font-bold mr-3">
            {user?.name?.[0] || 'U'}
          </div>
          <span className="text-sm font-medium text-zinc-300 flex-1 truncate">
            {user?.name}'s Workspace
          </span>
          <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400 transition-colors" />
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          <div className="space-y-0.5">
            <SidebarItem icon={<User size={16} />} label="Account" />
            <SidebarItem icon={<Settings size={16} />} label="Settings" />
            <SidebarItem icon={<Bell size={16} />} label="Updates" />
            <SidebarItem icon={<MessageSquare size={16} />} label="Contact" />
          </div>

          <div>
            <div className="px-2 mb-2 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
              Projects
            </div>
            <div className="space-y-0.5">
              <SidebarItem icon={<LayoutGrid size={16} />} label="All" active />
              <SidebarItem icon={<Archive size={16} />} label="Archive" />
              <SidebarItem icon={<Plus size={16} />} label="New Folder..." />
            </div>
          </div>
        </nav>

        <div className="p-3 border-t border-zinc-800/50">
          <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-zinc-900/50 text-sm transition-colors group">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-semibold">
              {user?.name?.[0] || 'U'}
            </div>
            <div className="text-left flex-1 min-w-0">
              <div className="text-zinc-300 font-medium text-sm truncate">{user?.name}</div>
              <div className="text-zinc-500 text-xs">Free Plan</div>
            </div>
            <LogOut className="w-4 h-4 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#141414]">
        <header className="h-14 border-b border-zinc-800/50 flex items-center justify-between px-6 bg-[#0A0A0A]">
          <div className="flex-1 max-w-md">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-zinc-500" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full bg-[#1A1A1A] border border-zinc-800 focus:border-zinc-700 text-zinc-300 rounded-md py-1.5 pl-9 pr-3 text-sm placeholder-zinc-600 focus:outline-none transition-all"
                placeholder="Search projects..."
              />
            </div>
          </div>

          <div className="flex items-center gap-2 ml-6">
            <button className="flex items-center gap-2 px-3 py-1.5 text-zinc-400 hover:text-zinc-300 text-sm font-medium transition-colors">
              <Users size={16} />
              <span className="hidden sm:inline">1</span>
            </button>
            <button className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 text-zinc-300 rounded-md text-sm font-medium transition-colors">
              Invite Member
            </button>
            <button 
              onClick={handleCreateProject}
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-colors"
            >
              <Plus size={16} />
              New Project
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-6 border-b border-zinc-800/50 bg-[#0A0A0A]">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-white mb-1">All Projects</h1>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 transition-colors">
                    {sortBy}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <span className="text-sm text-zinc-500">
                    {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 text-zinc-400 hover:text-zinc-300 text-sm transition-colors">
                  <Grid3X3 size={16} />
                  <span>Browse Templates</span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-blue-500 animate-spin mb-4" />
                <p className="text-zinc-400">Loading projects...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="text-red-400 mb-4">Error: {error}</div>
                <button 
                  onClick={fetchUserProjects}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-zinc-500" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">No projects found</h3>
                <p className="text-zinc-400 mb-6 max-w-md">
                  {searchTerm ? 'No projects match your search. Try different keywords.' : 'Get started by creating your first project.'}
                </p>
                <button 
                  onClick={handleCreateProject}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-colors"
                >
                  <Plus size={16} />
                  Create Your First Project
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProjects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project}
                    onOpen={() => handleOpenProject(project)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleProjectSettings = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Open settings for:', project.id);
  };

  return (
    <div 
      className="group relative flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpen}
    >
      <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-[#1A1A1A] border border-zinc-800 group-hover:border-zinc-700 transition-all relative">
        {project.image ? (
          <>
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
            {isHovered && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity">
                <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-100 transition-colors">
                  Open Project
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600 gap-2">
            <FileText className="w-10 h-10" />
            <span className="text-sm font-medium">{project.name}</span>
          </div>
        )}
        
        {isHovered && (
          <>
            <div className="absolute top-3 left-3 w-5 h-5 rounded border-2 border-zinc-500 bg-zinc-900/80 hover:bg-zinc-800 flex items-center justify-center transition-colors" />
            <button 
              onClick={handleProjectSettings}
              className="absolute top-3 right-3 w-7 h-7 rounded bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 flex items-center justify-center transition-colors"
            >
              <MoreHorizontal size={16} className="text-zinc-400" />
            </button>
          </>
        )}
      </div>

      <div className="flex items-start justify-between mt-3 px-1">
        <div className="flex-1 min-w-0">
          <h3 className="text-zinc-300 font-medium text-sm leading-tight mb-1 truncate">
            {project.name}
          </h3>
          <p className="text-zinc-500 text-xs">
            Updated {formatDate(project.updatedAt)}
          </p>
        </div>
        {project.badge && (
          <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-semibold text-zinc-400 bg-zinc-800 border border-zinc-700">
            {project.badge}
          </span>
        )}
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false, count = null }: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
  count?: number | null;
}) {
  return (
    <button 
      className={`
        w-full flex items-center justify-between px-2 py-1.5 rounded-md text-sm transition-all group
        ${active 
          ? 'bg-zinc-800/80 text-white font-medium' 
          : 'text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-300'
        }
      `}
    >
      <div className="flex items-center gap-3">
        <span className={`${active ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-400'} transition-colors`}>
          {icon}
        </span>
        <span>{label}</span>
      </div>
      {count && (
        <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
          {count}
        </span>
      )}
    </button>
  );
}

function formatDate(date: Date): string {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  
  if (diffHours < 24) {
    return `about ${diffHours} hours ago`;
  } else if (diffDays === 1) {
    return '1 day ago';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else {
    return date.toLocaleDateString();
  }
}