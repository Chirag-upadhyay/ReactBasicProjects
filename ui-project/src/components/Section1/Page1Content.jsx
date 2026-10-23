import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-8 pt-3 px-10 flex justify-between items-center h-[90vh]'>
      <LeftContent/>
      <RightContent users={props.users}/>

    </div>
  )
}

export default Page1Content
