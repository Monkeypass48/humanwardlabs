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

- `index.html` — the page (hero with scroll cue, tablet scroll sequence with reel video, impact, services flip cards, FAQ, contact dialog)
- `assets/tablet-*.webp` — tablet photo at three widths
- `assets/reel.mp4`, `assets/reel.webm`, `assets/reel-poster.webp` — 12-second design reel shown on the tablet
- `fonts/` — self-hosted Host Grotesk (OFL)
- `robots.txt`, `sitemap.xml`, `llms.txt` — search and AI-answer discovery
- `_headers`, `404.html`, `site.webmanifest`, icons
- `assets/og.jpg` — social share preview
- `favicon.svg` — browser tab icon

Contact: info@humanwardlabs.com
