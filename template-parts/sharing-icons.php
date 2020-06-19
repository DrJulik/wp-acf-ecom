<?php
/**
 * Display social sharing icons.
 *
 * @package acf-test
 */

?>

<div class="social-share">
	<h5 class="social-share-title"><?php esc_html_e( 'Share This', 'acf-test' ); ?></h5>
	<ul class="social-icons menu menu-horizontal">
		<li class="social-icon">
			<a href="<?php echo esc_url( _get_twitter_share_url() ); ?>" onclick="window.open(this.href, 'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, top=150, left=0, width=600, height=300' ); return false;">
				<?php
				_display_svg(
					array(
						'icon'  => 'twitter-square',
						'title' => __( 'Twitter', 'acf-test' ),
						'desc'  => esc_html__( 'Share on Twitter', 'acf-test' ),
					)
				);
				?>
				<span class="screen-reader-text"><?php esc_html_e( 'Share on Twitter', 'acf-test' ); ?></span>
			</a>
		</li>
		<li class="social-icon">
			<a href="<?php echo esc_url( _get_facebook_share_url() ); ?>" onclick="window.open(this.href, 'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, top=150, left=0, width=600, height=300' ); return false;">
				<?php
				_display_svg(
					array(
						'icon'  => 'facebook-square',
						'title' => __( 'Facebook', 'acf-test' ),
						'desc'  => esc_html__( 'Share on Facebook', 'acf-test' ),
					)
				);
				?>
				<span class="screen-reader-text"><?php esc_html_e( 'Share on Facebook', 'acf-test' ); ?></span>
			</a>
		</li>
		<li class="social-icon">
			<a href="<?php echo esc_url( _get_linkedin_share_url() ); ?>" onclick="window.open(this.href, 'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, top=150, left=0, width=475, height=505' ); return false;">
				<?php
				_display_svg(
					array(
						'icon'  => 'linkedin-square',
						'title' => __( 'LinkedIn', 'acf-test' ),
						'desc'  => esc_html__( 'Share on LinkedIn', 'acf-test' ),
					)
				);
				?>
				<span class="screen-reader-text"><?php esc_html_e( 'Share on LinkedIn', 'acf-test' ); ?></span>
			</a>
		</li>
	</ul>
</div><!-- .social-share -->
