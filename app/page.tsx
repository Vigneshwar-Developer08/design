import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import ProcessStrip from "./components/ui/ProcessStrip";
import Marquee from "./components/ui/Marquee";
import CustomCursor from "./components/ui/CustomCursor";

const MARQUEE_ITEMS = [
  "UI/UX Design", "·", "Web Development", "·", "Brand Identity", "·",
  "Digital Strategy", "·", "Next.js", "·", "Framer Motion", "·",
  "Design Systems", "·", "TypeScript", "·", "Motion Design", "·",
];

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee items={MARQUEE_ITEMS} />
        <Services />
        <Portfolio />
        <ProcessStrip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
