---
name: "Configure theme.json (Phase 1)"
about: Set up theme.json with basic typography, spacing, color palette and layout settings
title: "Configure theme.json (Phase 1)"
labels: ["build", "theme-development"]
assignees: []
---

## Objective
Configure and enhance the `theme.json` file with comprehensive typography, spacing, color palette, and layout settings according to WordPress block theme best practices and LSX design system requirements.

## Background
The LSX Demo Theme already has a solid `theme.json` foundation based on the LSX design system. In this phase, you'll:
- Review and understand the existing configuration
- Make targeted improvements to spacing and layout
- Enhance typography settings
- Add custom CSS properties for advanced styling

## Prerequisites
- LSX Demo Theme cloned and accessible locally
- WordPress Studio site running with the theme
- Create Block Theme plugin installed
- Basic understanding of JSON syntax

## Current theme.json Analysis
The existing theme.json includes:

### Existing Color Palette
- **Base:** #121212 (Jet Black)
- **Neutral:** #4A4A4A (Asphalt Gray)  
- **Light:** #F4F4F4 (Concrete White)
- **Accent 1:** #FF5F1F (Safety Orange)
- **Accent 2:** #00FF85 (Neon Green)
- **Accent 3:** #3895FF (Chrome Blue)

### Existing Typography
- **Primary Font:** Lexend (Variable) - Body text, links, captions
- **Secondary Font:** Manrope (Variable) - Headers and UI elements

## Step-by-Step Instructions

### 1. Backup Current theme.json
- [ ] Navigate to your cloned repository
- [ ] Create a backup copy:
```bash
cp theme.json theme.json.backup
```
- [ ] Document current file size and structure

### 2. Review Current Configuration
- [ ] Open `theme.json` in your code editor
- [ ] Review the existing structure:
  - Settings section
  - Styles section  
  - Custom templates
- [ ] Note existing font size presets: S (0.875rem), M (1rem), L (1.25rem), X-L (1.5rem), XX-L (2rem)

### 3. Enhance Spacing Settings
- [ ] Locate the `settings.spacing` section
- [ ] Add or verify spacingSizes configuration:

```json
"spacing": {
	"customSpacing": true,
	"spacingSizes": [
		{
			"name": "X-Small",
			"size": "0.5rem",
			"slug": "x-small"
		},
		{
			"name": "Small",
			"size": "1rem",
			"slug": "small"
		},
		{
			"name": "Medium",
			"size": "1.5rem",
			"slug": "medium"
		},
		{
			"name": "Large",
			"size": "2rem",
			"slug": "large"
		},
		{
			"name": "X-Large",
			"size": "3rem",
			"slug": "x-large"
		},
		{
			"name": "XX-Large",
			"size": "4rem",
			"slug": "xx-large"
		}
	],
	"padding": true,
	"margin": true,
	"units": ["px", "rem", "vh", "vw", "%"]
}
```

### 4. Enhance Typography Settings
- [ ] Review the existing fontSizes configuration
- [ ] Add line-height settings if missing:

```json
"typography": {
	"customFontSize": true,
	"fluid": true,
	"fontStyle": true,
	"fontWeight": true,
	"letterSpacing": true,
	"lineHeight": true,
	"textDecoration": true,
	"textTransform": true,
	"dropCap": false
}
```

### 5. Add Layout Enhancements
- [ ] Verify contentSize and wideSize settings:

```json
"layout": {
	"contentSize": "620px",
	"wideSize": "1200px"
}
```

### 6. Add Custom CSS Properties
- [ ] Add custom properties for LSX branding in the styles section:

```json
"styles": {
	"css": ":root { --wp--custom--spacing--baseline: 1.5rem; --wp--custom--border--radius: 8px; --wp--custom--shadow--lsx: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }"
}
```

### 7. Upload and Test Changes
- [ ] Save your `theme.json` file
- [ ] Upload the theme to your WordPress Studio site:
  - Copy the entire theme folder to `/wp-content/themes/`
  - Or use the file manager in WordPress Studio
- [ ] Activate the theme in **Appearance > Themes**

### 8. Verify Changes in Site Editor
- [ ] Navigate to **Appearance > Site Editor**
- [ ] Go to **Styles** in the Site Editor
- [ ] Verify your spacing presets appear in:
  - Block spacing controls
  - Padding/margin options
- [ ] Check typography controls for:
  - Font size options
  - Line height controls
  - Custom font families

### 9. Test Block Controls
- [ ] Create a test page or post
- [ ] Add various blocks (Paragraph, Heading, Group)
- [ ] Verify spacing controls show your custom sizes
- [ ] Test color palette accessibility
- [ ] Confirm typography options are available

## Key Improvements to Implement

### Enhanced Spacing System
- Consistent rem-based spacing scale
- Fluid spacing for responsive design
- Custom units for advanced layouts

### Typography Refinements
- Fluid typography for responsive text scaling
- Enhanced line-height controls
- Letter-spacing options for brand consistency

### Layout Optimization
- Optimal content width for readability
- Wide layout support for feature content
- Responsive design considerations

## Documentation Requirements
Update your `learning-journal.md`:

```markdown
# theme.json Configuration (Phase 1) - [Date]

## Changes Implemented
### Spacing System
- [x] Added 6-level spacing scale (0.5rem to 4rem)
- [x] Enabled custom spacing controls
- [x] Added support for multiple units (px, rem, vh, vw, %)

### Typography Enhancements
- [x] Enabled fluid typography
- [x] Added line-height controls
- [x] Configured letter-spacing options

### Layout Settings
- [x] Set content width: 620px
- [x] Set wide width: 1200px
- [x] Verified responsive layout support

### Custom Properties
- [x] Added LSX shadow variable
- [x] Added baseline spacing variable
- [x] Added border radius variable

## Testing Results
- Site Editor spacing controls: [Working/Issues]
- Typography options: [Working/Issues]
- Block controls: [Working/Issues]
- Mobile responsiveness: [Tested/Pending]

## Before/After Comparison
[Note any visual differences or improvements]

## Challenges & Solutions
[Document any issues encountered and how you resolved them]
```

## Acceptance Criteria
- [ ] theme.json file enhanced with improved spacing system
- [ ] Typography settings expanded with fluid controls
- [ ] Layout settings optimized for content presentation
- [ ] Custom CSS properties added for LSX branding
- [ ] Changes successfully uploaded and activated
- [ ] Site Editor shows new spacing and typography options
- [ ] Block controls reflect enhanced settings
- [ ] No JavaScript errors in browser console
- [ ] Mobile responsiveness maintained

## Validation Steps
- [ ] JSON syntax validated (use online JSON validator)
- [ ] WordPress Site Health shows no theme issues
- [ ] Frontend displays correctly with new settings
- [ ] Site Editor functionality not broken

## Common theme.json Properties to Configure

### Essential Settings
- `appearanceTools`: Enable design tools
- `border`: Border controls for blocks
- `color`: Color palette and controls
- `layout`: Content width and spacing
- `spacing`: Margin, padding, and custom spacing
- `typography`: Font controls and settings

### Advanced Options
- `custom`: Custom CSS properties
- `elements`: Default styles for HTML elements
- `blocks`: Block-specific styling
- `variations`: Style variations

## Troubleshooting

**Site Editor not showing changes:**
- Clear any caching plugins
- Hard refresh browser (Ctrl+F5)
- Verify theme is activated
- Check for PHP errors

**Spacing controls not appearing:**
- Verify JSON syntax is correct
- Check `customSpacing` is set to true
- Ensure spacing units are properly defined

**Typography options missing:**
- Confirm typography settings in theme.json
- Verify font families are properly loaded
- Check for conflicting plugin settings

## Time Estimate
1-2 hours including testing and documentation.

## Related Files to Review
- `/styles/` directory - Existing style variations
- `/assets/css/editor-style.css` - Editor-specific styling
- `functions.php` - Font loading and enqueuing

---
**Next:** With enhanced theme.json configuration, you're ready to create custom template parts and begin building your homepage design.