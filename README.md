# Markku Kirjava — Portfolio

Professional portfolio website showcasing my work as an Embedded Systems Engineer, featuring projects in firmware development, embedded Linux, RTOS, and hardware-aware software.

🔗 **Live Site:** [https://markku-github.github.io/](https://markku-github.github.io/)

## About

This portfolio highlights my expertise in:
- Low-level firmware development (C/C++, Rust, Python, Assembly (ARM))
- Real-time operating systems (FreeRTOS)
- Bare metal, Embedded Linux and Yocto Project
- Hardware platforms: STM32, ESP32, ARM Cortex-M, AVR

## Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (no frameworks)
- **Hosting:** GitHub Pages
- **Design:** Responsive, mobile-first approach with CSS Grid
- **Color Palette:** Based on professional CV theme (#042b6b, #043382, #0774bb)
- **Interactive:** Clickable project cards with smart navigation

## Project Structure

```
.
├── index.html              # Main portfolio page
├── css/
│   └── style.css           # Global styles and theme
├── js/
│   └── main.js             # Interactive features (project cards, footer year)
├── projects/
│   └── robotic_arm.html    # Detailed project case study
├── templates/
│   ├── project-template.html   # Template for new projects
│   └── PROJECT_TEMPLATE.md     # Project creation checklist
├── assets/
│   └── favicon/            # Favicon assets (placeholder)
├── img/                    # Project images
└── README.md
```

## Features

✅ SEO-optimized with meta tags and Open Graph  
✅ Professional project case studies with code samples  
✅ Organized technical skills by category  
✅ Responsive design for mobile and desktop  
✅ Accessible navigation and semantic HTML  
✅ Clean, professional color scheme  
✅ Interactive project cards (click anywhere to view details)  
✅ Modular file structure (separate CSS and JS files)  

## Deployment

The site is automatically deployed via GitHub Pages from the `main` branch. Any push to `main` will update the live site within minutes.

## Adding New Projects

To add a new project:

1. **Create project detail page:**
   - Create a new HTML file in `projects/` (e.g., `projects/my-project.html`)
   - Use `templates/project-template.html` as a starting point
   - See `templates/PROJECT_TEMPLATE.md` for a checklist

2. **Add project card to homepage:**
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

## Contact

- **LinkedIn:** [linkedin.com/in/markku-kirjava-b31a5613b](https://www.linkedin.com/in/markku-kirjava-b31a5613b/)
- **GitHub:** [github.com/Markku-github](https://github.com/Markku-github)

---

Built with care for embedded systems engineering professionals. Clean, semantic HTML/CSS/JS with no frameworks or dependencies.
