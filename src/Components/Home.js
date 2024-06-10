import React from 'react'
import './Home.css'

function Home() {
    const goToContact=()=>{
        window.scrollTo({
            top: 4* window.innerHeight, // Scroll to 100vh from the top
            behavior: 'smooth'
          })
    }


    return (
        <div className='home'>
            <div className='home-sec1'>
                <h1 className='sitename'>Hi! I'm Tushar</h1>
                <h3>Web developer</h3>
                <p className='slogan'>
                    "Crafting digital experiences, one line of code at a time.
                    Empowering your online presence with innovation and precision."</p>

                <div className='btns-area'>
                 
                    <button className='homepage-btns' onClick={goToContact} type='submit'>
                        Contact Me
                    </button>
                  
                </div>
                
            </div>
        </div>
    )
}

export default Home