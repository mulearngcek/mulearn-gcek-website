import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/content/gallery";

export function GalleryPreview() {
  const previewItems = galleryItems.slice(0, 6);
  const hasPhotos = previewItems.length > 0;

  return (
    <section aria-label="Gallery preview">
      <Container className="py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <Reveal>
            <SectionHeading
              kicker="Moments"
              title="Glimpses of the community"
              description="Workshops, sessions, and the small in-between moments that make this chapter feel alive."
            />
          </Reveal>
          <Reveal delay={120}>
            <Button variant="ghost" href="/gallery" className="shrink-0">
              View gallery
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>

        {hasPhotos ? (
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {previewItems.map((item, index) => (
              <Reveal
                key={item.src}
                delay={index * 60}
                className={index === 0 ? "col-span-2 row-span-2" : ""}
              >
                <figure className="group relative h-full min-h-40 overflow-hidden rounded-2xl bg-paper-soft">
                  <Image
                    src={`/images/gallery/${item.src}`}
                    alt={item.alt}
                    width={800}
                    height={600}
                    sizes={
                      index === 0
                        ? "(min-width: 640px) 66vw, 100vw"
                        : "(min-width: 640px) 33vw, 50vw"
                    }
                    className="h-full w-full object-cover transition-transform duration-300 ease-out-soft group-hover:scale-[1.02] motion-reduce:transition-none"
                  />
                  {item.caption && (
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 pt-10 pb-3">
                      <p className="text-sm font-medium text-white">
                        {item.caption}
                      </p>
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={150}>
            <div className="relative mt-12 rounded-2xl border border-ink/5 bg-paper-soft px-6 py-20 text-center sm:py-28">
              <div className="flex flex-col items-center gap-5">
                <div
                  aria-hidden="true"
                  className="flex size-16 items-center justify-center rounded-2xl bg-brand-50 font-display text-2xl font-bold text-brand-600"
                >
                  μ
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Photo wall coming soon
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                  Real photos from our workshops, sessions, and campus moments
                  will be shared here soon.
                </p>
                <Button variant="secondary" href="/gallery" size="sm" className="mt-1">
                  Open the gallery
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
