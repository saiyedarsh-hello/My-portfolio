import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap';

const Projects = () => {

  function RedirectGyanika(){
        // var url = "https://student-app-main.vercel.app/";
        window.open('https://student-app-main.vercel.app/', '_blank');
        window.location.href = url;
    }
  function RedirectDashboard(){
        window.open('https://gyanika-teachers-dashboard.vercel.app/', '_blank');
        window.location.href = url;
    }

  const tagRaf = useRef()
  const boxRef = useRef()

  useGSAP(()=>{

    gsap.to(tagRaf.current.children,{
      transform : "translateX(-67%)",
      duration:1,
      scrollTrigger:{
        trigger:tagRaf.current,
        scoller:"body",
        start:"0%",
        end:"73%",
        scrub:2,
        pin:true,
      } 
    })

    
  })

  
  return (
    <div id="projects">
    <div ref={tagRaf} class="bg-black h-screen text-white flex items-center overflow-hidden">
        <h1  class=" font1 text-[60vw] tracking-tight text-white">PROJECTS</h1>
    </div>
    <div class="h-screen bg-[#E4E8C8] flex flex-col md:flex-row justify-center items-center gap-5 px-4 md:px-0">
      <div  class="border-2 bg-[#D2C8E8] w-70 md:w-100 h-80 md:h-95 flex flex-col justify-center transition-all hover:scale-105 shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
                  <div class=" m-3 rounded-2xl flex flex-col">
                    <h3 class="text-center font-serif font-semibold mt-5 text-xl md:text-2xl">Gyanika</h3>
                    <p class="text-center m-1 px-4 text-base md:text-[1.2rem]"> Gyanika is a lightweight, multilingual mobile learning platform designed to make affordable, offline enabled digital education easily accessible to students in rural and semi-urbancommunities.</p>
                    <p class="text-center font-bold text-sm md:text-[1rem]">Visit Site</p>
                    <i class="ri-arrow-down-long-line  text-center"></i>
                    <i onClick={RedirectGyanika} class="pb-5 ri-global-line text-2xl md:text-3xl mx-auto cursor-pointer"></i>
                  </div>
      </div>
      <div  class="border-2 bg-[#D2C8E8] w-70 md:w-100 h-80 md:h-95 flex flex-col justify-center transition-all hover:scale-105 shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
                  <div class=" m-3 rounded-2xl flex flex-col">
                    <h3 class="text-center font-serif font-semibold mt-5 text-xl md:text-2xl">Smart Teacher Dashboard</h3>
                    <p class="text-center m-2 px-4 text-base md:text-[1.2rem]">A web app that helps teachers manage students and interact with them. (It was a continuation of the Gyanika.)</p>
                    <p class="text-center pt-5 font-bold text-sm md:text-[1rem]">Visit Site</p>
                    <i class="ri-arrow-down-long-line text-center"></i>
                    <i onClick={RedirectDashboard} class="ri-global-line text-2xl md:text-3xl mx-auto cursor-pointer"></i>
                  </div>
      </div>
    </div>
    </div>
  )
}

export default Projects