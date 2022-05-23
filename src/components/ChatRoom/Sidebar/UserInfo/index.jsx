import { Avatar, Button, Typography } from 'antd'
import React from 'react'
import { UserWrapper } from './styled'

const { Text } = Typography

const UserInfo = () => {
  return (
    <UserWrapper>
      <div className="user__info">
        <Avatar>userAvatar</Avatar>
        <Text className="user__name">Tai Vo</Text>
      </div>
      <Button ghost>Log out</Button>
    </UserWrapper>
  )
}

export default UserInfo
