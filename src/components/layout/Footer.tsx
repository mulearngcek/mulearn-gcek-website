import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { MuLearn } from "@/components/brand/MuLearn";
import { Container } from "@/components/ui/Container";
import { links, navItems, siteConfig } from "@/content/site";

const connectLinks = [
  links.email ? { label: "Email", href: `mailto:${links.email}` } : null,
  links.instagram ? { label: "Instagram", href: links.instagram } : null,
  links.linkedin ? { label: "LinkedIn", href: links.linkedin } : null,
  links.community || links.joinUrl
    ? { label: "Community", href: links.community || links.joinUrl }
    : null,
  { label: "μLearn.org", href: links.mulearn },
].filter((item): item is { label: string; href: string } => item !== null);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/5 bg-paper-warm">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
              {siteConfig.description}
            </p>
            <p className="text-xs text-ink-muted">
              Government College of Engineering, Kannur · Kerala
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-ink">
              Pages
            </h2>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block text-sm text-ink-soft transition-colors duration-150 hover:text-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-ink">
              Connect
            </h2>
            <ul className="mt-4 space-y-2">
              {connectLinks.map((item) => {
                const external = item.href.startsWith("http");
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="group inline-flex items-center gap-1 text-sm text-ink-soft transition-colors duration-150 hover:text-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                    >
                      {item.label}
                      {external && (
                        <ArrowUpRight
                          className="size-3 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted" suppressHydrationWarning>
            © {year} {siteConfig.name}
          </p>
          <a
            href={links.mulearn}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-ink-muted transition-colors duration-150 hover:text-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            Part of the <MuLearn /> network ↗
          </a>
        </div>
      </Container>
    </footer>
  );
}
