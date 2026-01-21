import React, { useRef } from 'react'
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Nav = ({ variant }) => {
  
  const navRef = useRef();
  const navogate =useNavigate();

  const removeToken =()=>{
    localStorage.removeItem("token");
  }

  useGSAP(() => {
    gsap.from(navRef.current, {
      opacity: 0,
      y: -100,
      delay: 0.2,
      duration: 0.4
    })
  }, []);

  return (
    <div
      ref={navRef}
      className='border border-white h-[6vh] w-[70%] rounded-xl flex px-3 py-2 justify-between'
    >
      <div>
        <h1 className='font-semibold text-xl text-[#51FAAA]'>Pay Now</h1>
      </div>

     
      <div className="text-white flex gap-4 px-2">
        {variant === "home" && (
          <>
            <Link to="/login">
              <motion.div whileHover={{ scale: 1.09 }} whileTap={{ scale: 0.9 }}
                className='h-[30px] w-[80px] rounded-xl border border-[#51FAAA]'>
                <h1 className='text-center text-[#51FAAA]'>Login</h1>
              </motion.div>
            </Link>

            <Link to="/register">
              <motion.div whileHover={{ scale: 1.09 }} whileTap={{ scale: 0.9 }}
                className='h-[30px] w-[100px] rounded-xl bg-[#51FAAA]'>
                <h1 className='text-black text-center'>Register</h1>
              </motion.div>
            </Link>
          </>
        )}

        {variant === "dashboard" && (
          <>
            <Link to="/wallet">
              <motion.div whileHover={{ scale: 1.05 }} className='text-[#51FAAA]'>
                Wallet
              </motion.div>
            </Link>

            <Link to="/transactions">
              <motion.div whileHover={{ scale: 1.05 }} className='text-[#51FAAA]'>
                Transactions
              </motion.div>
            </Link>

            <Link to="/"  onClick={removeToken} >
              <motion.div whileHover={{ scale: 1.05 }} className='text-red-400'>
                Logout
              </motion.div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
