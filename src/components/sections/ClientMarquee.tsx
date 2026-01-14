const ClientLogo = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <div className="flex items-center justify-center px-8 md:px-12 lg:px-16">
    <div className="h-8 md:h-10 opacity-40 hover:opacity-70 transition-opacity duration-200 ease-in-out grayscale hover:grayscale-0">
      {children}
    </div>
  </div>
);

const SchipholLogo = () => (
  <svg viewBox="0 0 200 40" className="h-full w-auto" fill="currentColor">
    <text x="0" y="30" className="text-2xl font-bold tracking-tight">SCHIPHOL</text>
  </svg>
);

const AdyenLogo = () => (
  <svg viewBox="0 0 120 40" className="h-full w-auto" fill="currentColor">
    <path d="M20.8 8h7.4l-9.6 24h-7.4L20.8 8zm15.7 0h7.4l-9.6 24h-7.4L36.5 8zm18.7 0h6.5l-3.7 9.3 6.2 14.7h-7.4l-4-10.2-3.8 10.2h-6.5l6.5-15.8L52.7 8h2.5zm25.3 0c4.4 0 7.5 3.1 7.5 7.5 0 1.4-.4 2.8-1 4L82 32h-7.4l4.6-11.5c.2-.5.3-1 .3-1.5 0-1.7-1.3-3-3-3h-4.8L66.3 32h-7l9.6-24h11.6zm16.3 0h7l-9.6 24h-7l9.6-24z"/>
  </svg>
);

const CBRELogo = () => (
  <svg viewBox="0 0 100 40" className="h-full w-auto" fill="currentColor">
    <text x="0" y="28" className="text-xl font-bold">CBRE</text>
  </svg>
);

const BookingLogo = () => (
  <svg viewBox="0 0 180 40" className="h-full w-auto" fill="currentColor">
    <text x="0" y="28" className="text-xl font-bold">Booking.com</text>
  </svg>
);

const WeWorkLogo = () => (
  <svg viewBox="0 0 120 40" className="h-full w-auto" fill="currentColor">
    <text x="0" y="28" className="text-xl font-bold">WeWork</text>
  </svg>
);

const TikTokLogo = () => (
  <svg viewBox="0 0 100 40" className="h-full w-auto" fill="currentColor">
    <text x="0" y="28" className="text-xl font-bold">TikTok</text>
  </svg>
);

const DysonLogo = () => (
  <svg viewBox="0 0 100 40" className="h-full w-auto" fill="currentColor">
    <text x="0" y="28" className="text-xl font-bold tracking-widest">DYSON</text>
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
