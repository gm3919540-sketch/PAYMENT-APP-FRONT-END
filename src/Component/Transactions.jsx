import React, { useEffect, useState } from 'react';
import { getAllTransactions } from '../Api/Userapi';

export const Transactions = () => {
    
    const [Transactions, setTransactions] = useState([]);
    const [page, setpage] = useState(0);
    const [total, settotal] = useState(0);
    const [Loadding, setLoadding] = useState(false);
    const [Error, setError] = useState("");
    
    const handlePrev = () => {
  if (page > 0) {
    loadTransactions(page - 1);
  }
};

const handleNext = () => {
  if (page < total - 1) {
    loadTransactions(page + 1);
  }
};

    
    const loadTransactions = async(p=0)=>{
         setError("");
         setLoadding(true);
         try{
          const data= await getAllTransactions(p,10);
          setTransactions(data.content ||[]);
         

          settotal(data.totalPages || 0)
          setpage(p);
         }catch (err) {
      setError(err.response?.data?.message || "Failed to load transactions");
    } finally {
      setLoadding(false);
    }
    }
    
     useEffect(() => {
       console.log(Transactions);
    loadTransactions(0);
  }, []);

  return (
    <div className='bg-gradient-to-br from-[#0C0E1D] via-[#211F36] to-[#616083] 
                    min-h-screen w-screen  items-start justify-center p-8'>

      <div className='w-full max-w-15xl grid grid-cols-6  text-white'>

        {/* ===== HEADERS ===== */}
        <div className='border border-white text-center font-semibold text-[3vh]'>Transaction ID</div>
        {/* <div className='border border-white text-center font-semibold'>Wallet ID</div> */}
        <div className='border border-white text-center font-semibold text-[3vh] '>Amount</div>
        <div className='border border-white text-center font-semibold text-[3vh] '>Created At</div>
        {/* <div className='border border-white text-center font-semibold'>Idempotency Key</div> */}
        <div className='border border-white text-center font-semibold text-[3vh] '>Status</div>
        <div className='border border-white text-center font-semibold text-[3vh] ' >Type</div>
        <div className='border border-white text-center font-semibold text-[3vh] '>Updated At</div>
           
           {Transactions.map((tx) => (
  <React.Fragment key={tx.transactionId}>
    <div className='border border-white text-center text-[2.5vh]'>{tx.transactionId}</div>
    {/* <div className='border border-white text-center'>{tx.walletId}</div> */}
    <div className='border border-white text-center text-[2.5vh]'>{tx.amount}</div>
    <div className='border border-white text-center text-[2.5vh]'>
      {new Date(tx.createdAt).toLocaleString()}
    </div>
    {/* <div className='border border-white text-center'>
      {tx.idempotencyKey || "NULL"}
    </div> */}
    <div
      className={`border border-white text-center font-semibold text-[2.5vh] ${
        tx.transactionStatus === "SUCCESS"
          ? "text-green-400"
          : "text-red-400"
      }`}
    >
      {tx.transactionStatus}
    </div>
    <div className='border border-white text-center text-[2.5vh]'>
      {tx.transactionType}
    </div>
    <div className='border border-white text-center text-[2.5vh]'>
      {new Date(tx.updatedAt).toLocaleString()}
    </div>
  </React.Fragment>
))}

        {/* ===== DATA ROW ===== */}
        
        

      </div>
      {/* ===== PAGINATION ===== */}
<div className="flex items-center gap-4 mt-6 text-white">

  <button
    onClick={handlePrev}
    disabled={page === 0 || Loadding}
    className={`px-4 py-2 rounded-md border 
      ${page === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-[#211F36]"}`}
  >
    ◀ Prev
  </button>

  <span className="text-[2.5vh] font-semibold">
    Page {page + 1} of {total}
  </span>
  

  <button
    onClick={handleNext}
    disabled={page === total - 1 || Loadding}
    className={`px-4 py-2 rounded-md border 
      ${page === total - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-[#211F36]"}`}
  >
    Next ▶
  </button>

</div>

    </div>
  );
};
