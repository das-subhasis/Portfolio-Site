import { useState } from 'react'
import './App.css'
import  Navbar  from './components/Navbar'
import Profile from './pages/Profile'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import About from './pages/About'
import Footer from './components/Footer'
import IntroAnimation from './components/IntroAnimation'

function App() {
  return (
    <>
      <div className='relative max-w-screen min-h-screen bg-black'>
        <IntroAnimation />
        <Navbar />
        <Profile />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
