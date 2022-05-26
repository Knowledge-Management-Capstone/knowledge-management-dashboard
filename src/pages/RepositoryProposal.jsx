import DashboardLayout from '../layouts/DashboardLayout'
import ProposalTable from '../components/proposal/ProposalTable'
import AddRepository from '../components/proposal/AddRepository'

const RepositoryProposal = () => {
  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Ajukan Repository
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ProposalTable />
          <AddRepository />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default RepositoryProposal
