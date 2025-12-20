import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Container = () => {
  return (
    <div className='main-container m-auto '>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
  </div>
  )
}

export default Container
