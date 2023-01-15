import { Spin } from 'antd'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'firebaseConfig/config'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES_NAME } from 'routeConfig/constant'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user
        setUser({ displayName, email, uid, photoURL })
        setIsLoading(false)
        navigate(ROUTES_NAME.CHAT_ROOM)
        return
      }

      setIsLoading(false)
      navigate(ROUTES_NAME.LOGIN)
    })
    return () => unsubscribe()
  }, [navigate])

  return <AuthContext.Provider value={{ user }}>{isLoading ? <Spin /> : children}</AuthContext.Provider>
}

export default AuthProvider
