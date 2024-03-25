import * as Collapsble from '@radix-ui/react-collapsible'
import { ChevronDown } from "lucide-react";
import Lesson from "./Lesson";
import { useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { play } from '../store/slices/player';

interface ModuleProps {
  title: string,
  amounthOfLessons: number,
  moduleIndex: number,
}

export default function Module(props: ModuleProps) {

  const { title, amounthOfLessons, moduleIndex } = props

  const dispach = useDispatch()

  const lessons = useAppSelector(state => state.player.course.modules[moduleIndex].lessons)

  return (
    <Collapsble.Root className='group' >
      <Collapsble.Trigger className=" flex w-full items-center border-b border-solid border-zinc-900 gap-3 bg-zinc-800 p-4">
        <div className="flex w-10 h-10 rounded-full bg-zinc-950 items-center justify-center text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amounthOfLessons} aulas</span>
        </div>
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transform duration-200" />
      </Collapsble.Trigger>

      <Collapsble.Content className="relative flex flex-col">

        {lessons.map((lesson, lessonIndex) => {
          return (
            <Lesson
              onPlay={()=>dispach(play([moduleIndex, lessonIndex]))}
              key={lesson.id}
              title={lesson.title}
              duration={lesson.duration}
            />
          )
        })}

      </Collapsble.Content>
    </Collapsble.Root>
  )
}