import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Highlight } from "@/components/ui/Highlight";
import { MuLearn } from "@/components/brand/MuLearn";
import { Reveal } from "@/components/ui/Reveal";
import { HeroIllustration } from "@/components/home/Illustrations";
import { heroContent } from "@/content/home";
import { externalAnchorProps, getJoinHref } from "@/lib/links";

/** Tiny four-point sparkle used as a decorative accent. */
function Sparkle({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d="M6 0l1.4 4.6L12 6 7.4 7.4 6 12 4.6 7.4 0 6l4.6-1.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ---- Gradient canvas ---- */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/hero-background.webp)" }}
        />
        {/* Soft veil keeps copy readable while preserving the colour */}
        <div className="absolute inset-0 bg-white/55" />
        {/* Extra lift behind the text column, easing toward the illustration */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/35 to-white/0" />
        {/* Fade into the page background below */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-paper sm:h-48" />

        {/* Barely-visible brand detail + sparkles */}
        <span className="pointer-events-none absolute -top-8 right-[4%] select-none font-display text-[12rem] font-bold leading-none text-brand-700/[0.045] lg:text-[15rem]">
          μ
        </span>
        <Sparkle className="absolute left-[44%] top-[10%] size-2.5 text-brand-400/70" />
        <Sparkle className="absolute right-[34%] top-[46%] size-2 text-cyan-500/60" />
        <Sparkle className="absolute bottom-[16%] left-[9%] size-3 text-pink-400/60" />
      </div>

      <Container className="relative pb-24 pt-14 sm:pb-28 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ---- Text column ---- */}
          <div className="max-w-xl">
            <Reveal>
              <p className="mb-5 text-sm font-medium text-brand-700">
                {heroContent.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-[1.06] tracking-tight text-ink">
                {heroContent.titleLines[0]}
                <br />
                <Highlight>{heroContent.titleLines[1]}</Highlight>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
                {heroContent.description}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  variant="accent"
                  href={getJoinHref()}
                  {...externalAnchorProps(getJoinHref())}
                >
                  Join <MuLearn />
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Button>
                <Button size="lg" variant="secondary" href="#what-we-do">
                  What we do
                  <ArrowDown className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-10 text-xs text-ink-muted">
                Open to all departments · Free forever · Student-run
              </p>
            </Reveal>
          </div>

          {/* ---- Illustration column (desktop) ---- */}
          <Reveal delay={100} className="hidden lg:block">
            <div className="relative flex items-center justify-center py-4">
              {/* Soft glow that ties the illustration into the canvas */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute size-[26rem] rounded-full bg-white/40 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 size-80 -translate-x-[70%] -translate-y-1/2 rounded-full bg-brand-200/50 blur-3xl"
              />

              <HeroIllustration className="relative w-full max-w-lg drop-shadow-[0_24px_48px_rgba(76,29,149,0.10)]" />
            </div>
          </Reveal>
        </div>

        {/* Mobile illustration — small enough to stay close to the CTAs */}
        <Reveal delay={150} className="mt-10 lg:hidden">
          <div className="flex items-center justify-center">
            <HeroIllustration className="w-full max-w-[19rem] sm:max-w-[21rem]" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
