'use client';

import { Camera, CircleUserRound, Hammer, House, MapPin } from "lucide-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function Dock() {
  const pathname = usePathname();

  return (
    <div className="lg:fixed block bottom-0 left-0 right-0 px-10 py-5 pointer-events-none"> {/*bg-opacity-50 bg-gradient-to-b from-[#00000000] to-black*/}
      <div className="flex justify-center">
        <div className="flex gap-4 py-2 px-4 group opacity-100 backdrop-blur-lg rounded-3xl pointer-events-auto">
          <Link href="/" className={`hover:rounded-lg duration-300 p-2 ${pathname === "/" ? "text-accent rounded-lg" : ""} group-hover:opacity-50 hover:!opacity-100 hover:scale-105 hover:-translate-y-2`}><House size={28} strokeWidth={1.5} /></Link>
          <Link href="/about" className={`hover:rounded-lg duration-300 p-2 ${pathname === "/about" ? "text-accent rounded-lg" : ""} group-hover:opacity-50 hover:!opacity-100 hover:scale-105 hover:-translate-y-2`}><CircleUserRound size={28} strokeWidth={1.5} /></Link>
          <Link href="/projects" className={` hover:rounded-lg duration-300 p-2 ${pathname.slice(0, 9) === "/projects" ? "text-accent rounded-lg" : ""} group-hover:opacity-50 hover:!opacity-100 hover:scale-105 hover:-translate-y-2`}><Hammer size={28} strokeWidth={1.5} /></Link>
          <Link href="/now" className={` hover:rounded-lg duration-300 p-2 ${pathname === "/now" ? "text-accent rounded-lg" : ""} group-hover:opacity-50 hover:!opacity-100 hover:scale-105 hover:-translate-y-2`}><MapPin size={28} strokeWidth={1.5} /></Link>
          <Link href="https://photos.samseeman.com" target="_blank" className=" hover:rounded-lg duration-300 p-2 group-hover:opacity-50 hover:!opacity-100 hover:scale-105 hover:-translate-y-2"><Camera size={28} strokeWidth={1.5} /></Link>
        </div>
      </div>
      {/* <div className="flex justify-center mt-4 text-neutral-500 font-display backdrop-blur-none">Samuel Seeman © {new Date().getFullYear()}</div> */}
    </div>
  )
}