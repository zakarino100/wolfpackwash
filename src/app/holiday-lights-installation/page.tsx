import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.holidayLights.eyebrow}
      title={pageContent.holidayLights.title}
      description={pageContent.holidayLights.description}
      sourcePage="/holiday-lights-installation"
      image="https://images.unsplash.com/photo-1543589923-c8a5f239b5f6?w=1600&q=80"
      bullets={[
        'Keep the page focused on seasonal urgency, clean presentation, and professional installation.',
        'Use this page for SEO protection now and seasonal lead capture later without carrying over the old branding mistakes.',
        'Make limited holiday capacity part of the sales framing so the page has urgency without feeling gimmicky.',
      ]}
      steps={[
        {
          title: 'Request your holiday lighting quote early',
          body: 'This page should make early booking feel like the smart move, especially when the season starts filling up.',
        },
        {
          title: 'Get a cleaner design and install plan',
          body: 'Frame the service around presentation, convenience, and avoiding the look of a rushed DIY setup.',
        },
        {
          title: 'Enjoy a sharper holiday-ready home',
          body: 'The result should feel polished, premium, and easy to say yes to for homeowners who want the house to stand out.',
        },
      ]}
    />
  );
}
