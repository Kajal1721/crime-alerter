import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD4WKBdaLgq5sli3vUjWK82gkdnqx4qybg",
    authDomain: "crime-alerter.firebaseapp.com",
    projectId: "crime-alerter",
    storageBucket: "crime-alerter.appspot.com",
    messagingSenderId: "59155514000",
    appId: "1:59155514000:web:7dec6dcd75a072bd880e15",
    measurementId: "G-G4BT1BE5CB",
    databaseURL: "https://crime-alerter.firebaseapp.com"
});

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();


  export {db, auth, storage};