import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeZxivzRHuI7Qxh1uQbf9FkZuVO5dWIP4",
  authDomain: "auth-4e534.firebaseapp.com",
  databaseURL: "https://auth-4e534.firebaseio.com",
  projectId: "auth-4e534",
  storageBucket: "auth-4e534.appspot.com",
  messagingSenderId: "440430543915",
  appId: "1:440430543915:web:8d7aea2e22b22c1aa0166e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };