'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Parent } from "./Components/Parent";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { fetchCategories } from "@/lib/redux/features/categorySlice";
export default function Home() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category);


  const [count,setCount] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  const [name,setName] = useState("");
  const [users,setUsers] = useState([
    {id:1,name:'Semih',Exam1:90,Exam2:80},
    {id:2,name:'Zeynep',Exam1:85,Exam2:95},
    {id:3,name:'Nida',Exam1:78,Exam2:88},
    {id:4,name:'Mahmut',Exam1:92,Exam2:81},
    {id:5,name:'Onur',Exam1:74,Exam2:89},
  ])




  useEffect(()=>{
    const fetchData = async () => {
      await dispatch(fetchCategories()).unwrap();
    };
    fetchData();
  },[dispatch])





  
  const goToLoginPage = () => {
    router.push("/Login");
  }
  
  useEffect(()=>{
    console.log("Component Mounted");

  },[])


useEffect(()=>{
    console.log("When Changed Count Trigger This" , count);

  },[count])


  function Sum(text:String,a:number,b:number){
    return text + ": " + (a + b); 
  }

  function CalculateAvg(a:number,b:number){
    return (a + b)/2; 
  }

  const multiple = (a:number,b:number) => {
    return a * b;
  }


  if(categories.isLoading){
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white" style={{color:'black'}}>
        <h1> Loading... </h1>
      </div>
    )
  }

  console.log("categories:",categories);


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white" style={{color:'black'}}>
  

      <ul>
        {
          categories?.categories && categories.categories.data.length > 0 && 
          (
            categories.categories.data.map((category) => (
              <li key={category.id}>{category.id} - {category.categoryName} - {category.description}</li>
            ))
          ) 
        }
      </ul>

    </div>
  );
}
