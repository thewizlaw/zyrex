// components/EnhancedPageTransition.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface EnhancedPageTransitionProps {
  children: React.ReactNode;
}

const EnhancedPageTransition: React.FC<EnhancedPageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)"
    },
    in: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)"
    },
    out: {
      opacity: 0,
      y: -30,
      filter: "blur(10px)"
    }
  };

  const pageTransition = {
    type: "spring",
    damping: 25,
    stiffness: 200,
    duration: 0.4
  };

  const loadingVariants = {
    initial: { scaleX: 0 },
    in: { scaleX: 1 },
    out: { scaleX: 0 }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={loadingVariants}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
            style={{ transformOrigin: '0% 50%' }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default EnhancedPageTransition;