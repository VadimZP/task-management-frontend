import { ProjectCard } from "./ProjectCard";
import { Project } from "./types";

interface ProjectsListProps {
  list: Project[];
}

export function ProjectsList({ list }: ProjectsListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((item) => {
        return (
          <ProjectCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item?.description}
            slug={item.slug}
          />
        );
      })}
    </div>
  );
}
