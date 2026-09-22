import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start justify-center gap-7 py-28 sm:py-36">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
        Error 404
      </p>
      <h1 className="max-w-3xl font-display text-5xl font-bold tracking-tight text-ink sm:text-7xl">
        Page not found
      </h1>
      <p className="max-w-md leading-relaxed text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
        back on track.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Button href="/">Back to home</Button>
        <Button href="/contact" variant="secondary">
          Contact us
        </Button>
      </div>
    </Container>
  );
}
