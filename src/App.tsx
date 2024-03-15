import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store"
import './global.css'
import Player from "./pages/player"

function App() {
  return (
    <ReduxProvider store={store}>
      <Player/>
    </ReduxProvider>
  )
}

export default App
