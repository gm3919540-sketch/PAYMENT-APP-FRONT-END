import React from 'react'
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Nav = () => {
  
    const navRef =useRef();

    useGSAP(()=>{
        gsap.from(".nav",{
          opacity:0,
          y:-100,
          delay:0.2,
          duration:0.2
        })
    },[navRef])


  return (
    <>
    <div ref={navRef} className=' nav border border-white h-[6vh] w-[70%] rounded-xl flex px-3 py-2 justify-between' >
            <div >
                <h1 className='font-semibold text-xl text-[#51FAAA]' >Pay Now</h1>
            </div>
          <div  className="text-white  flex gap-4 py-0 px-2">
             
                   <Link to="/login" >
                   <motion.div whileHover={{scale:1.09}} whileTap={{scale:0.9}} className=' h-[30px] w-[80px]  py-1 px-1 rounded-xl border border-[#51FAAA]'>
                    <h1 className='text-center text-[#51FAAA]'>Login</h1>
                    </motion.div>
                   </Link>
                   <Link to="/register" >
                   <motion.div whileHover={{scale:1.09} } whileTap={{scale:0.9}} className=' h-[30px] w-[100px]  py-1 px-1 rounded-xl border border-[#51FAAA] bg-[#51FAAA]'>
                    <h1 className='text-black text-center '>Register</h1>
                    </motion.div>
                   </Link>
               </div>

        </div>
        </>
  )
}
