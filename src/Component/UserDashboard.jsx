import React, { useEffect, useRef, useState } from 'react'
import { Nav } from './Nav'
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { getBalance } from '../Api/Userapi';
export const UserDashboard = () => {

   const [balance, setBalance] = useState(null);
const [err, setErr] = useState("");

useEffect(() => {
  const fetchBalance = async () => {
    try {
      const b = await getBalance();
      setBalance(b);
    } catch {
      setErr("failed to fetch balance");
    }
  };
  fetchBalance();
}, []);

const cardRef = useRef();

useGSAP(() => {
  gsap.from(cardRef.current.children, {
    opacity: 0,
    y: 200,
    stagger: 0.2,
    duration: 0.4,
    delay: 0.3
  });
}, []);

  return (
    <div className='bg-gradient-to-br from-[#0C0E1D] via-[#211F36] to-[#616083] h-screen w-screen flex flex-col items-center p-8 gap-[15vh]'>
        
        <Nav variant="dashboard"  />
        <div ref={cardRef} className='w-[80%] px-16 flex flex-col gap-12'>

  
  <div  className=' refcards flex justify-between gap-10'>
    <div className='card bg-[#1E1B3A] h-[180px] w-[30%] rounded-2xl flex flex-col items-center justify-center'>
      <h3 className='text-[#AB7DE3] text-xl font-semibold'>current balance</h3>
      <p className='text-[#51FAAA] text-4xl font-bold mt-4'>${balance}</p>
    </div>

    <div className='card bg-[#1E1B3A] h-[180px] w-[30%] rounded-2xl flex flex-col items-center justify-center gap-6'>
      <h3 className='text-[#AB7DE3] text-xl font-semibold'>transaction history</h3>
      <Link to="/transactions" className='w-[60%]'>
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
          className='bg-[#51FAAA] py-3 rounded-xl text-center font-semibold text-black'>
          view
        </motion.div>
      </Link>
    </div>
  </div>

  
  <div className=' refcards flex justify-center'>
    <div className='card bg-[#1E1B3A] h-[180px] w-[30%] rounded-2xl flex flex-col items-center justify-center gap-6'>
      <h3 className='text-[#AB7DE3] text-xl font-semibold text-[5vh]'>transfer money</h3>
      <Link to="/transfer" className='w-[60%]'>
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
          className='bg-[#51FAAA] py-3 rounded-xl text-center font-semibold text-black'>
          proceed
        </motion.div>
      </Link>
    </div>
  </div>

</div>

        
        
      </div>
  )
}
