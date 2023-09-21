import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId
  apiKey: "AIzaSyDZeWTR8QXgDbX8E2AqhMvy__ZnmhiTMac",
  authDomain: "conceptclasses-e8193.firebaseapp.com",
  projectId: "conceptclasses-e8193",
  storageBucket: "conceptclasses-e8193.appspot.com",
  messagingSenderId: "225372940365",
  appId: "1:225372940365:web:3e50d99e28559722ffd404",
  measurementId: "G-NMNFY94LXN"
};

firebase.initializeApp(firebaseConfig);
export default firebase;

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);