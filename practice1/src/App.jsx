import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Películas de Christopher Nolan</h1>
        <h3>Con un imbd superior a 8 pts.</h3>
      </div>
    </>
  )
}
export default App
