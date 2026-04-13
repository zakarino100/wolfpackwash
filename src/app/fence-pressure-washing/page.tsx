import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.fence;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.fence.eyebrow}
      title={pageContent.fence.title}
      description={pageContent.fence.description}
      sourcePage="/fence-pressure-washing"
      image="/hero-images/fence-pressure-washing.png"
      bullets={[
        'Wood, vinyl, and composite fences collect mold, mildew, algae, and grime quickly - especially in shaded or humid areas of the Triangle.',
        'Professional pressure washing restores the appearance of your fence and extends its life, often delaying costly replacement by years.',
        'A clean fence dramatically improves the overall curb appeal and "kept" feel of your entire property.',
        'We serve Raleigh, Cary, Apex, Holly Springs, and all of Wake County NC.',
      ]}
      steps={[
        {
          title: 'Get a fast, free quote',
          body: 'Tell us the fence length and material. We\'ll respond with same-day pricing and scheduling.',
          image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80',
        },
        {
          title: 'We lift the buildup and weathered look',
          body: 'Our crew uses the right pressure and technique for your fence material - removing mold, algae, and grime without damaging wood grain or vinyl surfaces.',
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
        },
        {
          title: 'The fence looks fresh without replacement cost',
          body: 'In most cases, a professional wash restores the look of the fence better than homeowners expect - and at a fraction of the replacement cost.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        },
      ]}
      gallery={[
        { src: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80', alt: 'Fence pressure washing - restoring wood and vinyl fences in Raleigh NC' },
        { src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80', alt: 'Before and after fence washing - mold and algae removal' },
        { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Clean fence and home exterior after service - Triangle area' },
        { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', alt: 'Fence cleaning results - Wake County NC' },
      ]}
      faqs={[
        {
          q: 'Can pressure washing restore a weathered or stained fence?',
          a: 'In most cases, yes. A professional pressure wash removes mold, mildew, algae, and surface grime that make fences look weathered and old. The results often exceed what homeowners expect.',
        },
        {
          q: 'Is pressure washing safe for vinyl fences?',
          a: 'Yes - we use appropriate pressure settings for vinyl, which is more sensitive than wood. Lower pressure with the right technique cleans vinyl effectively without causing warping, cracking, or surface damage.',
        },
        {
          q: 'Should I stain or seal my wood fence after washing?',
          a: 'If your fence needs staining or sealing, washing is the required first step. We recommend waiting 24-48 hours after the wash before applying stain or sealant so the wood can dry fully.',
        },
        {
          q: 'How often should I get my fence washed?',
          a: 'Once a year is typical for most Triangle-area homeowners. Fences in heavily shaded or humid areas may need cleaning twice a year to stay ahead of mold and algae growth.',
        },
      ]}
    />
  );
}
