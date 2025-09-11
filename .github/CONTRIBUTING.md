# Contributing to LSX Demo Theme

Welcome to the LSX Demo Theme project! This repository serves as both a learning journey for WordPress block theme development and a professional onboarding project for LightSpeed Agency. Whether you're a new developer, intern, or experienced contributor, this guide will help you effectively contribute to the project.

## 🎯 Project Overview

The LSX Demo Theme is a WordPress block theme based on Twenty Twenty-Five, designed to teach modern WordPress development practices while implementing the LSX Design System. This project serves multiple audiences:

- **New Developers & Interns**: Structured learning path with 14+ guided issues
- **Contributors**: Ongoing theme development and maintenance
- **Mentors & Instructors**: Teaching tools and evaluation frameworks

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (v9 or later)
- [WordPress](https://wordpress.org/) (latest version)
- [WordPress Studio](https://wordpress.com/start/wordpress-studio) or local WordPress environment
- [Git](https://git-scm.com/) and [GitHub](https://github.com/) account
- [VS Code](https://code.visualstudio.com/) with recommended extensions

### Development Environment Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR-USERNAME/lsx-demo-theme.git
   cd lsx-demo-theme
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Git Hooks**
   ```bash
   npm run prepare
   ```

4. **WordPress Environment**
   - Use [WordPress Studio](https://wordpress.com/start/wordpress-studio) (recommended)
   - Or set up a local WordPress environment ([LocalWP](https://localwp.com/), Docker, etc.)

For detailed setup instructions, see [DEVELOPMENT.md](../DEVELOPMENT.md).

## 📚 Learning Journey (For New Contributors)

If you're new to WordPress block theme development, follow our structured learning path:

### Phase 1: Foundation (Issues 1-3)
- Initial Setup: WordPress Studio
- Fork, Clone & Update README
- Install Create Block Theme Plugin

### Phase 2: Core Development (Issues 4-7)
- Configure theme.json
- Create Header & Footer Template Parts
- Build Homepage Template
- Add Style Variations

### Phase 3: Professional Skills (Issues 8-12)
- Export Theme & Push to GitHub
- Sync to WordPress.com with Studio
- Practice with Figma Dev Mode
- Documentation and GitHub Skills

### Phase 4: Review and Submission (Issues 13-14)
- Midpoint Review Request
- Final Project Submission

**📋 Start Here**: Check the [Issues tab](../../issues) for your first assignment and follow the sequential learning path.

## 🛠️ Development Workflow

### 1. Issue-Based Development

All work is managed through GitHub Issues:

- **New Contributors**: Follow the numbered learning issues (1-14)
- **Regular Contributors**: Pick up open issues labeled `good first issue` or `help wanted`
- **Feature Requests**: Create an issue using the appropriate template before coding

### 2. Branch Strategy

```bash
# For learning journey issues
git checkout -b issue/01-wordpress-studio-setup

# For feature work
git checkout -b feature/new-block-pattern

# For bug fixes
git checkout -b fix/accessibility-contrast
```

### 3. Development Commands

```bash
# Start development with hot reloading
npm start

# Build for production
npm run build

# Run linting
npm run lint:js
npm run lint:css
npm run lint:php

# Run tests
npm test
npm run test:a11y
```

### 4. Commit Guidelines

Use clear, descriptive commit messages:

```bash
# Good examples
git commit -m "Add header template part with LSX branding"
git commit -m "Fix accessibility contrast in button colors"
git commit -m "Update theme.json with new color palette"

# Follow conventional commits when possible
git commit -m "feat: add dark mode style variation"
git commit -m "fix: resolve layout shift in mobile navigation"
```

## 🎨 Design System Guidelines

This theme implements the [LSX Design System](https://lsx.rocks/design-system):

### Color Palette
- **Base (#121212)**: Primary text, dark sections
- **Neutral (#4A4A4A)**: Secondary text, UI elements
- **Light (#F4F4F4)**: Background, light sections
- **Accent 1 (#FF5F1F)**: Safety Orange - Primary actions
- **Accent 2 (#00FF85)**: Neon Green - Interactive elements
- **Accent 3 (#3895FF)**: Chrome Blue - Links, secondary actions

### Typography
- **Primary Font**: Lexend (Variable) - Body text, navigation
- **Secondary Font**: Manrope (Variable) - Headings, UI elements

### Spacing Scale
Use consistent spacing values defined in `theme.json`:
- X-Small: 0.5rem
- Small: 1rem
- Medium: 1.5rem
- Large: 2rem
- X-Large: 3rem
- XX-Large: 4rem

## 📝 Code Standards

### WordPress Standards
- Follow [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/)
- Use [WordPress Block Theme best practices](https://developer.wordpress.org/themes/block-themes/)
- Ensure [accessibility compliance](https://make.wordpress.org/accessibility/handbook/) (WCAG AA)

### theme.json Guidelines
- Use named tokens consistently (primary, accent, etc.)
- Follow design specs from LSX Design System
- Include fluid values for responsive design
- Validate JSON structure before committing

### PHP Best Practices
- Use correct text domain: `lsx-theme`
- Sanitize all output with appropriate escaping functions
- Follow secure coding practices
- Use WordPress enqueue functions for assets

### Block Patterns
- Use descriptive comments to document sections
- Apply theme.json variables for styling
- Ensure patterns work across different contexts
- Test with various content types

## 🧪 Testing Requirements

### Automated Testing
```bash
# Run all tests
npm test

# Accessibility tests
npm run test:a11y

# Linting
npm run lint
```

### Manual Testing Checklist
- [ ] Test across different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify responsive design on various screen sizes
- [ ] Check accessibility with screen readers
- [ ] Test with different content lengths
- [ ] Validate color contrast ratios
- [ ] Ensure keyboard navigation works

### WordPress Testing
- [ ] Test in WordPress Site Editor
- [ ] Verify theme customization options work
- [ ] Check template hierarchy functionality
- [ ] Test with various WordPress versions

## 📋 Pull Request Process

### Before Submitting
1. **Test Your Changes**: Run all lints, builds, and tests
2. **Update Documentation**: Modify relevant docs if needed
3. **Check Accessibility**: Ensure WCAG AA compliance
4. **Review Your Code**: Self-review for quality and standards
5. **Update README**: Document any significant changes

### PR Guidelines
1. **Use Descriptive Titles**: Clearly describe what the PR accomplishes
2. **Reference Issues**: Link to related issues with "Fixes #XX" or "Closes #XX"
3. **Provide Context**: Explain why the changes are needed
4. **Include Screenshots**: For visual changes, show before/after
5. **Request Specific Reviews**: Tag relevant maintainers if needed

### PR Template Checklist
- [ ] Changes have been tested locally
- [ ] Code follows project standards
- [ ] Documentation has been updated
- [ ] Accessibility requirements met
- [ ] No breaking changes (or properly documented)
- [ ] Related issues are referenced

## ⏰ Time Tracking (For Learning Journey)

If you're participating in the learning journey:

1. **Set Up Harvest**: Create a free [Harvest](https://www.harvestapp.com/) account
2. **Install Extension**: Add the [Harvest Chrome Extension](https://chrome.google.com/webstore/detail/harvest-time-tracking/)
3. **Log Daily**: Track time spent on each issue/task
4. **Project Name**: Use "LSX Demo Theme"
5. **Link to Issues**: Connect time entries to GitHub issues

## 🔍 Code Review Process

### For Contributors
- All changes require review before merging
- Address feedback promptly and professionally
- Ask questions if review comments are unclear
- Update your PR based on feedback

### For Reviewers
- Focus on code quality, standards, and functionality
- Provide constructive, specific feedback
- Test changes locally when possible
- Approve when all criteria are met

### Review Criteria
- [ ] Code follows WordPress and project standards
- [ ] Changes align with LSX Design System
- [ ] Accessibility requirements are met
- [ ] Performance impact is acceptable
- [ ] Documentation is updated appropriately
- [ ] Tests pass and coverage is maintained

## 🆘 Getting Help

### For Learning Journey Participants
- Use issue comments to ask questions
- Join LightSpeed Slack `#interns` channel
- Request help from mentors through review issues
- Check the [docs/](../docs/) folder for detailed guides

### For General Contributors
- Create a discussion for general questions
- Use issue templates for bug reports or feature requests
- Check existing documentation before asking
- Be patient and respectful when seeking help

### Resources
- [WordPress Block Theme Handbook](https://developer.wordpress.org/themes/block-themes/)
- [LSX Design System](https://lsx.rocks/design-system)
- [WordPress Site Editor Guide](https://wordpress.org/support/article/site-editor/)
- [GitHub Skills](https://skills.github.com/)

## 🏷️ Issue and PR Labels

### Learning Journey Labels
- `learning-journey`: Part of the structured learning path
- `week-1`, `week-2`, etc.: Weekly milestone issues
- `review-requested`: Ready for mentor feedback
- `beginner-friendly`: Good for first-time contributors

### Development Labels
- `bug`: Something isn't working correctly
- `enhancement`: New feature or improvement
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention needed
- `accessibility`: Related to a11y requirements
- `design-system`: Related to LSX Design System implementation

### Priority Labels
- `priority-high`: Urgent issues
- `priority-medium`: Important but not urgent
- `priority-low`: Nice to have improvements

## 🌟 Recognition and Career Development

### Learning Journey Completion
Completing the learning journey provides:
- Portfolio-quality WordPress block theme
- GitHub contribution history
- Professional development documentation
- Potential internship/employment opportunities

### Ongoing Contribution Benefits
- WordPress community involvement
- Open source contribution experience
- Mentorship opportunities
- Technical skill development

## 📄 License

By contributing to LSX Demo Theme, you agree that your contributions will be licensed under the same license as the project (GPL-2.0-or-later).

## 🤝 Code of Conduct

This project follows the [WordPress Community Code of Conduct](https://make.wordpress.org/handbook/community-code-of-conduct/). By participating, you agree to uphold these standards:

- Be welcoming and inclusive
- Be respectful and professional
- Focus on constructive feedback
- Help create a positive learning environment

---

## 🚀 Ready to Contribute?

### For New Learning Journey Participants
1. Review this contributing guide
2. Set up your development environment
3. Check the [Issues tab](../../issues) for Issue #1
4. Start with "Initial Setup: WordPress Studio"
5. Follow the sequential learning path

### For Experienced Contributors
1. Browse open issues for `good first issue` or `help wanted` labels
2. Join discussions about new features or improvements
3. Help review PRs from learning journey participants
4. Contribute to documentation and testing

**Thank you for contributing to the LSX Demo Theme project!** Your contributions help build a better learning experience for WordPress developers and improve the overall quality of the theme.

---

*Questions about contributing? Create an issue or reach out in the LightSpeed Slack workspace.*