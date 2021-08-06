import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD1W9rt7tMugnkYDgWAT-RzcCxVt9AV3N4",
    authDomain: "whatsapp-dc575.firebaseapp.com",
    projectId: "whatsapp-dc575",
    storageBucket: "whatsapp-dc575.appspot.com",
    messagingSenderId: "1088285997905",
    appId: "1:1088285997905:web:36f3e268c92b298d003170",
    measurementId: "G-QMB40M6F5M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;