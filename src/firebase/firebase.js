import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDFg4fVIHLqg0i8BeEljjtU9MO85zJ7pn0",
  authDomain: "conogramavue.firebaseapp.com",
  projectId: "conogramavue",
  storageBucket: "conogramavue.appspot.com",
  messagingSenderId: "334187285001",
  appId: "1:334187285001:web:5a9dc1b7d33452064206d8"
};

// Initialize Firebase
  initializeApp(firebaseConfig);

  export const auth = getAuth()
  export const db = getFirestore()