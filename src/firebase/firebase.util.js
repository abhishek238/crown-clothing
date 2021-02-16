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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // Get a reference to the place in the database where the user is stored
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.error('error creating user', error.message);
        }
    }

    return getUserDocumentRef(userAuth.uid);
}

export const getUserDocumentRef = async uid => {
    if (!uid) return null;

    try {
        return firestore.doc(`users/${uid}`);
    } catch (error) {
        console.error('error fetching user', error.message);
    }
};

export default firebase;