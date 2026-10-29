import { useState } from 'react'
import {Trash} from 'lucide-react'
import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task,setTask] = useState([])

  const submitHandler=(e)=>{
   e.preventDefault()
  const copyTask = [...task]
  copyTask.push({title,details})
  setTask(copyTask)
   setTitle('')
   setDetails('')
  }

  const deleteNote= (idx)=>{
   const copyTask=[...task];
   copyTask.splice(idx,1)
   setTask(copyTask)
  }
  return (
    <>
     <div className='h-screen lg:flex bg-black text-white '>
      
      <form onSubmit={(e)=>{
       submitHandler(e)
      }}
        className=' lg:w-1/2 flex flex-col gap-4 w-full p-10'>
          <h1 className='text-xl font-bold'>Add Notes</h1>
          {/*PEHLA INPUT FOR HEADING*/ }
        <input 
        type="text"
        placeholder='Enter Notes Heading'
        className='bg-black border-white outline-none w-full font-medium rounded px-5 py-2 border-2'
        value={title}
        onChange={(e)=>{
        setTitle(e.target.value)
        }}

        />
        {/*DETAILED WALA INPUT */}
        <textarea  
        type="text"
        placeholder='Write Details'
        className='bg-black font-white outline-none font-medium w-full border-2 px-5 py-2 h-32 rounded flex-row'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />
        <button className='bg-white active:scale-95 px-5 py-2  w-full text-black outline-none font-medium rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10  '>
      <h1 className='text-xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 overflow-auto mt-5 h-[90%] '>
       {task.map(function(elem,idx){
       return <div key={idx} className=" flex justify-between flex-col relative h-52 bg-cover w-40 rounded-2xl text-black py-8 px-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLF739z4xHNsg_KRIlzZlY01DaomN8-XxIb2_A8251lg&s=10')]">
        <div>
        <h3 className='leading-tight text-xl font-bold  '>{elem.title}</h3>
        <p className='mt-4 leading-tight font-medium text-gray-500 px-3'>{elem.details}</p>
        </div>
        <button onClick={()=>{deleteNote(idx)}} className='w-full bg-red-500 p-1 rounded text-xs text-white font-bold cursor-pointer active:scale-95'>Delete </button>
       </div>
       })}
          
        </div>
      </div>
     </div>
    </>
  )
}

export default App
