import { useEffect, useRef, useState } from "react";
import { Building, Users, Calendar, Award } from "lucide-react";

const stats = [
  { icon: Calendar, value: "15+", label: "Jaar ervaring", suffix: "" },
  { icon: Building, value: "500", label: "Projecten voltooid", suffix: "+" },
  { icon: Users, value: "50", label: "Professionals", suffix: "+" },
  { icon: Award, value: "98", label: "Klanttevredenheid", suffix: "%" },
];

const StatsTicker = () => {
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
      className="py-8 md:py-12 bg-primary relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-3">
                <stat.icon className="w-5 h-5 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-xs md:text-sm text-white/70 uppercase tracking-wide">
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
