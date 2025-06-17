import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
    mass: 0.5
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 origin-left z-[60] shadow-sm will-change-transform"
      style={{ 
        scaleX,
        boxShadow: '0 0 10px rgba(37, 99, 235, 0.3)'
      }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={scrollYProgress.get() * 100}
    />
  );
};

export default ScrollProgress; 