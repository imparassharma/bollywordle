import React, { useEffect, useState } from "react";
import Block from "./CreateBlock";
import {arr,vowelsCount} from "./Homepage";
import {Link} from "react-router-dom";
import warningImg from "../images/warning.png";


function MainSection(){
    
    const [inputValue, setInputValue] = useState("");
    const [usedStr, setUsedStr] = useState("");
    const [life, setLife] = useState(9);
    const [index, setindex] = useState(new Set());
    const [correct,setcorrect] = useState(vowelsCount);
    const [warning,updateWarn] = useState(false);
    const [isImage,handleImage] = useState(false);
    const [clearFlag, setclearFlag] = useState(false);

    const game = document.getElementById("theGame");
    const blockContainer = document.getElementById("blockContainer");


    const won = document.getElementById("won");
    const over = document.getElementById("lost");
    const Value = inputValue.toUpperCase();
    const used = document.getElementById("used");
    const top = document.getElementById("top");


    const handleBlur = (event) => {  //whenever any action taken after entering input value it will update/store that value
        setInputValue(event.target.value);
              
    };

    const handleInput = (event)=>{
        const Value = event.target.value;
        setInputValue(Value);
        console.log(Value);
        updateWarn(Value.includes("a") ||Value.includes("e") || Value.includes("i")||Value.includes("o")||Value.includes("u"))
    }
    
    const enterKeyPressed= (event) =>{
        if(event.key==="Enter") //function activated if pressed key is enter
        {
            console.log(warning);
            if(warning===true){
                return;
            }
            let updatedCorrect = correct;
            for(let i=0;i<arr.length;i++){
                if(arr[i]===Value && !index.has(i) && Value!==["A","E","I","O","U"]){ //to check if correct guess is made again so no increment then
                    updatedCorrect++;  //if correct guess incrementing the correct value to keep check on correct guess
                    setindex((prevIndex) => new Set(prevIndex).add(i));  //pushing the index where value is matched
                }
            }
            setcorrect(updatedCorrect);

            if(!arr.includes(Value)){
                const lives = document.getElementById("lives").children;  //accessing all the lives individually
                setLife((prevLife) => prevLife - 1);  //9 lives initally and on each miss -> decrementing it
                lives[8- (life-1)].classList.add("wrong");  //adding red color to show it is a wrong guess
                const newUsedStr = usedStr + Value + " ";  //concatinating all the words that are wrong so player can see which wrong guess he had already made
                setUsedStr(newUsedStr); //setting the new string value
                const usedLettersElement = document.getElementById("usedBar");
                usedLettersElement.innerHTML = newUsedStr;
                setInputValue("");
            }

            if(life===1){ //when lives are 0 then game over message is generated
                game.className = "theGame hidden";
                over.className = "gameOver show";
                used.classList.add("hidden");
                top.classList.add("hidden");
            }
        }
    }
    useEffect(()=>{
        index.forEach((currentIndex) => {
            const element = document.getElementById(currentIndex);
            if(!element.classList.contains("green"))
            {
                element.innerHTML = Value;
                element.classList.add("green");
            }
            setInputValue("");
        })
    },[index,Value]);

    //To keep check if all the correct guess are made
    useEffect(()=>{
        if(correct === arr.length){  //won the game
            game.className = "theGame hidden";
            won.className = "gameWon show";
            used.classList.add("hidden");
            top.classList.add("hidden");
        }
    },[correct,game,won,used.classList,top.classList]);

    const isImageLoaded = () => {
        handleImage(true);
    };

    //to let the image load and then show the warning message
    useEffect(() => {
        const warningImage = new Image();
        warningImage.src = warningImg; // Load the image
        warningImage.onload = isImageLoaded; // Set the onLoad event handler
    }, []);

   /*useEffect(() => {
        console.log(life);
        const main = document.getElementById("main");
        if (life <= 5) {
          main.classList.add("low_life");
        } else if (life ==3) {
          main.classList.remove("low_life");
          main.classList.add("verylow_life");
        } else if(life==2){
          main.classList.remove("veryLowLife");
          main.classList.add("panic_life");
        }
      }, [life]);*/

      const handleClear =(event) =>{
            setclearFlag(true);
      }
      
      useEffect(() => {
        const blockContainer = document.getElementById("blockContainer");
        blockContainer.innerHTML = "";
    }, [clearFlag]);



    return(
        <div className="mainContainer">
            <div className="gameOver hidden" id="lost">
                <div className="result">
                    <h1>GAME OVER!!</h1>
                    <h2 id="ans">{arr}</h2>
                </div>
                <Link id="backbtn" to="/" onClick={handleClear} >BACK</Link>
            </div>
            <div className="gameWon hidden" id="won">
                <div className="result">
                    <h1>GAME WON!!</h1>
                    <h2 id="ans">{arr}</h2>
                </div>
                <Link id="backbtn" to="/" onClick={handleClear}>BACK</Link>
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
                <div className="bottomSection">
                    <div className="userInput">
                        <h1 id="word">ENTER </h1>
                        <input id="guess" maxLength="1"  value={inputValue} onChange={handleInput} onBlur={handleBlur} onKeyPress={enterKeyPressed}></input>
                    </div>
                    {warning && isImage &&
                        <div className="warning" id="warn">
                                <img src={warningImg} onLoad={isImageLoaded}></img>
                                <h2>Vowel cannot be entered!</h2>
                        </div>}
                </div>
            </div>
        </div>
    );
    }

export default MainSection;
