import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import io from 'socket.io-client'

import ChatContainer from './components/ChatContainer'
import ChatInput from './components/ChatInput'
import DashboardLayout from '~/layouts/DashboardLayout'
import DiscussionHeader from './components/DiscussionHeader'

const RepositoryDiscussion = () => {
  let socket
  // const dispatch = useDispatch()

  const [messageList, setMessageList] = useState([])

  // const { _id, messages } = useSelector(state => state.team)

  useEffect(() => {
    //connect to socket
    socket = io.connect(import.meta.env.VITE_BASE_URL)

    // join room
    socket.emit('join_room', _id)

    // get messages from db
    // setMessageList(messages)

    // disconnect
    return () => socket.disconnect()
  }, [])

  useEffect(() => {
    socket.on('receive_message', data =>
      setMessageList(list => [...list, data])
    )
  }, [socket])

  const sendMessages = async message => {
    await socket.on('send_message', message)
    setMessageList(list => [...list, data])
    // dispatch(sendMessage(message))
  }

  return (
    <DashboardLayout>
      <div className="py-6 relative grid grid-rows-[100px_1fr_50px] h-full overflow-x-hidden">
        <DiscussionHeader />
        <ChatContainer />
        <ChatInput />
      </div>
    </DashboardLayout>
  )
}

export default RepositoryDiscussion
