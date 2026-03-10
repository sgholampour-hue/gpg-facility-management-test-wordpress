import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

// Hook to fetch CMS page content (supports ?preview=true for drafts)
export const usePageContent = (pageSlug: string) => {
  const [sections, setSections] = useState<Record<string, any> | null>(null);
  const [seo, setSeo] = useState<{
    seo_title: string | null;
    seo_description: string | null;
    og_title: string | null;
    og_description: string | null;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for preview mode via URL param
  let isPreview = false;
  try {
    const params = new URLSearchParams(window.location.search);
    isPreview = params.get("preview") === "true";
  } catch {}

  useEffect(() => {
    const fetchContent = async () => {
      let query = supabase
        .from("page_content")
        .select("sections, seo_title, seo_description, og_title, og_description, status")
        .eq("page_slug", pageSlug)
        .single();

      // If not preview mode, only fetch published content
      if (!isPreview) {
        query = supabase
          .from("page_content")
          .select("sections, seo_title, seo_description, og_title, og_description, status")
          .eq("page_slug", pageSlug)
          .eq("status", "published")
          .single();
      }

      const { data } = await query;

      if (data) {
        setSections(data.sections as Record<string, any>);
        setSeo({
          seo_title: data.seo_title,
          seo_description: data.seo_description,
          og_title: data.og_title,
          og_description: data.og_description,
        });
      }
      setLoading(false);
    };
    fetchContent();
  }, [pageSlug, isPreview]);

  return { sections, seo, loading, isPreview };
};

// Hook to fetch site settings
export const useSiteSettings = () => {
  const [settings, setSettings] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("site_settings")
        .select("*")
        .limit(1)
        .single();
      if (data) setSettings(data);
      setLoading(false);
    };
    fetch();
  }, []);

  return { settings, loading };
};
