import React, { useState } from "react";
import quotesArray from "../quotesArray.json";
import NextButton from "./NextButton";

const getRandom2 = () => Math.floor(Math.random() * quotesArray.length);

const colors = [
  
  "#CE77D7",
  "#FF78BA",
  "#FF8A96",
  "#FFAB76",
  "#FFD264",
];  

const QuoteBox = () => {
  
  const [quoteShown, setQuote] = useState(quotesArray[getRandom2()]);
  

  const changeQuote = () => {
    const random = getRandom2();
    setQuote(quotesArray[random]);
  };

  const color = colors[Math.floor(Math.random() * colors.length)];

  document.body.style = `background: ${color}`;

  
  return (
    <div className="card" style={{ color: color }}>
      
      <div className="quote">
        <span class="material-icons-outlined quote-icon reverse-font">format_quote</span>
        <p>
          
          {quoteShown.quote}
        </p>
      </div>
      
      <p className="author">
        {quoteShown.author}
      </p>
      <NextButton changeQuote={changeQuote} color={color}/>
      
      
    </div>
  );
};

export default QuoteBox;