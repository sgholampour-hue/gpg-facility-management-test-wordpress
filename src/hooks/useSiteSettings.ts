import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface SiteSettingsData {
  company_name: string;
  phone: string | null;
  email: string | null;
  logo_url: string | null;
  address: { street?: string; postal_code?: string; city?: string };
  social_links: { linkedin?: string; facebook?: string; instagram?: string };
  footer_info: {
    tagline?: string;
    tagline_sub?: string;
    cta_headline?: string;
    cta_text?: string;
    cta_button_label?: string;
    cta_button_link?: string;
    btw_id?: string;
    kvk?: string;
    diensten_links?: { label: string; href: string }[];
    quick_links?: { label: string; href: string }[];
    navigation_items?: { label: string; href: string; hasDropdown?: boolean }[];
    diensten_dropdown?: { label: string; href: string; icon?: string }[];
  };
  default_seo_title: string | null;
  default_seo_description: string | null;
}

let cachedSettings: SiteSettingsData | null = null;
let fetchPromise: Promise<SiteSettingsData | null> | null = null;

const fetchSettings = async (): Promise<SiteSettingsData | null> => {
  const { data } = await supabase.from("site_settings").select("*").limit(1).single();
  if (data) {
    cachedSettings = {
      ...data,
      address: (data.address as any) || {},
      social_links: (data.social_links as any) || {},
      footer_info: (data.footer_info as any) || {},
    };
  }
  fetchPromise = null;
  return cachedSettings;
};

export const useSiteSettingsData = () => {
  const [settings, setSettings] = useState<SiteSettingsData | null>(cachedSettings);
  const [loading, setLoading] = useState(!cachedSettings);

  useEffect(() => {
    if (cachedSettings) {
      setSettings(cachedSettings);
      setLoading(false);
      return;
    }
    if (!fetchPromise) fetchPromise = fetchSettings();
    fetchPromise.then((s) => {
      setSettings(s);
      setLoading(false);
    });
  }, []);

  return { settings, loading };
};

// Invalidate cache (call after saving settings in admin)
export const invalidateSiteSettings = () => {
  cachedSettings = null;
  fetchPromise = null;
};
