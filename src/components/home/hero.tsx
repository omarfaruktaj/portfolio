import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center  bg-background px-4 text-foreground"
    >
      <div className="text-center">
        <Image
          src="/photo/omarfaruk.jpg"
          alt="Omar Faruk"
          height={200}
          width={200}
          className="mx-auto mb-6 rounded-full border-4 border-primary shadow-lg"
          priority
        />
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-primary drop-shadow-sm md:text-6xl">
          Hi, I&apos;m Omar Faruk
        </h1>
        <p className="mb-8 text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
          A Full-Stack Web Developer passionate about creating innovative,
          scalable, and user-focused solutions. I specialize in building
          seamless digital experiences that deliver results and make an impact.
        </p>
        <div className="flex justify-center gap-4">
          <Button>
            <Link href={"#projects"}>View My Work</Link>
          </Button>
          <Button variant="outline">
            <Link href={"#contact"}>Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
