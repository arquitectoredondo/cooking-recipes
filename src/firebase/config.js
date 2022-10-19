import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCutTFqxKsG3U-7c0ulWciV6YbL9IHfYPM",
  authDomain: "cooking-ninja-site-e2bcd.firebaseapp.com",
  projectId: "cooking-ninja-site-e2bcd",
  storageBucket: "cooking-ninja-site-e2bcd.appspot.com",
  messagingSenderId: "888927885705",
  appId: "1:888927885705:web:55437742c6a2a731c36958",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
