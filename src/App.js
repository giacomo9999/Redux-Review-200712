import React, { Component } from "react";

import Counter from "./containers/Counter";

class App extends Component {
  render() {
    return (
      <div className="container-outer">
        <Counter />
      </div>
    );
  }
}
export default App;
