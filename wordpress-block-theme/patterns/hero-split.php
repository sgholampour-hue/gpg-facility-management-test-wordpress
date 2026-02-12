<?php
/**
 * Title: Hero Split
 * Slug: gpg-hero-split
 * Categories: gpg-heroes
 * Description: Homepage hero met split layout, tekst links en afbeelding rechts met overlay
 */
$hero_image = get_template_directory_uri() . '/assets/images/hero-office.jpg';
$logo_image = get_template_directory_uri() . '/assets/images/gpg-logo.png';
?>

<section class="gpg-hero-split" id="home">
  <div class="gpg-hero-split__mesh-1"></div>
  <div class="gpg-hero-split__mesh-2"></div>

  <div class="gpg-container gpg-hero-split__inner">
    <div class="gpg-hero-grid">
      <!-- Left: Content -->
      <div class="gpg-hero-content hero-reveal" id="hero-content">
        <div class="gpg-hero-badge">
          <span class="gpg-hero-badge__est">EST. 2008</span>
          <span class="gpg-hero-badge__divider"></span>
          <span class="gpg-hero-badge__type">Facility Management</span>
        </div>

        <h1 class="gpg-hero-content__title">
          Facilitaire diensten met een
          <span class="gpg-highlight">persoonlijke</span>
          benadering.
        </h1>

        <p class="gpg-hero-content__subtitle">
          Wij ondersteunen kantoren en bedrijven met professionele facilitaire diensten.
          Altijd vakwerk, altijd flexibel, en een partner die écht meedenkt.
        </p>

        <div class="gpg-hero-highlights">
          <?php
          $highlights = array( 'Onderdeel GSA groep', 'Eén vast aanspreekpunt', 'Flexibel & betrouwbaar', 'Landelijke dekking' );
          foreach ( $highlights as $item ) :
          ?>
          <div class="gpg-hero-highlights__item">
            <svg class="gpg-hero-highlights__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            <span><?php echo esc_html( $item ); ?></span>
          </div>
          <?php endforeach; ?>
        </div>

        <div class="gpg-hero-ctas">
          <a href="/contact/" class="gpg-btn gpg-btn--outline-accent gpg-btn--xl gsa-hoek-sm">
            Neem contact op
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="/projecten/" class="gpg-btn gpg-btn--ghost gpg-btn--xl gsa-hoek-sm">
            Bekijk projecten
          </a>
        </div>
      </div>

      <!-- Right: Visual -->
      <div class="gpg-hero-visual hero-reveal" id="hero-visual" style="transition-delay:200ms;">
        <div class="gpg-hero-visual__wrapper">
          <div class="gpg-hero-visual__deco-1"></div>
          <div class="gpg-hero-visual__deco-2"></div>

          <div class="gpg-hero-image gsa-hoek-lg">
            <img src="<?php echo esc_url( $hero_image ); ?>" alt="Modern kantooromgeving met professionele faciliteiten" loading="eager" fetchpriority="high">
            <div class="gpg-overlay-blue"></div>
            <div class="gpg-overlay-gradient"></div>

            <div class="gpg-hero-image__content">
              <span class="gpg-hero-image__badge gsa-hoek-sm">Onderdeel GSA groep</span>
              <h3 class="gpg-hero-image__title">COMPLETE ONTZORGING</h3>
              <div class="gpg-hero-image__row">
                <p>Van verhuizing tot fit-out, van huismeesterdiensten tot integrated facilities.</p>
                <a href="/projecten/" class="gpg-btn-glass gsa-hoek-sm">
                  Projecten
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
