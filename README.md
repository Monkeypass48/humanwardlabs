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

- `index.html` — the page (hero with scroll cue, behavioral-economics scroll sequence on the tablet, impact, services flip cards, FAQ, contact dialog). The tablet screen is a `<canvas>` that draws six principles (defaults, loss aversion, choice overload, anchoring, social proof, friction) as you scroll; the matching captions are real HTML so they stay indexable and readable by screen readers.
- `assets/tablet-*.webp` — tablet photo at three widths
- `fonts/` — self-hosted Host Grotesk (OFL)
- `robots.txt`, `sitemap.xml`, `llms.txt` — search and AI-answer discovery
- `_headers`, `404.html`, `site.webmanifest`, icons
- `assets/og.jpg` — social share preview
- `favicon.svg` — browser tab icon

Contact: info@humanwardlabs.com
