# Design Document: johnboen.com Landing Site

## 1. Purpose

johnboen.com will serve as the primary entry point to a set of GitHub Pages projects created by John Boen. The site is not intended to be a deep application. Its role is to introduce the project collection, explain what each project is for, and direct visitors to the appropriate live sites and repositories.

The site should present a coherent identity across projects while remaining lightweight, clear, and easy to maintain.

## 2. Goals

The site must provide a simple, polished introduction to John Boen’s web projects.

The site must clearly communicate the purpose and value of each featured project.

The site must route visitors efficiently to the correct destination, including live GitHub Pages sites and GitHub repositories.

The site must establish a consistent visual and conceptual identity across a diverse set of projects involving certification study, labor-market analysis, story structure, and AI usage.

The site should feel like a professional project portal rather than a personal blog.

## 3. Non-Goals

The site is not intended to duplicate the functionality of the linked projects.

The site is not intended to host large datasets, complex interactive pipelines, or embedded versions of the project applications.

The site is not intended to become a content-heavy personal website with frequent long-form updates.

The site is not intended to replace GitHub as the main source for repository details, code history, or technical implementation depth.

## 4. Target Audience

The primary audience includes potential employers, collaborators, technically curious visitors, and general users who want to explore John Boen’s projects.

A secondary audience includes people interested in certification study tools, public data systems, story design tools, and AI adoption analysis.

The site should work for both technical and non-technical visitors by presenting each project in a short, approachable format with clear next actions.

## 5. Site Positioning

The site should position John Boen as someone who builds structured, exploratory, data-driven systems and interfaces that make complex topics easier to understand and use.

The site should communicate that these projects are practical, transparent, and intentionally designed to expose the structure behind the problem being explored.

## 6. Core Message

A suitable core message for the site is:

John Boen builds interactive GitHub Pages projects that turn research, structured data, and exploratory ideas into practical, visual, and usable web experiences.

## 7. Information Architecture

The initial version of the site will be a single-page landing site.

The page will contain the following major sections, in order:

Hero section

Featured projects section

Common themes section

About section

Footer

Top-level navigation should remain simple and should support quick jumps within the page or to external destinations.

Recommended navigation items are:

Home

Projects

About

GitHub

## 8. Content Requirements

### 8.1 Hero Section

The hero section must immediately identify the site owner and the purpose of the site.

Required content:

Primary heading: John Boen

Supporting heading describing the type of work represented by the site

Short body copy explaining that the site is the front door to a collection of GitHub Pages projects involving AI, data, learning, and narrative systems

Primary call-to-action button leading to the projects section

Secondary call-to-action button leading to the GitHub profile

Recommended hero message:

I build GitHub Pages projects that turn research, structured data, and exploratory ideas into sites people can actually use.

### 8.2 Featured Projects Section

The featured projects section is the central content area of the site.

This section must present eight project cards. Each card must provide enough information for a visitor to understand the project at a glance and choose whether to explore the live site or repository.

Each project card must include:

Project name

Short value statement

Brief supporting description

Live site link when applicable

Repository link when applicable

The featured projects shall appear in the following recommended order:

1. Certification

2. JobClass

3. MD Reader

4. Epstein DOJ Disclosures

5. AI Usage Trust Paradox

6. Story Structure Explorer

7. Artemis

8. Lessons Hub

This order is chosen to place the most immediately understandable and practical projects first, followed by more exploratory and cross-cutting projects.

### 8.3 Common Themes Section

This section must explain what ties the projects together.

It should highlight recurring principles such as structured data, visible systems, layered pipelines, exploratory interfaces, and making complexity understandable without hiding it.

This section should help visitors see the collection as a coherent body of work rather than a random set of unrelated repositories.

### 8.4 About Section

The about section must briefly introduce John Boen in a professional, concise way.

It should mention long-term experience in software and data engineering, interest in AI and process design, and the intention behind the projects.

This section should remain short and should not become a full biography.

### 8.5 Footer

The footer must include:

A link to the GitHub profile

A copyright or ownership line for johnboen.com

Optional short note indicating that the featured projects are repository-backed and static-site friendly

## 9. Project Content Specifications

### 9.1 Certification

This project should be described as a scenario-based certification study site covering multiple providers and exams.

The description should mention that it includes 2,500 scenario-based questions covering 50 exams across ten providers (AWS, Azure, GCP, Anthropic, GitHub, Databricks, NVIDIA, Cisco, CompTIA, ISC2).

The description should highlight the latest expansion: 10 exams added across new and existing providers. It should also note that several exams now carry lifecycle status badges as vendors retire and replace them (e.g., AWS SOA-C02 retired, Azure AI-900 and AZ-204 ending soon).

Required links:

Live site: [https://bonjohen.github.io/certification/](https://bonjohen.github.io/certification/)

Repository: [https://github.com/bonjohen/certification](https://github.com/bonjohen/certification)

### 9.2 JobClass

This project should be described as an analysis of government job data supported by multiple pipelines.

The description should mention extraction and processing, a 57+ table DuckDB warehouse across four layers, Pipeline Explorer visualization, and the fact that the live site includes 21 lessons learned, architecture discussions, and CPI domain analysis.

Required links:

Live site: [https://bonjohen.github.io/jobclass/](https://bonjohen.github.io/jobclass/)

Repository: [https://github.com/bonjohen/jobclass](https://github.com/bonjohen/jobclass)

### 9.3 Story Structure Explorer

This project should be described as a story structure and generation tool.

The description should mention that it began as a story arc evaluation tool and now supports exploration of archetypal beats, worldbuilding refinement, and agentic generation of dialogue between characters and or narrator.

The description should mention that the project uses a bring-your-own API key model.

Required links:

Live site: [https://bonjohen.github.io/story_v5/](https://bonjohen.github.io/story_v5/)

Repository: [https://github.com/bonjohen/story_v5](https://github.com/bonjohen/story_v5)

### 9.4 AI Usage Repository Project

This project should be described as a visually interesting and fun-to-use exploration of AI usage and related observations.

The description should position it as an exploratory project that turns an observation about AI into a set of browsable web pages.

Required links:

Live site: [https://bonjohen.github.io/ai_usage/](https://bonjohen.github.io/ai_usage/)

Repository: [https://github.com/bonjohen/ai_usage](https://github.com/bonjohen/ai_usage)

### 9.5 AI Usage Trust Paradox

This project should be described as a focused presentation of the paradox that about three quarters of people use AI while only about one third trust it.

The description should emphasize that the project is designed to highlight the gap between adoption and trust in a way that is visually engaging and easy to understand.

Required link:

Live site: [https://aiusage.johnboen.com/](https://aiusage.johnboen.com/)

Repository link is optional and should only be shown if there is a public repository intended for visitors.

### 9.6 MD Reader

This project should be described as a browser-based markdown reader with integrated text-to-speech, live editing, and playlist navigation.

The description should mention that it was built as a daily workflow tool — for reading and editing AI responses while the next one generates, reviewing written work, and saving clean output. It should note that the tool supports folder-based playlist navigation, one-click download, and full GitHub Flavored Markdown rendering with syntax-highlighted code blocks.

The description should mention that it is a pure static site with no frameworks, no build step, and no backend.

Required links:

Live site: [https://mdreader.johnboen.com/](https://mdreader.johnboen.com/)

Repository: [https://github.com/bonjohen/mdreader](https://github.com/bonjohen/mdreader)

### 9.7 Artemis

This project should be described as a data science and engineering platform for optimizing a 13-month calendar from NASA Artemis II mission imagery.

The description should mention that it ingests approximately 12,000 Artemis II photos, extracts CLIP-based visual embeddings, clusters for diversity using k-means, scores images via Elo and Borda voting, and uses Hungarian algorithm optimization to assign the best images to calendar months.

The description should mention the interactive web dashboard for browsing, comparison, cluster exploration, and vote simulation. It should note that the platform includes a layered DuckDB warehouse and full PDF calendar rendering.

Required links:

Live site: [https://artemis.johnboen.com/](https://artemis.johnboen.com/)

Repository: [https://github.com/bonjohen/Artemis](https://github.com/bonjohen/Artemis)

### 9.8 Lessons Hub

This project should be described as a searchable, AI-powered library that harvests lessons-learned documents from multiple GitHub repositories into a unified site.

The description should mention the Astro-based static site, Python harvesting pipeline, Pagefind full-text search, RAG-powered chatbot with citations, browser-native text-to-speech with paragraph highlighting, and automatic gap detection.

The description should note that the site currently indexes 132 lessons from 4 repositories across 74 tags, and supports configurable LLM backends (AWS Bedrock, Azure OpenAI, Vertex AI).

Required links:

Live site: [https://lessons.johnboen.com/](https://lessons.johnboen.com/)

Repository: [https://github.com/bonjohen/Lessons](https://github.com/bonjohen/Lessons)

## 10. Functional Requirements

The site must be delivered as a static site suitable for GitHub Pages hosting.

The site must work well on desktop and mobile layouts.

The site must load quickly and avoid unnecessary dependencies.

The site must provide clear outbound navigation to each project’s live site and repository.

The site must support direct linking to major sections of the page.

The site must present the projects in a way that makes scanning easy and next actions obvious.

The site should allow future additions of more project cards without requiring a full redesign.

## 11. User Experience Requirements

The site must feel simple, intentional, and professional.

A first-time visitor must be able to understand the purpose of the site within a few seconds.

A visitor must be able to identify all featured projects and choose one to explore with minimal friction.

Buttons and links must be visually obvious and clearly labeled.

The landing page must avoid clutter, excessive text density, and competing visual priorities.

The user experience should emphasize clarity first, then visual polish.

## 12. Visual Design Requirements

The recommended visual direction is a dark, clean, technical aesthetic.

Typography should be strong and readable, with clear hierarchy between headings, supporting text, and action links.

Project cards should feel substantial and interactive, with subtle motion or hover treatment if used.

The design should avoid a blog-like feel and instead resemble a polished project portfolio for working systems.

Color, spacing, and layout should support scanning and quick comprehension.

The visual design should create a shared identity across the linked projects without overpowering their individual character.

## 13. Technical Requirements

The site should be implemented in a way that is easy to maintain inside a dedicated repository for the root domain.

The preferred implementation is a small static site with minimal moving parts.

The site should not depend on server-side logic.

The site should support deployment through GitHub Pages.

The structure should make it easy to update project descriptions, add new cards, or change links.

## 14. Content Style Requirements

The writing must be concise, professional, and direct.

Descriptions should be understandable by a broad audience without becoming simplistic.

The tone should reflect a technically capable builder who cares about clarity, structure, and useful systems.

Project summaries should focus on value and purpose first, with implementation detail only where it helps orientation.

## 15. Version 1 Scope

Version 1 will include:

A single responsive landing page

A hero section

A featured projects section with eight project cards

A common themes section

A short about section

A footer with GitHub link and ownership information

This scope is intentionally limited so that the site can act as an effective front door without becoming another large project.

## 16. Future Considerations

Future versions may add:

Shared branding elements that visually connect the portal to the individual project sites

Project tags such as AI, Data, Learning, Story, Pipeline, or Visualization

A small section for featured updates or latest additions

Expanded project metadata such as technologies used or intended audience

Additional portfolio entries as new GitHub Pages projects are created

These are optional and should not delay the initial release.

## 17. Success Criteria

The site will be considered successful if:

A visitor can quickly understand that johnboen.com is the entry point to a collection of GitHub-hosted projects

A visitor can identify the purpose of each project without opening the repository first

A visitor can easily navigate to the desired live site or repository

The site feels coherent, polished, and lightweight

The portal strengthens the visibility and accessibility of the broader project collection

## 18. Recommended Implementation Approach

Create a dedicated repository for johnboen.com and keep the implementation intentionally small.

Build a single high-quality landing page rather than a multi-page application.

Focus on strong layout, clear project cards, excellent link clarity, and a consistent visual identity.

Treat johnboen.com as the front door to the project ecosystem, not as a separate deep product.
