/**
 * Prettier Configuration for LSX Demo Theme
 * WordPress Block Theme Code Formatting Standards
 *
 * PURPOSE: Automatic code formatting for WordPress JavaScript and CSS files
 * INTEGRATION: Works with @wordpress/scripts and WordPress coding standards
 * USAGE: Runs automatically on save in VS Code or via 'npm run format'
 */

module.exports = {
    // Indentation - WordPress JavaScript standards (different from PHP which uses tabs)
    tabWidth: 4, // 4 spaces for WordPress JavaScript consistency
    useTabs: false, // Spaces for JS/CSS (WordPress PHP uses tabs)

    // Line Endings - Cross-platform WordPress development
    endOfLine: 'lf', // Unix line endings for WordPress compatibility

    // Line Length - WordPress readability standards
    printWidth: 80, // 80 characters for WordPress code review standards

    // JavaScript Formatting - WordPress JavaScript coding style
    singleQuote: true, // Single quotes preferred in WordPress JavaScript
    trailingComma: 'es5', // ES5 trailing commas for WordPress browser support
    bracketSpacing: true, // Spaces in object literals { foo: bar }
    arrowParens: 'always', // Always parentheses for arrow functions
};
