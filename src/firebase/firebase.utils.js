import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC3LyOupz-_9Y4vWdNvqUD_2A-FZmGNvdA",
  authDomain: "shop-proj-db.firebaseapp.com",
  projectId: "shop-proj-db",
  storageBucket: "shop-proj-db.appspot.com",
  messagingSenderId: "692039526132",
  appId: "1:692039526132:web:b9653bce9471674407a0a1",
  measurementId: "G-R4TLBR1NF2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;