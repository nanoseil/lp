export type Project = {
  title: string;
  description: string;
  url?: string;
  tags?: string[];
  image?: string;
};

export const projects = [
  {
    title: "Hikari",
    description: "Competitive Puzzle Game Bot",
  },
  {
    title: "Nanostudio",
    description: "A self-contained AI development environment.",
    tags: ["AI", "Platform", "Deployment"],
  },
] as const satisfies Project[];