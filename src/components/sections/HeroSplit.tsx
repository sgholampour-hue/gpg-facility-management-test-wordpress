import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";

const highlights = [
  "15+ jaar ervaring",
  "Eén vast aanspreekpunt",
  "Flexibel & betrouwbaar",
  "Premium kwaliteit"
];

const HeroSplit = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax scroll effect
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

  const parallaxOffset = prefersReducedMotion ? 0 : scrollY * 0.15;
  const parallaxScale = prefersReducedMotion ? 1 : 1 + scrollY * 0.0001;

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[85svh] md:min-h-[85svh] lg:min-h-[95vh] pt-28 sm:pt-32 md:pt-36 lg:pt-28 pb-6 md:pb-12 lg:pb-0 bg-background overflow-hidden"
    >
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-muted/50">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:min-h-[70vh]">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1 space-y-5 sm:space-y-6 lg:space-y-8">
            {/* Est. Badge */}
            <div 
              className={`inline-flex items-center gap-3 sm:gap-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-xs sm:text-sm font-medium text-muted-foreground tracking-wide">EST. 2008</span>
              <span className="w-8 sm:w-12 h-px bg-border" />
              <span className="text-xs sm:text-sm font-semibold text-accent tracking-wider uppercase">Facility Management</span>
            </div>

            {/* Headline */}
            <h1 
              className={`text-[1.75rem] leading-[1.15] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Facilitaire diensten met een{" "}
              <span className="relative inline-block">
                <span className="relative z-10">persoonlijke</span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-accent/20 -z-0 rounded" />
              </span>{" "}
              benadering.
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Complete facilitaire ondersteuning voor kantoren en bedrijven. 
              Vakwerk, flexibiliteit en een partner die meedenkt bij elk project.
            </p>

            {/* Highlights */}
            <div 
              className={`grid grid-cols-2 gap-2 sm:gap-3 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {highlights.map((item, index) => (
                <div 
                  key={item}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-foreground/80 group/item cursor-default"
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                  <span className="transition-colors duration-200 group-hover/item:text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button 
                variant="outline-accent" 
                size="xl" 
                className="gsa-hoek-sm group" 
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Neem contact op
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="xl" 
                className="gsa-hoek-sm bg-white/10 backdrop-blur-md border-2 border-primary/20 text-primary hover:bg-white/20 hover:border-primary/40"
                asChild
              >
                <Link to="/projecten">Bekijk projecten</Link>
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div 
            className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Main Image Container with Parallax */}
            <div className="relative">
              {/* Decorative elements with parallax */}
              <div 
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-3xl -z-10 will-change-transform"
                style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
              />
              <div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-3xl -z-10 will-change-transform"
                style={{ transform: `translateY(${parallaxOffset * -0.2}px)` }}
              />
              
              {/* Image with parallax and strong gradient overlay */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div 
                  className="will-change-transform"
                  style={{ 
                    transform: `translateY(${parallaxOffset * 0.1}px) scale(${parallaxScale})`,
                  }}
                >
                  <img 
                    src={heroImage} 
                    alt="Modern kantooromgeving met professionele faciliteiten"
                    className="w-full aspect-[4/3] lg:aspect-[4/5] object-cover object-[70%_20%]"
                    loading="eager"
                    decoding="sync"
                    fetchPriority="high"
                  />
                </div>
                
                {/* Strong blue gradient overlay from bottom - like reference image */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-70 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Stats Card */}
              <div 
                className={`absolute -bottom-6 -left-6 lg:-left-12 bg-background gsa-hoek-sm shadow-xl border border-border/50 p-4 md:p-5 transition-all duration-700 delay-500 hover:shadow-2xl hover:-translate-y-1 hover:border-accent/30 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center transition-colors duration-200 group-hover:bg-accent/20">
                    <span className="text-2xl font-bold text-accent">15+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Jaar ervaring</p>
                    <p className="text-xs text-muted-foreground">in facility management</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div 
                className={`absolute -top-3 -right-3 lg:top-6 lg:-right-6 bg-accent text-white px-4 py-2 rounded-full shadow-lg transition-all duration-700 delay-600 hover:scale-105 hover:shadow-xl cursor-default ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-wide">Premium kwaliteit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplit;
