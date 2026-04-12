import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.windowCleaning.eyebrow}
      title={pageContent.windowCleaning.title}
      description={pageContent.windowCleaning.description}
      sourcePage="/window-cleaning"
      image="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1600&q=80"
      bullets={[
        'Interior and exterior glass cleaned streak-free every time.',
        'Natural light comes back immediately — homeowners notice right away.',
        'Easy to bundle with house washing for a full exterior refresh.',
      ]}
    />
  );
}
