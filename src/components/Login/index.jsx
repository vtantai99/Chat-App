import { UploadOutlined } from '@ant-design/icons'
import { Row, Col, Typography, Button, Space, Upload, Popconfirm } from 'antd'
import React from 'react'

const { Title } = Typography

const LoginScreen = () => {
  return (
    <Row justify="center">
      <Col span={8}>
        <Title level={4} style={{ textAlign: 'center' }}>
          Chat app
        </Title>
        <Button style={{ width: '100%', marginBottom: 5 }}>Login with Facebook</Button>
        <Button style={{ width: '100%' }}>Login with Google</Button>
      </Col>
    </Row>
  )
}

export default LoginScreen
