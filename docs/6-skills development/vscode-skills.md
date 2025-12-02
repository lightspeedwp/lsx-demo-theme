# Skills Development: VS Code Usage for Interns

This guide outlines essential VS Code skills and setup patterns you'll need during the LightSpeed WordPress Developer Internship, mapped to the LSX Demo Theme Project Brief and Intern Study Curriculum Overview.

Contents

1. VS Code Workspace Setup
2. Project Structure & Adding Folders
3. GitHub Integration: Branches, Commits, PRs
4. Copilot Usage in VS Code
5. MCP Agent / Config Integration
6. Settings: Linting, Formatting, Extensions
7. Workflow Tips & Best Practices
8. Reference Links

---

## 1. VS Code Workspace Setup

Install VS Code:

-   https://code.visualstudio.com/

Recommended Extensions:

-   Prettier
-   ESLint
-   WordPress Snippet Pack
-   GitLens
-   GitHub Pull Requests & Issues
-   GitHub Copilot
-   Copilot Labs
-   Markdown All in One
-   WordPress Block Editor Snippets

Clone required repos:

-   git clone https://github.com/lightspeedwp/lsx-demo-theme.git

Open repo as workspace:

-   File → Open Folder → Select repository.
-   Use Add Folder to Workspace for multi-folder projects.

---

## 2. Project Structure & Adding Folders

Common working folders:
/lsx-demo-theme
/internship-project
/docs
/logs

VS Code workflow:

-   Use Explorer → Add Folder to Workspace to load multiple directories.
-   Save workspace as a .code-workspace for multi-root setups.

---

## 3. GitHub Integration: Branches, Commits, PRs

Create a new branch:

-   git checkout -b feature/xyz

VS Code Git workflow:

-   Stage & commit from Source Control panel.
-   Push & Sync changes.

Use the GitHub PR & Issues extension to:

-   Create PRs
-   Review PRs
-   View issues
-   Check project boards

Daily workflow:

-   Commit frequently
-   Push updates daily
-   Follow PR hygiene standards

Branching and PR discipline are part of your internship evaluation.

---

## 4. Copilot Usage in VS Code

-   Enable GitHub Copilot and Copilot Labs.
-   Copilot can generate:
    -   Code blocks
    -   Documentation
    -   Block patterns
    -   theme.json sections
    -   Regex
    -   YAML structures

Reference project instructions:

-   .github/copilot-custom-instructions.md (Copilot uses this for context-aware suggestions.)

Advanced skills:

-   Multi-file refactoring
-   Auto-generating recurring Markdown (logs, standups)

---

## 5. MCP Agent / Config Integration

By Month 5+, you'll work with MCP (Model–Copilot–Prompt) workflows:

-   Integrate Figma MCP agent with VS Code.
-   Pull Figma design tokens into theme.json.
-   Sync components/patterns.
-   Configure MCP via .mcp.config.js (or similar).

Core tasks:

-   Install MCP agent.
-   Link workspace to Figma file.
-   Use MCP commands to generate patterns & presets.
-   Document MCP setup in /docs or /internship-project.

---

## 6. Settings: Linting, Formatting, Extensions

Use .vscode/settings.json for consistent coding standards:

-   "editor.formatOnSave": true
-   "eslint.validate": ["javascript", "php"]
-   "files.trimTrailingWhitespace": true

WordPress Coding Standards:

-   https://developer.wordpress.org/coding-standards/
-   Install PHPCS extension for WPCS.
-   Use Prettier for JS/CSS formatting.
-   Keep extensions updated.

---

## 7. Workflow Tips & Best Practices

-   Use a new branch per feature.
-   Always reference issue numbers in commits & PRs.
-   Keep your workspace organized.
-   Use Split View and multi-root workspace.
-   Validate Copilot output — don't rely blindly.
-   Document settings or environment changes.
-   Maintain daily logs in /logs.
-   Keep MCP configs documented and versioned.

---

## 8. Reference Links

-   VS Code: https://code.visualstudio.com/
-   GitHub Copilot: https://docs.github.com/en/copilot/getting-started-with-github-copilot/
-   Copilot Custom Instructions: https://docs.github.com/en/copilot/customizing-copilot/adding-organization-custom-instructions-for-github-copilot
-   WordPress Coding Standards: https://developer.wordpress.org/coding-standards/
-   PHPCS Extension: https://marketplace.visualstudio.com/items?itemName=ikappas.phpcs
-   Prettier Extension: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
-   GitHub PR Extension: https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github
