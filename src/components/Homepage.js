import {Link} from "react-router-dom";
import React, { useState} from "react";

let theName = ""; 
let itemList = [];
let vowelsCount = 0;
let arr =[];
let inputText = "";
function Homepage(){

    const [theChallenge,setChallenge] = useState(theName);
    const handleChallenge= (event)=>{
        const movie = document.getElementById("movie");
        const giveMovie = document.getElementById("giveMovie");
        movie.classList.add("hidden");
        giveMovie.classList.remove("hidden");
    }


    const processInput = (event) =>{
        inputText = event.target.value.toUpperCase();
        setChallenge(inputText);
        console.log(inputText);
    }

    const processPlay = (event) =>{
        setChallenge(inputText);
        arr = Array.from(theChallenge);
        console.log(arr);
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
    }

    return(

        <div className="homepage">
            <h1>BOLLYWOOD</h1>
            <div className="movieSection" id="movie">
                <button id="challenge" onClick={handleChallenge}>Challenge</button>
            </div>
            <div className="challengeSection hidden" id="giveMovie">
                <input id="movieName" onChange={processInput}></input>
                <Link id="play" to="/main" onClick={processPlay}>Play</Link>
            </div>
        </div>
    )
}

export default Homepage;
export{theName};
export {itemList, arr, vowelsCount}


