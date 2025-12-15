import { GetProjectsResponse } from "@/app/projects/route";

interface FetchProjectsProps {
  category?: number | null;
  page: number;
  limit?: number;
}

export const fetchProjects = async ({
  category,
  page,
  limit,
}: FetchProjectsProps): Promise<GetProjectsResponse> => {
  const params = new URLSearchParams();
  if (category) {
    params.set("category", "" + category);
  }
  params.set("limit", "" + (limit || 5));
  params.set("page", "" + page);

  const projectsRes = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects?${params.toString()}`
    )
  ).json();

  return projectsRes as GetProjectsResponse;
};
