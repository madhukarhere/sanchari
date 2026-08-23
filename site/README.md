# Sanchari — full HTML site

A hostable static frontend for **sanchari.travel**, matching the approved prototype.

## Layout

### Marketing pages (multi-file, SEO-friendly)

- `index.html` — home with the hero carousel, three pillars, featured itineraries, testimonials, CTA
- `packages.html` — filterable listing (`?cat=temple|adventure|wellness&q=…`)
- `package.html` — package detail template (`?id=<slug>`)
- `booking.html` — traveller-details step (`?id=<slug>`)
- `confirmation.html` — booking confirmation (`?ref=<ref>`)
- `about.html` — story, why-choose-us, team
- `blog.html` — journal listing
- `article.html` — article detail (`?id=<slug>`)
- `contact.html` — inquiry form + contact
- `login.html` / `signup.html` — redirect into `app.html` (the SPA handles auth)
- `styles.css` + `app.js` — shared design system + behaviour

### App (single-page — customer + admin portal)

- `app.html` — the full application shell. Every screen is a hash route:

  **Customer portal**
  - `app.html#/login`, `app.html#/signup`
  - `app.html#/dashboard` — overview KPIs + next trip card
  - `app.html#/dashboard/bookings` — upcoming / past / cancelled tabs; cancel & modification requests; voucher download, email, WhatsApp
  - `app.html#/dashboard/payments` — full transaction history + receipts
  - `app.html#/dashboard/reviews` — write, edit, delete reviews
  - `app.html#/dashboard/profile` — profile + comm preferences + saved travellers
  - `app.html#/dashboard/security` — password change + strength meter, 2FA, sessions, delete account

  **Admin panels**
  - `app.html#/admin` — operations dashboard
  - `app.html#/admin/bookings` — cancellation & refund policy engine
  - `app.html#/admin/packages` — package catalogue
  - `app.html#/admin/package?new=1` or `?id=<slug>` — package editor with live preview
  - `app.html#/admin/hero` — hero carousel manager (title / subtitle / scene / CTA / on-air / reorder)
  - `app.html#/admin/availability?pkg=<slug>` — calendar with capacity per day
  - `app.html#/admin/users` — users, roles, invites, role matrix
  - `app.html#/admin/transportation` — fleet, assignments, vendors

## Running locally

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Any static host works — Netlify, Vercel, S3+CloudFront, GitHub Pages, nginx.

## What's stubbed

- Auth / booking / payment submits are demo stubs — wire to your backend + Razorpay hosted checkout as scoped in the RFP.
- Data lives in `app.js` and inside `app.html`'s script. Point these at your CMS / REST endpoints.
- Hero imagery uses inline SVG scenes — swap for photography or MP4 through the admin hero-carousel manager.

## Next steps

- Point package / article / hero data at your API
- Replace `app.html` with server-rendered routes on your NestJS + Next.js stack
- Add analytics, per-page meta tags, JSON-LD for Trip + Article, and `sitemap.xml`
