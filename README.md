# Deepanshi Birla · Portfolio

Personal portfolio website built with React 18 and React Router, styled with plain CSS.
Live at [deepanshibirla.com](https://deepanshibirla.com).

## Running locally

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build in /build
```

## Project structure

```
src/
├── App.jsx                        # All routes (pages) of the site
├── index.js                       # Entry point
├── pages/                         # One file per page
│   ├── HomePage.jsx               #   Hero, Selected projects, Experience
│   ├── ProjectsPage.jsx
│   ├── UehdCaseStudyPage.jsx      #   /projects/uehd, the UEHD case study
│   └── AboutPage.jsx              #   My journey + interests photo grid
├── components/
│   ├── layout/                    # Shared frame around every page
│   │   ├── Layout.jsx             #   Nav + page + Footer, scrolls to top on page change
│   │   ├── Nav.jsx
│   │   └── Footer.jsx             #   Black "Interested in connecting?" + footer links
│   ├── sections/                  # Big blocks used on the home page
│   │   ├── HeroSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── ExperienceSection.jsx
│   ├── case-study/                # Pieces used by case study pages
│   │   ├── Chapter.jsx            #   One full-width chapter section
│   │   ├── CaseFigure.jsx         #   Image + caption, opens the Lightbox
│   │   ├── Lightbox.jsx           #   Full-screen image viewer
│   │   └── SectionBar.jsx         #   Sticky chapter chips (phones/tablets)
│   └── ...                        # Small reusable pieces (FadeIn, ProjectRow, Icons, …)
├── data/                          # Content — edit these to update text and links
│   ├── site.js                    #   Name, email, resume link, nav links, social links
│   ├── projects.js                #   Portfolio projects (with tags)
│   ├── experience.js              #   Home page Experience section
│   ├── hobbies.js                 #   About page photo grid
│   └── marqueeImages.js           #   Home page image strip
├── hooks/useFadeIn.js
├── styles/globals.css             # All styles, organised in numbered sections
└── Images/
    └── uehd/                      # UEHD case study images (stand-ins for now)
```

## Section style

Every section after a page's top section is a "band": it overlaps the section
above by 20px so its rounded top corners show, and bands alternate `#fafafa`
and `#fff`. Give a `<section>` the classes `band band--b` (#fafafa) or
`band band--a` (#fff), starting with `band--b` right after the top section.

## Common edits

- **Change email / social links / nav menu:** `src/data/site.js`
- **Add or reorder a project:** `src/data/projects.js` (the home page shows the first two). Use `to` for a page on this site, `href` for an external link.
- **Update the Experience section:** `src/data/experience.js` (wrap words in `**…**` to bold them)
- **Add your interest photos:** put images in `src/Images/`, then set `img` for each hobby in `src/data/hobbies.js`
- **Replace UEHD case study images:** swap the files in `src/Images/uehd/` (keep the names, or update the imports at the top of `UehdCaseStudyPage.jsx`)
- **Add a page:** create it in `src/pages/`, add a `<Route>` in `src/App.jsx`, and optionally add it to `NAV_LINKS` in `src/data/site.js`.

## Deployment

Deployed on Vercel. `vercel.json` sends every URL to `index.html` so React Router can handle routes like `/about` and `/projects/uehd`.
