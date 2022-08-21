import { Form, Input, Modal } from 'antd'
import { AppContext } from 'Context/AppProvider'
import { AuthContext } from 'Context/AuthProvider'
import { DB_FIRE_STORE } from 'FirebaseConfig/constans'
import { addDocument } from 'FirebaseConfig/services'
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
