"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { MuLearn } from "@/components/brand/MuLearn";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navItems } from "@/content/site";
import { externalAnchorProps, getJoinHref } from "@/lib/links";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Primary" className="hidden h-full lg:block">
            <ul className="flex h-full items-stretch gap-1">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className="flex items-stretch">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative flex items-center px-4 text-sm font-medium transition-colors duration-150 outline-offset-[-4px] outline-brand-600 focus-visible:outline-2",
                        active
                          ? "text-brand-600"
                          : "text-ink-soft hover:text-ink",
                      )}
                    >
                      {item.label}
                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-brand-600"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={getJoinHref()}
              {...externalAnchorProps(getJoinHref())}
              className="hidden h-10 items-center gap-1.5 rounded-full bg-brand-600 px-5 text-sm font-semibold text-white transition-all duration-200 outline-offset-2 outline-brand-600 focus-visible:outline-2 hover:bg-brand-700 hover:shadow-lift sm:inline-flex"
            >
              Join <MuLearn />
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
