// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBc01lWXkiuElY6rKqEiu6Va6wHykAI5bw",
  authDomain: "user-form-1a6ce.firebaseapp.com",
  projectId: "user-form-1a6ce",
  storageBucket: "user-form-1a6ce.appspot.com",
  messagingSenderId: "424829472633",
  appId: "1:424829472633:web:46e05888399da24b54a9a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)