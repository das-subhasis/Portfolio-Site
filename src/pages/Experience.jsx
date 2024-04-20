import React from 'react'
import { FaLink } from 'react-icons/fa'
const Experience = ({experienceRef}) => {
  return (
    <div ref={experienceRef} className='pt-32 text-white bg-opacity-70 flex flex-col gap-20 flex-wrap justify-between max-w-screen h-fit px-24 py-16'>
      <div>
        <h1 className='text-7xl font-medium font-titillium'>Experience</h1>
      </div>
      <div className='flex justify-center'>
        <span className='flex flex-col gap-5 w-1/2 font-dm text-lg font-medium'>
          <a
            href=''
            target='_blank'
            className='text-3xl font-dm decoration-[#8000ff] hover:underline hover:underline-offset-8 hover:scale-105  transition-all duration-150 ease-out'
          >Real Time Intrusion Detection & Monitoring Device <FaLink className='inline-block' size={25} /></a>
          <h2 className='text-lg font-medium'>Presidency University, Bengaluru</h2>
          <p className='flex items-center gap-2'>Jun-2022 <span className='text-3xl '>·</span> Dec-2022</p>
          <p className='text-base break-words font-titillium'>
            A sophisticated system capable of continuously monitoring its surroundings for any signs of human movement. Once motion is detected, it instantly records a 5-second video capturing the intruder in action. Using Raspberry Pi, this footage is then seamlessly sent to the user via Telegram, ensuring rapid awareness and response to potential security threats.
          </p>
        </span>

      </div>
    </div>
  )
}

export default Experience