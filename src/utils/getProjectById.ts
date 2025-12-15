import { projects } from "@/src/content/project/projects";

export function getProjectById({ id }: { id: number }) {
  return projects.find((project) => project.id === id);
}
