import { Vortex } from "@/components/ui/vortex";
import { TechLogo } from "@/components/TechLogo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { scrollThreshold } from "@/configs/settings";

export default function About({ baseHue }: { baseHue: number }) {
  const { ref, inView } = useInView({ threshold: scrollThreshold });
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;

  return (
    <section
      id="about"
      ref={ref}
      style={{ "--base-hue": baseHue } as React.CSSProperties}
      className="min-h-screen flex flex-col"
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
            <Carousel className="w-full max-w-5xl" >
              <CarouselContent>
                {/* Intro */}
                <CarouselItem>
                  <Card className="h-[60vh] flex flex-col p-10 shadow-2xl">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold text-center">
                        About Me
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center h-full">
                      <ul className="list-disc list-inside space-y-3 text-lg md:text-xl text-start">
                        <li>
                          Software engineer with <span className="font-semibold text-[hsl(var(--base-hue),100%,50%)]">{experienceYears} years of
                            experience</span> in full-stack web development, automation scripting,
                          and IT infrastructure operations
                        </li>
                        <li>
                          Skilled in building end-to-end{" "}
                          <span className="font-semibold text-[hsl(var(--base-hue),100%,50%)]">large language model (LLM)</span>{" "}
                          solutions using retrieval-augmented generation (RAG)
                        </li>
                        <li>
                          Experienced in <span className="font-semibold text-[hsl(var(--base-hue),100%,50%)]">incident
                            management</span> and IT server operations
                        </li>
                        <li>
                          Familiar with <span className="font-semibold text-[hsl(var(--base-hue),100%,50%)]">ITIL best practices</span>{" "}
                          to ensure system reliability and efficiency
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Frontend */}
                <CarouselItem>
                  <Card className="h-[60vh] flex flex-col p-10 shadow-2xl">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold text-center">Frontend</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center h-full">
                      <div className="grid grid-cols-3 justify-center gap-6 place-items-center">
                        {/* HTML */}
                        <TechLogo url="https://html.spec.whatwg.org/" src="html.png" alt="HTML" />

                        {/* CSS */}
                        <TechLogo url="https://www.w3.org/Style/CSS/Overview.en.html" src="css.svg" alt="CSS" />

                        {/* JavaScript */}
                        <TechLogo url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" src="javascript.svg" alt="JavaScript" />

                        {/* TypeScript */}
                        <TechLogo url="https://www.typescriptlang.org/" src="typescript.svg" alt="TypeScript" />

                        {/* React */}
                        <TechLogo url="https://react.dev/" src="react.svg" alt="React" />

                        {/* Next.js */}
                        <TechLogo url="https://nextjs.org/" src="nextjs.png" alt="Next.js" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Backend */}
                <CarouselItem>
                  <Card className="h-[60vh] flex flex-col p-10 shadow-2xl">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold text-center">Backend/Scripting</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center h-full">
                      <div className="grid grid-cols-4 justify-center gap-6 place-items-center">
                        {/* Python */}
                        <TechLogo url="https://www.python.org/" src="python.svg" alt="Python" />

                        {/* FastAPI */}
                        <TechLogo url="https://fastapi.tiangolo.com/" src="fastapi.png" alt="FastAPI" />

                        {/* Flask */}
                        <TechLogo url="https://flask.palletsprojects.com/" src="flask.svg" alt="Flask" />

                        {/* Node.js */}
                        <TechLogo url="https://nodejs.org/" src="nodejs.svg" alt="Node.js" />

                        {/* Nest.js */}
                        <TechLogo url="https://nestjs.com/" src="nestjs.svg" alt="Nest.js" />

                        {/* Redis */}
                        <TechLogo url="https://redis.com/" src="redis.svg" alt="Redis" />

                        {/* SQL Database */}
                        <TechLogo url="https://www.mysql.com/" src="mysql.svg" alt="MySQL" />

                        {/* Bash */}
                        <TechLogo url="https://www.shellscript.sh/" src="bash.png" alt="Bash" />

                        {/* PowerShell */}
                        <TechLogo url="https://learn.microsoft.com/en-us/powershell/" src="powershell.png" alt="PowerShell" />

                        { /* Huggingface */}
                        <TechLogo url="https://huggingface.co/" src="huggingface.svg" alt="Huggingface" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Testing */}
                <CarouselItem>
                  <Card className="h-[60vh] flex flex-col p-10 shadow-2xl">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold text-center">Testing</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center h-full">
                      <div className="grid grid-cols-3 justify-center gap-6 place-items-center">
                        {/* Jest */}
                        <TechLogo url="https://jestjs.io/" src="jest.svg" alt="Jest" />

                        {/* Pytest */}
                        <TechLogo url="https://docs.pytest.org/" src="pytest.png" alt="Pytest" />

                        {/* Cypress */}
                        <TechLogo url="https://www.cypress.io/" src="cypress.svg" alt="Cypress" />

                        {/* Playwright */}
                        <TechLogo url="https://playwright.dev/" src="playwright.svg" alt="Playwright" />

                        {/* Postman */}
                        <TechLogo url="https://www.postman.com/" src="postman.svg" alt="Postman" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Deployment */}
                <CarouselItem>
                  <Card className="h-[60vh] flex flex-col p-10 shadow-2xl">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold text-center">Deployment</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center h-full">
                      <div className="grid grid-cols-3 justify-center gap-6 place-items-center">
                        {/* Docker */}
                        <TechLogo url="https://www.docker.com/" src="docker.svg" alt="Docker" />

                        {/* Kubernetes */}
                        <TechLogo url="https://kubernetes.io/" src="kubernetes.png" alt="Kubernetes" />

                        {/* VMWare Tanzu */}
                        <TechLogo url="https://tanzu.vmware.com/" src="tanzu.png" alt="VMWare Tanzu" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Extras */}
                <CarouselItem>
                  <Card className="h-[60vh] flex flex-col p-10 shadow-2xl">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold text-center">Extras</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center h-full">
                      <div className="grid grid-cols-3 justify-center gap-6 place-items-center">
                        {/* Git */}
                        <TechLogo url="https://git-scm.com/" src="git.svg" alt="Git" />

                        {/* Gitlab */}
                        <TechLogo url="https://about.gitlab.com/" src="gitlab.svg" alt="Gitlab" />

                        {/* ServiceNow */}
                        <TechLogo url="https://www.servicenow.com/" src="servicenow.png" alt="ServiceNow" />

                        {/* Jira */}
                        <TechLogo url="https://www.atlassian.com/software/jira" src="jira.png" alt="Jira" />

                        {/* Miro */}
                        <TechLogo url="https://miro.com/" src="miro.svg" alt="Miro" />

                        {/* Figma */}
                        <TechLogo url="https://www.figma.com/" src="figma.svg" alt="Figma" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>

              {/* Carousel Controls */}
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>
        </Vortex>
      </div>
    </section>
  );
}