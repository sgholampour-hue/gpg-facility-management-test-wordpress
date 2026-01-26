import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Phone, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  phone?: string;
  mobile?: string;
  email?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  variant?: "light" | "dark";
}

const TeamMemberCard = ({ member, variant = "dark" }: TeamMemberCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const textColor = variant === "dark" ? "text-white" : "text-primary";
  const roleColor = variant === "dark" ? "text-white/70" : "text-muted-foreground";

  return (
    <>
      <div
        className="text-center cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden rounded-full mb-2 md:mb-3">
          <img
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            loading="lazy"
            decoding="async"
            className="w-full aspect-square object-cover rounded-full shadow-card transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300 rounded-full" />
        </div>
        <h4 className={`font-semibold text-xs md:text-sm ${textColor}`}>
          {member.name}
        </h4>
        <p className={`text-[10px] md:text-xs ${roleColor}`}>
          {member.role}
        </p>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-card mb-4"
              />
              <DialogTitle className="text-xl font-bold text-primary">
                {member.name}
              </DialogTitle>
              <p className="text-accent font-medium text-sm mt-1">
                {member.role}
              </p>
            </div>
          </DialogHeader>

          <div className="space-y-3 mt-4">
            {member.phone && (
              <a
                href={`tel:${member.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Telefoon</p>
                  <p className="text-sm font-medium text-primary">{member.phone}</p>
                </div>
              </a>
            )}

            {member.mobile && (
              <a
                href={`tel:${member.mobile.replace(/\s/g, "")}`}
                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Mobiel</p>
                  <p className="text-sm font-medium text-primary">{member.mobile}</p>
                </div>
              </a>
            )}

            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">E-mail</p>
                  <p className="text-sm font-medium text-primary">{member.email}</p>
                </div>
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TeamMemberCard;
