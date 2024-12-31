import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center  px-4 bg-background text-foreground"
    >
      <div className="max-w-4xl text-center">
        <Image
          src="/photo/omarfaruk.jpg"
          alt="Omar Faruk"
          height={200}
          width={200}
          className="mx-auto rounded-full border-4 border-primary shadow-lg mb-6"
          priority
        />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-primary leading-tight drop-shadow-sm">
          Hi, I&apos;m Omar Faruk
        </h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed mb-8">
          A Full-Stack Web Developer passionate about creating innovative,
          scalable, and user-focused solutions. I specialize in building
          seamless digital experiences that deliver results and make an impact.
        </p>
        <div className="flex justify-center gap-4">
          <Button>View My Work</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </div>
    </section>
  );
}
