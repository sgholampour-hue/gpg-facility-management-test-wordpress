<?php
/**
 * Title: CTA Contact
 * Slug: gpg-cta-contact
 * Categories: gpg-cta
 * Description: Contact CTA sectie met split layout
 */
?>

<section class="gpg-cta scroll-reveal" id="contact">
  <div class="gpg-cta__blob-1"></div>
  <div class="gpg-cta__blob-2"></div>
  <div class="gpg-container">
    <div class="gpg-cta__card gsa-hoek-lg">
      <div class="gpg-cta__inner">
        <!-- Left: Content -->
        <div class="gpg-cta__content">
          <span class="gpg-badge gpg-badge--accent">Neem contact op</span>
          <h2>Klaar om te starten?</h2>
          <p>Neem vandaag nog contact met ons op voor een vrijblijvend adviesgesprek. Wij helpen je graag bij jouw volgende project.</p>

          <div class="gpg-cta__contacts">
            <a href="tel:+31207952100">
              <div class="gpg-cta__contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <span>+31(0)20 795 21 00</span>
            </a>
            <a href="mailto:info@gpgfacilities.nl">
              <div class="gpg-cta__contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <span>info@gpgfacilities.nl</span>
            </a>
          </div>

          <a href="/contact/" class="gpg-btn gpg-btn--outline gsa-hoek-sm">
            Neem contact op
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>

        <!-- Right: Image -->
        <div class="gpg-cta__image">
          <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/cta-meeting.jpg' ); ?>" alt="Professioneel overleg met het GPG team" loading="lazy">
          <div class="gpg-overlay-blue"></div>
          <div class="gpg-cta__image-gradient"></div>
          <div class="gpg-cta__image-gradient-lr"></div>
          <div class="gpg-cta__float-badge gsa-hoek-sm">
            <p class="gpg-cta__float-label">Jouw partner voor</p>
            <p class="gpg-cta__float-value">professionele facilitaire dienstverlening</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
