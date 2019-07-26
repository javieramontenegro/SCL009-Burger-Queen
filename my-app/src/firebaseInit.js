import firebase from './App'
import './firestore'
const firebaseApp = firebase.initializeApp({

  // Your web app's Firebase configuration
 
    apiKey: "AIzaSyAmq6tHRsI45ql4HhXWKtAp-N_kNlS0jKU",
    authDomain: "burguer-queen-e2130.firebaseapp.com",
    databaseURL: "https://burguer-queen-e2130.firebaseio.com",
    projectId: "burguer-queen-e2130",
    storageBucket: "burguer-queen-e2130.appspot.com",
    messagingSenderId: "337002406110",
    appId: "1:337002406110:web:e6a3fe89cfa43c22"
  });
  // Initialize Firebase
 const db=firebaseApp.firestore();
 export {db};
