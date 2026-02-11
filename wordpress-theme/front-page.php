<?php
/**
 * Front Page Template (One-Page)
 *
 * @package GPG_Facility
 */

get_header();
?>

<main id="main" role="main">

    <!-- ==================== HERO ==================== -->
    <section class="hero" id="home">
        <div class="hero-bg">
            <?php $hero_img = gpg_get( 'gpg_hero_image' ); ?>
            <?php if ( $hero_img ) : ?>
                <img src="<?php echo esc_url( $hero_img ); ?>" alt="GPG Facility Management">
            <?php else : ?>
                <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/hero-office.jpg' ); ?>" alt="GPG Facility Management">
            <?php endif; ?>
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-content container">
            <h1><?php echo esc_html( gpg_get( 'gpg_hero_title', 'Facilitaire dienstverlening die werkt' ) ); ?></h1>
            <p><?php echo esc_html( gpg_get( 'gpg_hero_subtitle', 'Van visie naar rendement. Wij vertalen jouw ambities in hoogwaardige facilitaire diensten.' ) ); ?></p>
            <div>
                <a href="#contact" class="btn btn-white gsa-hoek">Neem contact op →</a>
                <a href="#diensten" class="btn btn-outline" style="border-color:#fff; color:#fff; margin-left:1rem;">Onze diensten</a>
            </div>
        </div>
    </section>

    <!-- ==================== CLIENT LOGOS ==================== -->
    <section class="client-logos" id="klanten">
        <div class="marquee-track">
            <?php
            $clients = array( 'adyen', 'booking', 'cbre', 'dyson', 'schiphol', 'tiktok', 'wework', 'gsa-groep' );
            // Double for seamless loop
            foreach ( array_merge( $clients, $clients ) as $client ) :
            ?>
                <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/clients/' . $client . '.png' ); ?>" alt="<?php echo esc_attr( ucfirst( $client ) ); ?>">
            <?php endforeach; ?>
        </div>
    </section>

    <!-- ==================== DIENSTEN ==================== -->
    <section class="section" id="diensten">
        <div class="container">
            <p style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--gpg-olive); font-weight:600;" class="mb-2">Wat wij doen</p>
            <h2 class="mb-8">Onze Diensten</h2>

            <div class="services-grid">
                <?php
                $services = array(
                    array(
                        'title' => 'Huismeesterdiensten',
                        'desc'  => 'Professioneel beheer en onderhoud van uw gebouw door ervaren huismeesters.',
                        'img'   => 'dienst-handyman-new.jpg',
                    ),
                    array(
                        'title' => 'Verhuizen',
                        'desc'  => 'Complete kantoorverhuizingen, netjes en efficiënt uitgevoerd.',
                        'img'   => 'dienst-verhuizen-new.jpg',
                    ),
                    array(
                        'title' => 'Integrated Facilities',
                        'desc'  => 'Totaaloplossingen voor facilitair management onder één regie.',
                        'img'   => 'dienst-facilities-new.jpg',
                    ),
                    array(
                        'title' => 'Fit-out Projecten',
                        'desc'  => 'Van ontwerp tot oplevering: complete inrichting van kantoorruimtes.',
                        'img'   => 'dienst-fitout-new.jpg',
                    ),
                    array(
                        'title' => 'Inkoop',
                        'desc'  => 'Strategische inkoop van meubilair en inrichtingscomponenten.',
                        'img'   => 'dienst-inkoop-new.jpg',
                    ),
                    array(
                        'title' => 'Projectinrichting & Stoffering',
                        'desc'  => 'Professionele stoffering en projectinrichting op maat.',
                        'img'   => 'dienst-stoffering-new.jpg',
                    ),
                );

                foreach ( $services as $service ) :
                ?>
                <div class="service-card">
                    <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/' . $service['img'] ); ?>" alt="<?php echo esc_attr( $service['title'] ); ?>">
                    <h3><?php echo esc_html( $service['title'] ); ?></h3>
                    <p><?php echo esc_html( $service['desc'] ); ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- ==================== STATS ==================== -->
    <section class="stats" id="cijfers">
        <div class="container">
            <div class="stats-grid">
                <div>
                    <div class="stat-number">40+</div>
                    <div class="stat-label">Jaar ervaring</div>
                </div>
                <div>
                    <div class="stat-number">350+</div>
                    <div class="stat-label">Medewerkers</div>
                </div>
                <div>
                    <div class="stat-number">1000+</div>
                    <div class="stat-label">Projecten</div>
                </div>
                <div>
                    <div class="stat-number">4</div>
                    <div class="stat-label">HUB Locaties</div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================== WHY GPG ==================== -->
    <section class="section" id="waarom-gpg" style="background:var(--gpg-cream);">
        <div class="container">
            <p style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--gpg-olive); font-weight:600;" class="mb-2">Waarom GPG</p>
            <h2 class="mb-8">Wat ons onderscheidt</h2>

            <div class="usp-grid">
                <div class="usp-card">
                    <h3>40+ jaar ervaring</h3>
                    <p>Decennia aan expertise in facilitaire dienstverlening, gebundeld in één betrouwbare partner.</p>
                </div>
                <div class="usp-card">
                    <h3>Eén vast aanspreekpunt</h3>
                    <p>Persoonlijke benadering met een dedicated contactpersoon die jouw situatie kent.</p>
                </div>
                <div class="usp-card">
                    <h3>Flexibel & schaalbaar</h3>
                    <p>Van klein onderhoud tot grote projecten – wij schalen mee met jouw behoefte.</p>
                </div>
                <div class="usp-card">
                    <h3>Landelijke dekking</h3>
                    <p>Met HUB-locaties door heel Nederland zijn we altijd dichtbij.</p>
                </div>
                <div class="usp-card">
                    <h3>Duurzaam ondernemen</h3>
                    <p>MVO-gecertificeerd en ISO 14001 – duurzaamheid zit in ons DNA.</p>
                </div>
                <div class="usp-card">
                    <h3>Onderdeel GSA groep</h3>
                    <p>Gesteund door de kracht en het netwerk van de GSA groep.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================== PROCESS ==================== -->
    <section class="section" id="werkwijze">
        <div class="container" style="max-width:40rem;">
            <p style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--gpg-olive); font-weight:600;" class="mb-2">Werkwijze</p>
            <h2 class="mb-8">Hoe wij werken</h2>

            <div class="timeline">
                <div class="timeline-step">
                    <h4>1. Kennismaking</h4>
                    <p>We luisteren naar je wensen en inventariseren de situatie ter plekke.</p>
                </div>
                <div class="timeline-step">
                    <h4>2. Plan van aanpak</h4>
                    <p>Op basis van de inventarisatie stellen we een helder voorstel op.</p>
                </div>
                <div class="timeline-step">
                    <h4>3. Uitvoering</h4>
                    <p>Ons team gaat aan de slag – professioneel, netjes en op tijd.</p>
                </div>
                <div class="timeline-step">
                    <h4>4. Oplevering & nazorg</h4>
                    <p>Kwaliteitscontrole, oplevering en doorlopende ondersteuning.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================== PROJECTEN ==================== -->
    <section class="section" id="projecten" style="background:var(--gpg-cream);">
        <div class="container">
            <p style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--gpg-olive); font-weight:600;" class="mb-2">Referenties</p>
            <h2 class="mb-8">Recente Projecten</h2>

            <div class="projects-grid">
                <?php
                $projects = array(
                    array( 'title' => 'Booking.com HQ', 'desc' => 'Kantoorverhuizing & inrichting', 'img' => 'project-booking.jpg' ),
                    array( 'title' => 'Schiphol Kantoren', 'desc' => 'Integrated Facilities Management', 'img' => 'project-schiphol.jpg' ),
                    array( 'title' => 'The HUB', 'desc' => 'Complete fit-out', 'img' => 'project-hub.jpg' ),
                    array( 'title' => 'The HUB fase 2', 'desc' => 'Uitbreiding & stoffering', 'img' => 'project-hub-2.jpg' ),
                );

                foreach ( $projects as $project ) :
                ?>
                <div class="project-card">
                    <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/' . $project['img'] ); ?>" alt="<?php echo esc_attr( $project['title'] ); ?>">
                    <div class="project-card-overlay">
                        <h3><?php echo esc_html( $project['title'] ); ?></h3>
                        <p><?php echo esc_html( $project['desc'] ); ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- ==================== TESTIMONIALS ==================== -->
    <section class="section" id="testimonials">
        <div class="container" style="max-width:48rem;">
            <p style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--gpg-olive); font-weight:600;" class="mb-2">Wat klanten zeggen</p>
            <h2 class="mb-8">Testimonials</h2>

            <div class="testimonial-card mb-6">
                <blockquote>"GPG denkt proactief mee en ontzorgt ons volledig op facilitair gebied. Een betrouwbare partner."</blockquote>
                <cite>— Facility Manager, Booking.com</cite>
            </div>

            <div class="testimonial-card">
                <blockquote>"De verhuizing verliep vlekkeloos. Professioneel team, strakke planning en goede communicatie."</blockquote>
                <cite>— Office Manager, Adyen</cite>
            </div>
        </div>
    </section>

    <!-- ==================== FAQ ==================== -->
    <section class="section" id="faq" style="background:var(--gpg-cream);">
        <div class="container" style="max-width:48rem;">
            <p style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--gpg-olive); font-weight:600;" class="mb-2">Veelgestelde vragen</p>
            <h2 class="mb-8">FAQ</h2>

            <?php
            $faqs = array(
                array(
                    'q' => 'Wat maakt GPG anders dan andere facilitaire dienstverleners?',
                    'a' => 'GPG combineert meer dan 40 jaar ervaring met een persoonlijke aanpak. Jij krijgt één vast aanspreekpunt, flexibele oplossingen en we denken proactief mee.',
                ),
                array(
                    'q' => 'Welke diensten bieden jullie aan?',
                    'a' => 'Wij bieden complete facilitaire ondersteuning: huismeesterdiensten, kantoorverhuizingen, integrated facilities management, fit-out projecten, inkoop van meubilair en projectinrichting.',
                ),
                array(
                    'q' => 'In welke regio\'s zijn jullie actief?',
                    'a' => 'Wij zijn actief in heel Nederland met focus op de Randstad. Onze HUB-locaties in Schiphol, IJmuiden, Rotterdam en Oud Beijerland zorgen voor optimale dekking.',
                ),
                array(
                    'q' => 'Hoe werkt het aanvraagproces?',
                    'a' => 'Neem contact op via telefoon, e-mail of ons contactformulier. We plannen een kennismaking, inventariseren je wensen en leveren een helder voorstel.',
                ),
            );

            foreach ( $faqs as $faq ) :
            ?>
            <div class="faq-item">
                <button class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                    <?php echo esc_html( $faq['q'] ); ?>
                    <span>+</span>
                </button>
                <div class="faq-answer">
                    <p><?php echo esc_html( $faq['a'] ); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- ==================== CTA ==================== -->
    <section class="cta-section" id="contact">
        <div class="container">
            <h2>Van visie naar rendement</h2>
            <p>Wij vertalen jouw ambities in hoogwaardige facilitaire diensten die comfort en efficiëntie combineren.</p>
            <a href="mailto:<?php echo esc_attr( gpg_get( 'gpg_email', 'info@gpgfacilities.nl' ) ); ?>" class="btn btn-white gsa-hoek">Neem contact op →</a>
        </div>
    </section>

</main>

<?php get_footer(); ?>
