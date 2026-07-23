import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Credentials />
      <Portfolio />
      <Contact />
    </>
  );
}
