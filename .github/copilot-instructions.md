# Copilot Instructions for AI-Ready Development

This file provides instructions for AI assistants (GitHub Copilot, Claude, etc.) to understand the project structure and generate consistent, high-quality code.

## Project Overview

**My Social Profile** is a modern, responsive React-based social profile website with:
- Configuration-driven profile data (JSON-based)
- Modern cyberpunk-inspired dark theme
- Navigation sidebar with smooth anchor links
- Mobile-first responsive design
- Fast development experience with Vite

## Technology Stack

- **Frontend**: React 18+ with Vite
- **Styling**: CSS Modules with semantic naming
- **State Management**: React hooks (useState)
- **Build Tool**: Vite 7+
- **Package Manager**: npm
- **Version Control**: Git with conventional commits
- **Deployment**: Azure App Service / Static Web Apps

## Project Architecture

### Component Structure

```
src/components/
├── Header.jsx          - Top profile section with hamburger menu
├── Navigation.jsx      - Slide-out sidebar navigation
├── About.jsx           - About section with bio paragraphs
├── Contact.jsx         - Social contact buttons
├── PayMe.jsx           - Payment QR code section
└── Footer.jsx          - Copyright footer
```

**Component Pattern**: Each component:
1. Imports its CSS Module: `import styles from '../styles/ComponentName.module.css'`
2. Imports profile config: `import profileConfig from '../config/profile.json'`
3. Uses semantic HTML elements
4. Applies className from CSS Module: `className={styles.className}`
5. Exports as default functional component

### Example Component Structure

```jsx
import styles from '../styles/ComponentName.module.css';
import profileConfig from '../config/profile.json';

export default function ComponentName() {
  return (
    <section className={styles.section}>
      {/* Component content using profileConfig */}
    </section>
  );
}
```

### CSS Modules Pattern

**File Naming**: `ComponentName.module.css`

**Selectors**: Use camelCase for class names
```css
.sectionTitle { /* main section container */ }
.itemList { /* list container */ }
.listItem { /* individual item */ }
.itemLink { /* clickable link */ }
```

**Responsive Design Breakpoints**:
- Desktop: default (1024px and above)
- Tablet: `@media (max-width: 1024px)`
- Mobile: `@media (max-width: 768px)`

## Design System

### Color Palette

- **Primary Accent**: `#38bdf8` (cyan blue) - Used for borders, highlights
- **Bright Accent**: `#00ffff` (bright cyan) - Used for hover states
- **Text Color**: `#a5f3fc` (light cyan) - Used for primary text
- **Dark Background**: `rgba(30, 27, 75, 0.4)` (deep blue/purple) - Used for backgrounds
- **Subtle Border**: `rgba(148, 163, 254, 0.2)` (light indigo border)

### Typography

- **Font Family**: System fonts with fallbacks (Poppins for special cases)
- **Heading Sizes**: 
  - Section titles: `2.5em` (desktop), `2em` (tablet), `1.6em` (mobile)
  - Subsection titles: `1.3em` (desktop), `1.1em` (mobile)
- **Letter Spacing**: Use `letter-spacing: 0.3px` for body text, `-0.5px` for headings

### Effects & Animations

**Hover Effects**:
- Border color change to `#00ffff`
- Box shadow: `0 0 20px rgba(0, 255, 255, 0.5)`
- Transform: `translateX(5px)` for links, `scale(1.05)` for images

**Transitions**: `transition: all 0.3s ease` (default)

**Gradients**: Use `linear-gradient(135deg, rgba(...) 0%, rgba(...) 100%)`

## Configuration Management

### Profile Configuration (src/config/profile.json)

The entire profile is configured via JSON:
- **name**: Full name
- **tagline**: Professional tagline
- **subtitle**: Animated subtitle
- **profilePictureUrl**: Path to profile image
- **about**: Bio sections
- **contacts**: Social links with icons
- **payMe**: Payment QR code section
- **footer**: Copyright info

**When Adding New Sections**:
1. Add data structure to `profile.json`
2. Create corresponding component
3. Import config in component
4. Update Navigation.jsx with new section anchor

## Navigation Pattern

### Adding New Sections

1. **In profile.json**, no changes needed (navigation reads from section IDs)

2. **In new component**, add ID to section:
```jsx
<section id="my-section" className={styles.section}>
  <h2>{profileConfig.mySection.title}</h2>
  {/* Content */}
</section>
```

3. **In Navigation.jsx**, add to sections array:
```jsx
const sections = [
  { id: 'about', label: 'About Me' },
  { id: 'contact', label: 'Get in Touch' },
  { id: 'my-section', label: 'My Section' } // Add here
];
```

## Development Workflow

### Starting Local Development

```bash
npm run dev
```
Dev server runs with HMR (Hot Module Replacement) enabled.

### Building for Production

```bash
npm run build
```
Creates optimized bundle in `dist/` folder.

### Git Commit Convention

Follow conventional commits:
- `feat: Add new feature`
- `fix: Fix bug in component`
- `style: Update styling`
- `refactor: Restructure code`
- `docs: Update documentation`
- `chore: Dependency updates`

Example:
```
feat: Add projects section with navigation link

- Create Projects component with portfolio items
- Add styling with hover effects
- Update Navigation with Projects link
- Add projects data to profile.json
```

## Code Guidelines

### Components

✅ **DO**:
- Use functional components with hooks
- Keep components focused and single-responsibility
- Extract magic numbers/colors to CSS variables
- Use semantic HTML (`<section>`, `<nav>`, `<header>`)
- Import only what you need from config

❌ **DON'T**:
- Use inline styles (always use CSS Modules)
- Create components that don't match the design system
- Hardcode values in components
- Use `<div>` when semantic HTML is available

### CSS Modules

✅ **DO**:
- Use descriptive class names (`.navLink`, not `.nl`)
- Group related selectors with comments
- Use mobile-first approach (base styles, then media queries)
- Follow the color palette
- Use consistent spacing (gaps, padding in multiples of 5px/10px)

❌ **DON'T**:
- Use IDs for styling
- Create utility classes (against CSS Modules philosophy)
- Use `!important`
- Mix units (stick to px for consistency)

### Responsive Design

**Mobile-First Approach**:
1. Write base styles for mobile
2. Add `@media (max-width: 1024px)` for tablet changes
3. Add `@media (max-width: 768px)` for mobile-specific tweaks

## Feature Implementation Checklist

When adding a new feature/section:

- [ ] Create component in `src/components/ComponentName.jsx`
- [ ] Create styles in `src/styles/ComponentName.module.css`
- [ ] Add data to `src/config/profile.json`
- [ ] Import component in `App.jsx`
- [ ] Add section to `Navigation.jsx` if it's a major section
- [ ] Add id attribute to section for anchor linking
- [ ] Test responsive design (desktop, tablet, mobile)
- [ ] Test hover effects and interactions
- [ ] Run `npm run build` to verify production build
- [ ] Update README.md with new feature details
- [ ] Commit with conventional commit message

## Performance Considerations

- **Code Splitting**: Vite handles automatic code splitting
- **CSS**: CSS Modules prevent style conflicts and dead code elimination
- **Images**: Optimize images in `public/images/` folder
- **Rerender**: Use functional components to avoid unnecessary rerenders
- **Bundle Size**: Monitor with `npm run build` output

## Accessibility

- Use semantic HTML elements
- Include `alt` attributes on images
- Use `aria-label` for icon buttons
- Ensure color contrast meets WCAG AA standards
- Test with keyboard navigation

## Common AI Tasks

### Task: Add a new social link

```jsx
// In profile.json, add to contacts.items:
{
  "id": "github",
  "label": "GitHub",
  "icon": "🔗",
  "link": "https://github.com/your-handle"
}
// Contact.jsx automatically renders new links via map()
```

### Task: Change color theme

Search and replace in CSS Module files:
- `#38bdf8` → new primary color
- `#00ffff` → new bright accent
- `#a5f3fc` → new text color

### Task: Add new section

1. Create component with section ID
2. Add to Navigation sections array
3. Add styles with responsive design
4. Add data to profile.json
5. Import in App.jsx
6. Test responsive layout

### Task: Update typography

Modify relevant `.module.css` files:
- `font-size` for element sizes
- `font-weight` for emphasis
- `letter-spacing` for spacing
- `line-height` for readability

## Deployment

- **Platform**: Azure App Service or Static Web App
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Environment**: Production environment uses optimized Vite build

## Testing Checklist

- [ ] Responsive design (desktop 1920px, tablet 1024px, mobile 768px)
- [ ] All navigation links work
- [ ] Social links open correctly
- [ ] Hover effects and animations smooth
- [ ] Images load and display correctly
- [ ] Mobile menu opens/closes properly
- [ ] No console errors or warnings
- [ ] Build completes without errors

## Key Files Reference

- `App.jsx` - Main app with state management for navigation
- `src/config/profile.json` - All profile data
- `src/App.css` - Grid layout and responsive structure
- `src/index.css` - Global styles
- `vite.config.js` - Build configuration
- `package.json` - Dependencies and scripts

## When In Doubt

- Check existing components for patterns
- Follow the established color palette
- Match the existing CSS Module structure
- Use semantic HTML when possible
- Test on mobile view
- Keep components focused and reusable
