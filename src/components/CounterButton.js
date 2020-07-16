import React from "react";

const CounterButton = (props) => {
  return (
    <button data-type={props.buttonName} onClick={props.buttonFunction}>
      {props.buttonName}
    </button>
  );
};

export default CounterButton;
