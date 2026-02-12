<?php
/**
 * Title: Footer CTA Banner
 * Slug: gpg-footer-cta
 * Categories: gpg-cta
 * Description: Full-width CTA banner that overlaps into the footer.
 */
?>

<!-- wp:group {"className":"gpg-footer-cta-wrapper","layout":{"type":"constrained","contentSize":"1400px"}} -->
<div class="wp-block-group gpg-footer-cta-wrapper">

<!-- wp:html -->
<div class="gpg-footer-cta-banner" style="border-radius:1.5rem;">
  <div class="dot-pattern">
    <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <?php for ($r = 0; $r < 15; $r++) : ?>
        <?php for ($c = 0; $c < 15; $c++) : ?>
          <circle cx="<?php echo 20 + $c * 12; ?>" cy="<?php echo 20 + $r * 12; ?>" r="1.5" fill="white"/>
        <?php endfor; ?>
      <?php endfor; ?>
    </svg>
  </div>
  <div class="banner-content">
    <h2>VAN VISIE NAAR<br>RENDEMENT</h2>
    <p>Wij vertalen jouw ambities in hoogwaardige facilitaire diensten die comfort en efficiëntie combineren.</p>
    <a href="/contact/" class="gpg-btn gpg-btn-white gsa-hoek-sm">
      Neem contact op
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </a>
  </div>
</div>
<!-- /wp:html -->

</div>
<!-- /wp:group -->
