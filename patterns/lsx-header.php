<?php
/**
 * Title: LSX Header
 * Slug: lsx-demo-theme/lsx-header
 * Categories: header
 * Block Types: core/template-part/header
 * Description: Header based off LSX design system
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Five
 * @since lsx-demo-theme 1.0
 */

?>
<!-- wp:group {"align":"full","className":"has-background","layout":{"type":"default"}} -->
	<div class="wp-block-group alignfull has-background">
		<!-- wp:group {"backgroundColor":"bright","layout":{"type":"constrained"}} -->
		<div class="wp-block-group has-bright-background-color has-background">
			<!-- wp:group {"className":"alignwide","style":{"spacing":{"padding":{"top":"var:preset|spacing|half","bottom":"var:preset|spacing|half"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
			<div class="wp-block-group alignwide" style="padding-top:var(--wp--preset--spacing--half);padding-bottom:var(--wp--preset--spacing--half)">
				<!-- wp:site-logo /-->
				<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"right"}} -->
				<div class="wp-block-group">
					<!-- wp:navigation {"menuSlug":"primary","overlayMenu":"never","style":{"spacing":{"blockGap":"var:preset|spacing|half"},"layout":{"selfStretch":"fit","flexSize":null}}} /-->
				</div><!-- /wp:group -->
			</div><!-- /wp:group -->
		</div><!-- /wp:group -->
	</div><!-- /wp:group -->