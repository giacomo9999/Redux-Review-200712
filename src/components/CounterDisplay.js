import React from "react";

const CounterDisplay = (props) => {
  return (
    <div>
      <h1 data-test="counter-display-num">{props.counterValue}</h1>
    </div>
  );
};

export default CounterDisplay;
