'use client';
import { Provider } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { loadUserFromStorage } from "./features/authSlice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchBaskets } from "./features/basketSlice";

export function ReduxProvider({children}:{children:React.ReactNode}){

    useEffect(()=>{
        store.dispatch(loadUserFromStorage());
        store.dispatch(fetchBaskets());
    },[])

    return (<>
         <ToastContainer position="bottom-right" />
    <Provider store={store}>{children}</Provider></>) 
}