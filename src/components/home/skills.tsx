import { Skill } from "@/types";
import { Badge } from "../ui/badge";

export default async function Skills() {
  const result = await fetch("http://localhost:5000/api/skills");
  const skills = await result.json();
  console.log(skills);

  return (
    <section id="skills" className="py-16 px-4 bg-background text-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
          Skills
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-1">
          {skills.map((skill: Skill, index: number) => (
            <div key={index} className="text-left">
              <Badge variant={"outline"}>{skill.name}</Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}