import React, { useState } from "react";
import "./App.css";
const messages = ["learn React 🌟", "Apply for jobs", "Invest your new income"];

const App = () => {
  return <Steps />;
};

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const nextClickHandler = () => {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  };
  const previousClickHandler = () => {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  };
  const clickHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <button className="close" onClick={clickHandler}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <Message step={step}>{messages[step - 1]}</Message>
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={previousClickHandler}
            >
              👈 Previous
            </Button>
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={nextClickHandler}
            >
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
function Message({ step, children }) {
  return (
    <p className="message">
      Step {step} {children}
    </p>
  );
}
export default App;
