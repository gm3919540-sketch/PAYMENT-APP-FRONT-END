
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {motion} from "framer-motion";
import { loginuser, registerUser } from '../Api/Userapi';
import { useAuth } from '../Context/AuthContext';
import api from '../Api/axios';
import Resiterimg from "../Images/Registerimg.png"

export const Register = () => {
     const [name, setname] = useState("");
     const [email, setemail] = useState("")
     const [phone, setphone] = useState("")
     const [password, setpassword] = useState("")
     const [err, seterr] = useState("")
     const [mess,setMess] = useState("");
     const navigate = useNavigate();
   const handleSubmit = async(e)=>{
    e.preventDefault()
    seterr("")
    setMess("")

    if (!name || !email || !phone || !password) {
      seterr("All fields are required")
      return
    }
    try {
       const  mess = await registerUser({name,email,phone,password});
    setMess("Registration successful")
    setTimeout(() => {
        navigate("/login")
      }, 1500)
        
    } catch (error) {
      seterr(err)
    }
   }
  return (
     <div className='bg-gradient-to-br from-[#0C0E1D] via-[#211F36] to-[#616083] h-screen w-screen flex justify-center items-center'>
      
      <form
        onSubmit={handleSubmit}
        className='w-[60vh] h-[60vh] bg-[#211F36] rounded-xl p-4 flex flex-col items-center gap-3'
      >
        <div className='w-[40px] h-[40px] objext-fit'>
                  <img className='h-[100%] w-[100%]' src={Resiterimg} alt="" />
                </div>
        <h1 className='text-white text-[5vh] font-semibold'>Register</h1>

        {err && <p className='text-red-500'>{err}</p>}
        {mess && <p className='text-green-400'>{mess}</p>}

        <input
          value={name}
          onChange={(e)=>setname(e.target.value)}
          type="name"
          placeholder='Name'
          className='w-full border rounded-sm h-[10%] p-5 text-white bg-transparent'
        />

        <input
         value={email}
          onChange={(e)=>setemail(e.target.value)}
          type="email"
          placeholder='Enter email'
          className='w-full border rounded-sm h-[10%] p-5 text-white bg-transparent'
        />
         <input
         value={phone}
          onChange={(e)=>setphone(e.target.value)}
          type="phone"
          placeholder='Enter phone number'
          className='w-full border rounded-sm h-[10%] p-5 text-white bg-transparent'
        />
         <input
         value={password}
          onChange={(e)=>setpassword(e.target.value)}
          type="password"
          placeholder='Enter password'
          className='w-full border rounded-sm h-[10%] p-5 text-white bg-transparent'
        />


        <motion.button
          type="submit"
          className='w-full h-[10%] bg-green-500 rounded-md font-semibold text-lg'
          whileHover={{scale:1.03}}
          whileTap={{scale:0.85}}
        >
          Login
        </motion.button>

        <Link to="/login" className='text-white underline'>
          Already Register? Login
        </Link>

      </form>
    </div>
  )
}
