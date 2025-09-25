# 🧱 LSX Demo Theme

A modern WordPress block theme built with Full Site Editing (FSE) capabilities, enhanced with AI development tools and comprehensive testing. This theme serves as both a learning project and production-ready WordPress block theme template.

[![WordPress](https://img.shields.io/badge/WordPress-6.0+-blue.svg)](https://wordpress.org/)
[![Block Theme](https://img.shields.io/badge/Block%20Theme-FSE-green.svg)](https://developer.wordpress.org/themes/block-themes/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Testing](https://img.shields.io/badge/Testing-Playwright-red.svg)](https://playwright.dev/)

---

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

---

## 🎯 Project Overview

### Built for Modern WordPress Development

-   **Full Site Editing (FSE)** with comprehensive `theme.json` configuration
-   **Block patterns and template parts** for rapid development
-   **AI-enhanced development** with GitHub Copilot integration
-   **Comprehensive testing** with Playwright and accessibility checks
-   **WordPress coding standards** enforcement via automated linting
-   **Performance optimized** for Core Web Vitals

### Based on WordPress Twenty Twenty-Five

This theme extends the WordPress [Twenty Twenty-Five](https://make.wordpress.org/core/2024/08/15/introducing-twenty-twenty-five/) theme with:

-   **LSX Design System** integration with contemporary styling
-   **Custom color palette** and typography (Lexend & Manrope fonts)
-   **Accessibility-first** approach (WCAG 2.1 AA compliance)
-   **Performance optimization** and modern build tools

---

## 🛠️ Technology Stack

### Core Technologies

-   **WordPress 6.0+** with Full Site Editing (FSE)
-   **Node.js 18+** and npm for build tooling
-   **@wordpress/scripts** for development workflow
-   **Sass/SCSS** for stylesheets with PostCSS processing
-   **Playwright** for end-to-end and accessibility testing

### Development Tools

-   **[VS Code](https://code.visualstudio.com/)** with WordPress-optimized configuration
-   **[GitHub Copilot](https://github.com/features/copilot)** with AI-enhanced development
-   **[WordPress Studio](https://developer.wordpress.com/studio/)** or [LocalWP](https://localwp.com/) for local development
-   **[Figma](https://figma.com)** with [LSX Design System](https://lsx.rocks/design-system)

### AI Development Features

-   **150+ Specialized Assets** for WordPress development
-   **GitHub Copilot Integration** with WordPress-specific context
-   **Automated Code Review** with WordPress standards enforcement
-   **AI Agents** for accessibility, performance, and security auditing

---

## 🏗️ Theme Architecture

```
├── 📁 .github/              # AI development assets & workflows
│   ├── agents/             # Specialized AI agents (accessibility, performance, etc.)
│   ├── chatmodes/          # Extended AI workflows (pattern wizard, test coach)
│   ├── instructions/       # Auto-applied coding standards & best practices
│   ├── prompts/            # Reusable development task templates
│   └── workflows/          # CI/CD automation
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
├── 📄 theme.json           # FSE configuration & design tokens
└── 📄 functions.php        # Theme setup & enhancements
```

## 🚀 Getting Started

### For Developers

1. **Setup Development Environment**

    ```bash
    git clone https://github.com/lightspeedwp/lsx-demo-theme.git
    cd lsx-demo-theme
    npm install && npx playwright install
    ```

2. **Configure VS Code** (Recommended)

    - Install recommended extensions when prompted
    - Review `.vscode/README.md` for enhanced AI features
    - Use GitHub Copilot with WordPress-specific context

3. **Start Development**
    ```bash
    npm start          # Development with hot reload
    npm test           # Run all tests
    npm run lint:js    # Check code quality
    ```

### For Content Creators

1. **Download the theme** from GitHub releases
2. **Install in WordPress** via Appearance > Themes > Add New > Upload Theme
3. **Activate the theme** and explore Full Site Editing features
4. **Use block patterns** from the inserter for rapid content creation

**[📖 Complete Development Guide →](./DEVELOPMENT.md)**

---

## 🧪 Testing & Quality Assurance

### Automated Testing

-   **✅ Playwright E2E Tests** - Full user journey testing
-   **♿ Accessibility Testing** - WCAG 2.1 AA compliance with axe-core
-   **🎨 Visual Regression** - Cross-browser screenshot comparison
-   **📱 Responsive Testing** - Mobile, tablet, and desktop viewports

### Code Quality

-   **WordPress Coding Standards** - PHPCS, ESLint, Stylelint enforcement
-   **Security Scanning** - Automated vulnerability detection
-   **Performance Monitoring** - Core Web Vitals tracking
-   **AI Code Review** - GitHub Copilot and CodeRabbit integration

```bash
# Run all quality checks
npm test              # Playwright tests
npm run lint:js       # JavaScript linting
npm run lint:css      # CSS linting
npm run lint:php      # PHP coding standards
npm run format        # Auto-format code
```

---

## 📚 Documentation & Resources

### Project Documentation

-   **[Development Guide](./DEVELOPMENT.md)** - Complete setup and workflow
-   **[VS Code Configuration](./.vscode/README.md)** - Enhanced development environment
-   **[AI Development Assets](./.github/)** - Copilot agents, instructions, and prompts
-   **[Study Curriculum](./docs/)** - Learning resources and guides

### WordPress Resources

-   **[Block Theme Handbook](https://developer.wordpress.org/themes/block-themes/)** - Official WordPress documentation
-   **[FSE Documentation](https://developer.wordpress.org/block-editor/how-to-guides/themes/full-site-editing/)** - Full Site Editing guide
-   **[Theme.json Reference](https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/)** - Configuration reference
-   **[LSX Design System](https://lsx.rocks/design-system)** - Design guidelines and assets

---

## 🎨 Theme Features & Customizations

### Design System Integration

-   **Typography**: Lexend (body text) and Manrope (headings) variable fonts
-   **Color Palette**: LSX Design System with contemporary and post-modern aesthetics
-   **Spacing**: Fluid design tokens with consistent scale
-   **Accessibility**: WCAG 2.1 AA compliant throughout

### Enhanced from Twenty Twenty-Five

**✅ Added:**

-   Custom LSX Design System integration
-   Dark mode style variation
-   Enhanced accessibility features
-   Performance optimizations
-   AI development workflow integration
-   Comprehensive testing suite

**🗑️ Removed:**

-   Default Twenty Twenty-Five style variations (kept '01-evening' only)
-   Legacy font configurations
-   Unused section styles

### Font Configuration

| Size | Value    | Usage                |
| ---- | -------- | -------------------- |
| S    | 0.875rem | Small text, captions |
| M    | 1rem     | Body text            |
| L    | 1.25rem  | Subheadings          |
| X-L  | 1.5rem   | Headings             |
| XX-L | 2rem     | Large headings       |

---

## 🤝 Contributing & Support

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

---

## 📄 License & Credits

-   **License**: GPL-2.0-or-later (inherited from WordPress)
-   **Base Theme**: Twenty Twenty-Five by WordPress.org
-   **Design System**: LSX Design System by LightSpeed
-   **Typography**: [Lexend](https://fonts.google.com/specimen/Lexend) and [Manrope](https://fonts.google.com/specimen/Manrope) from Google Fonts
-   **Testing**: Powered by [Playwright](https://playwright.dev/)

**Built with ❤️ for the WordPress community**
