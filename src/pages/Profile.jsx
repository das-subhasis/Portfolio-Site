import React from 'react'
import profile from '../assets/images/profile.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const Profile = () => {
  return (
    <div className='max-w-screen-xl mx-auto h-1/2 mt-20 flex flex-wrap gap-28 items-center justify-center font-dm text-white'>
      <div className='flex flex-col gap-10 max-w-screen-md h-fit min-h-80 break-words px-12 py-8 rounded-xl'>
        <span className='flex flex-col gap-5 justify-center font-titillium'>
          <h1 className='text-8xl font-bold'>Subhasis Das</h1>
          <h2 className='text-4xl font-bold'>Data Analyst and Developer</h2>
        </span>
        <p className='text-lg font-medium font-fira'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cum vitae culpa dolorem alias dolor voluptates quas accusamus optio rem a, deleniti, maiores vero ipsum quae nostrum. Numquam dolores obcaecati illo?</p>
      <div className='h-14 w-44 bg-gradient-to-r from-purple-600 to-pink-400 hover:scale-110 rounded-3xl text-base font-bold hover:bg-gradient-to-b transition-all duration-200 ease-out group'>
        <button className='flex justify-center items-center gap-3 h-full w-full'>Get Started<span className='group-hover:translate-x-1 transition duration-150'><FaLongArrowAltRight size={20}/></span></button>
        
      </div>
      </div>
    </div>
  )
}

export default Profile