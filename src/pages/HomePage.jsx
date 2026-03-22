import React from 'react'
import SplitText from '../components/TextAnimation'

const HomePage = () => {



  return (
    <div className='h-screen w-full bg-[#75162D] flex flex-col md:flex-row justify-around items-center'>
      <a href="#projects">
      <h1 className='text-2xl font3 text-[#F2D9A0] transition-all duration-500 hover:-skew-x-12 hover:bg-black p-2'>PROJECTS</h1>
      </a>
      <SplitText
        text="ARSH SAIYED"
        className="text-4xl md:text-7xl text-[#F2D9A0] font-semibold text-center transition-all duration-500 hover:-skew-x-12 hover:bg-black p-10"
        delay={50}
        duration={1.5}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        
        showCallback/>
        <a href="#skills">
        <h1 className='text-2xl font3 text-[#F2D9A0] transition-all duration-500 hover:-skew-x-12 hover:bg-black p-2'>SKILLS</h1>
        </a>
      
    </div>
  )
}

export default HomePage