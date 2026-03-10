import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Edit, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageItem {
  id: string;
  page_slug: string;
  page_name: string;
  status: string;
  updated_at: string;
}

const PagesList = () => {
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPages = async () => {
      const { data } = await supabase
        .from("page_content")
        .select("id, page_slug, page_name, status, updated_at")
        .order("page_name");
      if (data) setPages(data);
      setLoading(false);
    };
    fetchPages();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-primary">Pagina's</h1>
        <p className="text-muted-foreground text-sm">Beheer de content van alle pagina's.</p>
      </div>

      <div className="space-y-3">
        {pages.map((page) => (
          <Card key={page.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{page.page_name}</h3>
                  <p className="text-xs text-muted-foreground">/{page.page_slug === "home" ? "" : page.page_slug}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={page.status === "published" ? "default" : "secondary"}>
                  {page.status === "published" ? "Gepubliceerd" : "Concept"}
                </Badge>
                <span className="text-xs text-muted-foreground hidden sm:inline">
                  {new Date(page.updated_at).toLocaleDateString("nl-NL")}
                </span>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/admin/paginas/${page.page_slug}`}>
                    <Edit className="w-4 h-4 mr-1" />
                    Bewerken
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PagesList;
