import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.houseWashing;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.houseWashing.eyebrow}
      title={pageContent.houseWashing.title}
      description={pageContent.houseWashing.description}
      sourcePage="/house-washing"
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      bullets={[
        'Soft washing uses low-pressure water and biodegradable solutions to safely remove pollen, algae, mold, and mildew from vinyl, brick, stucco, and wood siding.',
        'Unlike high-pressure blasting, soft washing treats the root cause of staining — killing organic growth so results last longer.',
        'Most house washes improve curb appeal immediately and can be bundled with window cleaning and gutter cleaning for a full exterior refresh in one visit.',
        'We serve Raleigh, Cary, Apex, Holly Springs, Morrisville, and the surrounding Triangle area.',
      ]}
      steps={[
        {
          title: 'Get a fast, free quote',
          body: 'Fill out our quick form or call us directly. We respond the same day with pricing and availability — no waiting, no runaround.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        },
        {
          title: 'We soft-wash your home safely',
          body: 'Our crew arrives on time, walks the property, and applies the right mix of low-pressure water and cleaning solution for your siding type. No damage, no guessing.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        },
        {
          title: 'Your home looks sharp again',
          body: 'Pollen, algae, and grime are gone. The curb appeal improvement is immediate — most homeowners say it looks like a completely different house.',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        },
      ]}
      gallery={[
        { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'House washing — removing pollen and algae from siding' },
        { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Clean home exterior after soft wash treatment' },
        { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', alt: 'Before and after house washing in Raleigh NC' },
        { src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80', alt: 'Professional exterior cleaning results — Triangle NC' },
      ]}
      faqs={[
        {
          q: 'What is the difference between soft washing and pressure washing a house?',
          a: 'Soft washing uses low-pressure water (similar to a garden hose) combined with biodegradable cleaning solutions to safely remove algae, mold, mildew, and pollen. Pressure washing uses high-pressure water that can damage siding, trim, and painted surfaces. For most homes, soft washing is the safer, longer-lasting option.',
        },
        {
          q: 'How often should I get my house washed in Raleigh NC?',
          a: 'Most Triangle-area homeowners benefit from a house wash once a year — typically in spring after pollen season. Homes with heavy tree coverage or north-facing siding may need it twice a year due to faster algae and mold growth.',
        },
        {
          q: 'Is soft washing safe for my plants and landscaping?',
          a: 'Yes. We pre-wet all surrounding plants before washing and rinse them thoroughly after. Our biodegradable cleaning solutions are formulated to be safe for vegetation, pets, and your family when properly applied.',
        },
        {
          q: 'Can you bundle house washing with other services?',
          a: 'Absolutely — bundling house washing with window cleaning and gutter cleaning is one of the most popular combinations we offer. You save time, we can sequence the work efficiently, and the whole exterior gets done in one visit.',
        },
      ]}
    />
  );
}
