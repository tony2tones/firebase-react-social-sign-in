import React, { Component } from "react";
import Facebook from "./component/Facebook";
require("firebase");

class App extends Component {
  render() {
    return (
      <div className="root">
        <Facebook />
      </div>
    );
  }
}

export default App;
