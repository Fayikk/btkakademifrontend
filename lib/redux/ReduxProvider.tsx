'use client';
import { Provider } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { loadUserFromStorage } from "./features/authSlice";
  import { ToastContainer, toast } from 'react-toastify';

export function ReduxProvider({children}:{children:React.ReactNode}){

    useEffect(()=>{
        store.dispatch(loadUserFromStorage());
    },[])

    return (<>
         <ToastContainer position="bottom-right" />
    <Provider store={store}>{children}</Provider></>) 
}