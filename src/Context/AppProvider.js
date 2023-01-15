import { DB_FIRE_STORE } from 'firebaseConfig/constans'
import { useFireStore } from 'hooks'
import { createContext, useContext, useMemo, useState } from 'react'
import { AuthContext } from './AuthProvider'

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false)
  const [isInviteMemberVisible, setInviteMemberVisible] = useState(false)
  const [selectedRoomId, setSelectedRoomId] = useState('')
  const {
    user: { uid }
  } = useContext(AuthContext)
  /* rooms:
    { 
      name: string
      description: string
      members: [uid1, uid2]
    }
  */
  const roomsCondition = useMemo(
    () => ({ fieldName: 'members', operator: 'array-contains', compareValue: uid }),
    [uid]
  )

  const rooms = useFireStore(DB_FIRE_STORE.ROOMS, roomsCondition)

  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId]
  )

  const usersCondition = useMemo(
    () => ({ fieldName: 'uid', operator: 'in', compareValue: selectedRoom.members }),
    [selectedRoom.members]
  )

  const members = useFireStore(DB_FIRE_STORE.USERS, usersCondition)

  return (
    <AppContext.Provider
      value={{
        rooms,
        members,
        isAddRoomVisible,
        setIsAddRoomVisible,
        selectedRoomId,
        setSelectedRoomId,
        selectedRoom,
        isInviteMemberVisible,
        setInviteMemberVisible
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
