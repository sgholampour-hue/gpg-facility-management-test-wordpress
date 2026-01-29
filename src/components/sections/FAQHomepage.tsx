import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Wat maakt GPG anders dan andere facilitaire dienstverleners?",
    answer: "GPG combineert meer dan 40 jaar ervaring met een persoonlijke aanpak. Jij krijgt één vast aanspreekpunt, flexibele oplossingen en we denken proactief mee. Als onderdeel van GSA Groep hebben we de schaalgrootte voor grote projecten én de wendbaarheid voor maatwerk."
  },
  {
    question: "Welke diensten bieden jullie aan?",
    answer: "Wij bieden complete facilitaire ondersteuning: huismeesterdiensten, kantoorverhuizingen, integrated facilities management, fit-out projecten, inkoop van meubilair en projectinrichting. Alles onder één dak, van kleine reparaties tot volledige kantoorinrichtingen."
  },
  {
    question: "In welke regio's zijn jullie actief?",
    answer: "Wij zijn actief in heel Nederland met focus op de Randstad."
  },
  {
    question: "Hoe werkt het aanvraagproces?",
    answer: "Eenvoudig: neem contact op via telefoon, e-mail of ons contactformulier. We plannen een kennismaking, inventariseren je wensen en leveren een helder voorstel. Na akkoord gaan we direct aan de slag met jouw project."
  },
];

const FAQHomepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Header */}
          <div className={`lg:sticky lg:top-32 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide mb-4">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              Heb je vragen over onze diensten of werkwijze? Hier vind je antwoorden op de meest gestelde vragen.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group"
            >
              Heb je andere vragen? Neem contact op
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-background border border-border/50 gsa-hoek-sm overflow-hidden transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-primary text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-8 h-8 gsa-hoek-sm flex items-center justify-center flex-shrink-0 transition-all duration-300",
                    openIndex === index ? "bg-accent text-white" : "bg-accent/10 text-accent"
                  )}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}>
                  <p className="px-4 md:px-5 pb-4 md:pb-5 text-muted-foreground text-sm md:text-base leading-relaxed">
                    {faq.answer}
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

export default FAQHomepage;
