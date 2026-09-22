import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="μLearn GCEK — Home"
      className={cn(
        "group inline-flex items-center gap-3 outline-offset-4 outline-brand-600 focus-visible:outline-2",
        className,
      )}
    >
      <Image
        src="/assets/mulearn-wordmark.png"
        alt="μLearn GCEK"
        width={2172}
        height={724}
        sizes="108px"
        priority
        className="h-9 w-auto shrink-0"
      />
      <span className="leading-none">
        <span
          className={cn(
            "block font-mono text-[10px] font-medium uppercase tracking-[0.2em]",
            inverted ? "text-white/50" : "text-ink-muted",
          )}
        >
          GCEK · Kannur
        </span>
      </span>
    </Link>
  );
}
