import React, { Component } from "react";
import firebase from "firebase";
// import provider and auth that we exported from src/client.js
import { provider, auth } from "./client";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  
  render() {
    return <div className="App" />;
  }
}

export default App;
