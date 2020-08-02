import firebase from "firebase/app"; //just basic features
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "****************",
  authDomain: "*************",
  databaseURL: "*************",
  projectId: "*********",
  storageBucket: "************",
  messagingSenderId: "*********",
  appId: "*************",
  measurementId: "***********",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
