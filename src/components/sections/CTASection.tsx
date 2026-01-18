import { useEffect, useRef, useState, memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import gpgMovers from "@/assets/gpg-movers.jpg";

const CTASection = memo(() => {
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
      <section className="py-8 md:py-12 bg-background border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
            <div className="accent-bar-left">
              <p className="text-muted-foreground max-w-lg text-sm md:text-base">
                Benieuwd wat wij voor je kunnen betekenen? Neem direct contact met ons op en ontdek hoe wij jouw project tot een succes kunnen maken.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 md:gap-3 text-primary font-medium uppercase tracking-wide hover:text-accent transition-colors group text-sm md:text-base"
            >
              Neem contact op
              <span className="arrow-button w-8 h-8 md:w-10 md:h-10 group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA with image */}
      <section ref={sectionRef} className="relative min-h-[350px] md:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={gpgMovers}
            alt="GPG verhuizers aan het werk in moderne kantoorruimte"
            className="w-full h-full object-cover"
            style={{ transform: 'scaleX(-1)' }}
            loading="lazy"
            decoding="async"
          />
          <div className="cta-overlay absolute inset-0" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 py-8 md:py-0">
          <div className="ml-auto max-w-xl bg-background/95 backdrop-blur-sm p-6 md:p-8 lg:p-12 gsa-hoek-lg">
            <h2
              className={`text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-4 md:mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              VAN VISIE NAAR RENDEMENT
            </h2>
            <p
              className={`text-muted-foreground mb-6 md:mb-8 leading-relaxed text-sm md:text-base transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Bij GPG Facility Management vertalen we jouw ambities in hoogwaardige facilitaire diensten die comfort, veiligheid én efficiëntie combineren. Met één vast aanspreekpunt begeleiden we het complete traject.
            </p>
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button variant="outline" size="lg" className="w-full md:w-auto" asChild>
                <Link to="/over-ons">Meer over onze aanpak</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

CTASection.displayName = "CTASection";

export default CTASection;
