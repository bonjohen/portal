# Release Plan: Add Epstein DOJ Disclosures Project to Portal

## Workqueue Instructions

This document is a **workqueue file** for adding the Epstein DOJ Disclosures RAG project to the johnboen.com portal. Follow the same conventions as `new_plan.md`: update State, record timestamps (PST), check in at phase boundaries, and move fast.

### State definitions

| State | Meaning |
|---|---|
| **Open** | Not yet started |
| **Started** | Work in progress |
| **Completed** | Done and verified |
| **Blocked** | Cannot proceed — reason noted |

---

## Phase 1 — Card Content & Placement

Determine content, tags, and position for the new project card.

### Task 1.1 — Draft card content

Write the card title, value statement, "why this exists" motivation, description, technology tags, freshness date, and expanded detail content (architecture, tech stack, what I learned). Source: C:\Projects\epstein README, project-plan.md, and code inspection.

- **State:** Completed
- **Started:** 2026-03-27 00:50 PST
- **Completed:** 2026-03-27 00:53 PST

### Task 1.2 — Determine card position

Decide where the Epstein card fits in the project order. Consider the existing card sequence (Certification, JobClass, AI Usage Trust Paradox, Story Structure Explorer) and the design doc's principle of placing the most immediately understandable projects first.

Position: 3rd (after JobClass, before AI Usage Trust Paradox). Rationale: it pairs naturally with JobClass as another pipeline/data project, and it's the most technically deep project — placing it mid-sequence lets visitors encounter accessible projects first.

- **State:** Completed
- **Started:** 2026-03-27 00:50 PST
- **Completed:** 2026-03-27 00:53 PST

**→ Phase 1 complete.**

---

## Phase 2 — Implementation

Add the card to index.html, update CSS if needed, and verify.

### Task 2.1 — Add project card to index.html

Insert the new card with all v2 elements: title, value, why, description, tags, freshness, expandable detail panel (architecture, tech stack, what I learned), and links (repository only — no live site).

- **State:** Completed
- **Started:** 2026-03-27 00:53 PST
- **Completed:** 2026-03-27 00:56 PST

### Task 2.2 — Update README.md

Add the Epstein project to the Featured Projects table in README.md.

- **State:** Completed
- **Started:** 2026-03-27 00:53 PST
- **Completed:** 2026-03-27 00:56 PST

### Task 2.3 — Verify card renders and expands

Confirm the new card displays correctly in the grid, tags render, expansion works, and no layout breaks on mobile/desktop.

- **State:** Completed
- **Started:** 2026-03-27 00:56 PST
- **Completed:** 2026-03-27 00:57 PST

**→ Phase 2 complete.**

---

## Phase 3 — Commit

### Task 3.1 — Commit changes

Stage and commit with a clear message.

- **State:** Completed
- **Started:** 2026-03-27 00:57 PST
- **Completed:** 2026-03-27 00:58 PST

**→ Phase 3 complete.**
