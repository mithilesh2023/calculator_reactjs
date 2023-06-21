import React, { useState } from 'react';
import './App.css';
import { clear } from '@testing-library/user-event/dist/clear';

function App() {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value))
  }
  const clearDisplay = () => {
    setResult("");
  }
  const calculate = () => {
    setResult(eval(result).toString());
  }
  const percent=()=>{
    setResult(result/100)
  }
  return (
    <div className="App">
      <div className="calculator">
        <input type="text" placeholder='0' value={result} />
        <div>
          <button value="Clear" onClick={clearDisplay}>C</button>
          <button value="%" onClick={percent}>%</button>
          <button value="M+" onClick={clickHandler}>M+</button>
          <button value="M-" onClick={clickHandler} >M-</button>
        </div>
        <div>
          <button value="7" onClick={clickHandler}>7</button>
          <button value="8" onClick={clickHandler}>8</button>
          <button value="9" onClick={clickHandler}>9</button>
          <button value="*" onClick={clickHandler} >*</button>
        </div>
        <div>
          <button value="4" onClick={clickHandler}>4</button>
          <button value="5" onClick={clickHandler}>5</button>
          <button value="6" onClick={clickHandler}>6</button>
          <button value="/" onClick={clickHandler}>/</button>
        </div>
        <div>
          <button value="1" onClick={clickHandler}>1</button>
          <button value="2" onClick={clickHandler}>2</button>
          <button value="3" onClick={clickHandler}>3</button>
          <button value="+" onClick={clickHandler}>+</button>
        </div>
        <div>
          <button value="0" onClick={clickHandler}>0</button>
          <button value="." onClick={clickHandler}>.</button>
          <button value="=" onClick={calculate}>=</button>
          <button value="-" onClick={clickHandler}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
