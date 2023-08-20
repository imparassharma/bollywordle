import React, { useState } from "react";
import Block from "./CreateBlock";
import { arr } from "./Movie";
import { vowelsCount } from "./Movie";
import UsedBarComponent from "./usedBar";


function MainSection(){
    
    const [inputValue, setInputValue] = useState("");
    const [usedStr, setUsedStr] = useState("");
    const [life, setLife] = useState(9);
    let correct = 0;
    const game = document.getElementById("theGame");
    const won = document.getElementById("won");
    const over = document.getElementById("lost");
    const Value = inputValue.toUpperCase();
    const usedBar = document.getElementById("usedBar");
    let index=[];

    const handleBlur = (event) => {
        setInputValue(event.target.value);
    };


    const enterKeyPressed= (event) =>{
        if(event.key=="Enter")
        {
            for(let i=0;i<arr.length;i++){
                if(arr[i]===Value){
                    correct++;
                    console.log(correct);
                    index.push(i);
                }
            }
            for(let i=0;i<index.length;i++){
                const element = document.getElementById(index[i]);
                element.innerHTML = Value;
                element.classList.add("green");
            }

            if(!arr.includes(Value)){
                console.log("wrong");
                const lives = document.getElementById("lives").children;
                setLife((prevLife) => prevLife - 1);
                lives[8- (life-1)].classList.add("wrong");
                const newUsedStr = usedStr + Value + ", ";
                setUsedStr(newUsedStr)
                const usedLettersElement = document.getElementById("usedBar");
                usedLettersElement.innerHTML = newUsedStr;
            }

            if(life===1){
            
                game.className = "theGame hidden";
                over.className = "gameOver show";
            }

            if(correct+vowelsCount === arr.length){
                game.className = "theGame hidden";
                won.className = "gameWon show";
            }

        }
    }

    return(
        <div className="mainContainer">
            <div className="gameOver hidden" id="lost">
                <h1>GAME OVER!!</h1>
            </div>
            <div className="gameWon hidden" id="won">
                <h1>YOU WON!!</h1>
            </div>
            <div className="theGame" id="theGame">
                <div className="chances" id="chances">
                    <h1 id="lives">
                        <span id="B">B</span>
                        <span id="O">O</span>
                        <span id="L">L</span>
                        <span id="L">L</span>
                        <span id="Y">Y</span>
                        <span id="W">W</span>
                        <span id="O">O</span>
                        <span id="O">O</span>
                        <span id="D">D</span>
                    </h1>
                </div>
                <div className="play-section">
                    <Block/>
                </div>
                <div className="userInput">
                    <h1 id="word">ENTER A WORD</h1>
                    <input id="guess" maxLength="1"  value={inputValue} onChange={(e) => setInputValue(e.target.value)}  onBlur={handleBlur} onKeyPress={enterKeyPressed}></input>
                </div>
            </div>
        </div>
    );
    }

export default MainSection;
