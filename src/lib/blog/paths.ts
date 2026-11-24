export const POSTS_PER_PAGE = 9;

export function blogPageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

export function categoryPageHref(slug: string, page: number): string {
  return page <= 1 ? `/blog/category/${slug}` : `/blog/category/${slug}/page/${page}`;
}

export function tagPageHref(slug: string, page: number): string {
  return page <= 1 ? `/blog/tag/${slug}` : `/blog/tag/${slug}/page/${page}`;
}

export function parsePageParam(raw: string): number | null {
  if (!/^[1-9]\d*$/.test(raw)) return null;
  const page = Number(raw);
  return Number.isSafeInteger(page) ? page : null;
}

export function paginate<T>(items: readonly T[], page: number, perPage = POSTS_PER_PAGE) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  if (page < 1 || page > totalPages) return null;
  const start = (page - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    page,
    totalPages,
    total,
  };
}
