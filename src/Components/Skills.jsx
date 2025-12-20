import React from 'react'
import "./Style.css"
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoBootstrap } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaFigma } from "react-icons/fa";

const Skills = () => {
  return (
    <div id='skills'>
      <div className="skill-container">
        <div className="skill-head">
            <h1 className="project-heading">
                Professional <strong className="highlight">Skills </strong>
            </h1>
        </div>
        <div className="skill-box">
            <div className="skill-row">
                <div className="tech-icons" ><FaHtml5/></div>
                <div className="tech-icons"><IoLogoCss3/></div>
                <div className="tech-icons"><IoLogoJavascript/></div>
                <div className="tech-icons"><FaReact/></div>
                <div className="tech-icons"><FaFigma/></div>
                <div className="tech-icons"><FaNodeJs/></div>
                <div className="tech-icons"><BiLogoBootstrap/></div>
                <div className="tech-icons"><RiTailwindCssFill/></div>
                <div className="tech-icons"><DiMongodb/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
