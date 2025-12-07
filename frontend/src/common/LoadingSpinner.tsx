import React, { useState, useEffect } from 'react';
import { Sparkles, Code, Palette, Layout, Zap, Rocket } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
  darkMode?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Crafting Your Website', 
  darkMode = false 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  // Dynamic loading messages that cycle through
  const loadingSteps = [
    { 
      text: "Analyzing your design requirements...", 
      icon: <Palette className="w-6 h-6" /> 
    },
    { 
      text: "Generating responsive layout structure...", 
      icon: <Layout className="w-6 h-6" /> 
    },
    { 
      text: "Optimizing component architecture...", 
      icon: <Code className="w-6 h-6" /> 
    },
    { 
      text: "Applying AI-powered styling...", 
      icon: <Sparkles className="w-6 h-6" /> 
    },
    { 
      text: "Finalizing interactive elements...", 
      icon: <Zap className="w-6 h-6" /> 
    },
    { 
      text: "Launching your masterpiece...", 
      icon: <Rocket className="w-6 h-6" /> 
    }
  ];

  // Progress simulation and step cycling
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + Math.random() * 15;
      });
    }, 800);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % loadingSteps.length);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [loadingSteps.length]);

  // Progress bar width calculation
  const progressWidth = `${Math.min(progress, 100)}%`;

  return (
    <div className="h-full flex flex-col items-center justify-center gap-8 p-8">
      {/* Animated Logo Container */}
      <div className="relative">
        {/* Outer rotating ring */}
        <div className={`w-24 h-24 border-4 ${
          darkMode 
            ? 'border-violet-900/30 border-t-violet-500 border-r-violet-400' 
            : 'border-violet-200 border-t-violet-600 border-r-violet-500'
        } rounded-full animate-spin`} />
        
        {/* Middle pulsing ring */}
        <div className={`absolute inset-2 border-3 ${
          darkMode ? 'border-purple-500/40' : 'border-purple-400/60'
        } rounded-full animate-pulse`} />
        
        {/* Inner core with icon */}
        <div className="absolute inset-4 flex items-center justify-center">
          <div className={`
            w-12 h-12 rounded-full flex items-center justify-center 
            ${darkMode 
              ? 'bg-gradient-to-br from-violet-600 to-purple-600 shadow-lg shadow-purple-500/30' 
              : 'bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-purple-400/40'
            }
            animate-bounce
          `}>
            {loadingSteps[currentStep].icon}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-2 -right-2">
          <div className={`
            w-4 h-4 rounded-full 
            ${darkMode ? 'bg-yellow-400' : 'bg-yellow-300'}
            animate-ping
          `} />
        </div>
        <div className="absolute -bottom-2 -left-2">
          <div className={`
            w-3 h-3 rounded-full 
            ${darkMode ? 'bg-blue-400' : 'bg-blue-300'}
            animate-ping
            animation-delay-300
          `} />
        </div>
      </div>

      {/* Progress Section */}
      <div className="w-80 max-w-full space-y-6">
        {/* Main Title */}
        <div className="text-center space-y-2">
          <h2 className={`text-2xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          } mb-2`}>
            {message}
          </h2>
          
          {/* Dynamic Step Display */}
          <div className="flex items-center justify-center gap-3 min-h-[60px]">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800/50' : 'bg-gray-100'
            } transition-all duration-500`}>
              {loadingSteps[currentStep].icon}
              <p className={`text-sm font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {loadingSteps[currentStep].text}
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Step {currentStep + 1} of {loadingSteps.length}
            </span>
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              {Math.min(Math.round(progress), 100)}%
            </span>
          </div>
          
          {/* Main Progress Bar */}
          <div className={`h-2 rounded-full overflow-hidden ${
            darkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`}>
            <div 
              className={`h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-700 ease-out ${
                progress >= 100 ? 'animate-pulse' : ''
              }`}
              style={{ width: progressWidth }}
            />
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-1">
            {loadingSteps.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? darkMode ? 'bg-purple-400' : 'bg-purple-600'
                    : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                } ${index < currentStep ? 'scale-125' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Fun Facts / Tips */}
        <div className={`text-center text-xs ${
          darkMode ? 'text-gray-500' : 'text-gray-400'
        } italic`}>
          {progress < 30 && "AI is analyzing your design preferences..."}
          {progress >= 30 && progress < 60 && "Crafting beautiful UI components..."}
          {progress >= 60 && progress < 90 && "Optimizing for performance..."}
          {progress >= 90 && "Almost ready! Final touches..."}
        </div>
      </div>

      {/* CSS for animation delays */}
      <style>{`
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
};