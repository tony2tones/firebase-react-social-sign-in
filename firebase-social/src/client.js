import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCED5kxEKN2lD5C24qQDNH7dL3pzuIkbkU",
  authDomain: "fir-social-886a6.firebaseapp.com",
  databaseURL: "https://fir-social-886a6.firebaseio.com",
  projectId: "fir-social-886a6",
  storageBucket: "fir-social-886a6.appspot.com",
  messagingSenderId: "707728488480"
};
firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()