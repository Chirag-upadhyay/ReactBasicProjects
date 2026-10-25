import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState({user:'Chirag',age:19})
   const [arr, setArr] = useState([10,20,30])
 
  const changeNum=()=>{
    setNum(prev=>({...prev,age:20}))
  }

  const changeArr=()=>{
    const newArr = [...arr]
    newArr.push(40)
    setArr(newArr)
  }

  return (
    <>
    <div className='parent'>
      <h1>{num.user},{num.age}</h1>
      <h1>{arr}</h1>
      </div>
      <div className='btn'>
      <button onClick={changeNum}>Click</button>
      <button onClick={changeArr}>Click</button>
      </div>
    </>
  )
}

export default App
