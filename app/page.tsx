import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 space-y-24">
        <Hero />
        <MacbookScrollDemo />
        <Skills/>
      </div>
    </main>
  );
}