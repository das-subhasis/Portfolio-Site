import React, { useRef, useState } from 'react'
import { FaBars } from "react-icons/fa";

const Navbar = ({ scrollToAbout, scrollToEducation, scrollToExperience, scrollToProjects }) => {

    return (
        <>
            <div className='max-w-screen-xl text-white rounded-full h-fit mx-auto flex flex-wrap items-center justify-between px-20 py-7 font-dm'>
                <div className='text-2xl font-bold'>
                    <a
                        href="/"
                        className='font-fira font-medium decoration-[#7F27FF] hover:underline hover:underline-offset-8'

                    >
                        Subhasis Das
                    </a>
                </div>
                <nav className='text-lg'>
                    <ul className='flex items-center gap-7 font-medium '>
                        <li className='nav-items hover:bg-white hover:text-black px-3 py-1 rounded-xl transition-all duration-300 hover:scale-110'>
                            <button
                                onClick={scrollToAbout}
                            >
                                About Me
                            </button>
                        </li>
                        <li className='nav-items hover:bg-white hover:text-black px-3 py-1 rounded-xl transition-all duration-300 hover:scale-110'>
                            <button
                                onClick={scrollToEducation}
                            >
                                Education
                            </button>
                        </li>
                        <li className='nav-items hover:bg-white hover:text-black px-3 py-1 rounded-xl transition-all duration-300 hover:scale-110'>
                            <button
                                onClick={scrollToExperience}
                            >
                                Experience
                            </button>
                        </li>
                        <li className='nav-items hover:bg-white hover:text-black px-3 py-1 rounded-xl transition-all duration-300 hover:scale-110'>
                            <button
                            onClick={scrollToProjects}
                            >
                                Projects
                            </button>
                        </li>
                        <button
                            className='nav-items ml-3 bg-gradient-to-tr from-blue-600 to-cyan-500 hover:bg-gradient-to-r hover:to-cyan-400 font-bold font-titillium px-3 py-1 rounded-xl transition-all duration-300 hover:scale-110'
                        >
                            Resume
                        </button>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar