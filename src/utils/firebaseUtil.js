import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyDAw0WvwslcZonBmazpaLxs3fOHKYpUB1E",
  authDomain: "blogapp-dc604.firebaseapp.com",
  databaseURL: "https://blogapp-dc604-default-rtdb.firebaseio.com",
  projectId: "blogapp-dc604",
  storageBucket: "blogapp-dc604.appspot.com",
  messagingSenderId: "912172970940",
  appId: "1:912172970940:web:fb0d27b16d5ddcd2d6b1b9",
  measurementId: "G-5KRET47KKJ",
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
