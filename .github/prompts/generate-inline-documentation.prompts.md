---
description: 'Generate comprehensive inline documentation for PHP and JavaScript following WordPress standards'
mode: 'ask'
tools: ['read_file', 'replace_string_in_file']
model: 'gpt-4o'
---

# Generate Inline Documentation

Generate comprehensive inline documentation for WordPress PHP functions, classes, and JavaScript components following official WordPress documentation standards.

## What This Prompt Does

This prompt will analyze your code and create complete documentation including:

### For PHP Code:

-   **PHPDoc blocks** with proper formatting
-   **@since tags** with version numbers
-   **@param documentation** with types and descriptions
-   **@return documentation** with types
-   **Hook documentation** for actions and filters
-   **Inline comments** for complex logic

### For JavaScript Code:

-   **JSDoc blocks** with proper formatting
-   **Parameter documentation** with types
-   **Return value documentation**
-   **React component documentation**
-   **WordPress hook documentation**
-   **TypeScript interface documentation**

## Usage Instructions

### For PHP Functions:

```
Document this PHP function:

[paste your PHP function here]
```

### For JavaScript Functions:

```
Document this JavaScript function:

[paste your JavaScript function here]
```

### For React Components:

```
Document this React component:

[paste your React component here]
```

### For Entire Files:

```
Add complete documentation to this file: [file path]
```

## Documentation Standards Applied

### WordPress PHP Standards

-   All functions get complete PHPDoc blocks
-   Proper `@since` version tracking
-   Complete parameter documentation with types
-   Return value documentation
-   WordPress function prefix compliance (`lsx_demo_theme_`)
-   Follows WordPress PHP Documentation Standards

### WordPress JavaScript Standards

-   All functions get complete JSDoc blocks
-   Proper parameter type documentation
-   Return value type documentation
-   WordPress block editor component documentation
-   React prop documentation with types
-   Follows WordPress JavaScript Documentation Standards

## Examples

### Input (PHP):

```php
function lsx_demo_theme_setup() {
    add_theme_support( 'post-formats', array( 'aside', 'gallery' ) );
    add_theme_support( 'html5', array( 'comment-list', 'comment-form' ) );
}
```

### Output (Documented PHP):

```php
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Registers support for post formats and HTML5 markup for comments.
 * This function is hooked to the after_setup_theme action.
 *
 * @since 1.0.0
 */
function lsx_demo_theme_setup() {
    // Add support for post formats
    add_theme_support( 'post-formats', array( 'aside', 'gallery' ) );

    // Add support for HTML5 markup
    add_theme_support( 'html5', array( 'comment-list', 'comment-form' ) );
}
```

### Input (JavaScript):

```javascript
function initializeBlock(attributes, context) {
    return wp.element.createElement(
        'div',
        { className: context.className },
        attributes.content
    );
}
```

### Output (Documented JavaScript):

```javascript
/**
 * Initializes a WordPress block with the provided attributes and context.
 *
 * Creates a React element representing the block with proper styling
 * and content based on the block's current state.
 *
 * @since 1.0.0
 *
 * @param {Object} attributes - Block attributes containing content and settings.
 * @param {string} attributes.content - The main content to display in the block.
 * @param {Object} context - Block context containing styling and state information.
 * @param {string} context.className - CSS class name for the block wrapper.
 * @return {JSX.Element} React element representing the initialized block.
 */
function initializeBlock(attributes, context) {
    return wp.element.createElement(
        'div',
        { className: context.className },
        attributes.content
    );
}
```

## Quality Guidelines

The documentation will follow these standards:

-   **Clear descriptions** explaining what the code does and why
-   **Proper grammar** and spelling throughout
-   **Complete type information** for all parameters and returns
-   **WordPress terminology** and conventions
-   **Version tracking** with @since tags
-   **Accessibility considerations** where relevant
-   **Performance notes** for complex operations

## Getting Started

Simply paste your PHP function, JavaScript function, React component, or specify a file path, and I'll generate complete WordPress-standard documentation for you!

What code would you like me to document?
