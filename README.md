# 🧱 LSX Demo Theme

A modern WordPress block theme built with Full Site Editing (FSE) capabilities, enhanced with AI development tools and comprehensive testing. This theme serves as both a learning project and production-ready WordPress block theme template.

[![WordPress](https://img.shields.io/badge/WordPress-6.0+-blue.svg)](https://wordpress.org/)
[![Block Theme](https://img.shields.io/badge/Block%20Theme-FSE-green.svg)](https://developer.wordpress.org/themes/block-themes/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Testing](https://img.shields.io/badge/Testing-Playwright-red.svg)](https://playwright.dev/)

<!--
README.md Inline Documentation
--------------------------------
This README provides a comprehensive overview of the LSX Demo Theme, including setup, architecture, contributor recognition, funding, and key documentation references. All badges and links are verified for accuracy. See .all-contributorsrc for contributor config and .github/FUNDING.yml for funding details.
-->

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/lightspeedwp/lsx-demo-theme.git
cd lsx-demo-theme

# Install dependencies
npm install
composer install  # Optional, for PHP linting

# Start development
npm start

# Run tests
npm test
```

**[📖 Full Development Setup Guide →](./DEVELOPMENT.md)**

<!--
Reference: DEVELOPMENT.md contains step-by-step setup, workflow, and troubleshooting for local development. Always review this file for the latest instructions.
-->

## 🎯 Project Overview

### Built for Modern WordPress Development

**Full Site Editing (FSE)** with comprehensive `theme.json` configuration
**Block patterns and template parts** for rapid development
**AI-enhanced development** with GitHub Copilot integration
**Comprehensive testing** with Playwright and accessibility checks
**WordPress coding standards** enforcement via automated linting
**Performance optimized** for Core Web Vitals
**Fish Species Demo Content** with comprehensive CPT implementation
**SEO & Accessibility Optimized** - WCAG 2.2 AA compliant with comprehensive SEO

### 🎣 Brandon's Fishing Adventures Demo

This theme showcases a complete fishing adventure website featuring:

-   **Fish Species Guide**: Custom post type with detailed species profiles
-   **Conservation Focus**: Protected species information and sustainable fishing practices
-   **Blog Integration**: Fishing stories and educational content
-   **Rich Structured Data**: Schema.org implementation for enhanced search results
-   **Internal Linking**: Automatic cross-linking between species and related content

### ✨ Technical Highlights

-   **🔍 SEO Excellence**: Comprehensive meta tags, XML sitemaps, structured data
-   **♿ Accessibility**: WCAG 2.2 AA compliant with zero axe-core violations
-   **⚡ Performance**: Core Web Vitals optimized with lazy loading and resource hints
-   **🧪 Testing**: Automated accessibility and performance testing with Playwright
-   **📱 Responsive**: Mobile-first design with progressive enhancement

### Demo Content Features

This theme includes a fully implemented Fish Custom Post Type with demo content showcasing Brandon's fishing adventures in KwaZulu-Natal:

-   **🐟 Fish Species CPT** with 10 comprehensive fish profiles
-   **📝 Blog Posts** covering fishing tips, conservation, and adventures
-   **🗂️ Taxonomies** for species categories and fishing locations
-   **📞 Contact Page** with fishing-specific FAQ section
-   **🖼️ Placeholder Assets** ready for actual fish photography

**Demo Content Import:**

-   Automatically imports on theme activation
-   Includes taxonomies, meta fields, and proper i18n
-   Manual import available for testing: `/wp-admin/?import_demo=1`

### Based on WordPress Twenty Twenty-Five

This theme extends the WordPress [Twenty Twenty-Five](https://make.wordpress.org/core/2024/08/15/introducing-twenty-twenty-five/) theme with:

**LSX Design System** integration with contemporary styling
**Custom color palette** and typography (Lexend & Manrope fonts)
**Accessibility-first** approach (WCAG 2.1 AA compliance)
**Performance optimization** and modern build tools

## 🛠️ Technology Stack

### Fonts & Typography System

Current variable fonts:
- **Lexend** (Primary UI / body) – Variable 400–800
- **Manrope** (Secondary / UI details) – Variable 400–700

Font families are registered via `theme.json` presets (see `settings.typography.fontFamilies`).

#### Font Size Scale (New)
We migrated from legacy named sizes (small, medium, large, x-large, xx-large, etc.) to a numeric semantic scale for clarity and future fluid design. Editor presets now appear with human‑friendly names mapped to numeric slugs:

| Name      | Slug | Size (rem) | Typical Usage |
|-----------|------|------------|---------------|
| Tiny      | 100  | 0.75rem    | Micro labels, fine print |
| Base      | 200  | 1rem       | Body paragraphs, default text |
| Small     | 300  | 1.25rem    | Lead paragraphs, meta emphasis |
| Medium    | 400  | 1.5rem     | Section subheadings, promo text |
| Large     | 500  | 2rem       | H3/H4 replacements, feature callouts |
| X-Large   | 600  | 2.5rem     | H2 scale, strong hero subheads |
| Huge      | 700  | 3rem       | Primary hero headings |
| Gigantic  | 800  | 4rem       | Large splash / marketing hero |
| Colossal  | 900  | 5rem       | Limited-use hero / showcase titles |

### Color System

Colors were consolidated into a semantic + tonal ladder strategy. The palette intentionally disables WordPress defaults (`defaultPalette: false`). Available tokens:

Semantic base:
- `base` (Primary text / dark surfaces)
- `neutral` (Secondary text / subtle UI)
- `light` (Base background)
- `contrast` (High contrast background / text inverse)
- `contrast-transparent` (Overlay / tinted backgrounds)

Brand & functional:
- `brand` (Primary brand accent)
- `cta` (High‑attention action elements)
- `primary` / `primary-light` / `primary-dark` (Supporting brand hue range)

Tonal Neutrals (grayscale ladder): `neutral-100` → `neutral-900` (100 = lightest, 900 = darkest) for controlled elevation, borders, and subtle backgrounds.

Tonal Accent (brand hue ladder): `accent-100` → `accent-900` (centered at accent-500 = brand core) used for hover states, tinted backgrounds, gradients, and contextual emphasis. Prefer moving up/down the ladder for interaction states rather than opacity mixing.

Usage Guidelines:
- Base text should use `base` or appropriate neutral step for contrast against backgrounds.
- Large background fills: choose `light`, `contrast`, or a light accent step (100–300) with sufficient WCAG contrast for foreground text.
- Buttons: `cta` background + `base` text (hover blends use color-mix for subtle transitions).
- Borders/dividers: neutral ladder (400–600) avoiding pure black for softer UI.
- Avoid raw hex colors in patterns — always reference `var(--wp--preset--color--<slug>)` for consistency and future theming.

### Spacing Tokens
Custom spacing presets (`spacingSizes`) provide a small set of named clamps for vertical rhythm:
- Tiny (slug 20) – 10px fixed
- X-Small (30) – 20px fixed
- Small (40) – 30px fixed
- Regular (50) – clamp(30px, 5vw, 50px)
- Large (60) – clamp(30px, 7vw, 70px)
- X-Large (70) – clamp(50px, 7vw, 90px)
- XX-Large (80) – clamp(70px, 10vw, 140px)

These are used through `var(--wp--preset--spacing--<slug>)`. A future `spacingScale` may be introduced; keep slugs unique if added.

### Editor Mapping Quick Reference
In the block editor preset pickers:
- Font size dropdown shows new names (Tiny→Colossal). Choose numeric slugs for any new design work.
- Color picker lists semantic & tonal tokens; select closest semantic before tonal when intent is content meaning rather than aesthetics.
- Spacing controls (padding/margin) allow manual values; prefer presets for repeatable patterns.

### Migration Notes
- Patterns being refactored: legacy font size attributes/classes replaced with numeric slugs (e.g., `fontSize":"x-large"` → `fontSize":"700"`).
- Do not introduce new patterns using legacy sizes.
### Core Technologies

**WordPress 6.0+** with Full Site Editing (FSE)
**Node.js 18+** and npm for build tooling
**@wordpress/scripts** for development workflow
**Sass/SCSS** for stylesheets with PostCSS processing
**Playwright** for end-to-end and accessibility testing

### Development Tools

**[VS Code](https://code.visualstudio.com/)** with WordPress-optimized configuration
**[GitHub Copilot](https://github.com/features/copilot)** with AI-enhanced development
**[WordPress Studio](https://developer.wordpress.com/studio/)** or [LocalWP](https://localwp.com/) for local development
**[Figma](https://figma.com)** with [LSX Design System](https://lsx.rocks/design-system)

### AI Development Features

**150+ Specialized Assets** for WordPress development
**GitHub Copilot Integration** with WordPress-specific context
**Automated Code Review** with WordPress standards enforcement
**AI Agents** for accessibility, performance, and security auditing

## 🏗️ Theme Architecture

```text
├── 📁 .github/              # AI development assets & workflows
│   ├── agents/             # Specialized AI agents (accessibility, performance, etc.)
│   ├── chatmodes/          # Extended AI workflows (pattern wizard, test coach)
│   ├── instructions/       # Auto-applied coding standards & best practices
│   ├── prompts/            # Reusable development task templates
│   ├── workflows/          # CI/CD automation
│   └── FUNDING.yml         # Funding configuration (see below)
├── 📁 .vscode/              # VS Code configuration with AI enhancements
│   ├── agent.json          # WordPress block theme AI assistant
│   ├── configuration.md    # Development guidelines for Copilot
│   ├── extensions.json     # WordPress development extensions
│   └── settings.json       # WordPress-optimized editor settings
├── 📁 patterns/            # Block patterns for content creation
├── 📁 parts/               # Template parts (header, footer, etc.)
├── 📁 templates/           # Block templates for FSE
├── 📁 styles/              # Theme style variations
├── 📁 e2e/                 # Playwright end-to-end tests
├── 📁 src/                 # Source files (SCSS, JS)
├── .all-contributorsrc     # Contributor configuration (see below)
├── SECURITY.md             # Security policy and reporting
├── CONTRIBUTING.md         # Contribution guidelines
├── CODE_OF_CONDUCT.md      # Community standards
├── CHANGELOG.md            # Release history
├── LICENSE                 # Project license
├── SUPPORT.md              # Support policy
```

<!--
Reference: Key documentation files are listed above. See each file for details on security, contributing, code of conduct, changelog, license, and support.
-->

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a complete release history and notable changes.

<!--
CHANGELOG.md documents all notable changes using Keep a Changelog format and semantic versioning. Review this file for release notes and upgrade guidance.
-->

## 🤝 Contributing & Support

<!--
This section covers contributor recognition, support channels, and links to key documentation. See .all-contributorsrc for contributor config and badges.
-->

### Contributors

This project recognizes contributors from the LightSpeed organization and key external contributors. See [.all-contributorsrc](./.all-contributorsrc) for configuration.

<!--
Contributor badges are automatically updated in README.md by the all-contributors bot. To add yourself, run 'npx all-contributors add <username> <contributions>'.
-->

#### Current Contributors

[![Contributors](https://img.shields.io/badge/Contributors-LightSpeedWP%20Org-blue)](https://github.com/lightspeedwp/lsx-demo-theme/graphs/contributors)

-   **LightSpeedWP** ([profile](https://github.com/lightspeedwp))
-   **Ashley Shaw (LightSpeed)** ([profile](https://lightspeedwp.agency))

### Funding

Support professional WordPress block theme development and open source contributions by LightSpeed.

-   [Sponsor via GitHub](https://github.com/sponsors/lightspeedwp)
-   [LightSpeed Professional Services](https://lightspeedwp.agency/services)
-   [Contact for custom sponsorship](https://lightspeedwp.agency/contact)

See [.github/FUNDING.yml](./.github/FUNDING.yml) for full funding configuration.

### For Contributors

1. **Fork the repository** and create a feature branch
2. **Follow WordPress coding standards** (automated linting enforced)
3. **Write tests** for new functionality (Playwright for E2E, unit tests for PHP)
4. **Update documentation** for any new features or changes
5. **Submit a pull request** with clear description and issue references

### Getting Help

-   **📖 Documentation**: Check [DEVELOPMENT.md](./DEVELOPMENT.md) for technical setup
-   **🤖 AI Assistance**: Use GitHub Copilot with enhanced WordPress context
-   **📋 Issues**: Create GitHub issues for bugs or feature requests
-   **💬 Community**: WordPress.org forums and Slack communities
-   **🎓 Learning**: Review [/docs](./docs/) for curriculum and resources

### Issue Templates

Good luck and have fun!
Use the provided issue templates in `.github/ISSUE_TEMPLATE/`:

-   **🐛 Bug Report** - Report functionality issues
-   **✨ Feature Request** - Suggest new features
-   **📖 Documentation** - Request or improve documentation
-   **⚡ Performance** - Report performance issues
-   **♿ Accessibility** - Report accessibility concerns

### Key Documentation & Policies

-   [Security Policy](./SECURITY.md)
-   [Contributing Guide](./CONTRIBUTING.md)
-   [Code of Conduct](./CODE_OF_CONDUCT.md)
-   [Changelog](./CHANGELOG.md)
-   [License](./LICENSE)
-   [Support Policy](./SUPPORT.md)

<!--
Each documentation file above provides detailed guidance on its topic. Review these for security, contribution, community standards, release history, licensing, and support.
-->

## 📄 License & Credits

-   **License**: GPL-3.0-or-later (see [LICENSE](./LICENSE))
-   **Base Theme**: Twenty Twenty-Five by WordPress.org
-   **Design System**: LSX Design System by LightSpeed
-   **Typography**: [Lexend](https://fonts.google.com/specimen/Lexend) and [Manrope](https://fonts.google.com/specimen/Manrope) from Google Fonts
-   **Testing**: Powered by [Playwright](https://playwright.dev/)

**Built with ❤️ for the WordPress community**

<!--
License is GPL-3.0-or-later, inherited from WordPress. See LICENSE for full terms. Credits are listed for base theme, design system, typography, and testing tools.
-->
