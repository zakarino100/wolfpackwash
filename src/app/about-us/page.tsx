import type { Metadata } from 'next';
import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';
import { pageSeo } from '@/lib/site/page-seo';

export const metadata: Metadata = pageSeo.about;

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.about.eyebrow}
      title={pageContent.about.title}
      description={pageContent.about.description}
      sourcePage="/about-us"
      image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
      bullets={[
        'Wolf Pack Wash is a locally owned exterior cleaning company serving the Triangle area of North Carolina - Raleigh, Cary, Apex, Holly Springs, and surrounding communities.',
        'We built this company around a simple standard: show up on time, do the work right, and communicate clearly from the first quote to the finished job.',
        'Our team handles house washing, soft washing, window cleaning, gutter cleaning, concrete and driveway pressure washing, deck and fence cleaning, holiday lighting, and permanent RGB lighting installs.',
        'We\'re not a franchise or a call center - we\'re a real local crew that stands behind every job we do.',
      ]}
      steps={[
        {
          title: 'Reach out from your phone',
          body: 'Fill out the quick form or call us directly. We respond the same day with pricing and next available scheduling - no waiting, no runaround.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        },
        {
          title: 'We recommend the right service and show up ready',
          body: 'Our crew arrives on time with the right equipment for your home. We walk the property, confirm the scope, and get to work without dragging the process out.',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        },
        {
          title: 'You see the difference immediately',
          body: 'Clean siding, clear windows, open gutters, bright concrete - the results are visible as soon as we finish. That\'s what we show up to deliver every time.',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        },
      ]}
      faqs={[
        {
          q: 'Is Wolf Pack Wash a locally owned company?',
          a: 'Yes - Wolf Pack Wash is locally owned and operated in the Triangle area of North Carolina. We\'re not a franchise or a national call center. When you call or submit a form, you\'re reaching our actual team.',
        },
        {
          q: 'What areas does Wolf Pack Wash serve?',
          a: 'We serve Raleigh, Cary, Apex, Holly Springs, Morrisville, Fuquay-Varina, Garner, and the surrounding Wake County and Triangle area.',
        },
        {
          q: 'Are you insured?',
          a: 'Yes - Wolf Pack Wash is fully insured. We carry liability coverage on all jobs to protect your property and give you peace of mind when we\'re on site.',
        },
        {
          q: 'What services do you offer?',
          a: 'We offer house washing, soft washing, window cleaning, gutter cleaning, concrete and driveway pressure washing, deck washing, fence washing, sidewalk cleaning, holiday light installation, and permanent RGB lighting for homes and businesses across the Triangle.',
        },
      ]}
    />
  );
}
