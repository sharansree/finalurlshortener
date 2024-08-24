import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPw17MTZSu2kUWe65bEU_X0zIUZP5M-fM",
    authDomain: "urlshortenerfinal.firebaseapp.com",
    projectId: "urlshortenerfinal",
    storageBucket: "urlshortenerfinal.appspot.com",
    messagingSenderId: "71811758939",
    appId: "1:71811758939:web:45d8c37a95c22e804cb87e",
    measurementId: "G-VV3PF0YYPC"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const db = app.firestore();