import { PageBuilder } from '@/components/ui/page-builder';
import { pageContent } from '@/lib/site/page-content';

export default function Page() {
  return (
    <PageBuilder
      eyebrow={pageContent.blog.eyebrow}
      title={pageContent.blog.title}
      description={pageContent.blog.description}
      sourcePage="/blog"
      image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80"
      bullets={[
        'This route is ready to connect to the publishing system later.',
        'Keep the public side fast and the editing side separate.',
        'Use blog content to support local SEO and homeowner trust.',
      ]}
    />
  );
}
