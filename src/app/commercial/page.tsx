import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.commercial;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.commercial.eyebrow}
      title={pageContent.commercial.title}
      description={pageContent.commercial.description}
      sourcePage="/commercial"
      image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
      bullets={[
        'Clean commercial exteriors create stronger first impressions for customers, tenants, and visitors - and demonstrate that the property is actively managed.',
        'We handle building exteriors, storefronts, parking areas, sidewalks, concrete, and windows for commercial properties across Wake County.',
        'Recurring maintenance plans available for property managers who need consistent scheduling and predictable results without the back-and-forth.',
        'We serve commercial clients across Raleigh, Cary, Apex, Holly Springs, and the Triangle NC metro area.',
      ]}
      steps={[
        {
          title: 'Tell us about the property',
          body: 'Submit the quick form with your property details and cleaning needs. We work with property managers, storefront owners, and commercial operators.',
          image: '/step-images/crew-arrives.png',
        },
        {
          title: 'We scope the work and schedule efficiently',
          body: 'We\'ll coordinate timing to minimize disruption to your business or tenants. Early morning, evening, and weekend scheduling is available for most commercial clients.',
          image: '/step-images/get-quote.png',
        },
        {
          title: 'Your property looks professional and maintained',
          body: 'Clean exteriors are a direct reflection of how a business operates. We deliver consistent results so your property always makes the right impression.',
          image: '/step-images/clean-result.png',
        },
      ]}
      faqs={[
        {
          q: 'What types of commercial properties do you service?',
          a: 'We work with storefronts, office buildings, retail centers, apartment complexes, HOA common areas, and small commercial sites across Wake County and the Triangle.',
        },
        {
          q: 'Can you work around our business hours?',
          a: 'Yes - we offer flexible scheduling for commercial clients, including early morning, evening, and weekend availability to minimize impact on your operations or tenants.',
        },
        {
          q: 'Do you offer recurring commercial maintenance plans?',
          a: 'Yes. We set up recurring maintenance schedules for commercial properties that need consistent exterior cleaning throughout the year. This includes priority scheduling and predictable pricing.',
        },
        {
          q: 'What surfaces can you clean on a commercial property?',
          a: 'We clean building exteriors, storefronts, sidewalks, parking areas, dumpster pads, concrete, windows, and more. Contact us to discuss the specific surfaces and scope for your property.',
        },
      ]}
    />
  );
}
