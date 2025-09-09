---
name: "Install Create Block Theme Plugin"
about: Install and activate the Create Block Theme plugin for theme export functionality
title: "Install Create Block Theme Plugin"
labels: ["task", "wordpress"]
assignees: []
---

## Objective
Install and activate the Create Block Theme plugin in your WordPress Studio site. This plugin will be essential for exporting your final customized block theme.

## Background
The Create Block Theme plugin is an official WordPress plugin that provides tools for creating and exporting block themes. It's particularly useful for:
- Exporting themes from the Site Editor
- Creating custom templates and template parts
- Managing theme variations
- Converting classic themes to block themes

## Prerequisites
- WordPress Studio site running locally
- Admin access to your WordPress site
- Completed: Repository forked and cloned

## Step-by-Step Instructions

### 1. Access Your WordPress Admin
- [ ] Open WordPress Studio and ensure your site is running
- [ ] Navigate to your local site URL (usually `http://localhost:XXXX`)
- [ ] Click on "Visit Site" or go directly to `/wp-admin`
- [ ] Log in with your admin credentials

### 2. Install Create Block Theme Plugin
- [ ] In the WordPress admin, navigate to **Plugins > Add New**
- [ ] In the search box, type "Create Block Theme"
- [ ] Find the plugin by WordPress.org (should be the first result)
- [ ] Click "Install Now"
- [ ] Wait for installation to complete
- [ ] Click "Activate"

### 3. Verify Plugin Installation
- [ ] Navigate to **Tools** in the admin menu
- [ ] Confirm you see "Create Block Theme" in the Tools submenu
- [ ] Click on "Create Block Theme" to access the plugin interface
- [ ] Verify you see options like:
  - "Export Current Theme"
  - "Create Child Theme"
  - "Clone Current Theme"

### 4. Explore Plugin Features
- [ ] Click on **Create Block Theme** under Tools
- [ ] Review the available options:
  - **Export Current Theme:** Download current theme as ZIP
  - **Create Child Theme:** Create a child theme of the current active theme
  - **Clone Current Theme:** Create a copy of current theme
  - **Create Blank Theme:** Start with a minimal theme
- [ ] Note: Don't perform any exports yet - we'll use this later

### 5. Verify Theme Export Capability
- [ ] Click "Export Current Theme" (don't download yet)
- [ ] Verify the export form shows:
  - Theme name field
  - Theme description field
  - Author field
  - Version field
- [ ] Cancel without downloading (we'll do this properly later)

### 6. Check WordPress Version Compatibility
- [ ] Navigate to **Dashboard > Updates**
- [ ] Verify you're running WordPress 6.0 or higher (required for full block theme features)
- [ ] If updates are available, consider updating (note in your journal)

## Understanding the LSX Demo Theme Context
With the plugin installed, you can now:
- Export the current LSX Demo Theme with your customizations
- Create variations of the theme
- Generate new template parts
- Test different theme configurations

The LSX Demo Theme you cloned has:
- Custom `theme.json` with LSX branding
- Custom color palette and typography
- Existing template parts in `/parts/`
- Style variations in `/styles/`

## Documentation Requirements
Add to your `learning-journal.md`:

```markdown
# Create Block Theme Plugin Setup - [Date]

## Plugin Installation
- [x] Create Block Theme plugin installed
- [x] Plugin activated successfully
- [x] Tools menu option verified
- [x] Export functionality tested

## Plugin Features Available
- Export Current Theme (for final submission)
- Create Child Theme (for safe customization)
- Clone Current Theme (for variations)
- Create Blank Theme (for starting from scratch)

## WordPress Environment Details
- WordPress Version: [version]
- Active Theme: [current theme name]
- Plugin Version: [Create Block Theme version]

## Next Steps
Ready to begin theme customization with safe export capability.

## Questions/Notes
[Any observations about the plugin interface or capabilities]
```

## Acceptance Criteria
- [ ] Create Block Theme plugin successfully installed
- [ ] Plugin activated and accessible via Tools menu
- [ ] Export functionality verified (interface only, no actual export)
- [ ] WordPress version compatibility confirmed
- [ ] Plugin features explored and understood
- [ ] Documentation updated in learning journal

## Additional Features to Explore
Once installed, the Create Block Theme plugin provides:

### Export Options
- **Full Theme Export:** Complete theme with all customizations
- **Theme Part Export:** Individual template parts
- **Style Variation Export:** Custom style variations

### Creation Tools
- **Template Creation:** Build new templates via Site Editor
- **Pattern Creation:** Save custom block patterns
- **Style Management:** Manage theme variations

## Troubleshooting

**Plugin not found:**
- Ensure you're searching for "Create Block Theme"
- Check your internet connection
- Try refreshing the plugin search page

**Installation fails:**
- Verify WordPress has write permissions
- Check available disk space
- Ensure WordPress is up to date

**Tools menu missing:**
- Try deactivating and reactivating the plugin
- Clear any caching plugins
- Check for plugin conflicts

**Export option not working:**
- Ensure you're using WordPress 6.0+
- Verify the current theme is a block theme compatible
- Check for JavaScript errors in browser console

## Important Notes
- **Don't export yet:** We'll do a proper export after customizations
- **Keep plugin active:** Required for final theme submission
- **Note any errors:** Document any issues for troubleshooting

## Time Estimate
15-30 minutes including exploration and documentation.

## Related Resources
- [Create Block Theme Plugin Documentation](https://wordpress.org/plugins/create-block-theme/)
- [WordPress Block Theme Handbook](https://developer.wordpress.org/themes/block-themes/)
- [Site Editor Guide](https://wordpress.org/support/article/site-editor/)

---
**Next:** You're now ready to begin customizing the theme using the Site Editor and WordPress block theme tools.