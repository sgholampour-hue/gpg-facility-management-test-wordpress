import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gpgLogo from "@/assets/gpg-logo.png";

interface PreloaderProps {
  showOnNavigation?: boolean;
}

const Preloader = ({ showOnNavigation = true }: PreloaderProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  const [truckX, setTruckX] = useState(-30);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (showOnNavigation) {
      setIsVisible(true);
      setIsAnimating(true);
      setTruckX(-30);
      setProgress(0);
    }
  }, [location.pathname, showOnNavigation]);

  useEffect(() => {
    if (!isAnimating) return;

    document.body.style.overflow = "hidden";

    let startTime: number | null = null;
    const duration = 2800; // Slower, more elegant

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Smooth ease-in-out
      const eased = rawProgress < 0.5
        ? 4 * rawProgress * rawProgress * rawProgress
        : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;

      setTruckX(-30 + eased * 160);
      setProgress(Math.round(rawProgress * 100));

      if (rawProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsAnimating(false);
          document.body.style.overflow = "";
          setTimeout(() => setIsVisible(false), 500);
        }, 300);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      document.body.style.overflow = "";
    };
  }, [isAnimating, location.pathname]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${
        !isAnimating ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo at top */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2">
        <img src={gpgLogo} alt="GPG" className="h-10 md:h-12 w-auto" />
      </div>

      {/* Minimal road line */}
      <div className="absolute w-full" style={{ top: "58%" }}>
        <div className="h-px bg-gray-200 w-full" />
      </div>

      {/* Elegant truck silhouette */}
      <div
        className="absolute"
        style={{
          left: `${truckX}%`,
          top: "48%",
          transform: "translateY(-50%)",
        }}
      >
        <svg width="120" height="50" viewBox="0 0 120 50" fill="none">
          {/* Simple, elegant truck shape */}
          <rect x="0" y="10" width="65" height="28" rx="2" fill="#1e3a5f" />
          <path d="M65 15 L65 38 L90 38 L90 25 L80 15 Z" fill="#1e3a5f" />
          
          {/* Window */}
          <path d="M68 18 L68 28 L84 28 L84 24 L77 18 Z" fill="white" opacity="0.3" />
          
          {/* Wheels */}
          <circle cx="20" cy="42" r="7" fill="#1e3a5f" />
          <circle cx="20" cy="42" r="4" fill="white" opacity="0.2" />
          <circle cx="50" cy="42" r="7" fill="#1e3a5f" />
          <circle cx="50" cy="42" r="4" fill="white" opacity="0.2" />
          <circle cx="78" cy="42" r="6" fill="#1e3a5f" />
          <circle cx="78" cy="42" r="3" fill="white" opacity="0.2" />
        </svg>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 w-48 md:w-64">
        <div className="h-0.5 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-xs text-gray-400 mt-3 tracking-widest uppercase">
          Laden
        </p>
      </div>
    </div>
  );
};

export default Preloader;
