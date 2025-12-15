import { projects } from "@/src/content/project/projects";

export function getProjectBySlug({ slug }: { slug: string }) {
  return projects.find((project) => project.slug === slug);
}
