import { UserAddOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Input, Tooltip } from 'antd'
import { AppContext } from 'Context/AppProvider'
import { useContext } from 'react'
import Message from './Message'
import
  {
    ButtonGroupStyled,
    ContentStyled,
    FormStyled,
    HeaderStyled,
    MessageListStyled,
    WrapperStyled
  } from './styled'

const ChatWindow = () => {
  const { selectedRoom, members, setInviteMemberVisible } = useContext(AppContext)

  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">{selectedRoom.name}</p>
          <span className="header__des">{selectedRoom.description}</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />} type="text" onClick={() => setInviteMemberVisible(true)}>
            Invite
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            {members.map((member) => (
              <Tooltip title={member.displayName} key={member.id}>
                <Avatar src={member.photoURL}>{member.photoURL ? '' : member.displayName?.charAt(0)}</Avatar>
              </Tooltip>
            ))}
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
