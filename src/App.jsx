import { AddRoomModal, InviteMemberModal } from 'Components'
import React, { Fragment } from 'react'
import AppRoute from 'Routes'

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
