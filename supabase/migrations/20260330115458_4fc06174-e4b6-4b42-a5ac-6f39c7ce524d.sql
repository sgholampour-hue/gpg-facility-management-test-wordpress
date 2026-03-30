
-- Revision history table for page content
CREATE TABLE public.page_revisions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id uuid NOT NULL,
  page_slug text NOT NULL,
  sections jsonb NOT NULL DEFAULT '{}'::jsonb,
  seo_title text,
  seo_description text,
  og_title text,
  og_description text,
  status text NOT NULL,
  saved_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  note text
);

ALTER TABLE public.page_revisions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "CMS users can view revisions"
  ON public.page_revisions FOR SELECT TO authenticated
  USING (is_cms_user(auth.uid()));

CREATE POLICY "CMS users can insert revisions"
  ON public.page_revisions FOR INSERT TO authenticated
  WITH CHECK (is_cms_user(auth.uid()));

CREATE POLICY "CMS users can delete revisions"
  ON public.page_revisions FOR DELETE TO authenticated
  USING (is_cms_user(auth.uid()));

CREATE INDEX idx_page_revisions_page_id ON public.page_revisions(page_id);
CREATE INDEX idx_page_revisions_created_at ON public.page_revisions(created_at DESC);
