import { Col, Row } from 'antd'
import React from 'react'
import Rooms from './Rooms'
import { SidebarWrapper } from './styled'
import UserInfo from './UserInfo'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <Rooms />
        </Col>
      </Row>
    </SidebarWrapper>
  )
}

export default Sidebar
