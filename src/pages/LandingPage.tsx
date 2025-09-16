import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function LandingPage() {
  const animationBaseHue = Math.floor(Math.random() * 360);
  return (
    <div className="scroll-smooth">
        <section id="hero" className="snap-center h-screen">
          <Hero baseHue={animationBaseHue}/>
        </section>
        <section id="about" className="snap-center h-screen">
          <About baseHue={animationBaseHue}/>
        </section>
        {/* <section id="projects" className="snap-center h-screen">
          <Projects />
        </section> */}
        <section id="contact" className="snap-center h-screen">
          <Contact baseHue={animationBaseHue} />
        </section>
      </div>
  );
}