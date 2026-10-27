import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const submitHandler=(e)=>{
   e.preventDefault()
   console.log('Form Submitted')
  }
  return (
    <>
     <div className='h-screen lg:flex bg-black text-white '>
      
      <form onSubmit={(e)=>{
       submitHandler(e)
      }}
        className=' lg:w-1/2 flex flex-col gap-4 w-full p-10'>
          <h1 className='text-xl font-bold'>Add Notes</h1>
        <input 
        type="text"
        placeholder='Enter Notes Heading'
        className='bg-black border-white outline-none w-full font-medium rounded px-5 py-2 border-2'
        />
        <textarea  
        type="text"
        placeholder='Write Details'
        className='bg-black font-white outline-none font-medium w-full border-2 px-5 py-2 h-32 rounded flex-row'
        />
        <button className='bg-white px-5 py-2  w-full text-black outline-none font-medium rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10  '>
      <h1 className='text-xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap gap-5 overflow-auto mt-5 h-full'>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
         <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          
        </div>
      </div>
     </div>
    </>
  )
}

export default App
