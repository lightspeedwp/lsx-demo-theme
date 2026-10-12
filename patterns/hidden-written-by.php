<?php
/**
 * Title: Written by
 * Slug: lsx-demo-theme/hidden-written-by
 * Inserter: no
 *
 * @package    WordPress
 * @subpackage Twenty_Twenty_Five
 * @since      lsx-demo-theme 1.0
 */

?>
<!-- wp:group {"style":{"spacing":{"blockGap":"0.2em","margin":{"bottom":"var:preset|spacing|60"}}},"textColor":"accent-4","fontSize":"300","layout":{"type":"flex","flexWrap":"wrap"}} -->
<div class="wp-block-group has-accent-4-color has-text-color has-link-color has-300-font-size" style="margin-bottom:var(--wp--preset--spacing--60)">
	<!-- wp:paragraph -->
	<p><?php esc_html_e( 'Written by ', 'lsx-demo-theme' ); ?></p>
	<!-- /wp:paragraph -->
	<!-- wp:post-author-name {"isLink":true} /-->
	<!-- wp:paragraph -->
	<p><?php esc_html_e( 'in', 'lsx-demo-theme' ); ?></p>
	<!-- /wp:paragraph -->
	<!-- wp:post-terms {"term":"category","style":{"typography":{"fontWeight":"300"}}} /-->
</div>
<!-- /wp:group -->
