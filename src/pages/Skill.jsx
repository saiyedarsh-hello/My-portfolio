import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap';

const Skill = () => {

    function RedirectGyanika(){
        // var url = "https://student-app-main.vercel.app/";
        window.open('https://student-app-main.vercel.app/', '_blank');
        window.location.href = url;
    }
    function RedirectDashboard(){
        window.open('https://gyanika-teachers-dashboard.vercel.app/', '_blank');
        window.location.href = url;
    }

    const workRef = useRef()
    const projectRef = useRef()
    const projectRef1 = useRef()

    useGSAP(()=>{
        gsap.from(workRef.current,{
            duration:0.5,
            opacity:0,
            scrollTrigger:{
                trigger:workRef.current,
                scroller:"body",
            }
        })
        gsap.from(projectRef.current,{
            
            opacity:0,
            duration:2,
            scrollTrigger:{
                trigger:projectRef.current,
                scroller:"body",
                start:"top 100%",
                end:"top 110%",
                scrub:2,
            }
        })
        gsap.from(projectRef1.current,{
            
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:projectRef1.current,
                scroller:"body",
                start:"top 100%",
                end:"top 110%",
                scrub:2,
            }
        })
    })


  return (
    <div  class="h-screen bg-[#AAD7B8] flex justify-center items-center bg-fixed">
        <div class="w-350 h-150 border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-[#F6EFDD] flex items-center flex-col ">
            <h1 ref={workRef} class="font1 text-4xl mt-10 mb-4 text-center">My Recent Works</h1>
            <div id="string">
            <svg width="1500" height="10">
                <path d="M 100 5 Q 695 5 1400 5" stroke="black" fill="transparent" />
            </svg>
            </div>
            <div  class="flex gap-5 mt-5" >
                <div ref={projectRef} class="w-100 h-90 shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-[#FCFCFC] flex flex-col justify-center transition-all hover:scale-105">
                    <h3 class="text-center font-serif font-semibold mt-5 text-2xl">Gyanika</h3>
                    <p class="text-center m-2 px-4 text-[1.2rem]"> Gyanikaisalightweight, multilingual mobile learning platform designed to make affordable, offline enabled digital education easily accessible to students in rural and semi-urbancommunities.</p>
                    <p class="text-center pt-5 font-bold text-[1rem]">Visit Site</p>
                    <i class="ri-arrow-down-long-line text-center"></i>
                    <i onClick={RedirectGyanika} class="ri-global-line text-3xl mx-auto cursor-pointer"></i>
                </div>
                <div ref={projectRef1} class="w-100 h-90 shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-[#FCFCFC] flex flex-col justify-center transition-all hover:scale-105">
                    <h3 class="text-center font-serif font-semibold mt-5 text-2xl">Smart Teacher Dashboard</h3>
                    <p class="text-center m-2 px-4 text-[1.2rem]">  A web app that helps teachers manage students and interact with them.(It was a continuation of the Gyanika.)</p>
                    <p class="text-center pt-5 font-bold text-[1rem]">Visit Site</p>
                    <i class="ri-arrow-down-long-line text-center"></i>
                    <i onClick={RedirectDashboard} class="ri-global-line text-3xl mx-auto cursor-pointer"></i>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skill