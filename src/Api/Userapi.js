import axios, { api } from "../Api/axios"

export const loginuser = async(userData)=>{
    const token = await  api.post("/auth/login",userData);
    return token.data;
}
export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

export const getBalance = async ()=>{
  const response = await api.get("/wallet/balance");
  return response.data;
}

export const transferMoney = async(UserTransferRequest,idempotencyKey)=>{
  const response = await api.post("/wallet/transfer/user",UserTransferRequest,  {
      headers: {
        "Idempotency-Key": idempotencyKey
      }
    });
  return response.data;

}
export const generateIdempotencyKey = () => {
  return crypto.randomUUID();
};

export const getAllTransactions = async (page = 0, size = 10) => {
  const response = await api.get(
    `/wallet/transactions?Pagenumber=${page}&PageSize=${size}`
  );
  return response.data;
};

export const getRoleFromToken = (token) => {
  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload.roles; 
};

export const fetchAllWallet = async (page = 0, size = 10) => {
  const response = await api.get(
    `/wallet/admin/wallets?page=${page}&size=${size}`
  );
  return response.data;
};


export const freeze = async (walletId)=>{
            const response = await api.put(`/wallet/admin/wallet/${walletId}/freeze`);
            return response.data;
}

export const unfreeze = async (walletId)=>{
            const response = await api.put(`/wallet/admin/wallet/${walletId}/unfreeze`);
            return response.data;
}



