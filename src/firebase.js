import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAncry1PV4HJtZ6zDAfoCEGLiu877g7B6M",
  authDomain: "linkedin-clone-8b996.firebaseapp.com",
  projectId: "linkedin-clone-8b996",
  storageBucket: "linkedin-clone-8b996.appspot.com",
  messagingSenderId: "237483486740",
  appId: "1:237483486740:web:1e4fec9c664d9cf0d80101",
  measurementId: "G-QJ9Y8RRVR3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage };

export default db;
