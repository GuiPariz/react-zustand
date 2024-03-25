import { MessageCircle } from "lucide-react"
import Header from "../components/Header"
import Video from "../components/Video"
import Module from "../components/Module"
import { useAppSelector } from "../store"


export default function Player() {

  const module = useAppSelector(state=> state.player.course.modules) // uma boa pratica é retornar apenas uma informação,
                                                                     // e o ideal é que seja a informação mais especifica possivel.

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex p-10 justify-center items-center ">

      <div className="w-[1100px] flex flex-col gap-6">

        <div className="flex items-center justify-between">

          <Header />

          <button className="flex items-start rounded gap-2 bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>

        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">

          <div className="flex-1">

            <Video />

          </div>

          <aside 
          className="absolute top-0 bottom-0 right-0 w-80 border-l border-solid border-zinc-800 bg-zinc-900  overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">

            {module.map((module, index)=>{
              return(
                <Module 
                key={module.id}
                title={module.title} 
                amounthOfLessons={module.lessons.length} 
                moduleIndex={index} />
              )
            })}

          </aside>

        </main>
      </div>
    </div>
  )
}