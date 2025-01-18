'use client';

import { Magnetic } from "@/components/ui/magnetic";
import Image from "next/image"
import "../globals.css"
import { AnimatedGroup } from "@/components/ui/animated-group";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex justify-center font-body md:pb-[20vh]">
      <div className="md:mt-32 mt-8 md:max-w-[750px] max-w-[95vw] md:text-[18px] text-[16px]">
        <div className="flex items-end mb-4">
          <div className="font-display text-4xl font-bold text-accent mr-6">About <span className="font-body font-normal text-lg text-neutral-400 ml-4">{"whoami"}</span></div>
        </div>
        <p>Hey there! I&apos;m Sam Seeman, a student at the University of Alabama studying Computer Engineering. 
        I&apos;m originally from Ft. Lauderdale, Florida.</p> <br />
        <div className="flex md:flex-nowrap flex-wrap gap-6 md:items-center md:justify-between justify-center">
          <p className="">I started my online journey at the age of 14 when I launched
            <a href="https://savvytechsupport.com" target="_blank" className="text-accent hover:text-accent-hover duration-200"> SavvyTech Support</a>, a small tech support service. At the time, all I wanted was to have my own business with a fancy 
            new domain all to myself. Little did I know that this seemingly small task would launch me down the rabbit hole of Wordpress, HTML, self-hosting, and eventually into the world of computer science. From that one little idea grew a passion
            for so much more.</p>
          <Image draggable={false} src="/about/boat.jpg" width={200} height={0} alt="Me in a boat" className="block border-neutral-700 shadow-lg shadow-neutral-700 border-4 rounded-3xl hover:cursor-grab"/>
        </div>
        <br /><p>This first experience of many inspired me to love learning for its own sake–I discovered that I had interests 
          and passions I cared about, not just ones that were thrown at me in school. That introduction with programming got me hooked, and
          eventually ended up in my pursuit of a Computer Engineering degree.</p>
        <AnimatedGroup className="flex justify-center gap-2 md:gap-5 items-center my-4 group" preset="scale">
          <Magnetic>
            <Image draggable={false} src="/about/suit.jpg" width={180} height={0} alt="Me in a suit" className="group-hover:grayscale hover:!filter-none border-neutral-700 shadow-lg shadow-neutral-700 border-4 rounded-3xl hover:cursor-grab hover:-rotate-3 hover:-translate-x-4 duration-300"/>
          </Magnetic>
          <Magnetic>
            <Image draggable={false} src="/about/mc.jpg" width={180} height={0} alt="Me in a suit" className="group-hover:grayscale hover:!filter-none border-neutral-700 shadow-lg shadow-neutral-700 border-4 rounded-3xl hover:cursor-grab rotate-0 hover:-translate-y-7 duration-500"/>
          </Magnetic>
          <Magnetic>
            <Image draggable={false} src="/about/theater.jpg" width={160} height={0} alt="Me in a suit" className="group-hover:grayscale hover:!filter-none border-neutral-700 shadow-lg shadow-neutral-700 border-4 rounded-3xl hover:cursor-grab hover:rotate-3 hover:translate-x-4 duration-300"/>
          </Magnetic>
        </AnimatedGroup>
        <p>Outside of the classroom and coding, I follow a wide variety of activities such as theater, graphic design, 
          politics, paddleboarding, and photography. I think this range of interests reflects the fact that always I try to be a 
          well-rounded person, pursuing many different areas of interest at once.
        </p><br />
        <p>Thanks for stopping by! Make sure you stop by my <Link className="text-accent hover:text-accent-hover" href="/projects">Projects</Link> and <Link className="text-accent hover:text-accent-hover" href="/now">Now</Link> pages before you go. 
        If you have time, maybe check out my <a className="text-accent hover:text-accent-hover" target="_blank" href="https://photos.samseeman.com">Photography</a> page, or 
        even take a look at this site&apos;s <a className="text-accent hover:text-accent-hover" target="_blank" href="https://github.com/thesirsammy/samuelseeman-ultra">source code</a> on GitHub!</p>
      </div>
    </div>
  )
}