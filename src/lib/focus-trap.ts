const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Cycle Tab within a dialog container. Call from the dialog's document-level
 * keydown handler — keeps keyboard focus inside role="dialog" surfaces.
 */
export function trapTabKey(container: HTMLElement, event: KeyboardEvent) {
  if (event.key !== "Tab") return;

  const focusables = Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE),
  ).filter((el) => el.offsetParent !== null);

  if (focusables.length === 0) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const active = document.activeElement;
  const escaped = !container.contains(active);

  if (event.shiftKey && (active === first || escaped)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (active === last || escaped)) {
    event.preventDefault();
    first.focus();
  }
}
