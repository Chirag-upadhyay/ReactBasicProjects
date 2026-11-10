import { useState } from 'react'
import './App.css'
import ThemeContext from './context/ThemeContext'
import Navbar from './components/Navbar'
import Button from './components/Button'

const App=()=> {
 
  return (
    <div>
      <Navbar />
      <Button/>
    </div>
  )
}

export default App
