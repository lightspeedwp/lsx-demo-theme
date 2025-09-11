# Custom Instructions for Copilot and Contributors

This repository follows a robust workflow for WordPress block theme and plugin development, optimized for asynchronous, accessible, and secure teamwork. Use these instructions as your guide for all code, design, and collaboration tasks.

---

## 1. Version Control & Commit Practices

- **Semantic Versioning:** Use [Semantic Versioning](https://semver.org/) for all releases and milestones.
- **Changelog Discipline:** Every meaningful change must update `changelog.md` ([Keep a Changelog](https://keepachangelog.com/en/1.0.0/)).
- **Conventional Commits:** Write [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (`type(scope): summary`) for all commits and PRs.
- **Branching:** Use feature branches with clear, consistent names (`feature/`, `fix/`, `chore/`). Document the model in `README.md`.

---

## 2. Security & Permissions

- **Sanitize Inputs:** Use [WordPress sanitization functions](https://developer.wordpress.org/reference/functions/sanitize_text_field/) for all user input.
- **Escape Outputs:** Always escape data before output ([escaping reference](https://developer.wordpress.org/apis/security/escaping/)).
- **Use Nonces:** Protect forms and sensitive actions with [WordPress nonces](https://developer.wordpress.org/apis/security/nonces/).
- **Check Capabilities:** Use [`current_user_can()`](https://developer.wordpress.org/reference/functions/current_user_can/) for all privileged actions.
- **Highlight Security:** Clearly annotate any security-relevant code in PRs for reviewer attention.

---

## 3. Performance

- **Efficient Queries:** Avoid unbounded or unindexed database queries.
- **Conditional Assets:** Only load scripts/styles when necessary.
- **Caching:** Use transients/object cache for expensive operations.
- **Prefer WP APIs:** Use WordPress core functions where possible.

---

## 4. Accessibility

- **WCAG 2.2 AA:** All UI work must meet [WCAG 2.2 AA](https://www.w3.org/WAI/standards-guidelines/wcag/) accessibility standards.
- **ARIA & Keyboard:** Use ARIA attributes and ensure all interactive elements support keyboard navigation.
- **Contrast & Focus:** Maintain strong color contrast and visible focus states.

---

## 5. Coding Standards

- **PHP:** Follow [WordPress Coding Standards (WPCS)](https://github.com/WordPress/wpcs-docs). PHPCS must pass on all PRs.
- **HTML/JS/CSS:** Adhere to [WordPress coding standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/).
- **Markdown:** Use the [Markdown Style Guide](docs/coding-standards/styleguide.md).
- **Accessibility Guide:** Reference [accessibility.md](docs/coding-standards/wordpress-coding-standards/accessibility.md).
- **Automated Checks:** PHPCS and other CI checks are required for merges.

---

## 6. Figma & Design Systems

- **Dev Mode:** Use Figma Dev Mode for inspecting and annotating components, spacing, variables, etc.
- **Design Tokens:** Map Figma variables to `theme.json` settings and document pattern exports.
- **Handoff Notes:** Add links to Figma frames/components in code comments and PRs.

---

## 7. GitHub Workflow & Project Management

- **Issues:** Use and update issue templates for all new issues ([Task, Bug, Support, etc.]).
- **PRs:** Always use the [PR template](https://github.com/lightspeedwp/.github/blob/master/.github/PULL_REQUEST_TEMPLATE.md). Link PRs to issues with closing keywords (e.g., `Closes #123`). Include screenshots or video walkthroughs when helpful.
- **Project Board:** Keep statuses current for all issues and PRs.
- **Documentation:** Keep `README.md` and other docs updated with project structure, weekly progress, and setup guidance.

---

## 8. Testing & Automation

- **Automated UI Tests:** Add Playwright (or similar) tests for major UI/UX flows.
- **CI Quality Gates:** PRs must pass all linting, PHPCS, and test workflows.
- **Branch Protections:** Enable branch protections to require CI passes before merging.

---

## 9. Asynchronous Collaboration

- **Actionable Reviews:** Give clear, actionable feedback on PRs. Reference relevant standards.
- **Daily Logs:** Maintain a Markdown journal reflecting on progress, blockers, and learnings.
- **Public Communication:** Use Issues and PRs—avoid private channels for decision-making.
- **Advanced Formatting:** Use lists, tables, and code blocks for clarity in all docs and discussions.

---

## 10. Capstone & Reflection

- **Retrospective:** At project completion, contribute a personal log reflecting on learnings, blockers, and future goals.
- **Final PR:** Submit a walkthrough (video or Markdown) summarizing your final work.
- **Archive:** Export or screenshot project board for archive; update and version documentation as needed.

---

## References & Quick Links

- [LightSpeed General Instructions](https://github.com/lightspeedwp/.github/blob/master/.github/custom-instructions.md)
- [Coding Standards](https://github.com/lightspeedwp/.github/blob/master/.github/instructions/coding-standards.instructions.md)
- [HTML Templates](https://github.com/lightspeedwp/.github/blob/master/.github/instructions/html-template.instructions.md)
- [Pattern Development](https://github.com/lightspeedwp/.github/blob/master/.github/instructions/pattern-development.instructions.md)
- [PHP Block Instructions](https://github.com/lightspeedwp/.github/blob/master/.github/instructions/php-block.instructions.md)
- [Theme JSON](https://github.com/lightspeedwp/.github/blob/master/.github/instructions/theme-json.instructions.md)
- [Pull Request Template](https://github.com/lightspeedwp/.github/blob/master/.github/PULL_REQUEST_TEMPLATE.md)
- [WordPress Security](https://developer.wordpress.org/apis/security/)
- [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

---

*Feedback or suggestions? Open an issue or PR!*
