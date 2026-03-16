import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import HeaderNew from "@/components/layout/HeaderNew";
import Index from "./pages/Index";
import Projecten from "./pages/Projecten";
import ProjectDetail from "./pages/ProjectDetail";
import Diensten from "./pages/Diensten";
import OverOns from "./pages/OverOns";
import Duurzaamheid from "./pages/Duurzaamheid";
import Contact from "./pages/Contact";
import Voorwaarden from "./pages/Voorwaarden";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Preloader from "./components/ui/Preloader";

// Admin pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import PagesList from "./pages/admin/PagesList";
import PageEditor from "./pages/admin/PageEditor";
import GlobalSettings from "./pages/admin/GlobalSettings";
import MediaManager from "./pages/admin/MediaManager";
import UserManager from "./pages/admin/UserManager";
import AdminLayout from "./components/admin/AdminLayout";

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

// Public routes with header
const PublicRoutes = () => (
  <>
    <ScrollToTopOnNavigate />
    <Preloader />
    <HeaderNew />
    <Routes>
      <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
      <Route path="/projecten" element={<PageWrapper><Projecten /></PageWrapper>} />
      <Route path="/projecten/:slug" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
      <Route path="/diensten" element={<PageWrapper><Diensten /></PageWrapper>} />
      <Route path="/over-ons" element={<PageWrapper><OverOns /></PageWrapper>} />
      <Route path="/duurzaamheid" element={<PageWrapper><Duurzaamheid /></PageWrapper>} />
      <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      <Route path="/voorwaarden" element={<PageWrapper><Voorwaarden /></PageWrapper>} />
      <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
      <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
    </Routes>
  </>
);


const AppRoutes = () => (
  <Routes>
    <Route path="/admin/login" element={<Login />} />
    <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
    <Route path="/admin/paginas" element={<AdminLayout><PagesList /></AdminLayout>} />
    <Route path="/admin/paginas/:slug" element={<AdminLayout><PageEditor /></AdminLayout>} />
    <Route path="/admin/instellingen" element={<AdminLayout><GlobalSettings /></AdminLayout>} />
    <Route path="/admin/media" element={<AdminLayout><MediaManager /></AdminLayout>} />
    <Route path="/admin/gebruikers" element={<AdminLayout><UserManager /></AdminLayout>} />
    <Route path="/*" element={<PublicRoutes />} />
  </Routes>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
