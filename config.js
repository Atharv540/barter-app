
import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBIQ4oduphtajzVqUPiJFgmNbJpc4Q1fXE",
    authDomain: "barter-app-63a89.firebaseapp.com",
    projectId: "barter-app-63a89",
    storageBucket: "barter-app-63a89.appspot.com",
    messagingSenderId: "906781996147",
    appId: "1:906781996147:web:f7144424caf4b5f47ce606",
    measurementId: "G-T6HD02SJ2H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();