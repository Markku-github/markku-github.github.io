# Markku Kirjava — Portfolio

Professional portfolio website showcasing my work as an Embedded Systems Engineer, featuring projects in firmware development, embedded Linux, RTOS, and hardware-aware software.

🔗 **Live Site:** [https://markku-github.github.io/](https://markku-github.github.io/)

## About

This portfolio highlights my expertise in:
- Low-level firmware development (C/C++, Rust, Python, Assembly (ARM))
- Real-time operating systems (FreeRTOS, RTIC)
- Bare metal, Embedded Linux and Yocto Project
- Hardware platforms: STM32, ESP32, ARM Cortex-M, RISC-V, AVR

## Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (no frameworks)
- **Hosting:** GitHub Pages
- **Design:** Responsive, mobile-first approach with CSS Grid
- **Color Palette:** Based on professional CV theme (#042b6b, #043382, #0774bb)
- **Interactive:** Clickable project cards with smart navigation
- **Privacy:** Advanced bot protection and selective indexing

## Project Structure

```
.
├── index.html              # Main portfolio page
├── cv.html                 # CV viewer page (not indexed)
├── 404.html                # Custom 404 error page
├── favicon.ico             # Root favicon for legacy browsers
├── robots.txt              # Search engine crawling instructions + bot blocking
├── sitemap.xml             # SEO sitemap (excludes private pages)
├── humans.txt              # Human-readable site info (humanstxt.org)
├── .gitignore              # Git ignore rules
├── css/
│   ├── style.css           # Global styles and theme
│   └── project.css         # Project page-specific styles
├── js/
│   └── main.js             # Interactive features (project cards, footer year)
├── projects/
│   └── robotic_arm.html    # Detailed project case study
├── templates/
│   ├── project-template.html   # Template for new projects
│   └── PROJECT_TEMPLATE.md     # Project creation checklist
├── docs/
│   ├── CV_Markku_Kirjava.pdf   # CV PDF (not indexed)
│   └── index.html              # Directory protection page
├── img/
│   ├── profile_picture/        # Profile images (not indexed)
│   │   ├── profile_picture.jpg
│   │   └── index.html          # Directory protection
│   └── robotic_arm/            # Robotic arm project images
│       └── robotic_arm.jpg
├── assets/
│   └── favicon/            # Complete favicon set (16x16 to 512x512)
└── README.md
```

## Features

✅ SEO-optimized with meta tags and Open Graph  
✅ Professional project case studies with code samples  
✅ Organized technical skills by category  
✅ Responsive design for mobile and desktop  
✅ Accessible navigation (skip-to-content, semantic HTML, ARIA labels)  
✅ Clean, professional color scheme  
✅ Interactive project cards (click anywhere to view details)  
✅ Modular file structure (separate CSS and JS files)  
✅ **CV viewer page** with embedded PDF display  
✅ **Privacy protection:** CV and profile picture excluded from search engines  
✅ **Bot blocking:** Email scrapers and data collectors blocked  
✅ Custom 404 error page with absolute URLs  
✅ **Security headers:** Referrer-Policy, X-Frame-Options, X-Content-Type-Options  
✅ humans.txt for human-readable site credits  

## Privacy & Security

This portfolio implements comprehensive privacy protection:

### Protected Content:
- 🔒 **CV page (`cv.html`)** - Not indexed, accessible only via direct link
- 🔒 **CV PDF (`docs/`)** - Blocked from search engines
- 🔒 **Profile picture (`img/profile_picture/`)** - Not in Google Image Search
- 🔒 **Contact information** - Protected from automated scrapers

### Protection Methods:
1. **robots.txt** - Blocks crawlers from sensitive paths and known email scrapers
2. **Meta tags** - `noindex, nofollow, noarchive, nosnippet` on CV page
3. **Sitemap exclusion** - CV page not listed in sitemap.xml
4. **Directory protection** - index.html files in sensitive folders redirect away
5. **No Open Graph images** - Profile picture excluded from social media meta tags
6. **rel="nofollow"** - Links to CV PDF don't pass PageRank
7. **Security headers** - Referrer-Policy (no-referrer), X-Frame-Options (SAMEORIGIN), X-Content-Type-Options (nosniff)

### What's Public:
- ✅ Portfolio homepage and navigation
- ✅ Project case studies
- ✅ Skills and about sections
- ✅ LinkedIn and GitHub links

### What's Private:
- 🔒 Full CV with contact details (phone, email)
- 🔒 Profile picture from image search
- 🔒 PDF document from search engines

**Important:** CV is still accessible to humans via navigation, but hidden from automated bots and search engine indexing.

## Deployment

The site is automatically deployed via GitHub Pages from the `main` branch. Any push to `main` will update the live site within minutes.

## Adding New Projects

To add a new project:

1. **Create project detail page:**
   - Create a new HTML file in `projects/` (e.g., `projects/my-project.html`)
   - Use `templates/project-template.html` as a starting point
   - See `templates/PROJECT_TEMPLATE.md` for a checklist

2. **Add project images:**
   - Create folder in `img/` (e.g., `img/my-project/`)
   - Add images with descriptive names
   - Use `loading="lazy"` attribute for performance

3. **Add project card to homepage:**
   - Open `index.html` and locate the `#projects` section
   - Add a new project card inside the `project-grid` div:

```html
<article class="project-card">
  <div class="project-header">
    <h3>Your Project Title</h3>
    <div class="project-tags">
      <span class="tag">C</span>
      <span class="tag">STM32</span>
    </div>
  </div>
  <p class="project-description">Brief description...</p>
  <div class="project-links">
    <a href="projects/my-project.html" class="project-link case-study-link">Read more →</a>
    <a href="https://github.com/..." class="project-link" target="_blank" rel="noopener noreferrer">GitHub →</a>
  </div>
</article>
```

4. **Update sitemap.xml:**
   - Add new project URL to `sitemap.xml` with priority 0.8
   - Follow the comment structure in the file

**Note:** The entire project card is clickable and will navigate to the detail page. Individual links (GitHub) work independently when clicked directly.

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --accent: #0774bb;
  --accent-strong: #043382;
  --accent-deep: #042b6b;
  --bg: #f4f6f8;
  --card: #ffffff;
  /* ... */
}
```

### Content
- Update `index.html` for About, Skills, and Contact sections
- Add project pages in `projects/` directory
- Modify interactive behavior in `js/main.js`
- Update CV by replacing `docs/CV_Markku_Kirjava.pdf`

### Local Development
Run a local server to preview changes:
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

**Testing checklist:**
- ✅ All pages load correctly (index, projects, CV, 404)
- ✅ Images display properly
- ✅ Navigation links work across all pages
- ✅ Responsive design on mobile/tablet/desktop
- ✅ Project cards are clickable
- ✅ GitHub links open in new tabs
- ✅ CV PDF embeds correctly in cv.html
- ✅ 404 page redirects to homepage work from any path
- ✅ Skip-to-content link appears on Tab key press
- ✅ Security headers are present in all pages

## Additional Files

### humans.txt
The site includes a `humans.txt` file following the [humanstxt.org](http://humanstxt.org/) standard. This human-readable file provides information about the site's creator and technical details.

View it at: `https://markku-github.github.io/humans.txt`

## Contact

- **LinkedIn:** [linkedin.com/in/markku-kirjava-b31a5613b](https://www.linkedin.com/in/markku-kirjava-b31a5613b/)
- **GitHub:** [github.com/Markku-github](https://github.com/Markku-github)

---

Built with care for embedded systems engineering professionals. Clean, semantic HTML/CSS/JS with no frameworks or dependencies. Privacy-focused with selective content exposure.
