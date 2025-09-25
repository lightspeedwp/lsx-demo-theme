/**
 * Stylelint Configuration for LSX Demo Theme
 * WordPress Block Theme CSS Linting and Standards Enforcement
 *
 * PURPOSE:
 * - Enforces WordPress CSS coding standards for block theme development
 * - Ensures consistent CSS structure across WordPress templates and patterns
 * - Validates CSS compatibility with WordPress core and FSE (Full Site Editing)
 * - Maintains code quality for WordPress theme submission and production use
 *
 * WORDPRESS INTEGRATION:
 * - Extends @wordpress/stylelint-config for WordPress-specific CSS rules
 * - Compatible with WordPress block editor and theme.json configurations
 * - Supports WordPress CSS custom properties and design tokens
 * - Validates CSS for WordPress accessibility and performance standards
 *
 * CUSTOM RULES EXPLANATION:
 * - 'selector-class-pattern': Disabled for WordPress block class flexibility (.wp-block-*)
 * - 'no-descending-specificity': Disabled for WordPress theme CSS cascade management
 * - 'max-line-length': 100 characters for WordPress coding standards readability
 * - URL/attribute quotes: Enforced for WordPress security and consistency best practices
 *
 * USAGE:
 * - Run 'npm run lint:css' to check CSS against WordPress standards
 * - Integrates with VS Code extensions for real-time WordPress CSS validation
 * - Used in CI/CD pipeline for WordPress theme quality assurance
 */
module.exports = {
    // WordPress Stylelint Configuration - Official WordPress CSS standards
    extends: ['@wordpress/stylelint-config'],

    // Custom Rules - WordPress block theme specific modifications
    rules: {
        // WordPress Block Classes - Allow flexible naming for .wp-block-* patterns
        'selector-class-pattern': null, // Disabled: WordPress uses varied block class patterns

        // Code Readability - WordPress coding standards line length
        'max-line-length': 100, // 100 chars: WordPress recommended line length

        // CSS Specificity - Allow WordPress theme cascade management
        'no-descending-specificity': null, // Disabled: WordPress themes need specificity control

        // Security and Consistency - WordPress security best practices
        'function-url-quotes': 'always', // Required: Prevent CSS injection vulnerabilities
        'selector-attribute-quotes': 'always', // Required: Consistent attribute handling
        'font-family-name-quotes': 'always-where-recommended', // WordPress typography standards
    },
};
