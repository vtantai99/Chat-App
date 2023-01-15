import { LoginScreen, ChatRoom } from 'components'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES_NAME } from './constant'

const AppRoute = () => {
  return (
    <Routes>
      <Route path={ROUTES_NAME.LOGIN} element={<LoginScreen />} />
      <Route path={ROUTES_NAME.CHAT_ROOM} element={<ChatRoom />} />
    </Routes>
  )
}

export default AppRoute
