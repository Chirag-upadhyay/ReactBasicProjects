import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()
  return (
    <div className='py-2 px-5 bg-cyan-800'>
        <button onClick={()=>{
          navigate('/')
        }} 
        className='bg-emerald-800 rounded font-medium p-2 m-2'>Return to Home Page</button>
        <button onClick={()=>{
         navigate(-1)
        }} 
        className='bg-emerald-800 rounded font-medium p-2 m-2'>Back</button>
        <button onClick={()=>{
         navigate(+1)
        }} 
        className='bg-emerald-800 rounded font-medium p-2 m-2'>Next</button>
    </div>
  )
}

export default Navbar2