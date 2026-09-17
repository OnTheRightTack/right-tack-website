# Right Tack Website

This repository contains the source files for the Right Tack website at `ontherighttack.com`.

## Architecture

- Plain semantic HTML
- Handwritten CSS
- JavaScript only when the experience requires it
- Git for local version history
- GitHub for the remote repository and static website publishing
- Cloudflare for DNS and domain routing
- Direct email contact with the address assembled in the browser to reduce basic scraper harvesting

## Project Files

- `index.html` contains the page structure and content.
- `styles.css` contains the visual design and responsive layout.
- `script.js` creates the email action without exposing the complete address in the page markup.
- `assets/images/` contains optimized website images and their source-quality counterparts when appropriate.

## Working Method

1. Make and review changes locally.
2. Save meaningful milestones as Git commits.
3. Push commits to the private GitHub repository.
4. Push approved changes to GitHub.
5. Publish the `main` branch through the selected static hosting configuration.

Passwords, private form submissions, API keys, and other secrets must never be committed to this repository.

## Current Status

The first complete website draft is being rebranded as Right Tack. The main page remains marked `noindex` until `ontherighttack.com` is connected and launch checks are complete. The contact path opens the visitor's email application instead of collecting information through a website form.
