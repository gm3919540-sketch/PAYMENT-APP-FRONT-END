import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {motion} from "framer-motion";
import { loginuser,getRoleFromToken } from '../Api/Userapi';
import { useAuth } from '../Context/AuthContext';
import loginimg from"../Images/loginimg.png"

export const Login = () => {
    const {login,roles} =useAuth();

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")

  const handleSubmit = async (e) => {
  e.preventDefault();
  setErr("");

  if (!email || !password) {
    setErr("Email and Password required");
    return;
  }

  try {
    const token = await loginuser({ email, password });

    
    if (!token) {
      setErr("Invalid credentials");
      return;
    }
    const role = getRoleFromToken(token);
    login(token);
       
    if(roles.includes("ROLE_ADMIN")){
      navigate("/admin/dashboard");
    }else{            
    navigate("/user/dashboard");  
    }

  } catch (err) {
    setErr("Invalid email or password");
  }
};


  return (
    <div className='bg-gradient-to-br from-[#0C0E1D] via-[#211F36] to-[#616083] h-screen w-screen flex justify-center items-center'>
      
      <form
        onSubmit={handleSubmit}
        className='w-[60vh] h-[60vh] bg-[#211F36] rounded-xl p-4 flex flex-col items-center gap-5'
      >
        <div className='w-[40px] h-[40px] objext-fit'>
          <img className='h-[100%] w-[100%]' src={loginimg} alt="" />
        </div>
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
