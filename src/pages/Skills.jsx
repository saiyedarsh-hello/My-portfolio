import React from 'react'
import Rpic from '/public/react.svg'
import Gsap from '/public/gsap.png'

const Skills = () => {
  return (
    <div id='skills' className='h-260 bg-[#75162D] flex justify-center pt-10'>
        <div id='work' className=' h-200 md:h-240 w-3/4 flex flex-col items-center gap-2'>
            <h1 className='text-2xl md:text-6xl te font3 p-5 m-5 mt-10 transition-all duration-500 bg-red-950 text-[#F2D9A0] border-2 border-[#F2D9A0] -skew-x-10'>WHAT I BUILD</h1>
            <div className='flex flex-col items-center gap-5 '>
                <div className='w-30 md:w-50 h-15 md:h-20 rounded-2xl flex  items-center p-3 md:p-5 gap-5 border-2 border-[#F2D9A0] bg-red-900'>
                    <img src={Rpic} alt="Reactpicture" id='rotate-on-hover' />
                    <h1 className=' md:text-3xl font3 text-[#F2D9A0]'>REACT</h1>
                </div>
                <div className='w-30 md:w-50 h-15 md:h-20 rounded-2xl flex  items-center p-5 gap-5 bg-red-900 border-2 border-[#F2D9A0]'>
                    <img src={Gsap} alt="Reactpicture" />
                </div>
            </div>
            <h1 className='text-2xl md:text-6xl te font3 p-5 m-5 transition-all duration-500 bg-red-950 border-2 border-[#F2D9A0] text-[#F2D9A0] -skew-x-10'>Technical Skills</h1>
            <div class="text-[#F2D9A0]">
                <div class="w-60 md:w-200 h-30 border-2 flex items-center bg-red-900 transition-all hover:scale-105 rounded-2xl">
                <i class="ri-javascript-fill text-5xl ml-5"></i>
                <h2 class="font-semibold ml-2">Front End</h2>
                <ul class="ml-1 md:ml-16 font-normal ">
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>Gsap</li>
                </ul>
                </div>
            </div>
            <div class="text-[#F2D9A0] w-60 md:w-200 h-30 border-2 bg-red-900 flex items-center transition-all hover:scale-105 rounded-2xl">
                <i class="ri-code-line text-4xl md:text-5xl ml-5"></i>
                <h2 class="font-semibold ml-1 md:ml-2">Languages</h2>
                <ul class="ml-1 md:ml-14 font-normal ">
                    <li>C / C++</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                </ul>
            </div>
            <div class="text-[#F2D9A0] w-60 md:w-200 h-30 border-2 bg-red-900 flex items-center transition-all hover:scale-105 rounded-2xl">
                <i class="ri-github-fill text-3xl md:text-5xl ml-4 md:ml-5"></i>
                <h2 class="font-semibold md:ml-2">Tools/Library</h2>
                <ul class="md:ml-9 font-normal ">
                    <li>Git/Github</li>
                    <li>Pandas</li>
                </ul>
            </div>

        </div>
        

    </div>
  )
}

export default Skills