<?php
/**
 * Title: Client Logos Marquee
 * Slug: gpg-client-logos
 * Categories: gpg-sections
 * Description: Oneindige marquee met klantlogo's
 */
$clients = array(
  array( 'file' => 'clients/gsa-groep.png', 'name' => 'GSA Groep' ),
  array( 'file' => 'clients/schiphol.png', 'name' => 'Schiphol' ),
  array( 'file' => 'clients/adyen.png', 'name' => 'Adyen' ),
  array( 'file' => 'clients/cbre.png', 'name' => 'CBRE' ),
  array( 'file' => 'clients/booking.png', 'name' => 'Booking.com' ),
  array( 'file' => 'clients/wework.png', 'name' => 'WeWork' ),
  array( 'file' => 'clients/tiktok.png', 'name' => 'TikTok' ),
  array( 'file' => 'clients/dyson.png', 'name' => 'Dyson' ),
);
?>

<section class="gpg-client-logos" id="klanten">
  <div class="gpg-container" style="text-align:center;margin-bottom:1.5rem;">
    <p style="font-size:0.75rem;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:var(--gpg-gray);">Vertrouwd door toonaangevende organisaties</p>
  </div>
  <div class="gpg-marquee-wrapper">
    <div class="gpg-marquee-track">
      <?php for ( $i = 0; $i < 3; $i++ ) : ?>
        <?php foreach ( $clients as $client ) : ?>
          <div class="logo-item">
            <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/' . $client['file'] ); ?>" alt="<?php echo esc_attr( $client['name'] ); ?>" loading="lazy">
          </div>
        <?php endforeach; ?>
      <?php endfor; ?>
    </div>
  </div>
</section>