import { Constellation } from "@/components/Constellation";
import { Creed } from "@/components/Creed";
import { Hero } from "@/components/Hero";
import { Letter } from "@/components/Letter";
import { Notes } from "@/components/Notes";
import { Offer } from "@/components/Offer";
import { Presence } from "@/components/Presence";
import { Proof } from "@/components/Proof";
import { Record } from "@/components/Record";

export default function HomePage() {
  return (
    <div id="top">
      <Hero />
      <Proof />
      <Presence />
      <Record />
      <Constellation />
      <Creed />
      <Letter />
      <Notes />
      <Offer />
    </div>
  );
}
