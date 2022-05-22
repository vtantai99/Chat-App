// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, FacebookAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAZteWxW-519Yg6yJq_JXtSGYgDiWHaW5Q',
  authDomain: 'chat-app-54dcb.firebaseapp.com',
  projectId: 'chat-app-54dcb',
  storageBucket: 'chat-app-54dcb.appspot.com',
  messagingSenderId: '778974156328',
  appId: '1:778974156328:web:4e408d618a42df561e871d',
  measurementId: 'G-D866YJTNZL'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth()
export const facebookProvider = new FacebookAuthProvider()
