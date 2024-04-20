import React from 'react'
import Profile from '../assets/images/profile1.jpg'

const About = ({aboutRef}) => {
    return (
        <div ref={aboutRef} className='pt-24 mb-20 space-y-24 font-titillium'>
            <div className='grid text-7xl font-medium text-white  place-content-center mx-auto'>Know Me</div>
            <div className='text-white h-fit place-content-center flex flex-wrap gap-24 items-center'>
                <div className='rounded-xl shadow-img_shadow transition duration-300 ease-out'><img src={Profile} alt="" width={400} className='rounded-xl' /></div>
                <div className='flex flex-col gap-10 justify-center w-3/6 px-12 py-5 font-fira'>
                    <h1 className='text-4xl'>Hi!!</h1>
                    <p className='text-lg'>I'm Subhasis Das, nearing the completion of my B.Tech in Information Technology at Presidency University. Throughout my college journey, I've delved into machine learning, web development, and data analysis, honing my skills along the way. Outside of academics, I enjoy immersing myself in the world of video games and anime. I'm inherently curious, always eager to explore new avenues and receptive to different perspectives and advice.</p>
                </div>
            </div>
        </div>
    )
}

export default About