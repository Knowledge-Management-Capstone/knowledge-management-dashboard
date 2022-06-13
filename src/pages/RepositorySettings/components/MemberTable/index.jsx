import { Fragment } from 'react'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

import BaseTable from '~/components/generic/table/BaseTable'
import BaseTableItem from '~/components/generic/table/BaseTableItem'

const header = ['Name', 'Faculty', 'Type', 'Role', 'Action']
const members = [
  {
    _id: 1,
    name: 'Dian Rahmaji',
    faculty: 'Engineering',
    type: 'Student',
    role: 'Backend Engineer'
  },
  {
    _id: 2,
    name: 'Dzakiy Harissalam',
    faculty: 'Engineering',
    type: 'Student',
    role: 'Frontend Engineer'
  }
]

const MemberTable = () => {
  return (
    <Fragment>
      <h2 className="mt-3 text-xl font-medium">Research Member</h2>
      <BaseTable header={header}>
        {members &&
          members.map(m => (
            <tr key={m._id}>
              <BaseTableItem>{m.name}</BaseTableItem>
              <BaseTableItem>{m.faculty}</BaseTableItem>
              <BaseTableItem>{m.type}</BaseTableItem>
              <BaseTableItem>{m.role}</BaseTableItem>
              <BaseTableItem className="relative flex gap-2">
                <PencilAltIcon
                  className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-blue-700"
                  onClick={() => handleEdit(r)}
                />
                <TrashIcon
                  className="h-6 w-6 text-gray-400 rounded-md hover:cursor-pointer hover:text-red-700"
                  onClick={() => {}}
                />
              </BaseTableItem>
            </tr>
          ))}
      </BaseTable>
    </Fragment>
  )
}

export default MemberTable
