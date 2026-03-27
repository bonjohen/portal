# Project Plan: johnboen.com Portal Site

## Workqueue Instructions

This document is a **workqueue file**. It drives implementation of the johnboen.com portal site from start to finish.

### How to use this file

1. **Work phases in order.** Each phase must be completed before the next begins unless a task is explicitly marked independent.
2. **Update state as you go.** Every task has a `State` field. Transition it through: **Open → Started → Completed**. A task may also be marked **Blocked** with a reason.
3. **Record timestamps.** When moving a task to `Started`, fill in the `Started` datetime (Pacific). When moving to `Completed`, fill in the `Completed` datetime (Pacific).
4. **Check in at every phase boundary.** When all tasks in a phase reach `Completed`, pause and report the phase status to the user before proceeding. This is a hard gate — do not silently advance to the next phase.
5. **Move fast.** The goal is to progress through changes as quickly as possible. Minimize deliberation, prefer execution, and batch related edits. If a task is trivial, start and complete it in one step.
6. **Reference the design document.** `docs/project_design.md` is authoritative for content, URLs, and visual direction. Do not invent content — pull it from the design doc.

### State definitions

| State | Meaning |
|---|---|
| **Open** | Not yet started |
| **Started** | Work in progress |
| **Completed** | Done and verified |
| **Blocked** | Cannot proceed — reason noted |

---

## Phase 1 — Project Scaffolding

Set up the file structure, boilerplate HTML, and baseline CSS so all subsequent phases have a place to land.

### Task 1.1 — Create index.html with semantic skeleton

Create `index.html` with DOCTYPE, head (meta charset, viewport, title, favicon placeholder, CSS link), and body containing empty semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`. Include section shells with IDs for `#home`, `#projects`, `#themes`, `#about`.

- **State:** Open
- **Started:**
- **Completed:**

### Task 1.2 — Create base stylesheet

Create `css/styles.css` with CSS reset/normalize, CSS custom properties for the dark color palette, base typography (font stack, sizes, weights), and responsive breakpoints. Establish the dark, clean, technical aesthetic per the design doc.

- **State:** Open
- **Started:**
- **Completed:**

### Task 1.3 — Create JavaScript file

Create `js/main.js` with placeholder structure for smooth-scroll navigation and any future interactivity. Keep it minimal.

- **State:** Open
- **Started:**
- **Completed:**

### Task 1.4 — Verify scaffolding renders

Open `index.html` in a browser or confirm the structure is valid. Ensure CSS loads, dark background applies, and no console errors.

- **State:** Open
- **Started:**
- **Completed:**

**→ Phase 1 check-in required before proceeding.**

---

## Phase 2 — Navigation & Hero Section

Build the fixed/sticky nav and the hero section — the first thing visitors see.

### Task 2.1 — Build navigation bar

Implement the top nav with links: Home (`#home`), Projects (`#projects`), About (`#about`), GitHub (external link to profile). Style for desktop and mobile (hamburger or collapsible menu on small screens).

- **State:** Open
- **Started:**
- **Completed:**

### Task 2.2 — Build hero section

Implement the hero section per design doc §8.1: primary heading "John Boen", supporting heading, body copy, primary CTA (→ projects section), secondary CTA (→ GitHub profile). Use the recommended hero message from the design doc.

- **State:** Open
- **Started:**
- **Completed:**

### Task 2.3 — Style hero section

Apply dark aesthetic, strong typography hierarchy, CTA button styling, and responsive layout. Hero should be visually commanding but not cluttered.

- **State:** Open
- **Started:**
- **Completed:**

**→ Phase 2 check-in required before proceeding.**

---

## Phase 3 — Featured Projects Section

This is the core content area. Build all five project cards with correct data from the design doc.

### Task 3.1 — Build project card component

Design and implement a reusable card structure: project name, value statement, description, live-site link button, repository link button. Cards must be easy to duplicate for future additions.

- **State:** Open
- **Started:**
- **Completed:**

### Task 3.2 — Populate Certification card

Content and links per design doc §9.1. Scenario-based certification study site, 1300 questions, 26 exams, four providers, CCA-F mention.

- **State:** Open
- **Started:**
- **Completed:**

### Task 3.3 — Populate JobClass card

Content and links per design doc §9.2. Government job data analysis, pipelines, warehouse build, common practices, lessons learned.

- **State:** Open
- **Started:**
- **Completed:**

### Task 3.4 — Populate AI Usage Trust Paradox card

Content and links per design doc §9.5. Three-quarters use AI, one-third trust it. Visual, engaging. Live site link only (repo link optional).

- **State:** Open
- **Started:**
- **Completed:**

### Task 3.5 — Populate Story Structure Explorer card

Content and links per design doc §9.3. Story arc evaluation, archetypal beats, worldbuilding, agentic generation, BYOK model.

- **State:** Open
- **Started:**
- **Completed:**

### Task 3.6 — Populate AI Usage Repository card

Content and links per design doc §9.4. Visual exploration of AI usage observations, browsable web pages.

- **State:** Open
- **Started:**
- **Completed:**

### Task 3.7 — Style project cards

Apply card layout (grid or responsive columns), dark card surfaces, hover effects, button styling, spacing. Cards should feel substantial and interactive per design doc §12.

- **State:** Open
- **Started:**
- **Completed:**

**→ Phase 3 check-in required before proceeding.**

---

## Phase 4 — Common Themes & About Sections

Fill in the narrative sections that give context to the project collection.

### Task 4.1 — Build common themes section

Implement the themes section per design doc §8.3. Highlight structured data, visible systems, layered pipelines, exploratory interfaces, making complexity understandable. Present the collection as coherent work.

- **State:** Open
- **Started:**
- **Completed:**

### Task 4.2 — Build about section

Implement the about section per design doc §8.4. Brief professional intro — software and data engineering experience, interest in AI and process design, intention behind the projects. Keep short.

- **State:** Open
- **Started:**
- **Completed:**

### Task 4.3 — Style themes and about sections

Apply consistent typography, spacing, and dark aesthetic. Ensure visual flow from the project cards above into these sections.

- **State:** Open
- **Started:**
- **Completed:**

**→ Phase 4 check-in required before proceeding.**

---

## Phase 5 — Footer & Smooth Scroll

Wrap up the page structure and wire up navigation behavior.

### Task 5.1 — Build footer

Implement footer per design doc §8.5: GitHub profile link, copyright line for johnboen.com, optional note about repo-backed static sites.

- **State:** Open
- **Started:**
- **Completed:**

### Task 5.2 — Implement smooth-scroll navigation

Wire up nav links and CTAs to smooth-scroll to their target sections. Ensure anchor links work for direct linking (`#projects`, `#about`, etc.).

- **State:** Open
- **Started:**
- **Completed:**

### Task 5.3 — Mobile navigation behavior

Ensure nav works on mobile — hamburger toggle, menu closes on link click, touch-friendly targets.

- **State:** Open
- **Started:**
- **Completed:**

**→ Phase 5 check-in required before proceeding.**

---

## Phase 6 — Responsive Design & Polish

Final pass to ensure the site looks and works well everywhere.

### Task 6.1 — Responsive layout audit

Test and fix layout at mobile (≤480px), tablet (481–768px), and desktop (769px+) breakpoints. Ensure project cards stack properly, text remains readable, buttons are tappable.

- **State:** Open
- **Started:**
- **Completed:**

### Task 6.2 — Typography and spacing polish

Refine font sizes, line heights, margins, and padding across all sections. Ensure clear visual hierarchy and comfortable reading.

- **State:** Open
- **Started:**
- **Completed:**

### Task 6.3 — Hover and interaction effects

Add subtle hover transitions on project cards and buttons. Keep effects minimal and purposeful — portfolio feel, not flashy.

- **State:** Open
- **Started:**
- **Completed:**

### Task 6.4 — Performance check

Verify minimal file sizes, no unnecessary dependencies, fast load. Confirm no console errors. Validate HTML.

- **State:** Open
- **Started:**
- **Completed:**

**→ Phase 6 check-in required before proceeding.**

---

## Phase 7 — Deployment Readiness

Prepare for GitHub Pages deployment.

### Task 7.1 — Add meta tags and SEO basics

Add `<meta>` description, Open Graph tags, and a `<title>` appropriate for the site. Add a simple favicon if available.

- **State:** Open
- **Started:**
- **Completed:**

### Task 7.2 — Add CNAME file

Create `CNAME` with `johnboen.com` for GitHub Pages custom domain.

- **State:** Open
- **Started:**
- **Completed:**

### Task 7.3 — Final review against design document

Walk through `docs/project_design.md` sections 1–18 and confirm every requirement is met: all five cards present with correct content and links, all sections in order, responsive, fast, correct tone.

- **State:** Open
- **Started:**
- **Completed:**

### Task 7.4 — Commit and push

Stage all files, commit with a clear message, push to `main` for GitHub Pages deployment.

- **State:** Open
- **Started:**
- **Completed:**

**→ Phase 7 check-in required. Project complete.**
