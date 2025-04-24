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
] as const satisfies Project[];
