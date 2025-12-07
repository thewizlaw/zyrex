import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Command, ArrowRight, Sparkles } from 'lucide-react';
import { useApi } from '../../hooks/useApi';
import { ErrorAlert } from '../../common/ErrorAlert';

// Sample images for the right grid (using placeholder image service)
const SAMPLE_IMAGES = [
  { id: 1, title: 'Culinary', url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop' },
  { id: 2, title: 'Portfolio', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
  { id: 3, title: 'Bonded', url: 'https://images.unsplash.com/photo-1558591710-4b4a643ae5d5?w=400&h=300&fit=crop' },
  { id: 4, title: 'Haptic', url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop' },
  { id: 5, title: 'Zoom', url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop' },
  { id: 6, title: 'Algo', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
  { id: 7, title: 'Wireframe', url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop' },
  { id: 8, title: 'SaaS', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
  { id: 9, title: 'Eco', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop' },
];

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();
  const { login, loading, error, clearError } = useApi();

  useEffect(() => {
    // Trigger entrance animation
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ email, password });
      if (result.success) {
        // Add exit animation before navigation
        setIsMounted(false);
        setTimeout(() => navigate('/'), 300);
      }
    } catch (err) {
      // Error handled by useApi hook
    }
  };

  const fillDemoCredentials = () => {
    setEmail('demo@example.com');
    setPassword('password123');
  };

  const handleImageClick = (imageId: number) => {
    // Optional: Add click animation for images
    const element = document.getElementById(`image-${imageId}`);
    if (element) {
      element.classList.add('scale-95');
      setTimeout(() => element.classList.remove('scale-95'), 150);
    }
  };

  return (
    <div className={`h-screen flex bg-black text-white selection:bg-blue-500 selection:text-white overflow-hidden font-sans transition-all duration-500 ${
      isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      
      {/* --- LEFT COLUMN: Login Form --- */}
      <div className={`w-full lg:w-[480px] xl:w-[550px] flex flex-col justify-center px-6 sm:px-12 lg:px-16 relative z-10 shrink-0 border-r border-zinc-900/50 transition-all duration-700 delay-100 ${
        isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}>
        
        <div className="w-full max-w-[360px] mx-auto">
          {/* Header Logo with animation */}
          <div className={`mb-12 flex items-center gap-2 transition-all duration-700 delay-200 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <Command className="w-5 h-5 text-black" />
            </div>
          </div>

          {/* Main Heading with staggered animation */}
          <div className={`mb-10 transition-all duration-700 delay-300 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h1 className="text-3xl font-bold tracking-tight mb-3 text-white">
              Welcome to Zhyrex
            </h1>
            <p className="text-zinc-400 text-base">
              Start publishing your dream site now.
            </p>
          </div>

          {/* Error Alert with animation */}
          <div className={`transition-all duration-500 delay-400 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {error && (
              <ErrorAlert error={error} onDismiss={clearError} />
            )}
          </div>

          {/* Google Sign In with animation */}
          <div className={`transition-all duration-700 delay-500 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button
              type="button"
              className="w-full bg-white text-black font-medium h-12 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mb-6 text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Divider with animation */}
          <div className={`relative mb-6 transition-all duration-700 delay-600 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-3 text-zinc-500 font-medium">Or</span>
            </div>
          </div>

          {/* Login Form with staggered animations */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className={`transition-all duration-700 delay-700 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all duration-300 placeholder-zinc-600 hover:border-zinc-700"
                placeholder="Work email address"
              />
            </div>

            <div className={`relative transition-all duration-700 delay-800 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg px-4 h-12 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all duration-300 placeholder-zinc-600 pr-10 hover:border-zinc-700"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className={`transition-all duration-700 delay-900 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium h-12 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group hover:scale-[1.02] active:scale-[0.98]"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Demo Link with animation */}
          <div className={`mt-6 text-center transition-all duration-700 delay-1000 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button
              onClick={fillDemoCredentials}
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-200 hover:scale-105"
            >
              Use demo credentials
            </button>
          </div>

          {/* Signup Link with animation */}
          <div className={`mt-6 text-center transition-all duration-700 delay-1100 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-zinc-500 text-sm">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-all duration-200 hover:scale-105 inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMounted(false);
                  setTimeout(() => navigate('/signup'), 300);
                }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Links with animation */}
        <div className={`absolute bottom-6 left-0 w-full text-center transition-all duration-700 delay-1200 ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-xs text-zinc-700">
            &copy; 2024 Zhyrex Inc.
          </p>
        </div>
      </div>

      {/* --- RIGHT COLUMN: Visual Grid --- */}
      <div className={`hidden lg:flex flex-1 bg-zinc-950 relative overflow-hidden transition-all duration-700 delay-200 ${
        isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}>
        {/* Fade overlay for smooth edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10 pointer-events-none" />
        
        {/* Grid Container - Centered and properly sized */}
        <div className="flex-1 p-8 flex items-center justify-center">
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 max-w-4xl w-full max-h-full">
            {SAMPLE_IMAGES.map((item, index) => (
              <div 
                key={item.id}
                id={`image-${item.id}`}
                className={`rounded-xl overflow-hidden group cursor-pointer relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-500 transform-gpu hover:scale-105 ${
                  isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: `${1300 + (index * 100)}ms`
                }}
                onClick={() => handleImageClick(item.id)}
              >
                {/* Image with overlay */}
                <div className="w-full aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-sm">{item.title}</span>
                      <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;