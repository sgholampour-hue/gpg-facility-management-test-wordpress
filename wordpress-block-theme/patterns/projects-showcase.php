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

<section class="gpg-projects scroll-reveal" id="projecten">
  <div class="gpg-projects__orb-1"></div>
  <div class="gpg-projects__orb-2"></div>
  <div class="gpg-container">
    <div class="gpg-projects__header">
      <div>
        <span class="gpg-projects__label">Uitgelichte werken</span>
        <h2>RECENTE PROJECTEN</h2>
      </div>
    </div>

    <div class="gpg-projects__grid">
      <?php foreach ( $projects as $project ) : ?>
      <a href="/projecten/<?php echo esc_attr( $project['slug'] ); ?>/" class="gpg-project-card gsa-hoek">
        <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/' . $project['img'] ); ?>" alt="<?php echo esc_attr( $project['title'] ); ?>" loading="lazy">
        <div class="gpg-overlay-blue"></div>
        <div class="gpg-project-card__gradient"></div>
        <div class="gpg-project-card__content">
          <span class="gpg-project-card__year gsa-hoek-sm"><?php echo esc_html( $project['year'] ); ?></span>
          <h3><?php echo esc_html( $project['title'] ); ?></h3>
          <p><?php echo esc_html( $project['subtitle'] ); ?></p>
        </div>
      </a>
      <?php endforeach; ?>
    </div>

    <div class="gpg-projects__view-all">
      <a href="/projecten/">
        Bekijk alle projecten
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </a>
    </div>
  </div>
</section>
