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
-   [Pull Request Template](https://github.com/lightspeedwp/.github/tree/develop/.github/PULL_REQUEST_TEMPLATE)
-   [Agent Documentation](https://github.com/lightspeedwp/.github/blob/develop/.github/agents/agent.md)
-   [Prompts](https://github.com/lightspeedwp/.github/tree/develop/.github/prompts)
-   [Figma MCP Documentation](https://github.com/lightspeedwp/.github/blob/develop/docs/figma-mcp.md)
-   [@wordpress/scripts Documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
-   [Playwright Documentation](https://playwright.dev/)
-   [BrowserStack Playwright Guide](https://www.browserstack.com/docs/automate/playwright)

This guide combines repo hygiene, documentation discipline, and advanced Copilot/MCP workflows to support production-ready work at LightSpeed.
