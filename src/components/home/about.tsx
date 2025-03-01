import { Code, Server, Zap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center bg-background px-4 py-16 text-foreground"
    >
      <div className=" text-center">
        <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
          About Me
        </h2>
        <p className="mb-8 text-justify text-lg font-medium leading-relaxed text-muted-foreground">
          I&apos;m Omar Faruk, a Full-Stack Web Developer focused on creating
          innovative, scalable, and user-centric solutions. With expertise in
          modern web technologies, I specialize in building seamless digital
          experiences, from efficient backends to engaging front-end designs.
          I’m committed to delivering high-quality results with precision and
          creativity.
        </p>
        <div className="mt-8 flex  justify-center gap-8">
          <div className="flex flex-col items-center">
            <div className=" rounded-full p-4 text-primary shadow-md">
              <Code className="size-8" />
            </div>
            <p className="mt-4 text-lg font-semibold">Frontend Development</p>
            <p className="max-w-xs text-center text-sm text-muted-foreground">
              Expertise in creating visually appealing and responsive interfaces
              using modern frameworks and libraries like React and Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className=" rounded-full p-4 text-primary shadow-md">
              <Server className="size-8" />
            </div>
            <p className="mt-4 text-lg font-semibold">Backend Development</p>
            <p className="max-w-xs text-center text-sm text-muted-foreground">
              Skilled in building robust and scalable backend systems with
              Node.js, Express, and databases like MongoDB and PostgreSQL.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className=" rounded-full p-4 text-primary shadow-md">
              <Zap className="size-8" />
            </div>
            <p className="mt-4 text-lg font-semibold">
              Performance Optimization
            </p>
            <p className="max-w-xs text-center text-sm text-muted-foreground">
              Dedicated to optimizing web applications for maximum speed,
              scalability, and efficiency using modern tools and practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
