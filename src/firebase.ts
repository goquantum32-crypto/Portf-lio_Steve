import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC1JcBZo2bCH5Mi2a_uspQxlV2nUewRVW8",
  authDomain: "portifolio-steve.firebaseapp.com",
  databaseURL: "https://portifolio-steve-default-rtdb.firebaseio.com",
  projectId: "portifolio-steve",
  storageBucket: "portifolio-steve.firebasestorage.app",
  messagingSenderId: "291835406955",
  appId: "1:291835406955:web:5e812fa96c5d8578a5df2e",
  measurementId: "G-BP9PFD2CV5"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getDatabase(app);
