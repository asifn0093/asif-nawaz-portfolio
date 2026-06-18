# Asif Nawaz — Personal Portfolio Website

> A fully responsive, modern personal portfolio website built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** — no frameworks, no dependencies.

🔗 **Live Site:** [asif-nawaz-portfolio.netlify.app](https://asif-nawaz-portfolio.netlify.app/)
🐙 **GitHub:** [github.com/asifn0093](https://asifn0093.github.io/asif-nawaz-portfolio/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Sections](#sections)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Contact Form Setup](#contact-form-setup)
- [SEO & Performance](#seo--performance)
- [Browser Support](#browser-support)
- [Author](#author)

---

## About

This is my personal portfolio website showcasing my skills, projects, certificates, client reviews, and experience as a **Frontend Developer**. It was built from scratch without any JavaScript frameworks — just clean, semantic HTML, well-structured CSS, and Vanilla JS.

The goal was to create a fast, accessible, visually polished portfolio that reflects my development style and works perfectly on all screen sizes.

---

## Features

- ⚡ **Zero dependencies** — pure HTML, CSS, JavaScript
- 📱 **Fully responsive** — mobile-first design, works on all screen sizes
- ✍️ **Typing animation** — hero name typed out on page load
- 🔢 **Counter animation** — stats count up when scrolled into view
- 👁️ **Scroll reveal** — elements fade in smoothly as you scroll
- 🔗 **Active nav highlighting** — nav link updates based on scroll position
- 📬 **Contact form** — integrated with Web3Forms (sends directly to Gmail)
- 🍔 **Hamburger menu** — fully accessible mobile navigation
- 🧲 **Smooth scrolling** — offset-aware smooth scroll for all anchor links
- 🔍 **SEO optimized** — full Open Graph, Twitter Card, and meta tags
- 🖼️ **Favicon set** — all favicon sizes including Apple touch icon
- 🎨 **Dark theme** — sleek dark color scheme throughout

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Introduction, CTA buttons, and animated stats (2+ years exp, 6+ projects, 15+ clients) |
| **About** | Personal info, background, education, and current availability status |
| **Skills** | Tech stack cards — Frontend, UI/UX, Tooling, Responsive, Web Apps, SE fundamentals |
| **Projects** | Showcases 4 real projects with descriptions and live links |
| **Certificates** | DDIT certification, TechHub workshop, and ongoing BS degree |
| **Reviews** | Client testimonials with star ratings |
| **Experience** | Timeline of education and freelance work from 2022 to present |
| **Contact** | Contact details, WhatsApp/Email/GitHub links, and a project inquiry form |
| **Footer** | Quick navigation links |

---

## Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic structure, accessibility, SEO meta tags |
| **CSS3** | Custom properties, Flexbox, CSS Grid, animations, media queries |
| **JavaScript (ES6+)** | DOM manipulation, IntersectionObserver, events, async form submission |
| **Google Fonts** | Syne (display) + DM Mono (code/accent) |
| **Web3Forms** | Contact form backend — sends submissions to Gmail |
| **Netlify** | Hosting and deployment |

---

## Project Structure

```
Portfolio Website/
│
├── index.html          # Main HTML file — all sections and content
│
├── CSS/
│   └── style.css       # All styles — layout, components, animations, responsive
│
├── JS/
│   └── script.js       # All JavaScript — interactions, animations, form handling
│
└── Images/
    ├── myself.jpeg         # Profile photo (About section)
    ├── og-cover.png        # Open Graph image for social sharing (1200×630)
    ├── favicon.ico         # Browser tab icon
    ├── favicon-16x16.png   # Small favicon
    ├── favicon-32x32.png   # Standard favicon
    └── apple-touch-icon.png # iOS home screen icon (180×180)
```

---

## Getting Started

No build tools or installations required. Just open the project and run.

### 1. Clone or Download

```bash
# Clone via Git
git clone https://github.com/asifn0093/portfolio.git

# Or download the ZIP and extract it
```

### 2. Open Locally

Simply open `index.html` in your browser:

```bash
# Option A — double-click index.html in your file explorer

# Option B — use VS Code Live Server extension (recommended)
# Right-click index.html → "Open with Live Server"
```

> **No npm install, no build step, no server needed.** It works straight from the file system.

---

## Contact Form Setup

The contact form uses **Web3Forms** — a free service that forwards form submissions directly to your Gmail inbox, with no backend required.

The form is already configured in `index.html`. If you fork this project and want to use your own Gmail:

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your Gmail address → get your free Access Key
3. In `index.html`, find this line inside the `<form>` tag:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
4. Replace the value with your own key
5. That's it — form submissions will now go to your Gmail ✅

**Fields collected from visitors:**
- First Name & Last Name
- Email address
- Phone / WhatsApp number
- Service needed (Landing Page, E-Commerce, React App, etc.)
- Budget range
- Project description / message

---

## SEO & Performance

This portfolio is fully optimized for search engines and social sharing:

- ✅ Semantic HTML5 tags (`<section>`, `<nav>`, `<footer>`, `<article>`)
- ✅ `<title>` and `<meta description>` tags
- ✅ Open Graph tags for Facebook/LinkedIn link previews
- ✅ Twitter Card tags for Twitter/X link previews
- ✅ `<link rel="canonical">` to avoid duplicate content
- ✅ `robots` meta tag set to `index, follow`
- ✅ `alt` attributes on all images
- ✅ Google Fonts loaded with `preconnect` and `dns-prefetch` for speed
- ✅ `theme-color` meta for browser UI color on mobile

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| Mobile (iOS/Android) | ✅ Full |

---

## Author

**Asif Nawaz**
Frontend Developer & BS Software Engineering Student

- 🌐 Portfolio: [asif-nawaz-portfolio.netlify.app](https://asif-nawaz-portfolio.netlify.app/)
- 🐙 GitHub: [github.com/asifn0093](https://github.com/asifn0093)
- 📍 Sahiwal, Pakistan
- 🕐 Available: Mon–Sat, 9AM–7PM PKT

---

*Built with ❤️ using pure HTML, CSS & JavaScript — no frameworks, just code.*
