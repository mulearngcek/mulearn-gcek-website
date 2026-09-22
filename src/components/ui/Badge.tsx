import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "brand" | "hi";

const variants: Record<BadgeVariant, string> = {
  neutral: "bg-paper-soft text-ink-soft",
  brand: "bg-brand-50 text-brand-700",
  hi: "bg-brand-50 text-brand-700",
};

export function Badge({
  variant = "neutral",
  className,
  children,
}: {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
