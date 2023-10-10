import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO7o9ChnM9ehvFYhjByPvNaC_GmduYjZ0",
  authDomain: "btc-homes.firebaseapp.com",
  projectId: "btc-homes",
  storageBucket: "btc-homes.appspot.com",
  messagingSenderId: "728807037806",
  appId: "1:728807037806:web:87f0994e6072275cff3f7f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
