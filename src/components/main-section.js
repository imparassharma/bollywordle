import React, { useRef } from "react";
import Block from "./CreateBlock";
import { arr } from "./Movie";


function MainSection(){
    const myRef = useRef(null);
    const handleClick = () => {
        const inputValue = myRef.current.value;
        const Value = inputValue.toUpperCase();
        let index=[];
        for(let i=0;i<arr.length;i++){
            if(arr[i]==Value){
                index.push(i);
            }
        }
        for(let i=0;i<index.length;i++){
            const element = document.getElementById(index[i]);
            element.innerHTML = Value;
        }
    }

    return(
        <div className="mainContainer">
            <div className="theGame">
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
