import { Vortex } from "@/components/ui/vortex";
import { LinkPreview } from "@/components/ui/link-preview";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useInView } from "@/hooks/useInView";
import { scrollThreshold } from "@/configs/settings";

export default function Hero({ baseHue }: { baseHue: number }) {

  const { ref, inView } = useInView({ threshold: scrollThreshold });

  return (
    <section
      ref={ref}
      style={{ "--base-hue": baseHue } as React.CSSProperties}
      className="h-screen flex flex-col items-start" // <-- items-start
    >
      <div className="w-full mx-auto rounded-md h-screen overflow-hidden">
        <Vortex
          rangeY={typeof window !== "undefined" ? window.innerHeight : 800}
          className="flex flex-col justify-center w-full h-full"
          baseHue={baseHue}
        >
          {inView && (
            <div >
              <TextGenerateEffect
                className="text-white text-2xl md:text-6xl text-center" // <-- text-left
                duration={1.5}
                words={"Hello! My name is"}
              />
              <TextGenerateEffect
                className="text-white text-2xl md:text-6xl text-center"
                duration={1.5}
                delay={1.5}
                words={[
                  <LinkPreview
                    key="weijen"
                    url="https://www.linkedin.com/in/wei-jen-thing/"
                    isStatic
                    imageSrc="linkedin-weijen.png"
                    className="font-bold text-[hsl(var(--base-hue)_100%_50%)]"
                  >
                    Wei Jen
                  </LinkPreview>,
                  "🚀",
                ]}
              />
              <TextGenerateEffect
                className="text-white text-2xl md:text-6xl text-center"
                duration={1.5}
                delay={2.5}
                words={"I'm a Software Engineer"}
              />
            </div>
          )}
        </Vortex>
      </div>
    </section>


  );
}