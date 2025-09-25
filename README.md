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

### Based on WordPress Twenty Twenty-Five

This theme extends the WordPress [Twenty Twenty-Five](https://make.wordpress.org/core/2024/08/15/introducing-twenty-twenty-five/) theme with:

**LSX Design System** integration with contemporary styling
**Custom color palette** and typography (Lexend & Manrope fonts)
**Accessibility-first** approach (WCAG 2.1 AA compliance)
**Performance optimization** and modern build tools

## 🛠️ Technology Stack

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
