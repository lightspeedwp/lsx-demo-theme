<?php
/**
 * Title: Call to action with book links
 * Slug: lsx-demo-theme/cta-book-links
 * Categories: call-to-action
 * Description: A call to action section with links to get the book in different websites.
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Five
 * @since lsx-demo-theme 1.0
 */

?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|60","bottom":"var:preset|spacing|60"},"blockGap":"var:preset|spacing|50","margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained","contentSize":"800px"}} -->
<div class="wp-block-group alignfull" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60)">
	<!-- wp:heading {"textAlign":"center","align":"wide","fontSize":"700"} -->
	<h2 class="wp-block-heading alignwide has-text-align-center has-700-font-size"><?php esc_html_e( 'Buy your copy of The Stories Book', 'lsx-demo-theme' ); ?></h2>
	<!-- /wp:heading -->

	<!-- wp:buttons {"align":"wide","fontSize":"400","layout":{"type":"flex","justifyContent":"center","flexWrap":"wrap"}} -->
	<div class="wp-block-buttons alignwide has-custom-font-size has-400-font-size">
		<!-- wp:button -->
		<div class="wp-block-button"><a class="wp-block-button__link wp-element-button"><?php echo esc_html_x( 'Amazon', 'Example brand name.', 'lsx-demo-theme' ); ?></a></div>
		<!-- /wp:button -->

		<!-- wp:button -->
		<div class="wp-block-button"><a class="wp-block-button__link wp-element-button"><?php echo esc_html_x( 'Audible', 'Example brand name.', 'lsx-demo-theme' ); ?></a></div>
		<!-- /wp:button -->

		<!-- wp:button -->
		<div class="wp-block-button"><a class="wp-block-button__link wp-element-button"><?php echo esc_html_x( 'Barnes &amp; Noble', 'Example brand name.', 'lsx-demo-theme' ); ?></a></div>
		<!-- /wp:button -->

		<!-- wp:button -->
		<div class="wp-block-button"><a class="wp-block-button__link wp-element-button"><?php echo esc_html_x( 'Apple Books', 'Example brand name.', 'lsx-demo-theme' ); ?></a></div>
		<!-- /wp:button -->

		<!-- wp:button -->
		<div class="wp-block-button"><a class="wp-block-button__link wp-element-button"><?php echo esc_html_x( 'Bookshop.org', 'Example brand name.', 'lsx-demo-theme' ); ?></a></div>
		<!-- /wp:button -->

		<!-- wp:button -->
		<div class="wp-block-button"><a class="wp-block-button__link wp-element-button"><?php echo esc_html_x( 'Spotify', 'Example brand name.', 'lsx-demo-theme' ); ?></a></div>
		<!-- /wp:button -->

		<!-- wp:button -->
		<div class="wp-block-button"><a class="wp-block-button__link wp-element-button"><?php echo esc_html_x( 'BAM!', 'Example brand name.', 'lsx-demo-theme' ); ?></a></div>
		<!-- /wp:button -->

		<!-- wp:button -->
		<div class="wp-block-button"><a class="wp-block-button__link wp-element-button"><?php echo esc_html_x( 'Simon &amp; Schuster', 'Example brand name.', 'lsx-demo-theme' ); ?></a></div>
		<!-- /wp:button -->
	</div>
	<!-- /wp:buttons -->

	<!-- wp:paragraph {"align":"center","fontSize":"400"} -->
	<p class="has-text-align-center has-400-font-size"><?php echo wp_kses_post( _x( 'Outside Europe? View <a href="#" rel="nofollow">international editions</a>.', 'Pattern placeholder text with link.', 'lsx-demo-theme' ) ); ?></p>
	<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
