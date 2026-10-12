# Humanward Labs — humanwardlabs.com

Static landing page for Humanward Labs, a human-centered product and experience design studio in Richmond, VA.

## Hosting

Deployed on Cloudflare Pages, connected to this repo. Every push to `main` publishes automatically.

Cloudflare Pages build settings:

- Framework preset: None
- Build command: (leave blank)
- Deployed as a Cloudflare Worker with static assets: `wrangler.jsonc` serves the `public/` folder
- Production branch: `main`

## Files

- `index.html` — the page (hero with scroll cue, scroll sequence on the tablet, impact, services flip cards, FAQ, contact dialog). The tablet screen is a `<canvas>`: a scattered field of dots orders into a grid, folds into a line and resolves into the Humanward line-and-dot mark as you scroll.
- `assets/tablet-*.webp` — tablet photo at three widths
- `fonts/` — self-hosted Host Grotesk (OFL)
- `robots.txt`, `sitemap.xml`, `llms.txt` — search and AI-answer discovery
- `_headers`, `404.html`, `site.webmanifest`, icons
- `assets/og.jpg` — social share preview
- `favicon.svg` — browser tab icon

Contact: info@humanwardlabs.com
