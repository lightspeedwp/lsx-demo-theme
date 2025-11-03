# Release Tags Guide

This document provides information about release tags in the LSX Demo Theme repository and how to view them.

## Current Release Tag

The current release tag is: **v1.0.0-beta**

- **Tag Name**: v1.0.0-beta
- **Release Name**: 1.0 Beta
- **Commit**: ba05681dc27ad60fe82aa59de20d47d35c41a2e7
- **Date**: September 27, 2025
- **Author**: Brandon Marshall

## Viewing Release Tags

### List All Tags

To view all release tags in the repository:

```bash
git tag -l
```

Or to see tags with their commit messages:

```bash
git tag -l -n
```

### Fetch Tags from Remote

If you've just cloned the repository and don't see tags, fetch them:

```bash
git fetch --tags
```

### View Tag Details

To see detailed information about a specific tag:

```bash
git show v1.0.0-beta
```

Or to see just the commit information:

```bash
git show v1.0.0-beta --no-patch --format=fuller
```

### View Tag in GitHub

You can also view releases and tags directly on GitHub:

- **Releases Page**: https://github.com/lightspeedwp/lsx-demo-theme/releases
- **Tags Page**: https://github.com/lightspeedwp/lsx-demo-theme/tags
- **v1.0.0-beta Release**: https://github.com/lightspeedwp/lsx-demo-theme/releases/tag/v1.0.0-beta

## Release Information

### v1.0.0-beta (Initial Release)

This is the initial release of the LSX Demo Theme - a comprehensive WordPress block theme designed for learning and production use with Full Site Editing (FSE) capabilities.

#### Key Features

- **Full Site Editing (FSE)** support with comprehensive `theme.json` v3 configuration
- **150+ GitHub Copilot assets** including specialized agents, chat modes, instructions, and prompts
- **LSX Design System integration** with contemporary and post-modern aesthetic approaches
- **Playwright end-to-end testing** with accessibility validation using axe-core integration
- **Modern development tooling** with WordPress packages ecosystem integration
- **WCAG 2.1 AA compliance** with semantic HTML, proper heading hierarchy, and color contrast

For complete release notes, see the [CHANGELOG.md](./CHANGELOG.md) file or visit the [GitHub release page](https://github.com/lightspeedwp/lsx-demo-theme/releases/tag/v1.0.0-beta).

## Creating New Release Tags

When creating a new release, follow these steps:

1. Update version numbers in:
   - `style.css` (Theme Version header)
   - `package.json` (version field)
   - `readme.txt` (version information)
   - `CHANGELOG.md` (add new version entry)

2. Commit the version changes:
   ```bash
   git add .
   git commit -m "Bump version to X.X.X"
   ```

3. Create and push the tag:
   ```bash
   git tag -a vX.X.X -m "Release version X.X.X"
   git push origin vX.X.X
   ```

4. The GitHub release workflow will automatically:
   - Build the theme
   - Package it as a zip file
   - Create a GitHub release with the tag

## Release Workflow

The repository includes an automated release workflow (`.github/workflows/release.yml`) that triggers when a tag matching the pattern `v*` is pushed. This workflow:

1. Checks out the code
2. Sets up Node.js environment
3. Installs dependencies
4. Builds the theme
5. Packages the theme (excluding development files)
6. Creates a GitHub release with the packaged theme zip file

## Semantic Versioning

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version (X.0.0) - Incompatible changes
- **MINOR** version (0.X.0) - New features, backward compatible
- **PATCH** version (0.0.X) - Bug fixes, backward compatible
- **Pre-release** labels - alpha, beta, rc (e.g., v1.0.0-beta)

## Support

For questions about releases or tags, please:

- Check the [CHANGELOG.md](./CHANGELOG.md) for version history
- Visit the [GitHub releases page](https://github.com/lightspeedwp/lsx-demo-theme/releases)
- Create an issue using our [issue templates](./.github/ISSUE_TEMPLATE/)
