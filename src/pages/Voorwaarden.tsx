import Footer from "@/components/layout/Footer";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import SEO from "@/components/SEO";

const Voorwaarden = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Algemene Voorwaarden"
        description="Lees de algemene voorwaarden van GPG Facility Management voor onze facilitaire dienstverlening."
        canonical="https://gpg-facility.lovable.app/voorwaarden"
      />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-10 md:pb-16 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              <RevealOnScroll variant="fade-up">
                <p className="text-accent font-medium mb-2 md:mb-4 uppercase tracking-wider text-xs md:text-sm font-heading">
                  Juridisch
                </p>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={100}>
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                  Algemene Voorwaarden
                </h1>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={200}>
                <p className="text-base md:text-xl text-white/80 leading-relaxed font-body">
                  De voorwaarden die van toepassing zijn op onze dienstverlening.
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
                    Algemene Voorwaarden GPG Facility Management
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Artikel 1 - Definities</h3>
                      <p className="text-sm md:text-base leading-relaxed">
                        In deze algemene voorwaarden wordt verstaan onder: Opdrachtnemer: GPG Facility Management B.V., onderdeel van GSA Groep, gevestigd te Schiphol. Opdrachtgever: de natuurlijke of rechtspersoon die met Opdrachtnemer een overeenkomst aangaat.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary mb-2">Artikel 2 - Toepasselijkheid</h3>
                      <p className="text-sm md:text-base leading-relaxed">
                        Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, werkzaamheden, bestellingen, overeenkomsten en leveringen van diensten door of namens GPG Facility Management.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary mb-2">Artikel 3 - Offertes en Prijzen</h3>
                      <p className="text-sm md:text-base leading-relaxed">
                        Alle offertes zijn vrijblijvend, tenzij uitdrukkelijk anders is overeengekomen. Prijzen zijn exclusief BTW, tenzij anders vermeld.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary mb-2">Artikel 4 - Uitvoering</h3>
                      <p className="text-sm md:text-base leading-relaxed">
                        GPG Facility Management zal de overeenkomst naar beste inzicht en vermogen uitvoeren. De uitvoering geschiedt op basis van de door opdrachtgever verstrekte informatie.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary mb-2">Artikel 5 - Contact</h3>
                      <p className="text-sm md:text-base leading-relaxed">
                        Voor vragen over deze voorwaarden kunt u contact opnemen via info@gpgfacilities.nl of bel +31(0)20 795 21 00.
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

export default Voorwaarden;
