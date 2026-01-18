import { createContext, useEffect, useState } from "react";
import { decode } from "../Function/finction";
import { useContext } from "react";



const AuthContext =createContext();



export const AuthProvider =({children})=>{
    const [token, settoken] = useState(null);

const [roles, setroles] = useState([]);

const [IsAutherized, setIsAutherized] = useState(false)

useEffect(()=>{
   const savedToken =localStorage.getItem("token");
   if(savedToken){
    const decodeToken = decode(savedToken);
    settoken(savedToken);
    setroles(decodeToken.roles || [])
    setIsAutherized(true);
   }
},[])

const login =(token)=>{
    localStorage.setItem("token",token)
    const decodeToken =decode(token);
     settoken(token);
    setroles(decodeToken.roles || [])
    setIsAutherized(true);
}

const logout =()=>{
    localStorage.removeItem("token");
    settoken(null);
    setroles([]);
    setIsAutherized(false);
}
return(
    <AuthContext.Provider value={{token,roles,IsAutherized,login,logout}}>
        {children}
    </AuthContext.Provider>
)
     

}
export const useAuth =()=>useContext(AuthContext)