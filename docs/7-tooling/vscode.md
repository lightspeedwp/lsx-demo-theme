# Visual Studio Code Extensions for WordPress Development

A guide to required and recommended VS Code extensions for new LightSpeed interns working on WordPress themes, plugins, and block development. These extensions boost developer productivity, enforce best practices, and enable integrated AI-powered workflows.

-   How to Install Extensions
-   🚩 Required Extensions (Must Install)
-   🤩 Recommended WordPress-Specific Extensions
-   Notes & Best Practices
-   FAQ

---

## How to Install Extensions

Quick install in VS Code:

-   Open the Command Palette (Ctrl+P or Cmd+P), type:
    ext install <extension-id>
    and press Enter.

Marketplace: Click each link below to view details and install.

Sign-in: Use your LightSpeed Google account or GitHub account (where applicable) for extension sign-in and sync.

---

## 🚩 Required Extensions (Must Install)

These extensions form the standard toolset for WordPress interns. They support essential tasks such as code formatting, AI assistance, debugging, linting, container/remote development, and more.

-   Node Essentials (afractal.node-essentials) — Node.js dev tools: debugging, npm scripts, env variables, test runners
-   Claude AI for Code (anthropic.claude-code) — Claude AI-powered coding and completion in VS Code
-   Markdown Preview GitHub Styles (bierner.markdown-preview-github-styles) — Markdown preview with GitHub’s CSS
-   Codeium (codeium.codeium) — Context-aware AI code completion
-   Dart Sass (codelios.dartsass) — Compile SASS/SCSS files for theme styling
-   CodeRabbit (coderabbit.coderabbit-vscode) — AI-powered code review, explanation, and refactoring assistant
-   .gitignore Generator (codezombiech.gitignore) — Quickly generate .gitignore files
-   ESLint (dbaeumer.vscode-eslint) — Real-time linting for JS/TS projects
-   EditorConfig (editorconfig.editorconfig) — Consistent coding styles via .editorconfig
-   Prettier (esbenp.prettier-vscode) — Opinionated code formatting
-   Figma VS Code (figma.figma-vscode-extension) — Browse/comment Figma in VS Code
-   GitHub Classroom (github.classroom) — Manage Classroom assignments
-   GitHub Codespaces (github.codespaces) — Cloud-based dev environments
-   GitHub Copilot (github.copilot) — AI pair-programming/code suggestions
-   GitHub Copilot Chat (github.copilot-chat) — Chat interface for Copilot
-   GitHub RemoteHub (github.remotehub) — Browse remote GitHub repos without cloning
-   GitHub Actions (github.vscode-github-actions) — See logs, trigger, debug Actions
-   GitHub PR & Issues (github.vscode-pull-request-github) — Manage PRs/Issues inside VS Code
-   Google Gemini Code Assist (google.geminicodeassist) — Gemini-powered AI assistant for code
-   TODO Tree (gruntfuggly.todo-tree) — Highlights TODO/FIXME comments
-   Rainbow CSV (mechatroner.rainbow-csv) — Colourizes CSV/TSV columns
-   Code Beautifier (michelemelluso.code-beautifier) — Format/beautify code
-   dotENV (mikestead.dotenv) — .env syntax and IntelliSense
-   SCSS IntelliSense (mrmlnc.vscode-scss) — SCSS/SASS navigation and completion
-   Azure Containers (ms-azuretools.vscode-containers) — View/manage containers
-   Docker (ms-azuretools.vscode-docker) — Build/run/debug Docker
-   Edge DevTools (ms-edgedevtools.vscode-edge-devtools) — In-editor Edge DevTools
-   Remote - Containers (ms-vscode-remote.remote-containers) — Dev/debug inside containers
-   Remote - SSH (ms-vscode-remote.remote-ssh) — Connect and dev via SSH
-   Remote - SSH Edit (ms-vscode-remote.remote-ssh-edit) — Edit single files via SSH
-   Remote Extension Pack (ms-vscode-remote.vscode-remote-extensionpack) — Bundle of remote dev extensions
-   Remote Explorer (ms-vscode.remote-explorer) — Explorer for remote containers, SSH, WSL
-   Remote Repositories (ms-vscode.remote-repositories) — Browse/edit remote repos
-   Remote Server (ms-vscode.remote-server) — Self-hosted remote server support
-   VS Code Commander (ms-vscode.vscode-commander) — Command palette + UI for common tasks
-   Copilot Vision (ms-vscode.vscode-copilot-vision) — Adds vision features to Copilot
-   GitHub Issue Notebooks (ms-vscode.vscode-github-issue-notebooks) — Interactive issue-linked notebooks
-   VS Code Speech (ms-vscode.vscode-speech) — Voice dictation and commands
-   Speech Language Pack EN-GB (ms-vscode.vscode-speech-language-pack-en-gb) — EN-UK language pack
-   Web Search for Copilot (ms-vscode.vscode-websearchforcopilot) — Search web from Copilot Chat
-   Word Count (ms-vscode.wordcount) — Displays word count
-   Stylelint (stylelint.vscode-stylelint) — Lint CSS/SCSS
-   IntelliCode (visualstudioexptteam.vscodeintellicode) — AI-based IntelliSense
-   PHP Debug (xdebug.php-debug) — Xdebug-based PHP debugger
-   PHP Pack (xdebug.php-pack) — PHP dev tools including Xdebug
-   PHP IntelliSense (zobo.php-intellisense) — PHP completion and navigation

---

## 🤩 Recommended WordPress-Specific Extensions

-   WordPress VS Code Extension Pack (WordPressToolbox.wordpress-toolbox) — All-in-one bundle: snippets, coding standards, REST, docblocks
-   WordPress Snippets (wordpresstoolbox.wordpress-snippets) — WP core snippet collection with type hints
-   WordPress Development Toolbox (wordpresstoolbox.wordpress-toolbox) — Hundreds of WP-themed snippets
-   WooCommerce Snippets & Autocomplete (ClaudioSanches.woocommerce-snippets) — WooCommerce snippets
-   ACF-Snippet (anthonydiametrix.ACF-Snippet) — Snippets for Advanced Custom Fields
-   WordPress Playground for VS Code (WordPressPlayground.wp-playground-vscode) — Zero-config WP runtime inside VS Code
-   PHP Intelephense (bmewburn.vscode-intelephense-client) — Smart PHP language server

---

## Notes & Best Practices

-   Install extensions via Command Palette:
    ext install <extension-id>
-   Keep extensions up to date (check for updates weekly).
-   Use your organization account for sign-ins when prompted (Google or GitHub).
-   Combine with Studio: pair these extensions with WordPress Studio for optimal local dev.
-   Linting/formatting: Always enable Prettier and ESLint. Use EditorConfig and Stylelint for consistency.
-   Snippets: Use snippet extensions for rapid WP/API scaffolding.
-   Debugging: Use Xdebug, PHP Pack, and Playground to step-debug code and test themes/plugins.

---

## FAQ’s: VS Code Extensions for WordPress at LightSpeed

1. Why do I need these extensions as a WordPress intern at LightSpeed?
   These extensions enable rapid development, enforce coding standards, automate tasks, and improve collaboration. They bring AI, remote workflows, code review, linting, debugging, and snippets into your editor.

2. How do I install extensions from this list?
   Open VS Code, use the Command Palette and run:
   ext install <extension-id>
   or click Marketplace links and install.

3. Which extensions are absolutely required, and which are optional?
   All extensions listed in the Required section must be installed by every intern. Recommended WordPress-specific extensions are encouraged but not mandatory.

4. Do I need a special account to use AI or cloud features?
   Yes. Use your LightSpeed Google or GitHub account for extensions that require sign-in (Copilot, Claude, Gemini, etc.).

5. What if an extension stops working or causes a conflict?
   Update the extension via Extensions sidebar. If issues persist, disable/uninstall and restart VS Code. Ask in #interns Slack if needed.

6. How do I keep my extensions up to date?
   Visit the Extensions sidebar regularly and click Update when prompted.

7. Can I safely add extensions not on these lists?
   You may add personal productivity or accessibility extensions, but do not add linters/formatters/language servers unless approved.

8. Do AI extensions send my code externally?
   Yes—AI extensions may transmit code snippets and context externally. Avoid sharing credentials or secrets.

9. How do snippet extensions help?
   Snippet packs insert boilerplate and patterns using tab/Emmet abbreviations for faster coding.

10. What is “Playground”?
    WordPress Playground creates a no-config WP environment inside VS Code for testing themes/plugins and snippets.

11. How do I debug PHP in VS Code?
    Install PHP Debug and configure Xdebug. You’ll get breakpoints, step-throughs, and variable inspection.

12. Can I use these extensions for non-WordPress projects?
    Yes, most required extensions are useful for web, JS, PHP, and AI projects.

13. Who can I ask for help?
    Post in #interns Slack, ask your mentor, or refer to extension docs on the Visual Studio Marketplace.

Need more help? The #interns Slack channel and your mentor are always available.
