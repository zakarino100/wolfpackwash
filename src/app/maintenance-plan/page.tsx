import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.maintenancePlan;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.maintenancePlan.eyebrow}
      title={pageContent.maintenancePlan.title}
      description={pageContent.maintenancePlan.description}
      sourcePage="/maintenance-plan"
      image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
      bullets={[
        'Stop chasing appointments every spring - a recurring care plan keeps your home clean year-round on a schedule that works for you.',
        'Plan members get priority scheduling, member-only pricing, and are first in the queue when spots fill up seasonally.',
        'Regular exterior care prevents buildup, extends the life of your siding and gutters, and keeps the property looking maintained between visits.',
        'Choose from Starter, Preferred, and Signature tiers depending on the size of your home and how much coverage you want.',
      ]}
      steps={[
        {
          title: 'Choose the plan that fits your home',
          body: 'We\'ll walk through your property\'s needs and recommend the right tier - whether you want basic annual maintenance or full-coverage recurring care.',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        },
        {
          title: 'We schedule and handle everything',
          body: 'As a plan member, you\'re automatically prioritized for scheduling. You don\'t have to call every season - we\'ll reach out to confirm your next visit.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        },
        {
          title: 'Your home stays cleaner all year long',
          body: 'No more scrambling to book in spring when everyone else is calling. Your property stays maintained, your curb appeal stays strong, and you don\'t have to think about it.',
          image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
        },
      ]}
      gallery={[
        { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', alt: 'Well-maintained home exterior - Raleigh NC exterior care plan' },
        { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Clean home year-round with recurring exterior service' },
        { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'House washing as part of annual exterior care plan - Triangle NC' },
        { src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80', alt: 'Exterior care plan results - Wake County home maintenance' },
      ]}
      faqs={[
        {
          q: 'What is included in the Exterior Care Plan?',
          a: 'The plan includes recurring exterior cleaning services on a schedule based on your tier. This can include house washing, window cleaning, gutter cleaning, concrete and driveway cleaning, and other services depending on the plan level. We\'ll walk through the exact scope with you when you sign up.',
        },
        {
          q: 'How often do plan members receive service?',
          a: 'Frequency depends on your tier - Starter members typically receive annual service, Preferred members receive semi-annual or quarterly visits, and Signature members get the highest frequency with full-priority scheduling.',
        },
        {
          q: 'Do I save money with a plan vs. booking individual services?',
          a: 'Yes - plan members receive member-only pricing that is lower than standard per-service rates, plus priority scheduling that guarantees availability during peak seasons.',
        },
        {
          q: 'Can I cancel the plan if my needs change?',
          a: 'Yes. We want the plan to work for you, and we\'re flexible if your situation changes. Contact us and we\'ll work with you on adjusting or canceling your plan.',
        },
      ]}
    />
  );
}
