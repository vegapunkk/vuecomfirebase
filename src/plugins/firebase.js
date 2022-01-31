import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALMoAY9YGJ0YL0FoGDWJnT371NBm1Q0JU",
  authDomain: "todo-list-vue-5e271.firebaseapp.com",
  projectId: "todo-list-vue-5e271",
  storageBucket: "todo-list-vue-5e271.appspot.com",
  messagingSenderId: "603884283672",
  appId: "1:603884283672:web:ac1d5056bd47159f56606d"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const profileCollection = db.collection("profile");
const tasksCollection = db.collection("tasks");

export { db, auth, googleProvider, profileCollection, tasksCollection };
