# Recommended Software & Installation Guide

For: Interns and Junior Developers working on the LSX-demo-theme and the full Study Curriculum (WordPress, GitHub, Figma, Web.dev, SEO, Design Systems).

This guide aligns directly with the updated Developer Study Curriculum, covering all practical tools for WordPress, block theme, plugin, and design system workflows. Everything here is minimal, scalable, and referenced in the curriculum tracks/tabs.

---

## 1. Local WordPress Development Environment

| Tool              | Why Use It                                               | Platforms     | Install Steps                                                       | Reference                     |
| ----------------- | -------------------------------------------------------- | ------------- | ------------------------------------------------------------------- | ----------------------------- |
| WordPress Studio  | Recommended for block theme dev, fast setup, open-source | Windows/macOS | Download Studio → install → open → Add Site                         | developer.wp.org, Weekly Plan |
| Local by Flywheel | User-friendly UI, supports live links, NGINX/Apache      | Windows/macOS | Download Local → install → create new site                          | Learn.WordPress               |
| Docker            | Portable/replicable WP containers (advanced)             | All           | Download Docker → install → run official WP image or docker-compose | web.dev, Advanced Weeks       |

---

## 2. Code Editor / IDE

| Tool               | Why Use It                                          | Platforms | Install Steps                                           | Reference                     |
| ------------------ | --------------------------------------------------- | --------- | ------------------------------------------------------- | ----------------------------- |
| Visual Studio Code | Lightweight, extensible, built-in Git, rich plugins | All       | Download VS Code → install → add extensions (see below) | All Coding Tasks, Weekly Plan |
| Sublime Text       | Fast, lightweight text editor for quick edits       | All       | Download Sublime Text → install                         | Quick edits/companion use     |
| Xcode (optional)   | iOS Simulator for mobile responsive testing         | macOS     | Install via Mac App Store                               | Mobile/iOS testing            |

**Suggested Extensions**

-   PHP Intelephense
-   WordPress Snippets
-   Prettier
-   Markdown All in One
-   GitLens
-   Figma for VS Code
-   Playwright/Test Explorer

---

## 3. Version Control & Workflow

| Tool             | Why Use It               | Platforms | Install Steps                                       | Reference             |
| ---------------- | ------------------------ | --------- | --------------------------------------------------- | --------------------- |
| Git              | Essential for versioning | All       | Download Git → install                              | Git & GitHub Learning |
| GitHub Desktop   | GUI for Git/GitHub       | Win/Mac   | Download GitHub Desktop → install → connect repo(s) | GitHub Desktop Docs   |
| VS Code Git      | In-editor Git workflow   | All       | Built in                                            | Weekly Checklist      |
| GitHub CLI (adv) | Command line workflow    | All       | Download GitHub CLI                                 | Advanced Weeks        |

---

## 4. Debugging & Database Tools

| Tool          | Why Use It                      | Platforms | Install Steps                    | Reference             |
| ------------- | ------------------------------- | --------- | -------------------------------- | --------------------- |
| Query Monitor | View SQL queries, hooks, errors | WP plugin | Install in WP Admin              | Weekly Plan/Debugging |
| Debug Bar     | Debugging info in admin toolbar | WP plugin | Install in WP Admin              | Weekly Plan/Debugging |
| Adminer       | Lightweight DB management       | All (PHP) | Download Adminer PHP file, use   | Advanced Weeks/DB     |
| phpMyAdmin    | Classic MySQL management        | All (PHP) | Included in local stack/Download | Weekly Plan/DB        |

---

## 5. FTP/SFTP Client (Optional)

| Tool      | Why Use It           | Platforms | Install Steps      | Reference |
| --------- | -------------------- | --------- | ------------------ | --------- |
| FileZilla | Secure file transfer | All       | Download FileZilla | As needed |

---

## 6. API Testing Tool (Optional)

| Tool    | Why Use It                  | Platforms | Install Steps              | Reference                   |
| ------- | --------------------------- | --------- | -------------------------- | --------------------------- |
| Postman | Debug REST APIs, plugin dev | All       | Download Postman → install | REST API, Advanced WP Tasks |

---

## 7. Design, Patterns, and Accessibility

| Tool/Platform           | Why Use It           | Platforms    | Install Steps                            | Reference             |
| ----------------------- | -------------------- | ------------ | ---------------------------------------- | --------------------- |
| Figma                   | UI, design systems   | Web          | Sign up Free → join LSX files            | Design & Figma        |
| Stark                   | Accessibility checks | Web, browser | Install Chrome Extension or Figma Plugin | Accessibility Weeks   |
| Learn.WordPress.org     | WP learning/patterns | Web          | Online course                            | Weekly Plan           |
| developer.wordpress.org | Dev reference        | Web          | Online docs                              | Advanced WP, Security |

---

## 8. Web Fundamentals & Testing

| Tool/Platform | Why Use It                | Platforms | Install Steps             | Reference              |
| ------------- | ------------------------- | --------- | ------------------------- | ---------------------- |
| web.dev       | HTML, CSS, JS, a11y       | Web       | Online tutorials          | Web Fundamentals       |
| Playwright    | Automated browser testing | All       | npm install -g playwright | Advanced/Testing Weeks |
| Jest          | JS unit testing           | All       | npm install -g jest       | Advanced/Testing Weeks |

---

## 9. SEO & Content Collection

| Tool          | Why Use It                | Platforms | Install Steps          | Reference     |
| ------------- | ------------------------- | --------- | ---------------------- | ------------- |
| Yoast SEO     | SEO plugin for WP         | WP plugin | Install Yoast in Admin | SEO & Content |
| Content Snare | Client content collection | Web       | Sign up                | Video Lib/SEO |

---

## 10. Video & Learning Channels

| Channel Name  | Recommended Use                  | Reference            |
| ------------- | -------------------------------- | -------------------- |
| WordPress     | Block/theme education            | Video Library        |
| OllieWP       | Block theme education            | Video Library        |
| Figma         | Design systems/UI tutorials      | Design & Figma/Video |
| Stark         | Accessibility in design          | Accessibility        |
| GitHub        | Version control/features         | Git & GitHub         |
| VS Code       | Editor workflows/extensions      | Code Editor          |
| OpenAI        | AI fluency                       | Advanced/Copilot     |
| Content Snare | Content collection best practice | SEO & Content        |

_(See curriculum for more team playlists and advanced learning channels)_

---

## 11. Suggested Installation Order

1. Choose and set up your local development environment: WordPress Studio (recommended), Local by Flywheel, or Docker
2. Install Visual Studio Code
3. Optionally: Install Sublime Text
4. Optionally: Install Xcode
5. Add VS Code extensions: PHP Intelephense, WordPress Snippets, Prettier, GitLens, Markdown All in One, Figma for VS Code, Playwright
6. Install Git and GitHub Desktop
7. Configure Git integration in VS Code or use GitHub Desktop/CLI
8. Install Query Monitor and Debug Bar in WordPress
9. Set up phpMyAdmin / Adminer
10. Create a Figma account and join LSX/team files
11. Add Stark for accessibility: Figma Plugin or Chrome Extension
12. Add FileZilla (only for remote FTP/SFTP)
13. Install Postman for API tasks
14. Install Playwright and Jest
15. Subscribe/bookmark key video playlists: WordPress, OllieWP, Figma, Stark, GitHub, VS Code, OpenAI, Content Snare
16. Optionally: Install CCleaner
17. Install VLC for media playback and Loom for screen recording

---

## Summary Table

| Purpose                       | Recommended Tool(s)                                   | Reference Tab(s)              |
| ----------------------------- | ----------------------------------------------------- | ----------------------------- |
| Local WordPress dev           | WordPress Studio / Local by Flywheel / Docker         | Weekly Plan                   |
| Containerised environments    | Docker                                                | Advanced, Web Fundamentals    |
| Code editing/Git integration  | VS Code (+ extensions), Sublime Text (optional)       | Code Editor, Git              |
| iOS simulation/mobile testing | Xcode (macOS only, optional)                          | Testing, Mobile               |
| Version control GUI/CLI       | GitHub Desktop, VS Code, GitHub CLI                   | Git & GitHub                  |
| Debugging WP sites            | Query Monitor, Debug Bar                              | Weekly Plan, Debugging        |
| DB management                 | Adminer / phpMyAdmin                                  | Weekly Plan, DB               |
| FTP/SFTP                      | FileZilla                                             | Remote/Client Work            |
| REST API dev/testing          | Postman                                               | REST API, Advanced            |
| Design & DS work              | Figma, Stark                                          | Design & Figma, Accessibility |
| Accessibility checks          | Stark                                                 | Accessibility                 |
| Automated testing             | Playwright, Jest                                      | Testing Weeks                 |
| SEO/content collection        | Yoast SEO, Content Snare                              | SEO & Content, Video          |
| Online tutorials/reference    | web.dev, Learn.WordPress.org, developer.wordpress.org | Web, WP, Advanced             |
| Video learning                | YouTube, VLC, Loom                                    | Video Library                 |
| System performance/cleanup    | CCleaner (optional)                                   | Mac maintenance               |

---

## Notes

-   All software, plugins, and platforms map directly to tracks/tabs/weeks in the Study Curriculum.
-   Sign in with your LightSpeed Google account and use your professional handle (@namesurname) across all services.
-   VLC recommended for video/audio previews. Loom for screen recording.
-   CCleaner is optional but useful for Mac system maintenance.
-   Sublime Text is optional for quick edits; Xcode is optional for iOS simulation.
-   For Chrome extensions, web apps, mobile apps, and AI tools, see sister guides in this repo.
