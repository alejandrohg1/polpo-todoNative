import { create } from "zustand";

const useAuthStore = create((set)=>({
  user:{
    isLoggedIn:false,
    payload:null
  },
  setUser:(payload)=>set({user:{isLoggedIn:true,payload}}),
  removeUser:()=>set({user:{isLoggedIn:false,payload:null}})


  
}))


export default useAuthStore;