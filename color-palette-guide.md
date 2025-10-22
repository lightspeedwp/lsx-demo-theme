# LSX Demo Theme - Color Palette Guide

This document provides detailed descriptions and usage guidelines for all colors in the theme palette.

## Core Colors

### Base (#121212)
- **Description**: Primary text color and dark backgrounds
- **Usage**: Body text, icons, dark mode backgrounds
- **Contrast**: Excellent on light backgrounds (17.03:1)
- **CSS Variable**: `var(--wp--preset--color--base)`

### Neutral (#4A4A4A)
- **Description**: Secondary text and subtle borders
- **Usage**: Supporting text, form borders, dividers
- **Contrast**: Good on light backgrounds (8.06:1)
- **CSS Variable**: `var(--wp--preset--color--neutral)`

### Light (#F4F4F4)
- **Description**: Main background color and light surfaces
- **Usage**: Page backgrounds, card backgrounds, light sections
- **Contrast**: Works with all dark text colors
- **CSS Variable**: `var(--wp--preset--color--light)`

### Contrast (#FFFFFF)
- **Description**: Pure white for maximum contrast
- **Usage**: White backgrounds, text on dark backgrounds, clean surfaces
- **Contrast**: Maximum contrast with dark colors (18.73:1 with Base)
- **CSS Variable**: `var(--wp--preset--color--contrast)`

## Brand Colors

### Brand (#FF5F1F)
- **Description**: Brand identity color for headings and large text only
- **Usage**: Large headings (H1-H3), decorative elements, focus outlines
- **Accessibility**: Use only for large text (18pt+ or 14pt+ bold)
- **CSS Variable**: `var(--wp--preset--color--brand)`

### Brand Dark (#B8390A)
- **Description**: Accessible brand color for small text and links
- **Usage**: Small text, links, comment author names, post dates
- **Contrast**: WCAG AA compliant (5.26:1 on light backgrounds)
- **CSS Variable**: `var(--wp--preset--color--brand-dark)`

## Interactive Colors

### CTA (#00FF85)
- **Description**: Use for buttons and conversion elements
- **Usage**: Primary buttons, call-to-action elements, success states
- **Contrast**: Excellent readability (13.95:1 with dark text)
- **CSS Variable**: `var(--wp--preset--color--cta)`

### Primary (#3895FF)
- **Description**: Primary action color and interactive elements
- **Usage**: Links, primary buttons, interactive states
- **CSS Variable**: `var(--wp--preset--color--primary)`

### Primary Light (#5CA9FF)
- **Description**: Light variant for hover and focus states
- **Usage**: Link hover states, active elements
- **CSS Variable**: `var(--wp--preset--color--primary-light)`

### Primary Dark (#1F6FCC)
- **Description**: Dark variant for pressed and active states
- **Usage**: Link active states, pressed buttons
- **CSS Variable**: `var(--wp--preset--color--primary-dark)`

## Neutral Scale (100-900)

### Neutral 100 (#FFFFFF)
- **Description**: Pure white for backgrounds and clean surfaces
- **Usage**: Card backgrounds, modal overlays, clean sections

### Neutral 200 (#F7F7F7)
- **Description**: Off-white for subtle background variations
- **Usage**: Alternate row backgrounds, subtle sections

### Neutral 300 (#E4E4E4)
- **Description**: Light gray for borders and dividers
- **Usage**: Form borders, subtle separators
- **Accessibility**: Not suitable for small text on white

### Neutral 400 (#CFCFCF)
- **Description**: Medium-light gray for disabled states
- **Usage**: Disabled form elements, placeholder text
- **Accessibility**: Not suitable for small text on white

### Neutral 500 (#A8A8A8)
- **Description**: Medium gray for secondary elements
- **Usage**: Supporting text, icons, secondary borders
- **Accessibility**: Use only for large text or decorative elements

### Neutral 600 (#7A7A7A)
- **Description**: Medium-dark gray for secondary text
- **Usage**: Secondary headings, supporting content
- **Accessibility**: Suitable for large text only (3.90:1)

### Neutral 700 (#555555)
- **Description**: Dark gray for readable secondary text
- **Usage**: Secondary text, captions, form labels
- **Contrast**: WCAG AA compliant (6.78:1)

### Neutral 800 (#2E2E2E)
- **Description**: Very dark gray for emphasis
- **Usage**: Strong emphasis text, dark sections

### Neutral 900 (#121212)
- **Description**: Darkest neutral, same as Base
- **Usage**: Maximum contrast text, dark backgrounds

## Accent Scale (100-900)

Based on the brand orange (#FF5F1F), providing various tints and shades:

### Accent 100 (#FFF3EC)
- **Description**: Very light orange tint for backgrounds
- **Usage**: Subtle brand background sections, highlights

### Accent 200 (#FFE3D3)
- **Description**: Light orange for soft brand touches
- **Usage**: Light brand sections, hover states

### Accent 300 (#FFD1B8)
- **Description**: Medium-light orange for gentle emphasis
- **Usage**: Brand accents, soft call-outs

### Accent 400 (#FFB894)
- **Description**: Medium orange for visible brand presence
- **Usage**: Brand elements, moderate emphasis

### Accent 500 (#FF5F1F)
- **Description**: Core brand color, same as Brand
- **Usage**: Same as Brand color guidelines

### Accent 600 (#D94E15)
- **Description**: Darker orange for better contrast
- **Usage**: Brand elements on light backgrounds

### Accent 700 (#B53F12)
- **Description**: Dark orange for strong contrast
- **Usage**: Brand text, accessible brand elements

### Accent 800 (#8F310E)
- **Description**: Very dark orange for maximum contrast
- **Usage**: Dark brand sections, strong emphasis

### Accent 900 (#6A230A)
- **Description**: Darkest orange for ultimate contrast
- **Usage**: Dark themes, maximum brand contrast

## Accessibility Guidelines

### WCAG Compliance
- **AA Normal Text**: 4.5:1 minimum contrast ratio
- **AA Large Text**: 3:1 minimum contrast ratio
- **AAA Normal Text**: 7:1 recommended contrast ratio

### Safe Color Combinations
✅ **Fully Accessible**:
- Base + Light/Contrast backgrounds
- Brand Dark + Light/Contrast backgrounds
- CTA + Base text
- Neutral 700+ + Light backgrounds

⚠️ **Large Text Only**:
- Brand + Light/Contrast backgrounds
- Neutral 600 + Light backgrounds

❌ **Not Recommended**:
- Neutral 500 and lighter + Light backgrounds for small text

### Usage Recommendations

1. **For Small Text**: Use Base, Neutral, Brand Dark, or Neutral 700+
2. **For Large Text**: All colors are acceptable with proper contrast
3. **For Buttons**: Use CTA with dark text or dark backgrounds with light text
4. **For Links**: Use Brand Dark for accessibility, Brand for large headings only
5. **For Backgrounds**: Use Light, Contrast, or dark neutrals (700+)

---

*Last updated: October 22, 2025*
*Contrast ratios validated against WCAG 2.1 AA standards*
