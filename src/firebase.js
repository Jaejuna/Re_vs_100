import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNEEZVWLepSVn_ennOWsbwjL8E2wqnbpQ",
    authDomain: "re-vs-100-8ec8b.firebaseapp.com",
    projectId: "re-vs-100-8ec8b",
    storageBucket: "re-vs-100-8ec8b.appspot.com",
    messagingSenderId: "400681423336",
    appId: "1:400681423336:web:13667d56d28179863d545d"
}

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();