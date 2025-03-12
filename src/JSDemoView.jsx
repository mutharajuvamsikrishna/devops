import React,{useState} from "react";
const JSDemoView=({handleCount,count})=>{
return(
    <div>
         <>
        <div className="flex justify-content-center align-items-center">
          
            <p>{count}</p>
            <button className="btn btn-primary" onClick={()=>handleCount("inc")}>Increament</button>
            <button className="btn btn-primary" onClick={()=>handleCount("dec")}>decreament</button>
            
        </div>
        
        </>
    </div>
)
}
export default JSDemoView;