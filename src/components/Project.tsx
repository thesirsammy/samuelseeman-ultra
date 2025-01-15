import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link";

export default function Project({ id, imageURL, imageAlt, isImageFirst, title, date, desc, skills, url}: {id: string, imageURL: string, imageAlt: string, isImageFirst: boolean, title: string, date: string, desc: string, skills: Array<string>, url: string}) {
  let skillsString = "";
  skills.forEach((skill) => (skillsString += skill + " • "));
  skillsString = skillsString.slice(0, -2);

  return (
    <div className={`flex lg:flex-row flex-col gap-8 ${isImageFirst ? "" : "lg:flex-row-reverse"}`}>
      <div className="w-full lg:w-1/2">
        <Image 
          draggable={false} 
          src={imageURL} 
          width={500}
          height={300}
          alt={imageAlt}
          className="rounded-lg object-cover w-full"
          priority={true}
        />
      </div>
      <div className="flex flex-col gap-3 justify-around w-full lg:w-1/2">
        <div className="flex flex-col gap-2">
          <div className="flex text-accent text-4xl font-display font-medium">{title}</div>
          <div className="font-display text-neutral-400 text-sm italic">{date}</div>
          <div>{desc}</div>
          <div className="flex gap-2 text-sm italic">{skillsString}</div>
        </div>
        <Link href={url} className="flex gap-1 items-center w-fit px-4 py-1 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-neutral-800 duration-300">{<ArrowUpRight size={16}/>} More Info</Link>
      </div>
    </div>
  )
}