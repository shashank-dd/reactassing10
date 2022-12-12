import React ,{useState} from "react";

 export default Selection=({nextBackground,b})=>{

    let [tBackground, settBackground] = useState({ background: "" });
    return <>
    
    <div  id="gg" style={tBackground}   onClick={()=>{settBackground(nextBackground)}}>
    
    {b}
    </div>
    
    
    </>
 }
