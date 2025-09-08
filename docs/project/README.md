# 🏗️ LSX Demo Theme Project Brief

This is your core practical assignment. You’ll build a custom block theme based on our [LSX Design System](https://lsx.rocks/design-system).

### Project Goals
- Create a fully functional block theme
- Leverage Studio + GitHub
- Follow our issue + PR workflow

See [Detailed Brief →](brief.md)



# Block Theme Test Project

This project is designed to help you practise customising a WordPress block theme using the site editor, exporting your changes and documenting your process. The estimated time commitment is **5–10 hours**.

## Objective

Recreate a simple, responsive homepage using the WordPress Site Editor and the **Create Block Theme** plugin. Your final output should be an exported block theme that can be activated on any WordPress site. Throughout the project you will document your work in Markdown files and create GitHub issues for each major task.

## Steps

### 1. Setup & Orientation

1. Install LocalWP (or another local development environment) and create a fresh WordPress site.
2. Install the latest default WordPress theme (e.g. Twenty Twenty‑Four).
3. Install and activate the **Create Block Theme** plugin.
4. Create a GitHub repository and link it to your local project.
5. Document the setup process in `README.md` at the root of your repository.

### 2. Design Brief

Recreate the following layout in the Site Editor:

1. **Header** – Logo on the left and navigation on the right, with sticky behaviour on scroll.
2. **Hero Section** – Full‑width background image with an overlay headline, sub‑headline and primary call‑to‑action button.
3. **Feature Grid** – Three columns, each with an icon, heading and short description.
4. **Newsletter Signup** – Email field and subscribe button.
5. **Footer** – Logo, social icons and copyright notice.
6. Ensure the layout is **fully responsive** on mobile and tablet.

Use core blocks and block patterns where possible. Avoid custom CSS; aim to achieve the design via `theme.json` settings and the Site Editor.

### 3. Export Theme

1. Once satisfied with your layout and styles, use **Create Block Theme** to export your customised theme.
2. Ensure all styles are stored in `theme.json` and that no additional CSS files are added.

### 4. Documentation & Reflection

1. Create an `instructions.md` file explaining your approach, what worked well and what didn’t, and any questions you have.
2. Create GitHub issues for each major task (setup, header, hero section, feature grid, newsletter signup, footer).
3. Open a pull request for your final exported theme, using clear commit messages.
4. Use the “Week X Submission” issue template to summarise your work, challenges and reflections.

## Evaluation Criteria

Your submission will be assessed on the following criteria:

| Criterion | Description |
| --- | --- |
| **Completion** | All layout sections are implemented and match the brief. |
| **Responsiveness** | The site behaves correctly across screen sizes. |
| **Clean configuration** | Styles are defined via `theme.json` without extra CSS files. |
| **Documentation quality** | README and instruction files clearly explain your approach and include screenshots or diagrams. |
| **Commit & PR hygiene** | Commits are incremental with meaningful messages; pull requests are well‑organised. |
| **Reflection** | You demonstrate awareness of what you learned and where you struggled. |

## Bonus Points

You can earn extra credit by:

- Using block patterns to simplify repeated layouts.
- Creating custom template parts (e.g. a reusable header or footer).
- Considering accessibility (e.g. using semantic blocks and alt text for images).

## Submission

Push your repository to GitHub and include a link in your application. Ensure the repository contains:

- The exported theme in a `theme‑export` folder.
- A `README.md` outlining your setup and approach.
- An `instructions.md` file reflecting on the project.
- GitHub issues and pull requests documenting your work.

This project provides a practical introduction to block theme development and sets the foundation for the remainder of the internship.
