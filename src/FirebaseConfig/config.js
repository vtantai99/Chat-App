// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { getAuth, FacebookAuthProvider, connectAuthEmulator } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAH8fZEBYoV3ef6oulp0KvBbP6EVjlgpEg',
  authDomain: 'chat-app-2343c.firebaseapp.com',
  projectId: 'chat-app-2343c',
  storageBucket: 'chat-app-2343c.appspot.com',
  messagingSenderId: '126373866271',
  appId: '1:126373866271:web:4195f85ad7c8671b951e2a',
  measurementId: 'G-Q50QQ46MYX'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth()
export const facebookProvider = new FacebookAuthProvider()

// Config firebase for emulator
connectAuthEmulator(auth, "http://localhost:9099");
connectFirestoreEmulator(db, 'localhost', 8080);
