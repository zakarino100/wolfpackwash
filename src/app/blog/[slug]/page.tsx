import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/ui/page-template";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  return (
    <PageTemplate
      eyebrow="Wolf Pack Wash Blog"
      title={slug.replace(/-/g, " ")}
      description="Dynamic blog route scaffolded. Connect this to published Supabase content and ISR/static revalidation in the next phase."
    />
  );
}
