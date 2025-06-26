import ProjectCard from "@/components/ProjectCard";
import SectionLayout from "@/components/SectionLayout";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
      <SectionLayout
        title="Mis Proyectos"
        subtitle="Una colección de trabajos que combinan código, diseño y creatividad."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
      </SectionLayout>
    );
  }
  