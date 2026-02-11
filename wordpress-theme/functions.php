<?php
/**
 * GPG Facility Management Theme Functions
 *
 * @package GPG_Facility
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Theme Setup
 */
function gpg_theme_setup() {
    // Add title tag support
    add_theme_support( 'title-tag' );

    // Custom logo
    add_theme_support( 'custom-logo', array(
        'height'      => 48,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // Post thumbnails
    add_theme_support( 'post-thumbnails' );

    // HTML5 support
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // Register navigation menus
    register_nav_menus( array(
        'primary'   => __( 'Hoofdmenu', 'gpg-facility' ),
        'footer'    => __( 'Footer Menu', 'gpg-facility' ),
    ) );
}
add_action( 'after_setup_theme', 'gpg_theme_setup' );

/**
 * Enqueue Styles & Scripts
 */
function gpg_enqueue_assets() {
    // Google Fonts: Titillium Web + Open Sans
    wp_enqueue_style(
        'gpg-google-fonts',
        'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Titillium+Web:wght@300;400;600;700;900&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'gpg-style',
        get_stylesheet_uri(),
        array( 'gpg-google-fonts' ),
        wp_get_theme()->get( 'Version' )
    );

    // Main script
    wp_enqueue_script(
        'gpg-script',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get( 'Version' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'gpg_enqueue_assets' );

/**
 * Customizer Settings
 */
function gpg_customizer( $wp_customize ) {

    // === Contact Info Section ===
    $wp_customize->add_section( 'gpg_contact', array(
        'title'    => __( 'Contact Informatie', 'gpg-facility' ),
        'priority' => 30,
    ) );

    // Phone
    $wp_customize->add_setting( 'gpg_phone', array(
        'default'           => '+31(0)20 795 21 00',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'gpg_phone', array(
        'label'   => __( 'Telefoonnummer', 'gpg-facility' ),
        'section' => 'gpg_contact',
        'type'    => 'text',
    ) );

    // Email
    $wp_customize->add_setting( 'gpg_email', array(
        'default'           => 'info@gpgfacilities.nl',
        'sanitize_callback' => 'sanitize_email',
    ) );
    $wp_customize->add_control( 'gpg_email', array(
        'label'   => __( 'E-mailadres', 'gpg-facility' ),
        'section' => 'gpg_contact',
        'type'    => 'email',
    ) );

    // Address
    $wp_customize->add_setting( 'gpg_address', array(
        'default'           => 'Valkweg 111, 1118 ED Schiphol',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'gpg_address', array(
        'label'   => __( 'Adres', 'gpg-facility' ),
        'section' => 'gpg_contact',
        'type'    => 'text',
    ) );

    // LinkedIn URL
    $wp_customize->add_setting( 'gpg_linkedin', array(
        'default'           => 'https://www.linkedin.com/company/gpg-facility-management',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( 'gpg_linkedin', array(
        'label'   => __( 'LinkedIn URL', 'gpg-facility' ),
        'section' => 'gpg_contact',
        'type'    => 'url',
    ) );

    // === Hero Section ===
    $wp_customize->add_section( 'gpg_hero', array(
        'title'    => __( 'Hero Sectie', 'gpg-facility' ),
        'priority' => 35,
    ) );

    $wp_customize->add_setting( 'gpg_hero_title', array(
        'default'           => 'Facilitaire dienstverlening die werkt',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'gpg_hero_title', array(
        'label'   => __( 'Hero Titel', 'gpg-facility' ),
        'section' => 'gpg_hero',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'gpg_hero_subtitle', array(
        'default'           => 'Van visie naar rendement. Wij vertalen jouw ambities in hoogwaardige facilitaire diensten.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ) );
    $wp_customize->add_control( 'gpg_hero_subtitle', array(
        'label'   => __( 'Hero Subtitel', 'gpg-facility' ),
        'section' => 'gpg_hero',
        'type'    => 'textarea',
    ) );

    $wp_customize->add_setting( 'gpg_hero_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'gpg_hero_image', array(
        'label'   => __( 'Hero Achtergrondafbeelding', 'gpg-facility' ),
        'section' => 'gpg_hero',
    ) ) );

    // === Company Info ===
    $wp_customize->add_section( 'gpg_company', array(
        'title'    => __( 'Bedrijfsinformatie', 'gpg-facility' ),
        'priority' => 40,
    ) );

    $wp_customize->add_setting( 'gpg_btw', array(
        'default'           => 'NL854426036B01',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'gpg_btw', array(
        'label'   => __( 'BTW-id', 'gpg-facility' ),
        'section' => 'gpg_company',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'gpg_kvk', array(
        'default'           => '61641987',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'gpg_kvk', array(
        'label'   => __( 'KvK-nummer', 'gpg-facility' ),
        'section' => 'gpg_company',
        'type'    => 'text',
    ) );
}
add_action( 'customize_register', 'gpg_customizer' );

/**
 * Helper: Get theme mod with fallback
 */
function gpg_get( $key, $default = '' ) {
    return get_theme_mod( $key, $default );
}
