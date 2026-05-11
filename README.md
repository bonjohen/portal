# johnboen.com

The front door to a collection of GitHub Pages projects by John Boen.

**Live site:** [johnboen.com](https://johnboen.com)

---

## What This Is

A single-page portal site that introduces eight actively maintained projects spanning certification study, labor market analysis, markdown tooling, document-scale RAG, AI adoption research, story structure exploration, calendar optimization, and cross-project lessons aggregation. Each project started as a personal tool to answer a real question, then grew into something others can use.

The portal communicates what was built, why it was built, and how it was built — serving as both a personal resource hub and a professional technology portfolio.

## Featured Projects

| Project | What It Does | Links |
|---|---|---|
| **Certification** | 2,500 scenario-based questions across 50 exams and 10 providers, Atlas design system, JSON data layer | [Live](https://certification.johnboen.com/) / [Repo](https://github.com/bonjohen/certification) |
| **JobClass** | Labor market data pipeline with 57+ table DuckDB warehouse, 21 lessons learned, Pipeline Explorer | [Live](https://jobclass.johnboen.com/) / [Repo](https://github.com/bonjohen/jobclass) |
| **MD Reader** | Browser-based markdown reader with text-to-speech, editing, and playlist navigation | [Live](https://mdreader.johnboen.com/) / [Repo](https://github.com/bonjohen/mdreader) |
| **Epstein DOJ Disclosures** | RAG system for AI-powered search over 4,000+ DOJ disclosure PDFs | [Docs](https://epstein.johnboen.com/) / [Repo](https://github.com/bonjohen/epstein) |
| **AI Usage Trust Paradox** | Visual exploration of why 3/4 of people use AI but only 1/3 trust it | [Live](https://aiusage.johnboen.com/) / [Repo](https://github.com/bonjohen/ai_usage) |
| **Story Structure Explorer** | Story arc evaluation, worldbuilding, and agentic dialogue generation (BYOK) | [Live](https://bonjohen.github.io/story_v5/) / [Repo](https://github.com/bonjohen/story_v5) |
| **Artemis** | Calendar optimization from 12,000 NASA Artemis II photos using CLIP, Elo, and Hungarian algorithm | [Live](https://artemis.johnboen.com/) / [Repo](https://github.com/bonjohen/Artemis) |
| **Lessons Hub** | Searchable, AI-powered library harvesting 132 lessons from 4 repos with RAG chatbot and voice reader | [Live](https://lessons.johnboen.com/) / [Repo](https://github.com/bonjohen/Lessons) |

## Technical Stack

- **Static HTML/CSS/JS** — no frameworks, no build step, no server-side logic
- **Inter** (Google Fonts) for typography
- **GitHub Pages** for hosting with custom domain via CNAME
- **~38 KB total** page weight (HTML + CSS + JS)

## Site Features

- Dark, technical aesthetic with responsive layout (mobile, tablet, desktop)
- Fixed navigation with smooth scroll and mobile hamburger menu
- Project cards with technology tags, motivation lines, freshness dates, and expandable detail panels (architecture, tech stack, lessons learned)
- "How I Build" section covering AI-assisted development, agentic workflows, structured pipelines, and local model infrastructure
- First-person positioning section connecting the engineering approach to the work
- AI transparency note in the footer

## Repository Structure

```
index.html              Single-page site
css/styles.css          Complete stylesheet (custom properties, responsive)
js/main.js              Nav toggle, scroll tracking, card expansion
CNAME                   GitHub Pages custom domain (johnboen.com)
CLAUDE.md               Claude Code project instructions
docs/
  project_design.md     Authoritative design document (content, URLs, visual direction)
  project_plan.md       v1 build workqueue (completed)
  new_requirements.md   v2 enhancement requirements (30 items)
  new_features.md       Feature ideas and rationale
  new_plan.md           v2 enhancement workqueue (completed)
  johnboen.md           Professional profile content (source for About section)
```

## Local Development

No build step required. Open `index.html` directly or start any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## How It Was Built

This site was built using AI-assisted development with Claude as the primary coding platform. The process followed structured workqueue documents (`docs/project_plan.md` and `docs/new_plan.md`) that tracked phased implementation from scaffolding through deployment readiness. The design document (`docs/project_design.md`) served as the authoritative source for all content and visual direction.

## License

Copyright 2026 John Boen. All rights reserved.
