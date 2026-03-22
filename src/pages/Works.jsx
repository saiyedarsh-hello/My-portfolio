import React from 'react'
import Bulls from '/websitepic1.png'

const Works = () => {


function Redirectbulls() {
    window.open('https://bulls-racing.vercel.app/', '_blank');
    window.location.href = url;
}
  function RedirectDashboard() {
    window.open('https://gyanika-teachers-dashboard.vercel.app/', '_blank');
    window.location.href = url;
}
function RedirectGyanika() {
    // var url = "https://student-app-main.vercel.app/";
    window.open('https://student-app-main.vercel.app/', '_blank');
    window.location.href = url;
}


  return (
    <div id="projects" className='h-350 bg-[#75162D] flex justify-center pt-10'>
        <div id='work' className=' h-280 md:h-320 w-full m-2 md:w-3/4 flex flex-col items-center'>
            <h1 className='text-2xl md:text-6xl te font3 p-5 m-5 transition-all duration-500 bg-red-900 text-[#F2D9A0] -skew-x-10'>MY WORK</h1>
            <div id='bulls' className=' w-70 h-60 md:w-150 md:h-110 flex flex-col border-2 border-black rounded-2xl transition-all duration-400 hover:scale-105 bg-red-900 text-[#F2D9A0] hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
                    <div className='w-60 md:w-135 md:h-70 m-auto border-2  border-black  rounded-2xl overflow-hidden flex  justify-center mt-5 '>
                      <img onClick={Redirectbulls} className='object-fit scale-125 md:scale-100 cursor-pointer' src={Bulls} alt="Website project screenshot" />
                    </div>
                    <h1 class=" font-extrabold m-auto text-3xl md:text-4xl ">RedBull Racing</h1>
                    <i class="ri-arrow-down-long-line  text-center"></i>
                    <i onClick={Redirectbulls} class="pb-5 ri-global-line text-2xl md:text-3xl mx-auto cursor-pointer"></i>
            </div>
            <div className='border-2 border-black md:w-150 flex justify-center rounded-2xl m-8 transition-all duration-400 hover:scale-105 bg-red-900 text-[#F2D9A0] hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
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
            <div className='border-2 border-black m-2 md:w-150 flex justify-center transition-all hover:scale-105 duration-400 bg-red-900 text-[#F2D9A0] rounded-2xl hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
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

export default Works