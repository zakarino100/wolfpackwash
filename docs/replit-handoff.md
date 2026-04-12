# Replit Handoff Notes

## Current project status
- Next.js app scaffolded and building successfully
- Mobile-first homepage implemented with motion/reveal behavior
- Core SEO-preserved routes created
- Real quote form UI added
- Healthy Home and Scout integration payload shaping added

## Required environment variables
Copy from `.env.example` and set these in Replit Secrets:

- `HH_FORM_ENDPOINT`
- `HH_FORM_TOKEN`
- `SCOUT_LEAD_WEBHOOK_URL` (optional until direct webhook path is finalized)

## Healthy Home endpoint
Current intended endpoint:
`https://healthy-home-backend.replit.app/api/form/submit`

Auth header used:
`X-HH-Token: <HH_FORM_TOKEN>`

## Before publishing
1. Add final env vars in Replit
2. Confirm Healthy Home `FORM_SUBMIT_SECRET`
3. Test quote submission from homepage and contact page
4. Verify lead lands in Healthy Home CRM with source `wolf_pack_wash_website`
5. Verify Scout notification path once webhook/bridge is finalized
6. Replace placeholder imagery/content blocks with final assets and copy
7. Add real gallery/reviews data
8. Add final metadata/canonicals/sitemap polish if needed

## Logo assets
Correct Wolf Pack Wash logo assets are in:
- `public/logos/wolfpack_wash_shield_logo_transparent.svg`
- `public/logos/wolfpack_wash_shield_transparent.png`

## Notes
- Pollen ad creative was moved outside this workflow and handled separately.
- Website should continue prioritizing mobile UX first, then desktop polish.
