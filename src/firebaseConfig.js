// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtoamBRZ77lRACzCVFi00iSofE1BrHzVI",
  authDomain: "snack-16e14.firebaseapp.com",
  projectId: "snack-16e14",
  storageBucket: "snack-16e14.appspot.com",
  messagingSenderId: "685538497362",
  appId: "1:685538497362:web:d580acdbbcb3cfaffba08b",
  measurementId: "G-QS50ER5278"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;