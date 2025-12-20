import React, {useState} from 'react'
import "./Style.css"
import { FaDownload } from "react-icons/fa"; 
import Resume from "../assets/MuthuRaman_Resume.pdf";

const Header = () => {

//use state hook for navlinks
const [navLeft, setNavLeft] = useState('-100%');
// on click to open navlinks
const openToggle = () => {
    setNavLeft('0%');
};
// on click to close navlinks
const closeToggle = () => {
    setNavLeft('-100%');
};

  return (
    <div className="head-container">
      {/* Logo div */}
      <div className="logo">
        <a href='/#'><h3>Muthu Raman.A</h3></a>
      </div>
      <button className="open-btn" onClick={openToggle}>&#9776;</button>
      <div className="navlinks" style={{ left: navLeft }}>
        <button className="close-btn" onClick={closeToggle}>X</button>
        <ul className='flex gap-[40px] '>
          <li><a href='#about'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className='resume-div'>
          <a href={Resume}
            download
            className=" btn-1"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
