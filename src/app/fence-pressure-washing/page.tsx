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
      image="/hero-images/fence-pressure-washing.webp"
      bullets={[
        'Wood, vinyl, and composite fences collect mold, mildew, algae, and grime quickly - especially in shaded or humid areas of the Triangle.',
        'Professional pressure washing restores the appearance of your fence and extends its life, often delaying costly replacement by years.',
        'A clean fence dramatically improves the overall curb appeal and "kept" feel of your entire property.',
        'We serve Raleigh, Cary, Apex, Holly Springs, and all of Wake County NC.',
      ]}
      steps={[
        {
          title: 'Spot the fence before the green buildup takes over',
          body: 'Most fence washes start the same way: green streaks, black spotting, and a fence that makes the whole yard feel older than it is. We look at the material, the condition, and the sections that need the most attention first.',
          image: '/step-images/fence.webp',
        },
        {
          title: 'We clean it with the right pressure for the material',
          body: 'Our crew uses the proper wash method for wood, vinyl, or composite so we strip off the algae, dirt, and mildew without chewing up the surface or raising the grain.',
          image: '/step-images/crew-arrives.webp',
        },
        {
          title: 'The yard looks sharper without the cost of replacement',
          body: 'Once the staining is gone, the fence line looks cleaner, brighter, and far more cared for. It is one of the fastest ways to make the whole property feel maintained again.',
          image: '/step-images/clean-result.webp',
        },
      ]}
      gallery={[
        { src: '/step-images/fence.webp', alt: 'Fence pressure washing - restoring wood and vinyl fences in Raleigh NC' },
        { src: '/step-images/crew-arrives.webp', alt: 'Fence cleaning crew arriving for an exterior wash visit in the Triangle' },
        { src: '/step-images/clean-result.webp', alt: 'Clean fence line and brighter backyard after pressure washing service' },
        { src: '/step-images/clean-result.webp', alt: 'Fence cleaning results - Wake County NC' },
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
