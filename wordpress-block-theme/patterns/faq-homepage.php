<?php
/**
 * Title: FAQ Homepage
 * Slug: gpg-faq-homepage
 * Categories: gpg-sections
 * Description: Veelgestelde vragen met accordion, 2-kolom layout
 */
$faqs = array(
  array( 'q' => 'Wat maakt GPG anders dan andere facilitaire dienstverleners?', 'a' => 'GPG combineert meer dan 40 jaar ervaring met een persoonlijke aanpak. Jij krijgt één vast aanspreekpunt, flexibele oplossingen en we denken proactief mee. Als onderdeel van GSA Groep hebben we de schaalgrootte voor grote projecten én de wendbaarheid voor maatwerk.' ),
  array( 'q' => 'Welke diensten bieden jullie aan?', 'a' => 'Wij bieden complete facilitaire ondersteuning: huismeesterdiensten, kantoorverhuizingen, integrated facilities management, fit-out projecten, inkoop van meubilair en projectinrichting. Alles onder één dak, van kleine reparaties tot volledige kantoorinrichtingen.' ),
  array( 'q' => "In welke regio's zijn jullie actief?", 'a' => 'Wij zijn actief in heel Nederland met focus op de Randstad.' ),
  array( 'q' => 'Hoe werkt het aanvraagproces?', 'a' => 'Eenvoudig: neem contact op via telefoon, e-mail of ons contactformulier. We plannen een kennismaking, inventariseren je wensen en leveren een helder voorstel. Na akkoord gaan we direct aan de slag met jouw project.' ),
);
?>

<section class="gpg-faq scroll-reveal" id="faq">
  <div class="gpg-container">
    <div class="gpg-faq__grid">
      <!-- Left: Header -->
      <div class="gpg-faq__header">
        <span class="gpg-badge gpg-badge--accent">FAQ</span>
        <h2>Veelgestelde vragen</h2>
        <p>Heb je vragen over onze diensten of werkwijze? Hier vind je antwoorden op de meest gestelde vragen.</p>
        <a href="/contact/" class="gpg-faq__contact-link">
          Heb je andere vragen? Neem contact op
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>

      <!-- Right: Accordion -->
      <div class="gpg-faq__items">
        <?php foreach ( $faqs as $faq ) : ?>
        <div class="gpg-faq-item gsa-hoek-sm">
          <button class="gpg-faq-item__question" aria-expanded="false">
            <span><?php echo esc_html( $faq['q'] ); ?></span>
            <span class="gpg-faq-item__toggle gsa-hoek-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path class="gpg-faq-item__plus-v" d="M12 5v14"/></svg>
            </span>
          </button>
          <div class="gpg-faq-item__answer">
            <p><?php echo esc_html( $faq['a'] ); ?></p>
          </div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>
