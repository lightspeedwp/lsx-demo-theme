# GitHub Copilot Custom Instructions for LSX Demo Theme

## Project Overview
LightSpeed's **LSX Demo Theme** is a modern WordPress block theme built with Full Site Editing (FSE). It uses `theme.json`, block template parts, and Gutenberg patterns to create lightweight, responsive, and WooCommerce-compatible sites.

## Coding & Styling Guidelines
- Prefer native WordPress block patterns over custom JavaScript or external libraries.
- Use `theme.json` exclusively for color palettes, typography, spacing, and layout settings.
- Maintain accessibility: semantic HTML elements, proper ARIA roles, alt text for images, and correct heading hierarchy.
- Follow WordPress PHP coding standards (4‑spaces indentation, meaningful function names, and secure escaping/sanitization for dynamic content).
- Use semantic CSS naming (e.g. BEM or utility-first), avoid inline styles, and optimise assets (compressed SVGs, WebP/AVIF images).

## Tools & Workflow Expectations
- All development is GitHub-based: use Issues to track tasks, feature branches, and Pull Requests for code review.
- Log your time in Harvest via GitHub issue integration for each task.
- Code in VS Code with GitHub Copilot; `.instructions.md` files and prompt templates should guide your Copilot experience.
- Use WordPress Studio (not LocalWP) to sync local development to live WordPress.com sandbox sites.

## PR & Documentation Standards
- Always reference relevant issue numbers in commit messages (e.g. `Closes #5`).
- Use clear, descriptive PR titles and include a summary of changes.
- Keep documentation up to date — that includes the README, learning journal, and any new patterns or templates added.
- Write test cases using Playwright for accessible page validation.

## Learning & Prompt Assistance
- Copilot should help you write code but always add context — for example: "Add a new Nav pattern using `theme.json` variables".
- Use prompt files in `.github/prompts/` for repetitive tasks like pattern generation or accessibility reviews.
- If asked, guide junior devs to write reflection posts in Markdown and review their weekly submissions logically.
