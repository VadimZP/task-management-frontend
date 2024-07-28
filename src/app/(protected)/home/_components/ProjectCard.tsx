import Link from "next/link";
import { Project } from "./types";
import { Spacing } from "@/app/global-components/Input/Spacing";

type ProjectCardProps = Project;

export function ProjectCard({
  id,
  title,
  description,
  slug,
}: ProjectCardProps) {
  return (
    <div
      id={id.toString()}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow"
    >
      <h5 className="mb-2 text-xl font-bold tracking-tight text-primary">
        {title}
      </h5>
      {description && (
        <p className="mb-6 font-normal text-gray-700">{description}</p>
      )}
      <Link
        href={`/projects/${slug}`}
        className="text-md m-auto w-fit rounded-md border-2 border-solid border-blue-200 bg-blue-700 p-2 px-4 font-bold text-white shadow transition-all hover:bg-blue-800"
      >
        Open
      </Link>
    </div>
  );
}
