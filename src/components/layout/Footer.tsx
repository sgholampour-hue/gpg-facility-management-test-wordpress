import { Link } from "react-router-dom";
import { Phone, Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteSettingsData } from "@/hooks/useSiteSettings";

const Footer = () => {
  const { settings } = useSiteSettingsData();
  const fi = settings?.footer_info || {};

  const companyName = settings?.company_name || "GPG Facility Management";
  const phone = settings?.phone || "020 - 795 21 00";
  const email = settings?.email || "info@gpgfacilities.nl";
  const address = settings?.address || { street: "Valkweg 111", postal_code: "1118 ED", city: "Schiphol" };
  const linkedin = settings?.social_links?.linkedin || "https://www.linkedin.com/company/gpg-facility-management";

  const tagline = fi.tagline || "Facilitaire diensten voor engineering, realisatie en beheer";
  const taglineSub = fi.tagline_sub || "Onderdeel van GSA groep";
  const ctaHeadline = fi.cta_headline || "VAN VISIE NAAR\nRENDEMENT";
  const ctaText = fi.cta_text || "Wij vertalen jouw ambities in hoogwaardige facilitaire diensten die comfort en efficiëntie combineren.";
  const ctaBtnLabel = fi.cta_button_label || "Neem contact op";
  const ctaBtnLink = fi.cta_button_link || "/contact";
  const btwId = fi.btw_id || "NL854426036B01";
  const kvk = fi.kvk || "61641987";

  const dienstenLinks = fi.diensten_links || [
    { label: "Huismeesterdiensten", href: "/diensten#huismeesterdiensten" },
    { label: "Verhuizen", href: "/diensten#verhuizen" },
    { label: "Integrated Facilities", href: "/diensten#integrated-facilities" },
    { label: "Fit-out's", href: "/diensten#fitouts" },
  ];

  const quickLinks = fi.quick_links || [
    { label: "Home", href: "/" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Diensten", href: "/diensten" },
    { label: "Projecten", href: "/projecten" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative">
      {/* CTA Banner */}
      <div className="bg-background pb-0">
        <div className="container px-4 md:px-6">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-primary rounded-3xl overflow-hidden translate-y-16 md:translate-y-20">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {Array.from({ length: 15 }).map((_, row) =>
                    Array.from({ length: 15 }).map((_, col) => (
                      <circle key={`${row}-${col}`} cx={20 + col * 12} cy={20 + row * 12} r="1.5" fill="white" />
                    ))
                  )}
                </svg>
              </div>
              <div className="relative z-10 px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
                <div className="max-w-lg">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-5 leading-tight whitespace-pre-line">
                    {ctaHeadline}
                  </h2>
                  <p className="text-white/70 text-sm md:text-base mb-5 md:mb-6 max-w-md">{ctaText}</p>
                  <Button variant="secondary" size="lg" className="gsa-hoek-sm bg-white text-primary hover:bg-white/90 group" asChild>
                    <Link to={ctaBtnLink} className="flex items-center gap-2">
                      {ctaBtnLabel}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-primary text-primary-foreground">
        <div className="container pt-24 md:pt-32 pb-10 md:pb-16 lg:pb-20 px-4 md:px-6">
          <div className="border-l-4 border-accent pl-3 md:pl-6 mb-8 md:mb-14">
            <p className="text-accent text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider mb-0.5 md:mb-1">
              {companyName}:
            </p>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight max-w-md">
              {tagline}
            </h3>
            <p className="text-white/60 text-xs sm:text-sm mt-1 md:mt-2">{taglineSub}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {/* Address */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white">Adres</h4>
              <div className="text-white/70 text-sm leading-relaxed">
                <p>{address.street}</p>
                <p>{address.postal_code} {address.city}</p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white">Contact</h4>
              <div className="space-y-2 text-white/70 text-sm">
                <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />{phone}
                </a>
                <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />{email}
                </a>
              </div>
              <div className="text-white/50 text-xs pt-2 space-y-1">
                <p>BTW-id: {btwId}</p>
                <p>KvK: {kvk}</p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white">Diensten</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                {dienstenLinks.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white">Snel Naar</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container py-4 md:py-6 px-4 md:px-6 pb-20 md:pb-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-white/50 text-[10px] sm:text-xs md:text-sm text-center md:text-left">
              © {companyName} {new Date().getFullYear()}. Alle rechten voorbehouden.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
              <div className="flex gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-xs md:text-sm text-white/50">
                <Link to="/voorwaarden" className="hover:text-white transition-colors">Algemene voorwaarden</Link>
                <span className="text-white/30">|</span>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacyverklaring</Link>
              </div>
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" aria-label="Volg ons op LinkedIn">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
