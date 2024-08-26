import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPw17MTZSu2kUWe65bEU_X0zIUZP5M-fM",
    authDomain: "urlshortenerfinal.firebaseapp.com",
    projectId: "urlshortenerfinal",
    storageBucket: "urlshortenerfinal.appspot.com",
    messagingSenderId: "71811758939",
    appId: "1:71811758939:web:45d8c37a95c22e804cb87e",
    measurementId: "G-VV3PF0YYPC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };