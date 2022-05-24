import { Avatar, Typography } from 'antd'
import React from 'react'
import { WrapperStyled } from './styled'

const { Text } = Typography

const Message = ({ text, displayName, createdAt, photoURL }) => {
  return (
    <WrapperStyled>
      <div>
        <Avatar size="small" src={photoURL}>
          A
        </Avatar>
        <Text className="message__author">{displayName}</Text>
        <Text className="message__date">{createdAt}</Text>
      </div>
      <div>
        <Text className="message__content">{text}</Text>
      </div>
    </WrapperStyled>
  )
}

export default Message
