// WordPress Block Theme Testing Configuration
// Playwright End-to-End Testing for LSX Demo Theme
// Provides cross-browser testing with accessibility validation using axe-core
// Configured for WordPress development workflow with local and external WordPress instances

// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Playwright Configuration for WordPress Block Theme Testing
 * @see https://playwright.dev/docs/test-configuration
 * @see https://developer.wordpress.org/block-editor/how-to-guides/testing-overview/
 */
module.exports = defineConfig({
    // Test Configuration - Optimized for WordPress theme testing
    testDir: './tests', // WordPress theme test directory
    timeout: 30 * 1000, // 30 seconds timeout for WordPress page loads
    expect: {
        timeout: 5000, // 5 seconds for WordPress element assertions
    },
    // CI/CD Configuration - Reliable testing in automated environments
    forbidOnly: !!process.env.CI, // Prevent .only() tests in CI pipeline
    retries: process.env.CI ? 2 : 0, // Retry flaky tests in CI (WordPress can be slow)
    workers: process.env.CI ? 1 : undefined, // Single worker in CI to prevent conflicts
    reporter: 'html', // HTML report for WordPress test results
    // Global Test Settings - WordPress environment configuration
    use: {
        actionTimeout: 0, // No timeout for WordPress admin actions (can be slow)
        baseURL: process.env.WORDPRESS_URL || 'http://localhost:8888', // WordPress site URL
        trace: 'on-first-retry', // Capture traces for debugging WordPress issues
        screenshot: 'only-on-failure', // Screenshots for failed WordPress tests
    },
    // Cross-Browser Testing - WordPress theme compatibility across browsers and devices
    projects: [
        // Desktop Browsers - Primary WordPress admin and frontend testing
        {
            name: 'chromium', // Chrome/Edge - Most common WordPress user browser
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox', // Firefox - Alternative browser for WordPress compatibility
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit', // Safari - macOS WordPress users
            use: { ...devices['Desktop Safari'] },
        },
        // Mobile Devices - WordPress mobile responsiveness testing
        {
            name: 'Mobile Chrome', // Android WordPress mobile experience
            use: { ...devices['Pixel 5'] },
        },
        {
            name: 'Mobile Safari', // iOS WordPress mobile experience
            use: { ...devices['iPhone 12'] },
        },
    ],
    // Test Output Configuration
    outputDir: 'test-results', // WordPress test artifacts directory

    // WordPress Server Configuration - Assumes external WordPress instance
    webServer: {
        command: 'echo "WordPress site should be running externally"', // No local WP server start
        url: process.env.WORDPRESS_URL || 'http://localhost:8888', // WordPress site URL
        reuseExistingServer: true, // Use existing WordPress installation
    },
});
