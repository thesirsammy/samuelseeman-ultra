import { Newspaper, Linkedin, File, AtSign, CircleUserRound, Github, HammerIcon } from 'lucide-react';
import Link from 'next/link';
import { Magnetic } from "@/components/ui/magnetic";

// Uncomment line below if using Image instead of video
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center font-body md:h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap gap-6 md:justify-between justify-center items-center py-10 px-10 bg-neutral-800 rounded-lg w-full z-10 shadow-xl">

        <video poster="/placeholder.jpeg" width="150" height={150} autoPlay muted loop playsInline preload="" className="md:rounded-full rounded-lg shadow-xl block">
          <source src="/profile.mp4" type="video/mp4" />
          Your browser dows not support the video tag.
        </video>
        <div className="flex flex-col justify-between gap-4">
          <div>
            <div className="font-display text-accent text-4xl">Samuel Seeman</div>
            <div className="font-body text-lg">Programmer and Engineer @ The University of Alabama</div>
          </div>
          <div className="flex gap-4 font-display text-lg">
            <a href="https://linkedin.com/in/samuelseeman" className="hover:text-neutral-800 hover:bg-gray-200 duration-300 flex gap-1 items-center border-2 px-4 py-1 rounded-lg">{<Linkedin size={16} />} Linkedin</a>
            <a href="https://docs.google.com/document/d/1Byuq7fLKB33b0fyHn_R8SqtbUxxIWcBI_zaBrr1enMY/edit?usp=sharing" target="_blank" className="flex gap-1 items-center px-4 py-1 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-neutral-800 duration-300">{<File size={16}/>} Resume</a>
          </div>
        </div>
      </div>

      <div className="bg-accent text-neutral-800 w-[96%] pt-11 pb-6 font-display text-lg flex justify-center md:gap-6 gap-4 -mt-6 hover:-mt-5 mb-8 hover:mb-7 duration-200 rounded-b-lg underline-offset-4">
        <Link href="/about" className="md:flex hidden gap-1 items-center hover:underline duration-200">{<CircleUserRound size={16}/>} About</Link>
        <Link href="/projects" className="md:flex hidden gap-1 items-center hover:underline duration-200">{<HammerIcon size={16}/>} Projects</Link>
        <a href="https://read.cv/samuelseeman" target="_blank" className="flex gap-1 items-center hover:underline duration-200">{<Newspaper size={16}/>} Read.cv</a>
        <a href="https://github.com/thesirsammy" target="_blank" className="flex gap-1 items-center hover:underline duration-200">{<Github size={16}/>} Github</a>
        <a href="mailto:hi@samuelseeman.com" className="flex gap-1 items-center hover:underline duration-200">{<AtSign size={16}/>} Email</a>
      </div>
    </div>
  </div>
  )
}
