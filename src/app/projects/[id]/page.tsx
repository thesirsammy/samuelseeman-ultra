import { getProject, projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const project = getProject((await params).id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="flex lg:justify-center font-body pb-[20vh]">
      <div className="flex flex-col md:mt-32 mt-8 md:min-w-[1000px] mx-4 md:text-[18px] text-[16px]">
        <div className="flex flex-col gap-2">
          <Link href="/projects" className="flex w-fit gap-2 font-body items-center text-neutral-400 hover:text-neutral-300 text-sm"><ArrowLeftIcon size={12} className="inline" /> Back</Link>
          <h1 className="font-display text-4xl font-bold text-accent">{project.title}</h1>
          <div className="text-neutral-400">{project.date}</div>
        </div>
        <div className="flex gap-4 md:flex-row flex-col justify-between">
          <Image 
            src={project.imageURL} 
            alt={project.imageAlt}
            width={500}
            height={300}
            className="rounded-lg mt-4 object-cover"
            priority={true}
          />
          <div className="flex flex-col gap-4 prose prose-invert max-w-none">
            <div className="flex gap-2 flex-wrap">
              {project.skills.map((skill) => (
                <span key={skill} className="bg-neutral-800 px-3 py-1 rounded-full text-sm font-display">
                  {skill}
                </span>
              ))}
            </div>
            <div className='flex flex-col gap-4 max-w-[400px]'>
              {project.content}
            </div>
          </div>
        </div>
        {project.mediaURLs && project.mediaURLs.length > 0 && (
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {project.mediaURLs.map((url) => (
              <div key={url} className="aspect-video relative">
                <Image
                  src={url}
                  alt="Media showcasing this project"
                  fill
                  className="rounded-lg object-cover"
                  priority={true}
                  style={{ aspectRatio: '16/12' }}
                />
              </div>
            ))}
          </div>
        )}
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