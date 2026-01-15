import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Index from "./pages/Index";
import Projecten from "./pages/Projecten";
import ProjectDetail from "./pages/ProjectDetail";
import Diensten from "./pages/Diensten";
import OverOns from "./pages/OverOns";
import Duurzaamheid from "./pages/Duurzaamheid";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Preloader from "./components/ui/Preloader";

const queryClient = new QueryClient();

// Scroll to top on route change
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  
  return null;
};

// Page wrapper with transition
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <div 
      key={location.pathname}
      className="animate-page-enter"
    >
      {children}
    </div>
  );
};

const AppRoutes = () => (
  <>
    <ScrollToTopOnNavigate />
    <Preloader />
    <Routes>
      <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
      <Route path="/projecten" element={<PageWrapper><Projecten /></PageWrapper>} />
      <Route path="/projecten/:slug" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
      <Route path="/diensten" element={<PageWrapper><Diensten /></PageWrapper>} />
      <Route path="/over-ons" element={<PageWrapper><OverOns /></PageWrapper>} />
      <Route path="/duurzaamheid" element={<PageWrapper><Duurzaamheid /></PageWrapper>} />
      <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
    </Routes>
  </>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
