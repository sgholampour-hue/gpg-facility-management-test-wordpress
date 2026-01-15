import { useEffect, useState } from "react";
import gpgLogo from "@/assets/gpg-logo.png";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }, 400);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearInterval(progressInterval);
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary/95 transition-all duration-800 ease-out ${
        isExiting ? "opacity-0 scale-105 blur-sm" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-[80px] animate-pulse"
          style={{ animationDuration: '4s', animationDelay: '1s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo container with glow effect */}
        <div 
          className={`relative transition-all duration-700 ${
            isExiting ? "scale-110 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          {/* Glow ring */}
          <div 
            className="absolute inset-0 -m-4 rounded-full bg-accent/20 blur-xl animate-pulse"
            style={{ animationDuration: '2s' }}
          />
          
          {/* Logo */}
          <div className="relative">
            <img 
              src={gpgLogo} 
              alt="GPG Logo" 
              className="h-20 md:h-28 w-auto brightness-0 invert drop-shadow-2xl"
            />
          </div>
        </div>
        
        {/* Progress bar container */}
        <div className="w-56 md:w-64 space-y-3">
          {/* Progress bar */}
          <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-accent via-accent to-white/80 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer bg-[length:200%_100%]" />
            </div>
          </div>
          
          {/* Progress percentage */}
          <div className="flex justify-between items-center">
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-light">
              Loading
            </p>
            <p className="text-white/60 text-xs font-mono">
              {Math.round(progress)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
