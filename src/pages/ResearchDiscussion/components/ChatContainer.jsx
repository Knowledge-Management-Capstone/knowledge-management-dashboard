import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import ChatBubble from './ChatBubble'

const user1 = {
  _id: 1,
  fullName: 'Dian Rahmaji'
}

const user2 = {
  id: 2,
  fullName: 'Dzakiy Harissalam'
}

const ChatContainer = () => {
  const endMessage = useRef(null)
  const { messages = [] } = useSelector(({ selectedTeamId, acceptedTeams }) => {
    return acceptedTeams.data.find(({ _id }) => _id === selectedTeamId)
  })

  useEffect(() => {
    endMessage.current?.scrollIntoView()
  })

  return (
    <div className="h-7/8 mx-auto w-full overflow-y-scroll px-4 sm:px-6 md:px-14">
      <div className="flex flex-col">
        {messages &&
          messages.map((m, i) => {
            ;<ChatBubble key={i} message={m} />
          })}
        <div ref={endMessage} />
      </div>
    </div>
  )
}

export default ChatContainer
