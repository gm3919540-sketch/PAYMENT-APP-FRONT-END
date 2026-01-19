import React from 'react'

import { Nav } from './Nav';
import { HeroSection } from './HeroSection';
import { useGSAP } from '@gsap/react';
import { Card } from './Card';
export const Home = () => {
   

  return (
  
    <div className='bg-gradient-to-br from-[#0C0E1D] via-[#211F36] to-[#616083] h-screen w-screen py-8 px-2 flex flex-col items-center gap-[40px] '>
        <Nav variant ="home" />
        <HeroSection/>
        <Card/>
    </div>
  )
}
