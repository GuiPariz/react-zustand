import { Video } from "lucide-react";

interface LessonProps{
  title: string;
  duration: string;
}

export default function Lesson(props:LessonProps) {

  const {title,duration} = props

  return (
    <button className="flex items-center m-4 gap-3 text-sm text-zinc-400">
      <Video className="h-5 w-5" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  )
}