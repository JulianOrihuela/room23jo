import { workers } from "../content/worker";

export function getAllWorkerSlugs() {
  return workers.map((project) => project.slug);
}

