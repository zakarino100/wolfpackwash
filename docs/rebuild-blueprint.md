# Wolf Pack Wash Rebuild Blueprint

## Mission
Rebuild Wolf Pack Wash as a fast, SEO-safe, conversion-focused Replit app with Supabase-backed content/workflows, Healthy Home CRM integration, Scout Discord notifications, and a lightweight publishing system.

## Primary objectives
- Preserve SEO by keeping important slugs stable.
- Improve conversion rate on service and blog pages.
- Keep the public site fast, especially the homepage.
- Preserve and optimize the existing homepage hero video.
- Route all leads into Healthy Home backend CRM with proper source attribution.
- Track calls and quote actions by originating page.
- Support an approval-based blog drafting workflow.
- Introduce a tiered recurring offer under the Exterior Care Plan.

## Current repo state
- Repository: `zakarino100/wolfpackwash`
- Current status: empty repository
- Recommendation: scaffold fresh app from clean architecture

## Recommended stack for Replit
- Frontend/app framework: Next.js (App Router)
- Styling: Tailwind CSS + component primitives
- Data/content store: Supabase
- Hosting/runtime: Replit
- Analytics/events: custom server-side event logging + optional GA/Meta later
- Image/video delivery: optimized static assets / CDN-backed URLs

Why Next.js:
- Strong fit for Replit
- Fast SSR/SSG options
- Good SEO control
- Easy hybrid blog rendering
- Easy API routes / server actions for forms and editorial workflows

## SEO migration rules
### Keep these URLs exactly the same
- `/`
- `/about-us/`
- `/services/`
- `/residential/`
- `/commercial/`
- `/contact/`
- `/blog/`
- `/house-washing/`
- `/window-cleaning/`
- `/gutter-cleaning/`
- `/concrete-pressure-washing/`
- `/deck-pressure-washing/`
- `/driveway-pressure-washing/`
- `/fence-pressure-washing/`
- `/sidewalk-pressure-washing/`
- `/holiday-lights-installation/`

### Add new URLs
- `/gallery/`
- `/reviews/`
- `/soft-washing/`
- `/permanent-lighting/`
- `/maintenance-plan/`

### Remove and 301 redirect
- `/podcast/` → `/`
- `/wolfpack-training-academy/` → `/about-us/`

### Blog post strategy
Keep existing post slugs where possible, but rewrite weak/off-brand content on the same URL.

## Navigation
### Main nav
- Home
- Services
- Gallery
- Reviews
- About
- Blog
- Contact

### Services dropdown
- House Washing
- Window Cleaning
- Gutter Cleaning
- Concrete Pressure Washing
- Deck Pressure Washing
- Driveway Pressure Washing
- Fence Pressure Washing
- Sidewalk Pressure Washing
- Soft Washing
- Holiday Lights
- Permanent Lighting
- Exterior Care Plan

## Homepage blueprint
### Hero section
- Background video: `https://wolfpackwashnc.com/wp-content/uploads/2025/05/Scene-4-Crew-at-Work-Shot-5.mp4`
- Add poster image fallback
- Keep autoplay muted loop behavior
- Improve overlay contrast for readability
- Primary CTA: `Get Free Quote`
- Secondary CTA: `Call Now`
- Track both CTA clicks

### Homepage sections
1. Hero section with video and guarantee
2. Trust/guarantee strip
3. Core services grid
4. Before/after proof block
5. Why Wolf Pack Wash
6. Exterior Care Plan section
7. Lighting section (holiday + permanent)
8. Reviews highlight section
9. Gallery preview
10. Quote CTA block

## Page roles
### `/services/`
Service hub page linking to all service pages.

### `/gallery/`
Visual proof library with filters by service type.

### `/reviews/`
Dedicated trust page with review highlights and CTA.

### `/soft-washing/`
Educational page explaining soft washing step by step with images.

### `/permanent-lighting/`
Dedicated sales page for permanent RGB/downlighting.

### `/holiday-lights-installation/`
Keep slug for SEO and focus on temporary seasonal lighting.

### `/maintenance-plan/`
Dedicated page for recurring plan education and conversion.

## Exterior Care Plan
Recurring offer should be tiered to create clear separation and anchor value.

### Plan name
- Exterior Care Plan

### Tier strategy
Use strong spacing in price and deliverables so the middle tier feels like the smartest buy.

#### Tier 1: Essentials
Positioning: low-friction entry point
Potential inclusions:
- annual house wash reminder/discount
- priority seasonal reminder
- member pricing on one core service category
- easy renewal

#### Tier 2: Preferred
Positioning: best value / most popular
Potential inclusions:
- recurring exterior maintenance cadence
- preferred scheduling
- better member pricing across multiple services
- annual or semi-annual service bundle incentives
- gutter/window/house wash cross-service discounts

#### Tier 3: Signature
Positioning: premium protection / white-glove
Potential inclusions:
- highest priority scheduling
- biggest member savings
- bundled maintenance visits
- lighting service preference perks
- enhanced support / touchpoint cadence

### Recommendation
Do not finalize pricing yet in code. Scaffold plan content with placeholders and admin-editable config so package positioning can be tuned after review.

## Quote flow
### Primary CTA
- `Get Free Quote`

### Secondary CTA
- `Call Now`

### Form fields
- First Name
- Last Name
- Address (autocomplete)
- Services (multi-select)
- Frequency (optional)
- Phone
- Email (optional)
- Notes (optional)

### Suggested services list
- House Washing
- Window Cleaning
- Gutter Cleaning
- Concrete Cleaning
- Driveway Cleaning
- Sidewalk Cleaning
- Deck Cleaning
- Fence Cleaning
- Holiday Lights
- Permanent Lighting
- Exterior Care Plan

## Tracking spec
Capture for all key actions:
- `source = wolf_pack_wash_website`
- `brand = wolf_pack_wash`
- page path
- page slug
- referrer
- UTM params
- timestamp
- selected services
- selected frequency
- CTA type
- session id if available

### Events to track
- Hero CTA click
- Quote CTA click
- Call button click
- Form started
- Form submitted
- Blog CTA click
- Service page CTA click

## Healthy Home backend integration
Local repo reference found at `/Users/zak/.openclaw/workspace/hh-backend-local`.

### Key CRM requirement
All submitted leads must land in Healthy Home backend CRM with Wolf Pack Wash attribution.

### Submission payload should include
- contact details
- address
- services selected
- frequency
- notes
- source and brand
- page path / referring page
- UTM data

### Source tagging
- `source = wolf_pack_wash_website`
- `business_unit` / mapping as appropriate in backend contract

### Actions on successful form submission
1. Create lead in Healthy Home backend
2. Trigger owner SMS notification
3. Trigger Scout Discord bot workflow
4. Create/send inquiry thread payload with submitted details

### Backend implementation note
Need to inspect/add exact HH endpoint contract before coding. Existing HH backend already supports lead ingestion patterns and Facebook lead attribution tables; WPW web form flow should mirror that attribution discipline.

## Scout Discord integration
Workspace reference found at `CONTENT/Scout/config.md`.

### Current known config
- App ID: `1489673606966280443`
- Server: Wolf Pack Wash
- Channel: `#Leads`

### Needed implementation
On lead form submit:
- create message or thread in Leads channel
- include name, phone, address, service selections, notes, page source, timestamp
- format for quick owner triage

## Blog architecture
Goal: fast public blog, approval workflow, AI-assisted draft creation.

### Public side
- Blog index on main site
- Published posts rendered statically or cached
- No heavy editor/admin JS on public pages

### Internal editorial workflow
Store in Supabase:
- `blog_posts`
- `blog_post_revisions`
- `blog_categories`
- `blog_tags`
- `blog_status`
- `blog_generation_jobs` (optional)

### Post status flow
- draft
- in_review
- approved
- scheduled
- published
- archived

### AI draft workflow
1. Create topic/brief
2. Generate draft content
3. Save as draft revision
4. Human edits in internal editor
5. Approve and publish
6. Site revalidates affected blog pages

## Assets
### Required assets
- Clean Wolf Pack Wash logo derived from the provided standalone image
- Light and dark SVG variants
- Hero video poster image
- Optimized photo library for gallery/services
- Review content/testimonials

### Logo note
User does not have a separate source file. Need to derive vector/SVG versions from the provided image before UI implementation.

## Recommended app structure
```text
wolfpackwash/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── about-us/page.tsx
│   │   ├── services/page.tsx
│   │   ├── residential/page.tsx
│   │   ├── commercial/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── reviews/page.tsx
│   │   ├── soft-washing/page.tsx
│   │   ├── maintenance-plan/page.tsx
│   │   ├── permanent-lighting/page.tsx
│   │   ├── holiday-lights-installation/page.tsx
│   │   ├── house-washing/page.tsx
│   │   ├── window-cleaning/page.tsx
│   │   ├── gutter-cleaning/page.tsx
│   │   ├── concrete-pressure-washing/page.tsx
│   │   ├── deck-pressure-washing/page.tsx
│   │   ├── driveway-pressure-washing/page.tsx
│   │   ├── fence-pressure-washing/page.tsx
│   │   ├── sidewalk-pressure-washing/page.tsx
│   │   └── blog/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── api/
│   │   ├── quote/route.ts
│   │   ├── track/route.ts
│   │   ├── blog/
│   │   └── revalidate/route.ts
│   └── admin/
│       ├── blog/
│       └── settings/
├── components/
├── lib/
│   ├── supabase/
│   ├── analytics/
│   ├── hh-backend/
│   ├── scout/
│   ├── blog/
│   └── seo/
├── public/
│   ├── images/
│   ├── video/
│   └── logos/
├── docs/
│   └── rebuild-blueprint.md
└── supabase/
    └── migrations/
```

## Implementation phases
### Phase 1
- Scaffold app
- Create route structure
- Add shared layout/nav/footer
- Add homepage and core service shells
- Add quote form shell
- Add tracking utilities

### Phase 2
- Healthy Home backend integration
- Scout notification integration
- Supabase content models
- Blog system
- Gallery data model

### Phase 3
- Recurring plan page and pricing/content controls
- Service page polish
- Reviews/gallery content
- SEO/meta refinements
- Performance tuning

### Phase 4
- Redirects
- QA
- launch checklist
- sitemap submission

## Open items before full build
- Final recurring plan tier names, pricing, and deliverables
- Exact HH backend endpoint contract for website lead ingestion
- Exact Scout thread creation flow implementation details
- Final logo extraction/vectorization from provided image
- Review/testimonial source set
- Photo/gallery organization
