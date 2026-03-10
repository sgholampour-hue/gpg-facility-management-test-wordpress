import { useEffect, useRef, useState } from "react";
import { Building, Users, Calendar, Award } from "lucide-react";
import { usePageContent } from "@/hooks/useCmsContent";

const defaultStats = [
  { icon: Calendar, value: "40", label: "Jaar ervaring", suffix: "+" },
  { icon: Building, value: "600", label: "Interieur producten", suffix: "+" },
  { icon: Users, value: "50", label: "Professionals", suffix: "+" },
  { icon: Award, value: "98", label: "Klanttevredenheid", suffix: "%" },
];

const iconMap: Record<number, any> = { 0: Calendar, 1: Building, 2: Users, 3: Award };

const StatsTicker = () => {
  const { sections } = usePageContent("home");
  const cmsStats = sections?.stats as any[] | undefined;
  const stats = cmsStats
    ? cmsStats.map((s: any, i: number) => ({ ...s, icon: iconMap[i] || Calendar }))
    : defaultStats;
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, index) => {
      const target = parseInt(stat.value);
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, duration / steps);

      return () => clearInterval(timer);
    });
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef} 
      className="py-6 md:py-10 lg:py-12 bg-primary relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center transition-all duration-700 group/stat cursor-default ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 mb-2 md:mb-3 transition-all duration-300 group-hover/stat:bg-accent/20 group-hover/stat:scale-110 group-hover/stat:rotate-3">
                <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-accent transition-transform duration-300 group-hover/stat:rotate-12 group-hover/stat:scale-110" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5 md:mb-1 transition-all duration-300 group-hover/stat:scale-105 group-hover/stat:text-accent">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-white/70 uppercase tracking-wide transition-colors duration-300 group-hover/stat:text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsTicker;
