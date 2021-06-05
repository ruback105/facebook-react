import firebase from "firebase";
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQND38pfKxBtvH1UerngPyvxNceij4DdU",
  authDomain: "facebook-clone-c5cdd.firebaseapp.com",
  projectId: "facebook-clone-c5cdd",
  storageBucket: "facebook-clone-c5cdd.appspot.com",
  messagingSenderId: "894941698490",
  appId: "1:894941698490:web:b81dabcdb5f4af05ade583",
  measurementId: "G-SJPKRJH0CZ",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
