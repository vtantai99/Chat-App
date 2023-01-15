import { Avatar, Form, Modal, Select, Spin } from 'antd'
import { AppContext } from 'context/AppProvider'
import { AuthContext } from 'context/AuthProvider'
import { collection, doc, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import { db } from 'firebaseConfig/config'
import { DB_FIRE_STORE } from 'firebaseConfig/constans'
import { debounce } from 'lodash'
import { useContext, useMemo, useState } from 'react'
const { Option } = Select

const DebounceSelect = ({ fetchOptions, debounceTimeout = 300, ...props }) => {
  const [fetching, setFetching] = useState(false)
  const [options, setOptions] = useState([])

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      setOptions([])
      setFetching(true)

      fetchOptions(value).then((newOptions) => {
        setOptions(newOptions)
        setFetching(false)
      })
    }
    return debounce(loadOptions, debounceTimeout)
  }, [debounceTimeout, fetchOptions])

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : <>Not found</>}
      {...props}
    >
      {/* [{ label, value, photoURL }] */}
      {options.map((opt, index) => (
        <Option key={index}>
          <Avatar size="small" src={opt.photoURL}>
            {opt.photoURL ? '' : opt.label?.charAt(0)}
          </Avatar>
          {opt.label}
        </Option>
      ))}
    </Select>
  )
}

const fetchUserList = async (search) => {
  const collectionRef = query(
    collection(db, DB_FIRE_STORE.USERS),
    where('keywords', 'array-contains', search),
    orderBy('displayName'),
    limit(20)
  )

  const collectionSnap = await getDocs(collectionRef)

  return collectionSnap.docs.map((doc) => {
    console.log('Boy 🚀 ~> doc', doc)
    return {
      label: doc.data().displayName,
      value: doc.data().uid,
      photoURL: doc.data().photoURL
    }
  })
}

const InviteMemberModal = () => {
  const { isInviteMemberVisible, setInviteMemberVisible } = useContext(AppContext)
  const {
    user: { uid }
  } = useContext(AuthContext)

  const [value, setValue] = useState([])

  const [form] = Form.useForm()
  const handleOk = () => {
    setInviteMemberVisible(false)
  }

  const handleCancel = () => {
    setInviteMemberVisible(false)
  }
  return (
    <Modal title="Invite members" visible={isInviteMemberVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form form={form} layout="vertical">
        <DebounceSelect
          mode="multiple"
          label="Name of members"
          value={value}
          placeholder="Name member"
          fetchOptions={fetchUserList}
          onChange={(newValue) => setValue(newValue)}
          style={{ width: '100%' }}
        />
      </Form>
    </Modal>
  )
}

export default InviteMemberModal
