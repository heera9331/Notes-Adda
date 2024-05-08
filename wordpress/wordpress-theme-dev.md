## Add menu option in theme


**Child theme and starter theme**

Child theme
-----------
A Child Theme allows you to override
another theme (parent theme) without
making direct changes that are lost
during updates.

- child theme => customizing an existing theme.

Child Theme
I. Reference to parent therne in
style.css file
2. Include parent style in
functions.php file
3. Copies of any templates from
Parent Theme you want to
modify

Parent Theme
 
1. Keeps all original files unedited
2. Before loading a file, WordPress
3. looks to see if exists in Child Theme
Can be updated without affecting
code in Child Theme



Starter theme
-------------
A Starter includes helpful files
and functions for building themes
from scratch. You usually edit starter
themes directly, not using child
themes.



**Adding menus suport**

Refereces = https://developer.wordpress.org/reference/functions/body_class/

```php
// function.php

<?php
	add_theme_support('menus');
	// $location and $description
	register_nav_menu('primary', 'primary header menu navigation');
?>

// or

<?php

function theme_option_setup() {
	add_theme_support('menus');
	register_nav_menu('primary', 'primary header menu navigation');
?>

add_action('init', 'theme_option_setup');

```

Adding navigation menu

```html
<nav class='main-navigation" role="navigation">
	<?php
		$args = ['theme location' => 'main-menu'];
		wp_nav_menu( $args ) ;
	?>
</nav>
```


**Adding markup**

