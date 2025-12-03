---
name: "Fork, Clone & Update README"
about: Fork the LSX Demo Theme repo, clone it locally, and update the README.md
title: "Fork, Clone & Update README"
labels: ["task", "git"]
assignees: []
---

## Objective
Fork the LSX Demo Theme repository, clone it to your local machine, and update the README.md file with your personal introduction and setup confirmation.

## Background
This task introduces you to the Git workflow that you'll use throughout the project. You'll be working with the LSX Demo Theme, which is based on WordPress Twenty Twenty-Five theme with custom branding and styling.

## Prerequisites
- Git installed on your computer
- GitHub account created
- Basic understanding of Git commands
- Completed: WordPress Studio setup

## Repository Information
- **Source Repository:** `lightspeedwp/lsx-demo-theme`
- **Current Theme Base:** WordPress Twenty Twenty-Five
- **Custom Features:** LSX branding, custom fonts (Lexend & Manrope), custom color palette

## Step-by-Step Instructions

### 1. Fork the Repository
- [ ] Navigate to [https://github.com/lightspeedwp/lsx-demo-theme](https://github.com/lightspeedwp/lsx-demo-theme)
- [ ] Click the "Fork" button in the top-right corner
- [ ] Select your GitHub account as the destination
- [ ] Keep the repository name as `lsx-demo-theme`
- [ ] Ensure "Copy the main branch only" is checked
- [ ] Click "Create fork"

### 2. Clone Your Fork Locally
- [ ] On your forked repository page, click the green "Code" button
- [ ] Copy the HTTPS URL (should be `https://github.com/[your-username]/lsx-demo-theme.git`)
- [ ] Open terminal/command prompt on your computer
- [ ] Navigate to your desired development directory
- [ ] Run the clone command:
```bash
git clone https://github.com/[your-username]/lsx-demo-theme.git
cd lsx-demo-theme
```

### 3. Explore the Repository Structure
- [ ] List the main files and directories:
```bash
ls -la
```
- [ ] Examine key theme files:
  - `README.md` - Project documentation
  - `theme.json` - Theme configuration with LSX branding
  - `style.css` - Main theme stylesheet
  - `functions.php` - Theme functionality
- [ ] Check existing template structure:
```bash
ls templates/
ls parts/
```

### 4. Understand the Current Theme Configuration
- [ ] Open `theme.json` and review:
  - Custom color palette (Jet Black, Safety Orange, Neon Green, etc.)
  - Typography settings (Lexend and Manrope fonts)
  - Layout configurations
- [ ] Review `README.md` to understand:
  - Current font choices and rationale
  - Color palette with hex values
  - Theme modifications from Twenty Twenty-Five base

### 5. Update README.md
- [ ] Create a new branch for your changes:
```bash
git checkout -b update-readme-introduction
```
- [ ] Open `README.md` in your preferred text editor
- [ ] Add your personal introduction section after the existing content:

```markdown

## Personal Learning Journey

### About Me
**Name:** [Your Name]  
**Role/Background:** [Your role/background]  
**Learning Goals:** [What you hope to achieve with this project]  
**Start Date:** [Current date]

### Development Environment Setup
- [x] WordPress Studio installed and configured
- [x] Repository forked and cloned successfully
- [x] Local development environment ready
- [ ] Theme uploaded to local WordPress site

### Repository Exploration Notes
After exploring the codebase, I found:
- **Theme Base:** WordPress Twenty Twenty-Five with extensive LSX customizations
- **Color Palette:** 6 custom colors including Safety Orange (#FF5F1F) and Neon Green (#00FF85)
- **Typography:** Lexend (body) and Manrope (secondary) variable fonts
- **Templates:** [List any templates you noticed in /templates directory]
- **Style Variations:** 01-evening and dark-mode variations available

### Questions & Initial Observations
[Add any questions or observations about the theme structure]
```

### 6. Commit and Push Changes
- [ ] Stage your changes:
```bash
git add README.md
```
- [ ] Commit with a descriptive message:
```bash
git commit -m "Add personal introduction and environment setup confirmation"
```
- [ ] Push to your fork:
```bash
git push origin update-readme-introduction
```

### 7. Create a Pull Request (Optional Learning)
- [ ] Go to your forked repository on GitHub
- [ ] Click "Compare & pull request" for your new branch
- [ ] Add a descriptive title and comment
- [ ] Create the pull request (Note: This is for learning; don't merge yet)

## Documentation Requirements
Update your `learning-journal.md`:

```markdown
# Git Workflow & Repository Setup - [Date]

## Repository Analysis
- **Forked from:** lightspeedwp/lsx-demo-theme
- **Theme Type:** WordPress Block Theme
- **Base Theme:** Twenty Twenty-Five
- **Key Customizations:**
  - Custom LSX color palette with 6 colors
  - Lexend and Manrope variable fonts
  - Custom shadow styles
  - Style variations (01-evening, dark-mode)

## Git Commands Used
- `git clone` - Downloaded repository locally
- `git checkout -b` - Created feature branch
- `git add` - Staged changes
- `git commit` - Committed changes with message
- `git push` - Pushed changes to remote

## Repository Structure Observations
[Your notes about the theme structure, files, and organization]

## Next Steps
Ready to install the theme in WordPress Studio and begin customization.
```

## Acceptance Criteria
- [ ] Repository successfully forked to your GitHub account
- [ ] Local clone created and accessible
- [ ] README.md updated with personal introduction
- [ ] Changes committed and pushed to your fork
- [ ] Repository structure explored and understood
- [ ] Key theme files (theme.json, style.css, functions.php) reviewed
- [ ] Documentation updated in learning journal

## Key Files to Review
- `theme.json` - Contains the custom LSX color palette and typography settings
- `README.md` - Current project documentation with font and color details
- `functions.php` - Theme functionality and enqueued scripts
- `/templates/` - Block theme templates
- `/parts/` - Template parts (header, footer variations)
- `/styles/` - Style variations including dark-mode

## Troubleshooting
**Clone fails:**
- Verify the repository URL
- Check your internet connection
- Ensure Git is properly installed

**Can't find repository after forking:**
- Check your GitHub profile repositories
- Verify you're logged into the correct GitHub account

**Push fails:**
- Verify you're pushing to your fork, not the original repository
- Check your Git credentials

## Time Estimate
45-60 minutes including repository exploration and documentation.

---
**Note:** This task establishes your development workflow. Take time to understand the theme structure as it will inform your future modifications.