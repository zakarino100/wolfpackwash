import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function BlogLink({ href, children }: { href?: string; children?: ReactNode }) {
  if (!href || href.trim().toLowerCase().startsWith("javascript:")) {
    return <span>{children}</span>;
  }
  if (isInternal(href)) {
    return (
      <Link href={href} className="blog-inline-link">
        {children}
      </Link>
    );
  }
  const external = /^https?:\/\//.test(href);
  return (
    <a href={href} className="blog-inline-link" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}

export function BlogImage({ src, alt }: { src?: string; alt?: string }) {
  if (!src || (!src.startsWith("/") && !src.startsWith("https://"))) return null;
  return (
    <span className="my-8 block">
      <CoverFrame src={src} alt={alt ?? ""} />
    </span>
  );
}

function CoverFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="relative block aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-[#0d1b27]">
      <Image src={src} alt={alt} fill sizes="(max-width: 767px) 320px, 42rem" quality={60} className="object-cover" />
    </span>
  );
}
