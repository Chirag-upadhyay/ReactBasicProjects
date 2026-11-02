import { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
 
   const [userData,setUserData] = useState([]);

  const getData =async()=>{
    const response= await axios.get('https://picsum.photos/v2/list?page=2&limit=15')
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[])

  let printUserData = 'not data available'
 
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
       <a href={elem.url}>
         <div className='h-40 w-44 rounded-xl bg-white'>
           <img className='h-full object-cover' src={elem.download_url} alt="" />
        </div>
        <h2 className='font-bold text-lg'>{elem.author}</h2>
       </a>
      </div>
    })
  }

  return (
    <>
      <div className='bg-black overflow-auto p-4 h-screen text-white'>
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
      </div>
      
    </>
  )
}

export default App
