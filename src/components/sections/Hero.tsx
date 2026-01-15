import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return <section className="relative min-h-[85vh] flex items-center pt-32 md:pt-40">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Modern office environment" className="w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-accent mb-4 tracking-wide font-semibold">
              GPG FACILITY MANAGEMENT:
            </p>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            SPECIALIST IN FACILITAIRE DIENSTEN MÉT EEN PERSOONLIJKE BENADERING.
          </h1>

          <p className={`text-lg text-white/80 mb-8 max-w-lg transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Complete facilitaire ondersteuning waarmee je kunt vertrouwen op vakwerk, flexibiliteit en een partner die meedenkt.
          </p>

          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Vraag een offerte aan</Link>
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10" asChild>
              <Link to="/projecten">Bekijk projecten</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;