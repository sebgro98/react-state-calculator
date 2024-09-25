import "./App.css"
import { useState } from 'react';

function App() {

  const [storedValue, setStoreValue] = useState(0);

  const [calculatorState, setCalculatorState] = useState({
    panel1: 0,
    panel2: 0,
    operation: "",
    result: 0,
  });

const storeValue = (value) => {
    setStoreValue(value);
}

const retriveStoredValuePanel1 = () => {
  setCalculatorState((prevState) => ({
    ...prevState,
    panel1: storedValue

  }))
}

  const retriveStoredValuePanel2 = () => {
    setCalculatorState((prevState) => ({
      ...prevState,
      panel2: storedValue
  
    }))

} 

  const updatePanel1 = (amount) => {
    if(amount === undefined) {
      setCalculatorState((prevState) => ({
        ...prevState,
        panel1: 0
      }));
    } else {
      setCalculatorState((prevState) => ({
        ...prevState,
        panel1: Number(`${prevState.panel1}${amount}`)
      }));
    }  
  };

  const updatePanel2 = (amount) => {
    if(amount === undefined) {
      setCalculatorState((prevState) => ({
        ...prevState,
        panel2: 0
      }));
    } else {
      setCalculatorState((prevState) => ({
        ...prevState,
        panel2: Number(`${prevState.panel2}${amount}`)
      }));
    }  
  };
  
  const calculateAnswer = (operation) => {
    setCalculatorState((prevState) => ({
      ...prevState,
      operation: operation
    })) 
  };

  const getAnswer = () => {
    const { operation, panel1, panel2 } = calculatorState;
    console.log(operation);
  
    if (operation === "+") {
      setCalculatorState((prevState) => ({
        ...prevState,
        result: panel1 + panel2,
      }));
    } else if (operation === "-") {
      setCalculatorState((prevState) => ({
        ...prevState,
        result: panel1 - panel2,
      }));
    } else if (operation === "*") {
      setCalculatorState((prevState) => ({
        ...prevState,
        result: panel1 * panel2,
      }));
    } else if (operation === "/") {
      setCalculatorState((prevState) => ({
        ...prevState,
        result: panel1 / panel2,
      }));
    }
  };

const { panel1, panel2, result } = calculatorState;

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
          <button onClick={() => retriveStoredValuePanel1()}> recall </button>
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
          <button onClick={() => retriveStoredValuePanel2()}> recall </button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button  onClick={() => getAnswer()} >=</button>
          <button  onClick={() => storeValue(result)}> store value</button>
        </div>
      </div>
    </div>
  )
}

export default App
