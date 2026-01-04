# AI Coding Guidelines for sarayusapa.github.io

## Architecture Overview
This is a static personal website built with vanilla HTML, CSS, and JavaScript. The site is organized into sections (work, music, blogs, other) as subfolders, each containing an `index.html`. Individual blog posts reside in sub-subfolders under `blogs/` with their own `index.html` and optional `style.css`.

- **Global styles**: `/css/style.css` - defines base reset, navbar, container layout
- **Global scripts**: `/js/main.js` - handles navigation active states and mobile menu toggle
- **Per-post styles**: Blog posts may include additional `style.css` for custom effects (e.g., hover images)

## Key Patterns
- **Paths**: All links and asset references use absolute paths starting with `/` (e.g., `/css/style.css`, `/assets/image.jpg`)
- **Layout**: Fixed navbar at top, main content in `.container` with max-width 800px, centered
- **Responsive**: Mobile menu toggle with JavaScript, hidden on desktop
- **Hover effects**: Custom CSS pseudo-elements for image overlays on specific text (see `blogs/margazhi-up-close/style.css`)
- **Color scheme**: Background `#fffbf5`, text `#000000`, accent `rgb(255, 106, 0)`
- **Typography**: `'Times New Roman', Times, serif` at 20px with 1.6 line-height

## Development Workflow
- Edit HTML/CSS/JS files directly - no build process required
- Images stored in `assets/` folders (global or per-section)
- Deploy via GitHub Pages from main branch
- Test responsiveness and hover effects in browser

## Code Examples
- **Navbar structure**: Consistent across all pages with nav-inner, nav-logo, nav-right
- **Blog listing**: Use `<ul class="blog-list"><li class="blog-item"><h3 class="blog-title"><a href="...">...</a></h3><div class="blog-meta">date</div></li></ul>`
- **Contact section**: Standard footer with email, GitHub, X, YouTube links separated by `|`

## Conventions
- HTML: Semantic elements (`<main>`, `<article>`, `<nav>`)
- CSS: Box-sizing border-box, no external frameworks
- JS: Vanilla, minimal DOM manipulation for UI interactions
- File naming: Lowercase, hyphens for multi-word (e.g., `margazhi-up-close`)

Reference files: [css/style.css](css/style.css), [js/main.js](js/main.js), [blogs/margazhi-up-close/style.css](blogs/margazhi-up-close/style.css)</content>
<parameter name="filePath">/Users/sarayu/misstech/sarayusapa.github.io/.github/copilot-instructions.md