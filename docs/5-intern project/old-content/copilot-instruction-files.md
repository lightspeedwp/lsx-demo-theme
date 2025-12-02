# Enhancing LSX Demo Theme with Copilot, Testing, and CI Integration

## Add GitHub Copilot Repository Instructions

To give GitHub Copilot more context about your **LSX Demo Theme** project, add a repository-specific instructions file. Create a Markdown file at .github/copilot-instructions.md in the root of the repo [**docs.github.com**](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions#:~:text=1,instructions.md). This file will contain natural-language notes about your project (purpose, structure, conventions, etc.), which Copilot will **automatically include** with every chat or code request in this repository [**docs.github.com**](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions#:~:text=The%20instructions%20in%20the%20file,you%20submit%20to%20Copilot%20Chat). (No special action is needed after adding the file – Copilot Chat will pick it up as a reference.)

When writing the instructions, keep them **brief and broadly applicable**. Focus on high-level guidance that’s relevant to most development tasks in this repo [**docs.github.com**](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions#:~:text=The%20instructions%20you%20add%20to,the%20context%20of%20the%20repository). According to GitHub’s best practices, you should consider including:

**Project Overview** – A short description of what the theme is and its goals (e.g. *“A WordPress block theme for building lightweight, WooCommerce-compatible websites”*).
**Folder Structure** – Key directories and what they contain (e.g. /templates for full-page templates, /parts for reusable template parts, /patterns for PHP pattern definitions, etc.) [**docs.github.com**](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions#:~:text=,relevant%20version%20numbers%20or%20configurations).
**Coding Standards** – The style conventions or guidelines you follow. For a WordPress theme, mention that you adhere to WordPress Coding Standards for PHP (PHPCS) and use semantic HTML, proper escaping/sanitization, etc. [**docs.github.com**](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions#:~:text=,relevant%20version%20numbers%20or%20configurations). Also note any naming conventions (for example, function names in snake_case, class names in PascalCase, 4-space indentation, etc.).
**Tools/Frameworks** – List the major tech the project uses (WordPress Block Editor, WooCommerce integration, PHP, CSS/SCSS, maybe a build tool if any) [**docs.github.com**](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions#:~:text=,relevant%20version%20numbers%20or%20configurations). Include relevant versions or dependencies if important (e.g. “Requires WordPress 6.x”, “built with Node.js & Gulp for asset bundling”, etc.).
### Note

*The repository instructions should be ****single-source of truth**** for Copilot about your project. Keep the language simple and avoid highly specific or conflicting directives. GitHub warns that overly strict rules (e.g. “always respond in a certain style”) or references to external repos may not work as intended *[***docs.github.com***](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions#:~:text=,a%20certain%20level%20of%20detail). Once you commit the .github/copilot-instructions.md, you can verify Copilot is using it by opening a Copilot Chat in VS Code or on GitHub – the file will appear as a referenced source in the chat UI whenever Copilot uses it [**docs.github.com**](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions#:~:text=In%20Copilot%20Chat%27s%20immersive%20view,that%20contains%20the%20instructions%20file).

### Providing the Custom Instructions file

Below is an example **copilot-instructions.md** tailored for the LSX Demo Theme. You can use this as a starting point and adjust details as needed:



```markdown

# Project Overview

LSX Demo Theme is a WordPress **block theme** (Full Site Editing) designed to be lightweight, responsive, and WooCommerce-compatible. It’s a learning project to practice theme development with modern WordPress features (Gutenberg blocks, `theme.json` configuration, etc.).


## Folder Structure

- **templates/** – Full-page templates (HTML) for pages (e.g. 404.html, index.html) using block markup.

- **parts/** – Reusable template parts (HTML), e.g. `header.html` and `footer.html` for site header/footer.

- **patterns/** – PHP files registering custom block patterns (pre-designed block layouts, like a hero section).

- **functions.php** – Theme setup in PHP (enqueueing assets, theme supports, hooking into WordPress).

- **theme.json** – Global theme configuration for styles, color palette, typography, and layout settings.

- **style.css** – Theme stylesheet and metadata (contains theme header info for WordPress).


## Coding Standards & Best Practices

- Follows **WordPress Coding Standards** for PHP:contentReference[oaicite:9]{index=9} (4-space indent, meaningful naming, secure code: escape outputs and sanitize inputs).

- Use semantic HTML5 elements for structure (e.g. `<header>`, `<footer>`, `<main>` in templates) for better SEO and accessibility.

- Ensure **accessibility**: use proper heading hierarchy, alt text for images, and ARIA labels when needed.

- All strings are translatable (wrapped in `__() or _e()` for i18n) and text domains consistent.

- **Performance**: no heavy scripts; uses core Gutenberg features instead of large JS frameworks. Optimize images and assets for fast load.


## Tools & Frameworks

- Built for **WordPress 6+** and the Gutenberg block editor. Uses **Full Site Editing** concepts (block templates and Template Parts).

- Integrates with **WooCommerce** (provides basic WooCommerce template support out-of-the-box).

- Development uses Node.js (see `package.json`) – e.g. might use build tools like Gulp or Webpack for asset compilation (CSS/JS) if configured.

- Uses **PHP 7.4+** features and adheres to modern PHP best practices. No external PHP frameworks – relies on WordPress functions and hooks.

```


*(Save this content as **.github/copilot-instructions.md** in your repo. Copilot will then use these instructions in all suggestions for this project.)*