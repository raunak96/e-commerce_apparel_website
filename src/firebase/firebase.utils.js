import firebase from "firebase/app";
import "firebase/firestore";   //for database
import "firebase/auth";        //for authentication

const config = {
    apiKey: "AIzaSyCA8Y38lDUOzDpoQxZY22_VIQoDzWqxbFA",
    authDomain: "e-commerce-apparel-site-db.firebaseapp.com",
    databaseURL: "https://e-commerce-apparel-site-db.firebaseio.com",
    projectId: "e-commerce-apparel-site-db",
    storageBucket: "e-commerce-apparel-site-db.appspot.com",
    messagingSenderId: "755266400201",
    appId: "1:755266400201:web:8aeab65945cbe169f40218",
    measurementId: "G-BKX0TFD1F5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore=firebase.firestore();

// Setting up Google Sign in with Firebase
const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;