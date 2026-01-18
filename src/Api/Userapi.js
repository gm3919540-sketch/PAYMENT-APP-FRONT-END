import axios, { api } from "../Api/axios"

export const loginuser = async(userData)=>{
    const token = await  api.post("/auth/login",userData);
    return token.data;
}
export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};