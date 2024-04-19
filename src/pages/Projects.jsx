import React from 'react'
import { FaGithub, FaCloudDownloadAlt } from "react-icons/fa";

const Projects = () => {

  const Projects = [
    {
      id: 1,
      title: 'Hand Gesture Automation Using Mediapipe',
      desc: 'This tool utilizes MediaPipe and OpenCV to recognize hand gestures and automate actions based on the detected gestures.',
      link: 'https://github.com/das-subhasis/Hand_Gesture_Automation_Using_Mediapipe',
      download: 'https://github.com/das-subhasis/Hand_Gesture_Automation_Using_Mediapipe/archive/refs/heads/main.zip',
      stack: ['python', 'opencv', 'pandas', 'numpy']
    },
    {
      id: 2,
      title: 'Sentiment Analysis Using NLP',
      desc: 'This tool utilizes MediaPipe and OpenCV to recognize hand gestures and automate actions based on the detected gestures.',
      link: 'https://github.com/das-subhasis/Hand_Gesture_Automation_Using_Mediapipe',
      download: 'https://github.com/das-subhasis/Hand_Gesture_Automation_Using_Mediapipe/archive/refs/heads/main.zip',
      stack: ['python', 'nltk', 'pandas', 'numpy']
    },
    {
      id: 3,
      title: 'Note App',
      desc: 'This tool utilizes MediaPipe and OpenCV to recognize hand gestures and automate actions based on the detected gestures.',
      link: 'https://github.com/das-subhasis/Hand_Gesture_Automation_Using_Mediapipe',
      download: 'https://github.com/das-subhasis/Hand_Gesture_Automation_Using_Mediapipe/archive/refs/heads/main.zip',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      id: 4,
      title: 'IBM Data Science Profesional Course',
      desc: 'This tool utilizes MediaPipe and OpenCV to recognize hand gestures and automate actions based on the detected gestures.',
      link: 'https://github.com/das-subhasis/Hand_Gesture_Automation_Using_Mediapipe',
      download: 'https://github.com/das-subhasis/Hand_Gesture_Automation_Using_Mediapipe/archive/refs/heads/main.zip',
      stack: ['python', 'opencv', 'pandas', 'numpy']
    }
  ]

  return (
    <div className='text-white w-full mt-24 py-2 flex flex-col'>
      <div className='grid place-content-center'>
        <h1 className='text-7xl font-medium font-titillium'>Some Projects I've Worked On</h1>
      </div>
      <div className='mt-20 max-w-screen-xl mx-auto flex flex-wrap gap-10 items-center justify-center'>
        {Projects.map(project => {
          return <div className='w-2/5 h-fit flex flex-col gap-5 bg-white text-black px-12 py-8 rounded-2xl font-dm'>
            <div className='text-3xl font-bold cursor-pointer hover:text-[#8000ff] hover:underline hover:underline-offset-4 transition-all duration-150 ease-out'>
              <a
                href={project.link}
                target='_blank'
                className='w-full'
              >{project.title}</a>
            </div>
            <div>
              <p className='font-dm text-lg'>{project.desc}</p>
            </div>
            <div className='flex flex-wrap gap-5'>
              {
                project.stack.map(
                  tech => {
                    return <div className='text-lg font-fira hover:text-[#8000ff] hover:underline hover:underline-offset-4 hover:translate-x-1 transition-all duration-200 ease-out'>{tech}</div>
                  }
                )
              }
            </div>
          </div>

        })}
      </div>
    </div>
  )
}

export default Projects