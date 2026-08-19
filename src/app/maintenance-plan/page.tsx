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
      image="/hero-images/maintenance-plan.webp"
      bullets={[
        'Stop chasing appointments every spring - a recurring care plan keeps your home clean year-round on a schedule that works for you.',
        'Plan members get priority scheduling, member-only pricing, and are first in the queue when spots fill up seasonally.',
        'Regular exterior care prevents buildup, extends the life of your siding and gutters, and keeps the property looking maintained between visits.',
        'Choose from Starter, Preferred, and Signature tiers depending on the size of your home and how much coverage you want.',
      ]}
      steps={[
        {
          title: 'Pick the cadence before the buildup gets ahead of you',
          body: 'We look at the siding, gutters, concrete, and tree cover around the property and match you with a plan that keeps the outside under control without over-servicing the home.',
          image: '/gallery-images/real-house-wash.webp',
        },
        {
          title: 'We stay ahead of the schedule for you',
          body: 'Plan members get priority scheduling and proactive reminders. Instead of remembering when the house, gutters, or concrete are due again, you get a system that keeps the property on track.',
          image: '/gallery-images/real-gutter.webp',
        },
        {
          title: 'Your home stays cleaner all year long',
          body: 'No more scrambling to book in spring when everyone else is calling. Your property stays maintained, your curb appeal stays strong, and you don\'t have to think about it.',
          image: '/gallery-images/real-driveway.jpg',
        },
      ]}
      gallery={[
        { src: '/gallery-images/real-house-wash.webp', alt: 'Well-maintained home exterior after recurring house washing in Raleigh NC' },
        { src: '/gallery-images/real-gutter.webp', alt: 'Recurring gutter maintenance keeping a roofline clear in the Triangle' },
        { src: '/gallery-images/real-driveway.jpg', alt: 'Driveway maintenance visit as part of a recurring exterior care plan' },
        { src: '/step-images/clean-result.webp', alt: 'Exterior care plan results - Wake County home maintenance' },
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
