import React from "react";
import "../counter-css/counter.css";
import Navigation from "./Navigation";

// Import React hooks here
import { useState } from "react";
export default function Counter() {
  // Implement your counter state here
  const [count, setCount] = useState(0);
  // Implement the increment function here
  function incrementCounter() {
    setCount((count) => count + 1);
  }
  return (
    <>
      <div className="navigation">
        <Navigation />
      </div>

      <div className="counter-container">
        <h1>Counter</h1>

        {/* Display the count here */}
        <div className="count">{count}</div>

        {/* Add the increment button here */}
        <button onClick={incrementCounter} className="increment-button">
          Increment
        </button>
      </div>
    </>
  );
}
