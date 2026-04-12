import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.about.eyebrow}
      title={pageContent.about.title}
      description={pageContent.about.description}
      sourcePage="/about-us"
      image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
      bullets={[
        'Lead with trust, local credibility, and responsiveness.',
        'Keep the tone direct, professional, and easy to believe.',
        'Support both paid and organic traffic without making the page feel bloated.',
      ]}
    />
  );
}
