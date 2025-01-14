'use client';

import { Magnetic } from "@/components/ui/magnetic";
import { TextLoop } from "@/components/ui/text-loop"
import Image from "next/image"
import "../globals.css"

export default function Page() {
  return (
    <div className="flex justify-center font-body pb-[20vh]">
      <div className="md:mt-32 mt-8 md:max-w-[650px] max-w-[95vw] md:text-[18px] text-[16px]">
        <div className="flex items-end mb-4">
          <div className="font-display text-4xl font-bold text-accent mr-6">About</div>
          <TextLoop className='text-neutral-400' transition={{
            type: 'spring',
            stiffness: 900,
            damping: 80,
            mass: 10,
          }}>
            <span>programmer</span>
            <span>designer</span>
            <span>writer</span>
            <span>photographer</span>
          </TextLoop>
        </div>
        <p>I'm Samuel Seeman, a student at the University of Alabama studying Computer Engineering. 
        I'm originally from Ft. Lauderdale, Florida.</p> <br />
        <div className="flex gap-10">
          <p>I started my online journey at the age of 14 when I figured out how to set up my own business after I launched
            <a href="https://savvytechsupport.com" target="_blank" className="text-accent hover:text-accent-hover duration-200"> SavvyTech Support</a>, a small tech support service. This seemingly small task propelled me into the 
            world of Wordpress, which led me to self-hosting, which in turn dropped me into the grand and 
            glorious world of zeros and ones.</p>
          <Magnetic>
            <Image draggable={false} src="/about/boat.jpg" width={1000} height={0} alt="Me in a boat" className="md:block hidden border-accent shadow-lg shadow-neutral-700 border-4 rounded-xl float-right hover:cursor-grab"/>
          </Magnetic>
        </div>
        <br /><p>That experience inspired me to love learning for its own sake–I discovered that I had interests 
          and passions I cared about, not just ones that were thrown at me in school. That introduction with programming got he hooked, and
          led me to pursue a degree in Computer Engineering.</p>
        <div className="flex justify-center gap-5 items-center my-4 group">
          <Magnetic>
            <Image draggable={false} src="/about/suit.jpg" width={180} height={0} alt="Me in a suit" className="md:block hidden group-hover:grayscale hover:!filter-none border-accent shadow-lg shadow-neutral-700 border-4 rounded-xl hover:cursor-grab hover:-rotate-3 hover:-translate-x-4 duration-300"/>
          </Magnetic>
          <Magnetic>
            <Image draggable={false} src="/about/mc.jpg" width={180} height={0} alt="Me in a suit" className="md:block hidden group-hover:grayscale hover:!filter-none border-accent shadow-lg shadow-neutral-700 border-4 rounded-xl hover:cursor-grab rotate-0 hover:-translate-y-7 duration-500"/>
          </Magnetic>
          <Magnetic>
            <Image draggable={false} src="/about/theater.jpg" width={160} height={0} alt="Me in a suit" className="md:block hidden group-hover:grayscale hover:!filter-none border-accent shadow-lg shadow-neutral-700 border-4 rounded-xl hover:cursor-grab hover:rotate-3 hover:translate-x-4 duration-300"/>
          </Magnetic>
        </div>
        <p>Outside of the classroom and coding, I follow a wide variety of activities such as theater, graphic design, 
          politics, paddleboarding, and photography. I think this range of interests reflects the fact that always I try to be a 
          well-rounded person, pursuing many different areas of interest at once.</p><br />
        <p>I guess I could be classified as an amature photographer, too. I've been slowly getting deeper into 
          photography–take a look at my photos at my photography website!</p>
      </div>
    </div>
  )
}