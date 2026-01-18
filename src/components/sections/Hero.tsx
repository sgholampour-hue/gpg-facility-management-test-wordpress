import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  const getAnimationClasses = (delay: number) => {
    if (prefersReducedMotion) return "opacity-100";
    return `transition-all duration-500 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`;
  };

  const getAnimationStyle = (delay: number) => {
    if (prefersReducedMotion) return {};
    return { transitionDelay: `${delay}ms` };
  };

  const parallaxOffset = prefersReducedMotion ? 0 : scrollY * 0.3;

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[85svh] md:min-h-[85vh] flex items-center pt-20 pb-6 md:pt-40 md:pb-0 overflow-hidden"
    >
      {/* Background image with parallax */}
      <div 
        className="absolute inset-0 will-change-transform"
        style={{ 
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
          top: '-5%',
          height: '110%'
        }}
      >
        <img 
          src={heroImage} 
          alt="Modern kantooromgeving met professionele faciliteiten"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
      </div>
      
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl">
          <div className={getAnimationClasses(0)} style={getAnimationStyle(0)}>
            <p className="text-accent mb-3 md:mb-4 tracking-wide font-semibold text-sm md:text-base">
              GPG FACILITY MANAGEMENT:
            </p>
          </div>

          <h1 
            className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-4 md:mb-6 ${getAnimationClasses(100)}`}
            style={getAnimationStyle(100)}
          >
            SPECIALIST IN FACILITAIRE DIENSTEN MÉT EEN PERSOONLIJKE BENADERING.
          </h1>

          <p 
            className={`text-sm sm:text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-lg leading-relaxed ${getAnimationClasses(200)}`}
            style={getAnimationStyle(200)}
          >
            Complete facilitaire ondersteuning waarmee je kunt vertrouwen op vakwerk, flexibiliteit en een partner die meedenkt.
          </p>

          <div 
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${getAnimationClasses(300)}`}
            style={getAnimationStyle(300)}
          >
            <Button 
              variant="hero" 
              size="lg" 
              asChild 
              className="hover-lift focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary w-full sm:w-auto text-sm md:text-base"
            >
              <Link to="/contact">Neem contact op</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/60 text-white bg-white/10 hover:bg-white hover:text-primary focus-visible:ring-2 focus-visible:ring-white w-full sm:w-auto text-sm md:text-base gsa-hoek-sm" 
              asChild
            >
              <Link to="/projecten">Bekijk projecten</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;