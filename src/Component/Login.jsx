import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {motion} from "framer-motion";
import { loginuser } from '../Api/Userapi';
import { useAuth } from '../Context/AuthContext';

export const Login = () => {
    const {login} =useAuth();

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")

  const handleSubmit =  async(e) => {
    e.preventDefault()

    if (!email || !password) {
      setErr("Email and Password required")
      return
    }

   try{
    const token = await loginuser({email,password})
    login(token);
    console.log(token);
   }catch(err){
    setErr(err);
   }

    // after success
    navigate("/user/dashboard")
  }

  return (
    <div className='bg-gradient-to-br from-[#0C0E1D] via-[#211F36] to-[#616083] h-screen w-screen flex justify-center items-center'>
      
      <form
        onSubmit={handleSubmit}
        className='w-[60vh] h-[60vh] bg-[#211F36] rounded-xl p-4 flex flex-col items-center gap-5'
      >
        <h1 className='text-white text-[5vh] font-semibold'>Login</h1>

        {err && <p className='text-red-500'>{err}</p>}

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder='abc@gmail.com'
          className='w-full border rounded-sm h-[10%] p-5 text-white bg-transparent'
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

        <Link to="/register" className='text-white underline'>
          New user? Register
        </Link>

      </form>
    </div>
  )
}
