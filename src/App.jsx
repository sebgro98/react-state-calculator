import "./App.css"
import { useState } from 'react';

function App() {

  const [calculatorState, setCalculatorState] = useState({
    panel1: 0,
    panel2: 0,
    answer: 0,
  });

  const updatePanel1 = (amount = 0) => { // sets amount to 0 if undefined or null is being passed
    setCalculatorState((prevState) => ({
      ...prevState,
      panel1: amount,
    }));
  };

  const updatePanel2 = (amount = 0) => {
    setCalculatorState((prevState) => ({
      ...prevState,
      panel2: amount,
    }));
  };
  const calculateAnswer = (operation) => {
    const { panel1, panel2 } = calculatorState;
    let result = 0;

    switch (operation) {
      case "+":
        result = panel1 + panel2;
        break;
      case "-":
        result = panel1 - panel2;
        break;
      case "*":
        result = panel1 * panel2;
        break;
      case "/":
        result = panel1 / panel2;
        break;
      default:
        break;
    }
    setCalculatorState((prevState) => ({
      ...prevState,
      answer: result,
    }));
  };

// Destructure calculatorState to use in the JSX
const { panel1, panel2, answer } = calculatorState;

  return (
    <div className="calculator">
      <div className="panel">
        <p>{panel1}</p>
        <div className="numbers">
          <button onClick={() => updatePanel1(1)}>1</button>
          <button onClick={() => updatePanel1(2)}>2</button>
          <button onClick={() => updatePanel1(3)}>3</button>
          <button onClick={() => updatePanel1(4)}>4</button>
          <button onClick={() => updatePanel1(5)}>5</button>
          <button onClick={() => updatePanel1(6)}>6</button>
          <button onClick={() => updatePanel1(7)}>7</button>
          <button onClick={() => updatePanel1(8)}>8</button>
          <button onClick={() => updatePanel1(9)}>9</button>
          <button onClick={() => updatePanel1(0)}>0</button>
          <button onClick={() => updatePanel1()}> Clear </button>
        </div>
      </div>

      <div className="panel">
        <p>+</p>
        <div className="numbers">
          <button onClick={() => calculateAnswer("+")}>+</button>
          <button onClick={() => calculateAnswer("-")}>-</button>
          <button onClick={() => calculateAnswer("*")}> *</button>
          <button onClick={() => calculateAnswer("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{panel2}</p>
        <div className="numbers">
        <button onClick={() => updatePanel2(1)}>1</button>
          <button onClick={() => updatePanel2(2)}>2</button>
          <button onClick={() => updatePanel2(3)}>3</button>
          <button onClick={() => updatePanel2(4)}>4</button>
          <button onClick={() => updatePanel2(5)}>5</button>
          <button onClick={() => updatePanel2(6)}>6</button>
          <button onClick={() => updatePanel2(7)}>7</button>
          <button onClick={() => updatePanel2(8)}>8</button>
          <button onClick={() => updatePanel2(9)}>9</button>
          <button onClick={() => updatePanel2(0)}>0</button>
          <button onClick={() => updatePanel2()} >Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
