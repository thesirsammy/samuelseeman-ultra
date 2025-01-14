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
        <p>Detailed description here...</p>
        {/* Add any JSX content you want */}
      </>
    ),
  },
  {
    id: "culture-shaping-christian",  // This will be used in the URL
    title: "The Culture Shaping Christian",
    date: "Summer 2023",
    description: "An easily-distributed apologetics curriculum for churches to rapidly implement into their educational programs",
    imageURL: "/projects/study-front.jpeg",
    imageAlt: "A mockup showing a render of the curriculum for the Culture Shaping Christian",
    skills: ["Graphic Design", "Writing", "Project Management"],
    content: (
      <>
        <p>Detailed description here...</p>
        {/* Add any JSX content you want */}
      </>
    ),
  },
  // Add more projects here
];

export function getProject(id: string) {
  return projects.find(project => project.id === id);
} 