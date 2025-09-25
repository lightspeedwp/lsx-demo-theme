# LSX Demo Theme Development Setup

This document guides you through setting up your local development environment for the LSX Demo Theme.

## Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [npm](https://www.npmjs.com/) (v9 or later)
-   [WordPress](https://wordpress.org/) (latest version)
-   [WordPress Studio](https://wordpress.com/start/wordpress-studio) or a local WordPress development environment

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/lightspeedwp/lsx-demo-theme.git
    cd lsx-demo-theme
    ```

2. Install Node.js dependencies:

    ```bash
    npm install
    ```

3. Install PHP dependencies (optional, for linting):

    ```bash
    composer install
    ```

4. Setup Husky git hooks:

    ```bash
    npm run prepare
    ```

5. Install Playwright browsers for testing:
    ```bash
    npx playwright install
    ```

### VS Code Setup

1. **Install recommended extensions**: VS Code will prompt you to install the extensions listed in `.vscode/extensions.json`
2. **Review configuration**: Check `.vscode/README.md` for detailed setup instructions
3. **Configure Copilot**: The workspace includes enhanced AI assistance via:
    - **Agent Configuration**: `.vscode/agent.json` for WordPress-specific AI help
    - **Development Guidelines**: `.vscode/configuration.md` for best practices
    - **MCP Integration**: `.vscode/mcp.json` for enhanced Copilot features

## Development Workflow

### Building Assets

-   Start development mode with hot reloading:

    ```bash
    npm start
    ```

-   Build for production:
    ```bash
    npm run build
    ```

### Code Quality

-   Lint JavaScript:

    ```bash
    npm run lint:js
    ```

-   Lint CSS:

    ```bash
    npm run lint:css
    ```

-   Lint PHP (requires Composer):

    ```bash
    npm run lint:php
    ```

-   Format code:
    ```bash
    npm run format
    ```

### Testing

-   Run all tests (Playwright):

    ```bash
    npm test
    ```

-   Run accessibility tests only:

    ```bash
    npm run test:a11y
    ```

-   Run end-to-end tests with UI:

    ```bash
    npx playwright test --ui
    ```

-   Install Playwright browsers:
    ```bash
    npx playwright install
    ```

## WordPress Integration

### Using WordPress Studio

1. Create a new site on WordPress Studio
2. Connect your local repository to the site
3. Use Studio's sync feature to push changes to the live site

### Using Local WordPress

If you're using a local WordPress setup:

1. Make sure your WordPress installation points to this theme directory
2. Activate the theme in the WordPress admin
3. Make changes locally and see them reflected in your local WordPress instance

## WordPress Block Theme Development

### Theme Structure

```
├── functions.php          # Theme setup and enhancements
├── theme.json            # FSE configuration and design tokens
├── style.css             # Main stylesheet (compiled)
├── src/                  # Source files
│   ├── scss/            # Sass stylesheets
│   └── js/              # JavaScript source
├── assets/              # Compiled assets
├── patterns/            # Block patterns
├── parts/               # Template parts
├── templates/           # Block templates
├── styles/              # Theme style variations
├── e2e/                 # Playwright end-to-end tests
└── .vscode/             # VS Code configuration with AI enhancements
```

### AI-Enhanced Development

This theme includes comprehensive AI development assistance:

-   **AI Agents**: Specialized helpers in `.github/agents/` (accessibility, performance, security)
-   **Chat Modes**: Extended workflows in `.github/chatmodes/` (pattern wizard, testing coach)
-   **Instructions**: Auto-applied guidance in `.github/instructions/` (coding standards, accessibility)
-   **Enhanced Copilot**: WordPress-specific context via `.vscode/agent.json`

### Coding Standards

**WordPress Standards Compliance:**

-   PHP: WordPress Coding Standards (enforced via PHPCS)
-   JavaScript: WordPress ESLint configuration
-   CSS: WordPress Stylelint configuration
-   All functions prefixed with theme namespace
-   Proper sanitization, escaping, and security practices

**Block Theme Requirements:**

-   Full Site Editing (FSE) compatibility
-   theme.json v2+ schema compliance
-   Accessible block patterns (WCAG 2.1 AA)
-   Performance optimized for Core Web Vitals

## Testing Strategy

### End-to-End Testing (Playwright)

```bash
# Run all tests
npm test

# Run with UI for debugging
npx playwright test --ui

# Run accessibility tests only
npm run test:a11y

# Generate test report
npx playwright show-report
```

### Accessibility Testing

-   **Automated**: Playwright tests include axe-core accessibility checks
-   **Manual**: Test with screen readers, keyboard navigation
-   **Standards**: WCAG 2.1 AA compliance required
-   **Tools**: Browser dev tools, accessibility insights

### WordPress Testing

-   **Block Editor**: Test patterns in block inserter
-   **FSE Compatibility**: Verify Site Editor functionality
-   **Responsive**: Test across device breakpoints
-   **Performance**: Monitor Core Web Vitals

## Git Workflow

1. Create a feature branch for your work:

    ```bash
    git checkout -b feature/your-feature-name
    ```

2. Make your changes following WordPress standards:

    ```bash
    # Test your changes
    npm test
    npm run lint:js
    npm run lint:css

    # Commit with conventional format
    git add .
    git commit -m "feat: add new hero pattern with accessibility improvements"
    ```

3. Push and create a pull request:

    ```bash
    git push origin feature/your-feature-name
    ```

4. **Pull Request Requirements:**
    - Reference related issues (#123)
    - Include screenshots for UI changes
    - Ensure all tests pass
    - Follow pull request templates in `.github/PULL_REQUEST_TEMPLATES/`

## Need Help?

-   Check the [documentation](./docs/README.md)
-   Review the [GitHub Copilot instructions](./.github/custom-instructions.md)
-   Use the AI assets in `.github/` for guidance:
    -   **Agents**: `.github/agents/` for specialized WordPress expertise
    -   **Chat Modes**: `.github/chatmodes/` for sustained development workflows
    -   **Instructions**: `.github/instructions/` for coding standards and best practices
    -   **Prompts**: `.github/prompts/` for reusable development tasks
-   Review VS Code configuration in `.vscode/README.md`
