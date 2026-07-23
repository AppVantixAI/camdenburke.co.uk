import { Constellation } from "@/components/Constellation";
import { Creed } from "@/components/Creed";
import { Hero } from "@/components/Hero";
import { Offer } from "@/components/Offer";
import { Presence } from "@/components/Presence";
import { Proof } from "@/components/Proof";

export default function HomePage() {
  return (
    <div id="top">
      <Hero />
      <Proof />
      <Presence />
      <Creed />
      <Constellation />
      <Offer />
    </div>
  );
}
