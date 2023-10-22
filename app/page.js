"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDoc, getDocs} from "firebase/firestore";
import {useState} from "react";

export default function Home() {
  const [stock, setStock] = useState([]);

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
  getDocs(colRef).then(snapshot => {
    // console.log(snapshot.docs);
    let books = [];
    snapshot.docs.forEach(doc => {
      books.push({...doc.data(), id: doc.id});
    });
    console.log(books);
    setStock(books);
  });

  return (
    <main className={styles.main}>
      <div className={styles.description}>Hey</div>
    </main>
  );
}
