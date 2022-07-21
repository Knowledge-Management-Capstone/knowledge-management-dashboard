import { useState } from 'react'
import { PlusSmIcon } from '@heroicons/react/outline'

import BaseIconButton from '~/components/generic/button/BaseIconButton'
import DashboardLayout from '~/layouts/DashboardLayout'
import ProposalModal from './components/ProposalModal'
import ProposalTable from './components/ProposalTable'

const RepositoryProlosal = () => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Pengajuan Repository
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ProposalTable />
          <ProposalModal
            title="Add Repository"
            open={openDialog}
            setOpen={setOpenDialog}
            handleSubmit={console.log}
          />
          <div className="flex mt-3 px-8 justify-end">
            <BaseIconButton onClick={() => setOpenDialog(true)}>
              <PlusSmIcon className="h-6 w-6" aria-hidden="true" />
            </BaseIconButton>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default RepositoryProlosal
