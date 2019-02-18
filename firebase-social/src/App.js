import React, { Component } from "react";
// import firebase from "firebase";
import Facebook from './component/Facebook';
// import provider and auth that we exported from src/client.js
// import { provider, auth } from "./client";
require('firebase');

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: null
  //   };
  // }

  // login = () => {
  //   auth().signInWithPopup(provider)
  //   .then(({ user }) => {
  //     this.setState({ user })
  //   })
  // }

  // logout = () => {
  //   auth().signOut().then(() => {
  //     this.setState({user: null}) 
  //   })
  // }

  // componentWillMount() {
  //   auth.onAuthStateChanged()
  //   .then(user => {
  //     if (user) {
  //       this.setState({ user })
  //     }
  //   })
  // }

  render() {
    // const { user } = this.state;

    return ( 
    <div className="root">
      <Facebook />
    </div>
    )
  }
}

export default App;
