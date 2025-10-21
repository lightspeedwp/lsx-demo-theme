# 🧱 LSX Demo Theme Project
Welcome to the LightSpeed LSX Demo Theme challenge! This repository forms the foundation of your WordPress Block Theme learning journey and serves as both a new hire onboarding project and ongoing development reference.

---

## 🚀 Project Goals

- Build a functional and well-structured WordPress block theme using best practices
- Learn to work with `theme.json`, block templates, and Figma design assets
- Demonstrate proficiency in GitHub, VS Code, Copilot, and Studio or LocalWP
- Document your process and track time using Harvest
- Understand theme customization and maintenance workflows

---

## 📖 About This Theme

This theme is based on the WordPress [Twenty Twenty-Five](https://make.wordpress.org/core/2024/08/15/introducing-twenty-twenty-five/) theme and is being used as a trial project for Lightspeed Agency. It's designed to be thematically 'contemporary' and 'post-modern' with custom styling and functionality.

---

## 🛠️ Tools Required

- [VS Code](https://code.visualstudio.com/)
- [GitHub Desktop or CLI](https://desktop.github.com/)
- [LocalWP](https://localwp.com/) *or* [WordPress Studio](https://developer.wordpress.com/studio/)
- [Create Block Theme Plugin](https://wordpress.org/plugins/create-block-theme/)
- [Harvest Time Tracking](https://www.harvestapp.com/)
- [Figma](https://figma.com) — Use our [LSX Design System](https://lsx.rocks/design-system)

---

## 🕒 Time Tracking

You are required to log your time with [Harvest](https://www.harvestapp.com/):

1. Sign up for a free account
2. Install the [Harvest Chrome Extension](https://chrome.google.com/webstore/detail/harvest-time-tracking/)
3. Log time via GitHub issues and link sessions to tasks
4. Use the project name: `LSX Demo Theme`
5. Time should be logged daily

## 🚀 Getting Started

1. **Clone this repository** to your local development environment
2. **Set up your WordPress development environment** using LocalWP or WordPress Studio
3. **Install the theme** in your WordPress installation
4. **Install recommended plugins** (Create Block Theme, etc.)
5. **Review the Issues tab** for your first assigned tasks
6. **Start time tracking** with Harvest for all development work

---

## 📝 Development Workflow

1. **Create or select an issue** from the Issues tab. All tasks are managed as GitHub Issues added to a GitHub Project. Each issue represents a deliverable for a defined milestone.  
Make regular commits with meaningful messages and close issues via PRs.
2. **Create a branch** for your work (if working on significant changes)
3. **Track your time** in Harvest while working
4. **Make your changes** following WordPress block theme best practices
5. **Test your changes** thoroughly in your local environment
6. **Document any new customizations** in this README
7. **Commit and push** your changes with clear commit messages

---

## 🗂️ Project Tasks (Issues)

All tasks are managed as GitHub issues. Each issue represents a specific learning milestone or development task. Check the [Issues tab](../../issues) for your assigned tasks and track your progress there.

---

## 🎨 Theme Customizations & Technical Documentation

- Build a functional and well-structured WordPress block theme using best practices.
- Learn to work with `theme.json`, block templates, and Figma design assets.
- Demonstrate proficiency in GitHub, VS Code, Copilot, and Studio or LocalWP.
- Document your process and track time using Harvest.

### Fonts & Typography System

Current variable fonts:
- **Lexend** (Primary UI / body) – Variable 400–800
- **Manrope** (Secondary / UI details) – Variable 400–700

Font families are registered via `theme.json` presets (see `settings.typography.fontFamilies`).

#### Font Size Scale (New)
We migrated from legacy named sizes (small, medium, large, x-large, xx-large, etc.) to a numeric semantic scale for clarity and future fluid design. Editor presets now appear with human‑friendly names mapped to numeric slugs:

| Name      | Slug | Size (rem) | Typical Usage |
|-----------|------|------------|---------------|
| Tiny      | 100  | 0.75rem    | Micro labels, fine print |
| Base      | 200  | 1rem       | Body paragraphs, default text |
| Small     | 300  | 1.25rem    | Lead paragraphs, meta emphasis |
| Medium    | 400  | 1.5rem     | Section subheadings, promo text |
| Large     | 500  | 2rem       | H3/H4 replacements, feature callouts |
| X-Large   | 600  | 2.5rem     | H2 scale, strong hero subheads |
| Huge      | 700  | 3rem       | Primary hero headings |
| Gigantic  | 800  | 4rem       | Large splash / marketing hero |
| Colossal  | 900  | 5rem       | Limited-use hero / showcase titles |

### Color System

Colors were consolidated into a semantic + tonal ladder strategy. The palette intentionally disables WordPress defaults (`defaultPalette: false`). Available tokens:

Semantic base:
- `base` (Primary text / dark surfaces)
- `neutral` (Secondary text / subtle UI)
- `light` (Base background)
- `contrast` (High contrast background / text inverse)
- `contrast-transparent` (Overlay / tinted backgrounds)

Brand & functional:
- `brand` (Primary brand accent)
- `cta` (High‑attention action elements)
- `primary` / `primary-light` / `primary-dark` (Supporting brand hue range)

Tonal Neutrals (grayscale ladder): `neutral-100` → `neutral-900` (100 = lightest, 900 = darkest) for controlled elevation, borders, and subtle backgrounds.

Tonal Accent (brand hue ladder): `accent-100` → `accent-900` (centered at accent-500 = brand core) used for hover states, tinted backgrounds, gradients, and contextual emphasis. Prefer moving up/down the ladder for interaction states rather than opacity mixing.

Usage Guidelines:
- Base text should use `base` or appropriate neutral step for contrast against backgrounds.
- Large background fills: choose `light`, `contrast`, or a light accent step (100–300) with sufficient WCAG contrast for foreground text.
- Buttons: `cta` background + `base` text (hover blends use color-mix for subtle transitions).
- Borders/dividers: neutral ladder (400–600) avoiding pure black for softer UI.
- Avoid raw hex colors in patterns — always reference `var(--wp--preset--color--<slug>)` for consistency and future theming.

### Spacing Tokens
Custom spacing presets (`spacingSizes`) provide a small set of named clamps for vertical rhythm:
- Tiny (slug 20) – 10px fixed
- X-Small (30) – 20px fixed
- Small (40) – 30px fixed
- Regular (50) – clamp(30px, 5vw, 50px)
- Large (60) – clamp(30px, 7vw, 70px)
- X-Large (70) – clamp(50px, 7vw, 90px)
- XX-Large (80) – clamp(70px, 10vw, 140px)

These are used through `var(--wp--preset--spacing--<slug>)`. A future `spacingScale` may be introduced; keep slugs unique if added.

### Editor Mapping Quick Reference
In the block editor preset pickers:
- Font size dropdown shows new names (Tiny→Colossal). Choose numeric slugs for any new design work.
- Color picker lists semantic & tonal tokens; select closest semantic before tonal when intent is content meaning rather than aesthetics.
- Spacing controls (padding/margin) allow manual values; prefer presets for repeatable patterns.

### Migration Notes
- Patterns being refactored: legacy font size attributes/classes replaced with numeric slugs (e.g., `fontSize":"x-large"` → `fontSize":"700"`).
- Do not introduce new patterns using legacy sizes.

### Theme Modifications

**Removed from Twenty Twenty-Five:**
- All Style Variations (except '01-evening')
- Default fonts that came with TT5 theme
- Section styles that came with TT5 theme

**Added Custom Elements:**
- Custom Shadow 'LSX Shadow' for buttons
- 'Dark Mode' style variation and color palette variation 
- Lexend & Manrope variable fonts according to LSX Design System
- Custom block styles and patterns

### Images/Media

*Documentation to be completed - please update as media assets are added*

---

## 🤝 Getting Help

- Review the [LSX Design System](https://lsx.rocks/design-system) for design guidelines
- Check WordPress [Block Theme Developer Handbook](https://developer.wordpress.org/themes/block-themes/)
- Ask questions in the project Issues or team communication channels
- Reference the Twenty Twenty-Five theme documentation for baseline functionality

---

## 📋 Maintenance Notes

This section tracks ongoing customizations and changes for future developers:

*Update this section as you make significant theme modifications, including rationale for changes and any important technical details for future maintenance.*

See [📌 Project Issue Board](./projects) for an overview. 

---

## 📚 Study Curriculum

Refer to the [/docs folder](https://github.com/lightspeedwp/lsx-demo-theme/tree/main/docs) for the 12-week study plan and further documentation.

---

## ✅ Weekly Deliverables

Each week you are expected to:

- [ ] Log your progress in the templates provided in [/logs folder](https://github.com/lightspeedwp/lsx-demo-theme/tree/main/logs)
- [ ] Push commits to your forked repo
- [ ] Update `README.md` with changes and progress
- [ ] Use Issues + PRs to manage and submit tasks
- [ ] Sync your local site to your staging site using Studio and GitHub commits

---

## 🤝 Support

You can ask questions in the LightSpeed Slack workspace in the `#interns` channel.

Good luck and have fun!
