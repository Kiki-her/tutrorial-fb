// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq8LIPo1mNcdC5GUfp0ZKrlcn3-DFLdTA",
  authDomain: "fir-kiki.firebaseapp.com",
  projectId: "fir-kiki",
  storageBucket: "fir-kiki.appspot.com",
  messagingSenderId: "535304567131",
  appId: "1:535304567131:web:c2fb4680c05f736b3f827e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init servises
const db = getFirestore();

// collection ref
const colRef = collection(db, "books");

// get collection data
getDoc(colRef).then(snapshot => {
  console.log(snapshot.docs);
});
