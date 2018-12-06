<?php
/**
 * The Header for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<!-- Global site tag (gtag.js) - AdWords: 788326914 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-788326914"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-788326914');
</script>
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K5G8GMD');</script>
<!-- End Google Tag Manager -->
<!-- bắt đầu Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1132351460153432', {
em: 'insert_email_variable,'
});
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1132351460153432&ev=PageView&noscript=1"
/></noscript>
<!-- DO NOT MODIFY -->
<!-- End Facebook Pixel Code -->
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width" />
	<meta name="google-site-verification" content="2fndyYMJYVvzkEXy22QJOnuIKRp5VROra_Tc5-m7slc" />
    <title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/bootstrap.css" type="text/css" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/nestedAccordion.css" type="text/css" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/main.css" type="text/css" />
    <link href="<?php echo get_template_directory_uri(); ?>/css/bootstrap.css.map" type="text/css" />
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.js" type="text/javascript"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/main.js" type="text/javascript"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.nestedAccordion.js" type="text/javascript"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
	<![endif]-->
    <script type="text/javascript">
        $(document).ready(function(){
           $('.menu-main-menu-container').addClass('navbar-collapse collapse');  
        });
</script>

    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-53602800-1', 'auto');
  ga('send', 'pageview');

</script>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5G8GMD"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<div id="page" class="hfeed site">
	<header id="masthead" class="site-header" role="banner">
		
        <div class="container">
            <div style="display: none;"><a href="#"></a></div>
            <div class="row header-top">
                <div class="language-code pull-right"><?php dynamic_sidebar('Language'); ?></div>
                <div class="search-product pull-right"><?php dynamic_sidebar('Search Product'); ?></div>
                <div class="hotline pull-right">Hotline: <?php echo of_get_option('hotline', 'no entry'); ?></div>
                
            </div>
            
            <div class="row header-bottom">
                <div class="logo pull-left">
                    <?php if(qtrans_getLanguage() == "vi"){ ?>
                            <a href="<?php echo bloginfo('home'); ?>"><img src="<?php echo of_get_option('logo', 'no entry' ); ?>" /></a>
                        <?php }elseif(qtrans_getLanguage() == "en"){ ?>
                            <a href="http://localhost/Jetweb17_Miranda/en"><img src="<?php echo of_get_option('logo', 'no entry' ); ?>" /></a>
                       <?php }elseif(qtrans_getLanguage() == "ko"){?>
                            <a href="http://localhost/Jetweb17_Miranda/ko"><img src="<?php echo of_get_option('logo', 'no entry' ); ?>" /></a>
                       <?php } ?>
                    
                </div>
                <div class="main-menu pull-right">
                    <div class="navbar navbar-inverse navbar-static-top">
                        <div class="navbar-header">
                            <button data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle" type="button">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'navbar-nav' ) ); ?>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
	</header><!-- #masthead -->

	<div id="main" class="site-main">
