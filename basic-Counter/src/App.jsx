import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  function inc(){
    return setCount(count+1)
  }
  function dec(){
    return setCount(count-1)
  }
  function jump(){
    return setCount(count+5)
  }
  return (
    <>
     <div>
      <h1>{count}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={jump}>Jump By 5</button>
     </div>
    </>
  )
}

export default App
