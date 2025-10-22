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
    { fg: 'neutral500', bg: 'light', name: 'Neutral 500 on Light background' },
    { fg: 'neutral600', bg: 'light', name: 'Neutral 600 on Light background' },
    { fg: 'neutral700', bg: 'light', name: 'Neutral 700 on Light background' }
];

console.log('LSX Demo Theme - Contrast Ratio Report');
console.log('=====================================\n');

combinations.forEach(combo => {
    const ratio = getContrastRatio(colors[combo.fg], colors[combo.bg]);
    const status = ratio >= 4.5 ? 'PASS ✅' : ratio >= 3 ? 'LARGE TEXT ONLY ⚠️' : 'FAIL ❌';

    console.log(`${combo.name}:`);
    console.log(`  Colors: ${colors[combo.fg]} on ${colors[combo.bg]}`);
    console.log(`  Ratio: ${ratio.toFixed(2)}:1`);
    console.log(`  Status: ${status}\n`);
});

console.log('WCAG Standards:');
console.log('- AA Normal Text: 4.5:1 minimum');
console.log('- AA Large Text: 3:1 minimum');
console.log('- AAA Normal Text: 7:1 minimum');
