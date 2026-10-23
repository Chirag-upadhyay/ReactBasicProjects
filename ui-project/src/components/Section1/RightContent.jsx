import React from 'react'
import RightCard from './RightCard'
import 'remixicon/fonts/remixicon.css'

const RightContent = (props) => {
  return (
   <div id='right' className='h-full p-4 w-2/3  flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
  {props.users.map(function(elem,idx){
    return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
   })}
   </div>

  )
}

export default RightContent