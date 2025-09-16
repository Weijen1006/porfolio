import { Vortex } from "@/components/ui/vortex";
import { LinkPreview } from "@/components/ui/link-preview";
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
                        <LinkPreview key="html" url="https://html.spec.whatwg.org/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="html.png" alt="HTML" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* CSS */}
                        <LinkPreview key="css" url="https://www.w3.org/Style/CSS/Overview.en.html">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="css.svg" alt="CSS" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* JavaScript */}
                        <LinkPreview key="javascript" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="javascript.svg" alt="JavaScript" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* TypeScript */}
                        <LinkPreview key="typescript" url="https://www.typescriptlang.org/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="typescript.svg" alt="TypeScript" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* React */}
                        <LinkPreview key="react" url="https://react.dev/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="react.svg" alt="React" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Next.js */}
                        <LinkPreview key="nextjs" url="https://nextjs.org/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img className="bg-white p-3" src="nextjs.png" alt="Next.js" width={80} height={80} />
                          </div>
                        </LinkPreview>
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
                        <LinkPreview key="python" url="https://www.python.org/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="python.svg" alt="Python" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* FastAPI */}
                        <LinkPreview key="fastapi" url="https://fastapi.tiangolo.com/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="fastapi.png" alt="FastAPI" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Flask */}
                        <LinkPreview key="flask" url="https://flask.palletsprojects.com/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="flask.svg" alt="Flask" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Node.js */}
                        <LinkPreview key="nodejs" url="https://nodejs.org/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="nodejs.svg" alt="Node.js" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Nest.js */}
                        <LinkPreview key="nestjs" url="https://nestjs.com/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="nestjs.svg" alt="Nest.js" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Redis */}
                        <LinkPreview key="redis" url="https://redis.com/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="redis.svg" alt="Redis" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* SQL Database */}
                        <LinkPreview key="mysql" url="https://www.mysql.com/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="mysql.svg" alt="MySQL" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Bash */}
                        <LinkPreview key="bash" url="https://www.shellscript.sh/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="bash.png" alt="Bash" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* PowerShell */}
                        <LinkPreview key="powershell" url="https://learn.microsoft.com/en-us/powershell/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="powershell.png" alt="PowerShell" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        { /* Huggingface */}
                        <LinkPreview key="huggingface" url="https://huggingface.co/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="huggingface.svg" alt="Huggingface" width={80} height={80} />
                          </div>
                        </LinkPreview>
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
                        <LinkPreview key="jest" url="https://jestjs.io/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="jest.svg" alt="Jest" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Pytest */}
                        <LinkPreview key="pytest" url="https://docs.pytest.org/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="pytest.png" alt="Pytest" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Cypress */}
                        <LinkPreview key="cypress" url="https://www.cypress.io/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="cypress.svg" alt="Cypress" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Playwright */}
                        <LinkPreview key="playwright" url="https://playwright.dev/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="playwright.svg" alt="Playwright" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Postman */}
                        <LinkPreview key="postman" url="https://www.postman.com/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="postman.svg" alt="Postman" width={80} height={80} />
                          </div>
                        </LinkPreview>
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
                        <LinkPreview key="docker" url="https://www.docker.com/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="docker.svg" alt="Docker" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Kubernetes */}
                        <LinkPreview key="kubernetes" url="https://kubernetes.io/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="kubernetes.png" alt="Kubernetes" width={80} height={80} />
                          </div>
                        </LinkPreview>
                        {/* VMWare Tanzu */}
                        <LinkPreview key="tanzu" url="https://tanzu.vmware.com/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="tanzu.png" alt="VMWare Tanzu" width={80} height={80} />
                          </div>
                        </LinkPreview>
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
                        <LinkPreview key="git" url="https://git-scm.com/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="git.svg" alt="Git" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Gitlab */}
                        <LinkPreview key="gitlab" url="https://about.gitlab.com/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="gitlab.svg" alt="Gitlab" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* ServiceNow */}
                        <LinkPreview key="servicenow" url="https://www.servicenow.com/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="servicenow.png" alt="ServiceNow" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Jira */}
                        <LinkPreview key="jira" url="https://www.atlassian.com/software/jira">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="jira.png" alt="Jira" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Miro */}
                        <LinkPreview key="miro" url="https://miro.com/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="miro.svg" alt="Miro" width={80} height={80} />
                          </div>
                        </LinkPreview>

                        {/* Figma */}
                        <LinkPreview key="figma" url="https://www.figma.com/">
                          <div className="flex items-center justify-center rounded-full bg-white/5 w-24 h-24">
                            <img src="figma.svg" alt="Figma" width={80} height={80} />
                          </div>
                        </LinkPreview>
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