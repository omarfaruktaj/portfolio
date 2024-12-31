export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  githubUrl?: string;
  frontendGithubUrl?: string;
  backendGithubUrl?: string;
  imageUrl: string;
  isFullStack: boolean;
};

export type Skill = {
  _id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Soft Skills";
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
};
