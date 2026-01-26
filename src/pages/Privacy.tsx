import HeaderNew from "@/components/layout/HeaderNew";
import Footer from "@/components/layout/Footer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacyverklaring"
        description="Lees hoe GPG Facility Management omgaat met uw persoonsgegevens en privacy."
        canonical="https://gpg-facility.lovable.app/privacy"
      />
      <HeaderNew />
      <main>
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-10 md:pb-16 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              <RevealOnScroll variant="fade-up">
                <p className="text-accent font-medium mb-2 md:mb-4 uppercase tracking-wider text-xs md:text-sm font-heading">
                  Privacy
                </p>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={100}>
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                  Privacyverklaring
                </h1>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={200}>
                <p className="text-base md:text-xl text-white/80 leading-relaxed font-body">
                  Hoe wij omgaan met uw persoonsgegevens.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <RevealOnScroll variant="fade-up">
                <div className="bg-muted/30 gsa-hoek-lg p-6 md:p-10">
                  <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                    Privacyverklaring GPG Facility Management
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Wie zijn wij?</h3>
                      <p className="text-sm md:text-base leading-relaxed">
                        GPG Facility Management B.V. is onderdeel van de GSA Groep en gevestigd aan de Valkweg 111, 1118 ED Schiphol. Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary mb-2">Welke gegevens verzamelen wij?</h3>
                      <p className="text-sm md:text-base leading-relaxed">
                        Wij verwerken persoonsgegevens die u zelf aan ons verstrekt, zoals: naam, e-mailadres, telefoonnummer, bedrijfsnaam en de inhoud van uw bericht via ons contactformulier.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary mb-2">Waarom verzamelen wij deze gegevens?</h3>
                      <p className="text-sm md:text-base leading-relaxed">
                        Wij gebruiken uw gegevens om contact met u op te nemen naar aanleiding van uw vraag of offerte-aanvraag, om onze dienstverlening te kunnen uitvoeren en voor administratieve doeleinden.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary mb-2">Bewaartermijn</h3>
                      <p className="text-sm md:text-base leading-relaxed">
                        Wij bewaren uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary mb-2">Uw rechten</h3>
                      <p className="text-sm md:text-base leading-relaxed">
                        U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Neem hiervoor contact met ons op via info@gpgfacilities.nl.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary mb-2">Contact</h3>
                      <p className="text-sm md:text-base leading-relaxed">
                        Voor vragen over deze privacyverklaring kunt u contact opnemen via info@gpgfacilities.nl of bel +31(0)20 795 21 00.
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border">
                      Laatst bijgewerkt: januari 2025
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
