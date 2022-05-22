import { Avatar, Button, Typography } from 'antd'
import React from 'react'
import { UserWrapper } from './styled'

const { Text } = Typography

const UserInfo = () => {
  return (
    <UserWrapper>
      <div>
        <Avatar>userAvatar</Avatar>
        <Text>Tai Vo</Text>
      </div>
      <Button>Log out</Button>
    </UserWrapper>
  )
}

export default UserInfo
