import { links } from "@/content/site";

/** Join CTA destination — falls back to /contact until the official URL is configured. */
export function getJoinHref() {
  return links.joinUrl || "/contact";
}

/** True once the official chapter join URL is set in content/site.ts. */
export function isJoinConfigured() {
  return Boolean(links.joinUrl);
}

export function isExternalHref(href: string) {
  return href.startsWith("http");
}

/** Props to spread on an anchor when the target is external. */
export function externalAnchorProps(href: string) {
  return isExternalHref(href) ? { target: "_blank" as const, rel: "noreferrer" } : {};
}
