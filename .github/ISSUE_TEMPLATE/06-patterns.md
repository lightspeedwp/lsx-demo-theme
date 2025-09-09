---
name: Block pattern
about: Register a block pattern and its category using PHP.
title: "[Pattern] <pattern name>"
labels: [pattern]
assignees: []
---

Block patterns are reusable layouts built with blocks and registered via PHP. Use this template to propose, create or update a pattern.

## Registration (PHP)

Provide the PHP code that registers the pattern. Use `register_block_pattern()` and specify the title, description, categories and content. Include the pattern name and slug.

## Pattern category

If this pattern belongs to a new category, describe the category name and register it using `register_block_pattern_category()` or similar functions.

## Acceptance criteria

- [ ] Pattern renders correctly in the block inserter and matches the design brief.
- [ ] Category appears in the pattern inserter under the correct name.
- [ ] Pattern uses only approved blocks and follows `theme.json` styles.

## Notes

Additional information, links to Figma designs or resources.
