import React, { useRef } from "react";
import UsedBarComponent from "./usedBar";

function TopSection(){
    const handleClick = (e) => {
        const theme = document.getElementById("theme");
        const main = document.getElementById("main");
        const chances = document.getElementById("chances");
        const usedBar = document.getElementById("usedBar");
        const word = document.getElementById("word");
        const usedText = document.getElementById("usedText");
        usedText.classList.toggle("lightText");
        usedBar.classList.toggle("light");
        main.classList.toggle("dark");
        theme.classList.toggle("light");
        word.classList.toggle("lightText");
        chances.classList.toggle("light");
            
    }
  
    return(
        <div className="topContainer">
            <div className="bgcolor">
                <div className="circle" onClick={handleClick} id="theme"></div>
            </div>
            <div className="history" id="used">
                <h1 id="usedText">Used Words!</h1>
                <UsedBarComponent/>
        </div>
        </div>
    );
}

export default TopSection;