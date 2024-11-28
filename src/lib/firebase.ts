import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6HoxdWjdV-8r4KnVc3MCBpJvHNlu5C_s",
  authDomain: "anonymous-adarsha.firebaseapp.com",
  databaseURL: "https://anonymous-adarsha-default-rtdb.firebaseio.com",
  projectId: "anonymous-adarsha",
  storageBucket: "anonymous-adarsha.firebasestorage.app",
  messagingSenderId: "393314842861",
  appId: "1:393314842861:web:8e9eac65fd12cb9083f4e4",
  measurementId: "G-0RWKMVXW2P"
}; 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);