import { cookies } from "next/headers";
import { ProjectsList } from "./_components/ProjectsList/ProjectsList";
import { Project } from "./_components/types";

async function getOwnProjects() {
  const sessionId = cookies().get("connect.sid");

  const res = await fetch("http://localhost:8000/projects", {
    headers: {
      Cookie: `${sessionId?.name}=${sessionId?.value};`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch own projects");
  }

  return res.json() as Promise<{ data: Project[] }>;
}

export default async function HomePage() {
  const ownProjects = await getOwnProjects();

  return (
    <div className="p-8">
      {!!ownProjects.data.length ? (
        <ProjectsList list={ownProjects.data} />
      ) : (
        <p>You have no projects</p>
      )}
    </div>
  );
}
