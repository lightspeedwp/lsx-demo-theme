---
post_title: Frequently Asked Questions
author1: LightSpeedWP Team
post_slug: faq
microsoft_alias: ''
featured_image: ''
categories: ['documentation']
tags: ['internship', 'guides', 'workflow', 'resources']
ai_note: 'Content updated with assistance from AI; please review.'
summary: 'Answers common intern questions with links to curriculum, evaluation, tooling, onboarding, testing, and accessibility resources.'
post_date: '2025-12-02'
---

# Frequently Asked Questions

This FAQ addresses common questions for the LSX Demo Theme internship. If your question isn’t answered here, open a discussion or raise an issue. For deeper details, browse the docs directory starting at `docs/README.md`.

## What are the expected working hours?

Interns are expected to commit **40 hours per week**. The internship is remote and asynchronous, so you can arrange your hours as long as you meet deadlines and attend scheduled check‑ins. Communicate availability clearly in your weekly plan and in weekly issues. See `logs/` for planning/reflection conventions.

## How should I track my time?

Use the daily logs template in `logs/` and ensure it includes an area to record time per task. As you log each task, add the time it took to complete. Keep entries concise (what you did, links to issues/PRs) and maintain daily visibility through small commits and updated logs.

## How do I submit my weekly work?

At the end of each week, open a **Week X Submission** issue using the provided template. Summarise what you worked on, link to Pull Requests, describe challenges, and reflect on what you learned. Keep your log files in the `logs/` folder up to date and push them before creating the submission issue. See `docs/5-intern project/github-onboarding-guide.md` and `docs/6-skills development/planning-skills.md` for workflow guidance.

## Should I create GitHub issues for every task?

Yes. Create an issue for each significant task or learning objective. Use the appropriate templates to capture context, acceptance criteria, links to resources, and testing notes. This supports time tracking, code review, and mentoring. See `docs/5-intern project/github-onboarding-guide.md` and `docs/6-skills development/github-and-copilot-skills.md`.

## Where can I find learning materials?

Start with `docs/resources.md`. Then explore the curriculum in `docs/0-curriculum/`:

-   `github-skills.md`, `microsoft-learn.md`
-   `web.dev-learning.md`, `wordpress-learning.md`, `yoast-learning.md`
-   `study-curriculum.md`, `youtube.md`

Each file lists official, up-to-date resources for tools and topics you’ll use.

## What if I’m stuck or need help?

Being stuck is part of learning. First, search the documentation and resources. If you’re still blocked, describe your problem with clear reproduction steps in a GitHub issue. Include links to relevant code, commits, or error messages, and reference any docs you consulted. See `docs/1-evaluation/LightSpeed-Mentor-Guide.md` for mentoring expectations and communication norms.

## How often should I commit?

Commit early and often. Small, incremental commits with clear messages are easier to review and troubleshoot. Use branches for new features or experiments and open Pull Requests when ready. Daily commits are encouraged to ensure your work is visible. See `CONTRIBUTING.md` and `docs/5-intern project/github-onboarding-guide.md` for branching and PR tips.

## What goes into the reflection log?

Use `logs/reflections.md` for broader reflections across the internship: insights, challenges, effective tools/workflows, and improvement plans. Reflective writing consolidates knowledge and demonstrates growth. Pair reflections with weekly logs (e.g., `logs/week-01.md`) for a comprehensive record.

## How does evaluation work? What rubric is used?

Evaluation uses the materials in `docs/1-evaluation/`:

-   `LightSpeed-Evaluation-Rubric.md` — competencies and expectations.
-   `lightspeed-evaluation-scoring-guide.md` — how scoring is applied.
-   `LightSpeed-Mentor-Guide.md` — how mentorship supports your progress.
-   `lightspeed-mentor-tracking-sheet-structure.md` — tracking structure and artefacts.

Review these early and link your work (issues, PRs, logs) to rubric items.

## What tools and environment should I use?

See `docs/7-tooling/`:

-   `local-environment.md` — local WordPress and theme setup.
-   `vscode.md`, `chrome.md`, `mobile-apps.md` — editor and testing tools.
-   `AI-tools/` — AI usage guidance.

Also review repository root docs: `DEVELOPMENT.md`, `README.md`, and `docs/5-intern project/add-style-variations.md` for theme-specific tasks.

## What is the recommended onboarding workflow?

Follow `docs/5-intern project/github-onboarding-guide.md` to get set up with GitHub, branches, issues, and PRs. Then work through `docs/0-curriculum/` alongside practical tasks in `patterns/`, `parts/`, and `theme.json`. Use `docs/6-skills development/planning-skills.md` to plan weekly goals.

## How should I approach accessibility, performance, and SEO?

This repository emphasizes accessibility and inclusive practices. Review:

-   `.github/instructions/a11y.instructions.md` and `docs/resources.md` — accessibility guidance and references.
-   `SEO_ACCESSIBILITY_PERFORMANCE_REPORT.md` — combined focus areas.
-   `theme.json`, `styles/`, and `parts/` — implement accessible, semantic structures.

Run manual and automated checks (e.g., axe-core, Accessibility Insights) on your work.

## Is there guidance for testing and Playwright?

Yes. Check `playwright.config.ts` and `e2e/example.spec.ts` for test scaffolding. Follow `tests/` and `tests-examples/` for patterns. Use accessible locators (`getByRole`, `getByLabel`) and avoid brittle selectors. See `.github/instructions/playwright-typescript.instructions.md` for standards and `docs/5-intern project/old-content/playwright-automated-tests.md` for background.

## Where do I find project tasks and examples?

Explore `docs/5-intern project/` for project guidance:

-   `add-style-variations.md` — theme visual variants.
-   `github-onboarding-guide.md` — repo workflows.
-   `profile setups.md` — profiles and setup steps.
-   `old-content/` — archived references (use current docs as primary).

## How do I structure learning and study time?

Use `docs/0-curriculum/study-curriculum.md` for structure. Pair daily study with hands-on tasks (e.g., creating template parts in `parts/`, block patterns in `patterns/`, and design tokens in `theme.json`). Keep a running list of learned topics in weekly logs.

## What’s the etiquette for Issues and Pull Requests?

Issues:

-   State the problem clearly with acceptance criteria and references.
-   Link to related files, resources, and tests.
-   Keep scope manageable and update status often.

Pull Requests:

-   Use clear titles and a focused description.
-   Link issues, add testing notes, and screenshots for UI changes.
-   Keep commits small and coherent; request review early.

See `CONTRIBUTING.md` and `docs/5-intern project/github-onboarding-guide.md`.

## Any interview preparation tips?

See `docs/interview/README.md` for preparation guidance and resources.

## Who do I contact for admin questions or templates?

See `docs/4-intern admin/` for templates and admin notes:

-   `admin-templates.md`
-   `README.md`

## Where can I find general FAQs, references, and quick links?

Start at `docs/README.md` and `docs/resources.md`. For workflows and skills, read `docs/6-skills development/README.md`. For tools, review `docs/7-tooling/README.md`.

---

Note: This FAQ was updated with accessibility and inclusion in mind, but accessibility issues may still exist. Please review and test content with tools like Accessibility Insights.
