import { Vortex } from "@/components/ui/vortex";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { scrollThreshold } from "@/configs/settings";

export default function Project({ baseHue }: { baseHue: number }) {
    const { ref, inView } = useInView({ threshold: scrollThreshold });

    return (
        <section
            id="project"
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
                    {/* Animate only when in view */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full max-w-5xl"
                    >
                        <div className="flex flex-col items-center">
                            <h2 className="text-white text-2xl md:text-6xl font-bold mb-8">
                                🚧 Work in Progress 🚧
                            </h2>
                            <p className="text-white text-lg md:text-2xl mt-4">
                                This page is under construction. Stay tuned!
                            </p>
                        </div>
                    </motion.div>
                </Vortex>
            </div>
        </section>
    );
}
