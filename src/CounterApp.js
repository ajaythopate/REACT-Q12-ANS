import React, { useState } from 'react';
import './CounterApp.css';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <div className="counter-container">
        <button className="counter-button" onClick={decrement}>
          -
        </button>
        <span className="counter-value">{count}</span>
        <button className="counter-button" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
