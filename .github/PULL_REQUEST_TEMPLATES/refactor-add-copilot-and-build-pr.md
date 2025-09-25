---
name: Pull Request
about: Submit a pull request to propose changes to a LightSpeed WordPress project.
title: '[PR] Refactor: Add Copilot and Build Improvements'
description: 'Pull request template for all LightSpeed WordPress projects.'
labels: ['needs review', 'pull request', 'triage']
assignees: []
projects: []
milestone: ''
type: 'pull_request'
mode: 'agent'
---

<!--
Thank you for contributing to a LightSpeed project! Please fill out this template as completely as possible to help us review your pull request efficiently.
For guidance, see our [CONTRIBUTING guidelines](../.github/CONTRIBUTING.md) and [Code of Conduct](../.github/CODE_OF_CONDUCT.md).
-->

## Description

This pull request refactors and enhances the LSX Demo Theme to improve contributor recognition, funding integration, documentation, and developer experience. Key changes include:

-   Update `.all-contributorsrc` for improved contributor recognition and project details
-   Add `.github/FUNDING.yml` for GitHub Sponsors integration and funding options
-   Revise `.gitignore` to clarify `composer.lock` inclusion for reproducible builds
-   Enhance `DEVELOPMENT.md` with inline documentation and setup instructions
-   Update `README.md` with comprehensive project overview and funding details
-   Introduce optimized VS Code workspace configuration for WordPress development

---

## Type of Change

-   [ ] Bugfix (non-breaking change which fixes an issue)
-   [ ] New feature (non-breaking change which adds functionality)
-   [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
-   [x] Documentation Update
-   [x] Code Refactor / Review
-   [x] Performance Improvement
-   [ ] Test or CI Update
-   [ ] Other (please describe):

---

## Benefits

-   Improved contributor recognition and project transparency
-   Easier funding and sponsorship options for ongoing development
-   Clearer setup and onboarding for new contributors
-   Enhanced documentation and inline guidance
-   Optimized developer experience in VS Code
-   Better reproducibility and build reliability

## Possible Drawbacks

-   Minor documentation changes may require contributors to review updated instructions
-   Workspace configuration may prompt extension installs for new contributors

## Alternate Designs

-   Considered keeping legacy documentation and configuration, but opted for a comprehensive refactor to align with current best practices and organizational standards.

---

## Checklist

-   [x] I agree to follow this project's [Code of Conduct](../.github/CODE_OF_CONDUCT.md)
-   [x] I have read the [CONTRIBUTING guidelines](../.github/CONTRIBUTING.md)
-   [x] My code follows the code style of this project
-   [x] Linting and tests pass locally with my changes
-   [x] I have added or updated documentation as needed
-   [x] I have added tests to cover my change
-   [x] All new and existing tests pass

---

## How to Test

1. Review the updated documentation in `README.md` and `DEVELOPMENT.md` for clarity and completeness
2. Confirm that `.all-contributorsrc` and `.github/FUNDING.yml` are present and accurate
3. Validate that `.gitignore` correctly excludes build artifacts and includes `composer.lock`
4. Open the workspace in VS Code and verify recommended extensions and settings
5. Run `npm install`, `composer install`, and `npm test` to confirm reproducible builds and passing tests

---

## Applicable Issues

Closes # (add issue number if applicable)

---

## Changelog Entry

> Changed - Improved contributor recognition and project details
> Added - GitHub Sponsors integration and funding options
> Changed - Clarified composer.lock inclusion in .gitignore
> Changed - Enhanced DEVELOPMENT.md and README.md documentation
> Added - Optimized VS Code workspace configuration

---

## Credits

Props @ashleyshaw
