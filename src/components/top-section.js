import React from "react";
import UsedBarComponent from "./usedBar";

function TopSection(){
    const handleClick = (e) => {
        const main = document.getElementById("main");
        const word = document.getElementById("word");
        const usedText = document.getElementById("usedText");
        const DarkTheme = document.getElementById("DarkTheme");
        const LightTheme = document.getElementById("LightTheme");
        const body = document.getElementById("root");
        usedText.classList.toggle("lightText");
        //usedBar.classList.toggle("light");
        main.classList.toggle("dark");
        word.classList.toggle("lightText");
        //chances.classList.toggle("light");
        DarkTheme.classList.toggle("hidden");   
        LightTheme.classList.toggle("hidden");
        body.classList.toggle("dark");
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