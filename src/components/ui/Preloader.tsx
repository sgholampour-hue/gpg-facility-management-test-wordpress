import { useEffect, useState } from "react";
import gpgLogo from "@/assets/gpg-logo.png";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Wait for page to fully load
    const handleLoad = () => {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      }, 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-primary transition-all duration-600 ${
        isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo with pulse animation */}
        <div className={`relative ${isExiting ? "scale-110" : "animate-pulse"}`}>
          <img 
            src={gpgLogo} 
            alt="GPG Logo" 
            className="h-16 md:h-20 w-auto brightness-0 invert"
          />
        </div>
        
        {/* Loading bar */}
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-accent rounded-full transition-all duration-1000 ease-out ${
              isExiting ? "w-full" : "w-0 animate-loading-bar"
            }`}
          />
        </div>
        
        {/* Loading text */}
        <p className="text-white/60 text-sm tracking-widest uppercase">
          Loading...
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-300" />
    </div>
  );
};

export default Preloader;
