# Brandon’s Onboarding – LightSpeed

This document is split into two parts:  
1. **Reference & Guidelines** → things to keep in mind while working.  
2. **Actionable Tasks** → things you can actually complete and check off.  

---

## 📖 Reference & Guidelines

- Always prioritize **security first** → strong passwords, 1Password, passkeys.  
- Do everything possible in **Site Editor**, switch to `theme.json` only if needed.  
- Use **WordPress default spacing scale** + LightSpeed’s extended scale.  
- Use **REM values** (1rem = 16px). Scale typography in steps of 8 where possible.  
- Prefer `clamp()` / VW units for **fluid type & spacing**.  
- Always prefer **core WordPress functions** + hooks over custom code.  
- Long-term focus → **block development** (JS build, automated testing).  
- **Blocker rule**: stop after 15–30 mins stuck → escalate to Ash.  
- Use **Loom** videos or Markdown notes for blockers.  
- Weekly study aim: ~1 hour/day.  

---

## ✅ Actionable Tasks

### 🔒 Security
- [x] Install **1Password for Mac** → [Download](https://1password.com/downloads/mac)  
- [x] Set up 1Password on **Mac + iPhone**.  
- [x] Generate random passwords (don’t save in browsers).  
- [x] Turn on **passkeys** wherever available.  
- [ ] Check your email exposure → [Have I Been Pwned](https://haveibeenpwned.com/)  
- [ ] Enable ongoing monitoring → [Mozilla Monitor](https://monitor.mozilla.org/)  

### 💻 Core Mac Setup
- [x] Sign in to Chrome and **sync bookmarks**.  
- [ ] Enable **macOS dictation** → [Guide](https://support.apple.com/en-ca/guide/mac-help/mh40584/mac)  
- [ ] Install [Slack for Mac](https://slack.com/intl/en-gb/downloads/mac)  
- [ ] Install [Google Drive for desktop](https://www.google.com/drive/download/)  
- [ ] Install dev essentials in this order:  
  - [ ] [VS Code Insiders](https://code.visualstudio.com/insiders/)  
  - [ ] [Xcode](https://developer.apple.com/xcode/)  
  - [ ] [Git](https://git-scm.com/downloads/mac)  
  - [ ] [Homebrew](https://brew.sh/)  
  - [ ] [Node.js](https://nodejs.org/en/download/)  
  - [ ] [Composer](https://getcomposer.org/download/)  
  - [ ] [GitHub Desktop](https://desktop.github.com/download/)  
- [x] Install helper tools: [Claude](https://claude.ai/download), [ChatGPT](https://chatgpt.com/download/), [Loom](https://www.loom.com/download), [CCleaner](https://www.ccleaner.com/)  
- [ ] Install [Figma (standard + beta)](https://www.figma.com/downloads/)  

### 🌍 Accounts & Community
- [ ] Create **WordPress.org account** → [Register](https://login.wordpress.org/register)  
- [x] Bookmark: [Patterns](https://wordpress.org/patterns/), [Photos](https://wordpress.org/photos/), [5ftF Example](https://wordpress.org/five-for-the-future/pledge/awesome-motive/)  
- [x] Explore example WP.org profiles:  
  - [x] [feedmymedia](https://profiles.wordpress.org/feedmymedia/)  
  - [x] [Rich Tabor](https://profiles.wordpress.org/richtabor/)  
  - [x] [lanche86](https://profiles.wordpress.org/lanche86/)  
  - [x] [John James Jacoby](https://profiles.wordpress.org/johnjamesjacoby/)  
- [ ] Join **WordPress Community Slack** → [Join](https://wordpress.slack.com/)  
- [ ] DM Ash (`feedmymedia`) a hello.  
- [ ] Set up **GitHub profile** (README, photo, bio) → [Docs](https://docs.github.com/en/get-started/start-your-journey/setting-up-your-profile)  
- [ ] Set up **Figma community profile** (photo, bio, bookmark LSX Design System).  

### 🛠 Local WP Dev Tooling
- [ ] Install and test [Studio](https://developer.wordpress.com/studio/) ([Docs](https://developer.wordpress.com/docs/))  
- [x] Install and test [Local WP](https://localwp.com/)  

### 📚 Learning Plan (Week 1)
- [ ] Read → [FullSiteEditing.com](https://fullsiteediting.com/)  
- [ ] Complete lessons:  
  - [ ] [Font Sizes](https://fullsiteediting.com/lessons/theme-json-font-size/)  
  - [ ] [Layout & Spacing](https://fullsiteediting.com/lessons/theme-json-layout-and-spacing-options/#h-how-to-use-the-default-spacing-scale)  
- [ ] Try **Utopia Calculators**: [Spacing](https://utopia.fyi/space/calculator/), [Type](https://utopia.fyi/type/calculator), [Grid](https://utopia.fyi/grid/calculator), [Clamp](https://utopia.fyi/clamp/calculator)  
- [ ] Follow → [Developer Pathway](https://learn.wordpress.org/learning-pathway/developer/)  
- [ ] Start → [FSE Course](https://fullsiteediting.com/courses/full-site-editing-for-theme-developers/)  
- [ ] Explore → [OllieWP Block Academy](https://olliewp.com/block-academy/)  
- [ ] Read → [Make WordPress – AI](https://make.wordpress.org/ai/)  
- [ ] Read → [LightSpeed: WordPress Block Developer](https://lightspeedwp.agency/worpress-block-developer/)  
- [ ] Subscribe on YouTube: [Figma](https://www.youtube.com/@Figma), [GitHub](https://www.youtube.com/@GitHub), [VS Code](https://www.youtube.com/@code), [Anthropic](https://www.youtube.com/@anthropic-ai), [Google](https://www.youtube.com/@Google), [OpenAI](https://www.youtube.com/@OpenAI), [Stark](https://www.youtube.com/@getstarkco), [OllieWP](https://www.youtube.com/@olliewp)  

### 🏗 First Implementation Tasks (Week 1–2)
- [ ] Recreate selected **LSX Design System patterns/layouts** in LSX Demo Theme:  
  - [ ] Build layout in **Site Editor**.  
  - [ ] Define tokens in **theme.json** (colors, fontSizes, spacing).  
  - [ ] Add hover/active states where Site Editor falls short.  
  - [ ] Use **Utopia outputs** for fluid tokens.  
  - [ ] Document everything in Markdown.  
- [ ] Create sample site locally → rebuild 2–3 layouts using **Grid block**.  

### 📤 Deliverables for Ash
- [x] Confirm **1Password** is running.  
- [ ] Share links to your **WordPress.org**, **GitHub**, and **Figma** profiles.  
- [ ] Loom or screenshot of your **local WP** environment.  
- [ ] Markdown **progress note** (courses done, DS patterns built, blockers).  
