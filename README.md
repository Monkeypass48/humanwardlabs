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

- `index.html` — the page (hero, tablet film, impact, services flip cards, FAQ, contact dialog). The tablet plays three scroll-scrubbed scenes on a `<canvas>`: Product Design (an interface assembles), Experience Design (a journey connects touchpoints) and Design Strategy (options resolve to one choice on an impact/effort map). The impact section counts to $1.3B+ while a growth line draws to the signal dot, then shows the #2 Research & Analysis GPT.
- `assets/tablet-*.webp` — tablet photo at three widths
- `fonts/` — self-hosted Host Grotesk (OFL)
- `robots.txt`, `sitemap.xml`, `llms.txt` — search and AI-answer discovery
- `_headers`, `404.html`, `site.webmanifest`, icons
- `assets/og.jpg` — social share preview
- `favicon.svg` — browser tab icon

Contact: info@humanwardlabs.com
