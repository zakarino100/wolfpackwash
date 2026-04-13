import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.residential;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.residential.eyebrow}
      title={pageContent.residential.title}
      description={pageContent.residential.description}
      sourcePage="/residential"
      image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80"
      bullets={[
        'One company for every exterior surface - house washing, windows, gutters, concrete, driveways, decks, fences, and lighting, all handled by one reliable team.',
        'No coordinating multiple contractors or chasing down separate quotes. We scope the whole property and handle everything in the right order.',
        'Most homeowners combine services in a single visit for a complete exterior refresh that would take weeks to coordinate with separate companies.',
        'We serve homeowners across Raleigh, Cary, Apex, Holly Springs, Morrisville, and Wake County NC.',
      ]}
      steps={[
        {
          title: 'Tell us what needs attention',
          body: 'Fill out the quick form or call us. Whether you need one service or want to tackle the whole exterior, we\'ll put together the right scope.',
          image: '/step-images/choose-service.png',
        },
        {
          title: 'Get a clear quote the same day',
          body: 'We respond with clear pricing and availability - no estimates that change at the door, no pressure to add services you don\'t need.',
          image: '/step-images/get-quote.png',
        },
        {
          title: 'Enjoy the curb-appeal improvement',
          body: 'The results are visible immediately - cleaner siding, streak-free windows, open gutters, bright concrete. One visit, complete exterior.',
          image: '/step-images/house-wash.png',
        },
      ]}
      faqs={[
        {
          q: 'What exterior services do you offer for residential homes?',
          a: 'We offer house washing, soft washing, window cleaning, gutter cleaning, concrete pressure washing, driveway washing, deck cleaning, fence washing, sidewalk cleaning, holiday light installation, permanent RGB lighting, and recurring exterior care plans.',
        },
        {
          q: 'Can I get multiple services done in one visit?',
          a: 'Yes - that\'s one of the most efficient and cost-effective ways to work with us. Popular combinations include house washing + windows + gutters, or driveway + concrete + sidewalk. We sequence everything to maximize quality.',
        },
        {
          q: 'How often should a home exterior be professionally cleaned?',
          a: 'Most Triangle-area homeowners benefit from at least one full exterior cleaning per year - typically in spring after pollen season. Homes with heavy tree coverage, algae issues, or north-facing surfaces may need semi-annual service.',
        },
        {
          q: 'Do you offer recurring service plans for homeowners?',
          a: 'Yes - our Exterior Care Plan puts your home on a recurring maintenance schedule with priority scheduling and member pricing. It\'s the best option for homeowners who want consistent results without having to call every season.',
        },
      ]}
    />
  );
}
