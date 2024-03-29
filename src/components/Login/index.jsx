import { Row, Col, Typography, Button } from 'antd'
import { signInWithPopup } from 'firebase/auth'
import { auth, facebookProvider } from 'firebaseConfig/config'
import { DB_FIRE_STORE } from 'firebaseConfig/constans'
import { addDocument, generateKeywords } from 'firebaseConfig/services'
import React from 'react'

const { Title } = Typography

const LoginScreen = () => {
  const handleFacebookLogin = async () => {
    const { user, _tokenResponse } = await signInWithPopup(auth, facebookProvider)
    if (_tokenResponse?.isNewUser) {
      addDocument(DB_FIRE_STORE.USERS, {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: _tokenResponse.providerId,
        keywords: generateKeywords(user.displayName)
      })
    }
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
