import { Avatar, Button, Typography } from 'antd'
import { signOut } from 'firebase/auth'
import { onSnapshot, collection } from 'firebase/firestore'
import { auth, db } from 'FirebaseConfig/config'
import { DB_FIRE_STORE } from 'FirebaseConfig/constans'
import React, { useEffect } from 'react'
import { UserWrapper } from './styled'

const { Text } = Typography

const UserInfo = () => {
  useEffect(() => {
    onSnapshot(
      collection(db, DB_FIRE_STORE.USERS),
      (snapshot) =>
        console.log(
          'Boy 🚀 ~ file: index.jsx ~ line 14 ~ useEffect ~ snapshot',
          snapshot.docs.map((snapshot) => console.log(snapshot.data()))
        )
      // console.log(snapshot.docs.map((doc) => doc.data()))
    )
  }, [])

  const handleLogout = () => signOut(auth)
  return (
    <UserWrapper>
      <div className="user__info">
        <Avatar>userAvatar</Avatar>
        <Text className="user__name">Tai Vo</Text>
      </div>
      <Button ghost onClick={handleLogout}>
        Log out
      </Button>
    </UserWrapper>
  )
}

export default UserInfo
