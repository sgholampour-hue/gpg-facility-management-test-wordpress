import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [truckPosition, setTruckPosition] = useState(-20);

  useEffect(() => {
    // Animate truck driving across the screen
    const startTime = Date.now();
    const duration = 2000; // 2 seconds to cross

    const animateTruck = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth acceleration/deceleration
      const easeInOutCubic = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      // Move from -20% to 120% of screen width
      const newPosition = -20 + (easeInOutCubic * 140);
      setTruckPosition(newPosition);

      if (progress < 1) {
        requestAnimationFrame(animateTruck);
      }
    };

    requestAnimationFrame(animateTruck);

    const handleLoad = () => {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      }, 1800);
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
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary to-primary/95 transition-all duration-600 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Road/ground line */}
      <div className="absolute bottom-1/2 left-0 right-0 translate-y-16">
        <div className="h-1 bg-white/10" />
        <div className="h-px bg-white/20 mt-px" />
      </div>

      {/* Truck container */}
      <div 
        className="absolute bottom-1/2 translate-y-8 transition-none"
        style={{ 
          left: `${truckPosition}%`,
          transform: 'translateY(8px)'
        }}
      >
        {/* Truck SVG */}
        <svg 
          width="120" 
          height="60" 
          viewBox="0 0 120 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          {/* Truck body/cargo area */}
          <rect x="0" y="10" width="70" height="35" rx="3" fill="white" />
          <rect x="2" y="12" width="66" height="31" rx="2" fill="hsl(var(--accent))" opacity="0.3" />
          
          {/* GPG text on cargo */}
          <text x="35" y="32" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            GPG
          </text>
          
          {/* Cabin */}
          <path d="M70 20 L70 45 L95 45 L95 30 L85 20 Z" fill="white" />
          <path d="M72 22 L72 43 L93 43 L93 31 L84 22 Z" fill="hsl(var(--primary))" opacity="0.3" />
          
          {/* Window */}
          <path d="M75 25 L75 35 L88 35 L88 30 L82 25 Z" fill="hsl(var(--accent))" opacity="0.5" />
          
          {/* Front bumper */}
          <rect x="93" y="40" width="7" height="5" rx="1" fill="white" opacity="0.8" />
          
          {/* Wheels with animation */}
          <g className="animate-spin" style={{ transformOrigin: '22px 50px', animationDuration: '0.5s' }}>
            <circle cx="22" cy="50" r="9" fill="white" opacity="0.9" />
            <circle cx="22" cy="50" r="6" fill="hsl(var(--primary))" />
            <circle cx="22" cy="50" r="2" fill="white" opacity="0.5" />
          </g>
          <g className="animate-spin" style={{ transformOrigin: '55px 50px', animationDuration: '0.5s' }}>
            <circle cx="55" cy="50" r="9" fill="white" opacity="0.9" />
            <circle cx="55" cy="50" r="6" fill="hsl(var(--primary))" />
            <circle cx="55" cy="50" r="2" fill="white" opacity="0.5" />
          </g>
          <g className="animate-spin" style={{ transformOrigin: '85px 50px', animationDuration: '0.5s' }}>
            <circle cx="85" cy="50" r="7" fill="white" opacity="0.9" />
            <circle cx="85" cy="50" r="4.5" fill="hsl(var(--primary))" />
            <circle cx="85" cy="50" r="1.5" fill="white" opacity="0.5" />
          </g>
          
          {/* Headlight glow */}
          <circle cx="98" cy="38" r="2" fill="hsl(var(--accent))" />
          <circle cx="98" cy="38" r="4" fill="hsl(var(--accent))" opacity="0.3" />
        </svg>

        {/* Dust/smoke trail */}
        <div className="absolute -left-8 bottom-1 flex gap-1">
          <div className="w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
          <div className="w-1.5 h-1.5 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
        </div>
      </div>

      {/* Loading text */}
      <div className="absolute bottom-1/3 text-center">
        <p className="text-white/60 text-sm tracking-[0.3em] uppercase font-light mb-2">
          GPG Facility Management
        </p>
        <div className="flex justify-center gap-1">
          <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-[80px]"
        />
      </div>
    </div>
  );
};

export default Preloader;
