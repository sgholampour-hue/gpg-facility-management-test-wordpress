<?php
/**
 * Front Page Template (One-Page) - Matching Lovable React Design
 *
 * @package GPG_Facility
 */

get_header();
?>

<main id="main" role="main">

    <!-- ==================== HERO SPLIT ==================== -->
    <section class="hero-split" id="home">
        <div class="hero-mesh-1"></div>
        <div class="hero-mesh-2"></div>

        <div class="container" style="position:relative; z-index:10;">
            <div class="hero-grid">
                <!-- Left: Content -->
                <div class="hero-content hero-reveal" id="hero-content">
                    <!-- Est. Badge -->
                    <div class="hero-badge">
                        <span class="est">EST. 2008</span>
                        <span class="divider"></span>
                        <span class="type">Facility Management</span>
                    </div>

                    <!-- Headline -->
                    <h1>
                        Facilitaire diensten met een
                        <span class="highlight">persoonlijke</span>
                        benadering.
                    </h1>

                    <!-- Subtitle -->
                    <p class="hero-subtitle">
                        Wij ondersteunen kantoren en bedrijven met professionele facilitaire diensten.
                        Altijd vakwerk, altijd flexibel, en een partner die écht meedenkt.
                    </p>

                    <!-- Highlights -->
                    <div class="hero-highlights">
                        <?php
                        $highlights = array( 'Onderdeel GSA groep', 'Eén vast aanspreekpunt', 'Flexibel & betrouwbaar', 'Landelijke dekking' );
                        foreach ( $highlights as $item ) :
                        ?>
                        <div class="check-item">
                            <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                            <span><?php echo esc_html( $item ); ?></span>
                        </div>
                        <?php endforeach; ?>
                    </div>

                    <!-- CTAs -->
                    <div class="hero-ctas">
                        <a href="#contact" class="btn btn-outline-accent btn-xl gsa-hoek-sm">
                            Neem contact op
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                        <a href="#projecten" class="btn btn-ghost btn-xl gsa-hoek-sm">
                            Bekijk projecten
                        </a>
                    </div>
                </div>

                <!-- Right: Visual -->
                <div class="hero-visual hero-reveal" id="hero-visual" style="transition-delay:200ms;">
                    <div style="position:relative;">
                        <div class="deco-1"></div>
                        <div class="deco-2"></div>

                        <div class="hero-image-wrapper gsa-hoek-lg">
                            <?php $hero_img = gpg_get( 'gpg_hero_image' ); ?>
                            <img
                                src="<?php echo esc_url( $hero_img ? $hero_img : get_template_directory_uri() . '/assets/images/hero-office.jpg' ); ?>"
                                alt="Modern kantooromgeving met professionele faciliteiten"
                                loading="eager"
                            >
                            <div class="overlay-blue"></div>
                            <div class="overlay-gradient"></div>

                            <!-- Content overlay -->
                            <div class="hero-image-content">
                                <span class="badge gsa-hoek-sm">Onderdeel GSA groep</span>
                                <h3>COMPLETE ONTZORGING</h3>
                                <div class="desc-row">
                                    <p>Van verhuizing tot fit-out, van huismeesterdiensten tot integrated facilities.</p>
                                    <a href="#projecten" class="btn-glass gsa-hoek-sm">
                                        Projecten
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================== CLIENT LOGOS ==================== -->
    <section class="client-logos" id="klanten">
        <div class="container">
            <p class="label">Vertrouwd door toonaangevende organisaties</p>
        </div>
        <div class="marquee-wrapper">
            <div class="marquee-track">
                <?php
                $clients = array(
                    array( 'file' => 'gsa-groep.png', 'name' => 'GSA Groep' ),
                    array( 'file' => 'schiphol.png', 'name' => 'Schiphol' ),
                    array( 'file' => 'adyen.png', 'name' => 'Adyen' ),
                    array( 'file' => 'cbre.png', 'name' => 'CBRE' ),
                    array( 'file' => 'booking.png', 'name' => 'Booking.com' ),
                    array( 'file' => 'wework.png', 'name' => 'WeWork' ),
                    array( 'file' => 'tiktok.png', 'name' => 'TikTok' ),
                    array( 'file' => 'dyson.png', 'name' => 'Dyson' ),
                );
                // Triple for seamless loop
                for ( $i = 0; $i < 3; $i++ ) :
                    foreach ( $clients as $client ) :
                ?>
                    <div class="logo-item">
                        <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/clients/' . $client['file'] ); ?>" alt="<?php echo esc_attr( $client['name'] ); ?>">
                    </div>
                <?php
                    endforeach;
                endfor;
                ?>
            </div>
        </div>
    </section>

    <!-- ==================== DIENSTEN (Bento Cards) ==================== -->
    <section class="services-section scroll-reveal" id="diensten">
        <div class="container" style="position:relative; z-index:10;">
            <div style="max-width:42rem; margin-bottom:2rem;">
                <span class="section-badge">Onze diensten</span>
                <h2 class="mb-3">Complete facilitaire ondersteuning</h2>
                <p>Van verhuizingen tot volledige kantoorinrichtingen. Wij bieden alles wat je nodig hebt.</p>
            </div>

            <?php if ( ! function_exists( 'gpg_dienst_icon' ) ) :
                function gpg_dienst_icon( $type ) {
                    $icons = array(
                        'wrench'   => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
                        'truck'    => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
                        'building' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
                        'pen'      => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
                        'shopping' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
                        'sofa'     => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"/><path d="M4 18v2"/><path d="M20 18v2"/><path d="M12 4v9"/></svg>',
                        'arrow'    => '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
                    );
                    return isset( $icons[ $type ] ) ? $icons[ $type ] : '';
                }
            endif; ?>

            <div class="services-grid">
                <?php
                $services = array(
                    array( 'icon' => 'wrench', 'title' => 'Huismeesterdiensten', 'desc' => 'Van kleine reparaties tot complexe klussen: vakmanschap en snelle service.' ),
                    array( 'icon' => 'truck', 'title' => 'Verhuizen', 'desc' => 'Professionele verhuisservice voor kantoren zonder onderbrekingen.' ),
                    array( 'icon' => 'building', 'title' => 'Integrated Facilities', 'desc' => 'Complete facilitaire ondersteuning onder één dak.' ),
                    array( 'icon' => 'pen', 'title' => "Fit-out's", 'desc' => 'Transformatie van ruimtes naar functionele werkomgevingen. Van ontwerp tot oplevering.' ),
                    array( 'icon' => 'shopping', 'title' => 'Inkoop', 'subtitle' => 'Inrichtingscomponenten', 'desc' => 'Strategische inkoop van meubilair en inrichting. Wij bieden scherpe prijzen en kwaliteitsgarantie.' ),
                    array( 'icon' => 'sofa', 'title' => 'Projectinrichting &', 'subtitle' => 'Stoffering', 'desc' => 'Maatwerk inrichting en stoffering voor een optimale werkplek. Van bureaus tot beplanting, alles uit één hand.' ),
                );

                foreach ( $services as $service ) :
                ?>
                <a href="#contact" class="service-card">
                    <div class="card-header">
                        <div class="icon-wrap"><?php echo gpg_dienst_icon( $service['icon'] ); ?></div>
                        <div>
                            <div class="card-title"><?php echo esc_html( $service['title'] ); ?></div>
                            <?php if ( ! empty( $service['subtitle'] ) ) : ?>
                                <div class="card-title"><?php echo esc_html( $service['subtitle'] ); ?></div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <p class="card-desc"><?php echo esc_html( $service['desc'] ); ?></p>
                    <div class="card-footer">
                        <span class="read-more">Lees meer →</span>
                        <div class="arrow-circle"><?php echo gpg_dienst_icon( 'arrow' ); ?></div>
                    </div>
                </a>
                <?php endforeach; ?>
            </div>

            <div class="services-view-all">
                <a href="#contact">
                    Bekijk alle diensten
                    <?php echo gpg_dienst_icon( 'arrow' ); ?>
                </a>
            </div>
        </div>
    </section>

    <!-- ==================== STATS ==================== -->
    <section class="stats scroll-reveal" id="cijfers">
        <div class="deco-circle-1"></div>
        <div class="deco-circle-2"></div>
        <div class="container">
            <div class="stats-grid">
                <?php
                $stats = array(
                    array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>', 'value' => '40', 'suffix' => '+', 'label' => 'Jaar ervaring' ),
                    array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>', 'value' => '600', 'suffix' => '+', 'label' => 'Interieur producten' ),
                    array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', 'value' => '50', 'suffix' => '+', 'label' => 'Professionals' ),
                    array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>', 'value' => '98', 'suffix' => '%', 'label' => 'Klanttevredenheid' ),
                );

                foreach ( $stats as $stat ) :
                ?>
                <div class="stat-item">
                    <div class="stat-icon-wrap"><?php echo $stat['icon']; ?></div>
                    <div class="stat-number" data-target="<?php echo esc_attr( $stat['value'] ); ?>" data-suffix="<?php echo esc_attr( $stat['suffix'] ); ?>">0<?php echo esc_html( $stat['suffix'] ); ?></div>
                    <div class="stat-label"><?php echo esc_html( $stat['label'] ); ?></div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- ==================== WHY GPG ==================== -->
    <section class="why-gpg scroll-reveal" id="waarom-gpg">
        <div class="bg-gradient"></div>
        <div class="container">
            <div class="why-grid">
                <!-- Left: Features -->
                <div>
                    <span class="section-badge">Waarom GPG</span>
                    <h2 class="mb-3">40+ jaar facilitaire expertise</h2>
                    <p class="mb-6" style="font-size:0.875rem; line-height:1.7;">
                        Bij GPG begrijpen we dat je behoefte hebt aan een betrouwbare partner
                        die jouw facilitaire diensten naar een hoger niveau tilt.
                    </p>

                    <div class="feature-grid">
                        <?php
                        $features = array(
                            array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', 'title' => 'Persoonlijke benadering', 'desc' => 'Als familiebedrijf behouden we altijd het persoonlijke contact.' ),
                            array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>', 'title' => 'Vakwerk', 'desc' => 'Kwaliteit staat bij ons voorop bij elk project.' ),
                            array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>', 'title' => 'Volgens planning', 'desc' => 'We halen de deadline, altijd.' ),
                            array( 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>', 'title' => 'Flexibiliteit', 'desc' => 'We denken in oplossingen en passen ons aan.' ),
                        );

                        foreach ( $features as $feature ) :
                        ?>
                        <div class="feature-card gsa-hoek-sm">
                            <div class="feature-icon"><?php echo $feature['icon']; ?></div>
                            <h4><?php echo esc_html( $feature['title'] ); ?></h4>
                            <p><?php echo esc_html( $feature['desc'] ); ?></p>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Right: Team panel -->
                <div>
                    <div class="team-panel gsa-hoek-lg">
                        <div class="panel-logo">
                            <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/gpg-logo.png' ); ?>" alt="GPG Facility Management">
                        </div>
                        <h3 class="text-center mb-6" style="font-size:1.125rem;">Ons Team</h3>

                        <div class="team-grid">
                            <?php
                            $team = array(
                                array( 'name' => 'Wim Gruijters', 'role' => 'Directeur GPG', 'img' => 'team-wim-gruijters.png' ),
                                array( 'name' => 'Danny Moeljoredjo', 'role' => 'Teamleider Facilitair', 'img' => 'team-danny-moeljoredjo.png' ),
                                array( 'name' => 'Patricia Nijholt', 'role' => 'Algemeen Manager GPG', 'img' => 'team-patricia-nijholt.png' ),
                            );

                            foreach ( $team as $member ) :
                            ?>
                            <div class="team-member">
                                <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/' . $member['img'] ); ?>" alt="<?php echo esc_attr( $member['name'] ); ?>">
                                <p class="name"><?php echo esc_html( $member['name'] ); ?></p>
                                <p class="role"><?php echo esc_html( $member['role'] ); ?></p>
                            </div>
                            <?php endforeach; ?>
                        </div>

                        <p class="text-center mt-6" style="font-size:0.75rem; color:var(--color-muted-foreground);">
                            Klik op een teamlid voor contactgegevens
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================== PROCESS ==================== -->
    <section class="process-section scroll-reveal" id="werkwijze">
        <div class="container">
            <div class="text-center" style="max-width:42rem; margin:0 auto 3rem;">
                <span class="section-badge section-badge--primary">Onze werkwijze</span>
                <h2 class="mb-3">Van plan naar realisatie</h2>
                <p>Een helder proces met vaste stappen zorgt voor een voorspelbaar en succesvol resultaat.</p>
            </div>

            <div class="process-grid">
                <div class="process-line"><div class="fill"></div></div>

                <?php
                $steps = array(
                    array( 'num' => '01', 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>', 'title' => 'Kennismaking', 'desc' => 'We bespreken jouw wensen en maken een plan op maat.' ),
                    array( 'num' => '02', 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', 'title' => 'Inventarisatie', 'desc' => 'Grondige analyse van de situatie en mogelijkheden.' ),
                    array( 'num' => '03', 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/></svg>', 'title' => 'Uitvoering', 'desc' => 'Professionele realisatie door ons vakkundige team.' ),
                    array( 'num' => '04', 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>', 'title' => 'Oplevering', 'desc' => 'Eindcontrole en nazorg voor een perfect resultaat.' ),
                );

                foreach ( $steps as $step ) :
                ?>
                <div class="step-card gsa-hoek-sm">
                    <span class="step-num"><?php echo esc_html( $step['num'] ); ?></span>
                    <div class="step-icon"><?php echo $step['icon']; ?></div>
                    <h3><?php echo esc_html( $step['title'] ); ?></h3>
                    <p><?php echo esc_html( $step['desc'] ); ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- ==================== PROJECTEN ==================== -->
    <section class="projects-section scroll-reveal" id="projecten">
        <div class="bg-orb-1"></div>
        <div class="bg-orb-2"></div>
        <div class="container">
            <div class="projects-header">
                <div>
                    <span class="accent-label">Uitgelichte werken</span>
                    <h2>RECENTE PROJECTEN</h2>
                </div>
            </div>

            <div class="projects-grid">
                <?php
                $projects = array(
                    array( 'title' => 'BOOKING.COM', 'subtitle' => 'Amsterdam, Nederland', 'year' => '2023', 'img' => 'project-booking.jpg' ),
                    array( 'title' => 'SCHIPHOL HOOFDKANTOOR', 'subtitle' => 'Schiphol, Nederland', 'year' => 'Lopend', 'img' => 'project-schiphol.jpg' ),
                    array( 'title' => 'HUB LOCATIES', 'subtitle' => 'Diverse locaties', 'year' => '2024', 'img' => 'project-hub.jpg' ),
                    array( 'title' => 'GSA GROEP', 'subtitle' => 'Hoofdkantoor, Nederland', 'year' => '2022', 'img' => 'project-hub-2.jpg' ),
                );

                foreach ( $projects as $project ) :
                ?>
                <div class="project-card gsa-hoek">
                    <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/' . $project['img'] ); ?>" alt="<?php echo esc_attr( $project['title'] ); ?>">
                    <div class="overlay-blue"></div>
                    <div class="overlay-gradient"></div>
                    <div class="project-card-content">
                        <span class="year-badge gsa-hoek-sm"><?php echo esc_html( $project['year'] ); ?></span>
                        <h3><?php echo esc_html( $project['title'] ); ?></h3>
                        <p><?php echo esc_html( $project['subtitle'] ); ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>

            <div class="projects-view-all">
                <a href="#contact">
                    Bekijk alle projecten
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </a>
            </div>
        </div>
    </section>

    <!-- ==================== TESTIMONIALS ==================== -->
    <section class="testimonials-section scroll-reveal" id="testimonials">
        <div class="container">
            <div class="testimonial-card gsa-hoek-lg">
                <div class="quote-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                </div>

                <blockquote>
                    "Samen met GPG bouwen we aan werkplekken waar mensen graag komen. Hun expertise en betrokkenheid maken het verschil."
                </blockquote>

                <div class="testimonial-author">
                    <div class="initials">FS</div>
                    <div class="author-info">
                        <p class="author-name">Frank van Schaik</p>
                        <p class="author-role">Directeur, GSA Groep</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================== FAQ ==================== -->
    <section class="faq-section scroll-reveal" id="faq">
        <div class="container">
            <div class="faq-grid">
                <!-- Left: Header -->
                <div class="faq-header">
                    <span class="section-badge">FAQ</span>
                    <h2 class="mb-3">Veelgestelde vragen</h2>
                    <p class="mb-6" style="font-size:0.875rem; line-height:1.7;">
                        Heb je vragen over onze diensten of werkwijze? Hier vind je antwoorden op de meest gestelde vragen.
                    </p>
                    <a href="#contact" class="contact-link">
                        Heb je andere vragen? Neem contact op
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                </div>

                <!-- Right: FAQ items -->
                <div class="faq-items">
                    <?php
                    $faqs = array(
                        array(
                            'q' => 'Wat maakt GPG anders dan andere facilitaire dienstverleners?',
                            'a' => 'GPG combineert meer dan 40 jaar ervaring met een persoonlijke aanpak. Jij krijgt één vast aanspreekpunt, flexibele oplossingen en we denken proactief mee. Als onderdeel van GSA Groep hebben we de schaalgrootte voor grote projecten én de wendbaarheid voor maatwerk.',
                        ),
                        array(
                            'q' => 'Welke diensten bieden jullie aan?',
                            'a' => 'Wij bieden complete facilitaire ondersteuning: huismeesterdiensten, kantoorverhuizingen, integrated facilities management, fit-out projecten, inkoop van meubilair en projectinrichting. Alles onder één dak, van kleine reparaties tot volledige kantoorinrichtingen.',
                        ),
                        array(
                            'q' => "In welke regio's zijn jullie actief?",
                            'a' => 'Wij zijn actief in heel Nederland met focus op de Randstad.',
                        ),
                        array(
                            'q' => 'Hoe werkt het aanvraagproces?',
                            'a' => 'Eenvoudig: neem contact op via telefoon, e-mail of ons contactformulier. We plannen een kennismaking, inventariseren je wensen en leveren een helder voorstel. Na akkoord gaan we direct aan de slag met jouw project.',
                        ),
                    );

                    foreach ( $faqs as $faq ) :
                    ?>
                    <div class="faq-item gsa-hoek-sm">
                        <button class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                            <span><?php echo esc_html( $faq['q'] ); ?></span>
                            <span class="toggle-icon gsa-hoek-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            </span>
                        </button>
                        <div class="faq-answer">
                            <p><?php echo esc_html( $faq['a'] ); ?></p>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- ==================== CTA ==================== -->
    <section class="cta-section" id="contact">
        <div class="bg-blob-1"></div>
        <div class="bg-blob-2"></div>
        <div class="container" style="position:relative; z-index:1;">
            <div class="cta-card gsa-hoek-lg">
                <div class="cta-inner">
                    <!-- Left: Content -->
                    <div class="cta-content">
                        <span class="section-badge">Neem contact op</span>
                        <h2>Klaar om te starten?</h2>
                        <p>Neem vandaag nog contact met ons op voor een vrijblijvend adviesgesprek. Wij helpen je graag bij jouw volgende project.</p>

                        <div class="cta-contacts">
                            <a href="tel:+31207952100">
                                <div class="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                </div>
                                <span>+31(0)20 795 21 00</span>
                            </a>
                            <a href="mailto:info@gpgfacilities.nl">
                                <div class="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                </div>
                                <span>info@gpgfacilities.nl</span>
                            </a>
                        </div>

                        <a href="mailto:info@gpgfacilities.nl" class="btn btn-outline gsa-hoek-sm">
                            Neem contact op
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>

                    <!-- Right: Image -->
                    <div class="cta-image">
                        <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/cta-meeting.jpg' ); ?>" alt="Professioneel overleg met het GPG team" loading="lazy">
                        <div class="overlay-blue"></div>
                        <div class="overlay-gradient"></div>
                        <div class="overlay-gradient-lr"></div>
                        <div class="float-badge gsa-hoek-sm">
                            <p class="badge-label">Jouw partner voor</p>
                            <p class="badge-value">professionele facilitaire dienstverlening</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
