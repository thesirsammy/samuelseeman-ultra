import { projects } from "@/data/projects";
import Project from "@/components/Project";

export default function Page() {
  return (
    <div className="flex lg:justify-center font-body pb-[20vh]">
      <div className="flex flex-col md:mt-32 mt-8 md:max-w-[850px] mx-4 md:text-[18px] text-[16px] gap-8">
        <div className="font-display text-4xl font-bold text-accent mb-6">Projects</div>

        {projects.map((project, index) => (
          <Project 
            id={project.id}
            key={project.id}
            imageURL={project.imageURL}
            imageAlt={project.imageAlt}
            isImageFirst={index % 2 === 0}
            title={project.title}
            date={project.date}
            desc={project.description}
            skills={project.skills}
            url={`/projects/${project.id}`}
          />
        ))}
      </div>
    </div>
  )
}