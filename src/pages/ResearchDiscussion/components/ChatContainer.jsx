import ChatBubble from './ChatBubble'

const ChatContainer = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-14 h-full">
      <div className="flex flex-col justify-end overflow-y-scroll">
        {[...Array(110)].map((_, i) => (
          <ChatBubble key={i} />
        ))}
      </div>
    </div>
  )
}

export default ChatContainer
