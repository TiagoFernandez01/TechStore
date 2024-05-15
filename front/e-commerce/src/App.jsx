import { Routes, Route } from "react-router-dom";
import Home from "./components/view/Home"

function App() {
      
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>

    </>
  )
}

export default App
