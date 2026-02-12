<?php
/**
 * Title: Services Bento Grid
 * Slug: gpg-services-bento
 * Categories: gpg-sections
 * Description: 6 dienstkaarten in een 3-koloms grid met groene accent bar
 */

$services = array(
  array( 'icon' => 'wrench', 'title' => 'Huismeesterdiensten', 'subtitle' => '', 'desc' => 'Van kleine reparaties tot complexe klussen: vakmanschap en snelle service.', 'href' => '/diensten/#huismeesterdiensten' ),
  array( 'icon' => 'truck', 'title' => 'Verhuizen', 'subtitle' => '', 'desc' => 'Professionele verhuisservice voor kantoren zonder onderbrekingen.', 'href' => '/diensten/#verhuizen' ),
  array( 'icon' => 'building', 'title' => 'Integrated Facilities', 'subtitle' => '', 'desc' => 'Complete facilitaire ondersteuning onder één dak.', 'href' => '/diensten/#integrated-facilities' ),
  array( 'icon' => 'pen', 'title' => "Fit-out's", 'subtitle' => '', 'desc' => 'Transformatie van ruimtes naar functionele werkomgevingen. Van ontwerp tot oplevering.', 'href' => '/diensten/#fitouts' ),
  array( 'icon' => 'shopping', 'title' => 'Inkoop', 'subtitle' => 'Inrichtingscomponenten', 'desc' => 'Strategische inkoop van meubilair en inrichting. Wij bieden scherpe prijzen en kwaliteitsgarantie.', 'href' => '/diensten/#inkoop' ),
  array( 'icon' => 'sofa', 'title' => 'Projectinrichting &', 'subtitle' => 'Stoffering', 'desc' => 'Maatwerk inrichting en stoffering voor een optimale werkplek. Van bureaus tot beplanting, alles uit één hand.', 'href' => '/diensten/#stoffering' ),
);

// SVG icon map
$icons = array(
  'wrench'   => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  'truck'    => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
  'building' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
  'pen'      => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  'shopping' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  'sofa'     => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"/><path d="M4 18v2"/><path d="M20 18v2"/><path d="M12 4v9"/></svg>',
);
$arrow_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>';
?>

<section class="gpg-services scroll-reveal" id="diensten">
  <div class="gpg-services__dots"></div>
  <div class="gpg-container gpg-services__inner">
    <div class="gpg-services__header">
      <span class="gpg-badge gpg-badge--accent">Onze diensten</span>
      <h2>Complete facilitaire ondersteuning</h2>
      <p>Van verhuizingen tot volledige kantoorinrichtingen. Wij bieden alles wat je nodig hebt.</p>
    </div>

    <div class="gpg-services__grid">
      <?php foreach ( $services as $index => $service ) : ?>
      <a href="<?php echo esc_url( $service['href'] ); ?>" class="gpg-service-card" style="--delay: <?php echo $index * 120; ?>ms">
        <div class="gpg-service-card__accent-bar"></div>
        <div class="gpg-service-card__header">
          <div class="gpg-service-card__icon"><?php echo $icons[ $service['icon'] ]; ?></div>
          <div>
            <div class="gpg-service-card__title"><?php echo esc_html( $service['title'] ); ?></div>
            <?php if ( ! empty( $service['subtitle'] ) ) : ?>
              <div class="gpg-service-card__title"><?php echo esc_html( $service['subtitle'] ); ?></div>
            <?php endif; ?>
          </div>
        </div>
        <p class="gpg-service-card__desc"><?php echo esc_html( $service['desc'] ); ?></p>
        <div class="gpg-service-card__footer">
          <span class="gpg-service-card__more">Lees meer →</span>
          <div class="gpg-service-card__arrow"><?php echo $arrow_icon; ?></div>
        </div>
      </a>
      <?php endforeach; ?>
    </div>

    <div class="gpg-services__view-all">
      <a href="/diensten/">Bekijk alle diensten <?php echo $arrow_icon; ?></a>
    </div>
  </div>
</section>
