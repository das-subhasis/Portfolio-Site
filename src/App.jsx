import { useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import About from './pages/About'
import Footer from './components/Footer'
import IntroAnimation from './components/IntroAnimation'

function App() {
  const aboutRef = useRef();
  const educationRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();
  const profileRef = useRef();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' ,  block: 'start', inline: 'nearest', offsetTop: 200});
  };
  
  return (
    <>
      <div className='relative max-w-screen min-h-screen bg-black'>
        {/* <IntroAnimation /> */}
        <Navbar
         scrollToAbout={() => scrollToSection(aboutRef)}
         scrollToEducation={() => scrollToSection(educationRef)}
         scrollToExperience={() => scrollToSection(experienceRef)}
         scrollToProjects={() => scrollToSection(projectsRef)}
         scrollToProfile={() => scrollToSection(profileRef)}
        />
        <Profile profileRef={profileRef}/>
        <About aboutRef={aboutRef} />
        <Education educationRef={educationRef}/>
        <Experience experienceRef={experienceRef}/>
        <Projects projectsRef={projectsRef}/>
        <Footer />
      </div>
    </>
  )
}

export default App
