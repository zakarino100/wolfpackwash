import { shareLinks, socialProfiles } from "@/lib/blog/social";

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.1C12.4 3 11 4.5 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.3l.4-2.8h-2.7Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SocialFollow() {
  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink-strong)]">Follow</h2>
      <ul className="mt-3 flex flex-col gap-2">
        {socialProfiles.map((profile) => (
          <li key={profile.href}>
            <a className="blog-quiet inline-flex items-center gap-2 text-sm font-semibold" href={profile.href} target="_blank" rel="noopener noreferrer">
              {profile.name === "Facebook" ? <FacebookIcon /> : <InstagramIcon />}
              {profile.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ShareLinks({ canonical, title }: { canonical: string; title: string }) {
  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ink-strong)]">Share</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {shareLinks(canonical, title).map((link) => (
          <li key={link.name}>
            <a
              className="blog-chip"
              href={link.href}
              {...(link.name === "Email" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
