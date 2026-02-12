<?php
/**
 * GPG Facility Management Block Theme
 *
 * @package GPG_Facility_Block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Google Fonts (fallback for older browsers not supporting theme.json fontFace)
 */
function gpg_enqueue_fonts() {
	wp_enqueue_style(
		'gpg-google-fonts',
		'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Titillium+Web:wght@400;600;700&display=swap',
		array(),
		null
	);
}
add_action( 'wp_enqueue_scripts', 'gpg_enqueue_fonts' );

/**
 * Enqueue custom styles and scripts
 */
function gpg_enqueue_assets() {
	// Custom CSS for animations, interactions, and components not achievable via theme.json
	wp_enqueue_style(
		'gpg-custom',
		get_template_directory_uri() . '/assets/css/custom.css',
		array(),
		wp_get_theme()->get( 'Version' )
	);

	// Custom JS for marquee, counters, scroll reveals, FAQ accordion, mobile menu enhancements
	wp_enqueue_script(
		'gpg-main',
		get_template_directory_uri() . '/assets/js/main.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'wp_enqueue_scripts', 'gpg_enqueue_assets' );

/**
 * Register block patterns category
 */
function gpg_register_pattern_categories() {
	register_block_pattern_category( 'gpg-sections', array(
		'label' => __( 'GPG Sections', 'gpg-facility' ),
	) );
	register_block_pattern_category( 'gpg-heroes', array(
		'label' => __( 'GPG Heroes', 'gpg-facility' ),
	) );
	register_block_pattern_category( 'gpg-cta', array(
		'label' => __( 'GPG CTA', 'gpg-facility' ),
	) );
}
add_action( 'init', 'gpg_register_pattern_categories' );

/**
 * Register Custom Post Type: Projects
 */
function gpg_register_project_cpt() {
	$labels = array(
		'name'               => __( 'Projecten', 'gpg-facility' ),
		'singular_name'      => __( 'Project', 'gpg-facility' ),
		'add_new'            => __( 'Nieuw project', 'gpg-facility' ),
		'add_new_item'       => __( 'Nieuw project toevoegen', 'gpg-facility' ),
		'edit_item'          => __( 'Project bewerken', 'gpg-facility' ),
		'view_item'          => __( 'Bekijk project', 'gpg-facility' ),
		'all_items'          => __( 'Alle projecten', 'gpg-facility' ),
		'search_items'       => __( 'Zoek projecten', 'gpg-facility' ),
		'not_found'          => __( 'Geen projecten gevonden', 'gpg-facility' ),
		'not_found_in_trash' => __( 'Geen projecten in prullenbak', 'gpg-facility' ),
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'has_archive'        => false,
		'show_in_rest'       => true,
		'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
		'rewrite'            => array( 'slug' => 'projecten' ),
		'menu_icon'          => 'dashicons-building',
		'template'           => array(),
	);

	register_post_type( 'gpg_project', $args );
}
add_action( 'init', 'gpg_register_project_cpt' );

/**
 * Register navigation menus
 */
function gpg_register_menus() {
	register_nav_menus( array(
		'primary'    => __( 'Hoofdmenu', 'gpg-facility' ),
		'footer'     => __( 'Footermenu', 'gpg-facility' ),
		'diensten'   => __( 'Dienstenmenu', 'gpg-facility' ),
	) );
}
add_action( 'after_setup_theme', 'gpg_register_menus' );

/**
 * Theme setup
 */
function gpg_theme_setup() {
	// Add theme support
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'custom-logo', array(
		'height'      => 120,
		'width'       => 300,
		'flex-height' => true,
		'flex-width'  => true,
	) );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
		'style',
		'script',
	) );

	// Custom image sizes
	add_image_size( 'gpg-hero', 1920, 1080, true );
	add_image_size( 'gpg-project', 800, 600, true );
	add_image_size( 'gpg-service', 640, 480, true );
	add_image_size( 'gpg-team', 400, 400, true );
}
add_action( 'after_setup_theme', 'gpg_theme_setup' );

/**
 * Helper: Get theme image URL
 */
function gpg_image( $filename ) {
	return esc_url( get_template_directory_uri() . '/assets/images/' . $filename );
}

/**
 * Customizer: Add contact info settings
 */
function gpg_customize_register( $wp_customize ) {
	// Contact Section
	$wp_customize->add_section( 'gpg_contact', array(
		'title'    => __( 'Contactgegevens', 'gpg-facility' ),
		'priority' => 30,
	) );

	$fields = array(
		'gpg_phone'   => array( 'label' => 'Telefoon', 'default' => '+31(0)20 795 21 00' ),
		'gpg_email'   => array( 'label' => 'E-mail', 'default' => 'info@gpgfacilities.nl' ),
		'gpg_address' => array( 'label' => 'Adres', 'default' => 'Valkweg 111, 1118 ED Schiphol' ),
		'gpg_btw'     => array( 'label' => 'BTW-id', 'default' => 'NL854426036B01' ),
		'gpg_kvk'     => array( 'label' => 'KvK', 'default' => '61641987' ),
	);

	foreach ( $fields as $id => $field ) {
		$wp_customize->add_setting( $id, array(
			'default'           => $field['default'],
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( $id, array(
			'label'   => $field['label'],
			'section' => 'gpg_contact',
			'type'    => 'text',
		) );
	}
}
add_action( 'customize_register', 'gpg_customize_register' );

/**
 * Helper: Get customizer value
 */
function gpg_get( $key, $default = '' ) {
	return get_theme_mod( $key, $default );
}
