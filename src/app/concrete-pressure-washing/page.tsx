import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.concrete.eyebrow}
      title={pageContent.concrete.title}
      description={pageContent.concrete.description}
      sourcePage="/concrete-pressure-washing"
      image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&q=80"
      bullets={[
        'Removes years of oil stains, dirt, and algae growth from concrete.',
        'Dramatically improves curb appeal before a listing or just for pride.',
        'Pairs perfectly with driveway and sidewalk cleaning for a complete reset.',
      ]}
    />
  );
}
