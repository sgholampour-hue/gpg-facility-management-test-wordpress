<?php
/**
 * Title: Stats Ticker
 * Slug: gpg-stats-ticker
 * Categories: gpg-sections
 * Description: Statistieken balk met counter-animatie
 */
$stats = array(
  array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>', 'value' => '40', 'suffix' => '+', 'label' => 'Jaar ervaring' ),
  array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>', 'value' => '600', 'suffix' => '+', 'label' => 'Interieur producten' ),
  array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', 'value' => '50', 'suffix' => '+', 'label' => 'Professionals' ),
  array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>', 'value' => '98', 'suffix' => '%', 'label' => 'Klanttevredenheid' ),
);
?>

<section class="gpg-stats gpg-scroll-reveal" id="cijfers">
  <div class="deco-circle-1"></div>
  <div class="deco-circle-2"></div>
  <div class="gpg-container">
    <div class="gpg-stats-grid">
      <?php foreach ( $stats as $stat ) : ?>
      <div class="gpg-stat-item">
        <div class="stat-icon-wrap"><?php echo $stat['icon']; ?></div>
        <div class="gpg-stat-number" data-target="<?php echo esc_attr( $stat['value'] ); ?>" data-suffix="<?php echo esc_attr( $stat['suffix'] ); ?>">0<?php echo esc_html( $stat['suffix'] ); ?></div>
        <div class="gpg-stat-label"><?php echo esc_html( $stat['label'] ); ?></div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>