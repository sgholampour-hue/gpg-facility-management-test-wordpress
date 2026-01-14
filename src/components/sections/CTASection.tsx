import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import ctaImage from "@/assets/cta-worker.jpg";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Contact bar */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="accent-bar-left">
              <p className="text-muted-foreground max-w-lg">
                Benieuwd wat wij voor je kunnen betekenen? Neem direct contact met ons op en ontdek hoe wij jouw project tot een succes kunnen maken. Wij zorgen voor een oplossing op maat!
              </p>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-3 text-primary font-medium uppercase tracking-wide hover:text-accent transition-colors group"
            >
              Neem contact op
              <span className="arrow-button group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA with image */}
      <section ref={sectionRef} className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={ctaImage}
            alt="Professional at work"
            className="w-full h-full object-cover"
          />
          <div className="cta-overlay absolute inset-0" />
        </div>

        <div className="container relative z-10">
          <div className="ml-auto max-w-xl bg-background/95 backdrop-blur-sm p-8 md:p-12 rounded-lg">
            <h2
              className={`text-2xl md:text-3xl font-bold text-primary mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              VAN VISIE NAAR RENDEMENT
            </h2>
            <p
              className={`text-muted-foreground mb-8 leading-relaxed transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Bij GPG Facility Management vertalen we jouw ambities in hoogwaardige facilitaire diensten die comfort, veiligheid én efficiëntie combineren. Met één vast aanspreekpunt begeleiden we het complete traject – van het eerste gesprek tot de dagelijkse operatie – zodat jij altijd grip houdt op tijd, budget en kwaliteit.
            </p>
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button variant="outline" size="lg" asChild>
                <Link to="/over-ons">Meer over onze aanpak</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
