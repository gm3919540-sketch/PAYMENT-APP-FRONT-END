import React, { useRef, useState } from 'react'
import {motion} from "framer-motion";
import bank from "../Images/bank.png"
import api from '../Api/axios';
import { generateIdempotencyKey, transferMoney } from '../Api/Userapi';
export const Transfer = () => {
    const [receiverWalletId, setreceiverWalletId] = useState(null);
    const [amount, setamount] = useState(null);
    const [err, seterr] = useState("");
    const [mess,setmess] = useState("");
    const idempotencyKeyRef = useRef(generateIdempotencyKey());
    const handle = async (e)=>{
        e.preventDefault();
        seterr("");
        setmess("");
        try{
           const r = await transferMoney({receiverWalletId,amount}, idempotencyKeyRef.current);
           setmess("transfered succefully");
             if (r.data?.success === false) {
      throw new Error(response.data.message);
    }
           setreceiverWalletId("");
      setamount("");
        }catch(err){
            seterr(
        err?.response?.data?.message || 
        "Transfer failed ❌"
      );
        }
    }

  return (
     <div className='bg-gradient-to-br from-[#0C0E1D] via-[#211F36] to-[#616083] h-screen w-screen py-8 px-2 flex flex-col items-center justify-center gap-[40px] '>
         
         <form onSubmit={handle} action="" className='bg-[#211F36] h-[50vh] w-[55vh] flex flex-col  items-center justify-center p-5 gap-[20px]' >
            <div className=' h-[40px] w-[40px] object-cover '>
          <img src={bank} alt="" />
         </div>
            <h1 className='font-semibold text-[4vh] text-white'>Transfer Money</h1>
            {err && <p className="text-red-500">{err}</p>}
        {mess && <p className="text-green-500">{mess}</p>}
            <input 
            value={receiverWalletId}
            onChange={(e)=>setreceiverWalletId(e.target.value)}
            placeholder='receverWalletID' type="walletId" className='w-full border rounded-sm h-[10%] p-5 text-white bg-transparent' />
            <input 
             value={amount}
            onChange={(e)=>setamount(e.target.value)}
            placeholder='enter amount' type="amount" className='w-full border rounded-sm h-[10%] p-5 text-white bg-transparent' />
            <motion.button type="submit" className='w-full h-[12%] bg-green-500 rounded-md font-semibold text-lg flex justify-center items-center'>
                <h1 className='' >Transfer</h1>
            </motion.button>
         </form>

        </div>
  )  
}
