import { useState, useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const testimonial = {
  quote: "Samen met GPG bouwen we aan werkplekken waar mensen graag komen. Hun expertise en betrokkenheid maken het verschil.",
  author: "Frank van Schaik",
  role: "Directeur",
  company: "GSA Groep",
  initials: "FS",
};

const TestimonialsNew = () => {
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
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Quote section without header */}

        {/* Single Testimonial */}
        <div className={`relative max-w-3xl mx-auto transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="bg-muted/50 border border-border/50 gsa-hoek-lg p-6 sm:p-8 md:p-12 text-center transition-all duration-300 hover:bg-muted/70 hover:border-accent/30">
            {/* Quote Icon */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 md:mb-8 transition-all duration-300 hover:scale-110 hover:bg-accent/20">
              <Quote className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </div>

            {/* Quote Text */}
            <p className="text-lg sm:text-xl md:text-2xl text-primary leading-relaxed mb-8 md:mb-10">
              "{testimonial.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4 group/author">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover/author:scale-110">
                {testimonial.initials}
              </div>
              <div className="text-left">
                <p className="font-semibold text-primary text-lg">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsNew;