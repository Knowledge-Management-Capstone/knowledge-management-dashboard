import { useSelector } from 'react-redux'

import DashboardLayout from '~/layouts/DashboardLayout'
import MemberTable from './components/MemberTable'
import RepositoryDetails from './components/RepositoryDetails'

const RepositorySettings = () => {
  const teamDetail = useSelector(({ selectedTeamId, acceptedTeams }) => {
    console.log(acceptedTeams.data.find(({ _id }) => _id === selectedTeamId))
    return acceptedTeams.data.find(({ _id }) => _id === selectedTeamId)
  })

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-lg font-medium text-gray-900">
            Pengaturan Repository
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {teamDetail && (
            <>
              <RepositoryDetails detail={teamDetail} />
              <MemberTable
                administrator={teamDetail.administrator}
                members={teamDetail.members}
                teamDetail={teamDetail}
                setTeamDetail={() => {}}
              />
              <pre>{JSON.stringify(teamDetail, null, 2)}</pre>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default RepositorySettings
