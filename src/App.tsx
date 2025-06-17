import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect } from "react";
import ScrollProgress from "./components/ScrollProgress";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import RefundPolicy from "./pages/RefundPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";

const queryClient = new QueryClient();

const FloatingCallButton = () => (
  <motion.div
    className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, duration: 0.5 }}
  >
    <motion.button
      className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group flex items-center gap-2"
      whileHover={{ scale: 1.1, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.location.href = 'tel:+1-877-593-3790'}
    >
      <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
      <span className="hidden sm:inline text-sm font-semibold">Call Now</span>
    </motion.button>
    <motion.div
      className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] sm:text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold animate-pulse"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, duration: 0.3 }}
    >
      !
    </motion.div>
  </motion.div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <ScrollToTop />
        <ScrollProgress />
        <FloatingCallButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;