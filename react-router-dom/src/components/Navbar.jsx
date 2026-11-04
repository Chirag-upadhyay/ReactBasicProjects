import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Nav'>
        <h2>Chirag</h2>
       <div> 
      <Link to='/'> Home </Link>
      <Link to='/about'> About </Link>
      <Link to='/contact'> Contact Us </Link>
      </div>
    </div>
  )
}

export default Navbar