import React from "react";

const counterDisplay = (props) => {
  return (
    <div>
      <h1 data-test="counter-display-num">{props.counterValue}</h1>
    </div>
  );
};

export default counterDisplay;
