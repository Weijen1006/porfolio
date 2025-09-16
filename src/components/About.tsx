import { Vortex } from "@/components/ui/vortex";

export default function About({ baseHue }: { baseHue: number }) {
    return (
        <section
            id="about"
            style={{ "--base-hue": baseHue } as React.CSSProperties}
            className="h-screen flex flex-col items-center justify-center"
        >
            <div className="w-full mx-auto rounded-md h-screen overflow-hidden">
                <Vortex
                    rangeY={typeof window !== "undefined" ? window.innerHeight : 800}
                    className="flex flex-col items-center justify-center w-full h-full"
                    baseHue={baseHue}
                >
                    <h1 className="text-white text-4xl md:text-7xl font-bold tracking-wide">
                        🚧 Work in Progress 🚧
                    </h1>
                    <p className="text-neutral-300 text-lg md:text-2xl mt-4">
                        This page is under construction. Stay tuned!
                    </p>
                </Vortex>
            </div>
        </section>
    );
}