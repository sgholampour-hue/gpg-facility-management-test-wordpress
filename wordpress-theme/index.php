<?php
/**
 * Main Template File
 *
 * Falls back to front-page.php for the homepage.
 * This file handles any other pages/posts.
 *
 * @package GPG_Facility
 */

get_header();
?>

<main id="main" role="main" style="margin-top:5rem; padding:4rem 0;">
    <div class="container">

        <?php if ( have_posts() ) : ?>

            <?php while ( have_posts() ) : the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <h1><?php the_title(); ?></h1>
                    <div style="margin-top:2rem; line-height:1.8;">
                        <?php the_content(); ?>
                    </div>
                </article>
            <?php endwhile; ?>

            <?php the_posts_pagination( array(
                'prev_text' => '&laquo; Vorige',
                'next_text' => 'Volgende &raquo;',
            ) ); ?>

        <?php else : ?>
            <h1>Niets gevonden</h1>
            <p>De pagina die je zoekt bestaat niet of is verplaatst.</p>
        <?php endif; ?>

    </div>
</main>

<?php get_footer(); ?>
