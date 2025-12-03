---
name: "Initial Setup: WordPress Studio"
about: Set up your local development environment using WordPress Studio
title: "Initial Setup: WordPress Studio"
labels: ["task", "setup"]
assignees: []
---

## Objective
Set up your local development environment using WordPress Studio and document the setup steps in your learning journal.

## Background
WordPress Studio is a desktop application that provides a local WordPress development environment. It's particularly useful for block theme development as it includes modern WordPress features and easy sync capabilities.

## Prerequisites
- Computer with Windows, macOS, or Linux
- Internet connection for downloading WordPress Studio
- Basic understanding of file management

## Step-by-Step Instructions

### 1. Download and Install WordPress Studio
- [ ] Visit [WordPress Studio website](https://developer.wordpress.com/studio/) 
- [ ] Download the appropriate version for your operating system
- [ ] Install WordPress Studio following the installation wizard
- [ ] Launch WordPress Studio

### 2. Create a New Site
- [ ] Click "Create new site" in WordPress Studio
- [ ] Choose a site name (e.g., "lsx-demo-learning")
- [ ] Select "Latest WordPress" version
- [ ] Wait for the site to be created and WordPress to be installed

### 3. Access Your Local Site
- [ ] Note the local URL provided by WordPress Studio (usually starts with `http://localhost`)
- [ ] Open the site in your browser
- [ ] Complete the WordPress setup wizard:
  - Choose your language
  - Create an admin user account
  - Document your login credentials securely

### 4. Verify Installation
- [ ] Log into your WordPress admin dashboard (`/wp-admin`)
- [ ] Navigate to **Appearance > Themes**
- [ ] Confirm you can see the default themes installed
- [ ] Navigate to **Tools > Site Health** and verify "Good" status

### 5. Install Recommended Plugins
- [ ] Go to **Plugins > Add New**
- [ ] Search and install "Create Block Theme" plugin
- [ ] Activate the plugin
- [ ] Verify the plugin appears under **Tools > Create Block Theme**

## Documentation Requirements
Create or update `learning-journal.md` in your local repository with:

### Setup Documentation
```markdown
# WordPress Studio Setup - [Date]

## Environment Details
- WordPress Studio Version: [version]
- WordPress Version: [version]
- Local URL: [your-local-url]
- Operating System: [your-os]

## Setup Steps Completed
- [x] WordPress Studio installed
- [x] Local site created
- [x] WordPress configured
- [x] Create Block Theme plugin installed

## Challenges & Solutions
[Document any issues you encountered and how you resolved them]

## Next Steps
Ready to proceed with forking and cloning the LSX Demo Theme repository.
```

## Acceptance Criteria
- [ ] WordPress Studio is successfully installed and running
- [ ] Local WordPress site is accessible and functional
- [ ] Admin access is confirmed with credentials securely stored
- [ ] Create Block Theme plugin is installed and activated
- [ ] Setup process is documented in learning journal
- [ ] Site Health shows "Good" status

## Additional Resources
- [WordPress Studio Documentation](https://developer.wordpress.com/studio/)
- [WordPress Block Theme Handbook](https://developer.wordpress.org/themes/block-themes/)
- [Create Block Theme Plugin Documentation](https://wordpress.org/plugins/create-block-theme/)

## Troubleshooting
**Site won't load:**
- Check if WordPress Studio is running
- Verify no other applications are using the same port
- Try restarting WordPress Studio

**Can't access wp-admin:**
- Verify the URL includes `/wp-admin`
- Check your login credentials
- Try resetting password through WordPress Studio

## Time Estimate
30-60 minutes depending on download speeds and system performance.

---
**Note:** Document any deviations from these steps in your learning journal for future reference.