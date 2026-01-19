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
