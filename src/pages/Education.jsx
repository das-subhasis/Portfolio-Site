import React from 'react'
import { ReactSVG } from 'react-svg'
import img1 from '../assets/images/img1.svg'
import img2 from '../assets/images/img2.png'

const Education = () => {
    return (
        <div className='mt-32 text-black bg-white flex gap-20 justify-center items-center max-w-screen h-fit px-24 py-16'>
            <div>
                <h1 className='text-start text-7xl font-medium font-titillium'>I've Studied at...</h1>
            </div>
            <div className='w-[70%] flex flex-col gap-16 items-center justify-center font-dm'>
                <div className='w-full flex gap-28 items-center justify-center'>
                    <span><img src={img1} width={100} /></span>
                    <span className='w-[500px] flex flex-col justify-center gap-3'>
                        <h2 className='text-2xl font-bold'>Kendriya Vidyalaya, New Bongaigaon</h2>
                        <h3 className='text-lg'>Jul-2019 · Jul-2021</h3>
                        <p>Higher Secondary Degree</p>
                    </span>
                </div>
                <div className='w-full flex gap-28 items-center justify-center'>
                    <span><img src={img2} width={95} /></span>
                    <span className='w-[500px] flex flex-col justify-center gap-3'>
                        <h2 className='text-2xl font-bold'>Presidency University, Bengaluru</h2>
                        <h3 className='text-lg'>Sep-2021 · Jul-2025</h3>
                        <p className=''>B.Tech Information Science and Technology with specialization in AI and Data Science</p>
                    </span>
                </div>
                
            </div>
        </div>
    )
}

export default Education