import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PreloaderProps {
  showOnNavigation?: boolean;
}

const Preloader = ({ showOnNavigation = true }: PreloaderProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  const [truckX, setTruckX] = useState(-25);

  useEffect(() => {
    // Reset and show preloader on navigation
    if (showOnNavigation) {
      setIsVisible(true);
      setIsAnimating(true);
      setTruckX(-25);
    }
  }, [location.pathname, showOnNavigation]);

  useEffect(() => {
    if (!isAnimating) return;

    // Prevent scroll during animation
    document.body.style.overflow = "hidden";

    // Animate truck across screen
    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setTruckX(-25 + eased * 150);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Animation complete - fade out
        setTimeout(() => {
          setIsAnimating(false);
          document.body.style.overflow = "";
          setTimeout(() => setIsVisible(false), 400);
        }, 200);
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
      className={`fixed inset-0 z-[9999] bg-primary flex items-center justify-center transition-opacity duration-400 ${
        !isAnimating ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Road */}
      <div className="absolute w-full" style={{ top: "55%" }}>
        <div className="h-16 bg-gray-800 relative">
          {/* Road lines */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center overflow-hidden">
            <div className="flex gap-8 animate-road-move">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-12 h-1 bg-yellow-400 rounded flex-shrink-0" />
              ))}
            </div>
          </div>
        </div>
        <div className="h-1 bg-white/30" />
      </div>

      {/* Truck */}
      <div
        className="absolute"
        style={{
          left: `${truckX}%`,
          top: "40%",
        }}
      >
        <svg width="180" height="100" viewBox="0 0 180 100" className="drop-shadow-xl">
          {/* Cargo */}
          <rect x="0" y="15" width="100" height="55" rx="3" fill="white" />
          <text
            x="50"
            y="48"
            textAnchor="middle"
            fontSize="18"
            fontWeight="bold"
            fill="#1e3a5f"
            fontFamily="system-ui"
          >
            GPG
          </text>
          <text
            x="50"
            y="60"
            textAnchor="middle"
            fontSize="5"
            fill="#1e3a5f"
            opacity="0.7"
            fontFamily="system-ui"
          >
            FACILITY MANAGEMENT
          </text>

          {/* Cabin */}
          <path d="M100 25 L100 70 L140 70 L140 45 L125 25 Z" fill="white" />
          <path d="M105 30 L105 55 L130 55 L130 46 L122 30 Z" fill="#1e3a5f" opacity="0.3" />

          {/* Headlight */}
          <circle cx="138" cy="55" r="3" fill="#c9a227" />

          {/* Wheels */}
          <g>
            <circle cx="30" cy="78" r="12" fill="#222" />
            <circle cx="30" cy="78" r="8" fill="#333" />
            <circle cx="30" cy="78" r="3" fill="#555" />
            <g style={{ transformOrigin: "30px 78px" }} className="animate-spin-wheel">
              <rect x="29" y="68" width="2" height="8" fill="#444" />
              <rect x="29" y="82" width="2" height="8" fill="#444" />
              <rect x="22" y="77" width="8" height="2" fill="#444" />
              <rect x="34" y="77" width="8" height="2" fill="#444" />
            </g>
          </g>

          <g>
            <circle cx="75" cy="78" r="12" fill="#222" />
            <circle cx="75" cy="78" r="8" fill="#333" />
            <circle cx="75" cy="78" r="3" fill="#555" />
            <g style={{ transformOrigin: "75px 78px" }} className="animate-spin-wheel">
              <rect x="74" y="68" width="2" height="8" fill="#444" />
              <rect x="74" y="82" width="2" height="8" fill="#444" />
              <rect x="67" y="77" width="8" height="2" fill="#444" />
              <rect x="79" y="77" width="8" height="2" fill="#444" />
            </g>
          </g>

          <g>
            <circle cx="120" cy="78" r="10" fill="#222" />
            <circle cx="120" cy="78" r="7" fill="#333" />
            <circle cx="120" cy="78" r="2.5" fill="#555" />
            <g style={{ transformOrigin: "120px 78px" }} className="animate-spin-wheel">
              <rect x="119" y="70" width="2" height="6" fill="#444" />
              <rect x="119" y="82" width="2" height="6" fill="#444" />
              <rect x="114" y="77" width="6" height="2" fill="#444" />
              <rect x="122" y="77" width="6" height="2" fill="#444" />
            </g>
          </g>

          {/* Smoke */}
          <circle cx="-8" cy="65" r="4" fill="white" opacity="0.3" className="animate-ping" />
          <circle cx="-18" cy="60" r="3" fill="white" opacity="0.2" className="animate-ping" style={{ animationDelay: "0.2s" }} />
        </svg>
      </div>

      {/* Text */}
      <div className="absolute bottom-24 text-center">
        <p className="text-white text-xl md:text-2xl font-bold mb-2">GPG Facility Management</p>
        <p className="text-white/50 text-sm tracking-widest uppercase">Laden...</p>
      </div>
    </div>
  );
};

export default Preloader;
