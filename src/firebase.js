// src/firebase.js

// Import the Firebase SDK pieces you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:            process.env.REACT_APP_API_KEY,
  authDomain:        process.env.REACT_APP_AUTH_DOMAIN,
  projectId:         process.env.REACT_APP_PROJECT_ID,
  storageBucket:     process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:             process.env.REACT_APP_APP_ID,
  measurementId:     process.env.REACT_APP_MEASUREMENT_ID,
};

all of this is boring HAHAHAHH