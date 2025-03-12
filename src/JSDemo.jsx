import React,{useState} from "react";
import JSDemoView from "./JSDemoView";
const JSDemo=()=>{
   const [count,setCount]=useState(0);
    let v1=[];
    let v=["sai","vamsi"];
    let ename="sai";
    let ename1="jhon";
    let arr=[ename,ename1]
    console.log("arr: "  +arr.ename)
    const filter =v.filter(item=>item.match("sai"))
    const map=v.map(item=>item.concat("ok"))
    console.log(v1);
    console.log("Filter Exm: "+filter);
    console.log("Map Exm: "+map)
    let data={
        email:"vamsi",
        password:"Vamsi@2001"
    }
    console.log("Oblect Exm: "+data);
    console.log("Oblect Exm: "+data.email);
    console.log("Oblect Exm: "+data.email1);
    let data1={
    }
    console.log(data1)
    const handleCount=(type)=>{
if(type==="inc"){
   setCount(count+1)
}else{
    setCount(count-1)
}
    }
    return(
       <div>
        < JSDemoView
        handleCount={handleCount}
        count={count}/>
       </div>
    )
}
export default JSDemo;