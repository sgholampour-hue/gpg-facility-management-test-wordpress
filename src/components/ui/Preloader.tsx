import { useEffect, useState, useRef } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [truckPosition, setTruckPosition] = useState(-20);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Animate truck driving across the screen
    const startTime = Date.now();
    const duration = 3000; // 3 seconds to cross

    const animateTruck = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth movement
      const easeInOutQuad = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      // Move from -20% to 120% of screen width
      const newPosition = -20 + (easeInOutQuad * 140);
      setTruckPosition(newPosition);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateTruck);
      }
    };

    // Start animation immediately
    animationRef.current = requestAnimationFrame(animateTruck);

    // Start exit animation after truck crosses
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      document.body.style.overflow = '';
      
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    }, 3100);

    return () => {
      clearTimeout(exitTimer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.body.style.overflow = '';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary transition-all duration-600 ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary/90" />

      {/* Road with markings */}
      <div className="absolute left-0 right-0" style={{ top: '58%' }}>
        {/* Road surface */}
        <div className="h-20 md:h-24 bg-[#1f1f1f] relative shadow-lg">
          {/* Road texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
          
          {/* Road markings - dashed center line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex overflow-hidden">
            <div className="flex gap-6 animate-road-scroll">
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-16 h-1.5 bg-yellow-400/80 rounded-sm flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
        {/* Road edge lines */}
        <div className="absolute -top-1 left-0 right-0 h-2 bg-white/40" />
        <div className="absolute -bottom-1 left-0 right-0 h-2 bg-white/40" />
      </div>

      {/* Ground/grass below road */}
      <div className="absolute left-0 right-0 bottom-0 h-1/4 bg-gradient-to-t from-green-900/30 to-transparent" />

      {/* Truck container */}
      <div 
        className="absolute"
        style={{ 
          left: `${truckPosition}%`,
          top: '38%',
          transition: 'none',
        }}
      >
        {/* Truck SVG */}
        <svg 
          width="200" 
          height="120" 
          viewBox="0 0 200 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          {/* Shadow under truck */}
          <ellipse cx="100" cy="115" rx="85" ry="8" fill="black" opacity="0.3" />
          
          {/* Truck body/cargo area */}
          <rect x="5" y="20" width="110" height="65" rx="4" fill="white" />
          <rect x="8" y="23" width="104" height="59" rx="3" fill="hsl(var(--accent))" opacity="0.1" />
          
          {/* Cargo door lines */}
          <line x1="40" y1="25" x2="40" y2="80" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.2" />
          <line x1="80" y1="25" x2="80" y2="80" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.2" />
          
          {/* GPG Logo on cargo */}
          <rect x="25" y="38" width="70" height="30" rx="3" fill="hsl(var(--primary))" opacity="0.1" />
          <text x="60" y="58" textAnchor="middle" fill="hsl(var(--primary))" fontSize="18" fontWeight="bold" fontFamily="system-ui, sans-serif">
            GPG
          </text>
          <text x="60" y="72" textAnchor="middle" fill="hsl(var(--primary))" fontSize="6" fontWeight="500" fontFamily="system-ui, sans-serif" opacity="0.7">
            FACILITY MANAGEMENT
          </text>
          
          {/* Cabin */}
          <path d="M115 30 L115 85 L160 85 L160 50 L140 30 Z" fill="white" />
          <path d="M118 33 L118 82 L157 82 L157 52 L139 33 Z" fill="hsl(var(--primary))" opacity="0.08" />
          
          {/* Window with reflection */}
          <path d="M122 38 L122 58 L152 58 L152 52 L138 38 Z" fill="#1e3a5f" opacity="0.8" />
          <path d="M124 40 L124 48 L132 40 Z" fill="white" opacity="0.3" />
          
          {/* Side mirror */}
          <rect x="158" y="45" width="8" height="6" rx="1" fill="#333" />
          <rect x="159" y="46" width="6" height="4" rx="0.5" fill="#666" />
          
          {/* Front grille */}
          <rect x="157" y="60" width="10" height="22" rx="2" fill="white" />
          <rect x="159" y="62" width="2" height="5" rx="0.5" fill="hsl(var(--primary))" opacity="0.2" />
          <rect x="159" y="69" width="2" height="5" rx="0.5" fill="hsl(var(--primary))" opacity="0.2" />
          <rect x="159" y="76" width="2" height="4" rx="0.5" fill="hsl(var(--primary))" opacity="0.2" />
          
          {/* Headlights */}
          <circle cx="164" cy="65" r="4" fill="hsl(var(--accent))" />
          <circle cx="164" cy="65" r="6" fill="hsl(var(--accent))" opacity="0.4" />
          <circle cx="164" cy="65" r="10" fill="hsl(var(--accent))" opacity="0.15" />
          
          {/* Turn signal */}
          <rect x="163" y="75" width="4" height="3" rx="1" fill="orange" opacity="0.8" />
          
          {/* Front bumper */}
          <rect x="156" y="82" width="14" height="5" rx="1" fill="#ddd" />
          
          {/* Wheels - Back wheel 1 */}
          <g>
            <circle cx="40" cy="95" r="17" fill="#1a1a1a" />
            <circle cx="40" cy="95" r="14" fill="#2a2a2a" />
            <circle cx="40" cy="95" r="10" fill="#1a1a1a" />
            <circle cx="40" cy="95" r="4" fill="#444" />
            {/* Wheel spokes - spinning */}
            <g className="origin-center animate-spin" style={{ transformOrigin: '40px 95px', animationDuration: '0.25s' }}>
              <rect x="39" y="80" width="2" height="12" rx="1" fill="#3a3a3a" />
              <rect x="39" y="98" width="2" height="12" rx="1" fill="#3a3a3a" />
              <rect x="28" y="94" width="12" height="2" rx="1" fill="#3a3a3a" />
              <rect x="44" y="94" width="12" height="2" rx="1" fill="#3a3a3a" />
            </g>
            {/* Tire shine */}
            <circle cx="35" cy="90" r="3" fill="white" opacity="0.1" />
          </g>
          
          {/* Wheels - Back wheel 2 */}
          <g>
            <circle cx="85" cy="95" r="17" fill="#1a1a1a" />
            <circle cx="85" cy="95" r="14" fill="#2a2a2a" />
            <circle cx="85" cy="95" r="10" fill="#1a1a1a" />
            <circle cx="85" cy="95" r="4" fill="#444" />
            {/* Wheel spokes - spinning */}
            <g className="origin-center animate-spin" style={{ transformOrigin: '85px 95px', animationDuration: '0.25s' }}>
              <rect x="84" y="80" width="2" height="12" rx="1" fill="#3a3a3a" />
              <rect x="84" y="98" width="2" height="12" rx="1" fill="#3a3a3a" />
              <rect x="73" y="94" width="12" height="2" rx="1" fill="#3a3a3a" />
              <rect x="89" y="94" width="12" height="2" rx="1" fill="#3a3a3a" />
            </g>
            {/* Tire shine */}
            <circle cx="80" cy="90" r="3" fill="white" opacity="0.1" />
          </g>
          
          {/* Wheels - Front wheel */}
          <g>
            <circle cx="140" cy="95" r="15" fill="#1a1a1a" />
            <circle cx="140" cy="95" r="12" fill="#2a2a2a" />
            <circle cx="140" cy="95" r="8" fill="#1a1a1a" />
            <circle cx="140" cy="95" r="3" fill="#444" />
            {/* Wheel spokes - spinning */}
            <g className="origin-center animate-spin" style={{ transformOrigin: '140px 95px', animationDuration: '0.25s' }}>
              <rect x="139" y="82" width="2" height="10" rx="1" fill="#3a3a3a" />
              <rect x="139" y="98" width="2" height="10" rx="1" fill="#3a3a3a" />
              <rect x="130" y="94" width="10" height="2" rx="1" fill="#3a3a3a" />
              <rect x="144" y="94" width="10" height="2" rx="1" fill="#3a3a3a" />
            </g>
            {/* Tire shine */}
            <circle cx="136" cy="91" r="2" fill="white" opacity="0.1" />
          </g>
          
          {/* Exhaust smoke */}
          <g className="opacity-50">
            <circle cx="-5" cy="80" r="5" fill="white" className="animate-ping" style={{ animationDuration: '1.5s' }} />
            <circle cx="-15" cy="75" r="4" fill="white" className="animate-ping" style={{ animationDuration: '1.8s', animationDelay: '0.3s' }} />
            <circle cx="-25" cy="72" r="3" fill="white" className="animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
          </g>
        </svg>
      </div>

      {/* Company name */}
      <div className="absolute bottom-16 md:bottom-20 text-center z-10">
        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wide mb-3">
          GPG Facility Management
        </h1>
        <p className="text-white/50 text-sm md:text-base tracking-[0.2em] uppercase">
          Op weg naar u...
        </p>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
      </div>
    </div>
  );
};

export default Preloader;
