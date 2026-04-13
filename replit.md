# Wolf Pack Wash

Next.js 16 marketing website for Wolf Pack Wash — a locally owned exterior cleaning company serving Raleigh, Cary, Apex, Holly Springs, and Wake County NC.

## Tech Stack

- **Framework**: Next.js 16.2.3 (App Router, Turbopack)
- **React**: 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Package Manager**: pnpm

## Brand

- **Primary red**: `#C81920`
- **Hover red**: `#a8141a`
- **Background**: `#07111b` (near-black navy)
- **Amber/yellow**: NEVER used anywhere — always verify with grep after changes
- **Button shadow**: `shadow-[0_16px_40px_rgba(200,25,32,0.30)]`

## Running the App

The app runs on port 5000 with host `0.0.0.0` for Replit compatibility.

```bash
pnpm run dev    # Development server (port 5000)
pnpm run build  # Production build
pnpm run start  # Production server (port 5000)
```

## Replit Configuration

- Dev/start scripts use `-p 5000 -H 0.0.0.0` for Replit preview pane compatibility
- `allowedDevOrigins` in `next.config.ts` allows Replit proxy domains for HMR
- Workflow: "Start application" runs `pnpm run dev`
- Image domains whitelisted: `images.unsplash.com`, `wolfpackwashnc.com`

## Services (all have full SEO pages)

| Service | URL Slug |
|---|---|
| House Washing | `/house-washing` |
| Soft Washing | `/soft-washing` |
| Roof Washing | `/roof-washing` |
| Window Cleaning | `/window-cleaning` |
| Gutter Cleaning | `/gutter-cleaning` |
| Fence & Deck Cleaning | `/fence-deck-cleaning` |
| Concrete Pressure Washing | `/concrete-pressure-washing` |
| Driveway Pressure Washing | `/driveway-pressure-washing` |
| Deck Pressure Washing | `/deck-pressure-washing` |
| Fence Pressure Washing | `/fence-pressure-washing` |
| Sidewalk Pressure Washing | `/sidewalk-pressure-washing` |
| Holiday Light Installation | `/holiday-lights-installation` |
| Permanent RGB Lighting | `/permanent-lighting` |
| Exterior Care Plan | `/maintenance-plan` |

## Key Files

| File | Purpose |
|---|---|
| `src/lib/site/seo.ts` | LocalBusiness + FAQ/Service JSON-LD builders, buildMetadata with robot directives |
| `src/lib/site/page-seo.ts` | All pages covered with local Triangle SEO metadata |
| `src/lib/site/page-content.ts` | All page titles, descriptions, eyebrows (customer-facing copy) |
| `src/lib/site/config.ts` | Site config: nav, service cards, CTA links, phone, hero video |
| `src/components/ui/page-builder.tsx` | Gallery + FAQ props, FAQ schema injection, full page layout |
| `src/components/ui/page-template.tsx` | Hero section with image overlay and red CTA |
| `src/components/sections/hero.tsx` | Homepage hero with punchy headline and trust badges |
| `src/components/sections/service-grid.tsx` | Homepage service card grid |
| `src/components/ui/quote-form.tsx` | Lead form, fully red-styled |
| `src/app/layout.tsx` | Root metadata with template titles, keywords, OG/Twitter |
| `src/app/sitemap.ts` | All routes with priority tiers |

## PageBuilder Props

```tsx
<PageBuilder
  eyebrow="..."       // red eyebrow label
  title="..."         // H1 headline
  description="..."   // opening body copy
  sourcePage="/..."   // form tracking
  image="..."         // hero image URL (optional)
  bullets={[...]}     // benefit bullets (optional)
  steps={[...]}       // how-it-works cards (optional)
  gallery={[...]}     // 4-image photo grid with hover (optional)
  faqs={[...]}        // FAQ accordion + FAQPage schema (optional)
/>
```

## SEO Architecture

- `buildLocalBusinessJsonLd()` — full LocalBusiness schema injected at root layout
- `buildFaqJsonLd(faqs)` — FAQPage schema injected via PageBuilder when faqs prop present
- `buildServiceJsonLd()` — per-service Service schema available for use
- `pageSeo.*` — per-page metadata objects covering titles, descriptions, keywords, canonical URLs
- Sitemap with priority tiers across all 25+ routes
- Robot directives: `index: true, follow: true, max-image-preview: large`

## Service Area

Raleigh · Cary · Apex · Holly Springs · Morrisville · Fuquay-Varina · Garner · Durham · Wake County · Triangle NC
