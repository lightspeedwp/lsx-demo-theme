# GitHub Onboarding Guide

Welcome to onboarding for the LSX Demo Theme repository!
This guide is your roadmap for using GitHub effectively, understanding repo structure, leveraging built-in templates, tracking progress, and using Copilot. Designed for clarity and actionable steps.

Contents:

1. Repository Structure: What’s Where
2. Key Files & Their Purpose
3. Built-In Templates
4. Workflow Expectations
5. Logs & Reflections System
6. References & Resources
7. Getting Started – Quick Steps
8. FAQ Highlights (see /docs/faq.md for more)
9. Tips for Success

---

## 1. Repository Structure: What’s Where

The project is organised for clarity, automation, and productivity.

/
├── .github/
│ ├── ISSUE_TEMPLATE/
│ │ ├── 01-tasks.md
│ │ ├── 02-week-plan.md
│ │ ├── 03-templates.md
│ │ ├── 04-template-parts.md
│ │ ├── 05-json.md
│ │ ├── 06-patterns.md
│ │ └── config.yml
│ ├── copilot-custom-instructions.md
│ └── README.md
├── docs/
│ ├── curriculum.md
│ ├── resources.md
│ ├── faq.md
│ └── README.md
├── internship-project/
│ ├── README.md
│ └── assets/
├── logs/
│ ├── week-01.md
│ ├── week-02.md
│ ├── reflections.md
│ └── README.md
├── .gitignore
└── README.md

What’s in Each Folder?

-   .github/ISSUE_TEMPLATE/ — Issue templates: weekly plan, tasks, block parts, patterns.
-   .github/copilot-custom-instructions.md — Copilot/AI context, coding standards, folder overview.
-   docs/ — Curriculum, help guides, FAQ, study resources.
-   internship-project/ — Project overview and assets.
-   logs/ — Weekly logs and reflections.
-   .gitignore — Exclude unnecessary files from Git tracking.
-   README.md — Welcome, repo usage, onboarding instructions.

---

## 2. Key Files & Their Purpose

-   /README.md — Intro, repo usage, onboarding start.
-   /docs/curriculum.md — Study plan and curriculum overview.
-   /docs/resources.md — Links to essential learning resources.
-   /docs/faq.md — Common questions answered.
-   .github/copilot-custom-instructions.md — Copilot context/instructions for code suggestions.
-   /logs/week-xx.md — Intern’s weekly log for submissions.
-   /logs/reflections.md — Reflection/retrospective template and notes.
-   /internship-project/README.md — Internship test project overview and deliverables.
-   /internship-project/assets/ — Design assets, screenshots, sample data.

---

## 3. Built-In Templates

### GitHub Issue Templates

Template (File) — Main Sections & Usage

-   01-tasks.md — General task template.
-   02-week-plan.md — Weekly plan: studies, videos, tasks, tracking.
-   03-templates.md — Templates: acceptance criteria, included parts.
-   04-template-parts.md — Template parts: header/footer/sidebar, theme.json.
-   05-json.md — Block styles, palettes, typesets, theme.json, style.
-   06-patterns.md — Registering block patterns, PHP, categories.

Example: Week Submission Issue Template

## Week X Submission

**What did you work on?**

-   Summary, links to PRs/branches

**Challenges faced**

-   Describe blockages or tricky bits

**Questions for review**

-   Specific feedback needed

**Reflection**

-   What did you learn?
-   Plans for next week?

### Copilot Custom Instructions

File: .github/copilot-custom-instructions.md

Purpose:

-   Explains project overview, folder structure, coding standards, tools/frameworks.
-   Referenced by GitHub Copilot for context-aware suggestions.

---

## 4. Workflow Expectations

-   Daily Commits: Commit work often.
-   Weekly Submission: Open a weekly issue using the week-submission template.
-   README Update: Document progress regularly.
-   Pull Requests: Use for any feature or pattern addition.
-   Logs: Keep journal entries in /logs.

---

## 5. Logs & Reflections System

Logs:

-   Maintain weekly logs in /logs (e.g., week-01.md, week-02.md).
-   Use Harvest for time tracking if available.

Reflections:

-   Use /logs/reflections.md for retrospectives after each week.
-   Cover: what went well, areas for growth, new insights.

Daily Stand-Up Example (in logs):

### Daily Stand-Up

-   How do you feel today?
-   What did you do yesterday?
-   What do you plan to do today?
-   Any blockers?

---

## 6. References & Resources

-   [GitHub Copilot Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)
-   [WCAG 2.2 Accessibility Guide](https://www.w3.org/WAI/WCAG22/quickref/)
-   [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/)

See /docs/resources.md for more learning links and /docs/faq.md for common questions.

---

## 7. Getting Started – Quick Steps

1. Clone the repo:

    ```
    git clone https://github.com/lightspeedwp/lsx-demo-theme.git
    ```

2. Read the /README.md — Get basic onboarding info.
3. Browse the /docs/ folder — Understand the curriculum, find resources and FAQs.
4. Explore .github/ISSUE_TEMPLATE/ — Familiarise yourself with task/plan templates.
5. Use [GitHub Copilot](https://github.com/features/copilot) — Reference .github/copilot-custom-instructions.md for coding standards.
6. Track your work in /logs/ — Add weekly logs and reflections.
7. Ask questions — Use issues, PRs, or reach out for help as needed.

---

## 8. FAQ Highlights (see /docs/faq.md for more)

Q: How do I log hours?
A: Use /logs/ markdown files each day; optionally use the [Harvest](https://www.getharvest.com) app.

Q: When do I submit work?
A: End of each week, via a weekly issue using the submission template.

Q: Where do I find resources?
A: /docs/resources.md, links in curriculum and onboarding docs.

Q: How do I get feedback?
A: PRs, issues, and in [Slack](https://slack.com)/[Asana](https://asana.com) stand-ups.

Q: What if I am blocked?
A: Record blockers in log; ask via issue/PR or in your stand-up.

---

## 9. Tips for Success

-   Keep logs and reflections up to date.
-   Use the issue and PR templates for all submissions.
-   Document learnings and blockers—mentors use these for feedback.
-   Ask questions early—collaboration is key to onboarding!
-   Use resources: Coding standards, accessibility guides, curriculum.

---

This scaffolded structure is designed for a smooth, supportive intern onboarding. Reference and update this guide as you gain experience in the repo!
