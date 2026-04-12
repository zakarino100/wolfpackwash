import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.houseWashing.eyebrow}
      title={pageContent.houseWashing.title}
      description={pageContent.houseWashing.description}
      sourcePage="/house-washing"
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      bullets={[
        'Soft-wash process is safe for all siding types including vinyl, brick, and wood.',
        'Removes pollen, mildew, algae, and grime — not just surface dirt.',
        'Fast turnaround with clear before-and-after results every time.',
      ]}
    />
  );
}
