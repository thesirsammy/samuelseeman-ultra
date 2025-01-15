import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col gap-4 w-screen h-screen justify-center items-center overflow-y-none">
      <div className="font-display text-accent font-bold text-6xl">Whoops!</div>
      <p>Looks like you broke something. The page you&apos;re looking for is not available</p>
      <Link href="/projects" className="flex gap-1 items-center px-4 py-2 mt-4 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:text-neutral-800 duration-300">{<ArrowLeftIcon size={16} className="opacity-0 md:opacity-100"/>} Go Back</Link>
    </div>
  )
}