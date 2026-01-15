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
  const [progress, setProgress] = useState(0);
  const [logoScale, setLogoScale] = useState(0.8);
  const [logoOpacity, setLogoOpacity] = useState(0);

  useEffect(() => {
    if (showOnNavigation) {
      setIsVisible(true);
      setIsAnimating(true);
      setProgress(0);
      setLogoScale(0.8);
      setLogoOpacity(0);
    }
  }, [location.pathname, showOnNavigation]);

  useEffect(() => {
    if (!isAnimating) return;

    document.body.style.overflow = "hidden";

    // Logo fade in animation
    setTimeout(() => setLogoOpacity(1), 100);
    setTimeout(() => setLogoScale(1), 150);

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const eased = 1 - Math.pow(1 - rawProgress, 3);
      setProgress(Math.round(eased * 100));

      if (rawProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Animate logo out
        setLogoScale(1.1);
        setLogoOpacity(0);
        
        setTimeout(() => {
          setIsAnimating(false);
          document.body.style.overflow = "";
          setTimeout(() => setIsVisible(false), 300);
        }, 400);
      }
    };

    // Start progress animation after logo appears
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 300);

    return () => {
      document.body.style.overflow = "";
    };
  }, [isAnimating, location.pathname]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-300 ${
        !isAnimating ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Centered logo with smooth animation */}
      <div 
        className="transition-all duration-700 ease-out"
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      >
        <img 
          src={gpgLogo} 
          alt="GPG Facility Management" 
          className="h-14 md:h-16 w-auto"
        />
      </div>

      {/* Progress bar below logo */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-48 md:w-56">
        <div className="h-0.5 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
