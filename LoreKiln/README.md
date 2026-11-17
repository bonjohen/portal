# LoreKiln — Story Shapes Demonstration

A self-contained, static, single-page 60-second demonstration. No build tooling, hosting backend, or external dependencies.

## Publish

Upload `index.html` and the `assets` directory to a website's document root (or any subdirectory). Open `index.html` in a browser.

For local testing, open `index.html` directly or serve the directory with your preferred static web server.

## What it does

The page crops and zooms an existing 1536 × 1024 infographic across six timed scenes, with two short text blocks per scene. Play/Pause, Previous, Next, and Restart controls are included. The narration text is displayed but **not** spoken automatically; record or speak the narration separately. Total timeline: exactly 60 seconds.

## Editing

Open `index.html` and edit the `scenes` array near the bottom. Each scene has a `duration`, an image `crop` as `[left, top, width, height]` in source pixels, a title, and two narration `blocks`. Durations should total 60 seconds if you keep the current presentation length. Image file: `assets/story-archetypes.png`.

## Accuracy

The infographic is a conceptual illustration, not a data-accurate plot of the spreadsheet's emotional values. The page explicitly identifies it as such.
