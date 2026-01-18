import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

export const HeroSection = () => {
  const heroref =useRef();
  
  useGSAP(()=>{
    gsap.from(".hero-line",{
      opacity:0,
      x:1000,
      duration:0.4,
      delay:0.4,
      stagger:0.2
    })
  },[heroref])

  return (
    <div ref={heroref} className=' herosec w-[150vh] h-[50vh] p-7 gap-[20px] overflow-hidden '>
        <h1  className='hero-line text-[10vh] text-center font-bold text-[#F5F7FF]'>Your Money Your Control</h1>
        <h1  className='hero-line  text-[10vh] text-right font-bold text-[#C7C9E3] '></h1>
        <h1  className= 'hero-line text-[10vh] text-center font-bold text-[#4DA3FF] '>Secure Payments</h1>
        
    </div>
  )
}
