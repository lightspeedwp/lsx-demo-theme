---
applyTo: '**/*.php'
description: 'WordPress PHP inline documentation standards and PHPDoc requirements'
---

# PHP Inline Documentation Instructions

Follow WordPress PHP inline documentation standards for all PHP code in this theme.

## PHPDoc Standards

### Function Documentation

**Required for ALL functions:**

```php
/**
 * Brief description of what the function does.
 *
 * Longer description if necessary. Can span multiple lines
 * and should explain the function's purpose in detail.
 *
 * @since 1.0.0
 *
 * @param string $param1 Description of the first parameter.
 * @param int    $param2 Optional. Description of second parameter. Default 0.
 * @param array  $args   {
 *     Optional. Array of arguments.
 *
 *     @type string $key1 Description of array key.
 *     @type bool   $key2 Description of another key. Default false.
 * }
 * @return string|false Description of return value. False on failure.
 */
function lsx_demo_theme_example_function( $param1, $param2 = 0, $args = array() ) {
    // Implementation
}
```

### Class Documentation

```php
/**
 * Brief description of the class.
 *
 * Longer description of the class and its purpose.
 *
 * @since 1.0.0
 */
class LSX_Demo_Theme_Example {

    /**
     * Class property description.
     *
     * @since 1.0.0
     * @var string
     */
    private $property;

    /**
     * Constructor description.
     *
     * @since 1.0.0
     *
     * @param string $param Description of parameter.
     */
    public function __construct( $param ) {
        // Implementation
    }
}
```

### Hook Documentation

```php
/**
 * Fires after the theme has been set up.
 *
 * @since 1.0.0
 *
 * @param string $theme_name The name of the theme.
 */
do_action( 'lsx_demo_theme_setup', $theme_name );

/**
 * Filters the theme's default color scheme.
 *
 * @since 1.0.0
 *
 * @param array $colors Default color scheme.
 */
$colors = apply_filters( 'lsx_demo_theme_default_colors', $default_colors );
```

## Inline Comments

### Complex Logic

```php
// Check if user has required capabilities before proceeding
if ( ! current_user_can( 'edit_theme_options' ) ) {
    return false;
}

/*
 * Multi-line comment for complex algorithms or business logic.
 * Explain the reasoning behind the approach and any important
 * considerations for future developers.
 */
$complex_calculation = ( $value * $multiplier ) + $offset;
```

### TODO Comments

```php
// TODO: Implement caching for this expensive operation in version 1.1.0
// FIXME: This function doesn't handle edge case XYZ properly
// NOTE: This workaround is needed for WordPress versions < 6.0
```

## Required Documentation Elements

### All Functions Must Include:

-   Brief description (one line)
-   `@since` tag with version number
-   `@param` for each parameter with type and description
-   `@return` with type and description
-   Long description if the function is complex

### Optional Elements:

-   `@throws` if function throws exceptions
-   `@see` for related functions or documentation
-   `@deprecated` with version and alternative
-   `@todo` for planned improvements

## WordPress-Specific Guidelines

### Function Prefixes

-   All theme functions: `lsx_demo_theme_`
-   Private functions: `_lsx_demo_theme_` (with leading underscore)

### Hook Names

-   Actions: `lsx_demo_theme_{action_name}`
-   Filters: `lsx_demo_theme_{filter_name}`

### File Headers

```php
<?php
/**
 * Theme functionality for [specific purpose]
 *
 * @package LSX_Demo_Theme
 * @since 1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
```

## Quality Standards

-   Use proper grammar and spelling
-   Be concise but complete
-   Explain WHY, not just WHAT
-   Update documentation when code changes
-   Use active voice when possible
-   Follow WordPress terminology and conventions

## References

-   [WordPress PHP Documentation Standards](https://github.com/WordPress/wpcs-docs/blob/master/inline-documentation-standards/php.md)
-   [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/)
