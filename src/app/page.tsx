import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Provenance } from "@/components/Provenance";
import { Thesis } from "@/components/Thesis";
import { Ventures } from "@/components/Ventures";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Thesis />
      <Provenance />
      <Ventures />
      <Contact />
    </>
  );
}
