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

- `index.html` — the page (hero with scroll cue, tablet scroll sequence, services flip cards, FAQ, contact dialog). The tablet tells friction, flow, growth on a `<canvas>`, then the growth curve lands on the proof: $1.3B+ in impact with client names, then the #2 Research & Analysis GPT. The proof is real HTML layered over the screen, so it stays indexable and readable by screen readers.
- `assets/tablet-*.webp` — tablet photo at three widths
- `fonts/` — self-hosted Host Grotesk (OFL)
- `robots.txt`, `sitemap.xml`, `llms.txt` — search and AI-answer discovery
- `_headers`, `404.html`, `site.webmanifest`, icons
- `assets/og.jpg` — social share preview
- `favicon.svg` — browser tab icon

Contact: info@humanwardlabs.com
