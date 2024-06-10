import React from 'react'
import './Project.css'
import MuiCard from './MuiCard'

function Project() {
   const tech1=['HTML','CSS','JAVASCRIPT','BOOTSTRAP','MUI','API:FORMSUBMIT']
   const tech2=['REACT JS','CSS','JAVASCRIPT','BOOTSTRAP','MUI','API:FORMSUBMIT']
   const tech3=['REACT JS','CSS','JAVASCRIPT','FIREBASE','BOOTSTRAP','MUI','API:FORMSUBMIT']
   const tech4=['REACT JS','CSS','JAVASCRIPT','NODE JS','EXPRESS JS','MONGO DB','BOOTSTRAP','MUI','API:FORMSUBMIT']

  return (
    <div className='proj-area'>
      <div className='projects'>
       <h1 className='proj-head'>My Projects !</h1>
        <div className='proj-cards'>
         <MuiCard 
         img='../Images/dg.png'
         cat="notes-sharing"
         name='Diginotes'
         tech={tech4}
         ></MuiCard>
           <MuiCard 
         img='../Images/gsons.png'
         cat="Portfolio"
         name='Gsons India'
         tech={tech2}

         ></MuiCard>
         <MuiCard 
         img='../Images/ice.png'
         cat="ice-cream seller"
         name='B.C.A'
         tech={tech3}

         ></MuiCard>
          <MuiCard 
         img='../Images/69.png'
         cat="travel agency"
         name='69-Airline'
         tech={tech1}

         ></MuiCard>
        

        </div>
      </div>
    </div>
  )
}

export default Project