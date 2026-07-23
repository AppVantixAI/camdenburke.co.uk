import { Credentials } from "@/components/Credentials";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { Method } from "@/components/Method";
import { OfferPath } from "@/components/OfferPath";
import { Positioning } from "@/components/Positioning";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <Credentials />
      <Work />
      <Method />
      <OfferPath />
      <FinalCta />
    </>
  );
}
