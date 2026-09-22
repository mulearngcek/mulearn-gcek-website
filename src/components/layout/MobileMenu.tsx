"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { MuLearn } from "@/components/brand/MuLearn";
import { navItems, siteConfig } from "@/content/site";
import { trapTabKey } from "@/lib/focus-trap";
import { externalAnchorProps, getJoinHref } from "@/lib/links";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close when the viewport crosses the desktop breakpoint (Tailwind lg = 1024px).
  // The overlay and trigger are hidden above lg, so leaving the menu open there
  // would strand the body scroll lock with no way to dismiss it.
  useEffect(() => {
    if (!open) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);

    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, [open]);

  // Scroll lock, Escape to close, focus trap, initial focus, focus restore
  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (panelRef.current) trapTabKey(panelRef.current, event);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-10 items-center justify-center rounded-full text-ink-soft outline-offset-2 outline-brand-600 transition-colors hover:bg-ink/5 focus-visible:outline-2 lg:hidden"
      >
        <Menu className="size-5" aria-hidden="true" />
      </button>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "visible" : "invisible",
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 cursor-pointer bg-ink/30 transition-opacity duration-200 ease-out-soft motion-reduce:transition-none",
            open ? "opacity-100" : "opacity-0",
          )}
        />

        <aside
          ref={panelRef}
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-elevated transition-transform duration-300 ease-out-soft motion-reduce:transition-none",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-16 shrink-0 items-center justify-between px-5">
            <Logo />
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pt-4">
            <ul>
              {navItems.map((item, index) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      style={{ transitionDelay: open ? `${50 + index * 40}ms` : "0ms" }}
                      className={cn(
                        "flex min-h-12 items-center rounded-lg px-4 text-base font-medium transition-all duration-300 ease-out-soft motion-reduce:transition-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-600",
                        open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                        active
                          ? "bg-brand-50 text-brand-700"
                          : "text-ink hover:bg-paper-soft",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-ink/5 p-5">
            <Link
              href={getJoinHref()}
              {...externalAnchorProps(getJoinHref())}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-600 text-sm font-semibold text-white transition-all duration-200 outline-offset-2 outline-brand-600 focus-visible:outline-2 hover:bg-brand-700"
            >
              Join <MuLearn />
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-center text-xs text-ink-muted">
              {siteConfig.college}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
