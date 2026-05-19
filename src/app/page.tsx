import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { Navbar } from "@/components/nav/navbar";
import { Projects } from "@/components/projects/projects";
import { Stack } from "@/components/stack/stack";
import { Experience } from "@/components/works/works";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="w-full max-w-300 mx-auto px-(--pad) flex flex-col gap-0 overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
