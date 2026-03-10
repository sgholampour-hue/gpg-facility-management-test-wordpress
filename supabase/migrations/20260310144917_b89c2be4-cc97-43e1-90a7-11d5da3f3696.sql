
-- =============================================
-- GPG CMS Database Schema
-- =============================================

-- 1. User Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'editor');

CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Helper: check if user is admin or editor
CREATE OR REPLACE FUNCTION public.is_cms_user(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('admin', 'editor')
  )
$$;

-- RLS for user_roles: only admins can manage roles, cms users can read
CREATE POLICY "CMS users can view roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (public.is_cms_user(auth.uid()));

CREATE POLICY "Admins can insert roles" ON public.user_roles
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles" ON public.user_roles
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 2. Updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- 3. Page Content
CREATE TABLE public.page_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_slug TEXT NOT NULL UNIQUE,
    page_name TEXT NOT NULL,
    sections JSONB NOT NULL DEFAULT '{}'::jsonb,
    seo_title TEXT,
    seo_description TEXT,
    og_title TEXT,
    og_description TEXT,
    status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published')),
    published_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_by UUID REFERENCES auth.users(id)
);

ALTER TABLE public.page_content ENABLE ROW LEVEL SECURITY;

-- Everyone can read published content, CMS users can read all
CREATE POLICY "Anyone can read published content" ON public.page_content
  FOR SELECT USING (status = 'published' OR (auth.uid() IS NOT NULL AND public.is_cms_user(auth.uid())));

CREATE POLICY "CMS users can insert content" ON public.page_content
  FOR INSERT TO authenticated
  WITH CHECK (public.is_cms_user(auth.uid()));

CREATE POLICY "CMS users can update content" ON public.page_content
  FOR UPDATE TO authenticated
  USING (public.is_cms_user(auth.uid()));

CREATE TRIGGER update_page_content_updated_at
  BEFORE UPDATE ON public.page_content
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 4. Site Settings
CREATE TABLE public.site_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_name TEXT NOT NULL DEFAULT 'GPG Facility Management',
    logo_url TEXT,
    phone TEXT,
    email TEXT,
    address JSONB DEFAULT '{}',
    social_links JSONB DEFAULT '{}',
    default_seo_title TEXT,
    default_seo_description TEXT,
    footer_info JSONB DEFAULT '{}',
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_by UUID REFERENCES auth.users(id)
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read site settings" ON public.site_settings
  FOR SELECT USING (true);

CREATE POLICY "CMS users can update settings" ON public.site_settings
  FOR UPDATE TO authenticated
  USING (public.is_cms_user(auth.uid()));

CREATE POLICY "CMS users can insert settings" ON public.site_settings
  FOR INSERT TO authenticated
  WITH CHECK (public.is_cms_user(auth.uid()));

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 5. Media Library
CREATE TABLE public.media (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    file_name TEXT NOT NULL,
    file_path TEXT NOT NULL,
    file_url TEXT NOT NULL,
    file_type TEXT,
    file_size BIGINT,
    alt_text TEXT,
    uploaded_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view media" ON public.media
  FOR SELECT USING (true);

CREATE POLICY "CMS users can upload media" ON public.media
  FOR INSERT TO authenticated
  WITH CHECK (public.is_cms_user(auth.uid()));

CREATE POLICY "CMS users can update media" ON public.media
  FOR UPDATE TO authenticated
  USING (public.is_cms_user(auth.uid()));

CREATE POLICY "CMS users can delete media" ON public.media
  FOR DELETE TO authenticated
  USING (public.is_cms_user(auth.uid()));

-- 6. Storage bucket for CMS media
INSERT INTO storage.buckets (id, name, public) VALUES ('cms-media', 'cms-media', true);

CREATE POLICY "Anyone can view CMS media" ON storage.objects
  FOR SELECT USING (bucket_id = 'cms-media');

CREATE POLICY "CMS users can upload CMS media" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'cms-media' AND public.is_cms_user(auth.uid()));

CREATE POLICY "CMS users can update CMS media" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'cms-media' AND public.is_cms_user(auth.uid()));

CREATE POLICY "CMS users can delete CMS media" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'cms-media' AND public.is_cms_user(auth.uid()));

-- 7. Seed default site settings
INSERT INTO public.site_settings (company_name, phone, email, address, social_links, default_seo_title, default_seo_description)
VALUES (
  'GPG Facility Management',
  '+31(0)20 795 21 00',
  'info@gpgfacilities.nl',
  '{"street": "Valkweg 111", "postal_code": "1118 ED", "city": "Schiphol"}'::jsonb,
  '{"linkedin": "https://www.linkedin.com/company/gpg-facility-management"}'::jsonb,
  'GPG Facility Management - Professionele Facilitaire Dienstverlening',
  'GPG biedt complete facilitaire diensten: huismeesterdiensten, verhuizingen, fit-out, inkoop en integrated facilities management.'
);

-- 8. Seed default page content
INSERT INTO public.page_content (page_slug, page_name, status, published_at, sections) VALUES
('home', 'Homepage', 'published', now(), '{
  "hero": {
    "headline": "Facilitaire diensten met een persoonlijke benadering.",
    "subheadline": "Wij ondersteunen kantoren en bedrijven met professionele facilitaire diensten. Altijd vakwerk, altijd flexibel, en een partner die écht meedenkt.",
    "button_label": "Neem contact op",
    "button_link": "/contact",
    "button_secondary_label": "Bekijk projecten",
    "button_secondary_link": "/projecten",
    "highlights": ["Onderdeel GSA groep", "Eén vast aanspreekpunt", "Flexibel & betrouwbaar", "Landelijke dekking"]
  },
  "services": {
    "badge": "Onze diensten",
    "headline": "Complete facilitaire ondersteuning",
    "description": "Van verhuizingen tot volledige kantoorinrichtingen. Wij bieden alles wat je nodig hebt."
  },
  "stats": [
    {"value": "40", "label": "Jaar ervaring", "suffix": "+"},
    {"value": "600", "label": "Interieur producten", "suffix": "+"},
    {"value": "50", "label": "Professionals", "suffix": "+"},
    {"value": "98", "label": "Klanttevredenheid", "suffix": "%"}
  ],
  "why_gpg": {
    "badge": "Waarom GPG",
    "headline": "40+ jaar facilitaire expertise",
    "description": "Bij GPG begrijpen we dat je behoefte hebt aan een betrouwbare partner die jouw facilitaire diensten naar een hoger niveau tilt."
  },
  "process": {
    "badge": "Onze werkwijze",
    "headline": "Van plan naar realisatie",
    "description": "Een helder proces met vaste stappen zorgt voor een voorspelbaar en succesvol resultaat."
  },
  "testimonial": {
    "quote": "Samen met GPG bouwen we aan werkplekken waar mensen graag komen. Hun expertise en betrokkenheid maken het verschil.",
    "author": "Frank van Schaik",
    "role": "Directeur",
    "company": "GSA Groep"
  },
  "faq": [
    {"question": "Wat maakt GPG anders dan andere facilitaire dienstverleners?", "answer": "GPG combineert meer dan 40 jaar ervaring met een persoonlijke aanpak."},
    {"question": "Welke diensten bieden jullie aan?", "answer": "Wij bieden complete facilitaire ondersteuning: huismeesterdiensten, kantoorverhuizingen, integrated facilities management, fit-out projecten, inkoop van meubilair en projectinrichting."},
    {"question": "In welke regio zijn jullie actief?", "answer": "Wij zijn actief in heel Nederland met focus op de Randstad."},
    {"question": "Hoe werkt het aanvraagproces?", "answer": "Neem contact op via telefoon, e-mail of ons contactformulier. We plannen een kennismaking, inventariseren je wensen en leveren een helder voorstel."}
  ],
  "cta": {
    "badge": "Neem contact op",
    "headline": "Klaar om te starten?",
    "description": "Neem vandaag nog contact met ons op voor een vrijblijvend adviesgesprek."
  }
}'::jsonb),
('over-ons', 'Over ons', 'published', now(), '{"hero": {"headline": "Over GPG Facility Management", "subheadline": "Al meer dan 40 jaar uw partner in facilitaire dienstverlening."}}'::jsonb),
('diensten', 'Diensten', 'published', now(), '{"hero": {"headline": "Onze Diensten", "subheadline": "Complete facilitaire ondersteuning onder één dak."}}'::jsonb),
('contact', 'Contact', 'published', now(), '{"hero": {"headline": "Contact", "subheadline": "Neem vrijblijvend contact met ons op."}}'::jsonb),
('duurzaamheid', 'Duurzaamheid', 'published', now(), '{"hero": {"headline": "Duurzaamheid", "subheadline": "Onze inzet voor een duurzame toekomst."}}'::jsonb),
('projecten', 'Projecten', 'published', now(), '{"hero": {"headline": "Onze Projecten", "subheadline": "Bekijk onze gerealiseerde projecten."}}'::jsonb),
('voorwaarden', 'Algemene Voorwaarden', 'published', now(), '{}'::jsonb),
('privacy', 'Privacyverklaring', 'published', now(), '{}'::jsonb);
