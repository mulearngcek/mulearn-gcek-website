import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { EventsPreview } from "@/components/events/EventsPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { TeamPreview } from "@/components/home/TeamPreview";
import { JoinCTA } from "@/components/home/JoinCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <WhatWeDo />
      <EventsPreview />
      <GalleryPreview />
      <TeamPreview />
      <JoinCTA />
    </>
  );
}
