const ClientLogo = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <div className="flex items-center justify-center px-8 md:px-12 lg:px-16">
    <div className="h-8 md:h-10 opacity-40 hover:opacity-70 transition-opacity duration-200 ease-in-out grayscale hover:grayscale-0">
      {children}
    </div>
  </div>
);

// Official Schiphol logo
const SchipholLogo = () => (
  <svg viewBox="0 0 200 40" className="h-full w-auto" fill="currentColor">
    <path d="M28.9 8.1c-4.4-2.5-9.4-2.7-14 0-3.6 2.1-6.1 5.7-6.9 9.8-.8 4.2.2 8.5 2.7 11.9 2.5 3.4 6.3 5.5 10.5 5.8h.8c4.1-.3 7.8-2.3 10.3-5.7s3.6-7.6 2.8-11.8c-.8-4.1-3.3-7.6-6.9-9.8l.7-.2zm-3.7 22.1c-1.7 1-3.7 1.5-5.7 1.3-2-.2-3.9-1-5.4-2.3-1.5-1.3-2.5-3.1-2.8-5-.3-2 .2-4 1.3-5.7 1.1-1.7 2.8-2.9 4.8-3.4 2-.5 4.1-.2 5.9.7 1.8 1 3.2 2.6 3.8 4.5.7 1.9.7 4-.1 5.9-.7 1.9-2 3.4-3.8 4z"/>
    <text x="45" y="28" className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>SCHIPHOL</text>
  </svg>
);

// Official Adyen logo
const AdyenLogo = () => (
  <svg viewBox="0 0 140 40" className="h-full w-auto" fill="currentColor">
    <path d="M31.3 11.1h5.2l-7.4 18.8h-5.2l7.4-18.8zm-14.8 0h5.2l-7.4 18.8H9.1l7.4-18.8z"/>
    <path d="M45.9 11.1h5.5l4.4 13.4 4.4-13.4h5.5l-7.2 18.8h-5.4l-7.2-18.8z"/>
    <path d="M75.8 11.1c5.2 0 8.4 3.8 8.4 9.2 0 .8-.1 1.6-.2 2.4H72.2c.4 2.4 2.1 3.7 4.5 3.7 1.8 0 3.3-.7 4.4-1.9l3.1 3.1c-1.8 2.1-4.6 3.3-7.7 3.3-5.8 0-9.7-4.1-9.7-9.9 0-5.7 4-9.9 9-9.9zm3.3 8.1c-.2-2.2-1.7-3.7-3.8-3.7-2.1 0-3.6 1.5-4 3.7h7.8z"/>
    <path d="M98.5 11.4c5.2 0 8.4 3.8 8.4 9.2 0 5.4-3.4 9.5-8.6 9.5-2.1 0-3.9-.7-5.1-2v7.8h-5.1V11.5h4.9v1.7c1.3-1.4 3.1-2.1 5.2-2.1l.3.3zm-1.2 14.2c2.5 0 4.4-1.9 4.4-4.9s-1.8-4.9-4.4-4.9c-2.5 0-4.4 1.9-4.4 4.9s1.8 4.9 4.4 4.9z"/>
    <path d="M121.1 11.1v4.5h-3.3c-2.5 0-3.8 1.3-3.8 3.9v10.4h-5.1V11.5h4.9v2.3c1-1.7 2.7-2.7 5-2.7h2.3z"/>
  </svg>
);

// Official CBRE logo
const CBRELogo = () => (
  <svg viewBox="0 0 100 40" className="h-full w-auto" fill="currentColor">
    <path d="M0 8h10.2c6.7 0 11 3.7 11 9.1 0 3.6-1.9 6.4-5 8l6.3 7.9h-7.1l-5.4-7h-3.9v7H0V8zm9.7 12.5c2.9 0 4.6-1.5 4.6-3.8s-1.7-3.8-4.6-3.8H6.1v7.6h3.6z"/>
    <path d="M25.5 8H45v4.9H31.6v4.7H44v4.9H31.6v5.1h13.7V33H25.5V8z"/>
    <path d="M68.8 27.8c-1.7 3.5-5.5 5.7-10 5.7-7.1 0-12.3-5.2-12.3-12.8 0-7.6 5.2-12.8 12.3-12.8 4.5 0 8.3 2.2 10 5.7l-5.4 2.7c-.9-1.9-2.6-3-4.6-3-3.5 0-5.9 2.7-5.9 7.4s2.4 7.4 5.9 7.4c2 0 3.7-1.1 4.6-3l5.4 2.7z"/>
    <path d="M70.8 8H81c6.7 0 11 3.7 11 9.1 0 3.6-1.9 6.4-5 8l6.3 7.9h-7.1l-5.4-7h-3.9v7h-6.1V8zm9.7 12.5c2.9 0 4.6-1.5 4.6-3.8s-1.7-3.8-4.6-3.8h-3.6v7.6h3.6z"/>
  </svg>
);

// Official Booking.com logo
const BookingLogo = () => (
  <svg viewBox="0 0 200 40" className="h-full w-auto" fill="currentColor">
    <path d="M18.4 8H8v24h10.4c6.6 0 10.8-4.3 10.8-10.5V18.5c0-6.2-4.2-10.5-10.8-10.5zm3.8 13.5c0 3.5-2 5.5-5.3 5.5h-2.8V13h2.8c3.3 0 5.3 2 5.3 5.5v3z"/>
    <path d="M44.2 14c-5.3 0-9 3.8-9 9s3.7 9 9 9 9-3.8 9-9-3.7-9-9-9zm0 13.5c-2.3 0-4-1.8-4-4.5s1.7-4.5 4-4.5 4 1.8 4 4.5-1.7 4.5-4 4.5z"/>
    <path d="M66.4 14c-5.3 0-9 3.8-9 9s3.7 9 9 9 9-3.8 9-9-3.7-9-9-9zm0 13.5c-2.3 0-4-1.8-4-4.5s1.7-4.5 4-4.5 4 1.8 4 4.5-1.7 4.5-4 4.5z"/>
    <path d="M88.5 20.7h-.1L84.1 32h-1.8l-4.2-11.3h-.1V32h-4.6V8h4.6v10h.1l4-4h5.5l-5.5 5.8 6 12.2h-5.3l-3.3-7.3 3-4z"/>
    <path d="M94.1 14.3h4.6V32h-4.6V14.3zm2.3-2c-1.6 0-2.8-1.2-2.8-2.7 0-1.5 1.2-2.7 2.8-2.7s2.8 1.2 2.8 2.7c0 1.5-1.2 2.7-2.8 2.7z"/>
    <path d="M113 14c-2.1 0-3.8.9-4.8 2.3V14.3h-4.6V32h4.6v-9.8c0-2.3 1.4-3.7 3.4-3.7 2 0 3.2 1.2 3.2 3.4V32h4.6V21c0-4.3-2.6-7-6.4-7z"/>
    <path d="M133.8 14c-5.3 0-9 3.8-9 9s3.7 9 9 9c3.2 0 5.7-1.3 7.2-3.5l-3.7-2.2c-.8 1.1-2 1.7-3.5 1.7-2 0-3.5-1.1-4-3h12.1c.1-.6.1-1.3.1-2 0-5.2-3.7-9-8.2-9zm-4 7.2c.4-1.8 1.8-3 3.8-3s3.4 1.2 3.7 3h-7.5z"/>
    <circle cx="149" cy="29" r="3"/>
    <path d="M165.5 14c-2.1 0-3.8.9-4.8 2.3V14.3h-4.6V32h4.6v-9.8c0-2.3 1.4-3.7 3.4-3.7 2 0 3.2 1.2 3.2 3.4V32h4.6V21c0-4.3-2.6-7-6.4-7z"/>
    <path d="M185 14c-5.3 0-9 3.8-9 9s3.7 9 9 9 9-3.8 9-9-3.7-9-9-9zm0 13.5c-2.3 0-4-1.8-4-4.5s1.7-4.5 4-4.5 4 1.8 4 4.5-1.7 4.5-4 4.5z"/>
  </svg>
);

// Official WeWork logo
const WeWorkLogo = () => (
  <svg viewBox="0 0 140 40" className="h-full w-auto" fill="currentColor">
    <path d="M16.2 10l-4.5 16.3h-.1L7.1 10H0l8.9 22h6.1L19.2 17h.1l4.2 15h6.1L38.5 10h-7.1l-4.5 16.3h-.1L22.3 10h-6.1z"/>
    <path d="M51.7 14c-5.5 0-9.4 4-9.4 9.3s3.9 9.3 9.4 9.3c3.3 0 6-1.4 7.5-3.7l-4-2.4c-.8 1.2-2.1 1.9-3.6 1.9-2.1 0-3.7-1.2-4.2-3.2h12.7c.1-.7.2-1.4.2-2.1 0-5.4-3.9-9.1-8.6-9.1zm-4.2 7.5c.5-2 1.9-3.2 4-3.2s3.5 1.3 3.8 3.2h-7.8z"/>
    <path d="M74.5 10l-4.5 16.3h-.1L65.4 10h-7.1l8.9 22h6.1L77.5 17h.1l4.2 15h6.1L96.8 10h-7.1l-4.5 16.3h-.1L80.6 10h-6.1z"/>
    <path d="M110.5 14c-5.5 0-9.4 4-9.4 9.3s3.9 9.3 9.4 9.3c5.5 0 9.4-4 9.4-9.3s-3.9-9.3-9.4-9.3zm0 14c-2.4 0-4.2-1.9-4.2-4.7s1.8-4.7 4.2-4.7 4.2 1.9 4.2 4.7-1.8 4.7-4.2 4.7z"/>
    <path d="M133.3 14c-2.2 0-4 1-5.1 2.5v-2.2h-5.1v18h5.1v-10c0-2.6 1.4-4.1 3.6-4.1.8 0 1.5.1 2.2.4l.7-4.4c-.5-.1-1-.2-1.4-.2z"/>
    <path d="M140 20.5h-2.5v-5.2h-5.1v5.2h-1.9v4.2h1.9v7.6h5.1v-7.6h2.5v-4.2z"/>
  </svg>
);

// Official TikTok logo
const TikTokLogo = () => (
  <svg viewBox="0 0 120 40" className="h-full w-auto" fill="currentColor">
    <path d="M35.5 8v4.6h-6.3v19.2h-5.6V12.6H17V8h18.5z"/>
    <path d="M40.8 11.3c1.8 0 3.2-1.4 3.2-3.2 0-1.8-1.4-3.2-3.2-3.2-1.8 0-3.2 1.4-3.2 3.2 0 1.8 1.4 3.2 3.2 3.2zm-2.8 3h5.6v17.5h-5.6V14.3z"/>
    <path d="M58.8 21.5h-.1l-4.1 10.3h-1.8l-4.1-10.3h-.1v10.3h-5.1V8h5.1v9.8h.1l3.9-3.9h6.1l-5.8 5.8 6.5 12.1h-5.8l-3.4-7z"/>
    <path d="M77.2 8v4.6h-6.3v19.2h-5.6V12.6h-6.5V8h18.4z"/>
    <path d="M90.2 14c-5.4 0-9.2 3.9-9.2 9.2s3.8 9.2 9.2 9.2 9.2-3.9 9.2-9.2-3.8-9.2-9.2-9.2zm0 13.8c-2.4 0-4.1-1.9-4.1-4.6s1.7-4.6 4.1-4.6 4.1 1.9 4.1 4.6-1.7 4.6-4.1 4.6z"/>
    <path d="M113.2 21.5h-.1l-4.1 10.3h-1.8l-4.1-10.3h-.1v10.3h-5.1V8h5.1v9.8h.1l3.9-3.9h6.1l-5.8 5.8 6.5 12.1H108l-3.4-7z"/>
  </svg>
);

// Official Dyson logo
const DysonLogo = () => (
  <svg viewBox="0 0 120 40" className="h-full w-auto" fill="currentColor">
    <path d="M0 8h10.5c8 0 13.2 5.2 13.2 12s-5.2 12-13.2 12H0V8zm10 19c4.5 0 7.4-3 7.4-7s-2.9-7-7.4-7H6v14h4z"/>
    <path d="M38.2 14.3l-6.3 17.5h-5.5l-6.3-17.5h5.8l3.3 11.2h.1l3.3-11.2h5.6z"/>
    <path d="M51.8 14c-2.2 0-4.2.6-5.8 1.7l1.5 3.8c1.2-.8 2.6-1.2 4-1.2 2 0 3.2.9 3.2 2.5v.5h-3.5c-4.5 0-7 2-7 5.4 0 3.2 2.3 5.3 5.8 5.3 2 0 3.7-.7 4.8-2v1.8h5V21c0-4.5-3-7-8-7zm2.9 12.5c-.6.9-1.7 1.4-3 1.4-1.4 0-2.3-.7-2.3-1.9 0-1.3 1-2 3-2h2.3v2.5z"/>
    <path d="M73.5 14c-5.4 0-9.2 3.9-9.2 9.2s3.8 9.2 9.2 9.2 9.2-3.9 9.2-9.2-3.8-9.2-9.2-9.2zm0 13.8c-2.4 0-4.1-1.9-4.1-4.6s1.7-4.6 4.1-4.6 4.1 1.9 4.1 4.6-1.7 4.6-4.1 4.6z"/>
    <path d="M97.5 14c-2.2 0-4 1-5 2.5v-2.2h-5.1v17.5h5.1v-9.9c0-2.4 1.4-3.9 3.5-3.9 2 0 3.2 1.3 3.2 3.5v10.3h5.1V21c0-4.3-2.7-7-6.8-7z"/>
    <text x="108" y="28" className="text-xl font-bold tracking-widest" style={{ fontFamily: 'Arial, sans-serif' }}>™</text>
  </svg>
);

const clients = [
  { name: "Schiphol", Logo: SchipholLogo },
  { name: "Adyen", Logo: AdyenLogo },
  { name: "CBRE", Logo: CBRELogo },
  { name: "Booking.com", Logo: BookingLogo },
  { name: "WeWork", Logo: WeWorkLogo },
  { name: "TikTok", Logo: TikTokLogo },
  { name: "Dyson", Logo: DysonLogo },
];

const ClientMarquee = () => {
  return (
    <section className="py-12 bg-background border-y border-border overflow-hidden">
      <div className="container mb-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          Alleen publiceren met toestemming
        </p>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-content">
          {/* Duplicate the list for seamless loop */}
          {[...clients, ...clients].map((client, index) => (
            <ClientLogo key={`${client.name}-${index}`} name={client.name}>
              <client.Logo />
            </ClientLogo>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
