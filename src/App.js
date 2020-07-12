import React, { Component } from "react";

import Counter from "./containers/Counter";

class App extends Component {
  render() {
    return (
      <div className="container-outer">
        <h1>App</h1>
        <Counter />
      </div>
    );
  }
}
export default App;
