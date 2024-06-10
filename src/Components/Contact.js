import React from 'react'
import './Contact.css'
function Contact() {
  return (
<div className='contact'>

      <div className="cont-container">
        <h2>Contact Us</h2>
        <form id="contact-form" method="post" action="https://formsubmit.co/tushar32234@gmail.com">
          <div className="input-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-group">
            <label for="email">Your Email</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label for="message">Your Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="input-group">
            <button type="submit">Send Message</button>
          </div>
        </form>
        <div className="success-message" id="success-message" style={{display:'none'}} >Your message has been sent
        successfully!</div>
    </div>
</div>
 
  )
}

export default Contact