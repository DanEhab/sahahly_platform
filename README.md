# Sahahly platform

Front-end design preview of the Sahahly teaching-operations workspace, built from
the *Detailed workflow mockups* design review (16 October 2026). It contains all
22 workflow screens from that document. Forms work in the browser only: nothing
is saved or sent anywhere yet.

## Run it

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts: `npm run build`, `npm start` (serve the production build),
`npm run lint`, `npm run typecheck`.

Copy `.env.example` to `.env.local` to set the public site URL and whether
search engines may index the site (off by default while this is a preview).

## What's where

| Path | Purpose |
| --- | --- |
| `src/app/page.tsx` | Home: the review cover and the list of all 22 screens |
| `src/app/workspace/[section]/page.tsx` | Sidebar section pages (Today, Submissions, …) |
| `src/app/workspace/[section]/[workflow]/page.tsx` | One page per workflow screen |
| `src/components/workflows/` | The 22 screens, grouped by sidebar section |
| `src/components/shell/` | Top bar, sidebar and page frame |
| `src/components/workspace/` | Panel, toolbar, form fields and the demo form |
| `src/lib/workflows.ts` | Registry of the 22 workflows: number, route, title, summary |
| `src/lib/navigation.ts` | Sidebar sections and groups |
| `src/app/globals.css` | Design tokens and all styles |

Routes follow `/workspace/<section>/<workflow>`, for example
`/workspace/submissions/new-assignment` for screen 01.

## Design notes

- Colours, sizes and spacing were measured from the PDF's embedded screenshots
  (taken at a 1440px-wide browser) and checked by overlaying screenshots of this
  site on them.
- The mockups use **DejaVu Sans**. A Latin subset is bundled in `src/app/fonts/`
  (about 23 KB per weight) so the site looks the same on every device. Its
  license is in `src/app/fonts/LICENSE-DejaVu.txt`.
- The layout fills the browser window; the PDF's page chrome (titles above each
  screen, page numbers) is document framing and is not part of the site.
- Below 960px the sidebar becomes a drawer opened with **Menu**; below 720px
  forms stack into one column.

## Launch checklist status

Done in this phase:

- Meta titles and descriptions on every page; favicon and Apple touch icon
- `sitemap.xml` and `robots.txt` (robots blocks indexing until `ALLOW_INDEXING=true`)
- Custom 404 page; all internal links resolve
- Mobile layout; text colour contrast meets WCAG AA
- Native form validation (required fields, number ranges, email), file-type limits on uploads
- Security headers (CSP, HSTS, frame, referrer and permissions policies); no secrets in the front end
- One clear call to action on the home page
- `npm audit` clean

Still to do:

- Privacy policy and terms pages, cookie consent banner, social preview image, analytics
- Public website design, then real sign-in
- Backend: server-side auth, database with row-level security, hashed passwords,
  login rate limiting, bot protection, parameterized queries, server-side
  validation and upload checks, encrypted sensitive fields
- Deploy behind HTTPS and set `NEXT_PUBLIC_SITE_URL` to the `https://` address
