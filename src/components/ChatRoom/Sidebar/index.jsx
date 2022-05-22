import { Col, Row } from 'antd'
import React from 'react'
import Rooms from './Rooms'
import UserInfo from './UserInfo'

const Sidebar = () => {
  return (
    <Row>
      <Col span={24}>
        <UserInfo />
      </Col>
      <Col span={24}>
        <Rooms />
      </Col>
    </Row>
  )
}

export default Sidebar
