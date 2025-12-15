import { projects as rawProjects } from "@/src/content/project";
import { Project } from "@/src/modules/project";

export interface GetProjectsResponse {
  page: number;
  total: number;
  items: Project[];
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  const currentCategory = searchParams.get("category");

  const start = (page - 1) * limit;
  const end = start + limit;

  const projects =
    typeof currentCategory !== "string"
      ? rawProjects
      : rawProjects.filter((project) =>
          project.category.includes(+currentCategory)
        );

  const paginated = projects.slice(start, end);

  const response: GetProjectsResponse = {
    page,
    total: projects.length,
    items: paginated,
  };

  return Response.json(response);
}
