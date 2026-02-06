import React, { useRef } from 'react'
import MyPhoto from '../assets/pixelME-removebg-preview.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const HeroPage = () => {

    function RedirectGithub(){
        // var url = "https://student-app-main.vercel.app/";
        window.open('https://github.com/saiyedarsh-hello', '_blank');
        window.location.href = url;
    }
    function RedirectLinkedin(){
        // var url = "https://student-app-main.vercel.app/";
        window.open('https://www.linkedin.com/in/arsh-saiyed-188b17322/', '_blank');
        window.location.href = url;
    }
    function MailTo(){
        // var url = "https://student-app-main.vercel.app/";
        window.open('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvvhrhbSRzBdzrvDfPTkmGVdcfKtqvpdKGqzClXlWVPmqTmdjMGJsJhTClnMBkdkcPsFg', '_blank');
        window.location.href = url;
    }

    const headingRef = useRef();
    const paraRef = useRef();
    const photoRef = useRef();


    useGSAP(()=>{
        gsap.from(headingRef.current,{
            y:30,
            duration:0.6,
            opacity:0,
        })
        gsap.from(paraRef.current,{
            y:-30,
            duration:0.6,
            opacity:0,
        })
        gsap.from(photoRef.current,{
            y:-30,
            duration:0.6,
            opacity:0,
        })
    })

  return (
    <div id="home" class="bg-[#F6EFDD] flex flex-col items-center justify-center h-screen md:flex-row md:justify-evenly md:items-center ">   
        <div id="text">
            <h1 ref={headingRef} class="font1 text-2xl mt-18 md:text-6xl  leading-tight" >Hello,<br/>I'am Arsh !</h1>
            <p ref={paraRef} class="w-70 md:w-100">I'm a B.Tech student, I have good knowledge in Front-End and Teach. I specialized in building responsive websites. I am dedicated to my work and always give the best outcome possible.
               I have a clear and maintained approch towards my goals with well created MindMaps.
               Always up for learning new things and implementing those in real world to
               increase my knowledge and abilities.
               </p>
               <div class="text-center mt-2 border-2 rounded-3xl">
               <i onClick={RedirectGithub} class="ri-github-line text-3xl p-3 cursor-pointer"></i> 
               <i onClick={RedirectLinkedin} class="ri-linkedin-box-fill text-3xl p-3 cursor-pointer"></i>
               <i onClick={MailTo} class="ri-mail-line text-3xl p-3 cursor-pointer"></i>
               </div>
        </div>
        <div class="w-50 md:w-100 h-150 flex flex-col items-center md:flex-row" id="photo">
            <div class="bg-[#304D31] w-60 md:w-100 h-50 md:h-80 md:bottom-44  mt-8 z-9 absolute rounded-2xl"></div>
            <img ref={photoRef} class="z-9 relative w-50 md:w-100 top-4.75 md:top-0.5" src={MyPhoto} alt="myPicture" />
        </div>
        
    </div>
  )
}

export default HeroPage