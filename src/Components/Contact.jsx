import React from 'react'
import "./Style.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div id="contact">
        <div className="contact-container">
            <div className="contact-head">
                <h1 className="contact-heading">
                    Contact <strong className="highlight">Me</strong>
                </h1>
            </div>
            <div className="contact-content">
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <textarea rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="send-btn">Send Message</button>
                </form>
            </div>
            <div className="media-links">
                <a href='https://www.linkedin.com/in/muthu-raman-58a150284' className='media-icon'><FaLinkedin /></a>
                <a href='https://github.com/Ronaldo-00' className='media-icon'><FaGithub /></a>
                <a href='https://www.figma.com/@ronaldo11' className='media-icon'><FaFigma /></a>
            </div>
        </div>
    </div>
  )
}

export default Contact
