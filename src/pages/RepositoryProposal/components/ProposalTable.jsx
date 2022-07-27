import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

import { teamList } from '~/store/actions/teamActions'

import BaseTable from '~/components/generic/table/BaseTable'
import BaseTableItem from '~/components/generic/table/BaseTableItem'
import ProposalModal from './ProposalModal'

const header = ['Title', 'Status', 'Actions']

const ProposalTable = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedProposal, setSelectedProposal] = useState(null)

  const dispatch = useDispatch()

  const { user } = useSelector(state => state.userLogin)
  const { teams } = useSelector(state => state.teamList)

  useEffect(() => {
    dispatch(teamList(user._id))
  }, [dispatch, user])

  const handleEdit = p => {
    const { repository, ...rest } = p
    repository.startDate = repository.startDate.slice(0, 10)
    repository.endDate = repository.endDate.slice(0, 10)
    setSelectedProposal({ ...repository, ...rest })
    setOpenDialog(true)
  }

  const handleDelete = () => {}

  const handleSubmit = values => {
    console.log(values)
    setOpenDialog(false)
  }

  return (
    <Fragment>
      <BaseTable header={header}>
        {teams &&
          teams.map(p => (
            <tr key={p._id}>
              <BaseTableItem className="font-medium">{p.name}</BaseTableItem>
              <BaseTableItem>
                <span
                  className={clsx(
                    'inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ',
                    {
                      'bg-blue-100 text-blue-800': p.status === 'pending',
                      'bg-yellow-100 text-yellow-800': p.status === 'updated',
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
                  onClick={() => handleEdit(p)}
                />
                <TrashIcon
                  className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-red-700"
                  onClick={() => handleDelete()}
                />
              </BaseTableItem>
            </tr>
          ))}
      </BaseTable>
      <ProposalModal
        title="Edit Repository"
        open={openDialog}
        setOpen={setOpenDialog}
        initialValues={selectedProposal}
        handleSubmit={handleSubmit}
      />
    </Fragment>
  )
}

export default ProposalTable
