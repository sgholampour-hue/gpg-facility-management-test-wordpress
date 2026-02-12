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
  <div class="gpg-container">
    <p class="gpg-client-logos__label">Vertrouwd door toonaangevende organisaties</p>
  </div>
  <div class="gpg-marquee-wrapper">
    <div class="gpg-marquee-track">
      <?php for ( $i = 0; $i < 3; $i++ ) : ?>
        <?php foreach ( $clients as $client ) : ?>
          <div class="gpg-marquee-track__item">
            <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/' . $client['file'] ); ?>" alt="<?php echo esc_attr( $client['name'] ); ?>" loading="lazy">
          </div>
        <?php endforeach; ?>
      <?php endfor; ?>
    </div>
  </div>
</section>
