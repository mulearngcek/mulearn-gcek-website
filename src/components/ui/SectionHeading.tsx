import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {kicker && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-600">
          {kicker}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </div>
  );
}
