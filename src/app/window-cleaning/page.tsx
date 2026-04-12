import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.windowCleaning.eyebrow}
      title={pageContent.windowCleaning.title}
      description={pageContent.windowCleaning.description}
      sourcePage="/window-cleaning"
      bullets={[
        'Sell the visual result and streak-free finish.',
        'Position route scheduling as a smart value move.',
        'Support add-on logic without making the initial quote feel heavy.',
      ]}
    />
  );
}
