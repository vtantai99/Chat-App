import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import { db } from './config'

export const addDocument = (collectionName, data) => {
  addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp()
  })
}
