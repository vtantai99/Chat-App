import { AddRoomModal, InviteMemberModal } from 'components'
import React, { Fragment } from 'react'
import AppRoute from 'routeConfig'

const App = () => {
  return (
    <Fragment>
      <AppRoute />
      <AddRoomModal />
      <InviteMemberModal />
    </Fragment>
  )
}

export default App
