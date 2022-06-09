import React from 'react'

const ChatBubble = ({ user }) => {
  return (
    <div className="text-black w-fit max-w-xl flex flex-col">
      <p className="text-sm">{user}</p>
      <p className="bg-gray-200 p-4 mb-3 rounded-xl">
        ChatBubblesadasdasdasdasd
      </p>
    </div>
  )
}

export default ChatBubble
