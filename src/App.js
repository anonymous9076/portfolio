import React from 'react'
import './App.css'
import Sec1 from './components/Sec1'
import Sec2 from './components/Sec2'
import Sec3 from './components/Sec3'
import Sec4 from './components/Sec4'
import Sec5 from './components/Sec5'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      
      <Sec1></Sec1>
      <Sec2></Sec2>
      <Sec3></Sec3>
      <Sec4></Sec4>
      <Sec5></Sec5>

      </BrowserRouter>
    </div>
  )
}

export default App