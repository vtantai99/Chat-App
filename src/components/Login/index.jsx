import { Row, Col, Typography, Button } from 'antd'
import { signInWithPopup } from 'firebase/auth'
import { auth, facebookProvider } from 'FirebaseConfig/config'
import React from 'react'

const { Title } = Typography

const LoginScreen = () => {
  const handleFacebookLogin = () => {
    signInWithPopup(auth, facebookProvider)
  }

  return (
    <Row justify="center">
      <Col span={8}>
        <Title level={4} style={{ textAlign: 'center' }}>
          Chat app
        </Title>
        <Button style={{ width: '100%', marginBottom: 5 }} onClick={handleFacebookLogin}>
          Login with Facebook
        </Button>
        <Button style={{ width: '100%' }}>Login with Google</Button>
      </Col>
    </Row>
  )
}

export default LoginScreen
