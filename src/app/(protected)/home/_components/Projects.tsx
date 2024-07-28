import { cookies } from "next/headers";
import { ProjectsList } from "./ProjectsList";
import { Project } from "./types";

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

export async function Projects() {
  const ownProjects = await getOwnProjects();

  return (
    <>
      {!!ownProjects.data.length ? (
        <ProjectsList list={ownProjects.data} />
      ) : (
        <p>You have no projects</p>
      )}
    </>
  );
}
