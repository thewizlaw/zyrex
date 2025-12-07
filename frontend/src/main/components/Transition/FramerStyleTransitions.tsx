// main/components/Transition/FramerStyleTransitions.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface FramerStyleTransitionsProps {
  children: React.ReactNode;
}

const FramerStyleTransitions: React.FC<FramerStyleTransitionsProps> = ({ children }) => {
  const location = useLocation();

  // Enhanced transition types based on route patterns
  const getTransitionType = (path: string) => {
    // Home page gets special hero animation
    if (path === '/') return 'hero';
    
    // Dashboard and app pages get slide animation
    if (path.includes('/dashboard') || path.includes('/builder') || 
        path.includes('/marketplace') || path.includes('/experts') || 
        path.includes('/community')) return 'slide';
    
    // Auth pages get fade animation
    if (path.includes('/login') || path.includes('/signup')) return 'fade';
    
    // Marketing pages get scale animation
    if (path.includes('/features') || path.includes('/ai') || 
        path.includes('/templates') || path.includes('/pricing')) return 'scale';
    
    // Company pages get subtle animation
    if (path.includes('/about') || path.includes('/careers') || 
        path.includes('/contact') || path.includes('/blog') || 
        path.includes('/support')) return 'subtle';
    
    return 'default';
  };

  const transitionType = getTransitionType(location.pathname);

  const transitions = {
    hero: {
      initial: { 
        opacity: 0, 
        y: 40,
        filter: "blur(10px)",
        scale: 0.95
      },
      animate: { 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
        scale: 1
      },
      exit: { 
        opacity: 0, 
        y: -40,
        filter: "blur(10px)",
        scale: 1.05
      },
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
        duration: 0.8
      }
    },
    slide: {
      initial: { 
        opacity: 0, 
        x: 30,
        scale: 0.98
      },
      animate: { 
        opacity: 1, 
        x: 0,
        scale: 1
      },
      exit: { 
        opacity: 0, 
        x: -30,
        scale: 1.02
      },
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5
      }
    },
    fade: {
      initial: { 
        opacity: 0,
        scale: 0.98
      },
      animate: { 
        opacity: 1,
        scale: 1
      },
      exit: { 
        opacity: 0,
        scale: 1.02
      },
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.4
      }
    },
    scale: {
      initial: { 
        opacity: 0,
        scale: 0.9,
        y: 20
      },
      animate: { 
        opacity: 1,
        scale: 1,
        y: 0
      },
      exit: { 
        opacity: 0,
        scale: 1.1,
        y: -20
      },
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 250,
        duration: 0.6
      }
    },
    subtle: {
      initial: { 
        opacity: 0,
        y: 15
      },
      animate: { 
        opacity: 1,
        y: 0
      },
      exit: { 
        opacity: 0,
        y: -15
      },
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.4
      }
    },
    default: {
      initial: { 
        opacity: 0, 
        scale: 0.98,
        y: 20 
      },
      animate: { 
        opacity: 1, 
        scale: 1,
        y: 0 
      },
      exit: { 
        opacity: 0, 
        scale: 1.02,
        y: -20 
      },
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.5
      }
    }
  };

  const currentTransition = transitions[transitionType];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={currentTransition.initial}
        animate={currentTransition.animate}
        exit={currentTransition.exit}
        transition={currentTransition.transition}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FramerStyleTransitions;