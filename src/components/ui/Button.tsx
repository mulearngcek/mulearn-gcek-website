import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out-soft outline-offset-2 outline-brand-600 focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-full bg-ink text-white hover:-translate-y-0.5 hover:shadow-lift",
  secondary:
    "rounded-full border border-ink/15 bg-white text-ink hover:-translate-y-0.5 hover:shadow-card",
  accent:
    "rounded-full bg-brand-600 text-white hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lift",
  ghost: "text-ink-soft underline decoration-brand-300 decoration-2 underline-offset-4 hover:text-brand-600",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-sm",
};

/** Props a caller may pass beyond the Button-specific knobs. */
type ButtonRest = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> &
  // Anchor attributes used by the <Link> variant — e.g. target/rel for
  // external destinations supplied through externalAnchorProps().
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel">;

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & ButtonRest;

/** Attributes that belong to <button> semantics and are meaningless (or invalid) on an anchor. */
const buttonOnlyAttributes = [
  "autoFocus",
  "disabled",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "name",
  "type",
  "value",
] as const;

/**
 * Build the props forwarded to the anchor variant: everything the caller
 * passed except button-only attributes. The boundary cast is deliberate —
 * React 19 types make button/anchor event handlers strictly incompatible,
 * and this object is only ever spread onto a <Link> (which renders an <a>).
 */
function anchorLinkProps(props: ButtonRest): AnchorHTMLAttributes<HTMLAnchorElement> {
  const forwarded = { ...props } as Record<string, unknown>;
  for (const key of buttonOnlyAttributes) delete forwarded[key];
  return forwarded as unknown as AnchorHTMLAttributes<HTMLAnchorElement>;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...anchorLinkProps(props)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
