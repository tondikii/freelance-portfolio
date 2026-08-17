import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { DemoShowcase } from "@/components/sections/demo-showcase";
import { About } from "@/components/sections/about";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <DemoShowcase />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
