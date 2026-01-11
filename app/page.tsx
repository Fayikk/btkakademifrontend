'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Parent } from "./Components/Parent";

export default function Home() {

  const [count,setCount] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading,setIsLoading] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  const [name,setName] = useState("");
  const [users,setUsers] = useState([
    {id:1,name:'Semih',Exam1:90,Exam2:80},
    {id:2,name:'Zeynep',Exam1:85,Exam2:95},
    {id:3,name:'Nida',Exam1:78,Exam2:88},
    {id:4,name:'Mahmut',Exam1:92,Exam2:81},
    {id:5,name:'Onur',Exam1:74,Exam2:89},
  ])


  
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


  if(isLoading){
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white" style={{color:'black'}}>
        <h1> Loading... </h1>
      </div>
    )
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white" style={{color:'black'}}>
  

    <Parent></Parent>

    <button onClick={()=>router.push("/Products/33")}>Go Details</button>

    <button onClick={goToLoginPage}>Sign In</button>
  
   <button onClick={()=>setCount((x)=>x-1)} >Decrement</button>
  {/* const [isLoggedIn,setIsLoggedIn] = useState(true); */}
   
   
    {
        isLoggedIn && <div style={{color:'green'}}> Welcome User! </div>
    }

    {
        isLoggedIn ? <div style={{color:'blue'}}> You are logged in </div> : <div style={{color:'red'}}> Please log in </div>
    }

<ul>
    {
      users.map((user) => (
      <li key={user.id} >{user.name} {CalculateAvg(user.Exam1,user.Exam2)}</li>
      ))
    }

</ul>


  {/* const [name,setName] = useState(""); */}


<input onChange={(e) => setName(e.target.value)} ></input>
<h5>Your Name Is : {name}</h5>




    <h1 ref={inputRef} style={{color:'red'}} > {count} </h1>
   
   <button onClick={()=>setCount((x)=>x+1)} >Increment</button>


    <button onClick={()=>{
      if(inputRef.current){
        inputRef.current.style.color = 'orange';
      }
    }} >Change Color</button>

    <div className="mt-10" style={{color:'red'}}>
      <h2> {Sum("Sum of 5 and 10 is",5,10)}  </h2>
      <h2> Multiple of 5 and 10 is : {multiple(5,10)} </h2>
    </div>


    </div>
  );
}
