<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package acf-test
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

    <?php wp_head(); ?>

</head>

<body <?php body_class( 'site-wrapper' ); ?>>
    <a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'acf-test' ); ?></a>


    <header class="navbar">
        <div class="logo">
            <h1>EC</h1>
        </div>
        <nav class="menu">
            <ul>
                <li><u>Shop</u></li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <a href="#">Cart (0)</a>
    </header>