# Skills Development: GitHub & Copilot

A comprehensive guide for interns at LightSpeed on mastering GitHub workflows, Copilot automation, and effective project setup for WordPress themes and plugin development.

Contents

-   Introduction
-   GitHub Core Skills
    -   Branching
    -   Pull Requests (PRs)
    -   Issue Creation & Linking
    -   Project Board & Repo Hygiene
    -   Project Setup & Templates
    -   YAML/FrontMatter Validation
    -   Mandatory Parent Issues
    -   Continuous Integration (CI) & Build
    -   Documentation & Contribution Guidelines
-   Copilot Skills
    -   Instructions, Agents & Prompts
    -   Workspace Setup
    -   Copilot Daily Practice
    -   MCP Server & Advanced Automations
    -   awesome-copilot: Agents, Prompts & Instructions
    -   LightSpeed .github Community Health & Templates
-   Quick Reference Table
-   FAQs
-   Reference Links

---

## Introduction

This guide combines essential GitHub and Copilot skills you need as a LightSpeed intern, including branching, issues, PRs, automation, and repo setup practices. Everything is mapped to how you’ll produce, review, and automate real code and documentation in WordPress block themes and plugins using the LSX Demo Theme.

---

## GitHub Core Skills

### Branching

Purpose: Each feature, fix, or experiment is done in its own branch—keeping main stable.

How:

-   Use semantic and descriptive branch names: feature/block-patterns, fix/login-error, chore/docs-update.
-   Branch off main:
    -   git checkout main && git pull
    -   git checkout -b feature/new-block
-   Commit with issue reference:
    -   git commit -m "Add block patterns (Closes #123)"
-   Push branch:
    -   git push --set-upstream origin feature/new-block

### Pull Requests (PRs)

Purpose: Submit, discuss, and safely merge changes into main after review.

How:

-   Push your branch to origin.
-   Open a PR with a clear title and use the LightSpeed PR template.
-   Describe what and why clearly.
-   Link to relevant issues (e.g., “Closes #123”).
-   Assign reviewers, apply labels (e.g., needs review, enhancement).
-   Ensure tests and CI checks pass before merging.

### Issue Creation & Linking

Pattern:

-   Create issues for features, fixes, tasks, and documentation to build visibility and traceability.
-   Reference issues in PRs or commits (Closes #45, Fixes #88).
-   Use clear, actionable titles and body content.

Parent/Child Issues:

-   Use parent issues for broad topics (e.g., "Automated Testing Pipeline").
-   Break down major work into child issues (e.g., "Set up PHPCS linting", "Add Playwright e2e tests").

### Project Board & Repo Hygiene

-   Keep the project board up-to-date with reference to logs, PRs, and issues.
-   Follow GitHub Project Setup standards.

### Project Setup & Templates

LSX Demo Theme Reference:

-   Repo: lightspeedwp/lsx-demo-theme

Essential Issue Templates:

-   Keep only essential templates: Bug Report, Feature Request, Task / Chore, Documentation Update.
-   Remove unnecessary templates.

### YAML/FrontMatter Validation

-   Ensure every .yml and .md file in .github/ (templates, prompts, instructions, PR template) has valid YAML FrontMatter.
-   Create issues for invalid or missing front matter.
-   Reference:
    -   [Jekyll Front Matter Documentation](https://jekyllrb.com/docs/front-matter/)
    -   [GitHub Pages with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/configuring-jekyll-in-your-site)

### Mandatory Parent Issues

-   Before new issue or automation work:
    -   Create a Parent Issue: Set up issue templates & config (config.yml).
    -   Create Child Issues: For each template and config item.
-   Use similar structure for custom instructions, prompts, documentation files, and CI/build work.

### Continuous Integration (CI) & Build

Key Steps:

-   Set up PHPCS linting with @wordpress/scripts.
-   Playwright tests: unit + end-to-end.
-   GitHub Actions for build/test automation.
-   BrowserStack optional for cross-browser template tests.

References:

-   [@wordpress/scripts Documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
-   [Playwright Documentation](https://playwright.dev/)
-   [BrowserStack Playwright Guide](https://www.browserstack.com/docs/automate/playwright)

### Documentation & Contribution Guidelines

-   Update contribution guidelines to include Copilot + CodeRabbit usage.
-   Issue/PR structure and label documentation.
-   Link custom instructions and prompts.
-   Update PR templates for label support.
-   Maintain necessary saved replies.
-   Document:
    -   .devcontainer setup
    -   .vscode/ settings
    -   SCSS build instructions (@wordpress/scripts)
    -   Block patterns & template parts
    -   Performance optimizations (assets, caching)

---

## Copilot Skills

### Instructions, Agents & Prompts

-   Reference: [Custom Instructions](https://github.com/lightspeedwp/.github/blob/develop/.github/custom-instructions.md)
-   Use organization-wide agents: [Agent Documentation](https://github.com/lightspeedwp/.github/blob/develop/.github/agents/agent.md)
-   Use prompts for accessibility, code review, block pattern suggestions, and documentation automation.

### Workspace Setup

-   Install recommended [VS Code](https://code.visualstudio.com) extensions: [Extensions](https://github.com/lightspeedwp/.github/blob/develop/.vscode/extensions.json)
-   Apply workspace settings: .vscode/settings.json
-   Enable Copilot Labs
-   Configure Copilot to use LightSpeed org-level instructions

### Copilot Daily Practice

-   Use comment-driven prompts (e.g., // sanitize, // refactor to class).
-   Check output for security, accessibility, and coding standards.
-   Use example prompts and agents to refine suggestions.

### MCP Server & Advanced Automations

Purpose: Bring Figma and design tokens directly into code.

How:

-   Connect Figma → MCP workspace.
-   Use Copilot to fetch design tokens, block templates, theme.json structure.

References:

-   [Figma MCP Documentation](https://github.com/lightspeedwp/.github/blob/develop/docs/figma-mcp.md)
-   ./intern_study_curriculum.md

### awesome-copilot: Agents, Prompts & Instructions

The [github/awesome-copilot](https://github.com/github/awesome-copilot) repository is your main hub for pre-built Copilot customizations:

-   **Agents** — Specialized AI personas for planning, reviewing, testing, and more.
    -   Directory: [agents](https://github.com/github/awesome-copilot/tree/main/agents)
    -   Examples relevant to your internship: planning agents, code-review agents, documentation/ADR generators, testing helpers.
-   **Prompts** — Task-focused chat commands you can call from Copilot Chat.
    -   Directory: [prompts](https://github.com/github/awesome-copilot/tree/main/prompts)
    -   Examples: `create-readme.prompt.md`, `create-implementation-plan.prompt.md`, `create-github-issues-for-unmet-specification-requirements.prompt.md`, `review-and-refactor.prompt.md`, Playwright and CI-related prompts.
-   **Instructions** — File- or project-scoped standards that guide Copilot’s output.
    -   Directory: [instructions](https://github.com/github/awesome-copilot/tree/main/instructions)
    -   Examples: `wordpress.instructions.md`, `markdown.instructions.md`, `performance-optimization.instructions.md`, `security-and-owasp.instructions.md`.

How to actually use these as an intern:

1. **Install and connect the Awesome Copilot MCP server**

    - Read the [MCP Server section](https://github.com/github/awesome-copilot#-mcp-server).
    - Install Docker (required by the server).
    - Use the one-click links:
        - VS Code: <https://aka.ms/awesome-copilot/mcp/vscode>
        - VS Code Insiders: <https://aka.ms/awesome-copilot/mcp/vscode-insiders>
        - Visual Studio: <https://aka.ms/awesome-copilot/mcp/vs>
    - Confirm in VS Code that the Awesome Copilot MCP server is listed and running.

2. **Discover and install instructions/prompts/agents for your repo**

    - Use the MCP-powered search prompt described in the README to find items like:
        - WordPress- or PHP-related instructions.
        - Documentation / README generators.
        - Testing and CI prompts (Playwright / Jest / GitHub Actions).
    - Add the relevant instructions and prompts to your workspace configuration when appropriate, following the patterns in the repo docs.

3. **Use prompts directly in Copilot Chat**

    - In Copilot Chat, use `/` and then search for awesome-copilot prompts, for example:
        - `/awesome-copilot create-readme` to scaffold a README for your internship repo.
        - `/awesome-copilot create-implementation-plan` when starting a new feature or week’s task.
        - `/awesome-copilot review-and-refactor` to get structured feedback on a PR branch.

4. **Align with your weekly study plan**

    - When working on WordPress theme files, blocks, or plugins, enable and test `wordpress.instructions.md` and related instructions so Copilot follows WordPress coding standards.
    - During performance or accessibility weeks, enable instructions like `performance-optimization.instructions.md` and `a11y.instructions.md` and ask Copilot to audit your code against them.
    - For testing weeks, use Playwright- and CI-related prompts to scaffold tests and GitHub Actions workflows.

5. **Document your usage**
    - In your weekly markdown log, list:
        - Which agents you used (e.g., `implementation-plan.agent.md`, `review-and-refactor.agent.md`).
        - Which prompts were most helpful and what they generated.
        - Any instructions you enabled (e.g., WordPress or markdown instructions).

Key links for interns:

-   Main repo: <https://github.com/github/awesome-copilot>
-   Agents: <https://github.com/github/awesome-copilot/tree/main/agents>
-   Prompts: <https://github.com/github/awesome-copilot/tree/main/prompts>
-   Instructions: <https://github.com/github/awesome-copilot/tree/main/instructions>

### LightSpeed .github Community Health & Templates

The [lightspeedwp/.github](https://github.com/lightspeedwp/.github) repository is the **source of truth** for LightSpeed’s community health files, automation governance, custom instructions, and PR templates.

Key directories under `.github/`:

-   [PULL_REQUEST_TEMPLATE](https://github.com/lightspeedwp/.github/tree/develop/.github/PULL_REQUEST_TEMPLATE)
    -   Standardized templates for:
        -   `pr_bug.md` — Bug fixes and patches.
        -   `pr_feature.md` — New features and enhancements.
        -   `pr_docs.md` — Documentation updates.
        -   `pr_chore.md` — Maintenance and chores.
        -   `pr_ci.md` — CI/CD and workflow updates.
        -   `pr_dep_update.md` — Dependency updates.
        -   `pr_refactor.md` — Refactors.
        -   `pr_hotfix.md` — Critical production fixes.
        -   `pr_release.md` — Release preparation.
-   [ISSUE_TEMPLATE](https://github.com/lightspeedwp/.github/tree/develop/.github/ISSUE_TEMPLATE)
    -   Issue templates for bugs, features, tasks, and documentation.
-   [COPILOT_TEMPLATE](https://github.com/lightspeedwp/.github/tree/develop/.github/COPILOT_TEMPLATE)
    -   Templates and patterns for Copilot chat modes and prompts.
-   [agents](https://github.com/lightspeedwp/.github/tree/develop/.github/agents)
    -   LightSpeed-specific agents (e.g., reviewer agents, support/automation agents).
-   [prompts](https://github.com/lightspeedwp/.github/tree/develop/.github/prompts)
    -   Organization prompts for accessibility, security review, documentation, etc.
-   [instructions](https://github.com/lightspeedwp/.github/tree/develop/.github/instructions)
    -   Organization instructions that define how Copilot should behave on LightSpeed projects.
-   [workflows](https://github.com/lightspeedwp/.github/tree/develop/.github/workflows)
    -   Shared GitHub Actions workflows.

PR templates specifics:

-   Directory: <https://github.com/lightspeedwp/.github/tree/develop/.github/PULL_REQUEST_TEMPLATE>
-   Directory README: explains how templates connect to:
    -   [PR_LABELS.md](https://github.com/lightspeedwp/.github/blob/develop/.github/PR_LABELS.md) for auto-labeling.
    -   [BRANCHING_STRATEGY.md](https://github.com/lightspeedwp/.github/blob/develop/.github/BRANCHING_STRATEGY.md) for branch naming.
    -   [AUTOMATION_GOVERNANCE.md](https://github.com/lightspeedwp/.github/blob/develop/.github/AUTOMATION_GOVERNANCE.md) for automation standards.
    -   Reviewer and PR automation agents in `.github/agents`.

How you must use this as an intern:

1. **Before creating a PR**

    - Confirm which template applies:
        - Feature work → `pr_feature.md`.
        - Bugfix → `pr_bug.md`.
        - Docs-only → `pr_docs.md`.
        - Release → `pr_release.md`, etc.
    - Make sure your branch name follows the [branching strategy](https://github.com/lightspeedwp/.github/blob/develop/.github/BRANCHING_STRATEGY.md) so automation can detect the right template and labels.

2. **When filling out the PR template**

    - Complete **all** required sections:
        - Summary / context.
        - Screenshots or videos where relevant.
        - Testing performed (including Playwright/PHPCS where applicable).
        - Linked issues ("Closes #123").
    - Don’t delete or ignore checklist items—check them off or add a short note.

3. **Leverage automation instead of fighting it**

    - Let labels be applied automatically from the template and branch name.
    - Allow reviewer agents and workflows to run and respond to their feedback.
    - Only override labels or assignments when your mentor asks you to.

4. **Use `.github` as a learning resource**

    - Read:
        - [custom-instructions.md](https://github.com/lightspeedwp/.github/blob/develop/.github/custom-instructions.md) to understand how Copilot should behave at LightSpeed.
        - [Copilot-Processing.md](https://github.com/lightspeedwp/.github/blob/develop/.github/Copilot-Processing.md) to see how Copilot and agents are wired into workflows.
        - [SAVED_REPLIES](https://github.com/lightspeedwp/.github/tree/develop/.github/SAVED_REPLIES) for examples of high-quality support and review comments.
    - When working on LSX Demo Theme or internal projects, align your own `.github` folder with these standards (issue templates, PR templates, prompts, instructions, workflows).

5. **Cross-link with this skills guide and the study curriculum**
    - When you set up a new repo for an internship project:
        - Copy or adapt relevant `.github` structures from `lightspeedwp/.github`.
        - Use the same patterns for prompts, instructions, agents, and workflows.
    - Make explicit notes in your logs about which `.github` files you referenced or adapted.

---

## Quick Reference Table

| Skill               | Key Output                                | Reference                    |
| ------------------- | ----------------------------------------- | ---------------------------- |
| Branching, PRs      | Feature branches, reviewed PRs            | ./intern_study_curriculum.md |
| Issue Creation/Link | Visible, parent/child-linked issues       | ./internship_admin_guide.md  |
| CI & Playwright     | Automated tests, checked PRs              | WP scripts / Playwright      |
| Issue Templates     | Cleaned templates, YAML validated         | lightspeedwp/lsx-demo-theme  |
| Copilot Agents      | Automated code/docs with standard prompts | .github custom instructions  |
| Figma MCP           | Design-to-code template/token mapping     | .github/docs/figma-mcp.md    |

---

## FAQs

Q: Which issue and PR templates do I use in LSX Demo Theme?
A: Bug Report, Feature Request, Task/Chore, Documentation Update.

Q: How should branches and PRs be named?
A: Semantic names (feature/my-block). PRs use template, link issues, assign reviewers.

Q: How do I maintain clean repo hygiene?
A: Use parent issues, child issues, update project board.

Q: What’s mandatory for workflow automation?
A: YAML validation, Copilot agents, updated contribution guides.

Q: How do Copilot + MCP help development?
A: Copilot automates code/doc tasks; MCP automates design-to-code mapping.

Q: How often should docs and PRs be updated?
A: Immediately when work changes; daily for logs; weekly for plans.

Q: What tools are supported in CI?
A: PHPCS, Playwright, GitHub Actions; BrowserStack optional.

Q: Where are setup examples?
A: lightspeedwp/lsx-demo-theme repo.

---

## Reference Links

-   [Custom Instructions](https://github.com/lightspeedwp/.github/blob/develop/.github/custom-instructions.md)
-   [Pull Request Templates](https://github.com/lightspeedwp/.github/tree/develop/.github/PULL_REQUEST_TEMPLATE)
-   [Agent Documentation](https://github.com/lightspeedwp/.github/blob/develop/.github/agents/agent.md)
-   [Prompts](https://github.com/lightspeedwp/.github/tree/develop/.github/prompts)
-   [Figma MCP Documentation](https://github.com/lightspeedwp/.github/blob/develop/docs/figma-mcp.md)
-   [Awesome Copilot](https://github.com/github/awesome-copilot)
-   [Awesome Copilot Agents](https://github.com/github/awesome-copilot/tree/main/agents)
-   [Awesome Copilot Prompts](https://github.com/github/awesome-copilot/tree/main/prompts)
-   [Awesome Copilot Instructions](https://github.com/github/awesome-copilot/tree/main/instructions)
-   [@wordpress/scripts Documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
-   [Playwright Documentation](https://playwright.dev/)
-   [BrowserStack Playwright Guide](https://www.browserstack.com/docs/automate/playwright)

This guide combines repo hygiene, documentation discipline, and advanced Copilot/MCP workflows to support production-ready work at LightSpeed.
