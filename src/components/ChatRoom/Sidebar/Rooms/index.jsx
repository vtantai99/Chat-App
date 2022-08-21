import { PlusOutlined } from '@ant-design/icons'
import { Button, Collapse } from 'antd'
import { AppContext } from 'Context/AppProvider'
import { useContext } from 'react'
import { LinkStyled, PanelStyled } from './styled'

const Rooms = () => {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } = useContext(AppContext)

  const handleAddRoom = () => {
    setIsAddRoomVisible(true)
  }
  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header="Room list" key="1">
        {rooms.map((room) => (
          <LinkStyled key={room.id} onClick={() => setSelectedRoomId(room.id)}>{room.name}</LinkStyled>
        ))}
        <Button type="text" icon={<PlusOutlined />} className="add__room" onClick={handleAddRoom}>
          Add room
        </Button>
      </PanelStyled>
    </Collapse>
  )
}

export default Rooms
