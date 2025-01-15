'use client';

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="lg:fixed block w-full z-50 bg-neutral-900 bg-opacity-0 backdrop-blur-sm bg-gradient-to-t from-[#00000000] to-black">
      <div className={`flex flex-col md:flex-row justify-between items-center ${(pathname.slice(0, 9) !== "/") ? "py-5 px-10" : " py-12 px-16"}`}>
        <Link href="/" className={`font-display text-3xl font-bold ${(pathname.slice(0, 9) !== "/") ? "text-xl" : "text-3xl"}`} style={{ viewTransitionName: 'nav-header'}}>samuelseeman</Link>
        <nav className="flex sm:justify-center space-x-4 group" style={{ viewTransitionName: 'nav'}}>
          {[
            ['Home', '/'],
            ['About', '/about'],
            ['Projects', '/projects'],
            ['Now', '/now'],
          ].map(([title, url]) => (
            <Link key={title} href={url} className={`font-body font-medium text-sm md:text-lg hover:scale-105 duration-300 group-hover:opacity-50 hover:!opacity-100 ${(pathname.slice(0, 9) === url) ? "text-accent" : ""}`}>{title}</Link>
          ))}
          <a href="https://photos.samseeman.com" target="_blank" className="font-body font-medium text-sm md:text-lg hover:scale-105 duration-300 group-hover:opacity-50 hover:!opacity-100">Photography</a>
        </nav>
      </div>
    </div>
  )
}