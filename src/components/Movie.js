import React from "react";

const movie = "KOI MIL GAYA";
const arr = Array.from(movie);
let itemList = [];
        
arr.forEach((item,index)=>{
     if(item==='A'||item==='E'||item==='I'||item==='O'||item==='U'){
        itemList.push( 
            <div className='box' id={index}>{item}</div>
        )    
    }
    else if(item===' '){
        itemList.push(
            <div></div>
        )
     }
    else{
        itemList.push( 
        <div className='box' id={index}></div>
         )   
    }    
 })

 export {itemList,arr}