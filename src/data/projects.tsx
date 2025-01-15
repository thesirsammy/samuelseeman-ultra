import { ArrowUpRight } from 'lucide-react';
import React from 'react';

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  imageURL: string;
  imageAlt: string;
  skills: string[];
  content: React.ReactNode;
  mediaURLs: string[];
}

export const projects: Project[] = [
  {
    id: "arc-ambassador",  // This will be used in the URL
    title: "@arc.ual",
    date: "August 2024 - Present",
    description: "A social media strategy to introduce the University of Alabama to the Arc Browser",
    imageURL: "/projects/arc.jpeg",
    imageAlt: "A mockup portraying the Arc Student Ambassador account at the University of Alabama",
    skills: ["Social Media Management", "Advertising", "Graphic Design"],
    content: (
      <>
        <div>As one of <strong>50</strong> out of <strong>875</strong> college students chosen to represent the Arc Browser on campus, I was tasked with promoting its brand and message here at 
        the University of Alabama. This challenge involved filming, editing, and promoting engaging video adverts; managing the @arc.ual Instagram account;
        and collaborating with the other Arc Ambassadors to effectively reach other students.</div>
        <a href='https://www.instagram.com/arc.ual/' target='_blank' className="flex gap-1 items-center w-fit px-4 py-1 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-neutral-800 duration-300">Visit <ArrowUpRight /></a>
      </>
    ),
    mediaURLs: [],
  },
  {
    id: "culture-shaping-christian",  // This will be used in the URL
    title: "The Culture Shaping Christian",
    date: "Summer 2023",
    description: "An easily-distributed apologetics curriculum for churches to quickly implement into their own structure",
    imageURL: "/projects/culture-study/study-front.jpeg",
    imageAlt: "A mockup showing a render of the curriculum for the Culture Shaping Christian",
    skills: ["Graphic Design", "Writing", "Project Management"],
    content: (
      <>
        <div>I was assigned as <strong>one</strong> of <strong>eight</strong> students in a college-level program to complete a given assignment with a partner. 
        Over the summer, we created a curriculum from scratch designed to be deployable by any church in the state or nation for implementation into their own
        curriculum lineup, as <strong>quickly</strong> and as <strong>cost-effectively</strong> as possible.
        </div>
          <a href='https://read.cv/samuelseeman' target='_blank' className="flex gap-1 items-center w-fit px-4 py-1 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-neutral-800 duration-300">Visit <ArrowUpRight /></a>
      </>
    ),
    mediaURLs: ["/projects/culture-study/01.jpeg", "/projects/culture-study/02.jpeg", "/projects/culture-study/03.jpeg"],
  },
  // Add more projects here
];

export function getProject(id: string) {
  return projects.find(project => project.id === id);
} 