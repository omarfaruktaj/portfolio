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
