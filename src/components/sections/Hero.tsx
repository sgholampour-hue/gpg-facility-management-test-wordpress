import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 md:pt-40">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern office environment" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className={getAnimationClasses(0)} style={getAnimationStyle(0)}>
            <p className="text-accent mb-4 tracking-wide font-semibold">
              GPG FACILITY MANAGEMENT:
            </p>
          </div>

          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 ${getAnimationClasses(100)}`}
            style={getAnimationStyle(100)}
          >
            SPECIALIST IN FACILITAIRE DIENSTEN MÉT EEN PERSOONLIJKE BENADERING.
          </h1>

          <p 
            className={`text-lg text-white/80 mb-8 max-w-lg ${getAnimationClasses(200)}`}
            style={getAnimationStyle(200)}
          >
            Complete facilitaire ondersteuning waarmee je kunt vertrouwen op vakwerk, flexibiliteit en een partner die meedenkt.
          </p>

          <div 
            className={`flex flex-wrap gap-4 ${getAnimationClasses(300)}`}
            style={getAnimationStyle(300)}
          >
            <Button 
              variant="hero" 
              size="lg" 
              asChild 
              className="hover-lift focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              <Link to="/contact">Vraag een offerte aan</Link>
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white" 
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