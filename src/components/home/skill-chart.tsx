"use client";

import { Skill } from "@/types";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

interface SkillChartProps {
  skills: Skill[];
}

export default function SkillChart({ skills }: SkillChartProps) {
  const proficiencyToValue = (proficiency: Skill["proficiency"]) => {
    const values = {
      Beginner: 1,
      Intermediate: 2,
      Advanced: 3,
      Expert: 4,
    };
    return values[proficiency];
  };

  const chartData = skills.map((skill) => ({
    subject: skill.name,
    value: proficiencyToValue(skill.proficiency),
    fullMark: 4,
  }));

  return (
    <div className="">
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />

            <Radar
              name="Skills"
              dataKey="value"
              stroke="#f97316"
              fill="#f97316"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex justify-center">
        <ul className="list-inside list-disc columns-2 md:columns-3 lg:columns-4">
          {skills.map((skill) => (
            <li key={skill.name} className="text-sm">
              {skill.name}: {skill.proficiency}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
