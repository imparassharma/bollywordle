import {Link} from "react-router-dom";
import React, { useState} from "react";

let theName = ""; 
let itemList = [];
let vowelCount = 0;
let arr =[];
let inputText = "";
function Homepage(){
    itemList=[];
    vowelCount = 0;
    console.log(itemList);
    const [theChallenge,setChallenge] = useState(theName);
    const handleChallenge= (event)=>{
        const movie = document.getElementById("movie");
        const giveMovie = document.getElementById("giveMovie");
        const rules = document.getElementById("rules");
        const leftpage = document.getElementById("leftpage");
        const home = document.getElementById("home");
        const text = document.getElementById("text");
        const bollywood = document.getElementById("bollywood");
        const tag = document.getElementById("tag");

        tag.classList.add("hidden");
        bollywood.style.marginTop = "-25rem";
        text.classList.add("hidden");
        movie.classList.add("hidden");
        giveMovie.classList.remove("hidden");
        rules.classList.add("hidden");
        leftpage.classList.add("hidden");
        home.style.flexDirection = "column";
        giveMovie.style.marginTop = "-30rem";
    }


    const processInput = (event) =>{
        inputText = event.target.value.toUpperCase();
        setChallenge(inputText);
    }

    const processPlay = (event) =>{
        setChallenge(inputText);
        arr = Array.from(theChallenge);
        arr.forEach((item,index)=>{
            if(item==='A'||item==='E'||item==='I'||item==='O'||item==='U'){
                itemList.push( 
                    <div className='box default' id={index}>{item}</div>
                )    
                vowelCount++;
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

        <div className="homepage" id="home">
            <div className="rightPage">
                <h3 id="tag">@im_pararsharma</h3>
                <div className="title">
                    <h1 id="bollywood"><span id="B">B</span>OLLYWOOD</h1>
                    <div className="text" id="text">
                        <h3 id="bahubali">BAHUBALI</h3>
                        <h3 id="october">OCTOBER</h3>
                        <h3 id="lagaan">LAGAAN</h3>
                        <h3 id="ludo">LUDO</h3>
                        <h3 id="yuva">YUVA</h3>
                        <h3 id="welcome">WELCOME</h3>
                        <h3 id="om">OM SHANTI OM</h3>
                        <h3 id="omg">OH MY GOD</h3>
                        <h3 id="don">DON</h3>
                    </div>
                </div>
            </div>
            <div className="leftPage" id="leftpage">
                <div className="container" id="movie">
                        <button id="challenge" onClick={handleChallenge}><h2>Challenge</h2></button>
                </div>
                <div className="container" id="rules">
                        <h2>RULES</h2>
                </div>
            </div>
            <div className="challengeSection hidden" id="giveMovie">
                <input id="movieName" onChange={processInput} autoComplete="off" placeholder="Enter Movie Name"></input>
                <Link id="play" to="/main" onClick={processPlay}><h2>Play</h2></Link>
            </div>
        </div>
    )
}

export default Homepage;
export{theName};
export {itemList, arr, vowelCount}


