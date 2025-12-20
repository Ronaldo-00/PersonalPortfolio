import React from 'react'
import "./Style.css"
import aboutImg from "../assets/Images/about.png"
const About = () => {
  return (
    <div id="about" className='about-container'>
        <div className="about-col1 ">
            <img src={aboutImg} className='about-img'></img>
        </div>
        <div className="about-col2">
            <h1>About<span className="highlight"> Me</span></h1>
            <div className="about-content">
                <p className='t'>
                    I am <span className='highlight'>Muthu Raman</span><br></br>
                    Passionate Front-End Developer Ready to Transform Ideas into Engaging Experiences.
                    <br></br>
                    A budding front-end developer fueled
                    by creativity, curiosity, and a relentless drive to craft immersive web experiences.
                    With a solid foundation in HTML5, CSS3, and JavaScript,Node JS,Bootstrap and library like React
                    and design tool like Figma. I'm eager to dive headfirstinto the dynamic realm of web development.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
