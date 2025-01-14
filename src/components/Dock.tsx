'use client';

import { Camera, CircleUserRound, Hammer, House, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Dock() {
  const pathname = usePathname();

  return (
    <div className="lg:fixed block bottom-0 left-0 right-0 px-10 py-5 bg-neutral-900 bg-opacity-30 backdrop-blur-sm bg-gradient-to-b from-[#00000000] to-black">
      <div className="flex justify-center">
          <div className="flex gap-4 w-fit group">
            <Link href="/" className={`hover:bg-neutral-700 hover:rounded-lg duration-300 p-2 ${pathname === "/" ? "text-accent rounded-lg" : ""} group-hover:opacity-50 hover:!opacity-100 hover:scale-105`}><House size={28} strokeWidth={1.5} /></Link>
            <Link href="/about" className={`hover:bg-neutral-700 hover:rounded-lg duration-300 p-2 ${pathname === "/about" ? "text-accent rounded-lg" : ""} group-hover:opacity-50 hover:!opacity-100 hover:scale-105`}><CircleUserRound size={28} strokeWidth={1.5} /></Link>
            <Link href="/projects" className={`hover:bg-neutral-700 hover:rounded-lg duration-300 p-2 ${pathname.slice(0, 9) === "/projects" ? "text-accent rounded-lg" : ""} group-hover:opacity-50 hover:!opacity-100 hover:scale-105`}><Hammer size={28} strokeWidth={1.5} /></Link>
            <Link href="/now" className={`hover:bg-neutral-700 hover:rounded-lg duration-300 p-2 ${pathname === "/now" ? "text-accent rounded-lg" : ""} group-hover:opacity-50 hover:!opacity-100 hover:scale-105`}><MapPin size={28} strokeWidth={1.5} /></Link>
            <Link href="https://photos.samseeman.com" target="_blank" className="hover:bg-neutral-700 hover:rounded-lg duration-300 p-2 group-hover:opacity-50 hover:!opacity-100 hover:scale-105"><Camera size={28} strokeWidth={1.5} /></Link>
          </div>
      </div>
      <div className="flex justify-center mt-4 text-neutral-500 font-display backdrop-blur-none">Samuel Seeman © {new Date().getFullYear()}</div>
    </div>
  )
}