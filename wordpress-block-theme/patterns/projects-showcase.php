<?php
/**
 * Title: Projects Showcase
 * Slug: gpg-projects-showcase
 * Categories: gpg-sections
 * Description: Uitgelichte projecten met kaarten
 */
$projects = array(
  array( 'title' => 'BOOKING.COM', 'subtitle' => 'Amsterdam, Nederland', 'year' => '2023', 'img' => 'project-booking.jpg', 'slug' => 'cbre-booking' ),
  array( 'title' => 'SCHIPHOL HOOFDKANTOOR', 'subtitle' => 'Schiphol, Nederland', 'year' => 'Lopend', 'img' => 'project-schiphol.jpg', 'slug' => 'schiphol-hq' ),
  array( 'title' => 'HUB LOCATIES', 'subtitle' => 'Diverse locaties', 'year' => '2024', 'img' => 'project-hub.jpg', 'slug' => 'hub-locaties' ),
  array( 'title' => 'GSA GROEP', 'subtitle' => 'Hoofdkantoor, Nederland', 'year' => '2022', 'img' => 'project-hub-2.jpg', 'slug' => 'gsa-groep' ),
);
?>

<section class="gpg-projects gpg-scroll-reveal" id="projecten">
  <div class="bg-orb-1"></div>
  <div class="bg-orb-2"></div>
  <div class="gpg-container">
    <div style="margin-bottom:2rem;">
      <span class="gpg-badge" style="background:rgba(107,138,46,0.2);color:var(--gpg-olive-light);">Uitgelichte werken</span>
      <h2 style="color:#fff;">RECENTE PROJECTEN</h2>
    </div>

    <div class="gpg-projects-grid">
      <?php foreach ( $projects as $project ) : ?>
      <a href="/projecten/<?php echo esc_attr( $project['slug'] ); ?>/" class="gpg-project-card gsa-hoek">
        <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/' . $project['img'] ); ?>" alt="<?php echo esc_attr( $project['title'] ); ?>" loading="lazy">
        <div class="gpg-overlay-blue"></div>
        <div class="gpg-overlay-gradient"></div>
        <div class="gpg-project-card-content">
          <span class="year-badge gsa-hoek-sm"><?php echo esc_html( $project['year'] ); ?></span>
          <h3><?php echo esc_html( $project['title'] ); ?></h3>
          <p><?php echo esc_html( $project['subtitle'] ); ?></p>
        </div>
      </a>
      <?php endforeach; ?>
    </div>

    <div style="text-align:center;margin-top:2rem;">
      <a href="/projecten/" class="gpg-btn gpg-btn-white gsa-hoek-sm">
        Bekijk alle projecten
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </a>
    </div>
  </div>
</section>