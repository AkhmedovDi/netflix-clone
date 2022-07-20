
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhoBEokEFWPTTZVLA5CJiOR66d9Nvg8VQ",
  authDomain: "netflix-clone-c6f5c.firebaseapp.com",
  projectId: "netflix-clone-c6f5c",
  storageBucket: "netflix-clone-c6f5c.appspot.com",
  messagingSenderId: "647007069031",
  appId: "1:647007069031:web:67e5de5a59e10641ea05c2"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }