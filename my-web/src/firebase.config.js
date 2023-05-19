// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp1J7-VT1WKon2BuSSTCv2ekHwFretuMs",
  authDomain: "furniture-5b989.firebaseapp.com",
  projectId: "furniture-5b989",
  storageBucket: "furniture-5b989.appspot.com",
  messagingSenderId: "739420752985",
  appId: "1:739420752985:web:eb314641fb92924a887548",
  measurementId: "G-Y3QZVLSKXS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
