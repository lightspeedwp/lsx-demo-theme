/**
 * Contrast Ratio Calculator
 * Calculates WCAG contrast ratios for LSX Demo Theme colors
 */

// Convert hex to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Calculate relative luminance
function getLuminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio
function getContrastRatio(color1, color2) {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    // Guard against invalid hex input
    if (!rgb1) {
        throw new Error(`Invalid hex color format: "${color1}". Expected format: #RRGGBB or RRGGBB`);
    }
    if (!rgb2) {
        throw new Error(`Invalid hex color format: "${color2}". Expected format: #RRGGBB or RRGGBB`);
    }

    const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
}

// Theme colors
const colors = {
    base: '#121212',
    neutral: '#4A4A4A',
    light: '#F4F4F4',
    contrast: '#FFFFFF',
    cta: '#00FF85',
    brand: '#FF5F1F',
    brandDark: '#B8390A',
    primary: '#3895FF',
    primaryLight: '#5CA9FF',
    primaryDark: '#1F6FCC',
    neutral500: '#A8A8A8',
    neutral600: '#7A7A7A',
    neutral700: '#555555'
};

// Test combinations
const combinations = [
    { fg: 'base', bg: 'light', name: 'Base text on Light background' },
    { fg: 'neutral', bg: 'light', name: 'Neutral text on Light background' },
    { fg: 'contrast', bg: 'base', name: 'Contrast text on Base background' },
    { fg: 'base', bg: 'cta', name: 'Base text on CTA background' },
    { fg: 'cta', bg: 'base', name: 'CTA text on Base background' },
    { fg: 'brand', bg: 'light', name: 'Brand text on Light background (OLD)' },
    { fg: 'brand', bg: 'contrast', name: 'Brand text on Contrast background (OLD)' },
    { fg: 'brandDark', bg: 'light', name: 'Brand Dark text on Light background (NEW)' },
    { fg: 'brandDark', bg: 'contrast', name: 'Brand Dark text on Contrast background (NEW)' },
    { fg: 'primary', bg: 'light', name: 'Primary text on Light background' },
    { fg: 'primary', bg: 'contrast', name: 'Primary text on Contrast background' },
    { fg: 'primary', bg: 'base', name: 'Primary text on Base background' },
    { fg: 'primaryLight', bg: 'light', name: 'Primary Light text on Light background' },
    { fg: 'primaryLight', bg: 'contrast', name: 'Primary Light text on Contrast background' },
    { fg: 'primaryLight', bg: 'base', name: 'Primary Light text on Base background' },
    { fg: 'primaryDark', bg: 'light', name: 'Primary Dark text on Light background' },
    { fg: 'primaryDark', bg: 'contrast', name: 'Primary Dark text on Contrast background' },
    { fg: 'primaryDark', bg: 'base', name: 'Primary Dark text on Base background' },
    { fg: 'neutral500', bg: 'light', name: 'Neutral 500 on Light background' },
    { fg: 'neutral600', bg: 'light', name: 'Neutral 600 on Light background' },
    { fg: 'neutral700', bg: 'light', name: 'Neutral 700 on Light background' },
      // Test combinations with specific focus on problematic areas
  { fg: 'brand', bg: 'base', name: 'Brand CTA on Base Background' },
  { fg: 'contrast', bg: 'base', name: 'Contrast Text on Base Background' },
  { fg: 'contrast', bg: 'neutral', name: 'Contrast Text on Neutral Background' },
  { fg: 'brandDark', bg: 'base', name: 'Brand Dark on Base Background' },
  { fg: 'brandDark', bg: 'neutral', name: 'Brand Dark on Neutral Background' },
  { fg: 'brandDark', bg: 'primary', name: 'Brand Dark on Primary Background' },
];

console.log('LSX Demo Theme - Contrast Ratio Report');
console.log('=====================================\n');

combinations.forEach(combo => {
    try {
        // Validate color tokens exist before processing
        if (!(combo.fg in colors)) {
            throw new Error(`Color token "${combo.fg}" does not exist in theme`);
        }
        if (!(combo.bg in colors)) {
            throw new Error(`Color token "${combo.bg}" does not exist in theme`);
        }

        const ratio = getContrastRatio(colors[combo.fg], colors[combo.bg]);
        const status = ratio >= 4.5 ? 'PASS ✅' : ratio >= 3 ? 'LARGE TEXT ONLY ⚠️' : 'FAIL ❌';

        console.log(`${combo.name}:`);
        console.log(`  Colors: ${colors[combo.fg]} on ${colors[combo.bg]}`);
        console.log(`  Ratio: ${ratio.toFixed(2)}:1`);
        console.log(`  Status: ${status}\n`);
    } catch (error) {
        console.log(`${combo.name}:`);
        console.log(`  Colors: ${colors[combo.fg] ?? 'undefined'} on ${colors[combo.bg] ?? 'undefined'}`);
        console.log(`  Error: ${error.message}`);
        console.log(`  Status: ERROR ❌\n`);
    }
});

console.log('WCAG Standards:');
console.log('- AA Normal Text: 4.5:1 minimum');
console.log('- AA Large Text: 3:1 minimum');
console.log('- AAA Normal Text: 7:1 minimum');
