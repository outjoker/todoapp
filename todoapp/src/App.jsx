import Inlinecomponent from "./components/Inlinecomponent"
import Outlinecomponent from "./components/Outlinecomponent"
import Todo from "./components/Todo"
import Header from "./components/Header"
import './App.css'

function App() {

  return (
   <div className="App">
    <Header/>
    <Todo/>

    {/* <Inlinecomponent/>
    <Outlinecomponent/> */}
   </div>
  )
}

export default App
