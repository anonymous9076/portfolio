import React, { useEffect } from 'react'
import './App.css'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Project from './Components/Project.js'
import Skill from './Components/Skill.js'
import Experience from './Components/Exp.js'
import { BrowserRouter } from 'react-router-dom'
import Contact from './Components/Contact.js'
function App() {

  useEffect(()=>{
    window.scrollTo({
      top:0
    })
  },[])
  return (

    <>

     <div className='app'>
       <BrowserRouter>
       <Home></Home>
       <Project></Project>
       <Skill></Skill>
       <Experience></Experience>
       <Contact></Contact>
       <About></About>
       </BrowserRouter>
     </div>

     </>
  )
}

export default App