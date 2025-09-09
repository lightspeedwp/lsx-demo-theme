---
name: Template part
about: Create or update a reusable template part such as a header, footer or sidebar.
title: "[Template Part] <part name>"
labels: [template-part]
assignees: []
---

This issue is used when working on individual template parts. Template parts are reusable pieces like headers, footers or sidebars that can be assembled into full templates.

## Topic / part

Specify which part you are creating or modifying (header, footer, sidebar or other).

## Registering the part

Describe how the template part will be registered in PHP or the Site Editor. Include any necessary PHP code (e.g. `register_block_pattern_category` or `register_block_pattern`) and reference documentation where applicable.

## Theme integration

Explain how this part will be added to `theme.json` or incorporated into templates. For example, update the `templateParts` section of `theme.json` or create a new `parts/` file.

## Acceptance criteria

- [ ] Part renders correctly in all templates that include it.
- [ ] Styling is handled via `theme.json` and not inline CSS.
- [ ] Accessibility best practices are followed (e.g. navigation landmarks, alt text).

## Notes

Additional context, links or questions.
