import {Link} from "react-router-dom";
import React, { useState} from "react";
import step1 from "../images/step1.png";
import step2 from "../images/step2.png";
import step3 from "../images/step3.png";
import step4 from "../images/step4.png";
import step5 from "../images/step5.png";
import step6 from "../images/step6.png";

let theName = ""; 
let itemList = [];
let vowelCount = 0;
let arr =[];
let inputText = "";
let wordCount = 0;
let lengthArr = 0;
let boxcreated = 0;
let singleGame = "";
function Homepage(){
    lengthArr = 0;
    itemList=[];
    vowelCount = 0;
    wordCount =0;
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
        const rightPage = document.getElementById("rightpage");

        tag.classList.add("hidden");
        bollywood.style.marginTop = "0rem";
        text.classList.add("hidden");
        movie.classList.add("hidden");
        giveMovie.classList.remove("hidden");
        rules.classList.add("hidden");
        leftpage.classList.add("hidden");
        home.style.flexDirection = "column";
        rightPage.style.height = "10vw";
    }


    const processInput = (event) =>{
        inputText = event.target.value.toUpperCase();
        setChallenge(inputText);
    }

    const processPlay = (event) =>{
        console.log("multiplayer");
        setChallenge(inputText);
        arr = Array.from(theChallenge);
        const groupedItemList = [];
        let currentWord = []; // To store letters of the current word
    
        arr.forEach((item, index) => {
            if (item === ' ') {
                currentWord.push( 
                    <div className='box blank'></div>
                ) 
                groupedItemList.push(currentWord); // Add the current word to the grouped array
                currentWord = []; // Start a new word
                boxcreated++;
            } 
            else if(item==='A'||item==='E'||item==='I'||item==='O'||item==='U'){
                currentWord.push( 
                    <div className='box default' id={index}>{item}</div>
                ) 
                vowelCount++;
                wordCount++;
                lengthArr++;
            }   
            else {
                currentWord.push(
                    <div className='box' id={index}></div>
                );
                wordCount++;
                lengthArr++;
            }
        });
    
        if (currentWord.length > 0) {
            groupedItemList.push(currentWord); // Add the last word if it's not empty
        }
        itemList = groupedItemList.map((wordArray, wordIndex) => (
            <div key={wordIndex} className="word-block" id="theBoxes">
                {wordArray}
            </div>
        ));
    }

    const singlePlayer =(event) =>{
        singleGame = "GHAJINI";
        arr= Array.from(singleGame);
        const groupedItemList = [];
        let currentWord = []; // To store letters of the current word
    
        arr.forEach((item, index) => {
            if (item === ' ') {
                currentWord.push( 
                    <div className='box blank'></div>
                ) 
                groupedItemList.push(currentWord); // Add the current word to the grouped array
                currentWord = []; // Start a new word
            } 
            else if(item==='A'||item==='E'||item==='I'||item==='O'||item==='U'){
                currentWord.push( 
                    <div className='box default' id={index}>{item}</div>
                ) 
                vowelCount++;
                wordCount++;
                lengthArr++;
            }   
            else {
                currentWord.push(
                    <div className='box' id={index}></div>
                );
                wordCount++;
                lengthArr++;
            }
        });

        if (currentWord.length > 0) {
            groupedItemList.push(currentWord); // Add the last word if it's not empty
        }

        itemList = groupedItemList.map((wordArray, wordIndex) => (
            <div key={wordIndex} className="word-block" id="theBoxes">
                {wordArray}
            </div>
        ));
    }

    const handleRules = (event) =>{
        const theRules = document.getElementById("theRules");
        const text = document.getElementById("text");
        theRules.classList.remove("hidden");
        text.style.zIndex = "-1";
    }

    const handleClose = (event) =>{
        const theRules = document.getElementById("theRules");
        theRules.classList.add("hidden");
        const text = document.getElementById("text");
        text.style.zIndex = 1;
    }

    return(

        <div className="homepage" id="home">
            <div className="ruleSection hidden" id="theRules">
                <div className="close">
                    <h3 onClick={handleClose} id="closebtn">X</h3>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Step1</h2>
                        <p>The number of blocks here indicates the length of the movie.</p>
                        <p>All the Vowels in the movie name will be visible to the player by default.</p>
                    </div>
                    <img src={step1}></img>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Step2</h2>
                        <p>This section indicates the number of lives.</p>
                        <p>9 Letters = 9 Life</p>
                    </div>
                    <img src={step2}></img>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Step3</h2>
                        <p>This is the interactive section where player will make a guess!</p>
                    </div>
                    <img src={step3}></img>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Step4</h2>
                        <p>If the guess made by the player is <span id="greenText">correct</span>, It will be filled in its correct position</p>
                    </div>
                    <img src={step4}></img>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Step5</h2>
                        <p>If the guess made by the player is <span id="redText">wrong</span>, One life will be deducted!</p>
                    </div>
                    <img src={step5}></img>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Step6</h2>
                        <p>This is the section where player can see the previous guess made</p>
                    </div>
                    <img src={step6}></img>
                </div>
            </div>
            <div className="rightPage" id="rightpage">
                <h3 id="tag">@im_pararsharma</h3>
                <div className="title">
                    <h1 id="bollywood"><span id="B">B</span>OLLYWOOD</h1>
                    <div className="text hidden" id="text">
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
                        <Link id="play" to="/main" onClick={singlePlayer}><h2>Play</h2></Link>
                </div>
                <div className="container" id="movie">
                        <button id="challenge" onClick={handleChallenge}><h2>Challenge</h2></button>
                </div>
                <div className="container" id="rules">
                        <h2 onClick={handleRules}>RULES</h2>
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
export {itemList, arr, vowelCount, wordCount,lengthArr ,boxcreated, singleGame}


