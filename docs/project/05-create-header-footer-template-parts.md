---
name: "Create Header & Footer Template Parts"
about: Design and save header and footer template parts using the Site Editor
title: "Create Header & Footer Template Parts"
labels: ["build", "template-parts"]
assignees: []
---

## Objective
Use the WordPress Site Editor to design and save custom header and footer template parts that reflect the LSX brand identity and will be linked to templates throughout the site.

## Background
The LSX Demo Theme already includes several template parts in the `/parts/` directory:
- `header.html` - Main site header
- `footer.html` - Main site footer  
- `header-large-title.html` - Alternative header with large title
- `footer-columns.html` - Footer with column layout
- `footer-newsletter.html` - Footer with newsletter signup
- `vertical-header.html` - Vertical header layout

You'll customize these existing parts and potentially create new variations that utilize the LSX design system.

## Prerequisites
- Enhanced theme.json configuration completed
- WordPress Studio site running with LSX Demo Theme
- Site Editor access and basic familiarity
- Understanding of LSX color palette and typography

## LSX Design System Reference

### Color Palette
- **Primary:** #121212 (Base - Jet Black)
- **Secondary:** #4A4A4A (Neutral - Asphalt Gray)
- **Background:** #F4F4F4 (Light - Concrete White)
- **Accent:** #FF5F1F (Accent 1 - Safety Orange)
- **Highlight:** #00FF85 (Accent 2 - Neon Green)
- **Links:** #3895FF (Accent 3 - Chrome Blue)

### Typography
- **Primary:** Lexend (Variable) for body text and navigation
- **Secondary:** Manrope (Variable) for headings and UI elements

## Step-by-Step Instructions

### 1. Access Site Editor and Template Parts
- [ ] Log into your WordPress admin
- [ ] Navigate to **Appearance > Site Editor**
- [ ] Click on **Template Parts** in the left sidebar
- [ ] Review existing template parts:
  - Header (main)
  - Footer (main)
  - Header Large Title
  - Footer Columns
  - Footer Newsletter

### 2. Customize Main Header Template Part
- [ ] Click on **Header** template part to edit
- [ ] Analyze current header structure:
  - Site logo/title placement
  - Navigation menu structure
  - Mobile responsiveness

#### Header Customization Tasks:
- [ ] **Logo/Site Title:**
  - Ensure site title uses Manrope font family
  - Apply appropriate font size (Large or X-Large)
  - Set color to Base (#121212) or Accent 1 (#FF5F1F)

- [ ] **Navigation Menu:**
  - Style navigation links with Lexend font
  - Set link color to Neutral (#4A4A4A)
  - Add hover effect using Accent 2 (#00FF85) or Accent 3 (#3895FF)
  - Ensure proper spacing using your custom spacing scale

- [ ] **Layout and Spacing:**
  - Apply consistent padding using custom spacing presets
  - Ensure header height is appropriate (use Large or X-Large spacing)
  - Add background color if needed (Light #F4F4F4)

- [ ] **Mobile Responsive Design:**
  - Test header on mobile viewport
  - Ensure navigation collapses appropriately
  - Verify touch targets are adequate (44px minimum)

### 3. Enhance Footer Template Part
- [ ] Click on **Footer** template part to edit
- [ ] Review current footer structure and content

#### Footer Customization Tasks:
- [ ] **Content Organization:**
  - Organize footer content into logical sections
  - Add copyright information
  - Include social media links if applicable

- [ ] **Typography and Styling:**
  - Apply Lexend font to footer text
  - Use smaller font size (Small or Medium)
  - Set text color to Neutral (#4A4A4A)

- [ ] **Background and Spacing:**
  - Set background color to Base (#121212) for contrast
  - Adjust text colors for dark background (Light #F4F4F4)
  - Apply consistent padding using spacing presets

- [ ] **Link Styling:**
  - Style footer links with appropriate hover states
  - Use Accent 1 (#FF5F1F) for important links
  - Ensure adequate contrast for accessibility

### 4. Create LSX Branded Header Variation
- [ ] In Template Parts, click **Add New Template Part**
- [ ] Choose **Header** as the type
- [ ] Name it "Header LSX Branded"

#### LSX Branded Header Features:
- [ ] **Prominent Branding:**
  - Larger site title/logo
  - Use Accent 1 (#FF5F1F) for brand elements
  - Add LSX-specific styling elements

- [ ] **Enhanced Navigation:**
  - Implement custom styling with LSX colors
  - Add visual indicators for current page
  - Include CTA button styled with Safety Orange

- [ ] **Custom Shadow:**
  - Apply the LSX Shadow custom property
  - Add subtle shadow for visual depth

### 5. Create Footer with Newsletter Signup
- [ ] Edit the existing **Footer Newsletter** template part
- [ ] Customize for LSX branding:

#### Newsletter Footer Features:
- [ ] **Newsletter Section:**
  - Add compelling newsletter signup heading
  - Style input fields with LSX colors
  - Create prominent signup button using Accent 1 (#FF5F1F)

- [ ] **Social Links:**
  - Add social media icon area
  - Style with consistent hover effects
  - Use appropriate LSX colors

### 6. Test Template Parts in Site Editor
- [ ] **Preview Different Templates:**
  - Go to **Templates** in Site Editor
  - Edit **Index** template
  - Swap between different header variations
  - Test different footer combinations

- [ ] **Mobile Testing:**
  - Use Site Editor's responsive preview
  - Test tablet and mobile viewports
  - Ensure all elements scale appropriately

### 7. Apply LSX Design System Elements
- [ ] **Consistent Spacing:**
  - Use your custom spacing scale throughout
  - Maintain rhythm between elements
  - Ensure adequate white space

- [ ] **Color Consistency:**
  - Verify all colors match LSX palette
  - Check contrast ratios for accessibility
  - Test in both light and dark contexts

- [ ] **Typography Hierarchy:**
  - Establish clear heading hierarchy
  - Use appropriate font weights
  - Maintain consistent line heights

### 8. Save and Document Changes
- [ ] Save all template part modifications
- [ ] Test on frontend by visiting your site
- [ ] Take screenshots of header and footer designs
- [ ] Document any custom CSS added

## Advanced Customizations

### Custom Block Patterns Integration
If creating new patterns in template parts:
- Use Group blocks for layout structure
- Apply custom spacing and colors
- Create reusable design elements

### Accessibility Considerations
- Ensure proper heading hierarchy (h1, h2, h3)
- Verify color contrast ratios meet WCAG standards
- Test keyboard navigation functionality
- Add appropriate ARIA labels where needed

## Documentation Requirements
Update your `learning-journal.md`:

```markdown
# Header & Footer Template Parts - [Date]

## Template Parts Customized
### Header (Main)
- [x] Applied LSX typography (Lexend navigation, Manrope headings)
- [x] Implemented LSX color palette
- [x] Added custom spacing from theme.json
- [x] Tested mobile responsiveness

### Footer (Main)  
- [x] Organized content sections
- [x] Applied dark background with light text
- [x] Styled links with LSX accent colors
- [x] Added proper spacing and typography

### New Template Parts Created
- [ ] Header LSX Branded (if created)
- [ ] Custom Footer Variation (if created)

## Design Decisions
### Color Applications
- Header background: [color choice and rationale]
- Navigation links: [color and hover states]
- Footer background: [color choice]
- Accent elements: [how Safety Orange was used]

### Typography Choices
- Header font sizes: [sizes used]
- Navigation typography: [font and styling]
- Footer text hierarchy: [size and weight decisions]

## Testing Results
- Desktop display: [Working/Issues noted]
- Mobile responsiveness: [Results]
- Cross-template compatibility: [Tested templates]

## Screenshots
[Include screenshots of header and footer designs]

## Challenges & Solutions
[Document any design or technical challenges encountered]

## Next Steps
Ready to implement these template parts in homepage template design.
```

## Acceptance Criteria
- [ ] Main header template part customized with LSX branding
- [ ] Footer template part enhanced with consistent styling
- [ ] LSX color palette applied throughout template parts
- [ ] Typography follows LSX design system (Lexend/Manrope)
- [ ] Custom spacing from theme.json utilized effectively
- [ ] Template parts are mobile responsive
- [ ] All changes saved in Site Editor
- [ ] Frontend display matches Site Editor preview
- [ ] No accessibility issues introduced
- [ ] Template parts documented with screenshots

## Quality Checklist

### Visual Design
- [ ] Consistent with LSX brand identity
- [ ] Proper use of color palette
- [ ] Typography hierarchy clear and readable
- [ ] Adequate white space and visual breathing room

### Technical Implementation  
- [ ] No JavaScript errors in browser console
- [ ] CSS properties applied correctly
- [ ] Template parts render properly on frontend
- [ ] Mobile-first responsive design principles followed

### Accessibility
- [ ] Sufficient color contrast ratios
- [ ] Proper heading structure maintained
- [ ] Interactive elements have appropriate focus states
- [ ] Screen reader compatibility verified

## Troubleshooting

**Template parts not saving:**
- Check for JavaScript errors in browser console
- Verify user permissions for Site Editor
- Try refreshing and saving again

**Styles not applying:**
- Ensure theme.json changes are active
- Clear any caching plugins
- Verify CSS specificity isn't being overridden

**Mobile responsiveness issues:**
- Test in Site Editor's responsive preview
- Check for fixed widths that don't scale
- Verify proper use of responsive typography

## Time Estimate
2-3 hours including design, implementation, testing, and documentation.

## Related Files to Reference
- `/parts/header.html` - Current header template
- `/parts/footer.html` - Current footer template  
- `/theme.json` - Color and typography settings
- `/assets/css/editor-style.css` - Additional editor styling

---
**Next:** With custom header and footer template parts complete, you're ready to build a comprehensive homepage template that showcases the LSX brand.