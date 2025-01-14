import { getProject, projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const project = getProject((await params).id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="flex lg:justify-center font-body pb-[20vh]">
      <div className="flex md:flex-row flex-col items-center justify-between md:mt-32 mt-8 md:min-w-[750px] mx-4 md:text-[18px] text-[16px]">
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-4xl font-bold text-accent">{project.title}</h1>
          <div className="text-neutral-400">{project.date}</div>
          <div className="flex gap-2 flex-wrap">
            {project.skills.map((skill) => (
              <span key={skill} className="bg-neutral-800 px-3 py-1 rounded-full text-sm font-display">
                {skill}
              </span>
            ))}
          </div>
          <Image 
            src={project.imageURL} 
            alt={project.imageAlt}
            width={500}
            height={0}
            className="rounded-lg w-full mt-4"
          />
        </div>
        <div className="prose prose-invert max-w-none">
          {project.content}
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
} 