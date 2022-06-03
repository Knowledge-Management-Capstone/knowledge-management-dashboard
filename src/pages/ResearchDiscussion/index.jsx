import ChatInput from './components/ChatInput'
import DashboardLayout from '~/layouts/DashboardLayout'
import DiscussionHeader from './components/DiscussionHeader'

const RepositoryDiscussion = () => {
  return (
    <DashboardLayout>
      <div className="py-6 relative">
        <DiscussionHeader />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ChatInput />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default RepositoryDiscussion
