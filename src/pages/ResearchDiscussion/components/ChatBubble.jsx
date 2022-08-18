import React from 'react'
import clsx from 'clsx'

const loggedInId = 1

const ChatBubble = ({ message }) => {
  return (
    <div
      className={clsx('flex', {
        'justify-end': message.sender._id === loggedInId
      })}
    >
      <div className="w-fit max-w-xl text-black">
        {message.sender._id !== loggedInId && <p className="text-sm">{message.sender.fullName}</p>}
        <p
          className={clsx(' mb-3 rounded-xl p-4', {
            'bg-gray-200': message.sender._id !== loggedInId,
            'bg-primary text-white': message.sender._id === loggedInId
          })}
        >
          ChatBubblesadasdasdasdasd
        </p>
      </div>
    </div>
  )
}

export default ChatBubble
