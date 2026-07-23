import { Constellation } from "@/components/Constellation";
import { Creed } from "@/components/Creed";
import { Hero } from "@/components/Hero";
import { Letter } from "@/components/Letter";
import { Offer } from "@/components/Offer";
import { Proof } from "@/components/Proof";

export default function HomePage() {
  return (
    <div id="top">
      <Hero />
      <Proof />
      <Constellation />
      <Creed />
      <Letter />
      <Offer />
    </div>
  );
}
