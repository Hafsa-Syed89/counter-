import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        // Replace × and ÷ for evaluation
        const expression = input.replace(/×/g, "*").replace(/÷/g, "/");
        setInput(eval(expression).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "C", "÷", "×", "⌫",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", ".", 
  ];

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => {
              if (btn === "⌫") {
                setInput(input.slice(0, -1));
              } else {
                handleClick(btn);
              }
            }}
            className={btn === "=" ? "equals" : btn === "C" ? "clear" : ""}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
