// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDehI3BDzRp3s0qeuYhhd2xxJMCGJj-0ng",
  authDomain: "zichaolib.firebaseapp.com",
  projectId: "zichaolib",
  storageBucket: "zichaolib.appspot.com",
  messagingSenderId: "462349332349",
  appId: "1:462349332349:web:f85585fda697eadc512614"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db