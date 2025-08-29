import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjd2nU8940jcuNmG_W2Un0WVfnWaatMgY",
  authDomain: "goalproject-jr.firebaseapp.com",
  projectId: "goalproject-jr",
  storageBucket: "goalproject-jr.firebasestorage.app",
  messagingSenderId: "65058546348",
  appId: "1:65058546348:web:ae03e643c0392cc870b509"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);