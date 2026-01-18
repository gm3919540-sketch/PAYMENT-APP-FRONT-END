
export  const decode =(token)=>{
    try{
    const Payload = token.split(".")[1];
    const decodePayload = atob(Payload);
    return JSON.parse(decodePayload);
    }catch (error){
          console.log("not able to decode token")
    }

}