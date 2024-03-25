import { Video } from "lucide-react";
import { useDispatch } from "react-redux";

interface LessonProps{
  title: string;
  duration: string;
  onPlay: () => void;
}

export default function Lesson(props:LessonProps) {
  const {title,duration, onPlay} = props

  return (
    <button onClick={onPlay} className="flex items-center m-4 gap-3 text-sm text-zinc-400">
      <Video className="h-5 w-5" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  )
}