import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBJgjzz724BxX8y-4ZmjJ75zlamdG9CLWk",
  authDomain: "crown-app-33961.firebaseapp.com",
  databaseURL: "https://crown-app-33961.firebaseio.com",
  projectId: "crown-app-33961",
  storageBucket: "crown-app-33961.appspot.com",
  messagingSenderId: "1070114825030",
  appId: "1:1070114825030:web:436571d8aa1088fc087b47",
  measurementId: "G-0XP8XV4MEW"
};

firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
