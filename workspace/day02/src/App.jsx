import { useState } from "react"
import Bulb from "./components/Bulb"
import Counter from "./components/Counter"
// import Register from "./components/Register"

function App() {
  // const state = useState(5);     // 컴포넌트 분리
    return (
    <>
        <Bulb/>     
      <Counter/>

    </>
  )
}

export default App
