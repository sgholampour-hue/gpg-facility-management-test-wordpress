<?php
/**
 * Title: Why GPG
 * Slug: gpg-why-gpg
 * Categories: gpg-sections
 * Description: Waarom GPG sectie met features en team panel
 */
$features = array(
  array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', 'title' => 'Persoonlijke benadering', 'desc' => 'Als familiebedrijf behouden we altijd het persoonlijke contact.' ),
  array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>', 'title' => 'Vakwerk', 'desc' => 'Kwaliteit staat bij ons voorop bij elk project.' ),
  array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>', 'title' => 'Volgens planning', 'desc' => 'We halen de deadline, altijd.' ),
  array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>', 'title' => 'Flexibiliteit', 'desc' => 'We denken in oplossingen en passen ons aan.' ),
);

$team = array(
  array( 'name' => 'Wim Gruijters', 'role' => 'Directeur GPG', 'img' => 'team-wim-gruijters.png' ),
  array( 'name' => 'Danny Moeljoredjo', 'role' => 'Teamleider Facilitair', 'img' => 'team-danny-moeljoredjo.png' ),
  array( 'name' => 'Patricia Nijholt', 'role' => 'Algemeen Manager GPG', 'img' => 'team-patricia-nijholt.png' ),
);
?>

<section class="gpg-why scroll-reveal" id="waarom-gpg">
  <div class="gpg-why__bg-gradient"></div>
  <div class="gpg-container">
    <div class="gpg-why__grid">
      <!-- Left: Features -->
      <div class="gpg-why__features">
        <span class="gpg-badge gpg-badge--accent">Waarom GPG</span>
        <h2>40+ jaar facilitaire expertise</h2>
        <p class="gpg-why__intro">Bij GPG begrijpen we dat je behoefte hebt aan een betrouwbare partner die jouw facilitaire diensten naar een hoger niveau tilt.</p>

        <div class="gpg-why__feature-grid">
          <?php foreach ( $features as $feature ) : ?>
          <div class="gpg-feature-card gsa-hoek-sm">
            <div class="gpg-feature-card__icon"><?php echo $feature['icon']; ?></div>
            <h4><?php echo esc_html( $feature['title'] ); ?></h4>
            <p><?php echo esc_html( $feature['desc'] ); ?></p>
          </div>
          <?php endforeach; ?>
        </div>
      </div>

      <!-- Right: Team Panel -->
      <div class="gpg-why__team">
        <div class="gpg-team-panel gsa-hoek-lg">
          <div class="gpg-team-panel__logo">
            <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/gpg-logo.png' ); ?>" alt="GPG Facility Management">
          </div>
          <h3 class="gpg-team-panel__title">Ons Team</h3>

          <div class="gpg-team-panel__grid">
            <?php foreach ( $team as $member ) : ?>
            <div class="gpg-team-member">
              <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/' . $member['img'] ); ?>" alt="<?php echo esc_attr( $member['name'] ); ?>">
              <p class="gpg-team-member__name"><?php echo esc_html( $member['name'] ); ?></p>
              <p class="gpg-team-member__role"><?php echo esc_html( $member['role'] ); ?></p>
            </div>
            <?php endforeach; ?>
          </div>

          <p class="gpg-team-panel__hint">Klik op een teamlid voor contactgegevens</p>
        </div>
      </div>
    </div>
  </div>
</section>
