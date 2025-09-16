import { Vortex } from "@/components/ui/vortex";
import { useInView } from "@/hooks/useInView";
import { scrollThreshold } from "@/configs/settings";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact({ baseHue }: { baseHue: number }) {
  const { ref, inView } = useInView({ threshold: scrollThreshold });

  return (
    <section
      id="contact"
      ref={ref}
      style={{ "--base-hue": baseHue } as React.CSSProperties}
      className="h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full mx-auto rounded-md h-screen overflow-hidden">
        <Vortex
          rangeY={typeof window !== "undefined" ? window.innerHeight : 800}
          className="flex flex-col items-center justify-center w-full h-full"
          baseHue={baseHue}
        >
          {inView && (
            <div className="flex flex-col items-center">
              <h2 className="text-white text-2xl md:text-6xl font-bold mb-8">
                Get in Touch 📬
              </h2>
              <div className="flex gap-10 text-[hsl(var(--base-hue)_100%_50%)]">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/wei-jen-thing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaLinkedin size={50} />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Weijen1006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaGithub size={50} />
                </a>
              </div>
            </div>
          )}
        </Vortex>
      </div>
    </section>
  );
}
