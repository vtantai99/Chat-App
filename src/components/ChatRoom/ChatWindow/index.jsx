import { UserAddOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Input, Tooltip } from 'antd'
import React from 'react'
import Message from './Message'
import {
  ButtonGroupStyled,
  ContentStyled,
  FormStyled,
  HeaderStyled,
  MessageListStyled,
  WrapperStyled
} from './styled'

const ChatWindow = () => {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">Room 1</p>
          <span className="header__des">This is room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />} type="text">
            Invite
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="D">
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message text="Hello1" displayName="Boy" createdAt={1211111187187} photoURL={null} />
          <Message text="Hello2" displayName="Tai" createdAt={912938912213} photoURL={null} />
          <Message text="Hello3" displayName="Son" createdAt={9827981723912} photoURL={null} />
          <Message text="Hello4" displayName="Tan" createdAt={912938912213} photoURL={null} />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input placeholder="Type a message" bordered={false} autoComplete="off" />
          </Form.Item>
          <Button type="primary">Send</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  )
}

export default ChatWindow
