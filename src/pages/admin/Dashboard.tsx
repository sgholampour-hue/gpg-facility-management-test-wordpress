import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Image, Settings, Users, ArrowRight } from "lucide-react";

const Dashboard = () => {
  const { isAdmin, user } = useAuth();
  const [pageCount, setPageCount] = useState(0);
  const [mediaCount, setMediaCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const [pages, media] = await Promise.all([
        supabase.from("page_content").select("id", { count: "exact", head: true }),
        supabase.from("media").select("id", { count: "exact", head: true }),
      ]);
      setPageCount(pages.count ?? 0);
      setMediaCount(media.count ?? 0);
    };
    fetchCounts();
  }, []);

  const cards = [
    { title: "Pagina's", count: pageCount, icon: FileText, href: "/admin/paginas", color: "bg-primary/10 text-primary" },
    { title: "Media", count: mediaCount, icon: Image, href: "/admin/media", color: "bg-accent/10 text-accent" },
    { title: "Instellingen", count: null, icon: Settings, href: "/admin/instellingen", color: "bg-muted text-muted-foreground" },
  ];

  if (isAdmin) {
    cards.push({ title: "Gebruikers", count: null, icon: Users, href: "/admin/gebruikers", color: "bg-destructive/10 text-destructive" });
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
        <p className="text-muted-foreground text-sm">
          Welkom terug! Beheer hier de content van de GPG website.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Link key={card.title} to={card.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
                <div className={`w-8 h-8 rounded-lg ${card.color} flex items-center justify-center`}>
                  <card.icon className="w-4 h-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  {card.count !== null ? (
                    <span className="text-2xl font-bold text-primary">{card.count}</span>
                  ) : (
                    <span className="text-sm text-muted-foreground">Beheren →</span>
                  )}
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
