import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function LandingPage() {
  const animationBaseHue = Math.floor(Math.random() * 360);
  return (
    <div className="scroll-smooth">
        <section id="hero" className="snap-start h-screen">
          <Hero baseHue={animationBaseHue}/>
        </section>
        <section id="about" className="snap-start h-screen">
          <About baseHue={animationBaseHue}/>
        </section>
        {/* <section id="projects" className="snap-start h-screen">
          <Projects />
        </section> */}
        <section id="contact" className="snap-start h-screen">
          <Contact baseHue={animationBaseHue} />
        </section>
      </div>
  );
}