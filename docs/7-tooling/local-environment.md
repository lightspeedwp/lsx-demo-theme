# LightSpeed Local Development Tooling Guide

A unified guide for WordPress interns and junior contributors at LightSpeed. Covers required tools, local environment setup, browser extensions, PWAs, and workflow alignment with the Block Theme & Plugin Internship.

Always use your LightSpeed email or Google account.

Profile handles: @namesurname (lowercase).
Use the same professional photo across GitHub, Figma, WordPress.org.
Store everything in 1Password, use 2FA.
Ask for help in the #interns Slack channel.

---

## Overview

This guide lists software, browser extensions, PWAs, and best practices for setting up and maintaining your WordPress local development environment at LightSpeed.

---

## Local Environment Setup

LightSpeed uses WordPress Studio as the official local setup (no MAMP/LocalWP/phpMyAdmin needed).

### Step-by-Step Instructions: Studio Sites

1. Install Studio

    - Download WordPress Studio for macOS/Windows and open it.

2. Create & Configure the Ollie Theme Site

    - Create a new Studio site named `Ollie`.
    - Path (example macOS): `/Users/username/Studio/ollie/`
    - Go to `wp-content/themes/`
    - Clone: `https://github.com/olliewp/ollie`
    - Open the theme folder in VS Code.
    - Activate the theme in WP Admin.

3. Create & Configure the LSX Demo Site

    - Create a new site `LSX Demo`.
    - Path: `/Users/username/Studio/lsx-demo/`
    - Fork the LSX theme → clone your fork → open in VS Code.
    - Activate the LSX theme.

4. Import Dummy Content (LSX Demo)

    - Download Gutenberg Test Data XML.
    - WP Admin → Tools → Import → WordPress Importer.
    - Upload XML, assign posts to yourself, and select “Download & import file attachments.”

5. Intern Workflow Notes
    - Use GitHub Desktop to pull/commit.
    - Always open VS Code in the theme directory.
    - Studio shows changes instantly.
    - Ask questions in Slack.

---

## Core Tooling

### Applications

| Application          | Download / Notes                                                       |
| -------------------- | ---------------------------------------------------------------------- |
| WordPress Studio     | Local WP dev environment. No MAMP/phpMyAdmin needed.                   |
| GitHub Desktop       | Branch/commit management; integrates with GitHub.                      |
| Visual Studio Code   | Code editor. Recommended extensions: Prettier, ESLint, GitHub Copilot. |
| Figma (Beta)         | UI/design; join LS libraries; use Stark plugin for accessibility.      |
| Sublime Text         | Lightweight text editor.                                               |
| Xcode                | iOS simulator / compilation (macOS only).                              |
| 1Password            | Secure credential/API key manager. Use 2FA.                            |
| Slack                | Team communication; join LS workspace.                                 |
| Google Drive Desktop | File sync with cloud.                                                  |
| Adobe Acrobat Reader | PDF viewer/annotation.                                                 |
| CCleaner             | System performance/hygiene.                                            |
| Loom                 | Screen recording (desktop/Chrome extension).                           |
| Harvest              | Time tracking (Chrome extension).                                      |
| Fireflies.ai         | AI meeting notes (Chrome extension).                                   |
| BugHerd              | Website feedback tool (Chrome extension).                              |
| VLC                  | Media player (audio/video).                                            |

### Browsers

-   Google Chrome — main dev browser (https://google.com/chrome)
-   Chrome Dev — for experimental API testing (https://google.com/chrome/dev)
-   Safari — built-in macOS, for cross-browser testing
-   Edge — (https://microsoft.com/edge) — useful AI features
-   Opera — (https://opera.com/download) — VPN + alternative browser
-   Brave — (https://brave.com/download) — privacy-focused
-   Mobile browsers: Mobile Chrome, Mobile Edge, Mobile Opera, Mobile Brave, Mobile Safari — for mobile testing

---

## Chrome Extensions Installation Checklist

Extension — Purpose — Login Required

-   1Password — Securely save, generate, and autofill passwords — Yes
-   Harvest Time Tracker — Log time within Chrome — Yes
-   Asana — Create/search tasks in browser — Yes
-   BugHerd — Visual website feedback — Yes
-   Awesome Screen Recorder & Screenshot — Screenshots/screen recordings — Optional
-   Fireflies.ai — Meeting recorder/transcriber — Yes
-   Checkbot — SEO, speed, security site tester — No
-   Chrono Download Manager — Download scheduling/management — No
-   Colorblindly — Simulate color blindness — No
-   ColorZilla — Eyedropper & color picker — No
-   Enhanced GitHub — Repo/file enhancements for GitHub — No
-   Figma — Quick access to Figma files — Yes
-   Google Docs Offline — Docs/Sheets/Slides offline — Yes
-   HeadingsMap — View heading structure for SEO/accessibility — No
-   Image Downloader — Bulk download images — No
-   Lighthouse — Audit performance, SEO, accessibility — No
-   Lipsum Generator — Generate lorem ipsum text — No
-   Measure-it — Ruler to measure web elements — No
-   Office Editing for Docs/Sheets/Slides — View/edit Office files in Chrome — No
-   RSS Subscription — Adds RSS feeds via toolbar button — No
-   Save Image As Type — Save images as PNG/JPG/WebP — No
-   Save to Google Drive — Save web content to Google Drive — Yes
-   Stark Accessibility Checker — Automated accessibility checks — Yes
-   SVG Export — Download SVGs as vectors/raster — No
-   TabA11y — Visualize tab order for accessibility — No
-   Tag Assistant — Diagnose Tag Manager/gtag.js installations — Optional
-   WAVE Evaluation Tool — Web accessibility audit — No
-   Web Developer — Extra dev tools for browser — No
-   WhatFont — Identify webpage fonts — No
-   ChatGPT Search — Set ChatGPT as default search — Optional

---

## Progressive Web Apps (PWAs) to Install

-   GitHub — Code hosting, version control, collaboration
-   GitHub Docs — Documentation and guides for GitHub
-   GitHub Codespaces — Cloud IDE for development
-   YouTube — For approved channels only
-   Google Developers — Documentation, resources, and APIs
-   Google AI Studio — Google’s AI experimentation and tools
-   Google Docs / Sheets / Slides — Office productivity apps
-   Google Drive — File storage and syncing (web app)
-   Google Meet — Video conferencing
-   Google Tasks — Task management
-   Google Keep — Notes and reminders
-   NotebookLM — AI-powered note-taking
-   Google PageSpeed Insights & Lighthouse Viewer — Website performance and accessibility audits
-   Harvest — Time tracking and reporting

---

## AI Tools

-   ChatGPT — Web/mobile app; use for research, summarizing, drafting code, and meeting notes
-   Claude — Use for summarization or safe/concise output
-   Gemini — Google’s multimodal AI for writing, code, and research
-   GitHub Copilot — VS Code extension for pair-programming and code suggestions

---

## Additional Notes

-   Use consistent profiles everywhere.
-   Studio replaces phpMyAdmin/MAMP.
-   Use 1Password + 2FA.
-   Keep apps updated weekly.
-   Dummy content: Gutenberg XML.
-   Async workflow: GitHub + Slack.

---

## Alignment with Block Theme & Plugin Internship

This guide ensures:

-   Local environment matches agency standards.
-   Tools support block theme development (patterns, CPTs, theme.json).
-   Accessibility and design workflow integrated.
-   Required tools installed to qualify for full-time hire.

---
