import { projects } from "@/src/content/project/projects";

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}
