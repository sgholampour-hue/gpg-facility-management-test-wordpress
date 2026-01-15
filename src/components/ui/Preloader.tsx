import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [truckPosition, setTruckPosition] = useState(-15);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Animate truck driving across the screen
    const startTime = Date.now();
    const duration = 2500; // 2.5 seconds to cross

    const animateTruck = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth acceleration/deceleration
      const easeInOutQuad = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      // Move from -15% to 115% of screen width
      const newPosition = -15 + (easeInOutQuad * 130);
      setTruckPosition(newPosition);

      if (progress < 1) {
        requestAnimationFrame(animateTruck);
      }
    };

    // Start animation immediately
    requestAnimationFrame(animateTruck);

    // Start exit animation after truck crosses
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      document.body.style.overflow = '';
      
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 2600);

    return () => {
      clearTimeout(exitTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Road with markings */}
      <div className="absolute left-0 right-0" style={{ top: '55%' }}>
        {/* Road surface */}
        <div className="h-16 bg-[#2a2a2a] relative">
          {/* Road markings - dashed center line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex gap-8 justify-center overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="w-12 h-1 bg-white/60 rounded-full flex-shrink-0 animate-road-line"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        {/* Road edge lines */}
        <div className="absolute -top-0.5 left-0 right-0 h-1 bg-white/30" />
        <div className="absolute -bottom-0.5 left-0 right-0 h-1 bg-white/30" />
      </div>

      {/* Truck container */}
      <div 
        className="absolute transition-none"
        style={{ 
          left: `${truckPosition}%`,
          top: '42%',
        }}
      >
        {/* Truck SVG */}
        <svg 
          width="160" 
          height="90" 
          viewBox="0 0 160 90" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          {/* Truck body/cargo area */}
          <rect x="5" y="15" width="90" height="50" rx="4" fill="white" />
          <rect x="8" y="18" width="84" height="44" rx="2" fill="hsl(var(--accent))" opacity="0.15" />
          
          {/* GPG Logo area on cargo */}
          <rect x="20" y="28" width="60" height="24" rx="2" fill="white" />
          <text x="50" y="45" textAnchor="middle" fill="hsl(var(--primary))" fontSize="16" fontWeight="bold" fontFamily="system-ui, sans-serif">
            GPG
          </text>
          
          {/* Cabin */}
          <path d="M95 25 L95 65 L130 65 L130 40 L115 25 Z" fill="white" />
          <path d="M98 28 L98 62 L127 62 L127 42 L114 28 Z" fill="hsl(var(--primary))" opacity="0.15" />
          
          {/* Window with reflection */}
          <path d="M102 32 L102 48 L122 48 L122 42 L112 32 Z" fill="hsl(var(--accent))" opacity="0.6" />
          <path d="M104 34 L104 40 L110 34 Z" fill="white" opacity="0.4" />
          
          {/* Front grille */}
          <rect x="127" y="45" width="8" height="18" rx="2" fill="white" opacity="0.9" />
          <rect x="128" y="47" width="2" height="4" fill="hsl(var(--primary))" opacity="0.3" />
          <rect x="128" y="53" width="2" height="4" fill="hsl(var(--primary))" opacity="0.3" />
          
          {/* Headlights */}
          <circle cx="132" cy="50" r="3" fill="hsl(var(--accent))" />
          <circle cx="132" cy="50" r="5" fill="hsl(var(--accent))" opacity="0.3" />
          <circle cx="132" cy="50" r="8" fill="hsl(var(--accent))" opacity="0.1" />
          
          {/* Wheels with spinning animation */}
          <g>
            <circle cx="35" cy="72" r="14" fill="#1a1a1a" />
            <circle cx="35" cy="72" r="11" fill="#333" />
            <circle cx="35" cy="72" r="8" fill="#1a1a1a" />
            <circle cx="35" cy="72" r="3" fill="#666" />
            {/* Wheel spokes */}
            <g className="origin-center animate-spin" style={{ transformOrigin: '35px 72px', animationDuration: '0.3s' }}>
              <rect x="34" y="62" width="2" height="8" fill="#555" />
              <rect x="34" y="74" width="2" height="8" fill="#555" />
              <rect x="27" y="71" width="8" height="2" fill="#555" />
              <rect x="37" y="71" width="8" height="2" fill="#555" />
            </g>
          </g>
          
          <g>
            <circle cx="75" cy="72" r="14" fill="#1a1a1a" />
            <circle cx="75" cy="72" r="11" fill="#333" />
            <circle cx="75" cy="72" r="8" fill="#1a1a1a" />
            <circle cx="75" cy="72" r="3" fill="#666" />
            {/* Wheel spokes */}
            <g className="origin-center animate-spin" style={{ transformOrigin: '75px 72px', animationDuration: '0.3s' }}>
              <rect x="74" y="62" width="2" height="8" fill="#555" />
              <rect x="74" y="74" width="2" height="8" fill="#555" />
              <rect x="67" y="71" width="8" height="2" fill="#555" />
              <rect x="77" y="71" width="8" height="2" fill="#555" />
            </g>
          </g>
          
          <g>
            <circle cx="115" cy="72" r="12" fill="#1a1a1a" />
            <circle cx="115" cy="72" r="9" fill="#333" />
            <circle cx="115" cy="72" r="6" fill="#1a1a1a" />
            <circle cx="115" cy="72" r="2.5" fill="#666" />
            {/* Wheel spokes */}
            <g className="origin-center animate-spin" style={{ transformOrigin: '115px 72px', animationDuration: '0.3s' }}>
              <rect x="114" y="64" width="2" height="6" fill="#555" />
              <rect x="114" y="74" width="2" height="6" fill="#555" />
              <rect x="109" y="71" width="6" height="2" fill="#555" />
              <rect x="117" y="71" width="6" height="2" fill="#555" />
            </g>
          </g>
          
          {/* Exhaust smoke */}
          <g className="opacity-40">
            <circle cx="-5" cy="60" r="4" fill="white" className="animate-ping" style={{ animationDuration: '1s' }} />
            <circle cx="-12" cy="55" r="3" fill="white" className="animate-ping" style={{ animationDuration: '1.2s', animationDelay: '0.2s' }} />
            <circle cx="-18" cy="52" r="2" fill="white" className="animate-ping" style={{ animationDuration: '1.4s', animationDelay: '0.4s' }} />
          </g>
        </svg>
      </div>

      {/* Company name */}
      <div className="absolute bottom-1/4 text-center">
        <h1 className="text-white text-xl md:text-2xl font-bold tracking-wide mb-2">
          GPG Facility Management
        </h1>
        <p className="text-white/50 text-sm tracking-[0.2em] uppercase">
          Op weg naar u...
        </p>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
      </div>
    </div>
  );
};

export default Preloader;
