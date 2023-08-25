import React, { useEffect, useState } from "react";
import { arr, vowelCount, wordCount ,singleGame } from "./Homepage";
import { Link } from "react-router-dom";
import warningImg from "../images/warning.png";
import { itemList, lengthArr ,boxcreated} from '../components/Homepage';
let correct = 0;
function MainSection() {
    const [inputValue, setInputValue] = useState("");
    const [usedStr, setUsedStr] = useState("");
    const [life, setLife] = useState(9);
    const [warning,updateWarn] = useState(false);
    const [isImage,handleImage] = useState(false);
    const [correctguess, setCorrectguess] = useState([]);
    const [answer,setAnswer] = useState([]);

    const game = document.getElementById("theGame");
    const won = document.getElementById("won");
    const over = document.getElementById("lost");
    const Value = inputValue.toUpperCase();
    const used = document.getElementById("used");
    const top = document.getElementById("top");


    useEffect(() => {
        for(let j=0;j<arr.length;j++){
            answer.push(arr[j]);
        }

        console.log(wordCount);
        if (wordCount >9 && boxcreated>=2) {
            const theBoxes = document.querySelectorAll(".the-box");
            const lives = document.getElementById("lives");
            const enterbtn = document.getElementById("word");
            const blockContainer = document.getElementById("blockContainer");
            if(theBoxes)
            {
                lives.style.fontSize = "3.5vw";
                blockContainer.style.gap = "1vw";
                enterbtn.style.fontSize = "1.5vw";
                theBoxes.forEach(box => {
                    box.style.width = "45vw";
                });
            }
        }

        if(wordCount>7 && window.innerWidth<400){
            const howmany = document.getElementById("howmany");
            if(boxcreated==1){
                howmany.classList.remove("hidden");
            }
        }
        setCorrectguess([]);
        correct=0;
    }, []);

    const handleBlur = (event) => {
        setInputValue(event.target.value);
    };

    const handleInput = (event) => {
        const warningImage = new Image();
        warningImage.src = warningImg;
        warningImage.onload = isImageLoaded;
        const Value = event.target.value;
        if(correctguess.includes(event.target.value.toUpperCase())){
            updateWarn(true);
            setInputValue("");
            return;
        }
        updateWarn(Value.includes("a") || Value.includes("e") || Value.includes("i") || Value.includes("o") || Value.includes("u") ||Value.includes("A") || Value.includes("E") || Value.includes("I") || Value.includes("O") || Value.includes("U"));
        setInputValue(Value);
    };
    const enterKeyPressed= (event) =>{
        
        if(event.key==="Enter") //function activated if pressed key is enter
        {
            if(warning===true){
                return;
            }
            let newCorrectGuess = false;
            for(let i=0;i<arr.length;i++){
                setAnswer(answer);
                if(arr[i]===Value){ //to check if correctValue guess is made again so no increment then
                    correctguess.push(Value);
                    correct++;
                    const element = document.getElementById(i);
                    newCorrectGuess = true;
                    element.innerHTML = Value;
                    element.classList.add("green");
                    arr[i] = null;
                    if (correct === (lengthArr-vowelCount)) {
                        if (game && won && used && top) {
                            game.className = "theGame hidden";
                            won.className = "gameWon show";
                            used.classList.add("hidden");
                            top.classList.add("hidden");
                        }
                    }
                    setInputValue("");  //pushing the index where value is matched
                }
            }
            
            if(!newCorrectGuess){
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
                setCorrectguess([]);
            }
        }
    }

    const isImageLoaded = () => {
        handleImage(true);
    };

    const handleClear = (event) => {
        setCorrectguess([]);
        console.log("handleClear");
    }

    const isBlock = itemList && itemList.length > 0; 

    return(
        <div className="mainContainer" id="mainC">
            <div className="gameOver hidden" id="lost">
                <div className="result">
                    <h1>GAME OVER!!</h1>
                    <h2 id="ans">{answer}</h2>
                </div>
                <Link id="backbtn" to="/" onClick={handleClear} >BACK</Link>
            </div>
            <div className="gameWon hidden" id="won">
                <div className="result">
                    <h1>GAME WON!!</h1>
                    <h2 id="ans">{answer}</h2>
                </div>
                <Link id="backbtn" to="/" onClick={handleClear}>BACK</Link>
            </div>
            <div className="theGame" id="theGame">
                <div className="wordsCount hidden" id="howmany">
                    <h2>Movie has {boxcreated} word!!</h2>
                </div>
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
                        <div className="block-container" id='blockContainer'>
                        {isBlock && itemList} 
                        </div>
                </div>
                {!isBlock && itemList.length === 0 && (
                <div className="newDiv">
                    <Link id="backbtn" to="/" onClick={handleClear}>BACK</Link>
                    <h2>PLEASE GO BACK TO HOMEPAGE</h2>
                </div>
                )}
                <div className="bottomSection">
                    <div className="userInput" id="userinput">
                        <h1 id="word">ENTER </h1>
                        <input id="guess" maxLength="1"  value={inputValue} onChange={handleInput} onBlur={handleBlur} onKeyPress={enterKeyPressed}></input>
                    </div>
                    {warning && isImage &&
                        <div className="warning" id="warn">
                                <img src={warningImg} onLoad={isImageLoaded}></img>
                                <h2>Vowels and Same guess cannot be entered!</h2>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default MainSection;
