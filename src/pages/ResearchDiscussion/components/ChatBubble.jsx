import React from 'react'
import clsx from 'clsx'

const loggedInId = 1

const ChatBubble = ({ user }) => {
  return (
    <div
      className={clsx('flex', {
        'justify-end': user._id === loggedInId
      })}
    >
      <div className="text-black w-fit max-w-xl">
        {user._id !== loggedInId && <p className="text-sm">{user.fullName}</p>}
        <p
          className={clsx(' p-4 mb-3 rounded-xl', {
            'bg-gray-200': user._id !== loggedInId,
            'bg-primary text-white': user._id === loggedInId
          })}
        >
          ChatBubblesadasdasdasdasd
        </p>
      </div>
    </div>
  )
}

export default ChatBubble
