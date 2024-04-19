import React from 'react'

const Skills = () => {
  return (
    <div className='mt-20 text-white bg-opacity-70 flex flex-col gap-20 flex-wrap  justify-between max-w-screen h-fit px-24 py-16'>
      <div>
        <h1 className='text-7xl font-medium font-titillium'>Experience</h1>
      </div>
      <div className='flex'>
        <span className='flex flex-col gap-5 w-1/2 font-dm text-lg font-medium'>
          <h1 className='text-3xl font-dm'>Real Time Intrusuion Detection & Monitoring Device</h1>
          <h2 className='text-lg font-medium'>Presidency University, Bengaluru</h2>
          <p className='flex items-center gap-2'>Jun-2022 <span className='text-3xl '>·</span> Dec-2022</p>
          <p className='text-base break-words font-titillium'>
           A sophisticated system capable of continuously monitoring its surroundings for any signs of human movement. Once motion is detected, it instantly records a 5-second video capturing the intruder in action. Using Raspberry Pi, this footage is then seamlessly sent to the user via Telegram, ensuring rapid awareness and response to potential security threats.
          </p>
        </span>
        <span></span>
      </div>
    </div>
  )
}

export default Skills