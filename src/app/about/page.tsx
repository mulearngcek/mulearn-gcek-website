import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { StorySections } from "@/components/about/StorySections";
import { PeerFlow } from "@/components/about/PeerFlow";
import { EcosystemBand } from "@/components/about/EcosystemBand";
import { WhyJoin } from "@/components/about/WhyJoin";
import { JoinCTA } from "@/components/home/JoinCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "What μLearn is, what the GCEK campus chapter does, and how peer-to-peer learning works at Government College of Engineering, Kannur.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySections />
      <PeerFlow />
      <EcosystemBand />
      <WhyJoin />
      <JoinCTA />
    </>
  );
}
