<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="GPG Facility Management - Professionele facilitaire dienstverlening">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Site Header -->
<header class="site-header">
    <div class="container">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo" aria-label="<?php bloginfo( 'name' ); ?>">
            <?php if ( has_custom_logo() ) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/gpg-logo.png' ); ?>" alt="<?php bloginfo( 'name' ); ?>">
            <?php endif; ?>
        </a>

        <!-- Desktop Navigation -->
        <nav class="main-nav" aria-label="Hoofdnavigatie">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'container'      => false,
                'items_wrap'     => '%3$s',
                'fallback_cb'    => 'gpg_fallback_menu',
            ) );
            ?>
            <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn btn-outline">Neem Contact Op</a>
        </nav>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" aria-label="Menu openen" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>

    <!-- Mobile Navigation -->
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobiel menu">
        <?php
        wp_nav_menu( array(
            'theme_location' => 'primary',
            'container'      => false,
            'items_wrap'     => '%3$s',
            'fallback_cb'    => 'gpg_fallback_menu',
        ) );
        ?>
        <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn btn-outline mt-4" style="display:inline-flex;">Neem Contact Op</a>
    </nav>

    <!-- Sub Header -->
    <div class="sub-header">
        <div class="container">
            <a href="mailto:<?php echo esc_attr( gpg_get( 'gpg_email', 'info@gpgfacilities.nl' ) ); ?>">
                ✉ <?php echo esc_html( gpg_get( 'gpg_email', 'info@gpgfacilities.nl' ) ); ?>
            </a>
            <a href="tel:<?php echo esc_attr( str_replace( ' ', '', gpg_get( 'gpg_phone', '+31207952100' ) ) ); ?>">
                ☎ <?php echo esc_html( gpg_get( 'gpg_phone', '+31(0)20 795 21 00' ) ); ?>
            </a>
        </div>
    </div>
</header>

<?php
/**
 * Fallback menu if no menu is assigned
 */
function gpg_fallback_menu() {
    echo '<a href="' . esc_url( home_url( '/' ) ) . '">Home</a>';
    echo '<a href="' . esc_url( home_url( '/diensten' ) ) . '">Diensten</a>';
    echo '<a href="' . esc_url( home_url( '/projecten' ) ) . '">Projecten</a>';
    echo '<a href="' . esc_url( home_url( '/over-ons' ) ) . '">Over Ons</a>';
    echo '<a href="' . esc_url( home_url( '/duurzaamheid' ) ) . '">Duurzaamheid</a>';
}
?>
