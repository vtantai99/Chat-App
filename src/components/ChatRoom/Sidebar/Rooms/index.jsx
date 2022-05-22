import { Collapse, Typography } from 'antd'
import React from 'react'

const { Panel } = Collapse
const { Link } = Typography

const Rooms = () => {
  return (
    <Collapse>
      <Panel header="Room list" key="1">
        <Link>Room 1</Link>
        <Link>Room 2</Link>
        <Link>Room 3</Link>
      </Panel>
    </Collapse>
  )
}

export default Rooms
