---
applyTo: '**/*.{js,jsx,ts,tsx}'
description: 'WordPress JavaScript inline documentation standards and JSDoc requirements'
---

# JavaScript Inline Documentation Instructions

Follow WordPress JavaScript inline documentation standards for all JavaScript/TypeScript code in this theme.

## JSDoc Standards

### Function Documentation

```javascript
/**
 * Brief description of what the function does.
 *
 * Longer description if necessary. Can span multiple lines
 * and should explain the function's purpose in detail.
 *
 * @since 1.0.0
 *
 * @param {string} param1 - Description of the first parameter.
 * @param {number} [param2=0] - Optional parameter with default value.
 * @param {Object} options - Configuration options.
 * @param {string} options.key1 - Description of options property.
 * @param {boolean} [options.key2=false] - Optional property.
 * @return {string|null} Description of return value. Null on failure.
 */
function lsxDemoThemeExampleFunction(param1, param2 = 0, options = {}) {
    // Implementation
}
```

### Class Documentation

```javascript
/**
 * Brief description of the class.
 *
 * Longer description of the class and its purpose.
 *
 * @since 1.0.0
 */
class LSXDemoThemeExample {
    /**
     * Constructor description.
     *
     * @since 1.0.0
     *
     * @param {string} param - Description of parameter.
     */
    constructor(param) {
        /**
         * Property description.
         *
         * @since 1.0.0
         * @type {string}
         */
        this.property = param;
    }

    /**
     * Method description.
     *
     * @since 1.0.0
     *
     * @param {Object} data - Input data object.
     * @return {Promise<Object>} Processed data.
     */
    async processData(data) {
        // Implementation
    }
}
```

### React Component Documentation

```javascript
/**
 * Block edit component for the LSX Demo Theme custom block.
 *
 * Renders the block editor interface with controls for customizing
 * the block's appearance and content.
 *
 * @since 1.0.0
 *
 * @param {Object} props - Component props.
 * @param {Object} props.attributes - Block attributes.
 * @param {Function} props.setAttributes - Function to update attributes.
 * @param {string} props.className - Block CSS class name.
 * @return {JSX.Element} The block edit interface.
 */
function BlockEdit({ attributes, setAttributes, className }) {
    // Component implementation
}
```

### WordPress Hook Documentation

```javascript
/**
 * Fires when the block editor has finished loading.
 *
 * @since 1.0.0
 *
 * @param {Object} editor - The block editor instance.
 */
wp.hooks.doAction('lsx_demo_theme.editor_loaded', editor);

/**
 * Filters the default block attributes.
 *
 * @since 1.0.0
 *
 * @param {Object} attributes - Default block attributes.
 * @param {string} blockName - Name of the block.
 * @return {Object} Filtered attributes.
 */
const filteredAttributes = wp.hooks.applyFilters(
    'lsx_demo_theme.block_attributes',
    defaultAttributes,
    blockName
);
```

## Inline Comments

### Complex Logic

```javascript
// Check if the current user has permission to edit
if (!wp.data.select('core').canUser('update', 'settings')) {
    return false;
}

/*
 * Multi-line comment for complex algorithms or business logic.
 * Explain the reasoning behind the approach and any important
 * considerations for future developers.
 */
const complexCalculation = value * multiplier + offset;
```

### TODO Comments

```javascript
// TODO: Implement caching for this expensive operation in version 1.1.0
// FIXME: This function doesn't handle edge case XYZ properly
// NOTE: This workaround is needed for WordPress versions < 6.0
```

## TypeScript Specific

### Interface Documentation

```typescript
/**
 * Configuration options for the LSX Demo Theme block.
 *
 * @since 1.0.0
 */
interface LSXDemoThemeBlockConfig {
    /** The block title displayed in the inserter. */
    title: string;
    /** Optional block description. */
    description?: string;
    /** Block category for organization. */
    category: 'text' | 'media' | 'design';
    /** Block keywords for search. */
    keywords: string[];
}
```

### Type Documentation

```typescript
/**
 * Represents a theme color configuration.
 *
 * @since 1.0.0
 */
type ThemeColor = {
    /** Color name as displayed in the editor. */
    name: string;
    /** Hex color value. */
    color: string;
    /** CSS custom property name. */
    slug: string;
};
```

## WordPress Block Development

### Block Registration

```javascript
/**
 * Registers the LSX Demo Theme custom block.
 *
 * Uses the block.json file for configuration and provides
 * edit and save functions for the block editor.
 *
 * @since 1.0.0
 */
wp.blocks.registerBlockType('lsx-demo-theme/custom-block', {
    edit: BlockEdit,
    save: BlockSave,
});
```

### WordPress Data Stores

```javascript
/**
 * Retrieves the current theme settings from the WordPress data store.
 *
 * @since 1.0.0
 *
 * @return {Object|null} Theme settings object or null if not loaded.
 */
function getThemeSettings() {
    return wp.data.select('core').getEntityRecord('root', 'site');
}
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
-   `@example` for usage examples

## Quality Standards

-   Use proper grammar and spelling
-   Be concise but complete
-   Explain WHY, not just WHAT
-   Update documentation when code changes
-   Use active voice when possible
-   Follow WordPress and modern JavaScript conventions

## References

-   WordPress JavaScript Documentation Standards: https://github.com/WordPress/wpcs-docs/blob/master/inline-documentation-standards/javascript.md
-   WordPress JavaScript Coding Standards: https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/
-   JSDoc Documentation: https://jsdoc.app/
