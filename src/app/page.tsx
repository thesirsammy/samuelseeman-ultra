import Image from "next/image";
import { Newspaper, Linkedin, File, AtSign, CircleUserRound, Github } from 'lucide-react';
import { Link } from "next-view-transitions";
import { Magnetic } from "@/components/ui/magnetic";

export default function Home() {
  return (
    <div className="flex justify-center font-body">
      <div className="md:my-32 flex flex-col items-center justify-center max-w-[768px]">
        <div className="flex flex-wrap gap-6 md:justify-between justify-center items-center py-10 px-10 bg-neutral-800 rounded-lg w-full z-10 shadow-xl">
        
        {/* Optional Image, must comment out or delete video tag if you're using this */}
        {/* <InView 
          variants={{
            hidden: { opacity: 1, filter: 'blur(10px)' },
            visible: { opacity: 1, filter: 'blur(0px)' },
          }} 
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image 
            src="/profile.jpg"
            width={150}
            height={0}
            alt="A picture of me, wearing a very nice outfit if I do say so myself"
            className="rounded-full shadow-xl md:block hidden"
            draggable={false}
            priority={true}
          />
        </InView> */}

        <video width="150" height={150} autoPlay muted loop playsInline preload="" className="md:rounded-full rounded-lg shadow-xl block">
          <source src="/profile.mp4" type="video/mp4" />
          Your browser dows not support the video tag.
        </video>
        <div className="flex flex-col justify-between gap-4">
          <div>
            <div className="font-display text-accent text-4xl">Samuel Seeman</div>
            <div className="font-body text-lg">Programmer and Engineer @ The University of Alabama</div>
          </div>
          <div className="flex gap-4 font-display text-lg">
            <Magnetic>
              <a href="https://linkedin.com/in/samuelseeman" className="hover:text-accent hover:border-accent duration-300 flex gap-1 items-center border-2 px-4 py-1 rounded-lg">{<Linkedin size={16} />} Linkedin</a>
            </Magnetic>
            <Magnetic>
              <a href="/resume.pdf" target="_blank" className="flex gap-1 items-center px-4 py-1 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-neutral-800 duration-300">{<File size={16}/>} Resume</a>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="bg-accent text-neutral-800 w-[96%] pt-11 pb-6 font-display text-lg flex justify-center md:gap-6 sm:gap-2 -mt-6 hover:-mt-5 mb-8 hover:mb-7 duration-200 rounded-b-lg underline-offset-4">
        <Link href="/about" className="flex gap-1 items-center hover:underline duration-200">{<CircleUserRound size={16} className="opacity-0 md:opacity-100"/>} About</Link>
        <a href="https://read.cv/samuelseeman" target="_blank" className="flex gap-1 items-center hover:underline duration-200">{<Newspaper size={16} className="opacity-0 md:opacity-100"/>} Read.cv</a>
        <a href="https://github.com/thesirsammy" target="_blank" className="flex gap-1 items-center hover:underline duration-200">{<Github size={16} className="opacity-0 md:opacity-100"/>} Github</a>
        <a href="mailto:hi@samuelseeman.com" className="flex gap-1 items-center hover:underline duration-200">{<AtSign size={16} className="opacity-0 md:opacity-100"/>} Email</a>
      </div>

      <div className="font-body md:text-lg text-md mx-5">
        <p>Studying Computer Engineering, Mathematics, and Business at the University of Alabama.</p>
        <br />
        <p>Learning about circuts and electrical wizardry in class + coding, graphic design, and social media management on my own. 
          I&apos;m also into photography, frisbee, and theater.
        </p>
        <br />
        <p>Outside of academics, you can find me giving back to my community by joining (and leading) 
          different outreach programs, such as nursing home and youth ministries. Check out my <Link href="/about" className="text-accent hover:text-accent-hover">about</Link> page to learn more.
        </p>
        <div className="md:h-[200px]"></div>
      </div>
    </div>
  </div>
  )
}
