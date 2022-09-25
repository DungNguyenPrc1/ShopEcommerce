// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyD3uTrC_OkDq1buewPfxT8uaUIEKuJZMK8",
  authDomain: "eshop-2ab00.firebaseapp.com",
  projectId: "eshop-2ab00",
  storageBucket: "eshop-2ab00.appspot.com",
  messagingSenderId: "321465590273",
  appId: "1:321465590273:web:5dcfde430ed44ffcec1600",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
