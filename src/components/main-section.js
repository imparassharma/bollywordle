import React, { useRef } from "react";
import Block from "./CreateBlock";
import { arr } from "./Movie";
import { vowelsCount } from "./Movie";

function MainSection(){
    const myRef = useRef(null);
    let life = 9;
    let correct = 0;
    const handleClick = () => {
        const game = document.getElementById("theGame");
        const won = document.getElementById("won");
        const over = document.getElementById("lost");
        const inputValue = myRef.current.value;
        const Value = inputValue.toUpperCase();
        let index=[];
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
            const lives = document.getElementById("lives").children;
            life--;
            console.log("hey");
            lives[8-life].classList.add("wrong");
        }

        if(life===0){
           
            game.className = "theGame hidden";
            over.className = "gameOver show";
        }

        if(correct+vowelsCount === arr.length){
            game.className = "theGame hidden";
            won.className = "gameWon show";
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
                <div className="chances">
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
                    <h1>ENTER A WORD</h1>
                    <input id="guess" maxLength="1" ref={(ref) => (myRef.current = ref)}></input>
                </div>
                <div className="EnterBtn">
                    <button className="enter" onClick={handleClick} >ENTER</button>
                </div>
            </div>
        </div>
    );
}


export default MainSection;
