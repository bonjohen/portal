# Portal Update — Add Artemis & Lessons, Update Certification & JobClass

**Source document:** `C:\Users\boen3\.claude\plans\partitioned-kindling-bear.md`
**Project root:** `C:\Projects\portal`
**Date:** 2026-05-11 12:30 PM (PST)

## Work Queue Instructions

### State Transitions

Open  -->  Started  -->  Completed
              |
              └-->  Blocked  -->  Started  -->  Completed

- **Open**: Not yet begun.
- **Started**: Actively in progress. Record the start datetime (PST).
- **Completed**: Done and verified. Record the completion datetime (PST).
- **Blocked**: Cannot proceed; note the blocker in the description.

### Commit Protocol

1. Work through all tasks in a phase.
2. When every task reaches Completed, write the Phase Summary.
3. Stage and commit all changes for the phase. Do not push.
4. Proceed immediately to the next phase.

## Phase 1: Update Existing Cards — Certification & JobClass

**Goal:** Certification and JobClass cards reflect current project state with updated URLs, descriptions, tags, and expanded details.
**Depends on:** Nothing (first phase).

| PhaseNo | Status | Started (PST) | Completed (PST) | Description |
|---------|--------|---------------|------------------|-------------|
| 1.1 | Completed | 2026-05-11 12:35 PM | 2026-05-11 12:37 PM | Update Certification card in `index.html`: description (Atlas, JSON migration, lifecycle badges, lessons section), freshness date, Live Site URL to `certification.johnboen.com`, add JSON tag |
| 1.2 | Completed | 2026-05-11 12:37 PM | 2026-05-11 12:38 PM | Update Certification expanded details in `index.html`: Architecture (JSON data layer), Tech Stack (JSON schema validation) |
| 1.3 | Completed | 2026-05-11 12:38 PM | 2026-05-11 12:40 PM | Update JobClass card in `index.html`: value line (21 lessons), description (57+ table DuckDB warehouse, 840+ tests, Pipeline Explorer, CPI), freshness date, Live Site URL to `jobclass.johnboen.com`, add DuckDB tag |
| 1.4 | Completed | 2026-05-11 12:40 PM | 2026-05-11 12:41 PM | Update JobClass expanded details in `index.html`: Architecture (4-tier warehouse, Pipeline Explorer), Tech Stack (DuckDB, FastAPI, 840+ tests) |

### Phase 1 Summary

- **Changes:** TBD
- **Commit:** `Update Certification and JobClass cards with current project state`

## Phase 2: Add New Cards — Artemis & Lessons

**Goal:** Portal has 8 project cards with Artemis and Lessons Hub added at positions 7 and 8.
**Depends on:** Phase 1.

| PhaseNo | Status | Started (PST) | Completed (PST) | Description |
|---------|--------|---------------|------------------|-------------|
| 2.1 | Completed | 2026-05-11 12:42 PM | 2026-05-11 12:44 PM | Add Artemis card to `index.html` after Story Structure Explorer, following existing card pattern with full content, tags, expanded details, and links |
| 2.2 | Completed | 2026-05-11 12:44 PM | 2026-05-11 12:44 PM | Add Lessons Hub card to `index.html` after Artemis, following existing card pattern with full content, tags, expanded details, and links |

### Phase 2 Summary

- **Changes:** TBD
- **Commit:** `Add Artemis and Lessons Hub project cards to portal`

## Phase 3: Update Documentation

**Goal:** CLAUDE.md, README.md, and design doc all reflect 8 cards with current content.
**Depends on:** Phase 2.

| PhaseNo | Status | Started (PST) | Completed (PST) | Description |
|---------|--------|---------------|------------------|-------------|
| 3.1 | Completed | 2026-05-11 12:45 PM | 2026-05-11 12:46 PM | Update `CLAUDE.md`: project card list to 8 cards, nav list to include Process |
| 3.2 | Completed | 2026-05-11 12:46 PM | 2026-05-11 12:47 PM | Update `README.md`: project count to 8, update table with all projects and current descriptions |
| 3.3 | Completed | 2026-05-11 12:47 PM | 2026-05-11 12:49 PM | Update `docs/project_design.md`: section 8.2 to 8 cards, section 9.1 cert numbers, section 9.2 JobClass 21 lessons, add sections 9.7 (Artemis) and 9.8 (Lessons Hub) |

### Phase 3 Summary

- **Changes:** TBD
- **Commit:** `Update CLAUDE.md, README, and design doc to reflect eight project cards`

## Phase 4: Review Fixes

**Goal:** Address Medium and Low findings from `docs/review-2026-05-11.md`.
**Depends on:** Phase 3.

| PhaseNo | Status | Started (PST) | Completed (PST) | Description |
|---------|--------|---------------|------------------|-------------|
| 4.1 | Completed | 2026-05-11 12:49 PM | 2026-05-11 12:50 PM | Add `.nav-link.active` CSS rule to `css/styles.css` (F-05) |
| 4.2 | Completed | 2026-05-11 12:50 PM | 2026-05-11 12:51 PM | Remove dead `.hero-ctas` and `.btn-primary` CSS from `css/styles.css` (F-06) |
| 4.3 | Completed | 2026-05-11 12:51 PM | 2026-05-11 12:51 PM | Fix "seceral" typo to "several" in MD Reader card in `index.html` (F-10) |
| 4.4 | Completed | 2026-05-11 12:51 PM | 2026-05-11 12:52 PM | Add `.gitignore` with standard OS/IDE entries (F-01) |

### Phase 4 Summary

- **Changes:** TBD
- **Commit:** `Fix review findings: active nav styling, dead CSS, typo, gitignore`
