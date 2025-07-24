# LSX Demo Theme

Development repository for the LSX Demo Theme

## About

This theme is based off the WordPress [Twenty Twenty-Five](https://make.wordpress.org/core/2024/08/15/introducing-twenty-twenty-five/) theme and being used for a trial project for Lightspeed Agency.

## Maintenance

Here you'll find details and rationale behind certain changes, updates and customisations to the theme

### Images/Media

TBC

### Fonts/Typography

These fonts have been chosen to align with the theme niche which is thematically 'contemporary' and 'post-modern'

- **Primary Font:** Lexend (Variable)
  - Source: [Google Fonts](https://fonts.google.com/specimen/Lexend)
  - Usage: Body text, links, captions etc.

- **Secondary Font:** Manrope (Variable)
  - Source: [Google Fonts](https://fonts.google.com/specimen/Manrope)
  - Usage: TBC

### Removals & resets

- **Reconfigured font size presets:** 
    S (0.875rem), M(1rem), L(1.25rem), X-L(1.5rem), XX-L(2rem)
    
-  **Updated theme color palette:**

| Color | Usage | Hex |
| -------------- | ------------------------- | --------- |
| Jet Black | Primary text, backgrounds | `#121212` |
| Asphalt Gray | Neutral tone, UI borders | `#4A4A4A` |
| Concrete White | Background (light mode) | `#F4F4F4` |
| Safety Orange | Accent (CTAs, buttons) | `#FF5F1F` |
| Neon Green | Highlight / hover effects | `#00FF85` |
| Chrome Blue | Secondary accents / links | `#3895FF` |

- **Deleted:**
  - All Style Variations that came with TT5 theme (except '01-evening')
  - Default fonts that came with TT5 theme
  - Section styles that came with TT5 theme
  - 'Focus' styles from styles.css (to accommodate custom styles in theme.json)

- **Added:**
  - Custom Shadow 'LSX Shadow' for buttons
  - 'Dark Mode' style variation and color palette variation
  - Lexend & Manrope variable fonts according to LSX Design System
  - 'LSX Header' template part following LSX Design System
  - 'Focus' styles for a11y in theme.json
  - Fluid typography settings based on LSX Style Guide (Viewport: 320-1600px | Typescale: 1.2)