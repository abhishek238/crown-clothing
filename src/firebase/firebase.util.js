import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCv9pzksALp5TppaD7GXEWByyZnNyyOZSc",
    authDomain: "crown-db-f69b6.firebaseapp.com",
    projectId: "crown-db-f69b6",
    storageBucket: "crown-db-f69b6.appspot.com",
    messagingSenderId: "300616258168",
    appId: "1:300616258168:web:7b8cc342454cf44b31938d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;