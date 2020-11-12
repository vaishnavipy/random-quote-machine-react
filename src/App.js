
import './App.css';
import React,{useEffect,useState} from "react";

import Quotes from "./quotes"
import BottomBar from './bottombar';


function App() {
 
  const [randomIndex,setRandomIndex] = useState(0);

  const [randomColor,setRandomColor] = useState("skyblue");

  const [quoteArrayLength,setQuoteArrayLength] = useState(0);

  

  function handleClick(){
    let randomNo = Math.floor(Math.random()*quoteArrayLength);
    setRandomIndex(randomNo)
    
  }

  useEffect(() => {
   
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
     
    
      setRandomColor(color);

  },[randomIndex])

    
  function getArrayLength(quotesLength){

    setQuoteArrayLength(quotesLength)
  }
 

  
  return (
   
    <div className="main-container" style={{backgroundColor:randomColor}}>
      <div className="quote-container">
        <Quotes randomIndex={randomIndex} color={randomColor} getArrayLength={getArrayLength}/>
        <BottomBar handleClick={handleClick} color={randomColor}/>
      </div>
    </div>
  );
}

export default App;
