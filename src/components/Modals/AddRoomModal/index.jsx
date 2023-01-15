import { Form, Input, Modal } from 'antd'
import { AppContext } from 'context/AppProvider'
import { AuthContext } from 'context/AuthProvider'
import { DB_FIRE_STORE } from 'firebaseConfig/constans'
import { addDocument } from 'firebaseConfig/services'
import React from 'react'
import { useContext } from 'react'

const { Item } = Form

const AddRoomModal = () => {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext)
  const { user: { uid } } = useContext(AuthContext)
  const [form] = Form.useForm()
  const handleOk = () => {
    // add new room to fireStore
    addDocument(DB_FIRE_STORE.ROOMS, { ...form.getFieldsValue(), members: [uid] })
    // reset form value
    form.resetFields()

    setIsAddRoomVisible(false)
  }

  const handleCancel = () => {
    // reset form value
    form.resetFields()

    setIsAddRoomVisible(false)
  }
  return (
    <Modal title="Create room name" visible={isAddRoomVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form form={form} layout="vertical">
        <Item label="Room name" name="name">
          <Input placeholder="Type room name" />
        </Item>
        <Item label="Description" name="description">
          <Input placeholder="Type room name" />
        </Item>
      </Form>
    </Modal>
  )
}

export default AddRoomModal
