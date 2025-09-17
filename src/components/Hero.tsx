import { Vortex } from "@/components/ui/vortex";
import { LinkPreview } from "@/components/ui/link-preview";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useInView } from "@/hooks/useInView";
import { scrollThreshold } from "@/configs/settings";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Hero({ baseHue }: { baseHue: number }) {
  const { ref, inView } = useInView({ threshold: scrollThreshold });

  // Animation controllers for text and image
  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (inView) {
      // Animate text sequentially
      textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      });

      // Animate image with delay after text
      imageControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut", delay: 3 },
      });
    } else {
      // Reset when out of view
      textControls.start({ opacity: 0, y: 50 });
      imageControls.start({ opacity: 0, x: 50 });
    }
  }, [inView, textControls, imageControls]);

  return (
    <section
      ref={ref}
      style={{ "--base-hue": baseHue } as React.CSSProperties}
      className="h-screen flex justify-center items-center overflow-hidden"
    >
      <div className="w-full max-w-full mx-auto rounded-md">
        <Vortex
          rangeY={typeof window !== "undefined" ? window.innerHeight : 800}
          className="flex flex-col md:flex-row w-full h-full justify-center items-center px-4 md:px-8"
          baseHue={baseHue}
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={textControls}
            className="w-full md:w-1/2 flex flex-col justify-center items-center text-center"
          >
            <TextGenerateEffect
              key={`intro-${inView}`} // <--- remounts when inView changes
              className="text-white text-[clamp(1.5rem,5vw,4rem)] md:text-6xl font-bold"
              duration={1}
              words={"Hello! My name is"}
            />
            <TextGenerateEffect
              key={`name-${inView}`}
              className="text-white text-[clamp(1.5rem,5vw,4rem)] md:text-6xl font-bold"
              duration={1}
              delay={1}
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
              key={`role-${inView}`}
              className="text-white text-[clamp(1.5rem,5vw,4rem)] md:text-6xl font-bold"
              duration={1}
              delay={2}
              words={"I'm a Software Engineer"}
            />
          </motion.div>

          {/* Circular Image only on md+ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={imageControls}
            className="hidden md:flex justify-center items-center w-1/2 h-full md:ml-8 [aspect-ratio:1/1]"
          >
            <div className="rounded-full border-4 border-white/10 overflow-hidden">
              <img
                src="weijen.png"
                alt="Wei Jen"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </Vortex>
      </div>
    </section>
  );
}
