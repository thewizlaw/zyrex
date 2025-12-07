// import React, { useState, useEffect } from 'react';
// import { 
//   Sparkles, 
//   Zap, 
//   Code, 
//   Palette, 
//   Shield, 
//   Globe, 
//   ArrowRight,
//   CheckCircle,
//   Star,
//   Users,
//   Rocket,
//   ChevronDown,
//   Play,
//   Grid,
//   FileText,
//   Layers,
//   Book,
//   MessageCircle,
//   LifeBuoy,
//   Menu,
//   X,
//   Search,
//   Mail,
//   HelpCircle,
//   Lock,
//   BarChart3,
//   Terminal,
//   Smartphone,
//   Heart,
//   TrendingUp
// } from 'lucide-react';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [scrolled, setScrolled] = useState(false);
//   const [productOpen, setProductOpen] = useState(false);
//   const [resourcesOpen, setResourcesOpen] = useState(false);
//   const [companyOpen, setCompanyOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navigateTo = (page) => {
//     setCurrentPage(page);
//     setMobileMenuOpen(false);
//     window.scrollTo(0, 0);
//   };

//   // --- Shared Components ---

//   const SectionLabel = ({ icon: Icon, text }) => (
//     <div className="inline-flex items-center gap-1.5 mb-6">
//       {Icon && <Icon className="w-3 h-3 text-white" />}
//       <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{text}</span>
//     </div>
//   );

//   const CenteredLabel = ({ text }) => (
//     <div className="flex justify-center mb-8 animate-fade-in">
//       <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{text}</span>
//     </div>
//   );

//   const PrimaryButton = ({ children, onClick }) => (
//     <button 
//       onClick={onClick}
//       className="bg-white text-black h-10 px-5 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
//     >
//       {children}
//     </button>
//   );

//   const SecondaryButton = ({ children, onClick }) => (
//     <button 
//       onClick={onClick}
//       className="bg-zinc-900 text-white border border-zinc-800 h-10 px-5 rounded-lg text-sm font-medium hover:bg-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
//     >
//       {children}
//     </button>
//   );

//   // --- Navigation ---
//   const Navigation = () => (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex justify-between items-center h-14">
//           {/* Logo */}
//           <button onClick={() => navigateTo('home')} className="flex items-center gap-2">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12 2L2 7L12 12L22 7L12 2Z" />
//               <path d="M2 17L12 22L22 17" />
//               <path d="M2 12L12 17L22 12" />
//             </svg>
//           </button>

//           {/* Desktop Links */}
//           <div className="hidden lg:flex items-center gap-6">
//             <div className="relative group h-14 flex items-center">
//               <button 
//                 className="flex items-center gap-1 text-[13px] font-medium text-zinc-400 hover:text-white transition-colors"
//                 onMouseEnter={() => setProductOpen(true)}
//                 onMouseLeave={() => setProductOpen(false)}
//               >
//                 Product <ChevronDown className="w-3 h-3 opacity-50" />
//               </button>
//               {productOpen && (
//                 <div 
//                   className="absolute top-10 left-1/2 -translate-x-1/2 w-56 bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl p-2 grid gap-1"
//                   onMouseEnter={() => setProductOpen(true)}
//                   onMouseLeave={() => setProductOpen(false)}
//                 >
//                   <button onClick={() => navigateTo('features')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors w-full text-left group">
//                     <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
//                       <Grid className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium text-white">Features</div>
//                       <div className="text-[11px] text-zinc-500">The full toolkit</div>
//                     </div>
//                   </button>
//                   <button onClick={() => navigateTo('ai')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors w-full text-left group">
//                     <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
//                       <Sparkles className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium text-white">AI</div>
//                       <div className="text-[11px] text-zinc-500">Set your ideas free</div>
//                     </div>
//                   </button>
//                   <button onClick={() => navigateTo('templates')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors w-full text-left group">
//                     <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
//                       <Layers className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium text-white">Templates</div>
//                       <div className="text-[11px] text-zinc-500">Start faster</div>
//                     </div>
//                   </button>
//                   <button onClick={() => navigateTo('publish')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors w-full text-left group">
//                     <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
//                       <Rocket className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium text-white">Publish</div>
//                       <div className="text-[11px] text-zinc-500">Launch instantly</div>
//                     </div>
//                   </button>
//                   <button onClick={() => navigateTo('cms')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors w-full text-left group">
//                     <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
//                       <FileText className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium text-white">CMS</div>
//                       <div className="text-[11px] text-zinc-500">Manage content</div>
//                     </div>
//                   </button>
//                 </div>
//               )}
//             </div>

//             <button onClick={() => navigateTo('pricing')} className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors">
//               Pricing
//             </button>
            
//             <div className="relative group h-14 flex items-center">
//               <button 
//                 className="flex items-center gap-1 text-[13px] font-medium text-zinc-400 hover:text-white transition-colors"
//                 onMouseEnter={() => setResourcesOpen(true)}
//                 onMouseLeave={() => setResourcesOpen(false)}
//               >
//                 Resources <ChevronDown className="w-3 h-3 opacity-50" />
//               </button>
//               {resourcesOpen && (
//                 <div 
//                   className="absolute top-10 left-1/2 -translate-x-1/2 w-56 bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl p-2 grid gap-1"
//                   onMouseEnter={() => setResourcesOpen(true)}
//                   onMouseLeave={() => setResourcesOpen(false)}
//                 >
//                   <button onClick={() => navigateTo('marketplace')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors w-full text-left group">
//                     <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
//                       <Grid className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium text-white">Marketplace</div>
//                       <div className="text-[11px] text-zinc-500">Plugins & more</div>
//                     </div>
//                   </button>
//                   <button onClick={() => navigateTo('experts')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors w-full text-left group">
//                     <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
//                       <Star className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium text-white">Experts</div>
//                       <div className="text-[11px] text-zinc-500">Get pro help</div>
//                     </div>
//                   </button>
//                   <button onClick={() => navigateTo('community')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors w-full text-left group">
//                     <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
//                       <Users className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium text-white">Community</div>
//                       <div className="text-[11px] text-zinc-500">Join the club</div>
//                     </div>
//                   </button>
//                   <button onClick={() => navigateTo('blog')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors w-full text-left group">
//                     <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
//                       <Book className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium text-white">Blog</div>
//                       <div className="text-[11px] text-zinc-500">News & updates</div>
//                     </div>
//                   </button>
//                   <button onClick={() => navigateTo('support')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors w-full text-left group">
//                     <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
//                       <LifeBuoy className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium text-white">Support</div>
//                       <div className="text-[11px] text-zinc-500">Get help</div>
//                     </div>
//                   </button>
//                 </div>
//               )}
//             </div>

//             <div className="relative group h-14 flex items-center">
//               <button 
//                 className="flex items-center gap-1 text-[13px] font-medium text-zinc-400 hover:text-white transition-colors"
//                 onMouseEnter={() => setCompanyOpen(true)}
//                 onMouseLeave={() => setCompanyOpen(false)}
//               >
//                 Company <ChevronDown className="w-3 h-3 opacity-50" />
//               </button>
//               {companyOpen && (
//                 <div 
//                   className="absolute top-10 left-1/2 -translate-x-1/2 w-56 bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl p-2 grid gap-1"
//                   onMouseEnter={() => setCompanyOpen(true)}
//                   onMouseLeave={() => setCompanyOpen(false)}
//                 >
//                   <button onClick={() => navigateTo('about')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors w-full text-left group">
//                     <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
//                       <Heart className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium text-white">About</div>
//                       <div className="text-[11px] text-zinc-500">Our story</div>
//                     </div>
//                   </button>
//                   <button onClick={() => navigateTo('careers')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors w-full text-left group">
//                     <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
//                       <TrendingUp className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium text-white">Careers</div>
//                       <div className="text-[11px] text-zinc-500">Join our team</div>
//                     </div>
//                   </button>
//                   <button onClick={() => navigateTo('contact')} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors w-full text-left group">
//                     <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center group-hover:bg-black transition-colors border border-white/5">
//                       <Mail className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium text-white">Contact</div>
//                       <div className="text-[11px] text-zinc-500">Get in touch</div>
//                     </div>
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Actions */}
//           <div className="hidden lg:flex items-center gap-3">
//             <button className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors px-2">
//               Log in
//             </button>
//             <button className="bg-white text-black px-3 py-1.5 rounded-md text-[13px] font-semibold hover:bg-zinc-200 transition-all">
//               Sign Up
//             </button>
//           </div>

//           <button 
//             className="lg:hidden text-white"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </button>
//         </div>
//       </div>

//       {mobileMenuOpen && (
//         <div className="lg:hidden bg-[#050505] border-b border-white/10">
//           <div className="px-6 py-4 space-y-4">
//             <button onClick={() => navigateTo('features')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">Features</button>
//             <button onClick={() => navigateTo('ai')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">AI</button>
//             <button onClick={() => navigateTo('templates')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">Templates</button>
//             <button onClick={() => navigateTo('publish')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">Publish</button>
//             <button onClick={() => navigateTo('cms')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">CMS</button>
//             <button onClick={() => navigateTo('pricing')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">Pricing</button>
//             <button onClick={() => navigateTo('marketplace')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">Marketplace</button>
//             <button onClick={() => navigateTo('experts')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">Experts</button>
//             <button onClick={() => navigateTo('community')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">Community</button>
//             <button onClick={() => navigateTo('blog')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">Blog</button>
//             <button onClick={() => navigateTo('support')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">Support</button>
//             <button onClick={() => navigateTo('about')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">About</button>
//             <button onClick={() => navigateTo('careers')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">Careers</button>
//             <button onClick={() => navigateTo('contact')} className="block py-2 text-sm font-medium text-zinc-400 hover:text-white w-full text-left">Contact</button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );

//   // --- Footer ---
//   const Footer = () => (
//     <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
//           <div className="col-span-2 pr-8">
//              <div className="flex items-center gap-2 mb-4">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 2L2 7L12 12L22 7L12 2Z" />
//                   <path d="M2 17L12 22L22 17" />
//                   <path d="M2 12L12 17L22 12" />
//                 </svg>
//                 <span className="text-base font-bold tracking-tight">Zhyrex</span>
//              </div>
//              <div className="flex items-center gap-2 text-zinc-500 text-xs mb-4">
//               <div className="w-2 h-2 rounded-full bg-green-500"></div>
//               All systems operational
//             </div>
//             <div className="flex gap-4">
//               <div className="w-8 h-8 rounded bg-zinc-900 border border-white/5 hover:border-white/20 transition-colors"></div>
//               <div className="w-8 h-8 rounded bg-zinc-900 border border-white/5 hover:border-white/20 transition-colors"></div>
//               <div className="w-8 h-8 rounded bg-zinc-900 border border-white/5 hover:border-white/20 transition-colors"></div>
//             </div>
//           </div>
          
//           <div>
//             <h3 className="font-medium text-sm mb-4 text-white">Product</h3>
//             <ul className="space-y-2.5">
//               <li><button onClick={() => navigateTo('features')} className="text-xs text-zinc-500 hover:text-white transition-colors">Features</button></li>
//               <li><button onClick={() => navigateTo('templates')} className="text-xs text-zinc-500 hover:text-white transition-colors">Templates</button></li>
//               <li><button onClick={() => navigateTo('pricing')} className="text-xs text-zinc-500 hover:text-white transition-colors">Pricing</button></li>
//               <li><a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Updates</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="font-medium text-sm mb-4 text-white">Resources</h3>
//             <ul className="space-y-2.5">
//               <li><a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Design</a></li>
//               <li><a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Inspiration</a></li>
//               <li><button onClick={() => navigateTo('community')} className="text-xs text-zinc-500 hover:text-white transition-colors">Community</button></li>
//               <li><a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Blog</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-medium text-sm mb-4 text-white">Company</h3>
//             <ul className="space-y-2.5">
//               <li><a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">About</a></li>
//               <li><a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Careers</a></li>
//               <li><a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Legal</a></li>
//               <li><a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Contact</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="font-medium text-sm mb-4 text-white">Support</h3>
//             <ul className="space-y-2.5">
//               <li><button onClick={() => navigateTo('support')} className="text-xs text-zinc-500 hover:text-white transition-colors">Help Center</button></li>
//               <li><a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Status</a></li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
//           <p className="text-zinc-600 text-xs">
//             © 2024 Zhyrex Inc.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );

//   // --- Home Page ---
//   const HomePage = () => (
//     <div className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-blue-500/30">
//       <Navigation />
      
//       <section className="relative pt-32 pb-24 px-6 min-h-screen flex flex-col items-center justify-center">
//         <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-indigo-900/20 pointer-events-none"></div>
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//         </div>

//         <div className="max-w-4xl mx-auto relative z-10 text-center">
//           <CenteredLabel text="Last week: Ticker Effect" />
          
//           <div className="animate-fade-in-up">
//              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.9] text-white">
//               Build better <br />
//               sites, <span className="text-zinc-500">faster.</span>
//             </h1>
//           </div>
          
//           <p className="text-lg text-zinc-400 mb-10 max-w-lg mx-auto leading-relaxed tracking-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
//             The site builder trusted by modern startups. Design fast 
//             and scale with an integrated CMS, SEO, and more.
//           </p>

//           <div className="flex items-center justify-center gap-3 mb-20 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
//             <PrimaryButton>Start for free</PrimaryButton>
//             <SecondaryButton>
//               <Play className="w-3 h-3 fill-current" />
//               Watch video
//             </SecondaryButton>
//           </div>

//           <div className="relative max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
//             <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-xl blur-sm opacity-50"></div>
//             <div className="bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl aspect-[16/9] overflow-hidden relative flex items-center justify-center">
//               <div className="text-center">
//                  <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 shadow-lg shadow-purple-900/20"></div>
//                  <div className="h-2 w-32 bg-zinc-800 rounded-full mx-auto mb-2"></div>
//                  <div className="h-2 w-20 bg-zinc-900 rounded-full mx-auto"></div>
//               </div>
              
//               <div className="absolute top-8 left-8 p-3 bg-[#111] border border-white/5 rounded-lg shadow-xl flex gap-3 items-center animate-float">
//                  <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
//                     <Sparkles className="w-4 h-4 text-blue-400" />
//                  </div>
//                  <div className="space-y-1">
//                     <div className="w-16 h-1.5 bg-zinc-700 rounded-full"></div>
//                     <div className="w-10 h-1.5 bg-zinc-800 rounded-full"></div>
//                  </div>
//               </div>

//               <div className="absolute bottom-8 right-8 p-3 bg-[#111] border border-white/5 rounded-lg shadow-xl flex gap-3 items-center animate-float" style={{animationDelay: '1s'}}>
//                  <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
//                     <Code className="w-4 h-4 text-purple-400" />
//                  </div>
//                  <div className="space-y-1">
//                     <div className="w-20 h-1.5 bg-zinc-700 rounded-full"></div>
//                     <div className="w-12 h-1.5 bg-zinc-800 rounded-full"></div>
//                  </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );

//   // --- Features Page ---
//   const FeaturesPage = () => {
//     const features = [
//       { icon: Sparkles, title: 'AI Generation', description: 'Instantly create complete sites.' },
//       { icon: Grid, title: 'Smart Layouts', description: 'Auto-optimized business layouts.' },
//       { icon: Layers, title: 'Components', description: 'Thousands of pre-built blocks.' },
//       { icon: Palette, title: 'Visual Editor', description: 'Modern canvas for modern design.' },
//       { icon: Code, title: 'Global Styles', description: 'Update brand systems instantly.' },
//       { icon: Smartphone, title: 'Responsive', description: 'Perfect on every viewport.' },
//       { icon: Globe, title: 'Global CDN', description: 'Publish to the edge instantly.' },
//       { icon: Terminal, title: 'Code Export', description: 'Clean React/HTML export.' },
//       { icon: BarChart3, title: 'Analytics', description: 'Privacy-first tracking built-in.' }
//     ];

//     return (
//       <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
        
//         <div className="pt-32 pb-20 px-6">
//           <div className="max-w-5xl mx-auto">
//             <div className="mb-16">
//               <SectionLabel icon={Star} text="Features" />
//               <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
//                 Everything you need.
//               </h1>
//               <p className="text-lg text-zinc-400 max-w-2xl">
//                 A complete toolkit for the modern web. Design, ship, and scale without hitting a wall.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {features.map((feature, idx) => (
//                 <div key={idx} className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 hover:bg-[#111] transition-colors group">
//                   <feature.icon className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors mb-4" />
//                   <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
//                   <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   // --- AI Page ---
//   const AIPage = () => {
//     return (
//       <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
//         <div className="pt-32 pb-20 px-6">
//           <div className="max-w-5xl mx-auto">
//             <SectionLabel icon={Sparkles} text="AI" />
//             <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
//               Set your ideas free.
//             </h1>
//             <p className="text-lg text-zinc-400 max-w-2xl mb-16">
//               Generate complete sites and advanced components in seconds with AI, so you can skip the blank canvas and start designing with confidence.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 hover:bg-[#111] transition-colors">
//                 <Zap className="w-6 h-6 text-blue-400 mb-4" />
//                 <h3 className="text-xl font-bold mb-3">Instant Generation</h3>
//                 <p className="text-zinc-400 text-sm leading-relaxed">
//                   Describe what you want and watch AI build it. Complete layouts, components, and content in seconds.
//                 </p>
//               </div>

//               <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 hover:bg-[#111] transition-colors">
//                 <Palette className="w-6 h-6 text-purple-400 mb-4" />
//                 <h3 className="text-xl font-bold mb-3">Smart Design</h3>
//                 <p className="text-zinc-400 text-sm leading-relaxed">
//                   AI understands your brand and creates cohesive designs that match your vision perfectly.
//                 </p>
//               </div>

//               <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 hover:bg-[#111] transition-colors">
//                 <Code className="w-6 h-6 text-green-400 mb-4" />
//                 <h3 className="text-xl font-bold mb-3">Clean Code</h3>
//                 <p className="text-zinc-400 text-sm leading-relaxed">
//                   Every AI generation produces production-ready, semantic code that developers love.
//                 </p>
//               </div>

//               <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-8 hover:bg-[#111] transition-colors">
//                 <Rocket className="w-6 h-6 text-orange-400 mb-4" />
//                 <h3 className="text-xl font-bold mb-3">Iterate Fast</h3>
//                 <p className="text-zinc-400 text-sm leading-relaxed">
//                   Refine your designs with natural language. Ask AI to adjust and it adapts in real-time.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   // --- Templates Page ---
//   const TemplatesPage = () => {
//     return (
//       <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
        
//         <div className="pt-32 pb-20 px-6">
//           <div className="max-w-6xl mx-auto">
//             <SectionLabel icon={Layers} text="Marketplace" />
//             <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-12">
//               Start with a template.
//             </h1>

//             <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
//               <button className="px-4 py-2 bg-white text-black rounded-lg text-xs font-bold">All</button>
//               <button className="px-4 py-2 bg-[#111] text-zinc-400 hover:text-white border border-white/5 rounded-lg text-xs font-bold transition-colors">Agency</button>
//               <button className="px-4 py-2 bg-[#111] text-zinc-400 hover:text-white border border-white/5 rounded-lg text-xs font-bold transition-colors">Portfolio</button>
//               <button className="px-4 py-2 bg-[#111] text-zinc-400 hover:text-white border border-white/5 rounded-lg text-xs font-bold transition-colors">SaaS</button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
//               {[1, 2, 3, 4, 5, 6].map((item) => (
//                 <div key={item} className="group cursor-pointer">
//                   <div className="bg-[#111] border border-white/5 aspect-[4/3] rounded-xl overflow-hidden mb-3 relative">
//                     <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 opacity-50 group-hover:scale-105 transition-transform duration-500"></div>
//                     <div className="absolute inset-4 bg-[#050505] rounded-lg opacity-20"></div>
//                     <div className="absolute bottom-4 left-4 right-4 h-1/3 bg-[#050505] rounded opacity-20"></div>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <h3 className="text-sm font-bold text-white">Template Name {item}</h3>
//                       <p className="text-xs text-zinc-500">Author Name</p>
//                     </div>
//                     <span className="text-xs font-medium bg-white/10 px-2 py-1 rounded text-zinc-300">Free</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   // --- Publish Page ---
//   const PublishPage = () => {
//     return (
//       <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
//         <div className="pt-32 pb-20 px-6">
//           <div className="max-w-5xl mx-auto">
//             <SectionLabel icon={Rocket} text="Publish" />
//             <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
//               Launch instantly.
//             </h1>
//             <p className="text-lg text-zinc-400 max-w-2xl mb-16">
//               Deploy to our global CDN with one click. Custom domains, SSL, and blazing-fast performance included.
//             </p>

//             <div className="space-y-4">
//               <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
//                   <Globe className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold mb-2">Global CDN</h3>
//                   <p className="text-sm text-zinc-400">Lightning-fast performance in every region with edge deployment.</p>
//                 </div>
//               </div>

//               <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
//                   <Lock className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold mb-2">Free SSL</h3>
//                   <p className="text-sm text-zinc-400">Automatic HTTPS for all your sites. Security built-in from day one.</p>
//                 </div>
//               </div>

//               <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
//                   <Zap className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold mb-2">Custom Domains</h3>
//                   <p className="text-sm text-zinc-400">Connect your domain in seconds. No complex configuration required.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   // --- CMS Page ---
//   const CMSPage = () => {
//     return (
//       <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
//         <div className="pt-32 pb-20 px-6">
//           <div className="max-w-5xl mx-auto">
//             <SectionLabel icon={FileText} text="CMS" />
//             <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
//               Manage content.
//             </h1>
//             <p className="text-lg text-zinc-400 max-w-2xl mb-16">
//               A powerful CMS that works the way you think. Create, edit, and publish content without touching code.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6">
//                 <FileText className="w-5 h-5 text-zinc-400 mb-4" />
//                 <h3 className="font-bold text-sm mb-2">Visual Editing</h3>
//                 <p className="text-sm text-zinc-500">Edit content directly on your live site with instant preview.</p>
//               </div>

//               <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6">
//                 <Users className="w-5 h-5 text-zinc-400 mb-4" />
//                 <h3 className="font-bold text-sm mb-2">Multi-user</h3>
//                 <p className="text-sm text-zinc-500">Collaborate with your team with roles and permissions.</p>
//               </div>

//               <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6">
//                 <Code className="w-5 h-5 text-zinc-400 mb-4" />
//                 <h3 className="font-bold text-sm mb-2">API Access</h3>
//                 <p className="text-sm text-zinc-500">Headless CMS with a powerful REST and GraphQL API.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   // --- Pricing Page ---
//   const PricingPage = () => {
//     return (
//       <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
        
//         <div className="pt-32 pb-20 px-6">
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <SectionLabel icon={Zap} text="Pricing" />
//             <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
//               Simple pricing.
//             </h1>
//             <p className="text-zinc-400 text-lg">
//               Start for free, upgrade when you're ready to scale.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 flex flex-col">
//               <div className="mb-4">
//                 <h3 className="text-base font-bold text-white">Starter</h3>
//                 <p className="text-xs text-zinc-500 mt-1">For hobby projects</p>
//               </div>
//               <div className="mb-6">
//                 <span className="text-3xl font-bold tracking-tight">$0</span>
//               </div>
//               <button className="w-full py-2.5 bg-[#151515] hover:bg-[#202020] text-white rounded-lg text-xs font-bold border border-white/5 transition-all mb-8">
//                 Start Building
//               </button>
//               <ul className="space-y-3 text-xs text-zinc-400 flex-1">
//                 <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> 1 Project</li>
//                 <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> AI Generator</li>
//                 <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Subdomain publishing</li>
//               </ul>
//             </div>

//             <div className="bg-[#0F0F0F] border border-blue-500/30 rounded-xl p-6 flex flex-col relative shadow-[0_0_30px_rgba(59,130,246,0.1)]">
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
//                 Popular
//               </div>
//               <div className="mb-4">
//                 <h3 className="text-base font-bold text-white">Pro</h3>
//                 <p className="text-xs text-zinc-500 mt-1">For professionals</p>
//               </div>
//               <div className="mb-6">
//                 <span className="text-3xl font-bold tracking-tight">$29</span>
//                 <span className="text-zinc-500 text-xs ml-1">/mo</span>
//               </div>
//               <button className="w-full py-2.5 bg-white text-black hover:bg-zinc-200 rounded-lg text-xs font-bold transition-all mb-8">
//                 Get Pro
//               </button>
//               <ul className="space-y-3 text-xs text-zinc-300 flex-1">
//                 <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Unlimited Projects</li>
//                 <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Custom Domains</li>
//                 <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Code Export</li>
//                 <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> No Branding</li>
//               </ul>
//             </div>

//              <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 flex flex-col">
//               <div className="mb-4">
//                 <h3 className="text-base font-bold text-white">Team</h3>
//                 <p className="text-xs text-zinc-500 mt-1">For collaboration</p>
//               </div>
//               <div className="mb-6">
//                 <span className="text-3xl font-bold tracking-tight">$79</span>
//                 <span className="text-zinc-500 text-xs ml-1">/mo</span>
//               </div>
//               <button className="w-full py-2.5 bg-[#151515] hover:bg-[#202020] text-white rounded-lg text-xs font-bold border border-white/5 transition-all mb-8">
//                 Contact Sales
//               </button>
//               <ul className="space-y-3 text-xs text-zinc-400 flex-1">
//                 <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Everything in Pro</li>
//                 <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Shared Workspace</li>
//                 <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-zinc-600" /> Comments & Roles</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   // --- Marketplace Page ---
//   const MarketplacePage = () => {
//     return (
//       <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
//         <div className="pt-32 pb-20 px-6">
//           <div className="max-w-6xl mx-auto">
//             <SectionLabel icon={Grid} text="Marketplace" />
//             <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-12">
//               Extend your toolkit.
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 { name: 'Animated Gradients', type: 'Component', price: 'Free' },
//                 { name: 'JSON Sync', type: 'Plugin', price: 'Free' },
//                 { name: 'Hover Zoom', type: 'Component', price: '$9' },
//                 { name: 'Image Slider', type: 'Component', price: 'Free' },
//                 { name: 'Advanced Forms', type: 'Plugin', price: '$19' },
//                 { name: 'Analytics Pro', type: 'Plugin', price: '$29' }
//               ].map((item, i) => (
//                 <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 hover:bg-[#111] transition-colors cursor-pointer">
//                   <div className="w-full aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg mb-4"></div>
//                   <div className="flex justify-between items-start mb-2">
//                     <div>
//                       <h3 className="font-bold text-sm">{item.name}</h3>
//                       <p className="text-xs text-zinc-500">{item.type}</p>
//                     </div>
//                     <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded">{item.price}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   // --- Experts Page ---
//   const ExpertsPage = () => {
//     return (
//       <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
//         <div className="pt-32 pb-20 px-6">
//           <div className="max-w-5xl mx-auto">
//             <SectionLabel icon={Star} text="Experts" />
//             <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
//               Get pro help from handpicked experts.
//             </h1>
//             <p className="text-lg text-zinc-400 max-w-2xl mb-12">
//               Connect with vetted professionals who can bring your vision to life.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[1, 2, 3, 4, 5, 6].map((item) => (
//                 <div key={item} className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 hover:bg-[#111] transition-colors">
//                   <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4"></div>
//                   <h3 className="font-bold mb-1">Expert Name {item}</h3>
//                   <p className="text-sm text-zinc-500 mb-3">Design Agency</p>
//                   <div className="flex gap-1 mb-3">
//                     {[1,2,3,4,5].map(star => (
//                       <Star key={star} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
//                     ))}
//                   </div>
//                   <button className="w-full py-2 bg-white text-black rounded-lg text-xs font-bold hover:bg-zinc-200 transition-colors">
//                     View Profile
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   // --- Blog Page ---
//   const BlogPage = () => {
//     return (
//       <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
//         <div className="pt-32 pb-20 px-6">
//           <div className="max-w-6xl mx-auto">
//             <SectionLabel icon={Book} text="Blog" />
//             <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-12">
//               News & updates.
//             </h1>

//             <div className="space-y-4">
//               {[
//                 { title: 'Introducing AI Generation 2.0', date: 'Nov 20, 2024', category: 'Product' },
//                 { title: 'How we built our new CMS', date: 'Nov 15, 2024', category: 'Engineering' },
//                 { title: 'Design trends for 2025', date: 'Nov 10, 2024', category: 'Design' },
//                 { title: 'Community spotlight: October', date: 'Nov 1, 2024', category: 'Community' }
//               ].map((post, i) => (
//                 <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 hover:bg-[#111] transition-colors cursor-pointer flex justify-between items-center">
//                   <div>
//                     <span className="text-xs font-bold text-blue-400 mb-2 block">{post.category}</span>
//                     <h3 className="font-bold text-lg mb-1">{post.title}</h3>
//                     <p className="text-sm text-zinc-500">{post.date}</p>
//                   </div>
//                   <ArrowRight className="w-5 h-5 text-zinc-600" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   // --- Community Page ---
//   const CommunityPage = () => {
//     return (
//        <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
//         <div className="pt-32 pb-20 px-6 text-center">
//           <SectionLabel icon={Users} text="Community" />
//           <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Join the movement.</h1>
//           <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
//             Connect with 50,000+ designers and developers building the future of the web.
//           </p>
          
//           <div className="flex justify-center gap-4">
//             <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] rounded-xl font-bold text-sm transition-colors">
//               <MessageCircle className="w-4 h-4" /> Discord
//             </a>
//              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[#1DA1F2] hover:bg-[#1a91da] rounded-xl font-bold text-sm transition-colors">
//               Twitter
//             </a>
//           </div>
//         </div>
//         <Footer />
//        </div>
//     );
//   };

//   // --- Support Page ---
//   const SupportPage = () => {
//     const categories = [
//       { icon: Book, title: 'Documentation', desc: 'Guides & Tutorials' },
//       { icon: MessageCircle, title: 'Community', desc: 'Ask the forum' },
//       { icon: Mail, title: 'Contact', desc: 'Email support' },
//     ];

//     return (
//       <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
//         <div className="pt-32 pb-20 px-6">
//           <div className="max-w-4xl mx-auto">
//              <SectionLabel icon={LifeBuoy} text="Support" />
//              <h1 className="text-5xl font-bold tracking-tighter mb-10">How can we help?</h1>
             
//              <div className="relative mb-16">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
//                 <input 
//                   type="text" 
//                   placeholder="Search for answers..." 
//                   className="w-full bg-[#111] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
//                 />
//              </div>

//              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {categories.map((cat, i) => (
//                   <button key={i} className="bg-[#0A0A0A] border border-white/5 p-6 rounded-xl text-left hover:bg-[#111] transition-colors">
//                     <cat.icon className="w-6 h-6 text-zinc-400 mb-4" />
//                     <h3 className="font-bold text-sm text-white mb-1">{cat.title}</h3>
//                     <p className="text-xs text-zinc-500">{cat.desc}</p>
//                   </button>
//                 ))}
//              </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   // --- About Page ---
//   const AboutPage = () => {
//     return (
//       <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
//         <div className="pt-32 pb-20 px-6">
//           <div className="max-w-4xl mx-auto">
//             <SectionLabel icon={Heart} text="About" />
//             <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
//               Our story.
//             </h1>
//             <p className="text-lg text-zinc-400 mb-12">
//               We're building the future of web design. A platform where creativity meets technology, 
//               where ideas become reality in seconds, and where designers and developers work in perfect harmony.
//             </p>

//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-2xl font-bold mb-3">Mission</h2>
//                 <p className="text-zinc-400 leading-relaxed">
//                   To empower everyone to build beautiful, performant websites without compromise. 
//                   We believe great design should be accessible, and powerful tools should be simple.
//                 </p>
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold mb-3">Values</h2>
//                 <ul className="space-y-2 text-zinc-400">
//                   <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-blue-500" /> Design-first thinking</li>
//                   <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-blue-500" /> Obsessive attention to detail</li>
//                   <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-blue-500" /> Community-driven development</li>
//                   <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-blue-500" /> Radical transparency</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   // --- Careers Page ---
//   const CareersPage = () => {
//     return (
//       <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
//         <div className="pt-32 pb-20 px-6">
//           <div className="max-w-5xl mx-auto">
//             <SectionLabel icon={TrendingUp} text="Careers" />
//             <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
//               Join our team.
//             </h1>
//             <p className="text-lg text-zinc-400 mb-12">
//               We're looking for talented people who want to shape the future of web design.
//             </p>

//             <div className="space-y-4">
//               {[
//                 { title: 'Senior Frontend Engineer', location: 'Remote', type: 'Full-time' },
//                 { title: 'Product Designer', location: 'Remote', type: 'Full-time' },
//                 { title: 'DevRel Engineer', location: 'Remote', type: 'Full-time' },
//                 { title: 'Marketing Lead', location: 'San Francisco', type: 'Full-time' }
//               ].map((job, i) => (
//                 <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6 hover:bg-[#111] transition-colors cursor-pointer flex justify-between items-center">
//                   <div>
//                     <h3 className="font-bold text-lg mb-2">{job.title}</h3>
//                     <div className="flex gap-4 text-sm text-zinc-500">
//                       <span>{job.location}</span>
//                       <span>•</span>
//                       <span>{job.type}</span>
//                     </div>
//                   </div>
//                   <ArrowRight className="w-5 h-5 text-zinc-600" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   // --- Contact Page ---
//   const ContactPage = () => {
//     return (
//       <div className="min-h-screen bg-[#050505] text-white">
//         <Navigation />
//         <div className="pt-32 pb-20 px-6">
//           <div className="max-w-2xl mx-auto">
//             <SectionLabel icon={Mail} text="Contact" />
//             <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
//               Get in touch.
//             </h1>
//             <p className="text-lg text-zinc-400 mb-12">
//               Have a question? Want to partner? We'd love to hear from you.
//             </p>

//             <div className="space-y-4">
//               <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6">
//                 <h3 className="font-bold mb-4">Sales</h3>
//                 <a href="mailto:sales@aiwebgen.com" className="text-blue-400 hover:text-blue-300 transition-colors">
//                   sales@aiwebgen.com
//                 </a>
//               </div>

//               <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6">
//                 <h3 className="font-bold mb-4">Support</h3>
//                 <a href="mailto:support@aiwebgen.com" className="text-blue-400 hover:text-blue-300 transition-colors">
//                   support@aiwebgen.com
//                 </a>
//               </div>

//               <div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-6">
//                 <h3 className="font-bold mb-4">Press</h3>
//                 <a href="mailto:press@aiwebgen.com" className="text-blue-400 hover:text-blue-300 transition-colors">
//                   press@aiwebgen.com
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   // Router
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'features': return <FeaturesPage />;
//       case 'ai': return <AIPage />;
//       case 'templates': return <TemplatesPage />;
//       case 'publish': return <PublishPage />;
//       case 'cms': return <CMSPage />;
//       case 'pricing': return <PricingPage />;
//       case 'marketplace': return <MarketplacePage />;
//       case 'experts': return <ExpertsPage />;
//       case 'community': return <CommunityPage />;
//       case 'blog': return <BlogPage />;
//       case 'support': return <SupportPage />;
//       case 'about': return <AboutPage />;
//       case 'careers': return <CareersPage />;
//       case 'contact': return <ContactPage />;
//       default: return <HomePage />;
//     }
//   };

//   return (
//     <div>
//       {renderPage()}
//       <style>{`
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-in-out forwards;
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//           opacity: 0;
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//         }
//         .scrollbar-hide {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default App;