import { useState } from 'react'
import Section1  from './components/Section1/Section1.jsx'
import './App.css'
import Section2 from './components/Section2/Section2.jsx'
import Navbar from './components/Section1/Navbar.jsx'
import Page1Content from './components/Section1/Page1Content.jsx'


function App() {
const users=[
{
img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
intro:'',
tag:'Satisfied '
},
{
img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
intro:'',
tag:'Underserved'
},
{
img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
intro:'',
tag:'Underbanked'
},
{
img:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
intro:'',
tag:'Underwear'
}]

  return (
    <>
   
    <Section1 users={users}/>
    
     </>
    
  )
}

export default App
