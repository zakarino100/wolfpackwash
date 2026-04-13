import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.softWashing;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.softWashing.eyebrow}
      title={pageContent.softWashing.title}
      description={pageContent.softWashing.description}
      sourcePage="/soft-washing"
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      bullets={[
        'Soft washing uses low-pressure water (comparable to a garden hose) combined with biodegradable cleaning solutions to safely treat mold, mildew, algae, pollen, and bacteria.',
        'Unlike high-pressure washing, soft washing won\'t damage vinyl siding, stucco, wood, painted surfaces, or older brick - making it the right approach for most homes.',
        'Because it kills the root cause of staining rather than just blasting it off, soft wash results last significantly longer than traditional pressure washing.',
        'Wolf Pack Wash uses soft washing as the preferred method for house washing across Raleigh, Cary, Apex, Holly Springs, and the Triangle.',
      ]}
      steps={[
        {
          title: 'Get a fast quote',
          body: 'Fill out the form with your home details. We\'ll respond the same day with pricing and next available scheduling.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        },
        {
          title: 'We apply soft wash solution at low pressure',
          body: 'Our crew pre-wets landscaping, applies biodegradable cleaning solution to your siding, and allows it to dwell before rinsing - safely removing organic growth without surface damage.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        },
        {
          title: 'Your home looks and stays cleaner longer',
          body: 'Soft washing kills algae and mold at the source, so results last 4-6 times longer than high-pressure washing alone.',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        },
      ]}
      gallery={[
        { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Soft washing - safe low-pressure house cleaning in Raleigh NC' },
        { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Home exterior after soft wash treatment - Triangle area' },
        { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', alt: 'Soft washing results on vinyl siding - Wake County' },
        { src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80', alt: 'Clean home exterior after soft wash - Cary NC' },
      ]}
      faqs={[
        {
          q: 'What is soft washing and how is it different from pressure washing?',
          a: 'Soft washing uses low-pressure water (similar to a garden hose) combined with biodegradable cleaning solutions to break down and remove mold, mildew, algae, pollen, and bacteria. Pressure washing uses high-pressure water alone, which can damage siding, trim, and painted surfaces. Soft washing is safer and produces longer-lasting results for most home exteriors.',
        },
        {
          q: 'Is soft washing safe for all types of siding?',
          a: 'Yes. Soft washing is safe for vinyl, wood, stucco, fiber cement (Hardie board), brick, and painted surfaces. It\'s specifically recommended for surfaces that would be damaged by high-pressure washing.',
        },
        {
          q: 'How long do soft washing results last?',
          a: 'Because soft washing kills the root cause of organic staining rather than just blasting it off, results typically last 4-6 times longer than traditional pressure washing - usually 1-3 years depending on your home\'s environment and tree coverage.',
        },
        {
          q: 'Are the cleaning solutions safe for my plants and pets?',
          a: 'Yes. We use biodegradable, plant-safe cleaning solutions and take care to pre-wet and rinse all surrounding landscaping before and after the wash. The solutions are safe for pets and children once dry.',
        },
      ]}
    />
  );
}
