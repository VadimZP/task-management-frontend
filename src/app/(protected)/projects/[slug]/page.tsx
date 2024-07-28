import { Project } from "@/app/(protected)/home/_components/types";
import { cookies } from "next/headers";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

async function getProjectBySlug(slug: string) {
  const sessionId = cookies().get("connect.sid");

  const res = await fetch(`http://localhost:8000/projects/${slug}`, {
    headers: {
      Cookie: `${sessionId?.name}=${sessionId?.value};`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch project by slug");
  }

  return res.json() as Promise<{ data: Project }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  return <div>Project: {JSON.stringify(project)}</div>;
}
