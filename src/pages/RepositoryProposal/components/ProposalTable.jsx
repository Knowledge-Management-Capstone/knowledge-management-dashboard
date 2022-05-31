import { Fragment, useState } from 'react'
import clsx from 'clsx'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

import BaseTable from '~/components/generic/table/BaseTable'
import BaseTableItem from '~/components/generic/table/BaseTableItem'
import ProposalEditModal from './ProposalEditModal'

const header = ['Title', 'Status', 'Actions']
const proposal = [
  {
    _id: 1,
    title: 'Capstone Project',
    status: 'accepted'
  }
]

const ProposalTable = () => {
  const [openDialog, setOpenDialog] = useState(false)

  const handleEdit = () => {
    setOpenDialog(true)
  }
  const handleDelete = () => {}

  return (
    <Fragment>
      <BaseTable header={header}>
        {proposal &&
          proposal.map(p => (
            <tr key={p._id}>
              <BaseTableItem className="font-medium">{p.title}</BaseTableItem>
              <BaseTableItem>
                {' '}
                <span
                  className={clsx(
                    'inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ',
                    {
                      'bg-blue-100 text-blue-800': p.status === 'pending',
                      'bg-green-100 text-green-800': p.status === 'accepted',
                      'bg-red-100 text-red-800': !p.status === 'rejected'
                    }
                  )}
                >
                  {p.status}
                </span>
              </BaseTableItem>
              <BaseTableItem className="relative flex gap-2">
                <PencilAltIcon
                  className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-blue-700"
                  onClick={() => handleEdit()}
                />
                <TrashIcon
                  className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-red-700"
                  onClick={() => handleDelete()}
                />
              </BaseTableItem>
            </tr>
          ))}
      </BaseTable>
      <ProposalEditModal open={openDialog} setOpen={setOpenDialog} />
    </Fragment>
  )
}

export default ProposalTable
