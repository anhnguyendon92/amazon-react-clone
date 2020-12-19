import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCHv94wgqlIDYirtgg80zunNayJo_YfflI",
    authDomain: "clone-b0b74.firebaseapp.com",
    projectId: "clone-b0b74",
    storageBucket: "clone-b0b74.appspot.com",
    messagingSenderId: "1010346784611",
    appId: "1:1010346784611:web:9994abd498b208ccd98556",
    measurementId: "G-EFRQZ3NW3Y"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };