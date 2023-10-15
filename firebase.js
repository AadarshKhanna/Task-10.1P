// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyALsOGbFX78rB8L3J6q65KP9DjD2uaNzoQ",
  authDomain: "staff-953f6.firebaseapp.com",
  databaseURL: "https://staff-953f6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "staff-953f6",
  storageBucket: "staff-953f6.appspot.com",
  messagingSenderId: "881055761205",
  appId: "1:881055761205:web:3a4d05717bd91f8833427c",
  measurementId: "G-9CLY6CFQN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics};