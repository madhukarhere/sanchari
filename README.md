# Sanchari — Static HTML site

A hostable multi-page static site scaffold for **sanchari.travel**, matching the approved prototype design.

## Files

- `index.html` — home with the hero carousel, three pillars, featured itineraries, testimonials, and a "design your trip" CTA
- `packages.html` — filterable listing (`?cat=temple|adventure|wellness&q=…`)
- `package.html` — package detail template (`?id=<slug>`)
- `booking.html` — traveller-details step (`?id=<slug>`)
- `confirmation.html` — booking confirmation (`?ref=<ref>`)
- `about.html` — company story, why-choose-us, team
- `blog.html` — article listing
- `article.html` — article detail (`?id=<slug>`)
- `contact.html` — inquiry form + contact details
- `login.html` / `signup.html` — auth surfaces
- `styles.css` — shared design system (light + dark)
- `app.js` — hero carousel, listing, detail, booking, blog rendering; forms + toasts

## Hosting

Any static host will do — Netlify, Vercel (static), S3+CloudFront, GitHub Pages, nginx.

```
# local preview
python3 -m http.server 8080
# then open http://localhost:8080
```

## What's demo-only in this scaffold

- Auth / booking submits are stubs — wire them to your API (Razorpay, NestJS backend etc. per the RFP).
- Package data + articles live in `app.js` — swap for a CMS or REST endpoint.
- Hero imagery uses inline SVG scenes (temple, coorg, kerala, andhra). Swap for real photography or MP4 videos as the design intended.

## Next steps

- Point `packages`, `articles`, and `heroSlides` in `app.js` at your backend
- Add a proper `/dashboard` (customer portal) and `/admin` shell in server-rendered routes — the prototype demonstrates the full UX in a single SPA
- Add analytics, meta tags per page, structured data (JSON-LD) for Trip + Article, and sitemap.xml
