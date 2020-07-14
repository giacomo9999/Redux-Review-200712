import React, { Component } from "react";

import Counter from "./containers/Counter";

class App extends Component {
  render() {
    return (
      <div className="container-outer" data-test="component-app">
        <Counter />
      </div>
    );
  }
}
export default App;
