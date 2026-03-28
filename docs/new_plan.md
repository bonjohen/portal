# Enhancement Plan: johnboen.com Portal Site — v2

## Workqueue Instructions

This document is a **workqueue file**. It drives implementation of the v2 portal enhancements defined in `docs/new_requirements.md`.

### How to use this file

1. **Work phases in order.** Each phase must be completed before the next begins unless a task is explicitly marked independent.
2. **Update state as you go.** Every task has a `State` field. Transition it through: **Open → Started → Completed**. A task may also be marked **Blocked** with a reason.
3. **Record timestamps.** When moving a task to `Started`, fill in the `Started` datetime (Pacific). When moving to `Completed`, fill in the `Completed` datetime (Pacific).
4. **Check in at every phase boundary.** When all tasks in a phase reach `Completed`, pause and report the phase status to the user before proceeding. This is a hard gate — do not silently advance to the next phase.
5. **Move fast.** The goal is to progress through changes as quickly as possible. Minimize deliberation, prefer execution, and batch related edits. If a task is trivial, start and complete it in one step.
6. **Reference source documents.** `docs/new_requirements.md` is the requirements baseline. `docs/johnboen.md` is the source for professional content. `docs/project_design.md` remains authoritative for project URLs and card data.

### State definitions

| State | Meaning |
|---|---|
| **Open** | Not yet started |
| **Started** | Work in progress |
| **Completed** | Done and verified |
| **Blocked** | Cannot proceed — reason noted |

### Requirements traceability

Each task references the requirement numbers it addresses (e.g., [R1, R2]).

---

## Phase 1 — Hero & About Rewrite

Reframe the entry point of the site to communicate dual purpose and professional depth.

### Task 1.1 — Rewrite hero section [R1, R2, R28, R29]

Rewrite the hero heading, subtitle, and body copy to frame the projects as personal tools the author actively uses that are also made available to others. Avoid generic portfolio language. Convey a real working process.

- **State:** Completed
- **Started:** 2026-03-27 00:20 PST
- **Completed:** 2026-03-27 00:25 PST

### Task 1.2 — Expand About section [R3, R4, R5, R30]

Rewrite the About section drawing from `docs/johnboen.md`. Include: 30 years of database and data engineering experience, deliberate pivot to applied AI, engineering philosophy (structured systems, visible pipelines, AI as a daily tool). Keep it concise — no resume dump.

- **State:** Completed
- **Started:** 2026-03-27 00:20 PST
- **Completed:** 2026-03-27 00:25 PST

### Task 1.3 — Add contact/LinkedIn link [R13, R14, R30]

Add a LinkedIn link to the About section and to the footer. Add "LinkedIn" to the nav if it fits cleanly; otherwise footer and About are sufficient.

- **State:** Completed
- **Started:** 2026-03-27 00:20 PST
- **Completed:** 2026-03-27 00:25 PST

**→ Phase 1 complete.**

---

## Phase 2 — Project Card Enhancements

Add technology tags, motivation lines, and freshness indicators to each card.

### Task 2.1 — Add "Why this exists" line to each card [R11, R12, R29]

Add a short motivation line to each of the four project cards explaining the personal or practical reason the project was built. Not a feature description — a reason.

- **State:** Completed
- **Started:** 2026-03-27 00:25 PST
- **Completed:** 2026-03-27 00:30 PST

### Task 2.2 — Add technology tags to each card [R9, R10, R30]

Add small inline tags to each card showing the major technical themes: e.g., "Pipelines," "Agentic," "API Integration," "Data Viz," "Content Systems," "Client-Side Storage." Style them as pill badges.

- **State:** Completed
- **Started:** 2026-03-27 00:25 PST
- **Completed:** 2026-03-27 00:30 PST

### Task 2.3 — Add freshness indicators to each card [R25, R26, R27]

Add a "Last updated" date or activity marker to each card. Use manually set dates for now (can be automated later).

- **State:** Completed
- **Started:** 2026-03-27 00:25 PST
- **Completed:** 2026-03-27 00:30 PST

### Task 2.4 — Style card enhancements [R20]

Style the new card elements (tags, motivation line, freshness) so the cards remain scannable and don't feel cluttered. Tags should be small pills, motivation line should be visually distinct from the description, freshness should be subtle.

- **State:** Completed
- **Started:** 2026-03-27 00:25 PST
- **Completed:** 2026-03-27 00:30 PST

**→ Phase 2 complete.**

---

## Phase 3 — New Sections: How I Build & Positioning

Add the "How I Build" section and rework Common Themes into a positioning section.

### Task 3.1 — Add "How I Build" section [R6, R7, R8, R30]

Create a new section (between Projects and the positioning section) explaining the development approach: AI-assisted development with Claude, agentic workflows, structured pipelines from data to presentation, local model infrastructure. Keep it to 3–4 short scannable points. Add nav link.

- **State:** Completed
- **Started:** 2026-03-27 00:30 PST
- **Completed:** 2026-03-27 00:35 PST

### Task 3.2 — Rework Common Themes into a positioning section [R15, R16, R17, R28]

Replace the current abstract Common Themes with a first-person positioning section. Directly connect the engineering point of view to the projects: real data in, visible pipeline, usable output. The visitor should think "this person has a clear approach to building things."

- **State:** Completed
- **Started:** 2026-03-27 00:30 PST
- **Completed:** 2026-03-27 00:35 PST

### Task 3.3 — Style new sections

Apply consistent dark aesthetic, typography, and spacing. "How I Build" should feel technical but approachable. Positioning section should feel like a concise manifesto, not a bulleted list.

- **State:** Completed
- **Started:** 2026-03-27 00:30 PST
- **Completed:** 2026-03-27 00:35 PST

**→ Phase 3 complete.**

---

## Phase 4 — What's Next, Transparency, & Expandable Cards

Add the roadmap indicator, AI transparency note, and optional card expansion.

### Task 4.1 — Add "What's Next" indicator [R18, R19]

Add a short note or mini-section below the projects area signaling that projects are actively evolving and new ones are in progress. One or two sentences — not a formal roadmap.

- **State:** Completed
- **Started:** 2026-03-27 00:35 PST
- **Completed:** 2026-03-27 00:40 PST

### Task 4.2 — Add AI transparency note [R23, R24]

Add a concise note (footer or About section) stating that the site and its projects are built with AI assistance — referencing Claude, agentic workflows, and local model usage. Honest and brief.

- **State:** Completed
- **Started:** 2026-03-27 00:35 PST
- **Completed:** 2026-03-27 00:40 PST

### Task 4.3 — Implement expandable card detail [R20, R21, R22]

Add a click-to-expand or detail panel to each project card. Expanded view should have space for: architecture notes, tech stack detail, a "what I learned" paragraph, and an optional screenshot placeholder. Keep the overview scannable — expansion is opt-in.

- **State:** Completed
- **Started:** 2026-03-27 00:35 PST
- **Completed:** 2026-03-27 00:40 PST

### Task 4.4 — Style expandable cards and new elements

Style the expansion interaction (smooth open/close), detail panel layout, and ensure mobile behavior is clean. Transparency note and What's Next should integrate visually without disrupting page flow.

- **State:** Completed
- **Started:** 2026-03-27 00:35 PST
- **Completed:** 2026-03-27 00:40 PST

**→ Phase 4 complete.**

---

## Phase 5 — Responsive Audit, Polish & Final Review

Ensure everything works together across breakpoints and meets all 30 requirements.

### Task 5.1 — Responsive layout audit

Test all new elements (tags, expanded cards, How I Build, positioning section) at mobile (≤480px), tablet (481–768px), and desktop (769px+). Fix any layout breaks.

- **State:** Completed
- **Started:** 2026-03-27 00:40 PST
- **Completed:** 2026-03-27 00:42 PST

### Task 5.2 — Typography and spacing polish

Ensure the new sections, card elements, and expanded views maintain clear visual hierarchy and consistent spacing with the original design.

- **State:** Completed
- **Started:** 2026-03-27 00:40 PST
- **Completed:** 2026-03-27 00:42 PST

### Task 5.3 — Requirements verification [R1–R30]

Walk through every requirement in `docs/new_requirements.md` and confirm it is met. Note any gaps.

- **State:** Completed
- **Started:** 2026-03-27 00:42 PST
- **Completed:** 2026-03-27 00:43 PST

### Task 5.4 — Performance check

Verify page weight is still minimal, no unnecessary dependencies added, fast load, no console errors.

- **State:** Completed
- **Started:** 2026-03-27 00:42 PST
- **Completed:** 2026-03-27 00:43 PST

**→ Phase 5 complete. All enhancements implemented.**
