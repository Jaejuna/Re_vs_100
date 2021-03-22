import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOmMXCGVo-4Lizj5HcOLSPxl8IQQfYfCE",
  authDomain: "re-vs-100.firebaseapp.com",
  databaseURL: "https://re-vs-100-default-rtdb.firebaseio.com",
  projectId: "re-vs-100",
  storageBucket: "re-vs-100.appspot.com",
  messagingSenderId: "822952098800",
  appId: "1:822952098800:web:5c53636cf34bf7ecf5fb35",
  measurementId: "G-VYR5YFWC11"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstace = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();