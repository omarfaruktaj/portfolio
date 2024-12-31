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
      <h2 className="text-2xl font-bold mb-4 text-center text-orange-800">
        Skill Radar
      </h2>
      <div className="w-full h-[400px]">
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
        <ul className="list-disc list-inside columns-2 md:columns-3 lg:columns-4">
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
