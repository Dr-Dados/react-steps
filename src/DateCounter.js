import React, { useState } from "react";

const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  const stepHandler = (e) => {
    setStep(+e.target.value);
  };

  const addCountHandler = () => {
    setCount((count) => count + step);
  };
  const subCountHandler = () => {
    setCount((count) => count - step);
  };
  const countHandler = (e) => {
    setCount(+e.target.value);
  };
  return (
    <div className="App">
      <div>
        <input
          type="range"
          onChange={stepHandler}
          min="0"
          max="10"
          value={step}
        />
        <h3>{step}</h3>
      </div>
      <div>
        <button onClick={subCountHandler}>-</button>
        <input type="number" value={count} onChange={countHandler} />
        <button onClick={addCountHandler}>+</button>
      </div>
      <p>
        {count === 0
          ? `Today is ${date.toDateString()}`
          : `${count} days from today is ${date.toDateString()}`}
      </p>
    </div>
  );
};

export default DateCounter;
