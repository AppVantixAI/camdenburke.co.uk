import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { Hero } from "@/components/Hero";
import { Principles } from "@/components/Principles";
import { Story } from "@/components/Story";
import { VideoReel } from "@/components/VideoReel";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <div id="top">
      <Hero />
      <Story />
      <Principles />
      <Credentials />
      <Work />
      <VideoReel />
      <Contact />
    </div>
  );
}
