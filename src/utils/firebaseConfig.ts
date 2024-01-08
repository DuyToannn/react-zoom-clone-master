import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCpIx8m6Zuq8pRFadscoevgPCqMoCl6KRo",
  authDomain: "online-chat-34251.firebaseapp.com",
  projectId: "online-chat-34251",
  storageBucket: "online-chat-34251.appspot.com",
  messagingSenderId: "1031768631902",
  appId: "1:1031768631902:web:6d4cd3e2393549e4c862cf"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
