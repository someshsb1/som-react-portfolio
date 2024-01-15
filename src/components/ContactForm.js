import "./ContactForm.css"

import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact-form">
        <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Your Message</label>
            <textarea rows="6" placeholder="Type here" />
            <button className="btn">Send</button>
        </form>
    </div>
  )
}

export default ContactForm