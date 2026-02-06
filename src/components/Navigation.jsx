import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';

const Navigation = () => {
    
    const [IsOpen, setIsOpen] = useState(false)
    const [scrollDone, setscrollDone] = useState(false)

    useEffect(() => {
        const changeNav =()=>{
            if(window.scrollY>50){
                setscrollDone(true);
            } else{
                setscrollDone(false);
            }
        }
        
        
    
        window.addEventListener("scroll",changeNav)
        
        return () =>  window.removeEventListener("scroll",changeNav);
    }, [])
    
    const listRef = useRef()
    const nameRef = useRef()

    useGSAP(()=>{
        gsap.from(listRef.current.children,{
            y:-50,
            opacity:0,
            duration:0.5,
            stagger:0.2,
        })
        gsap.from(nameRef.current,{
            opacity:0,
            duration:2,
        })
    })
    

   

  return (
    <>
     <div className={`fixed w-4/5 z-10 top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 rounded-2xl mt-1 bg-neutral-200/20 backdrop-blur-[5px]    `}>
        <div className='flex justify-between items-center  w-full h-15 mt-2 p-4 '>
            <h1 ref={nameRef} className='font1 text-2xl m-2'>Arsh Saiyed</h1>
            <div className='md:hidden' onClick={()=>{setIsOpen(!IsOpen)}}>
                <div className='w-4 h-0.5 m-0.5 bg-black'></div>
                <div className='w-4 h-0.5 m-0.5 bg-black'></div>
                <div className='w-4 h-0.5 m-0.5 bg-black'></div>
            </div>
            <ul ref={listRef} className="font1 hidden md:flex gap-6 m-4">
                <li className="relative group cursor-pointer">
                    <a href="#home">
                    <span>About</span>
                    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </a>
                </li>
                <li className="relative group cursor-pointer">
                    <a href="#skills">
                    <span>Skills</span>
                    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </a>
                </li>
                <li className="relative group cursor-pointer">
                    <a href="#projects">
                    <span>Projects</span>
                    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </a>
                </li>
            </ul>

            {IsOpen && (
             <ul ref={listRef} className='absolute font1 text-black top-15 left-0 w-full bg-green-100 backdrop-blur-[10px] rounded-2xl mt-6 p-6 space-y-4 md:hidden'>
                <li ><a onClick={()=>{setIsOpen(!IsOpen)}} href="#home">About</a></li>
                <li><a onClick={()=>{setIsOpen(!IsOpen)}} href="#skills">Skills</a></li>
                <li><a onClick={()=>{setIsOpen(!IsOpen)}} href="#projects">Projects</a></li>
             </ul>
            )}
        </div>    
     </div>
      
    
    
    
    
    
    
    </>
  )
}

export default Navigation