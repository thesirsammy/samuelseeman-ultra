import { Clock, MapPinned } from "lucide-react"
import { ReactNode } from "react"

export default function Now({ date, location, text}: {date: string, location: string, text: ReactNode}) {
  return(
    <div className="flex flex-col gap-1">
    <div className="flex gap-4">
      <div className="flex items-center gap-1 font-display text-neutral-400"><Clock size={14} className="inline" /> {date}</div>
      <div className="flex items-center gap-1 font-display text-neutral-400"><MapPinned size={14} className="inline" /> {location}</div>
    </div>
    <div>
      {text}
    </div>
  </div>
  )
}