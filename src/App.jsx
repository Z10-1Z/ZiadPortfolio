import React from 'react'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
