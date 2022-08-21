import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { db } from 'FirebaseConfig/config'
import { useEffect, useState } from 'react'

export const useFireStore = (collectionName, condition) => {
  /* ondition
  {
    fieldName: 'abc'
    operator: '==='
    compareValue: [1 ,2 ,3]
  }
  */

  const [documents, setDocuments] = useState([])

  useEffect(() => {
    let collectionRef = query(collection(db, collectionName), orderBy('createdAt'))

    // Filter data if have condition
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) return
      collectionRef = query(
        collectionRef,
        where(condition.fieldName, condition.operator, condition.compareValue)
        )
    }

    // Event onSnapshot listen the change of data in fireStore
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setDocuments(documents)
      return () => unsubscribe()
    })
  }, [collectionName, condition])

  return documents
}
