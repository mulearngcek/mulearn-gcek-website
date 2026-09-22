import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { MuLearn } from "@/components/brand/MuLearn";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryArchive } from "@/components/gallery/GalleryArchive";
import { galleryItems } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs and moments from μLearn GCEK — workshops, sessions, campus activities, designs, and achievements.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-50 opacity-60 blur-3xl"
        />

        <Container className="relative pt-16 sm:pt-24 lg:pt-32">
          <Reveal>
            <p className="mb-6 text-sm font-medium text-brand-600">
              <MuLearn /> GCEK
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="max-w-4xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-ink">
              Moments on{" "}
              <span className="text-brand-600">record</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Workshops, sessions, and everything in between — the chapter&apos;s
              visual record.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="pb-20 pt-10 sm:pb-28 sm:pt-14">
        <Reveal delay={200}>
          <GalleryArchive items={galleryItems} />
        </Reveal>
      </Container>
    </>
  );
}
