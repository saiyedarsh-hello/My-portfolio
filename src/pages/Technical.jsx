import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Technical = () => {

  const mainRef = useRef()
  const listRef = useRef()

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.from(mainRef.current,{
      transform: "translateY(80%)",
      duration:1.5,
      scrollTrigger:{
        trigger:mainRef.current,
        scroller:"body",
        start: "top 250%",
        end: "top 100%",
        scrub:2,
      }
    })

    

  })

  return (
   <div id='skills' class="h-screen flex justify-center items-center bg-[#AAD7B8]">
      <div ref={mainRef} class="w-75 md:w-250 h-160 border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-[#F6EFDD] relative">
          <h1 class="text-4xl font1 m-10 md:m-20">Technical Skills</h1>
          <div class="w-60 md:w-200 h-90 absolute left-5 md:left-12 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <div class="w-60 md:w-200 h-30 border-2 flex items-center bg-[#FCFCFC] transition-all hover:scale-105">
              <i class="ri-javascript-fill text-5xl ml-5"></i>
              <h2 class="font-semibold ml-2">Front End</h2>
              <ul class="ml-1 md:ml-16 font-normal ">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Gsap</li>
              </ul>
            </div>
            <div class="w-60 md:w-200 h-30 border-2 bg-[#FCFCFC] flex items-center transition-all hover:scale-105">
              <i class="ri-code-line text-4xl md:text-5xl ml-5"></i>
              <h2 class="font-semibold ml-1 md:ml-2">Languages</h2>
              <ul class="ml-1 md:ml-14 font-normal ">
                <li>C / C++</li>
                <li>JavaScript</li>
                <li>Python</li>
              </ul>
            </div>
            <div class="w-60 md:w-200 h-30 border-2 bg-[#FCFCFC] flex items-center transition-all hover:scale-105">
              <i class="ri-github-fill text-3xl md:text-5xl ml-4 md:ml-5"></i>
              <h2 class="font-semibold md:ml-2">Tools/Library</h2>
              <ul class="md:ml-9 font-normal ">
                <li>Git/Github</li>
                <li>Pandas</li>
              </ul>
            </div>

          </div>
      </div>
   </div>
  )
}


export default Technical