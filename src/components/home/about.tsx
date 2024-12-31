import { Code, Server, Zap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-background text-foreground flex flex-col items-center"
    >
      <div className="max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-justify text-muted-foreground font-medium mb-8">
          I&apos;m Omar Faruk, a Full-Stack Web Developer focused on creating
          innovative, scalable, and user-centric solutions. With expertise in
          modern web technologies, I specialize in building seamless digital
          experiences, from efficient backends to engaging front-end designs.
          I’m committed to delivering high-quality results with precision and
          creativity.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-primary-light text-primary rounded-full shadow-md">
              <Code className="w-8 h-8" />
            </div>
            <p className="text-lg font-semibold mt-4">Frontend Development</p>
            <p className="text-sm text-muted-foreground text-center max-w-xs">
              Expertise in creating visually appealing and responsive interfaces
              using modern frameworks and libraries like React and Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-4 bg-primary-light text-primary rounded-full shadow-md">
              <Server className="w-8 h-8" />
            </div>
            <p className="text-lg font-semibold mt-4">Backend Development</p>
            <p className="text-sm text-muted-foreground text-center max-w-xs">
              Skilled in building robust and scalable backend systems with
              Node.js, Express, and databases like MongoDB and PostgreSQL.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-4 bg-primary-light text-primary rounded-full shadow-md">
              <Zap className="w-8 h-8" />
            </div>
            <p className="text-lg font-semibold mt-4">
              Performance Optimization
            </p>
            <p className="text-sm text-muted-foreground text-center max-w-xs">
              Dedicated to optimizing web applications for maximum speed,
              scalability, and efficiency using modern tools and practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
