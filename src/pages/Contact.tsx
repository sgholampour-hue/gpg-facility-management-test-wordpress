import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    bedrijf: "",
    onderwerp: "",
    bericht: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Bericht verzonden!",
      description: "Wij nemen zo snel mogelijk contact met u op.",
    });

    // Reset form after delay
    setTimeout(() => {
      setFormData({
        naam: "",
        email: "",
        telefoon: "",
        bedrijf: "",
        onderwerp: "",
        bericht: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefoon",
      value: "+31 (0)20 123 4567",
      link: "tel:+31201234567"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "info@gpg-fm.nl",
      link: "mailto:info@gpg-fm.nl"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "Schiphol Boulevard 127, 1118 BG Schiphol",
      link: "https://maps.google.com/?q=Schiphol+Boulevard+127+Schiphol"
    },
    {
      icon: Clock,
      title: "Openingstijden",
      value: "Ma - Vr: 08:00 - 17:00",
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact"
        description="Neem contact op met GPG Facility Management voor een vrijblijvend adviesgesprek. Bel +31 23 303 0684 of vul ons contactformulier in."
        canonical="https://gpg-facility.lovable.app/contact"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-10 md:pb-16 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              <RevealOnScroll variant="fade-up">
                <p className="text-accent font-medium mb-2 md:mb-4 uppercase tracking-wider text-xs md:text-sm font-heading">
                  Contact
                </p>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={100}>
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                  Neem contact met ons op
                </h1>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={200}>
                <p className="text-base md:text-xl text-white/80 leading-relaxed font-body">
                  Heeft u vragen of wilt u meer informatie? Wij staan voor u klaar.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-10 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-20">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <RevealOnScroll variant="fade-up">
                  <div className="bg-white gsa-hoek-lg shadow-elegant p-5 md:p-8 lg:p-10">
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-1 md:mb-2">
                      Stuur ons een bericht
                    </h2>
                    <p className="text-muted-foreground mb-5 md:mb-8 font-body text-sm md:text-base">
                      Vul het formulier in en wij nemen binnen 24 uur contact met u op.
                    </p>

                    {isSubmitted ? (
                      <div className="text-center py-8 md:py-12">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/10 gsa-hoek flex items-center justify-center mx-auto mb-3 md:mb-4">
                          <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                          Bedankt voor uw bericht!
                        </h3>
                        <p className="text-muted-foreground font-body text-sm md:text-base">
                          Wij nemen zo snel mogelijk contact met u op.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                          <div className="space-y-1.5 md:space-y-2">
                            <Label htmlFor="naam" className="font-heading uppercase text-xs tracking-wider">Naam *</Label>
                            <Input
                              id="naam"
                              name="naam"
                              placeholder="Uw volledige naam"
                              value={formData.naam}
                              onChange={handleChange}
                              required
                              className="h-11 md:h-12 field-focus text-base"
                            />
                          </div>
                          <div className="space-y-1.5 md:space-y-2">
                            <Label htmlFor="email" className="font-heading uppercase text-xs tracking-wider">E-mail *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="uw@email.nl"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="h-11 md:h-12 field-focus text-base"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                          <div className="space-y-1.5 md:space-y-2">
                            <Label htmlFor="telefoon" className="font-heading uppercase text-xs tracking-wider">Telefoon</Label>
                            <Input
                              id="telefoon"
                              name="telefoon"
                              type="tel"
                              placeholder="+31 6 12345678"
                              value={formData.telefoon}
                              onChange={handleChange}
                              className="h-11 md:h-12 field-focus text-base"
                            />
                          </div>
                          <div className="space-y-1.5 md:space-y-2">
                            <Label htmlFor="bedrijf" className="font-heading uppercase text-xs tracking-wider">Bedrijf</Label>
                            <Input
                              id="bedrijf"
                              name="bedrijf"
                              placeholder="Uw bedrijfsnaam"
                              value={formData.bedrijf}
                              onChange={handleChange}
                              className="h-11 md:h-12 field-focus text-base"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5 md:space-y-2">
                          <Label htmlFor="onderwerp" className="font-heading uppercase text-xs tracking-wider">Onderwerp *</Label>
                          <Input
                            id="onderwerp"
                            name="onderwerp"
                            placeholder="Waar kunnen wij u mee helpen?"
                            value={formData.onderwerp}
                            onChange={handleChange}
                            required
                            className="h-11 md:h-12 field-focus text-base"
                          />
                        </div>

                        <div className="space-y-1.5 md:space-y-2">
                          <Label htmlFor="bericht" className="font-heading uppercase text-xs tracking-wider">Bericht *</Label>
                          <Textarea
                            id="bericht"
                            name="bericht"
                            placeholder="Beschrijf uw vraag of project..."
                            value={formData.bericht}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="resize-none field-focus text-base min-h-[120px] md:min-h-[150px]"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full sm:w-auto group hover-lift"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="animate-pulse">Verzenden...</span>
                          ) : (
                            <>
                              Verstuur bericht
                              <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </div>
                </RevealOnScroll>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-5 md:space-y-6">
                <RevealOnScroll variant="fade-up">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-1 md:mb-2">
                      Contactgegevens
                    </h2>
                    <p className="text-muted-foreground font-body text-sm md:text-base">
                      U kunt ons ook direct bereiken via onderstaande contactgegevens.
                    </p>
                  </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
                  {contactInfo.map((item, index) => (
                    <RevealOnScroll key={index} variant="fade-up" delay={100 + index * 80}>
                      <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 gsa-hoek-sm bg-muted/50 hover:bg-muted transition-colors duration-200">
                        <div className="w-10 h-10 md:w-12 md:h-12 gsa-hoek-sm bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-muted-foreground mb-0.5 md:mb-1 font-heading uppercase tracking-wider">
                            {item.title}
                          </p>
                          {item.link ? (
                            <a 
                              href={item.link}
                              target={item.link.startsWith('http') ? '_blank' : undefined}
                              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-primary font-medium hover:text-accent transition-colors duration-200 font-body text-sm md:text-base break-words"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-primary font-medium font-body text-sm md:text-base">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>

                {/* Map placeholder */}
                <RevealOnScroll variant="scale-in" delay={400}>
                  <div className="aspect-video md:aspect-square gsa-hoek-lg overflow-hidden bg-muted mt-4 md:mt-8">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5!2d4.762!3d52.309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSchiphol!5e0!3m2!1snl!2snl!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="GPG Facility Management locatie"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection variant="light" />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
