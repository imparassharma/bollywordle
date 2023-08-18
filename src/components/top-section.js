import React, { useRef } from "react";

function TopSection(){
    const handleClick = (e) => {
        const colors = document.querySelectorAll(".circle");
        const main = document.querySelector(".main")
        console.log(colors);

                const circle = e.currentTarget;
                const bg_color = circle.classList[1];
                colors.forEach(function(c){
                    c.classList.remove("current");
                })
            
                main.className = "main "+bg_color+"_theme";
                circle.classList.add("current");
            
    }
  
    return(
        <div className="topContainer">
            <div className="bgcolor">
                <div className="circle white current" onClick={handleClick}></div>
                <div className="circle red" onClick={handleClick}></div>
                <div className="circle blue" onClick={handleClick}></div>
                <div className="circle yellow" onClick={handleClick}></div>
                <div className="circle purple" onClick={handleClick}></div>
            </div>
        </div>
    );
}

export default TopSection;