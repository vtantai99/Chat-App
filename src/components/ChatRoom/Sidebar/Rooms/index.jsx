import { PlusOutlined } from '@ant-design/icons'
import { Button, Collapse } from 'antd'
import React from 'react'
import { LinkStyled, PanelStyled } from './styled'

const Rooms = () => {
  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header="Room list" key="1">
        <LinkStyled>Room 1</LinkStyled>
        <LinkStyled>Room 2</LinkStyled>
        <LinkStyled>Room 3</LinkStyled>
        <Button type="text" icon={<PlusOutlined />} className="add__room">
          Add room
        </Button>
      </PanelStyled>
    </Collapse>
  )
}

export default Rooms
