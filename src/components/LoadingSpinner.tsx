import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50/90 to-indigo-100/90 backdrop-blur-sm flex items-center justify-center z-[9999] select-none" aria-label="Loading content" role="alert">
      <motion.div
        className="relative w-12 sm:w-16 h-12 sm:h-16"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-12 h-12 sm:w-16 sm:h-16 border-[3px] sm:border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 border-[3px] sm:border-4 border-transparent border-t-purple-600 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 sm:inset-3 w-8 h-8 sm:w-10 sm:h-10 border-[3px] sm:border-4 border-transparent border-t-green-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 text-base sm:text-xl font-bold text-gray-700 font-serif tracking-wide select-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0.5, 1, 0.5], y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default LoadingSpinner; 