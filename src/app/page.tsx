import { Hero } from "@/components/hero/hero";
import { Navbar } from "@/components/nav/navbar";

export default function Home() {
  return (
   <div>
    <main>
      <Navbar/>
      <Hero />
    </main>
   </div>
  );
}
