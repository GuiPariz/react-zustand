import { MessageCircle } from "lucide-react"
import Header from "../components/Header"
import Video from "../components/Video"
import Module from "../components/Module"


export default function Player() {
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

          <aside className="absolute top-0 bottom-0 right-0 w-80 border-l border-solid border-zinc-800 bg-zinc-900  overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">

            <Module title={"Fundamentos do Redux"} amounthOfLessons={3} moduleIndex={0} />
            <Module title={"Fundamentos do Redux"} amounthOfLessons={3} moduleIndex={1} />
            <Module title={"Fundamentos do Redux"} amounthOfLessons={3} moduleIndex={2} />

          </aside>

        </main>
      </div>
    </div>
  )
}