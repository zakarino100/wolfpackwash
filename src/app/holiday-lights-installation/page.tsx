import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.holidayLights.eyebrow}
      title={pageContent.holidayLights.title}
      description={pageContent.holidayLights.description}
      sourcePage="/holiday-lights-installation"
      bullets={[
        'Keep the page focused on seasonal urgency and professional install.',
        'Use this as both SEO protection and seasonal paid-media destination if needed.',
        'Make limited seasonal capacity part of the sales framing.',
      ]}
    />
  );
}
