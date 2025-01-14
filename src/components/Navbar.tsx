'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="lg:fixed block w-full z-50 bg-neutral-900 bg-opacity-30 backdrop-blur-sm bg-gradient-to-t from-[#00000000] to-black">
      <div className="flex flex-col md:flex-row justify-between px-10 py-5">
        <div className='font-display text-3xl font-bold'>samuelseeman</div>
        <nav className="flex sm:justify-center space-x-4 group">
          {[
            ['Home', '/'],
            ['About', '/about'],
            ['Projects', '/projects'],
            ['Now', '/now'],
          ].map(([title, url]) => (
            <Link key={title} href={url} className={`font-body font-medium text-sm md:text-lg hover:scale-105 duration-300 group-hover:opacity-50 hover:!opacity-100 ${pathname === url ? "text-accent" : ""}`}>{title}</Link>
          ))}
          <a href="https://photos.samseeman.com" target="_blank" className="font-body font-medium text-sm md:text-lg hover:scale-105 duration-300 group-hover:opacity-50 hover:!opacity-100">Photography</a>
        </nav>
      </div>
    </div>
  )
}