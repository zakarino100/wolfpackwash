import { listCategories, listTags, withReadingTime, type PostSummary } from "@/lib/blog/posts";
import { paginate } from "@/lib/blog/paths";

export function buildListing(allPosts: PostSummary[], posts: PostSummary[], page: number) {
  const paged = paginate(posts, page);
  if (!paged) return null;
  const visible = withReadingTime(paged.items);
  return {
    featured: page === 1 ? (visible[0] ?? null) : null,
    cards: page === 1 ? visible.slice(1) : visible,
    recent: withReadingTime(allPosts.slice(0, 4)),
    categories: listCategories(allPosts),
    tags: listTags(allPosts),
    page: paged.page,
    totalPages: paged.totalPages,
  };
}
