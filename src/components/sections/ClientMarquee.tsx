const clients = [
  "Schiphol",
  "Adyen",
  "CBRE",
  "Booking.com",
  "WeWork",
  "TikTok",
  "Dyson",
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
            <div
              key={`${client}-${index}`}
              className="flex items-center justify-center px-12 md:px-16"
            >
              <span className="text-2xl md:text-3xl font-bold text-primary/20 whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
