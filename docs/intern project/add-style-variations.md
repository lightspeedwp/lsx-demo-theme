---
name: "Add Style Variations"
about: Create at least two theme style variations using theme.json and document your approach
title: "Add Style Variations"
labels: ["build", "styling", "variations"]
assignees: []
---

## Objective
Create at least two custom theme style variations using WordPress's style variation system. You'll expand on the existing "01-evening" and "dark-mode" variations by creating new variations that showcase different aspects of the LSX design system.

## Background
The LSX Demo Theme already includes:
- **01-evening.json** - An evening/sunset themed variation
- **dark-mode.json** - A dark mode color scheme variation

You'll create additional variations that:
- Demonstrate mastery of WordPress style variation system
- Showcase different moods/themes within the LSX brand
- Provide users with meaningful design choices
- Maintain accessibility and brand consistency

## Prerequisites
- Homepage template completed with LSX branding
- Understanding of theme.json structure
- Custom template parts functional
- Site Editor proficiency

## Current Style Variations Analysis

### Existing Variations
- [ ] Review `/styles/01-evening.json` structure
- [ ] Examine `/styles/dark-mode.json` configuration  
- [ ] Test existing variations in Site Editor (**Appearance > Site Editor > Styles**)
- [ ] Document current color palette variations

## Step-by-Step Instructions

### 1. Analyze Existing Style Variation Structure
- [ ] Open `/styles/dark-mode.json` in your code editor
- [ ] Review the JSON structure:
  - `version` - Theme.json schema version
  - `title` - Variation display name
  - `settings` - Configuration overrides
  - `styles` - Styling overrides

- [ ] Understand how variations override base theme.json:
  - Color palette modifications
  - Typography adjustments
  - Element styling changes

### 2. Plan Your Style Variations
Choose 2-3 variations from these concepts:

#### Variation Ideas:
- **LSX Corporate** - Professional, minimal, high contrast
- **LSX Creative** - Bold colors, artistic, vibrant
- **LSX Minimal** - Clean, white space, subtle colors
- **LSX High Contrast** - Accessibility-focused, maximum contrast
- **LSX Neon** - Cyberpunk-inspired, glowing accents

### 3. Create LSX Corporate Variation
- [ ] Create new file: `/styles/lsx-corporate.json`
- [ ] Implement corporate-focused design:

```json
{
  "version": 2,
  "title": "LSX Corporate",
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#1a1a1a",
          "name": "Base",
          "slug": "base"
        },
        {
          "color": "#666666",
          "name": "Neutral",
          "slug": "neutral"
        },
        {
          "color": "#ffffff",
          "name": "Light",
          "slug": "light"
        },
        {
          "color": "#FF5F1F",
          "name": "Accent 1",
          "slug": "accent-1"
        },
        {
          "color": "#2563eb",
          "name": "Accent 2", 
          "slug": "accent-2"
        },
        {
          "color": "#0891b2",
          "name": "Accent 3",
          "slug": "accent-3"
        }
      ]
    }
  },
  "styles": {
    "color": {
      "background": "#ffffff",
      "text": "#1a1a1a"
    },
    "elements": {
      "button": {
        "color": {
          "background": "#FF5F1F",
          "text": "#ffffff"
        },
        "border": {
          "radius": "4px"
        },
        ":hover": {
          "color": {
            "background": "#e55a1c"
          }
        }
      },
      "link": {
        "color": {
          "text": "#2563eb"
        },
        ":hover": {
          "color": {
            "text": "#FF5F1F"
          }
        }
      }
    }
  }
}
```

### 4. Create LSX Creative Variation
- [ ] Create new file: `/styles/lsx-creative.json`
- [ ] Implement vibrant, artistic design:

```json
{
  "version": 2,
  "title": "LSX Creative",
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0f0f0f",
          "name": "Base",
          "slug": "base"
        },
        {
          "color": "#4A4A4A",
          "name": "Neutral", 
          "slug": "neutral"
        },
        {
          "color": "#fafafa",
          "name": "Light",
          "slug": "light"
        },
        {
          "color": "#ff6b35",
          "name": "Accent 1",
          "slug": "accent-1"
        },
        {
          "color": "#00ff94",
          "name": "Accent 2",
          "slug": "accent-2"
        },
        {
          "color": "#ff006e",
          "name": "Accent 3",
          "slug": "accent-3"
        }
      ]
    }
  },
  "styles": {
    "color": {
      "background": "#fafafa",
      "text": "#0f0f0f"
    },
    "elements": {
      "button": {
        "color": {
          "background": "#ff6b35",
          "text": "#ffffff"
        },
        "border": {
          "radius": "12px"
        },
        "typography": {
          "fontWeight": "700"
        },
        ":hover": {
          "color": {
            "background": "#00ff94"
          }
        }
      },
      "heading": {
        "typography": {
          "fontWeight": "800"
        }
      }
    }
  }
}
```

### 5. Create LSX Minimal Variation
- [ ] Create new file: `/styles/lsx-minimal.json`
- [ ] Implement clean, minimal design:

```json
{
  "version": 2,
  "title": "LSX Minimal",
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#2d2d2d",
          "name": "Base",
          "slug": "base"
        },
        {
          "color": "#8e8e8e",
          "name": "Neutral",
          "slug": "neutral"
        },
        {
          "color": "#f8f8f8",
          "name": "Light",
          "slug": "light"
        },
        {
          "color": "#FF5F1F",
          "name": "Accent 1",
          "slug": "accent-1"
        },
        {
          "color": "#e5e5e5",
          "name": "Accent 2",
          "slug": "accent-2"
        },
        {
          "color": "#666666",
          "name": "Accent 3",
          "slug": "accent-3"
        }
      ]
    }
  },
  "styles": {
    "spacing": {
      "blockGap": "2rem"
    },
    "color": {
      "background": "#f8f8f8",
      "text": "#2d2d2d"
    },
    "elements": {
      "button": {
        "color": {
          "background": "#2d2d2d",
          "text": "#f8f8f8"
        },
        "border": {
          "radius": "0px",
          "width": "1px",
          "style": "solid",
          "color": "#2d2d2d"
        },
        "typography": {
          "fontWeight": "400"
        },
        ":hover": {
          "color": {
            "background": "#FF5F1F",
            "text": "#ffffff"
          }
        }
      }
    }
  }
}
```

### 6. Test Style Variations
- [ ] **Access Style Variations:**
  - Go to **Appearance > Site Editor > Styles**
  - Click "Browse styles" 
  - Verify your new variations appear in the list

- [ ] **Test Each Variation:**
  - Select each variation and preview changes
  - Verify colors apply correctly throughout site
  - Check homepage layout with each variation
  - Test buttons, links, and interactive elements

- [ ] **Cross-Template Testing:**
  - Apply variations to different templates (page, post, archive)
  - Ensure consistency across template parts
  - Verify header and footer adapt appropriately

### 7. Create Color Palette Variations
- [ ] In `/styles/colors/` directory, create matching color variations:
  - `lsx-corporate.json`
  - `lsx-creative.json`  
  - `lsx-minimal.json`

- [ ] Each color variation file should contain only the color palette:

```json
{
  "version": 2,
  "title": "LSX Corporate Colors",
  "settings": {
    "color": {
      "palette": [
        // Color palette array from your main variation
      ]
    }
  }
}
```

### 8. Document Design Rationale
- [ ] Create design documentation for each variation:
  - Target audience and use case
  - Color psychology and brand alignment
  - Accessibility considerations
  - When to use each variation

### 9. Advanced Styling Features
If implementing advanced features:

#### Custom CSS Properties
- [ ] Add custom properties in variation styles:
```json
"styles": {
  "css": ":root { --wp--custom--gradient--primary: linear-gradient(135deg, #FF5F1F 0%, #ff6b35 100%); }"
}
```

#### Typography Variations
- [ ] Modify font weights, sizes, or families:
```json
"typography": {
  "fontFamily": "var:preset|font-family|manrope",
  "fontSize": "var:preset|font-size|large"
}
```

#### Block-Specific Styling
- [ ] Target specific blocks in variations:
```json
"blocks": {
  "core/button": {
    "color": {
      "background": "#FF5F1F"
    }
  }
}
```

## Documentation Requirements
Update your `learning-journal.md`:

```markdown
# Style Variations Creation - [Date]

## Style Variations Created
### 1. LSX Corporate
- **Purpose:** Professional business presentation
- **Key Features:** High contrast, corporate blues, clean typography
- **Use Case:** Business pages, formal content
- **Color Palette:** [List key colors and rationale]

### 2. LSX Creative  
- **Purpose:** Artistic and vibrant presentation
- **Key Features:** Bold colors, creative accents, artistic flair
- **Use Case:** Portfolio, creative showcases
- **Color Palette:** [List key colors and rationale]

### 3. LSX Minimal
- **Purpose:** Clean, minimal presentation
- **Key Features:** Subtle colors, increased spacing, minimal design
- **Use Case:** Content-focused pages, blog
- **Color Palette:** [List key colors and rationale]

## Design Decisions
### Color Strategy
- How color palettes maintain LSX brand identity
- Accessibility considerations for each variation
- Contrast ratios and readability testing

### Typography Approach
- Font weight and size modifications
- Hierarchy adjustments per variation
- Readability optimization

### Interactive Elements
- Button styling variations
- Link behavior across variations
- Hover state customizations

## Testing Results
- Site Editor preview functionality: [Results]
- Frontend application: [Results]
- Cross-template consistency: [Results]
- Mobile responsiveness: [Results]
- Accessibility testing: [Results]

## Accessibility Notes
- Color contrast ratios for each variation
- Readability testing results
- High contrast variation considerations

## Future Enhancements
[Ideas for additional variations or improvements]

## Screenshots
[Include screenshots of each variation applied to homepage]
```

## Acceptance Criteria
- [ ] At least two custom style variations created beyond existing ones
- [ ] Each variation demonstrates unique design approach
- [ ] All variations maintain LSX brand consistency
- [ ] Color palettes are accessible (WCAG AA compliance)
- [ ] Variations work across all templates and template parts
- [ ] Style variations appear in Site Editor styles browser
- [ ] Frontend application matches Site Editor preview
- [ ] Interactive elements (buttons, links) styled appropriately
- [ ] Mobile responsive design maintained across variations
- [ ] Documentation includes design rationale and use cases

## Quality Standards

### Brand Consistency
- [ ] All variations recognizable as LSX brand
- [ ] Core brand elements maintained across variations
- [ ] Typography choices align with LSX identity
- [ ] Color relationships preserve brand hierarchy

### Technical Excellence
- [ ] Valid JSON syntax in all variation files
- [ ] Proper theme.json schema compliance
- [ ] No JavaScript errors when switching variations
- [ ] Consistent performance across variations

### User Experience
- [ ] Clear differentiation between variations
- [ ] Meaningful variation names and descriptions
- [ ] Smooth transitions between style applications
- [ ] Appropriate contrast and readability

## Troubleshooting

**Variations not appearing in Site Editor:**
- Verify JSON syntax is correct
- Check file naming convention
- Ensure files are in correct `/styles/` directory
- Clear any caching plugins

**Colors not applying correctly:**
- Check color slug consistency
- Verify palette structure matches theme.json schema
- Test with browser developer tools
- Check for CSS specificity conflicts

**Typography changes not visible:**
- Ensure font families are properly loaded
- Check typography property syntax
- Verify font weights are available
- Test across different blocks and elements

## Time Estimate
2-3 hours including creation, testing, and documentation.

## Advanced Features to Explore
- Gradient color schemes
- Custom shadow variations
- Animation and transition effects
- Block-specific styling overrides
- Responsive typography scaling

---
**Next:** With comprehensive style variations complete, you're ready to export your customized theme and demonstrate the full range of your WordPress block theme development skills.