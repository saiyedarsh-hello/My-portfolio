import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap';
import Bulls from '/websitepic1.png'


const Projects = () => {

  function RedirectGyanika() {
    // var url = "https://student-app-main.vercel.app/";
    window.open('https://student-app-main.vercel.app/', '_blank');
    window.location.href = url;
  }
  function RedirectDashboard() {
    window.open('https://gyanika-teachers-dashboard.vercel.app/', '_blank');
    window.location.href = url;
  }

  function Redirectbulls() {
    window.open('https://bulls-racing.vercel.app/', '_blank');
    window.location.href = url;
  }

  const tagRaf = useRef()
  const boxRef = useRef()







  return (
    <div id="projects" className='bg-[#E4E8C8] h-300 text-[#eee6e4] font-bold flex flex-col justify-around items-center'>
      <h1 class="text-5xl md:text-8xl font1 m-10 bg-red-400 p-4">PROJECTS</h1>

      <div id='bulls' className='w-70 h-60 md:w-150 md:h-110 flex flex-col text-blue-950 border-2 border-black bg-[#D2C8E8] pt-5 hover:scale-105 shadow-[5px_5px_0px_0px_rgba(109,40,217)] transition-all hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'>
        <div className='w-60 md:w-135 md:h-70 m-auto border-2 border-black  rounded-2xl overflow-hidden flex  justify-center'>
          <img onClick={Redirectbulls} className='object-fit scale-125 md:scale-100' src={Bulls} alt="Website project screenshot" />
        </div>
        <h1 class="text-blue-950 font-extrabold m-auto text-3xl md:text-4xl ">RedBull Racing</h1>
        <i class="ri-arrow-down-long-line  text-center"></i>
        <i onClick={Redirectbulls} class="pb-5 ri-global-line text-2xl md:text-3xl mx-auto cursor-pointer"></i>
      </div>

      {/* THE LOWEST BOXES */}
      <div className='flex flex-col w md:flex-row md:justify-around items-center w-full gap-6 md:gap-0 text-black px-4 md:px-0'>
        <div className='border-2 border-black bg-[#D2C8E8] w-full  md:w-150 flex justify-center transition-all hover:scale-105 shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'>
          <div className="m-3 rounded-2xl flex flex-col w-full">
            <h3 className="text-center font-serif font-semibold mt-5 text-xl md:text-2xl">Gyanika</h3>
            <p className="text-center m-1 px-4 text-sm md:text-[1.2rem]">Gyanika is a lightweight, multilingual mobile learning platform designed to make affordable, offline enabled digital education easily accessible to students in rural and semi-urban communities.</p>
            <p className="text-center font-bold text-sm md:text-[1rem] mt-3">Visit Site</p>
            <div className="flex flex-col items-center pb-4">
              <i className="ri-arrow-down-long-line text-center"></i>
              <i onClick={RedirectGyanika} className="ri-global-line text-2xl md:text-3xl cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className='border-2 border-black bg-[#D2C8E8] w-full md:w-150 flex justify-center transition-all hover:scale-105 shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'>
          <div className="m-3 rounded-2xl flex flex-col w-full">
            <h3 className="text-center font-serif font-semibold mt-5 text-xl md:text-2xl">Smart Teacher Dashboard</h3>
            <p className="text-center m-2 px-4 text-sm md:text-[1.2rem]">A web app that helps teachers manage students and interact with them. (It was a continuation of the Gyanika.)</p>
            <p className="text-center pt-4 font-bold text-sm md:text-[1rem]">Visit Site</p>
            <div className="flex flex-col items-center pb-4">
              <i className="ri-arrow-down-long-line text-center"></i>
              <i onClick={RedirectDashboard} className="ri-global-line text-2xl md:text-3xl cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>







    </div>
  )
}

export default Projects


{/* <div  class="border-2 bg-[#D2C8E8] w-70 md:w-100 h-80 md:h-95 flex justify-center transition-all hover:scale-105 shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
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
        </div> */}
