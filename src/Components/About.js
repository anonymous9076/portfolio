import React from 'react'
import './About.css'
import { FaInstagram,FaGithub,FaLinkedin,FaGlobeAmericas } from "react-icons/fa";
import {Link } from 'react-router-dom' 

function About() {
  return (
    <div className='about'>
        <div className='about-sec1'>
           <video  loop muted autoPlay='autoplay'>
            <source src='./Images/Designer building website.mp4'></source>
           </video>
        </div>
        <div className='about-sec2'>
            <h1>About Me</h1>
            <p>Myself Tushar kumar, I'm 22years old and I'm B.C.A graduate from GNDU university 
                Affilated college ,SL bawa dav college, Batala. I am skilled web developer and a freelancer 
                I build many project by my own to develop my skills and experience. <br></br> <br></br> 
                Outcome-focused web developer with good experience seeking a challenging position
                to leverage my expertise in front-end and back-end development. Committed to
                staying up-to-date with emerging web technologies and dedicated to delivering high-
                quality, responsive, and scalable web solutions that meet client needs</p>
            <span>
            <Link className='link icon'>
            <FaInstagram id='about-ai'></FaInstagram>
          </Link >
          <Link className='link icon'>
            <FaGithub id='about-ai'></FaGithub>
          </Link>
          <Link className='link icon'>
            <FaLinkedin id='about-ai'></FaLinkedin>
          </Link>
          <Link className='link icon'>
            <FaGlobeAmericas id='about-ai'></FaGlobeAmericas>
          </Link>
            </span>
        </div>
    </div>
  )
}

export default About