import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.exteriorPainting;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.exteriorPainting.eyebrow}
      title={pageContent.exteriorPainting.title}
      description={pageContent.exteriorPainting.description}
      sourcePage="/exterior-painting"
      image="/hero-images/exterior-painting.webp"
      bullets={[
        'Full exterior repaints - siding, trim, fascia, soffits, doors, and shutters - done right so the finish actually lasts.',
        'We power wash, scrape, sand, spot-prime, and caulk before a single coat goes on. Prep is where a paint job is won or lost, and it is where we never cut corners.',
        'Premium exterior coatings rated for Carolina sun, humidity, and storms - in the color you want, with a clean, even, professional finish.',
        'Serving Raleigh, Cary, Apex, Holly Springs, Morrisville, Fuquay-Varina, Garner, and the surrounding Triangle.',
      ]}
      steps={[
        {
          title: 'Free color + quote consult',
          body: 'Tell us what you want refreshed. We walk the exterior, talk colors and scope, and send clear same-day pricing - no surprises at the door.',
          image: '/painting/painting-step1-quote.webp',
        },
        {
          title: 'We prep and paint it right',
          body: 'Wash, scrape, sand, prime, caulk, and mask - then apply premium coatings evenly for a finish built to hold up for years.',
          image: '/painting/painting-step2-inaction.jpg',
        },
        {
          title: 'Your home looks new again',
          body: 'Clean lines, rich color, and protected surfaces. A fresh exterior is the single biggest boost to curb appeal and resale value.',
          image: '/painting/painting-step3-after.webp',
        },
      ]}
      gallery={[
        { src: '/painting/painting-1.jpg', alt: 'Exterior house painting - freshly painted home in the Raleigh Triangle' },
        { src: '/painting/painting-3.jpg', alt: 'Exterior repaint - siding and trim in Cary NC' },
        { src: '/painting/painting-4.jpg', alt: 'Exterior painting project - Triangle NC home' },
        { src: '/painting/painting-5.jpg', alt: 'Freshly painted exterior siding, Apex NC' },
        { src: '/painting/painting-6.jpg', alt: 'Exterior house painters Raleigh NC - completed repaint' },
        { src: '/painting/painting-7.jpg', alt: 'Front door and trim repaint, Holly Springs NC' },
      ]}
      faqs={[
        {
          q: 'How long does an exterior paint job last?',
          a: 'With proper prep and premium coatings, a quality exterior paint job typically lasts 7-10 years in the Carolina climate. The prep - washing, scraping, priming, and caulking - is the single biggest factor in how long it holds up, and it is exactly where we do not cut corners.',
        },
        {
          q: 'Do you help with color selection?',
          a: 'Yes. We walk you through color options that fit your home, your neighborhood, and any HOA guidelines, and we can provide samples so you are confident before we start.',
        },
        {
          q: 'What is included in the prep work?',
          a: 'We pressure wash the exterior, scrape and sand loose or peeling paint, spot-prime bare areas, caulk gaps and cracks, and mask off windows, lights, and landscaping - then we paint. Skipping prep is the reason cheap paint jobs fail early.',
        },
        {
          q: 'Can I bundle painting with a house wash?',
          a: 'Absolutely - and it is a smart move. A soft wash removes the pollen, algae, and grime first, giving the new paint a clean surface to bond to. Bundling exterior services in one visit saves you time and money.',
        },
        {
          q: 'What areas do you serve for exterior painting?',
          a: 'Raleigh, Cary, Apex, Holly Springs, Morrisville, Fuquay-Varina, Garner, and the broader Wake County and Triangle area in North Carolina.',
        },
      ]}
    />
  );
}
