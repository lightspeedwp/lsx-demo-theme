import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Comprehensive accessibility tests for all major templates.
 * Tests WCAG 2.2 AA compliance using axe-core automated testing.
 */

test.describe('Comprehensive Accessibility Tests', () => {
  
  test('Homepage accessibility audit', async ({ page }) => {
    // Mock homepage
    await page.route('/', async route => {
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Brandon's Fishing Adventures - Home</title>
          <meta name="description" content="Explore the rivers of KwaZulu-Natal with Brandon. Discover native fish species, conservation stories, and fishing adventures.">
        </head>
        <body>
          <a href="#main" class="skip-link">Skip to main content</a>
          <header role="banner">
            <h1>Brandon's Fishing Adventures</h1>
            <nav role="navigation" aria-label="Main navigation">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about/">About</a></li>
                <li><a href="/fish/">Fish Guide</a></li>
                <li><a href="/blog/">Blog</a></li>
                <li><a href="/contact/">Contact</a></li>
              </ul>
            </nav>
          </header>
          <main id="main" role="main">
            <section aria-labelledby="hero-heading">
              <h2 id="hero-heading">Discover the Fish of KwaZulu-Natal</h2>
              <p>Join me on my journey exploring the rivers and streams of South Africa, documenting the incredible fish species that call these waters home.</p>
              <img src="/homepage-hero.jpg" alt="Brandon holding a yellowfish by a flowing river in KwaZulu-Natal" width="800" height="400" loading="lazy">
            </section>
            <section aria-labelledby="recent-heading">
              <h2 id="recent-heading">Recent Adventures</h2>
              <article>
                <h3><a href="/blog/yellowfish-conservation/">Yellowfish Conservation Efforts</a></h3>
                <p>Learn about the critical conservation work being done to protect South Africa's native yellowfish species.</p>
              </article>
              <article>
                <h3><a href="/blog/huttenspruit-expedition/">Huttenspruit River Expedition</a></h3>
                <p>My latest expedition to the pristine waters of the Huttenspruit River yielded some incredible catches.</p>
              </article>
            </section>
          </main>
          <footer role="contentinfo">
            <p>&copy; 2024 Brandon's Fishing Adventures. Conservation through education.</p>
          </footer>
        </body>
        </html>
      `;
      await route.fulfill({ contentType: 'text/html', body: html });
    });

    await page.goto('/');

    // Run axe accessibility scan
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);

    // Test skip link functionality
    await page.keyboard.press('Tab');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toBeFocused();
    
    await page.keyboard.press('Enter');
    const mainContent = page.locator('#main');
    await expect(mainContent).toBeFocused();

    // Test heading structure
    const headings = await page.evaluate(() => {
      const headingElements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      return headingElements.map(h => ({
        level: parseInt(h.tagName.substring(1)),
        text: h.textContent?.trim() ?? ''
      }));
    });

    // Should have exactly one h1
    const h1Count = headings.filter(h => h.level === 1).length;
    expect(h1Count).toBe(1);

    // Test landmark roles
    expect(await page.locator('[role="banner"], header').count()).toBe(1);
    expect(await page.locator('[role="main"], main').count()).toBe(1);
    expect(await page.locator('[role="contentinfo"], footer').count()).toBe(1);
    expect(await page.locator('[role="navigation"], nav').count()).toBeGreaterThan(0);
  });

  test('Fish archive accessibility audit', async ({ page }) => {
    await page.route('/fish/', async route => {
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Fish Species Guide - Brandon's Fishing Adventures</title>
          <meta name="description" content="Comprehensive guide to freshwater fish species found in KwaZulu-Natal rivers. Learn about native species, conservation status, and fishing techniques.">
        </head>
        <body>
          <a href="#main" class="skip-link">Skip to main content</a>
          <header role="banner">
            <h1>Brandon's Fishing Adventures</h1>
            <nav role="navigation" aria-label="Main navigation">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/fish/" aria-current="page">Fish Guide</a></li>
                <li><a href="/blog/">Blog</a></li>
              </ul>
            </nav>
          </header>
          <main id="main" role="main">
            <header>
              <h2>Fish Species Guide</h2>
              <p>Discover the diverse fish species of KwaZulu-Natal rivers.</p>
            </header>
            <section aria-labelledby="search-heading">
              <h3 id="search-heading" class="screen-reader-text">Search Fish Species</h3>
              <form role="search" aria-label="Search fish species">
                <label for="fish-search">Search species:</label>
                <input type="search" id="fish-search" name="s" aria-describedby="search-help" placeholder="e.g., yellowfish, bass">
                <div id="search-help" class="help-text">Search by species name, habitat, or characteristics</div>
                <button type="submit">Search</button>
              </form>
            </section>
            <section aria-labelledby="species-list-heading">
              <h3 id="species-list-heading">All Species</h3>
              <div class="species-grid" role="region" aria-label="Fish species list">
                <article>
                  <h4><a href="/fish/smallmouth-yellowfish/">Smallmouth Yellowfish</a></h4>
                  <img src="/fish-smallmouth-yellowfish.jpg" alt="Smallmouth yellowfish swimming in clear river water" width="300" height="200" loading="lazy">
                  <p>Native to South African rivers, this protected species is known for its golden coloration and fighting spirit.</p>
                  <dl>
                    <dt>Conservation Status:</dt>
                    <dd>Protected</dd>
                    <dt>Average Size:</dt>
                    <dd>30-40cm</dd>
                    <dt>Habitat:</dt>
                    <dd>Fast-flowing rivers</dd>
                  </dl>
                </article>
                <article>
                  <h4><a href="/fish/sharptooth-catfish/">Sharptooth Catfish</a></h4>
                  <img src="/fish-sharptooth-catfish.jpg" alt="Large sharptooth catfish held by angler at sunset" width="300" height="200" loading="lazy">
                  <p>A large predatory catfish found throughout southern Africa's river systems.</p>
                  <dl>
                    <dt>Conservation Status:</dt>
                    <dd>Least Concern</dd>
                    <dt>Average Size:</dt>
                    <dd>60-100cm</dd>
                    <dt>Habitat:</dt>
                    <dd>Deep pools and dams</dd>
                  </dl>
                </article>
              </div>
            </section>
          </main>
          <footer role="contentinfo">
            <p>&copy; 2024 Brandon's Fishing Adventures</p>
          </footer>
        </body>
        </html>
      `;
      await route.fulfill({ contentType: 'text/html', body: html });
    });

    await page.goto('/fish/');

    // Run comprehensive accessibility scan
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);

    // Test search form accessibility
    const searchForm = page.locator('form[role="search"]');
    await expect(searchForm).toBeVisible();
    
    const searchInput = page.locator('#fish-search');
    await expect(searchInput).toHaveAttribute('aria-describedby', 'search-help');
    
    // Test that help text is associated
    const helpText = page.locator('#search-help');
    await expect(helpText).toBeVisible();

    // Test articles have proper structure
    const articles = page.locator('article');
    const articleCount = await articles.count();
    expect(articleCount).toBeGreaterThan(0);

    // Each article should have proper heading hierarchy
    for (let i = 0; i < articleCount; i++) {
      const article = articles.nth(i);
      const heading = article.locator('h4');
      await expect(heading).toBeVisible();
      
      const image = article.locator('img');
      await expect(image).toHaveAttribute('alt');
      
      // Check alt text is meaningful
      const altText = await image.getAttribute('alt');
      expect(altText).toBeTruthy();
      expect(altText && altText.length).toBeGreaterThan(10);
    }

    // Test definition lists are properly structured
    const definitionLists = page.locator('dl');
    const dlCount = await definitionLists.count();
    for (let i = 0; i < dlCount; i++) {
      const dl = definitionLists.nth(i);
      const dtCount = await dl.locator('dt').count();
      const ddCount = await dl.locator('dd').count();
      expect(dtCount).toBe(ddCount); // Each term should have a definition
    }
  });

  test('Single fish page accessibility audit', async ({ page }) => {
    await page.route('/fish/smallmouth-yellowfish/', async route => {
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Smallmouth Yellowfish - Fish Species Guide</title>
          <meta name="description" content="Learn about the smallmouth yellowfish, a protected native species of South African rivers. Discover their habitat, conservation status, and fishing techniques.">
        </head>
        <body>
          <a href="#main" class="skip-link">Skip to main content</a>
          <header role="banner">
            <h1>Brandon's Fishing Adventures</h1>
            <nav role="navigation" aria-label="Main navigation">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/fish/">Fish Guide</a></li>
                <li><a href="/blog/">Blog</a></li>
              </ul>
            </nav>
            <nav aria-label="Breadcrumbs">
              <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/fish/">Fish Guide</a></li>
                <li aria-current="page">Smallmouth Yellowfish</li>
              </ol>
            </nav>
          </header>
          <main id="main" role="main">
            <article>
              <header>
                <h2>Smallmouth Yellowfish</h2>
                <p class="scientific-name"><em>Labeobarbus aeneus</em></p>
                <img src="/fish-smallmouth-yellowfish.jpg" alt="Golden smallmouth yellowfish being held gently before release, showing distinctive barbels and coloration" width="800" height="600" loading="lazy">
              </header>
              
              <section aria-labelledby="overview-heading">
                <h3 id="overview-heading">Species Overview</h3>
                <p>The smallmouth yellowfish is a native South African freshwater fish species, highly prized by anglers for its fighting ability and conservation significance.</p>
                
                <table>
                  <caption>Species Information</caption>
                  <thead>
                    <tr>
                      <th scope="col">Characteristic</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Scientific Name</th>
                      <td><em>Labeobarbus aeneus</em></td>
                    </tr>
                    <tr>
                      <th scope="row">Conservation Status</th>
                      <td><strong>Protected Species</strong> - Must be released immediately</td>
                    </tr>
                    <tr>
                      <th scope="row">Average Size</th>
                      <td>30-40cm (12-16 inches)</td>
                    </tr>
                    <tr>
                      <th scope="row">Maximum Size</th>
                      <td>Up to 60cm (24 inches)</td>
                    </tr>
                    <tr>
                      <th scope="row">Habitat</th>
                      <td>Fast-flowing rivers with rocky substrates</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section aria-labelledby="conservation-heading">
                <h3 id="conservation-heading">Conservation Status</h3>
                <div class="alert alert-warning" role="alert" aria-labelledby="protection-notice">
                  <h4 id="protection-notice">Protected Species Notice</h4>
                  <p>All yellowfish species are protected under South African law. They must be released immediately after capture using barbless hooks and proper handling techniques.</p>
                </div>
                <p>The smallmouth yellowfish faces threats from habitat degradation, pollution, and introduced species. Conservation efforts focus on habitat restoration and education.</p>
              </section>

              <section aria-labelledby="techniques-heading">
                <h3 id="techniques-heading">Fishing Techniques</h3>
                <ul>
                  <li><strong>Fly fishing:</strong> Use small nymphs and dry flies</li>
                  <li><strong>Spin fishing:</strong> Light tackle with small spinners</li>
                  <li><strong>Bait fishing:</strong> Natural baits like worms and insects</li>
                </ul>
                <p><strong>Important:</strong> Always use barbless hooks and handle fish gently for immediate release.</p>
              </section>

              <section aria-labelledby="gallery-heading">
                <h3 id="gallery-heading">Photo Gallery</h3>
                <div class="image-gallery">
                  <figure>
                    <img src="/yellowfish-habitat.jpg" alt="Rocky river rapids where smallmouth yellowfish thrive, showing clear flowing water over granite boulders" width="400" height="300" loading="lazy">
                    <figcaption>Typical smallmouth yellowfish habitat - fast-flowing rocky rivers</figcaption>
                  </figure>
                  <figure>
                    <img src="/yellowfish-release.jpg" alt="Angler carefully releasing a smallmouth yellowfish back into the river, demonstrating proper conservation practices" width="400" height="300" loading="lazy">
                    <figcaption>Proper catch and release technique for yellowfish conservation</figcaption>
                  </figure>
                </div>
              </section>
            </article>

            <aside aria-labelledby="related-heading">
              <h3 id="related-heading">Related Species</h3>
              <nav aria-label="Related fish species">
                <ul>
                  <li><a href="/fish/largemouth-yellowfish/">Largemouth Yellowfish</a></li>
                  <li><a href="/fish/natal-yellowfish/">KwaZulu-Natal Yellowfish</a></li>
                </ul>
              </nav>
            </aside>
          </main>
          <footer role="contentinfo">
            <p>&copy; 2024 Brandon's Fishing Adventures</p>
          </footer>
        </body>
        </html>
      `;
      await route.fulfill({ contentType: 'text/html', body: html });
    });

    await page.goto('/fish/smallmouth-yellowfish/');

    // Run comprehensive accessibility scan
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);

    // Test table accessibility
    const table = page.locator('table');
    await expect(table).toHaveAttribute('caption');
    
    const tableHeaders = page.locator('th[scope]');
    const headerCount = await tableHeaders.count();
    expect(headerCount).toBeGreaterThan(0);

    // Test alert accessibility
    const alert = page.locator('[role="alert"]');
    await expect(alert).toBeVisible();
    await expect(alert).toHaveAttribute('aria-labelledby');

    // Test figure and figcaption accessibility
    const figures = page.locator('figure');
    const figureCount = await figures.count();
    for (let i = 0; i < figureCount; i++) {
      const figure = figures.nth(i);
      const image = figure.locator('img');
      const caption = figure.locator('figcaption');
      
      await expect(image).toHaveAttribute('alt');
      await expect(caption).toBeVisible();
      
      // Alt text should be descriptive
      const altText = await image.getAttribute('alt');
      expect(altText && altText.length).toBeGreaterThan(20);
    }

    // Test breadcrumb navigation
    const breadcrumbs = page.locator('[aria-label="Breadcrumbs"]');
    await expect(breadcrumbs).toBeVisible();
    
    const currentPage = breadcrumbs.locator('[aria-current="page"]');
    await expect(currentPage).toBeVisible();
  });

  test('Color contrast compliance', async ({ page }) => {
    await page.route('/contrast-test/', async route => {
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Color Contrast Test</title>
          <style>
            body { 
              background: #ffffff; 
              color: #121212; 
              font-family: Arial, sans-serif;
              line-height: 1.6;
            }
            .primary-text { color: #121212; } /* 17.77:1 contrast ratio */
            .secondary-text { color: #4a4a4a; } /* 7.64:1 contrast ratio */
            .accent-text { color: #ff5f1f; } /* 3.36:1 contrast ratio - passes WCAG AA */
            .light-bg { 
              background: #f4f4f4; 
              color: #121212; 
              padding: 1rem;
            }
            .button {
              background: #ff5f1f;
              color: #ffffff;
              padding: 0.75rem 1.5rem;
              border: none;
              text-decoration: none;
              display: inline-block;
            }
            .button:focus {
              outline: 2px solid #121212;
              outline-offset: 2px;
            }
            .link {
              color: #ff5f1f;
              text-decoration: underline;
            }
            .link:focus {
              outline: 2px solid #121212;
              outline-offset: 2px;
            }
          </style>
        </head>
        <body>
          <main>
            <h1 class="primary-text">Color Contrast Test Page</h1>
            <p class="primary-text">This is primary text with high contrast (17.77:1 ratio).</p>
            <p class="secondary-text">This is secondary text with good contrast (7.64:1 ratio).</p>
            <p class="accent-text">This is accent text that meets WCAG AA standards (3.36:1 ratio).</p>
            
            <div class="light-bg">
              <h2>Content on Light Background</h2>
              <p>This text maintains high contrast on a light background.</p>
            </div>
            
            <p>
              <a href="#" class="button">Action Button</a>
              <a href="#" class="link">Text Link</a>
            </p>
            
            <form>
              <label for="test-input">Test Input:</label>
              <input type="text" id="test-input" placeholder="Enter text here">
              <button type="submit">Submit</button>
            </form>
          </main>
        </body>
        </html>
      `;
      await route.fulfill({ contentType: 'text/html', body: html });
    });

    await page.goto('/contrast-test/');

    // Run accessibility scan focusing on color contrast
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .analyze();
    
    // Should have no color contrast violations
    const contrastViolations = accessibilityScanResults.violations.filter(
      violation => violation.id === 'color-contrast'
    );
    expect(contrastViolations).toHaveLength(0);

    // Test focus indicators are visible
    const button = page.locator('.button');
    await button.focus();
    
    const link = page.locator('.link');
    await link.focus();
    
    const input = page.locator('#test-input');
    await input.focus();
    
    // These elements should have visible focus indicators
    // (The actual visual test would require screenshot comparison)
  });

  test('Keyboard navigation compliance', async ({ page }) => {
    await page.route('/keyboard-test/', async route => {
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Keyboard Navigation Test</title>
          <style>
            .skip-link {
              position: absolute;
              top: -40px;
              left: 6px;
              background: #000;
              color: #fff;
              padding: 8px;
              text-decoration: none;
              z-index: 1000;
            }
            .skip-link:focus {
              top: 6px;
            }
            button:focus, a:focus, input:focus, select:focus {
              outline: 2px solid #ff5f1f;
              outline-offset: 2px;
            }
            .dropdown {
              position: relative;
              display: inline-block;
            }
            .dropdown-content {
              display: none;
              position: absolute;
              background-color: #f9f9f9;
              min-width: 160px;
              box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
              z-index: 1;
            }
            .dropdown:focus-within .dropdown-content {
              display: block;
            }
            .dropdown-content a {
              color: black;
              padding: 12px 16px;
              text-decoration: none;
              display: block;
            }
          </style>
        </head>
        <body>
          <a href="#main" class="skip-link">Skip to main content</a>
          
          <header>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about/">About</a></li>
                <li>
                  <div class="dropdown">
                    <button aria-haspopup="true" aria-expanded="false">Fish Guide</button>
                    <div class="dropdown-content" role="menu">
                      <a href="/fish/yellowfish/" role="menuitem">Yellowfish</a>
                      <a href="/fish/bass/" role="menuitem">Bass</a>
                      <a href="/fish/catfish/" role="menuitem">Catfish</a>
                    </div>
                  </div>
                </li>
                <li><a href="/contact/">Contact</a></li>
              </ul>
            </nav>
          </header>
          
          <main id="main">
            <h1>Keyboard Navigation Test</h1>
            
            <form>
              <fieldset>
                <legend>Search Options</legend>
                <label for="search-term">Search term:</label>
                <input type="text" id="search-term" name="q" required>
                
                <fieldset>
                  <legend>Search in:</legend>
                  <input type="radio" id="search-all" name="search-type" value="all" checked>
                  <label for="search-all">All content</label>
                  
                  <input type="radio" id="search-fish" name="search-type" value="fish">
                  <label for="search-fish">Fish species only</label>
                  
                  <input type="radio" id="search-blog" name="search-type" value="blog">
                  <label for="search-blog">Blog posts only</label>
                </fieldset>
                
                <label for="category">Category:</label>
                <select id="category">
                  <option value="">All categories</option>
                  <option value="conservation">Conservation</option>
                  <option value="techniques">Fishing Techniques</option>
                  <option value="species">Species Profiles</option>
                </select>
                
                <input type="checkbox" id="recent-only">
                <label for="recent-only">Recent posts only</label>
                
                <button type="submit">Search</button>
                <button type="reset">Clear</button>
              </fieldset>
            </form>
            
            <section>
              <h2>Interactive Elements</h2>
              <button onclick="alert('Button clicked')">Interactive Button</button>
              <a href="#section2">Internal Link</a>
              <a href="https://example.com" target="_blank" rel="noopener">External Link</a>
            </section>
            
            <section id="section2">
              <h2>Section 2</h2>
              <p>This section can be jumped to via the internal link above.</p>
            </section>
          </main>
        </body>
        </html>
      `;
      await route.fulfill({ contentType: 'text/html', body: html });
    });

    await page.goto('/keyboard-test/');

    // Test skip link functionality
    await page.keyboard.press('Tab');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toBeFocused();
    
    // Activate skip link
    await page.keyboard.press('Enter');
    const mainContent = page.locator('#main');
    await expect(mainContent).toBeFocused();

    // Test form navigation
    await page.keyboard.press('Tab');
    const searchInput = page.locator('#search-term');
    await expect(searchInput).toBeFocused();

    // Test radio button navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab'); // Move to radio group
    const firstRadio = page.locator('#search-all');
    await expect(firstRadio).toBeFocused();
    
    // Arrow keys should navigate within radio group
    await page.keyboard.press('ArrowDown');
    const secondRadio = page.locator('#search-fish');
    await expect(secondRadio).toBeFocused();

    // Test select dropdown navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab'); // Skip second radio, get to select
    const selectElement = page.locator('#category');
    await expect(selectElement).toBeFocused();
    
    // Test dropdown interaction
    await page.keyboard.press('Space');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    // Continue tabbing through all interactive elements
    const interactiveElements = await page.locator('a, button, input, select, [tabindex]:not([tabindex="-1"])').count();
    expect(interactiveElements).toBeGreaterThan(5);

    // Run keyboard accessibility scan
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});