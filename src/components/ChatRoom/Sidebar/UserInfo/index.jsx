import { Avatar, Button, Typography } from 'antd'
import { AuthContext } from 'Context/AuthProvider'
import { signOut } from 'firebase/auth'
import { onSnapshot, collection } from 'firebase/firestore'
import { auth, db } from 'FirebaseConfig/config'
import { DB_FIRE_STORE } from 'FirebaseConfig/constans'
import React, { useEffect, useContext } from 'react'
import { UserWrapper } from './styled'

const { Text } = Typography

const UserInfo = () => {
  const { user: { displayName, photoURL } } = useContext(AuthContext)

  const handleLogout = () => signOut(auth)

  return (
    <UserWrapper>
      <div className="user__info">
        <Avatar src={photoURL}>{photoURL ? '' : displayName?.charAt(0)}</Avatar>
        <Text className="user__name">{displayName}</Text>
      </div>
      <Button ghost onClick={handleLogout}>
        Log out
      </Button>
    </UserWrapper>
  )
}

export default UserInfo
