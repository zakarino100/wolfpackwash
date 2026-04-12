import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.contact.eyebrow}
      title={pageContent.contact.title}
      description={pageContent.contact.description}
      sourcePage="/contact"
      bullets={[
        'This should be one of the strongest pure conversion pages on the site.',
        'Keep the quote form fast and mobile-friendly.',
        'Support call-now and form-first visitors equally well.',
      ]}
    />
  );
}
