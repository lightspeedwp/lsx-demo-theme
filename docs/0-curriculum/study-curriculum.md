# Intern Study Curriculum — Overview

---

## Table of Contents

1. Phase Summary
2. Week-by-Week Summary (High Level)
3. Global Guidelines & Weekly Checklist
4. Weekly Plan (High-Level)
5. WordPress Learning
6. Security Best Practices Links
7. Design & Figma
8. Git & GitHub Learning
9. Web Fundamentals (web.dev)
10. SEO & Content – Yoast Academy
11. Video Library (YouTube)

---

This is a 24-week pathway for junior developers preparing to work on WordPress block themes, plugins, WooCommerce, and design systems at LightSpeed.

The curriculum is divided into three phases:
**Phase 1 – WordPress First (Weeks 1–8):** WordPress core, block editor, Git/GitHub, basic theme exports.
**Phase 2 – Systems & Patterns (Weeks 9–16):** theme.json, design tokens, Figma, block patterns, support workflows.
**Phase 3 – Advanced Concepts (Weeks 17–24):** SCF blocks, WooCommerce blocks, block bindings, testing, performance, Figma design systems & MCP, internship project/outcome.

### Work Streams

-   **WordPress & Themes:** Block themes, templates, patterns, developer documentation.
-   **Git & GitHub:** Version control, projects, CI, Copilot & MCP.
-   **Web Fundamentals:** HTML, CSS, JS, accessibility, performance.
-   **Design & Figma:** Dev Mode, variables, design systems, MCP.
-   **SEO & Content:** Basic SEO, site structure, content workflows.
-   **Client & Support Workflows:** Zendesk, Asana, communication standards.

Each week includes:

-   A primary theme
-   1–3 key outputs
-   A short list of platforms/courses to complete
-   Weekly submission checklist

---

## Phase Summary

| Phase | Weeks | Monthly Theme             | Primary Skills                          | Key Outputs                                                |
| ----- | ----- | ------------------------- | --------------------------------------- | ---------------------------------------------------------- |
| 1     | 1–4   | WordPress First (Core)    | WP basics, block editor, Git/GitHub     | Local environment, WP basics, GitHub project & README      |
| 1     | 5–8   | Themes & Patterns         | theme.json basics, exports, patterns    | Exported block theme + simple patterns                     |
| 2     | 9–12  | Systems & Support         | Design tokens, Figma Dev Mode, support  | Figma ↔ WP mapping, support simulation repo                |
| 2     | 13–16 | Advanced WP Fundamentals  | developer.wp.org, security, performance | Mini feature implemented using dev docs                    |
| 3     | 17–20 | Design Systems & Figma    | Figma courses, variables, systems       | Small design system + mapped theme.json                    |
| 3     | 21–24 | Blocks, Woo, Testing, MCP | SCF, Woo blocks, testing, Figma MCP     | Internship outcome: theme + plugin + tests + design system |

---

## Week-by-Week Summary (High Level)

| Week | Phase | Focus Theme                                    | Primary Outputs (Short)                           | Key Platforms                     |
| ---- | ----- | ---------------------------------------------- | ------------------------------------------------- | --------------------------------- |
| 1    | 1     | WordPress Core Essentials                      | WP installed locally, core concepts log           | WP.org, Learn.WordPress           |
| 2    | 1     | Block Editor Skills + Simple Patterns          | 2–3 simple layouts & patterns in WP               | Learn.WordPress                   |
| 3    | 1     | Git & GitHub Basics                            | Git repo, basic PR, markdown journal              | Learn.Microsoft.com, GitHub       |
| 4    | 1     | Create Block Theme & Site Editor               | Exported theme, simple theme.json                 | WP.org, Create Block Theme        |
| 5    | 1     | theme.json Deep Dive                           | Custom theme.json, notes on tokens                | developer.wp.org, Learn.WordPress |
| 6    | 2     | Figma Dev Mode + Design Tokens (Intro)         | Figma variables mapped to WP tokens               | Figma, Design files               |
| 7    | 2     | Build WP Patterns Based on Figma               | 2 patterns built from Figma references            | Figma, WP Site Editor             |
| 8    | 2     | Support Simulation (Zendesk & Asana)           | Mock tickets, Asana tasks, client-style replies   | Zendesk, Asana                    |
| 9    | 2     | SCF Blocks (Basics Only)                       | One SCF block with dynamic content                | SCF, developer.wp.org             |
| 10   | 3     | WooCommerce Blocks                             | Simple Woo storefront page using blocks           | WooCommerce, WP                   |
| 11   | 3     | Block Bindings + Advanced Patterns             | Block using block bindings & pattern registration | developer.wp.org                  |
| 12   | 3     | Automated Testing (Playwright + PHPCS)         | One e2e test + CI workflow running                | Playwright, GitHub                |
| 13   | 3     | Advanced developer.wp.org – Themes & Templates | Task built from theme dev docs                    | developer.wp.org                  |
| 14   | 3     | Advanced developer.wp.org – Plugins & Security | Secure mini plugin (sanitize/escape/nonce)        | developer.wp.org                  |
| 15   | 3     | Performance & Accessibility                    | Performance & a11y checklist applied to project   | web.dev, Stark                    |
| 16   | 3     | REST API & WP-CLI (Light Intro)                | Simple REST usage or WP-CLI task                  | developer.wp.org                  |
| 17   | 3     | Figma Foundations (Tools & UI)                 | Completed beginner Figma course, sample file      | Figma.com                         |
| 18   | 3     | Figma Components & Variables                   | Small component set with variables                | Figma.com                         |
| 19   | 3     | Figma Design Systems for WordPress             | Mini design system for a WP layout                | Figma.com                         |
| 20   | 3     | Figma → theme.json Mapping                     | Mapping document + updated theme.json             | Figma.com, WP.org                 |
| 21   | 3     | Figma MCP & AI Workflows                       | Demo integrating Figma MCP into dev workflow      | Figma MCP, GitHub                 |
| 22   | 3     | Final Internship Build – Theme + Blocks        | Theme + 1–2 custom blocks                         | All platforms                     |
| 23   | 3     | Final Internship Review – Testing & Docs       | Tests, docs, changelog, project board             | GitHub, Playwright                |
| 24   | 3     | Internship Presentation & Retrospective        | Walkthrough, retro, learning log                  | N/A                               |

---

## Global Guidelines & Weekly Checklist

### 1. Standards Overview

| Area              | Intern Must…                                             | Where Details Live               |
| ----------------- | -------------------------------------------------------- | -------------------------------- |
| Version control   | Use branches, PRs, semantic versions, changelogs         | Git & GitHub Learning            |
| Security          | Sanitize/escape data, use nonces, check capabilities     | WordPress Learning → dev.wp.org  |
| Performance       | Avoid heavy queries, conditional enqueues, cache         | Web Fundamentals                 |
| Accessibility     | Follow WCAG 2.2 AA, keyboard navigation, contrast, focus | Web Fundamentals, Design & Figma |
| Coding standards  | Follow WPCS, JS/CSS/HTML standards, markdown guide       | Git & GitHub Learning            |
| Writing on GitHub | Use clear issues/PRs, advanced markdown, templates       | Git & GitHub Learning            |

### 2. Weekly Submission Checklist

| Item                                    | Required? | Notes                                    |
| --------------------------------------- | --------- | ---------------------------------------- |
| Daily markdown log                      | ✅        | Short entries, link to courses/resources |
| Issues created/updated for current work | ✅        | Parent/child issues where needed         |
| PRs linked to issues (closing keywords) | ✅        | “Closes #123” etc.                       |
| README updated                          | ✅        | Summary of week’s work                   |
| Screenshots / short loom-style video    | ⚠️        | Required for UI/design weeks             |
| Figma notes / links                     | ⚠️        | Required in design-related weeks         |
| GitHub Project board updated            | ✅        | Statuses accurate                        |
| PHPCS / CI checks passing (from W4+)    | ✅        | If failing, notes on debugging           |
| Changelog entry (from W1+)              | ✅        | SemVer + Keep a Changelog style          |

---

## Weekly Plan (High-Level)

(See Week-by-Week for full detail. Additional information can be filled week by week as needed.)

---

## WordPress Learning

### Learn.WordPress.org — Courses

| Level | Priority | Course Name                             | Weeks | Notes (Goal)           |
| ----- | -------- | --------------------------------------- | ----- | ---------------------- |
| 🟢    | 1        | Getting Started: Get Setup              | 1     | Basics + install WP    |
| 🟢    | 1        | Getting Started: Get Familiar           | 1–2   | Navigation, content    |
| 🟢    | 2        | Beginner WordPress User                 | 1–2   | Reinforce basics       |
| 🟢    | 3        | Beginner WP Designer                    | 2–3   | Block editor skills    |
| 🟢    | 3        | Beginner WP Developer                   | 3–4   | Dev mindset            |
| 🟠    | 1        | Intermediate WordPress User             | 5–6   | theme.json + patterns  |
| 🟠    | 1        | Intermediate Theme Developer            | 5–7   | Block theme work       |
| 🟠    | 2        | Develop Your First Low-Code Block Theme | 5–8   | Block theme transition |
| 🟠    | 3        | Intro to Block Development              | 9–11  | ACF/blocks foundation  |
| 🔴    | 2        | Advanced WordPress User                 | 13–16 | For advanced weeks     |

_Sample lessons can be expanded as needed. See curriculum._

---

## developer.wordpress.org — Reference Tracks

| Track       | Key Topics                               | Weeks      | Example Task                 |
| ----------- | ---------------------------------------- | ---------- | ---------------------------- |
| Security    | Sanitising, escaping, nonces, roles      | 9, 13–14   | Harden a simple options form |
| Theme Dev   | Template hierarchy, theme.json, patterns | 4–5, 11–13 | Add template + pattern       |
| Block Dev   | Block APIs, variations, hooks            | 9–11       | Convert shortcode → block    |
| REST API    | Routes, endpoints, auth                  | 16         | Simple custom route          |
| Performance | Caching, queries, assets                 | 15         | Optimise queries/assets      |

---

## Security Best Practices Links

| Topic                  | Resource (Link)                                                                                   | Notes                        |
| ---------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------- |
| Sanitising input       | [sanitize_text_field()](https://developer.wordpress.org/reference/functions/sanitize_text_field/) | All text inputs              |
| Escaping output        | [Escaping](https://developer.wordpress.org/apis/security/escaping/)                               | Escape before rendering      |
| Data validation        | [Guides](https://developer.wordpress.org/apis/security/data-validation/)                          | Sanitize & validate guides   |
| Nonces                 | [Nonces API](https://developer.wordpress.org/apis/security/nonces/)                               | Proper forms/requests        |
| Roles & capabilities   | [User roles](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/)        | Gate with current_user_can() |
| Common vulnerabilities | [WordPress Security - Common Vulnerabilities](https://developer.wordpress.org/plugins/security/common-vulnerabilities/) | Review before shipping       |
| Securing input plugins | [Plugin Security Best Practices](https://developer.wordpress.org/plugins/security/)                                    | Connect to ACF block work    |

---

## Design & Figma

### Beginner – Figma Core Skills

| Priority | Topic        | Resource Name (Link)                                                      | Type    | Notes                    |
| -------- | ------------ | ------------------------------------------------------------------------- | ------- | ------------------------ |
| 1        | Figma basics | [Figma Design for Beginners 2025](https://www.figma.com/resources/learn/) | Course  | Mandatory                |
| 2        | General Use  | [Figma Help Center](https://help.figma.com/)                              | Hub     | For feature deep-dives   |
| 3        | Dev Mode     | [Guide to Dev Mode](https://www.figma.com/dev-mode-guide/)                | Article | Connect to Month 5 tasks |

_Intermediate and advanced topics, design systems, variables, and MCP resources can be expanded as needed._

---

## Git & GitHub Learning

### Learn.Microsoft.com

| Level | Path / Module (Link)        | Weeks | Notes                |
| ----- | --------------------------- | ----- | -------------------- |
| 🟢    | GitHub Foundations – Part 1 | 3     | Before heavy Git use |
| 🟢    | GitHub Foundations – Part 2 | 3–4   |                      |
| 🟢    | Markdown & GitHub Pages     | 3–4   | Blogging/journal     |
| 🟠    | GitHub Actions – Part 1 & 2 | 11–12 | For CI weeks         |
| 🟠    | Copilot paths               | 6–9   | Alongside Copilot    |
| 🔴    | GitHub Advanced Security    | 13–16 | Optional deep dive   |

### Learn.GitHub.com (Skills)

| Level | Course (Link)                       | Weeks | Output                |
| ----- | ----------------------------------- | ----- | --------------------- |
| 🟢    | Introduction to GitHub              | 3     | Complete intro track  |
| 🟢    | Communicate Using Markdown          | 1–3   | Journal & docs        |
| 🟢    | Review Pull Requests                | 4–6   | Practice code reviews |
| 🟠    | Getting Started with GitHub Copilot | 6–7   | Prep for Copilot      |
| 🟠    | Integrate MCP with Copilot          | 9–11  | Tie into MCP weeks    |
| 🔴    | AI in Actions                       | 21–22 | Optional automation   |

---

## Web Fundamentals (web.dev)

_Beginner, Intermediate, and Advanced topics with official web.dev links. Mandatory: HTML, CSS, Images, Forms, JavaScript. Intermediate: Design, Accessibility, Performance. Advanced: PWA (optional), Testing for Playwright._

---

## SEO & Content – Yoast Academy

| Level | Course / Training (Link)       | Weeks | Goal                 |
| ----- | ------------------------------ | ----- | -------------------- |
| 🟢    | SEO for Beginners              | 4–6   | Core SEO concepts    |
| 🟢    | WordPress for Beginners        | 1–2   | Complement Learn.WP  |
| 🟢    | WP Block Editor Training       | 2     | Editor familiarity   |
| 🟢    | Yoast SEO Plugin Training      | 5–7   | SEO in WP            |
| 🟠    | Site Structure Training        | 6–8   | Nav & linking        |
| 🟠    | Keyword Research / Copywriting | 7–9   | Useful, not blocking |
| 🔴    | Technical SEO & Advanced       | 13–16 | Optional specialism  |

---

## Video Library (YouTube)

### Approved Channels

| Category    | Channel Name (URL)           | Purpose                        |
| ----------- | ---------------------------- | ------------------------------ |
| WordPress   | WordPress, OllieWP           | WP & block themes              |
| Dev tools   | VS Code, GitHub              | Editor, Git, Actions           |
| AI          | OpenAI, Anthropic            | AI fluency                     |
| Design/a11y | Figma, Stark                 | Design systems & accessibility |
| Business    | Content Snare                | Client content collection      |
| Others      | JamieWP, Design System Guide | Various                        |

### Team Playlists

| Topic   | Playlist Name (Link) | Notes              |
| ------- | -------------------- | ------------------ |
| Copilot | GitHub Copilot       | LS shared playlist |
| VS Code | VSCode               |                    |
| ChatGPT | ChatGPT              |                    |
| Figma   | Figma Courses        | Complete set       |
| Stark   | Stark Accessibility  | a11y focus         |

---

## Profiles & Accounts Setup

| Month | Platform | Action                                  | Done? |
| ----- | -------- | --------------------------------------- | ----- |
| 1     | GitHub   | Create profile + README + links         | ☐     |
| 1     | WP.org   | Create profile, connect Learn.WP        | ☐     |
| 1     | Learn.MS | Create account, bookmark required paths | ☐     |
| 1     | Figma    | Create account, join LSX files          | ☐     |
| 1     | OllieWP  | Create account for Block Theme Academy  | ☐     |
| 2     | Zendesk  | Access LightSpeed support instance      | ☐     |
| 2     | Asana    | Invite + join relevant projects         | ☐     |
| ...   | ...      | ...                                     | ☐     |

---

> For full org standards and detailed instructions, see [LightSpeed custom-instructions.md](https://github.com/lightspeedwp/.github/blob/develop/.github/custom-instructions.md).
