import { Fragment, useState } from 'react'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

import BaseTable from '~/components/generic/table/BaseTable'
import BaseTableItem from '~/components/generic/table/BaseTableItem'
import MemberEditModal from './MemberEditModal'

const header = ['Name', 'Faculty', 'Type', 'Role', 'Action']
const members = [
  {
    _id: 1,
    fullName: 'Dian Rahmaji',
    faculty: 'Engineering',
    type: 'Student',
    role: 'backend'
  },
  {
    _id: 2,
    fullName: 'Dzakiy Harissalam',
    faculty: 'Engineering',
    type: 'Student',
    role: 'frontend'
  }
]

const MemberTable = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)

  const handleEdit = m => {
    setSelectedMember(m)
    setOpenDialog(true)
  }
  return (
    <Fragment>
      <h2 className="mt-3 text-xl font-medium">Research Member</h2>
      <BaseTable header={header}>
        {members &&
          members.map(m => (
            <tr key={m._id}>
              <BaseTableItem>{m.fullName}</BaseTableItem>
              <BaseTableItem>{m.faculty}</BaseTableItem>
              <BaseTableItem>{m.type}</BaseTableItem>
              <BaseTableItem>{m.role}</BaseTableItem>
              <BaseTableItem className="relative flex gap-2">
                <PencilAltIcon
                  className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-blue-700"
                  onClick={() => handleEdit(m)}
                />
                <TrashIcon
                  className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-red-700"
                  onClick={() => {}}
                />
              </BaseTableItem>
            </tr>
          ))}
      </BaseTable>
      <MemberEditModal
        open={openDialog}
        setOpen={setOpenDialog}
        initialValues={selectedMember}
      />
    </Fragment>
  )
}

export default MemberTable
