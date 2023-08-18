import React from "react";

const movie = "GADAR";
const arr = Array.from(movie);
let itemList = [];
let vowelsCount = 0;
arr.forEach((item,index)=>{
     if(item==='A'||item==='E'||item==='I'||item==='O'||item==='U'){
        itemList.push( 
            <div className='box default' id={index}>{item}</div>
        )    
        vowelsCount++;
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

 export {itemList,arr,vowelsCount}