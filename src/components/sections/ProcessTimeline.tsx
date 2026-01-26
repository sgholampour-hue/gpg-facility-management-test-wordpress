import { useEffect, useRef, useState } from "react";
import { MessageSquare, FileSearch, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Kennismaking",
    description: "We bespreken jouw wensen en maken een plan op maat.",
    number: "01",
  },
  {
    icon: FileSearch,
    title: "Inventarisatie",
    description: "Grondige analyse van de situatie en mogelijkheden.",
    number: "02",
  },
  {
    icon: Hammer,
    title: "Uitvoering",
    description: "Professionele realisatie door ons vakkundige team.",
    number: "03",
  },
  {
    icon: CheckCircle,
    title: "Oplevering",
    description: "Eindcontrole en nazorg voor een perfect resultaat.",
    number: "04",
  },
];

const ProcessTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Animate steps one by one
          steps.forEach((_, index) => {
            setTimeout(() => setActiveStep(index), (index + 1) * 300);
          });
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
            Onze werkwijze
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            Van plan naar realisatie
          </h2>
          <p className="text-muted-foreground">
            Een helder proces met vaste stappen zorgt voor een voorspelbaar en succesvol resultaat.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2">
            <div 
              className="h-full bg-accent transition-all duration-1000"
              style={{ width: activeStep >= 3 ? "100%" : `${(activeStep + 1) * 25}%` }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className={`relative transition-all duration-500 ${
                  activeStep >= index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Mobile connection line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-6 top-16 bottom-0 w-0.5 -mb-8">
                    <div 
                      className="w-full bg-border h-full"
                    >
                      <div 
                        className="w-full bg-accent transition-all duration-500"
                        style={{ height: activeStep > index ? "100%" : "0%" }}
                      />
                    </div>
                  </div>
                )}

                {/* Step Card */}
                <div className="relative bg-background border border-border rounded-2xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300 md:text-center">
                  {/* Number Badge */}
                  <span className="absolute -top-3 right-4 md:left-1/2 md:-translate-x-1/2 text-5xl font-bold text-muted/20">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className={`relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 transition-colors duration-300 ${
                    activeStep >= index ? "bg-accent text-white" : "bg-muted text-muted-foreground"
                  }`}>
                    <step.icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
