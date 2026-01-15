import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wat doet GPG Facility Management precies?",
    answer:
      "GPG Facility Management is een facilitair dienstverlener gespecialiseerd in handyman diensten, verhuizingen, integrated facilities, fit-out projecten, inkoop van inrichtingscomponenten en projectinrichting & stoffering. Wij ontzorgen organisaties bij al hun facilitaire vraagstukken.",
  },
  {
    question: "In welke regio's zijn jullie actief?",
    answer:
      "Wij zijn actief in heel Nederland met een focus op de Randstad. Onze HUB-locaties in Schiphol, IJmuiden, Rotterdam en Oud Beijerland zorgen voor optimale dekking in Noord- en Zuid-Holland.",
  },
  {
    question: "Werken jullie ook voor kleine bedrijven?",
    answer:
      "Absoluut! Wij werken voor zowel grote multinationals als het MKB. Onze dienstverlening is schaalbaar en wij passen onze aanpak aan op de specifieke behoeften en omvang van elke organisatie.",
  },
  {
    question: "Hoe lang bestaat GPG Facility Management?",
    answer:
      "GPG Facility Management is onderdeel van de GSA Groep, die sinds 1982 actief is. Met meer dan 40 jaar ervaring in facilitaire dienstverlening kunt u rekenen op bewezen expertise.",
  },
  {
    question: "Hoe kan ik een offerte aanvragen?",
    answer:
      "U kunt eenvoudig een offerte aanvragen via ons contactformulier, telefonisch via 020 - 795 28 20 of per e-mail naar info@gpg-fm.nl. Wij reageren binnen 24 uur op uw aanvraag.",
  },
  {
    question: "Werken jullie met vaste prijzen of nacalculatie?",
    answer:
      "Wij werken met heldere, vooraf afgesproken prijzen. Na een inventarisatie ontvangt u een transparante offerte. Voor doorlopende dienstverlening bieden wij ook contractvormen aan.",
  },
];

interface FAQSectionProps {
  variant?: "light" | "dark";
  showTitle?: boolean;
}

const FAQSection = ({ variant = "light", showTitle = true }: FAQSectionProps) => {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-12 md:py-16 ${isDark ? "bg-primary" : "bg-muted/30"}`}
    >
      <div className="container px-4 md:px-6">
        {showTitle && (
          <div className="text-center mb-8 md:mb-12">
            <p
              className={`text-xs md:text-sm font-medium mb-2 uppercase tracking-wider ${
                isDark ? "text-accent" : "text-accent"
              }`}
            >
              Veelgestelde vragen
            </p>
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-bold ${
                isDark ? "text-white" : "text-primary"
              }`}
            >
              FAQ
            </h2>
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border gsa-hoek px-4 md:px-6 ${
                  isDark
                    ? "border-white/10 bg-white/5"
                    : "border-border bg-white"
                }`}
              >
                <AccordionTrigger
                  className={`text-left hover:no-underline py-4 md:py-5 ${
                    isDark
                      ? "text-white hover:text-accent"
                      : "text-primary hover:text-accent"
                  }`}
                >
                  <span className="font-semibold text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  className={`pb-4 md:pb-5 text-sm md:text-base leading-relaxed ${
                    isDark ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
