import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='text-2xl font-semibold bg-white rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <div>
          <p className='text-lg leading-relaxed text-white mb-14'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, assumenda sapiente laboriosam ex laudantium placeat.</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i> </button>
          </div>
        </div>
        </div>
  )
}

export default RightCardContent