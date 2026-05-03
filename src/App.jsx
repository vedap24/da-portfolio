import React from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css' // Ensure global styles are loaded

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="app-container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        <footer className="footer">
          <p>© {new Date().getFullYear()} Veda Praneeth. Built with React.</p>
        </footer>
      </div>
    </>
  )
}

export default App
