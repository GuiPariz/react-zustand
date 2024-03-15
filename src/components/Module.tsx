import * as Collapsble from '@radix-ui/react-collapsible'
import { ChevronDown } from "lucide-react";
import Lesson from "./Lesson";

interface ModuleProps{
  title:string,
  amounthOfLessons:number,
  moduleIndex:number,
}

export default function Module(props:ModuleProps) {

  const {title, amounthOfLessons,moduleIndex} = props

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
        <Lesson title={"Desvendando o Redux"} duration={"09:13"}/>
        <Lesson title={"Desvendando denovo"} duration={"09:13"}/>
        <Lesson title={"Desvendando mais uma vez"} duration={"09:13"}/>

      </Collapsble.Content>
    </Collapsble.Root>
  )
}