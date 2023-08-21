import React, { useRef, useState } from "react";
import UsedBarComponent from "./usedBar";

function TopSection(){
    const handleClick = (e) => {
        const theme = document.getElementById("theme");
        const main = document.getElementById("main");
        const chances = document.getElementById("chances");
        const usedBar = document.getElementById("usedBar");
        const word = document.getElementById("word");
        const usedText = document.getElementById("usedText");
        const DarkTheme = document.getElementById("DarkTheme");
        const LightTheme = document.getElementById("LightTheme");
        usedText.classList.toggle("lightText");
        //usedBar.classList.toggle("light");
        main.classList.toggle("dark");
        word.classList.toggle("lightText");
        //chances.classList.toggle("light");
        DarkTheme.classList.toggle("hidden");   
        LightTheme.classList.toggle("hidden");
    }

  
    return(
        <div className="topContainer" id="top">
            <div className="toggle">
                <div className="circle" onClick={handleClick} id="LightTheme"></div>
                <div className="circle hidden"  onClick={handleClick} id="DarkTheme"></div>
            </div>
            <div className="history" id="used">
                <h1 id="usedText">HISTORY</h1>
                <UsedBarComponent/>
            </div>
        </div>
    );
}

export default TopSection;