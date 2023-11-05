import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyD-4bqCCChsaGorwi-oLzJOdHmRfEl19pg",
  authDomain: "spycnf.firebaseapp.com",
  projectId: "spycnf",
  storageBucket: "spycnf.appspot.com",
  messagingSenderId: "864711789835",
  appId: "1:864711789835:web:135e0ad23afbc6d681260e"
};

export default firebaseConfig;


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
