// import { Skill } from "@/types";
// import { Badge } from "../ui/badge";
import SkillChart from "./skill-chart";

export default async function Skills() {
  const result = await fetch(`${process.env.API_URL}/skills`, {
    cache: "no-store",
  });
  console.log(`${process.env.API_URL}/skills`);

  if (!result.ok) {
    throw new Error("Failed to fetch skills");
  }
  const skills = await result.json();

  return (
    <section id="skills" className="bg-background px-4 py-16 text-foreground">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-8 text-3xl font-bold text-primary md:text-4xl">
          Skills
        </h2>
        {/* <div className="flex flex-wrap items-center justify-center gap-1">
          {skills.map((skill: Skill, index: number) => (
            <div key={index} className="text-left">
              <Badge variant={"outline"}>{skill.name}</Badge>
            </div>
          ))}
        </div> */}
        <SkillChart skills={skills}/>
      </div>
    </section>
  );
}
