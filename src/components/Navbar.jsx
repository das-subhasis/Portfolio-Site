import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <div className='max-w-screen-xl text-white rounded-full h-fit mx-auto flex flex-wrap items-center justify-between px-20 py-7 font-dm'> 
                <div className='text-2xl font-bold'>
                    <a href="">
                        {/* <img src="" alt="" /> */}
                        Logo
                    </a>
                </div>
                <nav className='text-lg'>
                    <ul className='flex items-center gap-7 font-medium '>
                        <li className='nav-items hover:bg-white hover:text-black px-3 py-1 rounded-xl transition-all duration-300 focus:bg-white'><a href="#">About Me</a></li>
                        <li className='nav-items hover:bg-white hover:text-black px-3 py-1 rounded-xl transition-all duration-300'><a href="#">Education</a></li>
                        <li className='nav-items hover:bg-white hover:text-black px-3 py-1 rounded-xl transition-all duration-300'><a href="#">Experience</a></li>
                        <li className='nav-items hover:bg-white hover:text-black px-3 py-1 rounded-xl transition-all duration-300'><a href="#">Projects</a></li>
                        <li className='nav-items ml-5 bg-gradient-to-r from-purple-400 to-violet-600 px-3 py-1 rounded-xl transition-all duration-300'><a href="#">Resume</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar