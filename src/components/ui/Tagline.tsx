import { cn } from "@/lib/utils";

interface TaglineProps {
  children: React.ReactNode;
  className?: string;
  author?: string;
  role?: string;
}

export const Tagline = ({ children, className, author, role }: TaglineProps) => {
  return (
    <blockquote className={cn("relative", className)}>
      <p className="font-heading font-light text-xl md:text-2xl lg:text-3xl text-accent leading-relaxed">
        "{children}"
      </p>
      {(author || role) && (
        <footer className="mt-4 font-body">
          {author && <cite className="font-semibold text-primary not-italic">{author}</cite>}
          {role && <span className="text-muted-foreground ml-2">— {role}</span>}
        </footer>
      )}
    </blockquote>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const TestimonialCard = ({ quote, author, role, company, className, style }: TestimonialCardProps) => {
  return (
    <div className={cn("bg-card p-6 md:p-8 gsa-hoek border border-border shadow-card", className)} style={style}>
      <div className="mb-4">
        <svg className="w-8 h-8 text-accent opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="font-heading font-light text-lg md:text-xl text-foreground leading-relaxed mb-6">
        {quote}
      </p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-primary">{author}</p>
        {(role || company) && (
          <p className="text-sm text-muted-foreground font-body">
            {role}{role && company && ", "}{company}
          </p>
        )}
      </div>
    </div>
  );
};
