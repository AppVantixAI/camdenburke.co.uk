import { Constellation } from "@/components/Constellation";
import { Credentials } from "@/components/Credentials";
import { Creed } from "@/components/Creed";
import { Hero } from "@/components/Hero";
import { Letter } from "@/components/Letter";
import { Offer } from "@/components/Offer";
import { Proof } from "@/components/Proof";
import { VideoReel } from "@/components/VideoReel";

export default function HomePage() {
  return (
    <div id="top">
      <Hero />
      <Proof />
      <Letter />
      <Creed />
      <Credentials />
      <Constellation />
      <VideoReel />
      <Offer />
    </div>
  );
}
