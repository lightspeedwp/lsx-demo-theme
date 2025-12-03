# Intern Study Curriculum — Overview

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

This is a 24-week pathway for junior developers preparing to work on WordPress block themes, plugins, WooCommerce, and design systems at LightSpeed.

Throughout this curriculum, you will use:

-   [awesome-copilot](https://github.com/github/awesome-copilot) for agent-driven workflows, prompts, instructions, and MCP server integration to accelerate your learning and project work.
-   [LightSpeed .github](https://github.com/lightspeedwp/.github) for community health files, custom PR templates, and automation standards—always select the correct PR template and follow org instructions for every submission.

The curriculum is divided into three phases:
**Phase 1 – WordPress First (Weeks 1–8):** WordPress core, block editor, Git/GitHub, basic theme exports.
**Phase 2 – Systems & Patterns (Weeks 9–16):** theme.json, design tokens, Figma, block patterns, support workflows.
**Phase 3 – Advanced Concepts (Weeks 17–24):** SCF blocks, WooCommerce blocks, block bindings, testing, performance, Figma design systems & MCP, internship project/outcome.

### Work Streams

-   **WordPress & Themes:** Block themes, templates, patterns, [developer documentation](https://developer.wordpress.org).
-   **Git & GitHub:** Version control, projects, CI, [GitHub Copilot](https://github.com/features/copilot) & MCP.
-   **Web Fundamentals:** HTML, CSS, JS, [accessibility](https://www.w3.org/WAI/WCAG22/quickref/), [performance](https://web.dev/learn-core-web-vitals/).
-   **Design & Figma:** [Dev Mode](https://www.figma.com/dev-mode-guide/), variables, design systems, MCP.
-   **SEO & Content:** Basic SEO, site structure, content workflows.
-   **Client & Support Workflows:** [Zendesk](https://www.zendesk.com), [Asana](https://asana.com), communication standards.

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

| Week | Phase | Focus Theme                                    | Primary Outputs (Short)                           | Key Platforms                                                                                                                                                                                                                                                                                       |
| ---- | ----- | ---------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | 1     | WordPress Core Essentials                      | WP installed locally, core concepts log           | [WordPress.org](https://wordpress.org), [Learn.WordPress](https://learn.wordpress.org)                                                                                                                                                                                                              |
| 2    | 1     | Block Editor Skills + Simple Patterns          | 2–3 simple layouts & patterns in WP               | [Learn.WordPress](https://learn.wordpress.org), [Awesome Copilot Prompts](https://github.com/github/awesome-copilot/tree/main/prompts) — use documentation and code-structure prompts to help write your logs and notes                                                                             |
| 3    | 1     | Git & GitHub Basics                            | Git repo, basic PR, markdown journal              | [Microsoft Learn](https://learn.microsoft.com), [GitHub](https://github.com), [Awesome Copilot](https://github.com/github/awesome-copilot) — start exploring agents and prompts that support Git basics, markdown, and repo setup                                                                   |
| 4    | 1     | Create Block Theme & Site Editor               | Exported theme, simple theme.json                 | [WordPress.org](https://wordpress.org), [Create Block Theme](https://wordpress.org/plugins/create-block-theme/), [Awesome Copilot Instructions](https://github.com/github/awesome-copilot/tree/main/instructions) — use WordPress- and markdown-related instructions when editing theme files       |
| 5    | 1     | theme.json Deep Dive                           | Custom theme.json, notes on tokens                | [developer.wordpress.org](https://developer.wordpress.org), [Learn.WordPress](https://learn.wordpress.org), [Awesome Copilot Prompts](https://github.com/github/awesome-copilot/tree/main/prompts) — use prompts like create-implementation-plan / create-specification to plan theme.json changes  |
| 6    | 2     | Figma Dev Mode + Design Tokens (Intro)         | Figma variables mapped to WP tokens               | [Figma](https://www.figma.com), Design files, [Awesome Copilot MCP Server](https://github.com/github/awesome-copilot#-mcp-server) — explore how MCP can pull design token info into your editor                                                                                                     |
| 7    | 2     | Build WP Patterns Based on Figma               | 2 patterns built from Figma references            | [Figma](https://www.figma.com), WP Site Editor, [Awesome Copilot Agents](https://github.com/github/awesome-copilot/tree/main/agents) — use pattern-, documentation-, or design-related agents to review your block patterns                                                                         |
| 8    | 2     | Support Simulation (Zendesk & Asana)           | Mock tickets, Asana tasks, client-style replies   | [Zendesk](https://www.zendesk.com), [Asana](https://asana.com), [Awesome Copilot Prompts](https://github.com/github/awesome-copilot/tree/main/prompts) — use communication and documentation prompts to draft responses                                                                             |
| 9    | 2     | SCF Blocks (Basics Only)                       | One SCF block with dynamic content                | [Secure Custom Fields](https://www.advancedcustomfields.com), [developer.wordpress.org](https://developer.wordpress.org), [Awesome Copilot Instructions](https://github.com/github/awesome-copilot/tree/main/instructions/wordpress.instructions.md) — follow WP instructions while building blocks |
| 10   | 3     | WooCommerce Blocks                             | Simple Woo storefront page using blocks           | [WooCommerce](https://woocommerce.com), [WordPress](https://wordpress.org), [Awesome Copilot Agents](https://github.com/github/awesome-copilot/tree/main/agents) — try a planning or documentation agent to help design your storefront                                                             |
| 11   | 3     | Block Bindings + Advanced Patterns             | Block using block bindings & pattern registration | [developer.wordpress.org](https://developer.wordpress.org), [Awesome Copilot Prompts](https://github.com/github/awesome-copilot/tree/main/prompts) — use code-review or refactor prompts to improve your bindings implementation                                                                    |
| 12   | 3     | Automated Testing (Playwright + PHPCS)         | One e2e test + CI workflow running                | [Playwright](https://playwright.dev), [GitHub](https://github.com), [Awesome Copilot Prompts](https://github.com/github/awesome-copilot/tree/main/prompts) — use playwright-\* and testing prompts to generate and refine tests                                                                     |
| 13   | 3     | Advanced developer.wp.org – Themes & Templates | Task built from theme dev docs                    | [developer.wordpress.org](https://developer.wordpress.org), [Awesome Copilot Instructions](https://github.com/github/awesome-copilot/tree/main/instructions) — apply relevant instructions for theme files                                                                                          |
| 14   | 3     | Advanced developer.wp.org – Plugins & Security | Secure mini plugin (sanitize/escape/nonce)        | [developer.wordpress.org](https://developer.wordpress.org), [Awesome Copilot Instructions](https://github.com/github/awesome-copilot/tree/main/instructions/security-and-owasp.instructions.md) — follow security best-practice instructions                                                        |
| 15   | 3     | Performance & Accessibility                    | Performance & a11y checklist applied to project   | [web.dev](https://web.dev), [Stark](https://www.getstark.co), [Awesome Copilot Instructions](https://github.com/github/awesome-copilot/tree/main/instructions/a11y.instructions.md) — use a11y and performance instructions to guide fixes                                                          |
| 16   | 3     | REST API & WP-CLI (Light Intro)                | Simple REST usage or WP-CLI task                  | [developer.wordpress.org](https://developer.wordpress.org), [Awesome Copilot Prompts](https://github.com/github/awesome-copilot/tree/main/prompts) — use API- and spec-related prompts to help design endpoints                                                                                     |
| 17   | 3     | Figma Foundations (Tools & UI)                 | Completed beginner Figma course, sample file      | [Figma.com](https://www.figma.com)                                                                                                                                                                                                                                                                  |
| 18   | 3     | Figma Components & Variables                   | Small component set with variables                | [Figma.com](https://www.figma.com)                                                                                                                                                                                                                                                                  |
| 19   | 3     | Figma Design Systems for WordPress             | Mini design system for a WP layout                | [Figma.com](https://www.figma.com)                                                                                                                                                                                                                                                                  |
| 20   | 3     | Figma → theme.json Mapping                     | Mapping document + updated theme.json             | [Figma.com](https://www.figma.com), [WordPress.org](https://wordpress.org)                                                                                                                                                                                                                          |
| 21   | 3     | Figma MCP & AI Workflows                       | Demo integrating Figma MCP into dev workflow      | Figma MCP, [GitHub](https://github.com), [Awesome Copilot MCP Server](https://github.com/github/awesome-copilot#-mcp-server) — configure the server and experiment with design-to-code workflows                                                                                                    |
| 22   | 3     | Final Internship Build – Theme + Blocks        | Theme + 1–2 custom blocks                         | All platforms                                                                                                                                                                                                                                                                                       |
| 23   | 3     | Final Internship Review – Testing & Docs       | Tests, docs, changelog, project board             | [GitHub](https://github.com), [Playwright](https://playwright.dev), [Awesome Copilot Prompts](https://github.com/github/awesome-copilot/tree/main/prompts) — use documentation and changelog prompts for final summaries                                                                            |
| 24   | 3     | Internship Presentation & Retrospective        | Walkthrough, retro, learning log                  | N/A, [Awesome Copilot Agents](https://github.com/github/awesome-copilot/tree/main/agents/mentor.agent.md) — use mentor or retrospective-style agents to reflect on your learning                                                                                                                    |

---

## Global Guidelines & Weekly Checklist

### 1. Standards Overview

| Area              | Intern Must…                                                                                            | Where Details Live                                                                                                                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Version control   | Use branches, PRs, semantic versions, changelogs                                                        | [Git & GitHub Learning](https://learn.microsoft.com), [Awesome Copilot Prompts](https://github.com/github/awesome-copilot/tree/main/prompts) — use git-flow and repo-story prompts to plan work                              |
| Security          | Sanitize/escape data, use nonces, check capabilities                                                    | [WordPress Learning](https://learn.wordpress.org) → [developer.wordpress.org](https://developer.wordpress.org)                                                                                                               |
| Performance       | Avoid heavy queries, conditional enqueues, cache                                                        | [Web Fundamentals](https://web.dev)                                                                                                                                                                                          |
| Accessibility     | Follow [WCAG 2.2 AA](https://www.w3.org/WAI/WCAG22/quickref/), keyboard navigation, contrast, focus     | [Web Fundamentals](https://web.dev), Design & Figma                                                                                                                                                                          |
| Coding standards  | Follow [WPCS](https://developer.wordpress.org/coding-standards/), JS/CSS/HTML standards, markdown guide | [Git & GitHub Learning](https://learn.microsoft.com), [Awesome Copilot Instructions](https://github.com/github/awesome-copilot/tree/main/instructions) — apply relevant language/framework instructions                      |
| Writing on GitHub | Use clear issues/PRs, advanced markdown, templates                                                      | [Git & GitHub Learning](https://learn.microsoft.com), [LightSpeed .github PR Templates](https://github.com/lightspeedwp/.github/tree/develop/.github/PULL_REQUEST_TEMPLATE) — always select the correct template for your PR |

### 2. Weekly Submission Checklist

| Item                                    | Required? | Notes                                                                                                                                                                       |
| --------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Daily markdown log                      | ✅        | Short entries, link to courses/resources                                                                                                                                    |
| Issues created/updated for current work | ✅        | Parent/child issues where needed                                                                                                                                            |
| PRs linked to issues (closing keywords) | ✅        | “Closes #123” etc. Use [LightSpeed PR templates](https://github.com/lightspeedwp/.github/tree/develop/.github/PULL_REQUEST_TEMPLATE) to ensure correct structure and labels |
| README updated                          | ✅        | Summary of week’s work; consider using [Awesome Copilot documentation prompts](https://github.com/github/awesome-copilot/tree/main/prompts) to draft sections               |
| Screenshots / short loom-style video    | ⚠️        | Required for UI/design weeks                                                                                                                                                |
| Figma notes / links                     | ⚠️        | Required in design-related weeks                                                                                                                                            |
| GitHub Project board updated            | ✅        | Statuses accurate                                                                                                                                                           |
| PHPCS / CI checks passing (from W4+)    | ✅        | If failing, notes on debugging; optionally use testing-related prompts from [Awesome Copilot](https://github.com/github/awesome-copilot/tree/main/prompts)                  |
| Changelog entry (from W1+)              | ✅        | SemVer + Keep a Changelog style; optionally use changelog/release-note prompts from [Awesome Copilot](https://github.com/github/awesome-copilot/tree/main/prompts)          |

---

## WordPress Learning

### [Learn.WordPress.org](https://learn.wordpress.org) — Courses

| Level | Priority | Course Name                                                                                                                       | Weeks | Notes (Goal)           |
| ----- | -------- | --------------------------------------------------------------------------------------------------------------------------------- | ----- | ---------------------- |
| 🟢    | 1        | [Getting Started: Get Setup](https://learn.wordpress.org/course/getting-started-with-wordpress-get-setup/)                        | 1     | Basics + install WP    |
| 🟢    | 1        | [Getting Started: Get Familiar](https://learn.wordpress.org/course/getting-started-with-wordpress-get-familiar/)                  | 1–2   | Navigation, content    |
| 🟢    | 2        | [Beginner WordPress User](https://learn.wordpress.org/course/beginner-wordpress-user/)                                            | 1–2   | Reinforce basics       |
| 🟢    | 3        | [Beginner WP Designer](https://learn.wordpress.org/course/beginner-wordpress-designer/)                                           | 2–3   | Block editor skills    |
| 🟢    | 3        | [Beginner WP Developer](https://learn.wordpress.org/course/beginner-wordpress-developer/)                                         | 3–4   | Dev mindset            |
| 🟠    | 1        | [Intermediate WordPress User](https://learn.wordpress.org/course/intermediate-wordpress-user/)                                    | 5–6   | theme.json + patterns  |
| 🟠    | 1        | [Intermediate Theme Developer](https://learn.wordpress.org/course/intermediate-theme-developer/)                                  | 5–7   | Block theme work       |
| 🟠    | 2        | [Develop Your First Low-Code Block Theme](https://learn.wordpress.org/course/develop-your-first-low-code-block-theme/)            | 5–8   | Block theme transition |
| 🟠    | 3        | [Intro to Block Development](https://learn.wordpress.org/course/introduction-to-block-development-build-your-first-custom-block/) | 9–11  | ACF/blocks foundation  |
| 🔴    | 2        | [Advanced WordPress User](https://learn.wordpress.org/course/advanced-wordpress-user/)                                            | 13–16 | For advanced weeks     |

_Sample lessons can be expanded as needed. See curriculum._

---

## [developer.wordpress.org](https://developer.wordpress.org) — Reference Tracks

| Track                                                                               | Key Topics                               | Weeks      | Example Task                 |
| ----------------------------------------------------------------------------------- | ---------------------------------------- | ---------- | ---------------------------- |
| [Security](https://developer.wordpress.org/apis/security/)                          | Sanitising, escaping, nonces, roles      | 9, 13–14   | Harden a simple options form |
| [Theme Dev](https://developer.wordpress.org/themes/)                                | Template hierarchy, theme.json, patterns | 4–5, 11–13 | Add template + pattern       |
| [Block Dev](https://developer.wordpress.org/block-editor/)                          | Block APIs, variations, hooks            | 9–11       | Convert shortcode → block    |
| [REST API](https://developer.wordpress.org/rest-api/)                               | Routes, endpoints, auth                  | 16         | Simple custom route          |
| [Performance](https://developer.wordpress.org/advanced-administration/performance/) | Caching, queries, assets                 | 15         | Optimise queries/assets      |

---

## Security Best Practices Links

| Topic                  | Resource (Link)                                                                                                         | Notes                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Sanitising input       | [sanitize_text_field()](https://developer.wordpress.org/reference/functions/sanitize_text_field/)                       | All text inputs              |
| Escaping output        | [Escaping](https://developer.wordpress.org/apis/security/escaping/)                                                     | Escape before rendering      |
| Data validation        | [Guides](https://developer.wordpress.org/apis/security/data-validation/)                                                | Sanitize & validate guides   |
| Nonces                 | [Nonces API](https://developer.wordpress.org/apis/security/nonces/)                                                     | Proper forms/requests        |
| Roles & capabilities   | [User roles](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/)                              | Gate with current_user_can() |
| Common vulnerabilities | [WordPress Security - Common Vulnerabilities](https://developer.wordpress.org/plugins/security/common-vulnerabilities/) | Review before shipping       |
| Securing input plugins | [Plugin Security Best Practices](https://developer.wordpress.org/plugins/security/)                                     | Connect to ACF block work    |

---

## Design & Figma

### Beginner – Figma Core Skills

| Priority | Topic        | Resource Name (Link)                                                                           | Type    | Notes                    |
| -------- | ------------ | ---------------------------------------------------------------------------------------------- | ------- | ------------------------ |
| 1        | Figma basics | [Figma Design for Beginners 2025](https://www.figma.com/resources/learn-design/)               | Course  | Mandatory                |
| 2        | General Use  | [Figma Help Center](https://help.figma.com/)                                                   | Hub     | For feature deep-dives   |
| 3        | Dev Mode     | [Guide to Dev Mode](https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode) | Article | Connect to Month 5 tasks |

_Intermediate and advanced topics, design systems, variables, and MCP resources can be expanded as needed._

---

## Git & GitHub Learning

### [Learn.Microsoft.com](https://learn.microsoft.com)

| Level | Path / Module (Link)                                                                                                                                                                                        | Weeks | Notes                                                                                                                                    |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 🟢    | [GitHub Foundations – Part 1](https://learn.microsoft.com/en-us/training/paths/github-foundations-part-1/)                                                                                                  | 3     | Before heavy Git use                                                                                                                     |
| 🟢    | [GitHub Foundations – Part 2](https://learn.microsoft.com/en-us/training/paths/github-foundations-part-2/)                                                                                                  | 3–4   |                                                                                                                                          |
| 🟢    | [Markdown & GitHub Pages](https://learn.microsoft.com/en-us/training/modules/communicate-using-markdown/)                                                                                                   | 3–4   | Blogging/journal                                                                                                                         |
| 🟠    | [GitHub Actions – Part 1](https://learn.microsoft.com/en-us/training/paths/automate-workflow-github-actions/) & [Part 2](https://learn.microsoft.com/en-us/training/modules/github-actions-automate-tasks/) | 11–12 | For CI weeks                                                                                                                             |
| 🟠    | [Copilot paths](https://learn.microsoft.com/en-us/training/paths/copilot/)                                                                                                                                  | 6–9   | Alongside Copilot; pair this with [Awesome Copilot](https://github.com/github/awesome-copilot) prompts/agents to practice real workflows |
| 🔴    | [GitHub Advanced Security](https://learn.microsoft.com/en-us/training/paths/github-advanced-security/)                                                                                                      | 13–16 | Optional deep dive                                                                                                                       |

### [Learn.GitHub.com](https://skills.github.com) (Skills)

| Level | Course (Link)                                                                              | Weeks | Output                                                                                                                        |
| ----- | ------------------------------------------------------------------------------------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------- |
| 🟢    | [Introduction to GitHub](https://github.com/skills/introduction-to-github)                 | 3     | Complete intro track                                                                                                          |
| 🟢    | [Communicate Using Markdown](https://github.com/skills/communicate-using-markdown)         | 1–3   | Journal & docs                                                                                                                |
| 🟢    | [Review Pull Requests](https://github.com/skills/review-pull-requests)                     | 4–6   | Practice code reviews                                                                                                         |
| 🟠    | [Getting Started with GitHub Copilot](https://github.com/skills/copilot-codespaces-vscode) | 6–7   | Prep for Copilot; install and connect the [Awesome Copilot MCP Server](https://github.com/github/awesome-copilot#-mcp-server) |
| 🟠    | [Integrate MCP with Copilot](https://github.com/skills/integrate-mcp-with-copilot)         | 9–11  | Tie into MCP weeks; experiment with using Awesome Copilot agents/prompts while MCP is connected                               |
| 🔴    | [AI in Actions](https://github.com/skills/hello-github-actions)                            | 21–22 | Optional automation                                                                                                           |

---

## Web Fundamentals (web.dev)

_Beginner, Intermediate, and Advanced topics with official web.dev links. Mandatory: HTML, CSS, Images, Forms, JavaScript. Intermediate: Design, Accessibility, Performance. Advanced: PWA (optional), Testing for Playwright._

---

## SEO & Content – [Yoast Academy](https://yoast.com/academy/)

| Level | Course / Training (Link)                                                                                                                  | Weeks | Goal                 |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----- | -------------------- |
| 🟢    | [SEO for Beginners](https://yoast.com/academy/course/seo-for-beginners/)                                                                  | 4–6   | Core SEO concepts    |
| 🟢    | [WordPress for Beginners](https://yoast.com/academy/course/wordpress-for-beginners/)                                                      | 1–2   | Complement Learn.WP  |
| 🟢    | [WP Block Editor Training](https://yoast.com/academy/course/wordpress-block-editor/)                                                      | 2     | Editor familiarity   |
| 🟢    | [Yoast SEO Plugin Training](https://yoast.com/academy/course/yoast-seo-for-wordpress-plugin/)                                             | 5–7   | SEO in WP            |
| 🟠    | [Site Structure Training](https://yoast.com/academy/course/site-structure/)                                                               | 6–8   | Nav & linking        |
| 🟠    | [Keyword Research](https://yoast.com/academy/course/keyword-research/) / [Copywriting](https://yoast.com/academy/course/seo-copywriting/) | 7–9   | Useful, not blocking |
| 🔴    | [Technical SEO](https://yoast.com/academy/course/technical-seo/) & Advanced                                                               | 13–16 | Optional specialism  |

---

## Video Library ([YouTube](https://www.youtube.com))

### Approved Channels

| Category    | Channel Name (URL)                                                                                             | Purpose                        |
| ----------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| WordPress   | [WordPress](https://www.youtube.com/@wordpress), [OllieWP](https://www.youtube.com/@OllieWP)                   | WP & block themes              |
| Dev tools   | [VS Code](https://www.youtube.com/@code), [GitHub](https://www.youtube.com/@GitHub)                            | Editor, Git, Actions           |
| AI          | [OpenAI](https://www.youtube.com/@OpenAI), [Anthropic](https://www.youtube.com/@Anthropic-ai)                  | AI fluency                     |
| Design/a11y | [Figma](https://www.youtube.com/@Figma), [Stark](https://www.youtube.com/@getstarkco)                          | Design systems & accessibility |
| Business    | [Content Snare](https://www.youtube.com/@ContentSnare)                                                         | Client content collection      |
| Others      | [JamieWP](https://www.youtube.com/@jamiewp), [Design System Guide](https://www.youtube.com/@designsystemguide) | Various                        |

### Team Playlists

| Topic   | Playlist Name (Link)                                                                       | Notes              |
| ------- | ------------------------------------------------------------------------------------------ | ------------------ |
| Copilot | [GitHub Copilot](https://www.youtube.com/playlist?list=PLlrxD0HtieHgr23PS2SBSf4VJdlW0dVn0) | LS shared playlist |
| VS Code | [VSCode](https://www.youtube.com/@code/playlists)                                          |                    |
| ChatGPT | [ChatGPT](https://www.youtube.com/@OpenAI/playlists)                                       |                    |
| Figma   | [Figma Courses](https://www.youtube.com/@Figma/playlists)                                  | Complete set       |
| Stark   | [Stark Accessibility](https://www.youtube.com/@getstarkco/playlists)                       | a11y focus         |

---

## Profiles & Accounts Setup

| Month | Platform                                              | Action                                  | Done? |
| ----- | ----------------------------------------------------- | --------------------------------------- | ----- |
| 1     | [GitHub](https://github.com/signup)                   | Create profile + README + links         | ☐     |
| 1     | [WordPress.org](https://login.wordpress.org/register) | Create profile, connect Learn.WP        | ☐     |
| 1     | [Microsoft Learn](https://learn.microsoft.com)        | Create account, bookmark required paths | ☐     |
| 1     | [Figma](https://www.figma.com/signup)                 | Create account, join LSX files          | ☐     |
| 1     | [OllieWP](https://olliewp.com/academy/)               | Create account for Block Theme Academy  | ☐     |
| 2     | [Zendesk](https://www.zendesk.com)                    | Access LightSpeed support instance      | ☐     |
| 2     | [Asana](https://asana.com/create-account)             | Invite + join relevant projects         | ☐     |
| ...   | ...                                                   | ...                                     | ☐     |

---

> For full org standards and detailed instructions, see [LightSpeed custom-instructions.md](https://github.com/lightspeedwp/.github/blob/develop/.github/custom-instructions.md).
