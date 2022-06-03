import ChatInput from './components/ChatInput'
import DashboardLayout from '~/layouts/DashboardLayout'

const RepositoryDiscussion = () => {
  return (
    <DashboardLayout>
      <div className="py-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Diskusi</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ChatInput />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default RepositoryDiscussion
