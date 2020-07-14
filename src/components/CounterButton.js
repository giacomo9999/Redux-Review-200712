import React from "react";

const counterButton = (props) => {
  return (
    <button data-type={props.buttonName} onClick={props.buttonFunction}>
      {props.buttonName}
    </button>
  );
};

export default counterButton;
