# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **johnboen.com** — a single-page static landing site that serves as the entry point to a collection of GitHub Pages projects by John Boen. It is a lightweight project portal, not a blog or deep application.

The design document lives at `docs/project_design.md` and is the authoritative source for content requirements, project descriptions, link URLs, and visual direction.

## Technical Stack

- Static HTML/CSS/JS site — no frameworks, no server-side logic, no build step
- Hosted on GitHub Pages at the root domain johnboen.com
- Must be responsive (desktop and mobile)
- Must load fast with minimal dependencies

## Site Structure

Single-page layout with these sections in order:
1. **Hero** — name, tagline, CTAs (projects section + GitHub profile)
2. **Featured Projects** — five project cards (Certification, JobClass, AI Usage Trust Paradox, Story Structure Explorer, AI Usage Repository)
3. **Common Themes** — what ties the projects together
4. **About** — brief professional intro
5. **Footer** — GitHub link, copyright

Navigation: Home, Projects, About, GitHub (in-page anchors + external link).

## Project Card Data

Each project card needs: name, value statement, description, live site link, and repository link. All URLs and content requirements are specified in `docs/project_design.md` sections 9.1–9.5. Always reference that document when updating project content.

## Design Direction

- Dark, clean, technical aesthetic
- Strong typography with clear hierarchy
- Project cards should feel substantial with subtle hover effects
- Portfolio feel, not blog feel
- Clarity first, then visual polish

## Key Constraints

- No server-side logic — everything must work as static files
- Must be easy to add new project cards without redesign
- Content tone: concise, professional, direct — accessible to both technical and non-technical visitors
- The portal should not duplicate functionality from linked projects
