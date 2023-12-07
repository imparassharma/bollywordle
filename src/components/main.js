import React, { useEffect, useState, useRef } from "react";
import { arr, vowelCount, wordCount, singleGame } from "./Homepage";
import { Link } from "react-router-dom";
import warningImg from "../images/warning.png";
import { itemList, lengthArr ,boxcreated} from '../components/Homepage';
let correct = 0;

function Main(){

    const [inputValue, setInputValue] = useState("");
    const [usedStr, setUsedStr] = useState("");
    const [life, setLife] = useState(9);
    const [warning, updateWarn] = useState(false);
    const [isImage, handleImage] = useState(false);
    const [correctguess, setCorrectguess] = useState([]);
    const [answer, setAnswer] = useState([]);

    const wonRef = useRef(null);
    const overRef = useRef(null);
    const gameRef = useRef(null);
    const usedRef = useRef(null);
    const topRef = useRef(null);
    const livesRef = useRef(null);
    const blockContainerRef = useRef(null);
    const howManyRef = useRef(null);
    const enterBtnRef = useRef(null);
    const wordRef = useRef(null);
    const darkthemeRef = useRef(null);
    const lightthemeRef = useRef(null);
    const mainRef = useRef(null);
    const togglebuttonRef = useRef(null);

   
    /*TopSection Manipulation*/
    const handleTheme = (e) => {
        const body = document.getElementById("body");
        const lives = livesRef.current;
        const main = mainRef.current;
        const DarkTheme = darkthemeRef.current;
        const LightTheme = lightthemeRef.current;
        const togglebtn = togglebuttonRef.current;
        const enterbtn = enterBtnRef.current;

        main.classList.toggle("dark");
        enterbtn.classList.toggle("lightText");
        DarkTheme.classList.toggle("hidden");
        LightTheme.classList.toggle("hidden");
        body.classList.toggle("dark");
        togglebtn.classList.toggle("dark");
        lives.classList.toggle("lightText");

    }

    /*Main Game Maniplulation*/

    useEffect(() => {
        for (let j = 0; j < arr.length; j++) {
            answer.push(arr[j]);
        }

        if (wordCount > 9 && boxcreated >= 3) {
            console.log('here buddy');
            const theBoxes = document.querySelectorAll(".the-box");
            const lives = livesRef.current;
            const enterbtn = enterBtnRef.current;
            const blockContainer = blockContainerRef.current;
                lives.style.fontSize = "2.5vw";
                enterbtn.style.fontSize = "1.5vw";
                theBoxes.forEach(box => {
                    box.style.width = "45vw";
                });
        }
        setCorrectguess([]);
        correct = 0;
    }, []);

    const handleBlur = (event) => {
        setInputValue(event.target.value);
    };

    const handleInput = (event) => {
        const warningImage = new Image();
        warningImage.src = warningImg;
        warningImage.onload = isImageLoaded;
        const Value = event.target.value;
        if (correctguess.includes(Value?.toUpperCase())) {
            updateWarn(true);
            setInputValue("");
            return;
        }
        updateWarn(Value?.includes("a") || Value?.includes("e") || Value?.includes("i") || Value?.includes("o") || Value?.includes("u") || Value?.includes("A") || Value?.includes("E") || Value?.includes("I") || Value?.includes("O") || Value?.includes("U"));
        setInputValue(Value);
    };

    const enterKeyPressed = (event) => {
        const Value = inputValue?.toUpperCase();
        if (event.key === "Enter") {
            if (warning === true) {
                return;
            }
            let newCorrectGuess = false;
            for (let i = 0; i < arr.length; i++) {
                setAnswer(answer);
                if (arr[i] === Value) {
                    correctguess.push(Value);
                    correct++;
                    const element = document.getElementById(i);
                    newCorrectGuess = true;
                    element.innerHTML = Value;
                    element.classList.add("green");
                    arr[i] = null;
                    if (correct === (lengthArr - vowelCount) ) {
                        gameRef.current.className = "theGame hidden";
                        wonRef.current.className = "gameWon show";
                        usedRef.current?.classList.add("hidden");
                        topRef.current?.classList.add("hidden");
                    }
                    setInputValue("");
                }
            }

            if (!newCorrectGuess) {
                const lives = livesRef.current;
                if (lives) {
                    setLife((prevLife) => prevLife - 1);
                    lives?.children[8 - (life - 1)].classList.add("wrong");
                    const newUsedStr = usedStr + Value + " ";
                    setUsedStr(newUsedStr);
                    const usedLettersElement = usedRef.current;
                    if (usedLettersElement) {
                        usedLettersElement.innerHTML = newUsedStr;
                    }
                    setInputValue("");
                }
            }

            if (life === 1) {
                gameRef.current.className = "theGame hidden";
                overRef.current.className = "gameOver show";
                usedRef.current.classList.add("hidden");
                topRef.current.classList.add("hidden");
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
        <div className='main' ref={mainRef}>
            <span id="--reflect"></span>
            {!isBlock && itemList.length === 0 && (
                            <div className="newDiv">
                                <Link id="backbtn" to="/" onClick={handleClear}>BACK</Link>
                                <h2>PLEASE GO BACK TO HOMEPAGE</h2>
                            </div>
            )}
            {/********************* Top Section********************* */}

            <div className="topContainer" ref={topRef}>
                <div className="toggle" ref={togglebuttonRef}>
                    <div className="circle1 circle" onClick={handleTheme} ref={lightthemeRef}></div>
                    <div className="circle2 circle hidden"  onClick={handleTheme} ref={darkthemeRef}></div>
                </div>
                <div className="history" id="used">
                    <div className="usedWords" ref={usedRef}></div>
                </div>
            </div>

            {/********************* Main Section********************* */}

            <div className="mainContainer">
                <div className="gameOver hidden" ref={overRef}>
                    <div className="result">
                        <h1>GAME OVER!!</h1>
                        <h2 id="ans">{answer}</h2>
                    </div>
                    <Link id="backbtn" to="/" onClick={handleClear}>BACK</Link>
                </div>
                <div className="gameWon hidden" ref={wonRef}>
                    <div className="result">
                        <h1>GAME WON!!</h1>
                        <h2 id="ans">{answer}</h2>
                    </div>
                    <Link id="backbtn" to="/" onClick={handleClear}>BACK</Link>
                </div>
                <div className="theGame" ref={gameRef}>
                    <div className="gaming-section">
                        <div className="wordsCount hidden" id="howmany" ref={howManyRef}>
                            <h2>Movie has {boxcreated} word!!</h2>
                        </div>
                        <div className="chances">
                                <h1 ref={livesRef}>
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
                            <div className="block-container" id='blockContainer' ref={blockContainerRef}>
                                {isBlock && itemList}
                            </div>
                        </div>
                    </div>
                    
                    {/********************* Bottom Section********************* */}

                    <div className="bottomSection">
                        <div className="userInput" id="userinput">
                            <h1 ref={enterBtnRef}>ENTER </h1>
                            <input id="guess" maxLength="1" value={inputValue} onChange={handleInput} onBlur={handleBlur} onKeyPress={enterKeyPressed}></input>
                        </div>
                        {warning && isImage && (
                            <div className="warning">
                                <img src={warningImg} onLoad={isImageLoaded}></img>
                                <h2>Vowels and Same guess cannot be entered!</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
