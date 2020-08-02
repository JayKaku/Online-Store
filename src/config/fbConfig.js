import firebase from "firebase/app"; //just basic features
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAhZ1_lGQ4rO8jrKG_evZUWYOadLBw4jU4",
  authDomain: "jay-mymarket.firebaseapp.com",
  databaseURL: "https://jay-mymarket.firebaseio.com",
  projectId: "jay-mymarket",
  storageBucket: "jay-mymarket.appspot.com",
  messagingSenderId: "531493143194",
  appId: "1:531493143194:web:9137e09326ae85a6595523",
  measurementId: "G-S2JKLMNQC3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
