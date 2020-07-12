import React, { Component } from "react";

import CounterDisplay from "../components/CounterDisplay";
import CounterButton from "../components/CounterButton";

class Counter extends Component {
  state = { counterValue: 0 };
  render() {
    return (
      <div className="container-inner">
        <CounterDisplay counterValue={this.state.counterValue} />
        <div className="spacer10" />
        <CounterButton buttonName={"Increment"} />
        <CounterButton buttonName={"Decrement"} />
        <CounterButton buttonName={"Add"} />
        <CounterButton buttonName={"Subtract"} />
      </div>
    );
  }
}

export default Counter;
