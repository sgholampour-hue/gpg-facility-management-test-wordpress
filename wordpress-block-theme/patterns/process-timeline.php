<?php
/**
 * Title: Process Timeline
 * Slug: gpg-process-timeline
 * Categories: gpg-sections
 * Description: 4-stappen werkwijze met animatie
 */
$steps = array(
  array( 'num' => '01', 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>', 'title' => 'Kennismaking', 'desc' => 'We bespreken jouw wensen en maken een plan op maat.' ),
  array( 'num' => '02', 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', 'title' => 'Inventarisatie', 'desc' => 'Grondige analyse van de situatie en mogelijkheden.' ),
  array( 'num' => '03', 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/></svg>', 'title' => 'Uitvoering', 'desc' => 'Professionele realisatie door ons vakkundige team.' ),
  array( 'num' => '04', 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>', 'title' => 'Oplevering', 'desc' => 'Eindcontrole en nazorg voor een perfect resultaat.' ),
);
?>

<section class="gpg-process scroll-reveal" id="werkwijze">
  <div class="gpg-container">
    <div class="gpg-process__header">
      <span class="gpg-badge gpg-badge--primary">Onze werkwijze</span>
      <h2>Van plan naar realisatie</h2>
      <p>Een helder proces met vaste stappen zorgt voor een voorspelbaar en succesvol resultaat.</p>
    </div>

    <div class="gpg-process__grid">
      <div class="gpg-process__line"><div class="gpg-process__line-fill"></div></div>

      <?php foreach ( $steps as $index => $step ) : ?>
      <div class="gpg-step-card gsa-hoek-sm" data-step="<?php echo $index; ?>">
        <span class="gpg-step-card__num"><?php echo esc_html( $step['num'] ); ?></span>
        <div class="gpg-step-card__icon"><?php echo $step['icon']; ?></div>
        <h3><?php echo esc_html( $step['title'] ); ?></h3>
        <p><?php echo esc_html( $step['desc'] ); ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>
