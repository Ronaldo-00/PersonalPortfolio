import React from 'react'
import "./Style.css"
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import project1 from "../assets/project-img/img1.jpg"
import project2 from "../assets/project-img/img8.png"
import project3 from "../assets/project-img/img2.jpg"
import project4 from "../assets/project-img/img4.jpg"
import project5 from "../assets/project-img/img5.png"
import project6 from "../assets/project-img/img7.png"
const Projects = () => {
  return (
    <div id='projects'>
        <div className="project-container">
            <div className="project-head">
                <h1 className="project-heading">
                    Latest <strong className="highlight">Projects </strong>
                </h1>
            </div>
            <div className="Project-box">
                <div className="project-row">
                    {/* Project 1 card start */}
                    <div className="project-card">
                        <div className="project-img">
                            <img src={project1}></img>
                        </div>
                        <div className="project-title">
                            <h3>Rise-Stox React-web</h3>
                        </div>
                        <div className="project-des">
                            <p>The Stock Market Website Template Project is designed to provide a framework
                               for creating a user-friendly and informative platform for tracking stock market trends,
                               analyzing stock performance.
                            </p>
                        </div>
                        <div className="project-links">
                            <a href='https://github.com/Ronaldo-00/Stox-React-Web' target='blank'
                                className='btn-1'>
                                <FaGithub/>
                                Git Hub
                            </a>
                            <a href=' https://ronaldo-00.github.io/Stox-React-Web/' target='blank'
                                className='btn-1'>
                                <FaRegPlayCircle/>
                                Demo
                            </a>
                        </div>
                    </div>
                    {/* Project 2 card start */}
                    <div className="project-card">
                        <div className="project-img">
                            <img src={project2}></img>
                        </div>
                        <div className="project-title">
                            <h3>Careers-web-page</h3>
                        </div>
                        <div className="project-des">
                            <p>A React-based application showcasing job listings with filterable
                               and expandable job details, including a responsive design and navigation.
                               This application is designed to provide an interactive and informative career section.
                            </p>
                        </div>
                        <div className="project-links">
                            <a href='https://github.com/Ronaldo-00/careers-page' target='blank'
                                className='btn-1'>
                                <FaGithub/>
                                Git Hub
                            </a>
                            <a href='https://ronaldo-00.github.io/careers-page/' target='blank'
                                className='btn-1'>
                                <FaRegPlayCircle/>
                                Demo
                            </a>
                        </div>
                        {/* Project 2 card div end */}
                    </div>
                    {/* Project 3 card div start */}
                    <div className="project-card">
                        <div className="project-img">
                            <img src={project3}></img>
                        </div>
                        <div className="project-title">
                            <h3>Dental care web</h3>
                        </div>
                        <div className="project-des">
                            <p>The Dental Care Website Template Project provides a versatile and user-friendly platform
                               for dental clinics and practitioners to showcase their services and connect with patients.
                            </p>
                        </div>
                        <div className="project-links">
                            <a href='https://github.com/Ronaldo-00/Dental-web' target='blank'
                                className='btn-1'>
                                <FaGithub/>
                                Git Hub
                            </a>
                            <a href='https://ronaldo-00.github.io/Dental-web/' target='blank'
                                className='btn-1'>
                                <FaRegPlayCircle/>
                                Demo
                            </a>
                        </div>
                    </div>
                    {/* Project4 card start */}
                    <div className="project-card">
                        <div className="project-img">
                            <img src={project4}></img>
                        </div>
                        <div className="project-title">
                            <h3>Register/ login page</h3>
                        </div>
                        <div className="project-des">
                            <p>The Register and Login Web Page provides users with a convenient and secure
                               platform for creating new accounts and accessing existing ones. With its user-friendly interface,
                               toggle button functionality, and emphasis on user experience.
                            </p>
                        </div>
                        <div className="project-links">
                            <a href='https://github.com/Ronaldo-00/Register-login-page' target='blank'
                             className='btn-1'>
                                <FaGithub/>
                                Git Hub
                                </a>
                            <a href='https://ronaldo-00.github.io/Register-login-page/' target='blank'
                             className='btn-1'><FaRegPlayCircle/>Demo</a>
                        </div>
                    </div>
                    {/* Project5 card start */}
                    <div className="project-card">
                        <div className="project-img">
                            <img src={project5}></img>
                        </div>
                        <div className="project-title">
                            <h3>Portfolio Design</h3>
                        </div>
                        <div className="project-des">
                            <p>In this portfolio design in Figma involves crafting a visually appealing
                                layout to showcase your work, skills, and accomplishments.Key elements of this portfolio design
                                includes the sticky header, fixed aside profiles, light mode and dark mode.
                            </p>
                        </div>
                        <div className="project-links">
                            <a href='https://www.figma.com/community/file/1362028710620256551/dark-portfolio' target='blank'
                             className='btn-1'>
                                <FaFigma/>
                                Figma link
                            </a>
                            {/* <a href=' https://ronaldo-00.github.io/Stox-React-Web/' target='blank' className='btn-1'><FaGithub/>Demo</a> */}
                        </div>
                    </div>
                    {/* Project6 card start */}
                    <div className="project-card">
                        <div className="project-img">
                            <img src={project6}></img>
                        </div>
                        <div className="project-title">
                            <h3>Tailoring-web Design</h3>
                        </div>
                        <div className="project-des">
                            <p>This is a Tailoring website UI designed in FIGMA.
                                And this design it involves the meticulous crafting of a user interface
                                to meet the unique needs, preferences, and goals of a client and target audience.
                                It's a process that goes beyond generic templates
                            </p>
                        </div>
                        <div className="project-links">
                            <a href='https://www.figma.com/community/file/1364915619703305860/tailors-webpage'
                             target='blank'
                              className='btn-1'>
                                <FaGithub/>Figma</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
