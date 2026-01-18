import { useGSAP } from '@gsap/react';
import { div } from 'framer-motion/client'
import gsap from 'gsap';
import React, { useRef } from 'react'

export const Card = () => {
  const cardRef =useRef();
  useGSAP(()=>{
    gsap.from(".card",{
        opacity:0,
        y:100,
        delay:1.6,
        duration:0.2,
        stagger:0.2
    })
  },[cardRef])

    
  return (
   <div ref={cardRef} className='card w-[200vh] h-[50vh] flex p-4 px-20 gap-[20%] mt-15 overflow-hidden ' >
     <div className='card bg-[#211F36] h-[90%]  w-[20%] rounded-2xl flex flex-col p-3  items-center'>
             <h3 className='text-[#AB7DE3] text-[4vh] font-semibold ' >Instant Transfer</h3>
             <p className='text-[#616083] text-sm m-4 text-center text-[2vh]' > Send and Receive Money in seconds with real-time transaction updates </p>
     </div>

      <div className='card bg-[#211F36] h-[90%]  w-[20%] rounded-2xl flex flex-col p-3  items-center'>
             <h3 className='text-[#AB7DE3] text-[4vh] font-semibold ' >Secure Wallet</h3>
             <p className='text-[#616083] text-sm m-4 text-center text-[2vh]' > Send and Receive Money in seconds with real-time transaction updates </p>
     </div>

      <div className='card bg-[#211F36] h-[90%]  w-[20%] rounded-2xl flex flex-col p-3  items-center'>
             <h3 className='text-[#AB7DE3] text-[4vh] font-semibold ' >Transfer History</h3>
             <p className='text-[#616083] text-sm m-4 text-center text-[2vh]' > Send and Receive Money in seconds with real-time transaction updates </p>
     </div>
   </div>
  )
}
