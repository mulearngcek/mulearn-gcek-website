import { cn } from "@/lib/utils";

/** Brand accent — a subtle background highlight for emphasis. */
export function Highlight({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span className={cn("text-brand-600", className)}>{children}</span>
  );
}
