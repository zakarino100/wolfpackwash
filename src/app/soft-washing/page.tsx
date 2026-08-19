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
      image="/hero-images/soft-washing.webp"
      bullets={[
        'Soft washing uses low-pressure water (comparable to a garden hose) combined with biodegradable cleaning solutions to safely treat mold, mildew, algae, pollen, and bacteria.',
        'Unlike high-pressure washing, soft washing won\'t damage vinyl siding, stucco, wood, painted surfaces, or older brick - making it the right approach for most homes.',
        'Because it kills the root cause of staining rather than just blasting it off, soft wash results last significantly longer than traditional pressure washing.',
        'Wolf Pack Wash uses soft washing as the preferred method for house washing across Raleigh, Cary, Apex, Holly Springs, and the Triangle.',
      ]}
      steps={[
        {
          title: 'Notice the organic buildup before it spreads',
          body: 'Soft washing is for the homes where mildew, algae, and pollen are creeping across siding, trim, soffits, and painted surfaces that should never be hit with brute-force pressure.',
          image: '/step-images/house-wash-before.webp',
        },
        {
          title: 'We treat the surface with low pressure and dwell time',
          body: 'Our crew protects landscaping, applies the proper solution, lets it do the work, and then rinses everything down gently so the grime is removed without beating up the finish.',
          image: '/step-images/house-wash.webp',
        },
        {
          title: 'The home stays cleaner longer',
          body: 'Because soft washing attacks the biological growth instead of just skimming the surface, the result usually holds far longer than straight pressure washing alone.',
          image: '/gallery-images/real-house-wash.webp',
        },
      ]}
      gallery={[
        { src: '/step-images/house-wash-before.webp', alt: 'Before soft washing - siding buildup on a Triangle-area home' },
        { src: '/step-images/house-wash.webp', alt: 'Soft washing - safe low-pressure house cleaning in Raleigh NC' },
        { src: '/gallery-images/real-house-wash.webp', alt: 'Clean home exterior after soft wash treatment in Wake County' },
        { src: '/gallery-images/real-siding-side.jpg', alt: 'Fresh exterior siding after a soft washing visit in Cary NC' },
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
