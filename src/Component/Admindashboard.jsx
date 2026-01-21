import React, { useEffect } from 'react'
import { fetchAllWallet, freeze, unfreeze } from '../Api/Userapi'
import { useState } from 'react'

export const Admindashboard = () => {
  const [wallet, setwallet] = useState([])
  const [page, setpage] = useState(0);
  const [totalpage, settotalpage] = useState(0);
  const [filterId, setFilterId] = useState("");
 


    
  const handlePre =()=>{
    if(page>0){
    updateWallet(page-1);
    }
  }

  const handleNext =()=>{
       if(page<totalpage-1){
        updateWallet(page+1);
       }
  }


  const updateWallet = async(p=0)=>{
    try{
       const w = await fetchAllWallet(p);
       setwallet(w.content);
       console.log(w.content);
       settotalpage(w.totalPages)
       setpage(p);
    }catch(err){
      console.log(err);
    }

  }
  useEffect(()=>{
     updateWallet();
  },[])


   const filteredWallets =
  filterId === ""
    ? wallet
    : wallet.filter(
        (ele) => ele.walletId === Number(filterId)
      );
  
  return (
     <div className='bg-gradient-to-br from-[#0C0E1D] via-[#211F36] to-[#616083] h-screen w-screen py-8 px-2 flex flex-col items-center gap-[40px]  '>
          
          <input
  type="text"
  placeholder="Search by Wallet ID"
  value={filterId}
  onChange={(e) => setFilterId(e.target.value)}
  className="px-3 py-2 rounded outline-none border border-white text-white"
/>


       

        <table className="w-full border-collapse text-center">
          
  <thead>
    <tr className="border-b border-gray-400">
     <th className="p-2 text-white"  >ID</th>
              {/* <th className='text-white'>Email</th> */}
              <th className='text-white'>Balance</th>
              <th className='text-white'>Status</th>
              <th className='text-white' > Action</th>
    </tr>
  </thead>
   <tbody>

  { filteredWallets.map((ele,i)=>(

     
    <tr key={i}>
      <td className="px-4 py-2 text-white ">{ele.walletId}</td>
      {/* <td className="px-4 py-2 text-white ">{ele.user?.email}</td> */}
      <td className="px-4 py-2 text-white ">{ele.balance}</td>
      <td className="px-4 py-2 text-white ">{ele.walletStatus}</td>
      <td>
      {(ele.walletStatus ==="ACTIVE")?
       (<button
        disabled={page === 0}
        className="bg-red-600 text-white px-2 py-1 rounded"
       onClick={()=>freeze(ele.walletId).then(()=>updateWallet(page))}
       >Freez</button>):(
         <button 
         disabled={page === totalpage-1}
         className="bg-green-600 text-white px-2 py-1 rounded"
       onClick={()=>unfreeze(ele.walletId).then(()=>updateWallet(page))}
       >Unfreez</button>
       )
    
    }
    </td>
    </tr>
  
  ))

}
</tbody>
  
</table>
{(filterId=="")?(
 <div className='w-[30%] h-[20%] flex gap-[20px] p-4'>
  <button
     onClick={()=>handlePre()}
  className='w-[80px] h-[40px] rounded border border-white text-white' >
    Prev
  </button>
  <h1 className='font-bold text-[2.5vh]'>Page {page + 1} of {totalpage} </h1>
  <button
    onClick={()=>handleNext()}
  className='w-[80px] h-[40px] rounded border border-white text-white' >
    next
  </button>

 </div>):(<h1></h1>)}

      
     </div>
  )
}
